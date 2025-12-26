"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TocItem extends Heading {
  children: TocItem[];
}

interface TableOfContentsProps {
  headings: Heading[];
  hideTitle?: boolean;
  onItemClick?: () => void;
}

// 将扁平的 headings 转换为嵌套的树结构
function buildTocTree(headings: Heading[]): TocItem[] {
  const root: TocItem[] = [];
  const stack: TocItem[] = [];

  headings.forEach((heading) => {
    const item: TocItem = { ...heading, children: [] };

    while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(item);
    } else {
      stack[stack.length - 1].children.push(item);
    }

    stack.push(item);
  });

  return root;
}

// 检查是否有激活的子项
function hasActiveDescendant(item: TocItem, activeId: string): boolean {
  if (item.id === activeId) return true;
  return item.children.some((child) => hasActiveDescendant(child, activeId));
}

// 递归渲染 TOC 项
function TocItems({
  items,
  activeId,
  depth = 0,
  onItemClick,
}: {
  items: TocItem[];
  activeId: string;
  depth?: number;
  onItemClick?: () => void;
}) {
  if (!items.length) return null;

  return (
    <ul
      className={cn(
        "space-y-1",
        depth > 0 && "ml-3 mt-1 border-l border-border/50 pl-3"
      )}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;
        const hasActiveChild = hasActiveDescendant(item, activeId);

        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={onItemClick}
              className={cn(
                "group flex items-center gap-2 py-1 text-muted-foreground transition-colors hover:text-foreground",
                isActive && "font-medium text-primary",
                hasActiveChild && !isActive && "text-foreground/80"
              )}
            >
              <span
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                  isActive
                    ? "bg-primary"
                    : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
                )}
              />
              <span className="truncate">{item.text}</span>
            </a>

            {item.children.length > 0 && (
              <TocItems
                items={item.children}
                activeId={activeId}
                depth={depth + 1}
                onItemClick={onItemClick}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

// 阅读进度指示器
function ReadingProgress() {
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
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>阅读进度</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export function TableOfContents({
  headings,
  hideTitle = false,
  onItemClick,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  const tocTree = useMemo(() => buildTocTree(headings), [headings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr
          );
          setActiveId(topEntry.target.id);
        }
      },
      { rootMargin: "-80px 0px -80% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav className="w-full text-sm xl:w-56">
      {!hideTitle && (
        <h4 className="mb-4 flex items-center gap-2 font-semibold text-foreground">
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
          目录
        </h4>
      )}

      <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 scrollbar-thin">
        <TocItems items={tocTree} activeId={activeId} onItemClick={onItemClick} />
      </div>

      {!hideTitle && (
        <div className="mt-4 border-t border-border pt-3">
          <ReadingProgress />
        </div>
      )}
    </nav>
  );
}

// 辅助函数：从 HTML 内容中提取 headings
export function extractHeadings(content: string): Heading[] {
  if (typeof window === "undefined") return [];

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const elements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

  const headings: Heading[] = [];
  elements.forEach((el) => {
    const id = el.getAttribute("id");
    const text = el.textContent?.trim();
    const level = parseInt(el.tagName.charAt(1), 10);

    if (id && text) {
      headings.push({ id, text, level });
    }
  });

  return headings;
}