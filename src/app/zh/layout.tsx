import type { Metadata } from "next";

import LocaleLayoutShell from "@/components/layouts/LocaleLayoutShell";
import { DATA } from "@/data";

/* Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  // Also: robots.ts
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Also: manifest.ts
  manifest: "/manifest.webmanifest",
  // Also: opengraph-image.png, opengraph-image.alt.txt
  openGraph: {
    title: `${DATA.chinese.name}`,
    description: DATA.chinese.description,
    url: `${DATA.url}/zh`,
    siteName: `${DATA.chinese.name}`,
    locale: "zh_CN",
    type: "website",
  },
  // Also: twitter-image.png, twitter-image.alt.txt
  twitter: {
    title: `${DATA.chinese.name}`,
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${DATA.url}/zh`,
    languages: {
      "en-US": DATA.url,
      "zh-CN": `${DATA.url}/zh`,
    },
    types: {
      "application/atom+xml": "/api/feed/atom.xml",
    },
  },
};

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleLayoutShell>{children}</LocaleLayoutShell>;
}
