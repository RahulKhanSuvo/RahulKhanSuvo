import { projectData } from "@/data/projectData";
import { Container } from "../common/Container";
import { SectionTitle } from "../shared/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <section>
      <Container>
        <SectionTitle className="text-center">Featured Work</SectionTitle>
        {/**/}
        <div className="mt-16 grid grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
