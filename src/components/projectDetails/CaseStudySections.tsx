import { Container } from "../common/Container";
import MotionImage from "../ui/MotionImage";

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
    title: "Intro",
    description: "",
    imageUrl: "",
    imageAlt: "",
  },
  challenge = {
    index: "02 — CHALLENGE",
    title: "Challenge",
    description: "",
    imageUrl: "",
    imageAlt: "",
  },
}: CaseStudySectionsProps) {
  return (
    <section className="pb-16 bg-white text-gray-900">
      <Container>
        <div>
          {/* Row 1: Intro Section (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 items-start justify-between">
              <span className="text-base md:text-xl uppercase text-gray-400 tracking-wider whitespace-nowrap">
                {intro.index}
              </span>
              <p className="text-base md:text-2xl max-w-lg font-medium text-black tracking-wider">
                {intro.description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <MotionImage
                src={intro.imageUrl}
                alt={intro.imageAlt}
                className="w-full aspect-square md:aspect-4/3"
              />
            </div>
          </div>

          {/* Row 2: Challenge Section (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5">
              <MotionImage
                src={challenge.imageUrl}
                alt={challenge.imageAlt}
                className="w-full aspect-square md:aspect-4/5"
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
              <span className="sm:col-span-4 text-base md:text-xl uppercase text-gray-400 tracking-wider whitespace-nowrap">
                {challenge.index}
              </span>
              <p className="sm:col-span-8 text-base md:text-2xl font-medium text-black leading-snug">
                {challenge.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
