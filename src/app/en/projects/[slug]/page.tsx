import { notFound } from "next/navigation";

import { MdxContent } from "@/components/mdx/MdxContent";
import { ContentDetailHeader } from "@/components/shared/ContentDetailHeader";
import { getAllSlugs, getContent } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getAllSlugs("projects");
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getContent("projects", slug);

  if (!project) notFound();

  const { metadata, html } = project;

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
