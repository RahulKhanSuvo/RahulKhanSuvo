import { StaticImageData } from "next/image";

import galleryImage1 from "@/assets/projects/1.webp";
import galleryImage2 from "@/assets/projects/3.webp";
import galleryImage3 from "@/assets/projects/4.webp";
import jobzillaDashboardImage from "@/assets/projects/jobzilla/ChatGPT Image Aug 12, 2026, 07_42_29 PM.png";
import jobzillaGalleryMoble1 from "@/assets/projects/jobzilla/jobzillg1.png";
import jobzillaGalleryMoble2 from "@/assets/projects/jobzilla/jobzillg2.png";
import jobzillamainImage from "@/assets/projects/jobzillMain1.png";
import livomainImage from "@/assets/projects/livoMain1.png";

interface CaseStudySection {
  index: string;
  title: string;
  description: string;
}
type ProjectAspect = "hero" | "tall" | "wide";
export interface Project {
  id?: number;
  title: string;
  category: string;
  year: string;
  aspect: ProjectAspect;
  description: string;
  stack: string[];
  live: string;
  github: string;
  isFeatured?: boolean;
  image: StaticImageData;
  gallery: {
    src: StaticImageData;
    alt: string;
  }[];
  caseStudy: {
    intro: CaseStudySection;
    challenge: CaseStudySection;
    solution: { index: string; text: string; brand: string };
    result: { index: string; heading: string };
  };
}

export const projectData: Project[] = [
  {
    title: "JobZilla",
    category: "Web Platform",
    year: "2025",
    aspect: "hero",
    isFeatured: true,
    description:
      "A job search platform that connects employers with job seekers through smart matching, real-time alerts, and an applicant tracking dashboard.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    live: "https://jobzilla.example.com",
    github: "https://github.com/example/jobzilla",
    image: jobzillamainImage,
    gallery: [
      { src: jobzillaGalleryMoble1, alt: "JobZilla Mobile View" },
      { src: jobzillaGalleryMoble2, alt: "JobZilla Job Listing" },
      { src: jobzillaDashboardImage, alt: "JobZilla Recruiter Dashboard" },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "JobZilla Project",
        description:
          "Job searching is fragmented — job boards overwhelm candidates with noise while recruiters drown in unqualified applications. JobZilla was built to close that loop with intelligent matching on both sides.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Delivering a fast, filterable search experience across thousands of listings while keeping relevance high. Real-time alerting and a recruiter dashboard needed to work seamlessly on a shared data model.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "A matching engine that scores listings against candidate profiles, server-streamed alerts that notify candidates the moment a relevant role drops, and a unified applicant tracking dashboard for employers — all on a type-safe shared data model.",
        brand: "JOBZILLA®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "A hiring experience that feels instant — candidates find relevant roles in seconds and recruiters manage every applicant from one calm, fast interface.",
      },
    },
  },
  {
    title: "Kivra Architecture",
    category: "Architecture Studio",
    year: "2025",
    isFeatured: false,
    aspect: "tall",
    description:
      "Website for architecture studio whose bold vision demands attention.",
    stack: ["Next.js", "Three.js", "Tailwind CSS"],
    live: "https://kivra.example.com",
    github: "https://github.com/example/kivra",
    image: jobzillaGalleryMoble1,
    gallery: [
      { src: jobzillaGalleryMoble1, alt: "Kivra Mobile Experience" },
      { src: galleryImage1, alt: "Kivra Portfolio View" },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "Kivra Architecture",
        description:
          "High-end architectural firms require web presence that reflects spatial elegance, precise typography, and tactile visuals.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Preserving fast page load speeds while loading uncompressed, ultra-high-resolution architectural renderings and interactive WebGL elements.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "Custom WebGL shader pipelines paired with aggressive progressive image loading and smooth scroll physics.",
        brand: "KIVRA®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "An award-winning interactive portfolio that led to a 40% increase in high-ticket client inquiries.",
      },
    },
  },
  {
    title: "Collection V.2",
    category: "Design Concept",
    aspect: "wide",
    year: "2025",
    isFeatured: false,
    description:
      "A slick showcase of past projects and fresh concepts combined.",
    stack: ["React", "Framer Motion", "CSS Modules"],
    live: "https://collectionv2.example.com",
    github: "https://github.com/example/collectionv2",
    image: jobzillaDashboardImage,
    gallery: [
      { src: jobzillaDashboardImage, alt: "Collection V2 Overview" },
      { src: galleryImage2, alt: "Concept Layout" },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "Collection V.2",
        description:
          "An experimental playground exploring non-traditional grid structures and dynamic typography for modern digital visual archives.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Creating fluid user interactions without compromising access control or responsive behavior across mobile devices.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "A modular, layout-independent component architecture powered by Spring animations.",
        brand: "COLLECTION®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "A high-performing visual library utilized internally for rapid design prototyping.",
      },
    },
  },
  {
    title: "Livo",
    category: "Streaming",
    year: "2024",
    isFeatured: false,
    aspect: "wide",
    description:
      "A real-time live streaming platform for creators, featuring low-latency video, chat, monetization, and an analytics suite.",
    stack: ["React", "Node.js", "WebRTC", "MongoDB", "Redis"],
    live: "https://livo.example.com",
    github: "https://github.com/example/livo",
    image: livomainImage,
    gallery: [
      { src: galleryImage1, alt: "Livo stream room" },
      { src: galleryImage2, alt: "Livo chat interface" },
      { src: galleryImage3, alt: "Livo analytics dashboard" },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "Livo Project",
        description:
          "Live streaming is dominated by platforms that treat creators as an afterthought. Livo is a creator-first platform where latency and chat are first-class citizens.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Delivering sub-second stream latency at scale while keeping chat reliable under thousands of concurrent viewers.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "A WebRTC-based ingestion pipeline for low-latency broadcast paired with a Redis-backed chat layer.",
        brand: "LIVO®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "A streaming platform that puts the creator first with every tool needed to grow a community.",
      },
    },
  },
  {
    title: "Shovk Studio",
    category: "Minimal Web",
    year: "2024",
    aspect: "tall",
    isFeatured: false,
    description:
      "Website concept maximizing impact through minimal modern form.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://shovk.example.com",
    github: "https://github.com/example/shovk",
    image: galleryImage3,
    gallery: [
      { src: galleryImage3, alt: "Shovk Landing" },
      { src: galleryImage1, alt: "Shovk Gallery Detail" },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "Shovk Studio",
        description:
          "Stripping away visual noise to highlight raw imagery and architectural forms through high contrast layout design.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Maintaining user engagement on minimal web layouts without relying on standard navigational widgets.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "Full-screen gesture controls paired with strict grid typography alignments.",
        brand: "SHOVK®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "Featured across top design galleries and digital archive websites globally.",
      },
    },
  },
];
