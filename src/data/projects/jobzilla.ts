import jobzillamainImage from "@/assets/projects/jobzilla/jobzillgMain.png.png";
import jobzillaHome from "@/assets/projects/jobzilla/JobZilla-home.png";
import jobzillaFindJob from "@/assets/projects/jobzilla/JobZilla-findJob.png";
import jobzillaDashboard from "@/assets/projects/jobzilla/job-can-dashboard.png";
import jobzillaRecruiter from "@/assets/projects/jobzilla/JobZilla-recruter.png";
import jobzillaAdmin from "@/assets/projects/jobzilla/JobZilla-admin.png";
import { Project } from "@/types/project.type";

export const jobzilla: Project = {
  title: "JobZilla",
  category: "Web Platform",
  year: "2025",
  aspect: "hero",
  isFeatured: true,
  description:
    "A job search platform that connects employers with job seekers through smart matching, real-time alerts, and an applicant tracking dashboard.",
  stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
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
        "Job searching is fragmented — job boards overwhelm candidates with noise while recruiters drown in unqualified applications. JobZilla was built to close that loop with intelligent matching on both sides.",
      banner: jobzillaHome,
    },
    challenge: {
      index: "02 — CHALLENGE",
      title: "Challenge",
      description:
        "Delivering a fast, filterable search experience across thousands of listings while keeping relevance high. Real-time alerting and a recruiter dashboard needed to work seamlessly on a shared data model.",
      banner: jobzillaFindJob,
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
      banner: jobzillaDashboard,
    },
  },
};
