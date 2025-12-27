import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

interface Props {
  slug: string;
  title: string;
  summary: string;
  tech?: string[];
  status?: string;
  image?: string;
  video?: string; // 新增 video 参数
}

export function ProjectCard({ slug, title, summary, tech, status, image, video }: Props) {
  return (
    <Link href={`/projects/${slug}`} className="block cursor-pointer">
      <Card className="flex flex-col overflow-hidden border transition-all hover:shadow-md sm:flex-row h-full">
        {/* 左侧：缩略图区域 */}
        {/* 注意：这里添加了 h-48 sm:h-auto 以确保在移动端有高度，同时在桌面端自适应 */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden bg-muted sm:h-auto sm:w-48 md:w-56">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            // 如果没有图片也没有视频，显示占位块
            <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground">
              <span className="text-sm">No Media</span>
            </div>
          )}
        </div>

        {/* 右侧：内容区域 */}
        <div className="flex flex-1 flex-col justify-between">
          <CardHeader className="p-4 pb-2">
            <div className="flex items-start justify-between gap-2">
              <CardTitle className="text-lg font-bold">{title}</CardTitle>
              {status && (
                <Badge variant="outline" className="shrink-0 text-[10px] uppercase">
                  {status}
                </Badge>
              )}
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {summary}
            </p>
          </CardHeader>
          
          <CardContent className="p-4 pt-0">
            {tech && tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1">
                {tech.map((t) => (
                  <div
                    key={t}
                    className="rounded-md bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}