"use client";

import { useEffect, useState } from "react";

interface ReadingProgressProps {
  label?: string;
  compact?: boolean;
}

export function ReadingProgress({
  label = "阅读进度",
  compact = false,
}: ReadingProgressProps) {
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
    <div className={compact ? "space-y-1.5" : "space-y-2"}>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className={compact ? undefined : "font-medium"}>
          {Math.round(progress)}%
        </span>
      </div>
      <div
        className={`w-full overflow-hidden rounded-full bg-muted ${compact ? "h-1" : "h-1.5"}`}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
