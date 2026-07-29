import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import {
  generateBreadcrumbListJsonLd,
  generatePersonJsonLd,
  generateWebsiteJsonLd,
} from "@/app/jsonld";
import Footer from "@/components/blocks/Footer";
import Navbar from "@/components/blocks/Navbar/Navbar";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { jsonldScript } from "@/lib/utils";

export default function LocaleLayoutShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        {/* JSON-LD Schemas */}
        {jsonldScript(generateWebsiteJsonLd())}
        {jsonldScript(generateBreadcrumbListJsonLd())}
        {jsonldScript(generatePersonJsonLd())}
      </head>

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
