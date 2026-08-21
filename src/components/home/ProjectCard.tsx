import Image from "next/image";
import Link from "next/link";

import { Project } from "../../data/projectData";
import SlideShow from "./SlideShow";

const aspectClasses = {
  hero: "col-span-2 aspect-[16/7.5]",
  tall: "col-span-1 aspect-[16/4]",
  wide: "col-span-1 aspect-[2/1]",
} as const;

export const ProjectCard = ({
  title,
  category,
  year,
  stack,
  image,
  gallery,
  aspect,
}: Project) => {
  return (
    <Link
      href={`/project/${title}`}
      className={`group relative block w-full overflow-hidden ${aspectClasses[aspect]}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[5px]"
      />

      {/* Slideshow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <SlideShow
          images={gallery}
          className="scale-[0.45] transition-transform duration-500 ease-out group-hover:scale-100"
        />
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div>
          <h3 className="text-[2.5rem] uppercase leading-none tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-white">
            {category} · {year}
          </p>
        </div>
      </div>

      {/* Stack */}
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
