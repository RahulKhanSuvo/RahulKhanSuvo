import Image from "next/image";
import Link from "next/link";

import { Project } from "../../data/projectData";
import SlideShow from "./SlideShow";

const aspectClasses = {
  hero: "col-span-2 aspect-[16/8]",
  tall: "col-span-1 aspect-[16/15]",
  wide: "col-span-1 aspect-[4/2.2]",
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
      className={`group relative block w-full ${aspectClasses[aspect]}`}
    >
      <div className="relative h-full w-full overflow-hidden">
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

        {/* Stack */}
        <div className="absolute bottom-0 right-0 flex flex-wrap gap-2 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-white px-3 py-1 text-lg uppercase text-white backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Text outside image */}
      <div className="mt-4 flex  justify-between">
        <h3 className="text-4xl uppercase leading-none tracking-tight font-black text-black">
          {title}
        </h3>

        <p className="mt-2 text-sm text-black">
          {category} · {year}
        </p>
      </div>
    </Link>
  );
};
