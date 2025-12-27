import { Metadata } from "next";

import { DATA } from "@/data";

export const metadata: Metadata = {
  title: "Books",
  description: "A collection of technical books, guides, and documentation.", // 或者使用 DATA.booksDescription
  openGraph: {
    title: `${DATA.name}'s Books`,
    description: "A collection of technical books, guides, and documentation.",
    url: `${DATA.url}/books`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name}'s Books`,
    description: "A collection of technical books, guides, and documentation.",
  },
  alternates: {
    canonical: `${DATA.url}/books`,
    languages: {
      "en-US": `${DATA.url}/books`,
      "zh-CN": `${DATA.url}/zh/books`,
    },
    //我们不处理专门针对books的更新，所以rss和atom都指向全局的
    types: {
       "application/atom+xml": "/api/feed/atom.xml",
    },
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
