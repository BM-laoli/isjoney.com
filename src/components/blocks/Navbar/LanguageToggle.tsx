"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { LOCALE_COOKIE } from "@/middleware";

export function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isChinese = pathname.startsWith("/zh");

  const handleLanguageToggle = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isChinese) {
      // 切换到英文：设置 cookie 为 en，覆盖浏览器语言自动检测
      document.cookie = `${LOCALE_COOKIE}=en; path=/; max-age=31536000; samesite=lax`;
      const targetUrl = pathname.replace("/zh", "") || "/";
      router.push(targetUrl);
    } else {
      // 切换到中文：设置 cookie，始终跳转到中文首页
      document.cookie = `${LOCALE_COOKIE}=zh; path=/; max-age=31536000; samesite=lax`;
      router.push("/zh");
    }
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
      onClick={handleLanguageToggle}
      aria-label="Toggle language"
    >
      <span className="text-sm font-medium">{isChinese ? "中" : "EN"}</span>
    </Button>
  );
}
