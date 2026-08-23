import jobzillamainImage from "@/assets/projects/jobzilla/jobzillgMain.png.png";
import jobzillaHome from "@/assets/projects/jobzilla/JobZilla-home.png";
import jobzillaFindJob from "@/assets/projects/jobzilla/JobZilla-findJob.png";
import jobzillaDashboard from "@/assets/projects/jobzilla/job-can-dashboard.png";
import jobzillaRecruiter from "@/assets/projects/jobzilla/JobZilla-recruter.png";
import jobzillaAdmin from "@/assets/projects/jobzilla/JobZilla-admin.png";
import jobHomeMock from "@/assets/projects/jobzilla/recuterMock.png";
import jobFindJobMock from "@/assets/projects/jobzilla/findJobMock.jpeg";
import jobfondJobMobile from "@/assets/projects/jobzilla/findJobMock.png";

import { Project } from "@/types/project.type";

export const jobzilla: Project = {
  title: "JobZilla",
  category: "Web Platform",
  year: "2025",
  aspect: "hero",
  isFeatured: true,
  description:
    "A job search platform that connects employers with job seekers through smart matching, real-time alerts, and an applicant tracking dashboard.",
  stack: [
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Socket.io",
  ],
  live: "https://job-zilla.vercel.app",
  github: "https://github.com/RahulKhanSuvo/jobZilla-server",
  image: jobzillamainImage,
  gallery: [
    { src: jobzillaHome, alt: "JobZilla Home" },
    { src: jobzillaFindJob, alt: "JobZilla Job Listing" },
    { src: jobzillaDashboard, alt: "JobZilla Recruiter Dashboard" },
    { src: jobzillaRecruiter, alt: "JobZilla Recruiter View" },
    { src: jobzillaAdmin, alt: "JobZilla Admin Panel" },
  ],
  caseStudy: {
    intro: {
      index: "01 — INTRO",
      title: "JobZilla Project",
      description:
        "JobZilla is a job platform built to fix a two-sided problem: candidates wade through boards full of noise, and recruiters wade through unqualified applications. It tries to close that loop by matching both sides instead of just listing postings. I built the frontend and the matching and alerting layer on top of a shared, type-safe data model. Its value lives almost entirely in relevance and speed — miss either and the product fails.",
      banner: jobHomeMock,
    },
    challenge: {
      index: "02 — CHALLENGE",
      title: "Challenge",
      description:
        "Relevance at speed: thousands of listings had to stay filterable and fast, with \"relevant\" meaning something for both candidates and recruiters on the same data. Real-time alerts meant matching had to run the moment a role dropped, not just on page load. All of it sat on one data model shared by both views.",
      banner: jobfondJobMobile,
    },
    solution: {
      index: "03 — SOLUTION",
      text: "A matching engine that scores listings against candidate profiles so results reflect fit, not just keywords. Server-streamed alerts fire the moment a relevant role drops. A unified applicant-tracking dashboard lets recruiters manage every applicant in one place. All three share one type-safe data model, so the two views stay consistent as features grow.",
      brand: "JOBZILLA®",
      banner: jobFindJobMock,
    },
    result: {
      index: "04 — RESULT",
      heading:
        "Candidates find relevant roles in seconds; recruiters manage every applicant from one fast interface. Search, alerting, and tracking run from a single consistent data model, so the workflow feels instant on both sides.",
      banner: jobFindJobMock,
    },
  },
};
