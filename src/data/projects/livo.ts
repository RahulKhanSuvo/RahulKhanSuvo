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
  year: "2024",
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
        "Selling made-to-order furniture online means asking someone to commit to a five-figure piece they can't touch. The real difficulty was giving tactile confidence through a screen — showing true grain, patina, and scale at gallery fidelity — while the product itself is bespoke, with material and finish options, a deposit, and a long lead time tied to white-glove logistics. That constraint mattered because any friction or visual distrust in the configurator or checkout breaks the one thing the brand sells: calm, considered confidence. The experience had to stay quiet while the underlying logic got complicated.",
      banner: livoPhoneWithHand,
    },
    solution: {
      index: "03 — SOLUTION",
      text: "I built an editorial Next.js storefront with room-context galleries so pieces read in a real space, not on a white card. A real-time material and finish selector updates the preview instantly. A type-safe Node/PostgreSQL backend models bespoke orders, deposits, and lead times, with Stripe for staged payments, and the same model powers the atelier clienteling dashboard — keeping storefront and ops consistent and the code maintainable.",
      brand: "LIVO®",
    },
    result: {
      index: "04 — RESULT",
      heading:
        "The result is a gallery-grade storefront where collectors can configure and commission made-to-order pieces with confidence, and the atelier team can manage those commissions from a single dashboard. The storefront keeps the brand's restrained tone while actually carrying a high-intent buyer through a complex, bespoke purchase — the part a normal e-commerce template can't do.",
      banner: livoDashboardMockup,
    },
  },
};
