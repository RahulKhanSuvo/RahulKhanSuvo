import galleryImage1 from "@/assets/projects/1.webp";
import galleryImage2 from "@/assets/projects/3.webp";
import galleryImage3 from "@/assets/projects/4.webp";
import { StaticImageData } from "next/image";
import livomainImage from "@/assets/projects/livoMain1.png";
import jobzillaImage from "@/assets/projects/jobzillMain1.png";
import jobzillaGalleryMoble1 from "@/assets/projects/jobzilla/jobzillg1.png";
import jobzillaGalleryMoble2 from "@/assets/projects/jobzilla/jobzillg2.png";
import jobzillaDashboardImage from "@/assets/projects/jobzilla/dahboard2.png";
interface CaseStudySection {
  index: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
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
    description:
      "A job search platform that connects employers with job seekers through smart matching, real-time alerts, and an applicant tracking dashboard.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    live: "https://jobzilla.example.com",
    github: "https://github.com/example/jobzilla",
    image: jobzillaImage,
    gallery: [
      {
        src: jobzillaGalleryMoble1,
        alt: "JobZilla  ",
      },
      {
        src: jobzillaGalleryMoble2,
        alt: "JobZilla job listing",
      },
      {
        src: jobzillaDashboardImage,
        alt: "JobZilla profile",
      },
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
    title: "Livo",
    category: "Streaming",
    year: "2024",
    description:
      "A real-time live streaming platform for creators, featuring low-latency video, chat, monetization, and an analytics suite for channel growth.",
    stack: ["React", "Node.js", "WebRTC", "MongoDB", "Redis"],
    live: "https://livo.example.com",
    github: "https://github.com/example/livo",
    image: livomainImage,
    gallery: [
      {
        src: galleryImage1,
        alt: "Livo stream room",
      },
      {
        src: galleryImage2,
        alt: "Livo chat",
      },
      {
        src: galleryImage3,
        alt: "Livo analytics",
      },
    ],
    caseStudy: {
      intro: {
        index: "01 — INTRO",
        title: "Livo Project",
        description:
          "Live streaming is dominated by platforms that treat creators as an afterthought. Livo is a creator-first streaming platform where latency, chat, and monetization are first-class citizens.",
      },
      challenge: {
        index: "02 — CHALLENGE",
        title: "Challenge",
        description:
          "Delivering sub-second stream latency at scale while keeping chat reliable under thousands of concurrent viewers, and giving creators tools to monetize without leaving the platform.",
      },
      solution: {
        index: "03 — SOLUTION",
        text: "A WebRTC-based ingestion pipeline for low-latency broadcast, a Redis-backed chat layer that scales horizontally, and integrated tips, subscriptions, and analytics so creators understand and grow their audience.",
        brand: "LIVO®",
      },
      result: {
        index: "04 — RESULT",
        heading:
          "A streaming platform that puts the creator first — fast, reliable, and with every tool needed to build a community and a business.",
      },
    },
  },
];
