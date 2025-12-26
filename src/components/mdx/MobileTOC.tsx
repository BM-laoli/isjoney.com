"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { extractHeadings, TableOfContents } from "./TableOfContents";
import { Button } from "../ui/Button";

interface MobileTOCProps {
  content: string;
}

export function MobileTOC({ content }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");

  // 解析 headings
  useEffect(() => {
    const extracted = extractHeadings(content);
    setHeadings(extracted);
  }, [content]);

  // 锁定背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // 没有标题就不渲染
  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating TOC Button */}
      <div className="fixed bottom-6 right-6 z-50 xl:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className={cn(
            "h-12 w-12 rounded-full border border-border/50 shadow-xl shadow-black/10 backdrop-blur-xl transition-all dark:shadow-black/30",
            isOpen
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-background/90 text-foreground hover:bg-background/95"
          )}
          aria-label={isChinese ? "切换目录" : "Toggle table of contents"}
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </Button>
      </div>

      {/* Mobile TOC Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-80 max-w-[85vw] transform border-l border-border/50 bg-background/95 shadow-2xl shadow-black/20 backdrop-blur-xl transition-transform xl:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col">
            {/* Footer with reading progress */}
            <div className="border-t border-border/50 p-4 ">
              <MobileReadingProgress />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/50 p-4">
              <h2 className="flex items-center gap-2 text-lg font-medium tracking-wide text-foreground/90">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                {isChinese ? "目录" : "Table of Contents"}
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 text-foreground"
                aria-label={isChinese ? "关闭目录" : "Close table of contents"}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>

            {/* TOC Content */}
            <div className="flex-1 overflow-y-auto p-4">
              <TableOfContents
                headings={headings}
                hideTitle={true}
                onItemClick={() => setIsOpen(false)}
              />
            </div>

        
          </div>
        </div>
      </div>
    </>
  );
}

// Mobile 版阅读进度
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