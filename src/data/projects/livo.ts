import livomainImage from "@/assets/projects/livo/main4.png";
import livomainHero from "@/assets/projects/livo/livo_home.png";
import livoProductPage from "@/assets/projects/livo/livoProductPage.png";
import livoDashboard from "@/assets/projects/livo/livoDashboard.png";
import livoCatalog from "@/assets/projects/livo/livoDashbaordCatalog.png";
import liveProductSider from "@/assets/projects/livo/livoSlider.png";
import livoPhoneWithHand from "@/assets/projects/livo/livoPhoneWithHand.jpeg";
import livoProductMockup from "@/assets/projects/livo/productMock.jpeg";
import livoDashboardMockup from "@/assets/projects/livo/jobzillwithDashboardMock.jpeg";

import { Project } from "@/types/project.type";

export const livo: Project = {
  title: "Livo",
  category: "E-commerce",
  year: "2026",
  isFeatured: false,
  aspect: "hero",
  description:
    "A curated commerce platform for Livo, a house of premium luxury designer furniture — where archival craftsmanship meets a quiet, editorial shopping experience.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Stripe",
  ],
  live: "https://livo-chi.vercel.app",
  github: "https://github.com/RahulKhanSuvo/livo",
  image: livomainImage,
  gallery: [
    { src: livomainHero, alt: "Livo atelier homepage" },
    { src: livoProductPage, alt: "Livo single-product atelier page" },
    { src: livoDashboard, alt: "Livo clienteling & order dashboard" },
    { src: livoCatalog, alt: "Livo seasonal collection catalog" },
    { src: liveProductSider, alt: "Livo material and finish selector" },
  ],
  caseStudy: {
    intro: {
      index: "01 — INTRO",
      title: "Livo",
      description:
        "Livo is the storefront for a house of premium, made-to-order furniture that sells for five figures and takes months to produce. The brand wanted a gallery, not a marketplace. I built the storefront and backend — the product experience, configuration and ordering flow, and the atelier commission dashboard — because a generic template would erase the craft the buyer pays for.",
      banner: livoProductMockup,
    },
    challenge: {
      index: "02 — CHALLENGE",
      title: "Challenge",
      description:
        "Selling made-to-order furniture online means committing to a five-figure piece you can't touch. The hard part was conveying true grain, patina, and scale on a screen — with bespoke materials, finishes, deposits, and long lead times baked in — without breaking the brand's calm, considered confidence. The experience had to stay quiet while the logic got complex.",
      banner: livoPhoneWithHand,
    },
    solution: {
      index: "03 — SOLUTION",
      text: "An editorial Next.js storefront with room-context galleries so pieces read in a real space. A real-time material and finish selector previews instantly. A type-safe Node/PostgreSQL backend models bespoke orders, deposits, and lead times with Stripe for staged payments — and the same model powers the atelier clienteling dashboard, keeping storefront and ops consistent.",
      brand: "LIVO®",
    },
    result: {
      index: "04 — RESULT",
      heading:
        "A gallery-grade storefront where collectors configure and commission made-to-order pieces with confidence, and the atelier team manages those commissions from one dashboard — carrying a high-intent buyer through a bespoke purchase a normal template couldn't.",
      banner: livoDashboardMockup,
    },
  },
};
