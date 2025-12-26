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

export type ContentType = "blog" | "projects";


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

  // 预处理 drawio
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

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeKatex)
    .use(rehypePrettyCode, {
      theme: { light: "github-light", dark: "github-dark-dimmed" },
      keepBackground: false,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processed);

  let html = result.toString();

  // 恢复 mermaid
  html = html.replace(
    /<!--mermaid:(\d+)-->/g,
    (_, idx) =>
      `<div class="mermaid-container" data-mermaid="${Buffer.from(
        mermaidBlocks[+idx]
      ).toString("base64")}"></div>`
  );


  // 恢复 drawio - 使用 mxgraph 格式
  html = html.replace(/<!--drawio:(\d+)-->/g, (_, idx) => {
    const { xml, id } = drawioBlocks[+idx];
    // 将 XML 编码为 base64
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