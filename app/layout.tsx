import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

import "./globals.css";

/**
 * Only the weights we actually use (body 400, headings/UI 600).
 * display:"optional" — text paints immediately with fallback; font applies
 * only if it arrives in time. Big Lighthouse/LCP win on mobile.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
  display: "optional",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6fa" },
    { media: "(prefers-color-scheme: dark)", color: "#141821" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, "font-sans")}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        {/* Desktop header is fixed (h-24) → pad main. Mobile sticky header is in flow. */}
        <main className="flex-1 md:pt-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
