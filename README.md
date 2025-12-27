# Iamjoney Blog
Fork from https://github.com/zhengzangw/nextjs-portfolio-blog-research
Thk @hengzangw !

## 架构分析
### 目录结构

### 关键点 Middleware 
这个作用是  i18n 国际化路由中间件，实现"默认语言无前缀"的 URL 策略。
```shell
用户访问 URL          →  实际渲染路径
─────────────────────────────────────
/about               →  /en/about    (rewrite，URL 不变)
/zh/about            →  /zh/about    (直接通过)
/en/about            →  /en/about    (直接通过)

首次访问 /about
    ↓
浏览器语言是中文？
    ├─ 是 → 重定向到 /zh/about，设置 cookie
    └─ 否 → rewrite 到 /en/about

再次访问 /about
    ↓
检查 cookie
    ├─ cookie=zh → 重定向到 /zh/about
    └─ cookie=en 或无 → rewrite 到 /en/about
```

核心实现比较简单 关键是从 Accept-Language 解析 到语言
```ts
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
```
### 关键实现MDX渲染器
我们重新归纳和整理了一个渲染器，使他能够渲染 MD + Mared + DarwIo + 数学公式, 下面是核心方法 以及重点
```tsx
```
### 自适应到底是怎么实现的？



## TODO:


- [✅] rebuild - framework (Books+Porjects) Layout Category ,查最后一项：移动端适应 和 数据生成规则...(books 和project)
- [❎✅] hom page modify - footer discover 
- [❎] hom page modify - Selected Projects
- [❎] hom page modify - Last New
- [❎] hom page modify - pink Icon (Youtube + Bilili)


footer discover
*都单独挂一个页面介绍一下 然后 在页面上挂一个 外链 Links. 以上的内容也放到 Selected Projects 里去*
- 实况足球 - 
- Newegg Seller - 
- Newegg.com
- 游戏项目 -- 没做好
- App框架RN -- 没做好
- NestJs 项目 RBAC 项目重新用AI整理一下
- AI实现的

Selected Projects 要做两个一个是 自己的项目 一个是参与的项目

- 实况足球 - 
- Newegg Seller - 
- Newegg.com
- 游戏项目 -- 没做好

## 鸣谢
感谢由 aasd的提供的框架基础

## 开源
采取MIT ，欢迎fork 欢迎start！

## Blog 架构
有道理 这样话的 最好了 本地通过程序 只读这一个md文件 这一个路径
写完文档之后，用ci 去跑 job 这样就可以 直接更新了，不需要考验构建性能问题 和 nextjs 重新构建问题
