import { notFound } from "next/navigation";
import Link from "next/link";
import { getContent, getAllSlugs, getBooksContent } from "@/lib/content";
import { MdxContent } from "@/components/mdx/MdxContent";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { Badge } from "@/components/ui/Badge";
import { Suspense } from "react";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getAllSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ 
    slug: string;        // 必须匹配文件夹 [slug]   
    chapterSlug: string; // 必须匹配文件夹 [chapterSlug]
   }>;
}) {
  const { slug,chapterSlug } = await params;
  const bookPage = await getBooksContent(slug, chapterSlug);  

  if (!bookPage) notFound();

  const { metadata, html, headings } = bookPage;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 md:px-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        {/* <p className="text-muted-foreground mb-4">{metadata.date}</p> */}
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-muted-foreground mb-4" >
            {formatDate(metadata.date)}
          </p>
        </Suspense>

        {/* 链接 */}
        <div className="flex gap-3 mb-4 text-sm">
          {metadata.github && <Link href={metadata.github} className="underline">[GitHub]</Link>}
          {metadata.demo && <Link href={metadata.demo} className="underline">[Demo]</Link>}
          {metadata.arxiv && <Link href={metadata.arxiv} className="underline">[arXiv]</Link>}
          {metadata.paper && <Link href={metadata.paper} className="underline">[Paper]</Link>}
        </div>

        {/* 技术栈 */}
        <div className="flex flex-wrap gap-2">
          {metadata.tech?.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </header>
      <div className="prose dark:prose-invert">
        <MdxContent html={html} />
      </div>
    </div>
  );
}
