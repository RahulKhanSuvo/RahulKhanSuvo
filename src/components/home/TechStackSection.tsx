"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Container } from "../common/Container";

const imageSets = [
  // Set 1: Frontend & React
  [
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop",
      alt: "Code Editor",
    },
    {
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
      alt: "UI Design",
    },
    {
      src: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80&auto=format&fit=crop",
      alt: "React Architecture",
    },
  ],
  // Set 2: Next.js & TypeScript
  [
    {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80&auto=format&fit=crop",
      alt: "Tech Workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80&auto=format&fit=crop",
      alt: "TypeScript Syntax",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
      alt: "Digital Interface",
    },
  ],
  // Set 3: Backend & Node.js
  [
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop",
      alt: "Server Network",
    },
    {
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80&auto=format&fit=crop",
      alt: "API Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format&fit=crop",
      alt: "Data Streams",
    },
  ],
  // Set 4: Databases & PostgreSQL
  [
    {
      src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80&auto=format&fit=crop",
      alt: "Database Cloud",
    },
    {
      src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&q=80&auto=format&fit=crop",
      alt: "SQL Engine",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
      alt: "Analytics",
    },
  ],
  // Set 5: DevOps & Cloud
  [
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
      alt: "Cloud Infrastructure",
    },
    {
      src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80&auto=format&fit=crop",
      alt: "Docker Terminal",
    },
    {
      src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&q=80&auto=format&fit=crop",
      alt: "Deployment Pipelines",
    },
  ],
  // Set 6: Full Stack Architecture
  [
    {
      src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80&auto=format&fit=crop",
      alt: "System Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
      alt: "Full Stack Engine",
    },
    {
      src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80&auto=format&fit=crop",
      alt: "Performance",
    },
  ],
];

interface SwiperPillProps {
  images: { src: string; alt: string }[];
  delay?: number;
}

const SwiperPill = ({ images, delay = 2200 }: SwiperPillProps) => {
  return (
    <span className="relative inline-flex items-center justify-center align-middle mx-1.5 sm:mx-2.5 h-[1.15em] w-[2.4em] sm:w-[2.8em] overflow-hidden rounded border border-neutral-300/90 shadow-xs bg-neutral-100 pointer-events-none select-none">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        className="h-full w-full pointer-events-none"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="h-full w-full relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </span>
  );
};

export const TechStackSection = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 sm:py-36 bg-white text-neutral-900 overflow-hidden"
    >
      <Container className="flex flex-col">
        {/* Top line and section counter */}
        <div className="w-full border-t border-neutral-200 pt-6 pb-14 sm:pb-20 flex justify-between items-center">
          <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
            (04)
          </span>
          <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider uppercase">
            FULL STACK ARCHITECTURE & SKILLS
          </span>
        </div>

        {/* Editorial Typographic Flow with Swiper Image Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-3xl sm:text-5xl lg:text-[4.35rem] font-light tracking-tight text-neutral-900 leading-tight sm:leading-[1.3] uppercase select-none">
            FULL STACK DEVELOPER,{" "}
            <SwiperPill images={imageSets[0]} delay={2000} /> FRONTEND
            ENGINEERING (REACT.JS / NEXT.JS),{" "}
            <SwiperPill images={imageSets[1]} delay={2500} /> TYPESCRIPT,
            TAILWIND CSS, <SwiperPill images={imageSets[2]} delay={2200} />{" "}
            BACKEND ENGINEERING (NODE.JS / EXPRESS), REST & GRAPHQL APIS,{" "}
            <SwiperPill images={imageSets[3]} delay={2800} /> DATABASES
            (POSTGRESQL & MONGODB), PRISMA ORM & REDIS,{" "}
            <SwiperPill images={imageSets[4]} delay={2400} /> DEVOPS & CLOUD
            (DOCKER, GIT, VERCEL),{" "}
            <SwiperPill images={imageSets[5]} delay={2600} /> SYSTEM
            ARCHITECTURE & HIGH PERFORMANCE APPLICATIONS.
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
