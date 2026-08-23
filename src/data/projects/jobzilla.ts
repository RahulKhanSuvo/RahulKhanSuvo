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
        "The difficulty was relevance at speed. Thousands of listings had to stay filterable and fast, and \"relevant\" had to mean something for both candidates and recruiters on the same data. Real-time alerts added another constraint: a candidate should hear about a matching role the moment it's posted, which means the matching logic can't only run when someone opens the page. All of it had to sit on one data model shared by the candidate and recruiter views.",
      banner: jobfondJobMobile,
    },
    solution: {
      index: "03 — SOLUTION",
      text: "I built a matching engine that scores listings against candidate profiles, so search results reflect fit rather than just keywords. To make alerts feel live, I used server-streamed notifications that fire the moment a relevant role drops, instead of polling on page load. I also built a unified applicant-tracking dashboard for employers, so recruiters manage every applicant from one interface. All three sit on one type-safe data model, which keeps the candidate and recruiter views consistent and stops the code from diverging as features grow.",
      brand: "JOBZILLA®",
      banner: jobFindJobMock,
    },
    result: {
      index: "04 — RESULT",
      heading:
        "Candidates find relevant roles in seconds, and recruiters manage every applicant from one fast interface. The product delivers a hiring workflow that feels instant on both sides — search, alerting, and tracking working from a single, consistent data model.",
      banner: jobFindJobMock,
    },
  },
};
