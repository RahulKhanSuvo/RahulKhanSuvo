import Image from "next/image";
import { Container } from "../common/Container";

interface SolutionResultProps {
  solutionIndex?: string;
  solutionText?: string;
  brandText?: string;
  resultIndex?: string;
  resultHeading?: string;
  bannerImageUrl?: string;
  bannerImageAlt?: string;
  sideImageUrl?: string;
  sideImageAlt?: string;
}

export default function SolutionResultSection({
  solutionIndex = "03 — SOLUTION",
  solutionText = "An identity with no secondary graphic elements. Light and shadow as the primary spatial communication tools. Print materials designed as objects in their own right — paper weight, binding, silence.",
  resultIndex = "04 — RESULT",
  resultHeading = "An identity that behaves like good gallery lighting. Present, functional, and completely unobtrusive.",
  bannerImageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
  bannerImageAlt = "Textured concrete wall with shadow detail",
  sideImageUrl = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
  sideImageAlt = "Monolithic brutalist architecture with sharp shadows",
}: SolutionResultProps) {
  return (
    <section className="py-16 bg-white text-gray-900 font-sans">
      <Container>
        {/* Top Banner Image */}
        <div className="relative w-full aspect-[2.2/1] overflow-hidden mb-12 sm:mb-16 bg-gray-100">
          <Image
            src={bannerImageUrl}
            alt={bannerImageAlt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover "
          />
        </div>

        {/* Bottom Content & Side Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Solution, Branding, and Result */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">
            {/* Solution Block */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              <span className="sm:col-span-4 text-xs font-mono uppercase text-gray-400 tracking-wider">
                {solutionIndex}
              </span>
              <p className="sm:col-span-8 text-base sm:text-lg font-medium text-black leading-snug">
                {solutionText}
              </p>
            </div>
            {/* Result Block */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
              <span className="sm:col-span-4 text-xs font-mono uppercase text-gray-400 tracking-wider">
                {resultIndex}
              </span>
              <h2 className="sm:col-span-8 text-xl sm:text-2xl font-medium text-black leading-tight">
                {resultHeading}
              </h2>
            </div>
          </div>

          {/* Right Column: Tall Architectural Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/3.50] w-full overflow-hidden bg-gray-100">
              <Image
                src={sideImageUrl}
                alt={sideImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
