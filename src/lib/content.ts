import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";


export interface ContentMetadata {
  title: string;
  date: string;
  summary: string;
  cover?: string;
  tags?: string[];
  // 项目特有
  status?: "completed" | "in-progress" | "archived";
  tech?: string[];
  github?: string;
  demo?: string;
  arxiv?: string;
  paper?: string;
  keyId?: string; // 书籍专属字段，用于关联 DATA 中的 booksContent Key (例如 "Interview") 
  [key: string]: unknown;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface ContentItem {
  slug: string;
  metadata: ContentMetadata;
  content: string;
  html: string;
  headings: Heading[];
}

export type ContentType = "blog" | "projects" | 'books';


const CONTENT_DIR = path.join(process.cwd(), "content");

// 读取 .drawio 文件并转换为 base64 压缩格式 diagrams.net viewer 使用这种格式
function processDrawioFile(
  drawioPath: string,
  contentType: ContentType,
  slug: string
): string | null {
  // 支持相对路径 ./xxx.drawio 或 绝对路径 /projects/xxx.drawio
  let fullPath: string;

  if (drawioPath.startsWith("./")) {
    // 相对于当前 MDX 文件的目录
    fullPath = path.join(CONTENT_DIR, contentType, slug, drawioPath.slice(2));
  } else if (drawioPath.startsWith("/")) {
    // 相对于 content 目录
    fullPath = path.join(CONTENT_DIR, drawioPath.slice(1));
  } else {
    // 相对于当前 MDX 文件同名目录
    fullPath = path.join(CONTENT_DIR, contentType, slug, drawioPath);
  }

  if (!fs.existsSync(fullPath)) {
    console.warn(`DrawIO file not found: ${fullPath}`);
    return null;
  }

  const xml = fs.readFileSync(fullPath, "utf-8");
  return xml;
}


function getContentPath(type: ContentType): string {
  return path.join(CONTENT_DIR, type);
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
}

function extractHeadings(html: string): Heading[] {
  const headings: Heading[] = [];
  const regex = /<h([2-4])[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h[2-4]>/g;
  let match;

  while ((match = regex.exec(html)) !== null) {
    // 移除 HTML 标签，只保留文本
    const text = match[3].replace(/<[^>]+>/g, "").trim();
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text,
    });
  }

  return headings;
}


export async function markdownToHtml(
  markdown: string,
  contentType: ContentType,
  slug: string
): Promise<string> {
  // 预处理 mermaid
  const mermaidBlocks: string[] = [];
  let processed = markdown.replace(
    /```mermaid\n([\s\S]*?)```/g,
    (_, code) => {
      mermaidBlocks.push(code.trim());
      return `<!--mermaid:${mermaidBlocks.length - 1}-->`;
    }
  );

  // -------------------------------------------------------------
  // [新增逻辑 START] Books 专属：重写相对路径图片链接
  // -------------------------------------------------------------
  // 场景：MDX 中写了 ![图](./a.png) 
  // 目标：渲染为 src="/content/books/Interview/test/Resource/a.png"
  if (contentType === "books") {
    // 1. 处理 Markdown 图片语法: ![alt](./path)
    processed = processed.replace(
      /!\[([^\]]*)\]\(\.\/([^)]+)\)/g,
      (_, alt, src) => {
        // slug 在这里被传入为 "Interview/test" (书名/章节名)
        return `![${alt}](/content/books/${slug}/Resource/${src})`;
      }
    );

    // 2. 处理 HTML <img> 标签: src="./path"
    processed = processed.replace(
      /src=["']\.\/([^"']+)["']/g,
      `src="/content/books/${slug}/Resource/$1"`
    );
  }
  // -------------------------------------------------------------
  // [新增逻辑 END]
  // -------------------------------------------------------------

  // 预处理 drawio (保持原有逻辑)
  const drawioBlocks: { xml: string; id: string }[] = [];
  processed = processed.replace(
    /```drawio\n([\s\S]*?)```/g,
    (_, filePath) => {
      const trimmedPath = filePath.trim();
      const xml = processDrawioFile(trimmedPath, contentType, slug);
      if (xml) {
        const id = `drawio-${drawioBlocks.length}`;
        drawioBlocks.push({ xml, id });
        return `<!--drawio:${drawioBlocks.length - 1}-->`;
      }
      return `<div class="text-red-500">DrawIO file not found: ${trimmedPath}</div>`;
    }
  );

  // ... (unified 处理流程保持不变) ...
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      theme: 'dracula', 
      keepBackground: true,
      onVisitLine(node) {
        // 防止空行塌陷
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processed);

  let html = result.toString();

  // ... (恢复 mermaid 和 drawio 的逻辑保持不变) ...
  html = html.replace(
    /<!--mermaid:(\d+)-->/g,
    (_, idx) =>
      `<div class="mermaid-container" data-mermaid="${Buffer.from(
        mermaidBlocks[+idx]
      ).toString("base64")}"></div>`
  );

  html = html.replace(/<!--drawio:(\d+)-->/g, (_, idx) => {
    const { xml, id } = drawioBlocks[+idx];
    const encoded = Buffer.from(xml).toString("base64");
    return `<div class="drawio-container" data-drawio-xml="${encoded}" id="${id}"></div>`;
  });

  return html;
}

export async function getContent(
  type: ContentType,
  slug: string
): Promise<ContentItem | null> {
  const filePath = path.join(getContentPath(type), `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  const html = await markdownToHtml(content, type, slug);
  const headings = extractHeadings(html);

  return {
    slug,
    content,
    html,
    headings,
    metadata: {
      title: data.title || "",
      date: data.date || "",
      summary: data.summary || "",
      ...data,
    },
  };
}

export async function getContentList(type: ContentType): Promise<ContentItem[]> {
  const dir = getContentPath(type);
  const files = getMdxFiles(dir);

  const items = await Promise.all(
    files.map(async (file) => {
      const slug = path.basename(file, ".mdx");
      return getContent(type, slug);
    })
  );

  return items
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
}

export async function getAllSlugs(type: ContentType): Promise<string[]> {
  const dir = getContentPath(type);
  const files = getMdxFiles(dir);
  return files.map((f) => path.basename(f, ".mdx"));
}


//根据 keyId 获取某本书下的所有章节列表
export async function getChaptersByKeyId(keyId: string): Promise<ContentItem[]> {
  // 1. 获取 content/books 下所有文件
  const allChapters = await getContentList("books");
  
  // 2. 过滤出 keyId 匹配的章节
  const bookChapters = allChapters.filter(
    (chapter) => chapter.metadata.keyId === keyId
  );

  // 3. 按照日期排序 (如果书籍章节有先后顺序，建议在 metadata 里加 index 字段排序，或者依赖 date)
  return bookChapters.sort((a, b) => 
    new Date(a.metadata.date).getTime() - new Date(b.metadata.date).getTime()
  );
}

//专门用于获取书籍特定章节内容的解析器  content/books/[bookSlug]/[chapterSlug].mdx
//资源路径: 自动将 ./xxx 解析为 /content/books/[bookSlug]/[chapterSlug]/Resource/xxx
export async function getBooksContent(
  bookSlug: string,
  chapterSlug: string
): Promise<ContentItem | null> {
  // 1. 构造文件物理路径
  // const bookDir = path.join(getContentPath("books"), bookSlug);
  // const filePath = path.join(bookDir, `${chapterSlug}.mdx`);
  // 1. 解码并规范化中文路径
    const safeBookSlug = decodeURIComponent(bookSlug).normalize('NFC');
    const safeChapterSlug = decodeURIComponent(chapterSlug).normalize('NFC');

    const bookDir = path.join(getContentPath("books"), safeBookSlug);
    
    // 2. 尝试匹配多种后缀 (mdx 或 md)
    let filePath = path.join(bookDir, `${safeChapterSlug}.mdx`);
    if (!fs.existsSync(filePath)) {
      const fallbackPath = path.join(bookDir, `${safeChapterSlug}.md`);
      if (fs.existsSync(fallbackPath)) {
        filePath = fallbackPath;
      } else {
        console.warn(`File not found: ${filePath} or .md`);
        return null;
      }
    }
  //end
  

  if (!fs.existsSync(filePath)) {
    console.warn(`Book chapter not found: ${filePath}`);
    return null;
  }

  // 2. 读取文件内容
  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  // 3. 构造组合 Slug (用于传给 markdownToHtml 生成正确的资源路径)
  // 结果示例: "Interview/test"
  const compositeSlug = `${bookSlug}/${chapterSlug}`;

  // 4. 转换 HTML (触发 books 类型的特殊图片处理)
  const html = await markdownToHtml(content, "books", compositeSlug);
  const headings = extractHeadings(html);

  return {
    slug: compositeSlug, // 返回组合路径作为唯一标识
    content,
    html,
    headings,
    metadata: {
      title: data.title || "",
      date: data.date || "",
      summary: data.summary || "",
      // 如果 frontmatter 没写 keyId，自动用 bookSlug 填充，方便关联目录
      keyId: data.keyId || bookSlug, 
      ...data,
    },
  };
}