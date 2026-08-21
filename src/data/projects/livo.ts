import livomainImage from "@/assets/projects/livo/main4.png";
import livomainHero from "@/assets/projects/livo/livo_home.png";
import livoProductPage from "@/assets/projects/livo/livoProductPage.png";
import livoDashboard from "@/assets/projects/livo/livoDashboard.png";
import livoCatalog from "@/assets/projects/livo/livoDashbaordCatalog.png";
import liveProductSider from "@/assets/projects/livo/livoSlider.png";
import { Project } from "@/types/project.type";

export const livo: Project = {
  title: "Livo",
  category: "E-commerce",
  year: "2024",
  isFeatured: false,
  aspect: "hero",
  description:
    "A curated commerce platform for Livo, a house of premium luxury designer furniture — where archival craftsmanship meets a quiet, editorial shopping experience.",
  stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
  live: "https://livo.example.com",
  github: "https://github.com/example/livo",
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
        "Livo is a luxury furniture house selling limited-run designer pieces — from hand-joined walnut seating to cast-bronze lighting. The brand needed a storefront that feels like a gallery, not a marketplace, while still converting high-intent collectors.",
    },
    challenge: {
      index: "02 — CHALLENGE",
      title: "Challenge",
      description:
        "Selling five-figure, made-to-order furniture online means buyers need tactile confidence without touching the piece. We had to render material truth — grain, patina, scale — at gallery fidelity, while handling bespoke configuration, long lead times, and white-glove logistics without breaking the calm of the experience.",
    },
    solution: {
      index: "03 — SOLUTION",
      text: "A Next.js storefront with an editorial product architecture: room-context galleries, a real-time material and finish configurator, and 3D-accurate scale previews. Bespoke orders, deposits, and lead-time logic run on a type-safe Node/PostgreSQL backend with Stripe for staged payments and a clienteling dashboard for the atelier team.",
      brand: "LIVO®",
    },
    result: {
      index: "04 — RESULT",
      heading:
        "A composed, gallery-grade commerce experience where collectors configure and commission pieces with confidence — lifting made-to-order conversion while keeping the brand's restrained, luxury tone intact.",
    },
  },
};
