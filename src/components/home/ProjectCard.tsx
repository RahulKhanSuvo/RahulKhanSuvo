import Image from "next/image";
import { Project } from "../../data/projectData";
import SlideShow from "./SlideShow";

export const ProjectCard = ({ title, image, gallery }: Project) => {
  return (
    <div className="group relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="w-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px]"
      />
      <div className="absolute inset-0  opacity-0 backdrop-blur-xs transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <SlideShow
          images={gallery}
          className="scale-[0.45] transition-transform duration-500 ease-out group-hover:scale-100"
        />
      </div>
    </div>
  );
};
