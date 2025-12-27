import { generateProjectsJsonLd } from "@/app/jsonld"; // 假设你有类似的 generateBooksJsonLd，如果没有可以用通用的
import { ProjectCard } from "@/components/portfolio/ProjectsSection/ProjectCard";
import { BlurFade } from "@/components/ui/BlurFade";
import { BLUR_FADE_DELAY, DATA } from "@/data";
import { getContentList } from "@/lib/content";
import { jsonldScript } from "@/lib/utils";
import { Key } from "react";

// 页面元数据
export const metadata = {
  title: "Books",
  description: "My reading list and notes.",
};


export default async function BooksPage() {
  // 1. 获取 books 数据
  // const books = await getContentList('books');
 const books = DATA.books.booksList as any;
  
  // 2. 生成结构化数据 (SEO) - 这里复用项目的逻辑或替换为 Book 专用的
  const booksJsonLd = generateProjectsJsonLd(books); 

  return (
    <section className="pt-16 pb-12 sm:pt-24 sm:pb-14 md:pt-32 md:pb-16 lg:pt-36 xl:pt-40">
      {jsonldScript(booksJsonLd)}
      
      {/* 
         Title Section 
         注意：为了和下面的 Grid 对齐，这里也调整为 max-w-6xl 
      */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-4 text-3xl font-semibold tracking-tighter md:text-4xl">
            Books
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl text-sm md:text-base">
            {/* 假设 DATA 中没有 bookInfo，这里可以写死或者扩展 DATA 结构 */}
            这里是我阅读过的书籍整理，包含技术文档、设计理念以及一些有趣的杂书。
          </p>
        </BlurFade>
      </div>

      {/* 
         Grid Section 
         核心修改：max-w-6xl 配合 lg:grid-cols-3 
      */}
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {books.map((book: { slug: Key | null | undefined; metadata: { href: string | undefined; title: string; summary: string; status: string; tags: any; image: string | undefined; video: string | undefined; links: readonly { icon: React.ReactNode; type: string; href: string; }[] | undefined; authors: string | undefined; }; }, id: number) => (
            <BlurFade delay={BLUR_FADE_DELAY * (2 + id)} key={book.slug}>
              {/* 
                 我们直接复用 ProjectCard 
                 根据 Books 的特点，我们可以这样映射字段：
                 - title -> 书名
                 - summary -> 简介/作者
                 - tech -> 标签 (Tags/Genre)
                 - image -> 封面图
              */}
              <ProjectCard
                 href={book.metadata.href}
                  title={book.metadata.title}
                  description={book.metadata.summary}
                  dates={book.metadata.status}
                  tags={book.metadata.tags || []}
                  image={book.metadata.image}
                  video={book.metadata.video}
                  links={book.metadata.links}
                  authors={book.metadata.authors}
                />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
