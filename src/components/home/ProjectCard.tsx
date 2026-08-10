import Image from "next/image";
import { Project } from "../../data/projectData";
import SlideShow from "./SlideShow";
import Link from "next/link";

export const ProjectCard = ({
  title,
  category,
  year,
  stack,
  image,
  gallery,
}: Project) => {
  return (
    <Link
      href={`/project/${title}`}
      className="group relative overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        className="w-full transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[2px]"
      />
      <div className="absolute inset-0 bg-white/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <SlideShow
          images={gallery}
          className="scale-[0.45] transition-transform duration-500 ease-out group-hover:scale-100"
        />
      </div>

      {/* title at top inside card */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="font-heading text-[2.5rem] uppercase leading-none tracking-tight">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {category} · {year}
          </p>
        </div>
      </div>

      {/* stack at bottom */}
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        {stack.map((tech) => (
          <span
            key={tech}
            className="border border-black/20 bg-white/70 px-3 py-1 text-xs backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
};
