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
    <section className="pb-6 bg-white text-gray-900">
      <Container>
        <div className="flex flex-col gap-10 md:gap-6">
          {/* Row 1: Intro Section (Text Left, Image Right) */}
          <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:items-start">
            <div className="md:col-span-5 flex flex-col gap-2 md:gap-4">
              <span className="text-base lg:text-xl uppercase text-gray-400 tracking-wider whitespace-nowrap">
                {intro.index}
              </span>
              <p className="text-base lg:text-2xl font-medium text-black tracking-wider">
                {intro.description}
              </p>
            </div>
            <div className="md:col-span-7">
              <MotionImage
                src={intro.imageUrl}
                alt={intro.imageAlt}
                className="w-full aspect-square md:aspect-4/3"
              />
            </div>
          </div>

          {/* Row 2: Challenge Section (Image Left, Text Right) */}
          <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:items-end">
            <div className="md:col-span-5">
              <MotionImage
                src={challenge.imageUrl}
                alt={challenge.imageAlt}
                className="w-full aspect-square md:aspect-4/5"
              />
            </div>
            <div className="md:col-span-7 flex flex-col lg:grid grid-cols-1 sm:grid-cols-12 gap-4">
              <span className="sm:col-span-4 text-base lg:text-xl uppercase text-gray-400 tracking-wider whitespace-nowrap">
                {challenge.index}
              </span>
              <p className="sm:col-span-8 text-base lg:text-2xl font-medium text-black leading-snug">
                {challenge.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
