import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx/MdxContent";
import { ContentDetailHeader } from "@/components/shared/ContentDetailHeader";
import { getBooksContent } from "@/lib/content";

export default async function BookChapterPage({
  params,
}: {
  params: Promise<{
    slug: string;
    chapterSlug: string;
  }>;
}) {
  const { slug, chapterSlug } = await params;
  const bookPage = await getBooksContent(slug, chapterSlug);

  if (!bookPage) notFound();

  const { metadata, html } = bookPage;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 md:px-10">
      <ContentDetailHeader
        title={metadata.title}
        date={metadata.date}
        github={metadata.github}
        demo={metadata.demo}
        arxiv={metadata.arxiv}
        paper={metadata.paper}
        tech={metadata.tech}
      />
      <div className="prose dark:prose-invert">
        <MdxContent html={html} />
      </div>
    </div>
  );
}
