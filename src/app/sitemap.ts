import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { projectData } from "@/data/projectData";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = projectData.map((project) => ({
    url: `${SITE_URL}/project/${project.title.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projects,
  ];
}
