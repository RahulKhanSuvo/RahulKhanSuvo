"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "../common/Container";
import softvencLogo from "@/assets/images/softvencLogo.jpeg";
import { SectionTitle } from "../shared/SectionTitle";

const stats = [
  { value: "1+", label: "Years of Professional Experience" },
  { value: "3+", label: "Years Building Web Applications" },
  { value: "15+", label: "Projects Delivered" },
  { value: "100%", label: "Commitment to Craft" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-neutral-900">
      <Container className="flex flex-col">
        {/* Top line and section counter */}
        <div className="w-full border-t border-neutral-200 pt-6 pb-12 sm:pb-16">
          <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
            (01)
          </span>
        </div>

        {/* Header with Title and Dot */}
        {/*<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-6 sm:gap-12 md:gap-16"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-neutral-900 leading-none">
            ABOUT
          </h2>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-neutral-900 mb-1 sm:mb-2 md:mb-3 inline-block shrink-0" />
        </motion.div>*/}

        <SectionTitle>ABOUT</SectionTitle>

        {/* Lead Statement (Left-aligned, wide container with creative inline image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 sm:mt-18 lg:mt-20"
        >
          <p className="text-2xl sm:text-3xl lg:text-[2.25rem] font-normal tracking-tight text-neutral-800 leading-snug sm:leading-relaxed lg:leading-[1.4]">
            I started with the frontend because that&apos;s where an idea
            becomes something you can actually see, touch and use{" "}
            <motion.span
              whileHover={{ scale: 1.12, rotate: -2 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative inline-flex items-center justify-center align-middle mx-1.5 sm:mx-2.5 h-[1.3em] w-[2.4em] sm:w-[2.8em] overflow-hidden rounded-full border border-neutral-400/80 shadow-sm group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80&auto=format&fit=crop"
                alt="Frontend interface design"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
            </motion.span>
            . Over time, curiosity pulled me deeper into the stack{" "}
            <motion.span
              whileHover={{ scale: 1.12, rotate: 2 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative inline-flex items-center justify-center align-middle mx-1.5 sm:mx-2.5 h-[1.3em] w-[2.4em] sm:w-[2.8em] overflow-hidden rounded-full border border-neutral-400/80 shadow-sm group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop"
                alt="Full stack architecture and engineering"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />
            </motion.span>{" "}
            — APIs, databases, authentication, architecture and everything that
            makes the interface actually work.
          </p>
        </motion.div>

        {/* Secondary Paragraph (Right-aligned / offset column) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 sm:mt-24 flex justify-end"
        >
          <div className="w-full md:w-7/12 lg:w-[44%]">
            <p className="text-3xl font-normal text-neutral-700 leading-relaxed">
              Worked as a Frontend Developer at{" "}
              <motion.a
                href="https://softvence.agency"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="relative inline-flex items-center justify-center align-middle mx-1.5 h-[1.35em] w-[4.8em] sm:w-[6em] overflow-hidden rounded-full border border-neutral-300 shadow-sm group cursor-pointer bg-white px-2 py-0.5"
              >
                <Image
                  src={softvencLogo}
                  alt="Softvence Agency"
                  fill
                  className="object-contain p-0.5 transition-all duration-500 group-hover:scale-105"
                />
              </motion.a>{" "}
              from March 2025 to May 2026, building high-performance web
              applications with meticulous attention to detail, modern
              architecture, and seamless user experiences.
            </p>
          </div>
        </motion.div>

        {/* Key Metrics / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-28 sm:mt-36 grid grid-cols-2 lg:grid-cols-4 border-t border-neutral-200 pt-12 gap-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <p className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-56 leading-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
