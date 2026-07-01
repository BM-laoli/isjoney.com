import { NextRequest, NextResponse } from "next/server";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

// 中文版可用的页面白名单
const zhAvailablePages = new Set([
  "/zh",
  "/zh/",
  "/zh/not-available", // 提示页本身要放行
  // 以后添加中文页面在这里加
]);

export type Locale = (typeof i18n)["locales"][number];

// 语言 cookie 名称
export const LOCALE_COOKIE = "NEXT_LOCALE";

// 从 Accept-Language 头解析首选语言
function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("Accept-Language");
  if (!acceptLanguage) return i18n.defaultLocale;

  // 解析 Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, priority] = lang.trim().split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(), // zh-CN -> zh
        priority: priority ? parseFloat(priority) : 1,
      };
    })
    .sort((a, b) => b.priority - a.priority);

  // 找到第一个支持的语言
  for (const { code } of languages) {
    if (i18n.locales.includes(code as Locale)) {
      return code as Locale;
    }
  }

  return i18n.defaultLocale;
}

// 从路径中提取 locale
function getLocaleFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  return i18n.locales.includes(segment as Locale) ? (segment as Locale) : null;
}



export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 1. 路径已有 locale 前缀 → 检查并处理
  const pathLocale = getLocaleFromPath(pathname);
  if (pathLocale) {
    if (pathLocale === "zh" && !zhAvailablePages.has(pathname)) {
      // 中文页面不存在，直接重定向到中文首页
      return NextResponse.redirect(new URL("/zh", request.url));
    }

    // 如果用户显式访问 /en，记住 EN 偏好
    if (pathLocale === i18n.defaultLocale) {
      const response = NextResponse.next();
      response.cookies.set(LOCALE_COOKIE, i18n.defaultLocale, {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        sameSite: "lax",
      });
      return response;
    }

    // 用户访问 /zh/...，记住 ZH 偏好
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, pathLocale, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      sameSite: "lax",
    });

    return response;
  }

  // 2. 路径无 locale 前缀 → 检查用户偏好
  const rawCookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const cookieLocale = rawCookieLocale && i18n.locales.includes(rawCookieLocale as Locale)
    ? (rawCookieLocale as Locale)
    : undefined;

  // 首次访问：始终默认 EN（英文为主），不根据浏览器语言自动跳转
  // 用户可通过页面上的语言切换按钮手动选择中文

  // 3. 用户之前选择了非默认语言 → 重定向
  if (cookieLocale && cookieLocale !== i18n.defaultLocale) {
    const targetPath = `/${cookieLocale}${pathname}`;
    if (cookieLocale === "zh" && !zhAvailablePages.has(targetPath)) {
      // 目标中文页面不存在，走默认语言
      return NextResponse.rewrite(
        new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
      );
    }

    const url = new URL(targetPath, request.url);
    return NextResponse.redirect(url);
  }

  // 4. 默认语言 → rewrite（URL 保持干净）
  return NextResponse.rewrite(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，排除：
     * - api 路由
     * - _next 静态资源
     * - 静态文件（图片、字体等）
     * - sitemap、robots 等 SEO 文件
     */
    "/((?!api|_next/static|_next/image|manifest|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|pdf|xml|txt|json|webmanifest|woff|woff2|ttf|eot)).*)",
  ],
};