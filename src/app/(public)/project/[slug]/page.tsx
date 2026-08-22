import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectData } from "@/data/projectData";
import { SITE_NAME } from "@/lib/site";
import ProjectOverview from "@/components/projectDetails/ProjectOverview";
import CaseStudySections from "@/components/projectDetails/CaseStudySections";
import SolutionResultSection from "@/components/projectDetails/SolutionResultSection";
import NextProject from "@/components/projectDetails/NextProject";
import TechStack from "@/components/projectDetails/TechStack";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find(
    (p) => p.title.toLowerCase() === slug.toLowerCase(),
  );
  if (!project) return {};

  const url = `/project/${project.title.toLowerCase()}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url,
      siteName: SITE_NAME,
      images: [{ url: project.image.src }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image.src],
    },
  };
}

const WorkDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projectData.find(
    (p) => p.title.toLowerCase() === slug.toLowerCase(),
  );
  if (!project) return notFound();

  const currentIndex = projectData.indexOf(project);
  const nextProject = projectData[(currentIndex + 1) % projectData.length];

  const introBanner = project.caseStudy.intro.banner;
  const challengeBanner = project.caseStudy.challenge.banner;
  const resultBanner = project.caseStudy.result.banner;

  return (
    <>
      <ProjectOverview
        client={project.title}
        overview={project.description}
        year={project.year}
        imageUrl={project.image.src}
        liveLink={project.live}
        githubLink={project.github}
      />
      <div className=" pt-20 md:pt-48">
        <CaseStudySections
          intro={{
            ...project.caseStudy.intro,
            imageUrl: introBanner?.src ?? project.image.src,
            imageAlt: project.title,
          }}
          challenge={{
            ...project.caseStudy.challenge,
            imageUrl: challengeBanner?.src ?? project.image.src,
            imageAlt: project.title,
          }}
        />
      </div>
      <SolutionResultSection
        solutionIndex={project.caseStudy.solution.index}
        solutionText={project.caseStudy.solution.text}
        brandText={project.caseStudy.solution.brand}
        resultIndex={project.caseStudy.result.index}
        resultHeading={project.caseStudy.result.heading}
        bannerImageUrl={resultBanner?.src ?? project.image.src}
        bannerImageAlt={project.title}
        sideImageUrl={introBanner?.src ?? project.image.src}
        sideImageAlt={project.title}
      />
      <TechStack stack={project.stack} />
      <NextProject
        title={nextProject.title}
        description={nextProject.description}
        slug={nextProject.title}
        imageUrl={nextProject.image.src}
      />
    </>
  );
};

export default WorkDetailPage;
