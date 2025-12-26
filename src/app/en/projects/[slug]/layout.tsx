// app/projects/[slug]/layout.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateProjectJsonLd } from "@/app/jsonld";
import { DATA } from "@/data";
import { jsonldScript } from "@/lib/utils";
import { getContent } from "@/lib/content";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { MobileTOC } from "@/components/mdx/MobileTOC";

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const project = await getContent("projects", params.slug);

  if (!project) {
    return undefined;
  }

  const { title, summary: description, image } = project.metadata;

  return {
    title,
    description,
    alternates: {
      canonical: `${DATA.url}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${DATA.url}/projects/${project.slug}`,
      images: image ? [{ url: `${DATA.url}${image}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectLayout(props: {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}) {
  const params = await props.params;
  const project = await getContent("projects", params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section
      id="project"
      className="pt-16 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 xl:pt-40"
    >
      {jsonldScript(generateProjectJsonLd(project))}

      {/* Desktop Table of Contents - Fixed on the left side */}
      <div className="fixed top-32 left-6 z-10 hidden xl:block">
          <TableOfContents headings={project.headings} />
      </div>

      {/* Mobile Table of Contents */}
      <MobileTOC content={project.html} />

      {props.children}
    </section>
  );
}