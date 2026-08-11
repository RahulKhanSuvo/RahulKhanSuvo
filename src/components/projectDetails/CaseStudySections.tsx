import Image from "next/image";
import { Container } from "../common/Container";

interface SectionData {
  index: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface CaseStudySectionsProps {
  intro?: SectionData;
  challenge?: SectionData;
}

export default function CaseStudySections({
  intro = {
    index: "01 — INTRO",
    title: "Lumen Project",
    description:
      "Gallery identities often compete with the work they represent. Lumen needed the opposite — a presence strong enough to be coherent, controlled enough to step back.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Architectural concrete shadow detail",
  },
  challenge = {
    index: "02 — CHALLENGE",
    title: "Challenge",
    description:
      "Designing for institutional neutrality without producing something anonymous. The system had to carry weight in print and spatial contexts while remaining genuinely subordinate to the work on the walls.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600",
    imageAlt: "Monolithic stone sculpture geometry",
  },
}: CaseStudySectionsProps) {
  return (
    <section className="pb-16 bg-white text-gray-900 font-sans">
      <Container>
        <div>
          {/* Row 1: Intro Section (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex gap-4 items-start">
              <span className="text-lg uppercase text-gray-400 tracking-wider">
                {intro.index}
              </span>
              <p className="text-lg md:text-xl lg:text-2xl font-medium text-black leading-snug">
                {intro.description}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                <Image
                  src={intro.imageUrl}
                  alt={intro.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover "
                />
              </div>
            </div>
          </div>

          {/* Row 2: Challenge Section (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100">
                <Image
                  src={challenge.imageUrl}
                  alt={challenge.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover "
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
              <span className="sm:col-span-4 text-base md:text-lg lg:text-xl font-mono uppercase text-gray-400 tracking-wider">
                {challenge.index}
              </span>
              <p className="sm:col-span-8 text-lg md:text-xl lg:text-2xl font-medium text-black leading-snug">
                {challenge.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
