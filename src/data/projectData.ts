import projectImage from "@/assets/projects/69f7fd08edbaab7413a63440_jc-thumbnail.webp";
import galleryImage1 from "@/assets/projects/1.webp";
import galleryImage2 from "@/assets/projects/3.webp";
import galleryImage3 from "@/assets/projects/4.webp";
import { StaticImageData } from "next/image";
export interface Project {
  title: string;
  description: string;
image: StaticImageData;
  gallery: {
    src: StaticImageData;
    alt: string;
  }[]
}
export const projectData: Project[] = [
  {
    title: "JobZilla",
    description:
      "A job search platform that connects employers with job seekers.",
    image: projectImage,
    gallery: [
      {
        src: galleryImage1,
        alt: "",
      },
      {
        src: galleryImage2,
        alt: "",
      },
      {
        src: galleryImage3,
        alt: "",
      },
    ],
  },
  {
    title: "Livo",
    description: "",
    image: projectImage,
    gallery: [
      {
        src: galleryImage1,
        alt: "",
      },
      {
        src: galleryImage2,
        alt: "",
      },
      {
        src: galleryImage3,
        alt: "",
      },
    ],
  },
];
