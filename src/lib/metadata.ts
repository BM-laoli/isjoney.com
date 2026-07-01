import type { Metadata } from "next";

import { DATA } from "@/data";
import { ContentType, getContent } from "@/lib/content";

export async function generateContentMetadata(
  contentType: ContentType,
  slug: string,
): Promise<Metadata | undefined> {
  const item = await getContent(contentType, slug);

  if (!item) {
    return undefined;
  }

  const { title, summary: description, image } = item.metadata;

  return {
    title,
    description,
    alternates: {
      canonical: `${DATA.url}/${contentType}/${item.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${DATA.url}/${contentType}/${item.slug}`,
      images: image ? [{ url: `${DATA.url}${image}` }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
