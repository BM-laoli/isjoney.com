// app/projects/[slug]/layout.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { generateProjectJsonLd } from "@/app/jsonld";
import { DATA } from "@/data";
import { jsonldScript } from "@/lib/utils";
import {  getBooksContent, getContent } from "@/lib/content";
import { TableOfContents } from "@/components/mdx/TableOfContents";
import { MobileTOC } from "@/components/Books/MobileTOC";
import { BookDirectoryTree } from "@/components/Books/BookDirectory";

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


export default async function BooksLayout(props: {
  children: React.ReactNode;
  params: Promise<{
      slug: string;        // 必须匹配文件夹 [slug]   
      chapterSlug: string; // 必须匹配文件夹 [chapterSlug]
  }>;
}) {
  const params = await props.params;
  
  // 1. 调用函数获取 MDX 解析后的数据  
  const bookPage = await getBooksContent(params.slug, params.chapterSlug);  
  // 2. 从 metadata 中提取 keyId，用于关联全局配置  
  const { keyId } = bookPage?.metadata || {};
  // 3.获取books目录数据
  // @ts-ignore
  const directoryTree = DATA.books.booksContent[keyId];
  if(!bookPage){
    notFound();
  }

  return (
    <section
      id="book-layout"
      className="relative min-h-screen pt-16 sm:pt-24"
    >
      {/* {jsonldScript(generateProjectJsonLd(bookPage))} */}

      {/* =========================================================
          Region 1: 左侧书籍目录 (Book Directory) - 对应 Screenshot 1 左侧
          ---------------------------------------------------------
          显示逻辑: 在 xl 屏幕以上显示，固定在左侧
      ========================================================== */}
      <aside className="fixed top-24 left-0 z-20 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto border-r border-gray-100 bg-background px-6 pb-10 dark:border-zinc-800 xl:block">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          目录
        </h3>
        {/* 传入全局数据 UE 字段 */}
        <BookDirectoryTree items={directoryTree} currentSlug={params.slug} />
      </aside>

      {/* =========================================================
          Region 2: 右侧文章大纲 (Article TOC) - 对应 Screenshot 1 右侧
          ---------------------------------------------------------
          显示逻辑: 在 2xl 屏幕以上显示 (或者你可以改为 xl，取决于空间)
          注意：这里复用了你原来的 TableOfContents 组件
      ========================================================== */}
      <aside className="fixed top-24 right-0 z-20 hidden h-[calc(100vh-6rem)] w-64 overflow-y-auto px-6 pb-10 2xl:block">
        <div className="text-sm">
           <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
             本页内容
           </h3>
           <TableOfContents headings={bookPage?.headings} />
        </div>
      </aside>

      {/* =========================================================
          Region 3: 中间内容区 (Content)
          ---------------------------------------------------------
          核心布局技巧:
          - xl:pl-72  -> 为左侧 Sidebar 留出空间 (64 + gap)
          - 2xl:pr-72 -> 为右侧 TOC 留出空间
      ========================================================== */}
      <main className="mx-auto max-w-3xl px-4 md:px-6 xl:ml-72 xl:mx-0 xl:max-w-4xl 2xl:mr-72 2xl:max-w-none 2xl:flex 2xl:justify-center">
        {/* 为了在 2xl 屏幕下让内容居中于剩余空间，我们在上面加了 flex justify-center */}
        <div className="w-full min-w-0 max-w-3xl">
          
          {/* 移动端 TOC (在原来的 ProjectLayout 里也有) */}
          <MobileTOC 
          content={bookPage.html}
           bookItems={directoryTree} // 传入整本书的结构 
           currentSlug={params.slug}      // 传入当前页面的 slug
          />
          
          {/* 渲染具体的 page.tsx 内容 */}
          {props.children}
        </div>
      </main>

    </section>
  );
}
