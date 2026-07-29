import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateProjectJsonLd } from "@/app/jsonld";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { MobileTOC } from "@/components/shared/MobileTOC";
import { getContent } from "@/lib/content";
import { generateContentMetadata } from "@/lib/metadata";
import { jsonldScript } from "@/lib/utils";

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  return generateContentMetadata("projects", params.slug);
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
