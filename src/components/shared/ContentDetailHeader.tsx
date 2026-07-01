import Link from "next/link";
import { Suspense } from "react";

import { Badge } from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface ContentDetailHeaderProps {
  title: string;
  date: string;
  github?: string;
  demo?: string;
  arxiv?: string;
  paper?: string;
  tech?: string[];
}

export function ContentDetailHeader({
  title,
  date,
  github,
  demo,
  arxiv,
  paper,
  tech,
}: ContentDetailHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <Suspense fallback={<p className="h-5" />}>
        <p className="text-muted-foreground mb-4">{formatDate(date)}</p>
      </Suspense>

      {/* Links */}
      <div className="mb-4 flex gap-3 text-sm">
        {github && (
          <Link href={github} className="underline">
            [GitHub]
          </Link>
        )}
        {demo && (
          <Link href={demo} className="underline">
            [Demo]
          </Link>
        )}
        {arxiv && (
          <Link href={arxiv} className="underline">
            [arXiv]
          </Link>
        )}
        {paper && (
          <Link href={paper} className="underline">
            [Paper]
          </Link>
        )}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {tech?.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>
    </header>
  );
}
