import type { Metadata, Viewport } from "next";
import { humane, neueMontreal } from "@/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";
import { Footer } from "@/components/shared/Footer";
import TransitionProvider from "@/providers/TransitionProvider";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rahul Khan Suvo | Software Engineer",
    template: "%s | Rahul Khan Suvo",
  },
  description:
    "Rahul Khan Suvo — frontend-focused full stack developer building performant, animated web experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Rahul Khan Suvo",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  category: "portfolio",
  openGraph: {
    type: "website",
    title: "Rahul Khan Suvo | Software Engineer",
    description:
      "Frontend-focused full stack developer building performant, animated web experiences with Next.js, React, and TypeScript.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Khan Suvo | Software Engineer",
    description:
      "Frontend-focused full stack developer building performant, animated web experiences with Next.js, React, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        neueMontreal.variable,
        humane.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <TransitionProvider>
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
