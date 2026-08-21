import { StaticImageData } from "next/image";

export interface CaseStudySection {
  index: string;
  title: string;
  description: string;
  banner?: string;
}
export type ProjectAspect = "hero" | "tall" | "wide";
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
    solution: { index: string; text: string; brand?: string };
    result: { index: string; heading: string; banner?: string };
  };
}
