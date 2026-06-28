import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import {
  generateBreadcrumbListJsonLd,
  generatePersonJsonLd,
  generateWebsiteJsonLd,
} from "@/app/jsonld";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { DATA } from "@/data";
import { jsonldScript } from "@/lib/utils";


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
  manifest: "/manifest",
  // Also: opengraph-image.png, opengraph-image.alt.txt
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  // Also: twitter-image.png, twitter-image.alt.txt
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  alternates: {
    canonical: DATA.url,
    languages: {
      "en-US": DATA.url,
      "zh-CN": `${DATA.url}/zh`,
    },
    types: {
      "application/atom+xml": "/api/feed/atom.xml",
    },
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        {/* Google Tag Manager */}
        {/* Baidu Site Verification */}

        {/* JSON-LD Schemas */}
        {jsonldScript(generateWebsiteJsonLd())}
        {jsonldScript(generateBreadcrumbListJsonLd())}
        {jsonldScript(generatePersonJsonLd())}
      </head>

      {/* Google Tag Manager (noscript) */}
      {/* End Google Tag Manager (noscript) */}

      {/* Main Layout */}
      <ThemeProvider attribute="class" defaultTheme="system">
        <TooltipProvider delayDuration={0}>
          <Navbar />
          {children}
          <Footer />
        </TooltipProvider>
      </ThemeProvider>

      {/* Vercel Analytics and Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
