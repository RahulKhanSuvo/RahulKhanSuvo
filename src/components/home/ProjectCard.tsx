"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Project } from "../../data/projectData";
import SlideShow from "./SlideShow";
import AnimatedTitle from "../animation/AnimatedTitle";
import TransitionLink from "../shared/TransitionLink";

const aspectClasses = {
  hero: "md:col-span-2 aspect-square md:aspect-[16/8]",
  tall: "col-span-1 md:col-span-2 aspect-square md:aspect-[16/15]",
  wide: "col-span-1 md:col-span-2 aspect-square md:aspect-[4/2.2]",
} as const;

const stackVariants: Variants = {
  hidden: {
    y: 80,
  },
  visible: (index: number) => ({
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 18,
      mass: 0.7,
      delay: index * 0.06,
    },
  }),
};

export const ProjectCard = ({
  title,
  category,
  year,
  stack,
  image,
  gallery,
  aspect,
}: Project) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate={isHovered ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative w-full ${aspectClasses[aspect]}`}
    >
      <TransitionLink
        href={`/project/${title}`}
        className="block h-full w-full"
      >
        {/* Image */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[5px]"
          />

          {/* Black Gradient */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Slideshow */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <SlideShow
              images={gallery}
              className={`scale-[0.45] w-3/5 transition-transform duration-500 ease-out group-hover:scale-100 ${
                aspect === "hero"
                  ? "aspect-video"
                  : aspect === "tall"
                    ? "aspect-video"
                    : "aspect-4/2"
              }`}
            />
          </div>

          {/* Stack */}
          <div className="absolute bottom-1 right-0 z-30 flex max-w-full flex-wrap justify-end gap-1.5 px-3 py-3 sm:gap-2">
            {stack.map((tech, index) => (
              <motion.span
                key={tech}
                custom={index}
                variants={stackVariants}
                className="rounded border border-white px-2 py-1 text-xs uppercase text-white backdrop-blur-sm sm:px-3 sm:py-1 sm:text-lg"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </TransitionLink>

      {/* Text */}
      <div className="mt-3 flex items-start justify-between gap-3 sm:mt-4">
        <AnimatedTitle
          title={title}
          isHovered={isHovered}
          className="text-3xl font-semibold uppercase text-black sm:text-4xl lg:text-5xl"
        />

        <p className="mt-1 shrink-0 text-xs text-black sm:mt-2 sm:text-sm">
          {category} · {year}
        </p>
      </div>
    </motion.div>
  );
};
