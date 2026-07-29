"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BookDirectoryTree } from "@/components/Books/BookDirectory";
import {
  extractHeadings,
  TableOfContents,
} from "@/components/mdx/TableOfContents";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

import { ReadingProgress } from "./ReadingProgress";

interface MobileTOCProps {
  content: string;
  bookItems?: unknown[];
  currentSlug?: string;
}

export function MobileTOC({
  content,
  bookItems = [],
  currentSlug = "",
}: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasBooks = bookItems && bookItems.length > 0;
  const [activeTab, setActiveTab] = useState<"book" | "toc">("toc");
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const pathname = usePathname();
  const isChinese = pathname.startsWith("/zh");

  useEffect(() => {
    const extracted = extractHeadings(content);
    setHeadings(extracted);
  }, [content]);

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

  if (headings.length === 0 && !hasBooks) {
    return null;
  }

  const renderContent = () => {
    if (!hasBooks || activeTab === "toc") {
      if (headings.length === 0) {
        return (
          <div className="p-4 text-center text-sm text-muted-foreground">
            No headings found.
          </div>
        );
      }
      return (
        <div className="animate-in fade-in slide-in-from-left-4 duration-300">
          {hasBooks && (
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

    if (activeTab === "book") {
      return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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
      {/* Floating TOC Button */}
      <div className="fixed bottom-6 right-6 z-50 xl:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="sm"
          className={cn(
            "h-12 w-12 rounded-full border border-border/50 shadow-xl backdrop-blur-xl transition-all",
            isOpen
              ? "bg-primary text-primary-foreground"
              : "bg-background/90 text-foreground",
          )}
          aria-label={
            hasBooks
              ? "Toggle Menu"
              : isChinese
                ? "切换目录"
                : "Toggle table of contents"
          }
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
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 xl:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-80 max-w-[85vw] transform border-l border-border/50 bg-background shadow-2xl transition-transform duration-300 ease-out xl:hidden",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex flex-col border-b border-border/50 bg-muted/30">
              <div className="flex items-center justify-between p-4 pb-2">
                <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                  {!hasBooks ? (
                    <>
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
                          d="M4 6h16M4 10h16M4 14h16M4 18h16"
                        />
                      </svg>
                      {isChinese ? "目录" : "Table of Contents"}
                    </>
                  ) : (
                    <span>{isChinese ? "导航" : "Navigation"}</span>
                  )}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                  aria-label={
                    isChinese ? "关闭目录" : "Close table of contents"
                  }
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

              {/* Tabs: only when book items present */}
              {hasBooks && (
                <div className="flex gap-2 p-2 pt-0">
                  <button
                    onClick={() => setActiveTab("book")}
                    className={cn(
                      "flex-1 rounded-md py-1.5 text-sm font-medium transition-all",
                      activeTab === "book"
                        ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
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
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                    )}
                    disabled={headings.length === 0}
                  >
                    {isChinese ? "本页" : "Page"}
                  </button>
                </div>
              )}
            </div>

            {/* Reading Progress */}
            <div className="border-t border-border/50 bg-background/50 p-4 backdrop-blur">
              <ReadingProgress />
            </div>

            {/* Content */}
            <div className="scrollbar-thin flex-1 overflow-y-auto p-4">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
