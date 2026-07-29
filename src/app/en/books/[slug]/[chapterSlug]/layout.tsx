import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookDirectoryTree } from "@/components/Books/BookDirectory";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { MobileTOC } from "@/components/shared/MobileTOC";
import { DATA } from "@/data";
import { getBooksContent } from "@/lib/content";
import { generateContentMetadata } from "@/lib/metadata";

export async function generateMetadata(props: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  return generateContentMetadata("projects", params.slug);
}

export default async function BooksLayout(props: {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
    chapterSlug: string;
  }>;
}) {
  const params = await props.params;

  const bookPage = await getBooksContent(params.slug, params.chapterSlug);
  const { keyId } = bookPage?.metadata || {};
  // @ts-expect-error dynamic key access on booksContent
  const directoryTree = DATA.books.booksContent[keyId];
  if (!bookPage) {
    notFound();
  }

  return (
    <section
      id="book-layout"
      className="relative min-h-screen pt-16 sm:pt-24"
    >
      {/* Left sidebar: Book Directory (xl+) */}
      <aside className="fixed top-24 left-0 z-20 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto border-r border-gray-100 bg-background px-6 pb-10 dark:border-zinc-800 xl:block">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          目录
        </h3>
        <BookDirectoryTree items={directoryTree} currentSlug={params.slug} />
      </aside>

      {/* Right sidebar: Article TOC (2xl+) */}
      <aside className="fixed top-24 right-0 z-20 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto px-6 pb-10 2xl:block">
        <div className="text-sm">
          <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
            本页内容
          </h3>
          <TableOfContents headings={bookPage?.headings} />
        </div>
      </aside>

      {/* Main content area */}
      <main className="mx-auto max-w-3xl px-4 md:px-6 xl:ml-72 xl:mx-0 xl:max-w-4xl 2xl:mr-72 2xl:max-w-none 2xl:flex 2xl:justify-center">
        <div className="w-full min-w-0 max-w-3xl">
          <MobileTOC
            content={bookPage.html}
            bookItems={directoryTree}
            currentSlug={params.slug}
          />
          {props.children}
        </div>
      </main>
    </section>
  );
}
