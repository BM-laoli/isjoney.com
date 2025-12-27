"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { BookDirectoryTree } from "./BookDirectory";
import { extractHeadings, TableOfContents } from "../mdx/TableOfContents";
// 引入你的其他组件


interface MobileTOCProps {
  content: string;            // 文章内容，用于生成 TOC
  bookItems?: any[];          // 书籍目录结构数据
  currentSlug?: string;       // 当前页面的 Slug，用于高亮书籍目录
}

export function MobileTOC({ content, bookItems = [], currentSlug = "" }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // 判断是否是“书籍模式”
  const hasBooks = bookItems && bookItems.length > 0;

  // 默认 Tab：如果有书，默认看书目录？还是看当前大纲？
  // 这里设置为：如果有书，且当前文章有大纲，默认看大纲(toc)。用户想看其他章节再切(book)。
  const [activeTab, setActiveTab] = useState<"book" | "toc">("toc");

  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");

  // 1. 解析 headings
  useEffect(() => {
    // 使用你原本真实的解析逻辑
    const extracted = extractHeadings(content);
    setHeadings(extracted);
  }, [content]);

  // 2. 锁定滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // 3. 空状态检查：既没书目录，也没文章目录，就不渲染按钮
  if (headings.length === 0 && !hasBooks) {
    return null;
  }

  // 渲染内容辅助函数
  const renderContent = () => {
    // 场景 A：普通文章（或者在书籍模式下切到了 TOC Tab）
    if (!hasBooks || activeTab === "toc") {
       if (headings.length === 0) {
         return <div className="p-4 text-sm text-muted-foreground text-center">No headings found.</div>;
       }
       return (
        <div className="animate-in fade-in slide-in-from-left-4 duration-300">
           {/* 如果是书籍模式，加一个小标题区分，普通模式不需要 */}
           {hasBooks && (
             <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
               On This Page
             </h3>
           )}
           <TableOfContents
             headings={headings}
             hideTitle={true}
             onItemClick={() => setIsOpen(false)}
           />
        </div>
       );
    }

    // 场景 B：书籍目录 Tab
    if (activeTab === "book") {
      return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
           <h3 className="mb-3 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
             Directory
           </h3>
           <BookDirectoryTree 
              items={bookItems} 
              currentSlug={currentSlug} 
              onItemClick={() => setIsOpen(false)} 
           />
        </div>
      );
    }
  };


  return (
    <>
      {/* 悬浮按钮 (保持不变) */}
      <div className="fixed bottom-6 right-6 z-50 xl:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className={cn(
            "h-12 w-12 rounded-full border border-border/50 shadow-xl backdrop-blur-xl transition-all",
            isOpen ? "bg-primary text-primary-foreground" : "bg-background/90 text-foreground"
          )}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
             <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </Button>
      </div>

      {/* 遮罩层 */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-80 max-w-[85vw] transform border-l border-border/50 bg-background shadow-2xl transition-transform duration-300 ease-out xl:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col">
            
            {/* --- HEADER 区域：这是核心修改点 --- */}
            <div className="flex flex-col border-b border-border/50 bg-muted/30">
              
              {/* 1. 顶部：标题 + 关闭 */}
              <div className="flex items-center justify-between p-4 pb-2">
                <span className="font-semibold text-lg tracking-tight flex items-center gap-2">
                  {/* 如果是普通文章，显示"Table of Contents"，如果是书，显示"Navigation" */}
                  {!hasBooks ? (
                    <>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                      {isChinese ? "目录" : "Table of Contents"}
                    </>
                  ) : (
                    <span>{isChinese ? "导航" : "Navigation"}</span>
                  )}
                </span>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                   <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
              </div>

              {/* 2. Tabs 控制器：只在有 bookItems 时渲染！ */}
              {hasBooks && (
                <div className="flex p-2 pt-0 gap-2">
                   <button
                     onClick={() => setActiveTab("book")}
                     className={cn(
                       "flex-1 rounded-md py-1.5 text-sm font-medium transition-all",
                       activeTab === "book" 
                         ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10" 
                         : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                     )}
                   >
                     {isChinese ? "全书" : "Book"}
                   </button>
                   <button
                     onClick={() => setActiveTab("toc")}
                     className={cn(
                       "flex-1 rounded-md py-1.5 text-sm font-medium transition-all",
                       activeTab === "toc" 
                         ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10" 
                         : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                     )}
                     disabled={headings.length === 0}
                   >
                     {isChinese ? "本页" : "Page"}
                   </button>
                </div>
              )}
            </div>
            
            {/* --- FOOTER 进度条 --- */}
            <div className="border-t border-border/50 p-4 bg-background/50 backdrop-blur">
              <MobileReadingProgress />
            </div>

            {/* --- BODY 内容区域 --- */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function MobileReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>阅读进度</span>
        <span className="font-medium">{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
