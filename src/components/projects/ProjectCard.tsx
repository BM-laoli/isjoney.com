// components/projects/project-card.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

interface ProjectCardProps {
  slug: string;
  title: string;
  summary?: string;
  tech?: string[];
  status?: string;
}

export function ProjectCard({ slug, title, summary, tech, status }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h2 className="text-lg font-semibold tracking-tight group-hover:underline sm:text-xl">
            {title}
          </h2>
          {summary && (
            <p className="text-muted-foreground text-sm line-clamp-2">
              {summary}
            </p>
          )}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tech.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          )}
        </div>
        {status && (
          <Badge variant="outline" className="shrink-0">
            {status}
          </Badge>
        )}
      </div>
    </Link>
  );
}