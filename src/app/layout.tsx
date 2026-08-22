import type { Metadata } from "next";
import { humane, neueMontreal } from "@/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import SmoothScroll from "@/providers/SmoothScroll";
import { Footer } from "@/components/shared/Footer";
import TransitionProvider from "@/providers/TransitionProvider";

export const metadata: Metadata = {
  title: "Rahul Khan Suvo | Software Engineer",
  description: "Frontend-focused Full Stack Developer",
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
