import { notFound } from "next/navigation";
import { projectData } from "@/data/projectData";
import ProjectOverview from '@/components/projectDetails/ProjectOverview';
import CaseStudySections from '@/components/projectDetails/CaseStudySections';
import SolutionResultSection from '@/components/projectDetails/SolutionResultSection';
import TechStack from '@/components/projectDetails/TechStack';
import NextProject from '@/components/projectDetails/NextProject';

const WorkDetailPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = projectData.find(
        (p) => p.title.toLowerCase() === slug.toLowerCase()
    );
    if (!project) return notFound();

    const currentIndex = projectData.indexOf(project);
    const nextProject = projectData[(currentIndex + 1) % projectData.length];

    const [g0, g1, g2] = project.gallery;

    return (
        <>
            <ProjectOverview
                client={project.title}
                overview={project.description}
                year={project.year}
                imageUrl={project.image.src}
                liveLink={project.live}
            />
            <div className='pt-48'>
                <CaseStudySections
                    intro={{
                        ...project.caseStudy.intro,
                        imageUrl: g0?.src.src ?? project.image.src,
                        imageAlt: g0?.alt ?? project.title,
                    }}
                    challenge={{
                        ...project.caseStudy.challenge,
                        imageUrl: g1?.src.src ?? project.image.src,
                        imageAlt: g1?.alt ?? project.title,
                    }}
                />
            </div>
            <SolutionResultSection
                solutionIndex={project.caseStudy.solution.index}
                solutionText={project.caseStudy.solution.text}
                brandText={project.caseStudy.solution.brand}
                resultIndex={project.caseStudy.result.index}
                resultHeading={project.caseStudy.result.heading}
                bannerImageUrl={g2?.src.src ?? project.image.src}
                bannerImageAlt={g2?.alt ?? project.title}
                sideImageUrl={g0?.src.src ?? project.image.src}
                sideImageAlt={g0?.alt ?? project.title}
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
}

export default WorkDetailPage;
