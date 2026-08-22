import { Container } from "../common/Container";
import ParallaxImage from "../ui/ParallaxImage";

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
    <section className="pb-16 bg-white text-gray-900 font-sans">
      <Container>
        <div>
          {/* Row 1: Intro Section (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex gap-4 items-start">
              <span className="text-lg uppercase text-gray-400 tracking-wider">
                {intro.index}
              </span>
              <p className="text-base md:text-lg lg:text-xl font-medium text-black leading-snug">
                {intro.description}
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-100">
                <ParallaxImage
                  src={intro.imageUrl}
                  alt={intro.imageAlt}
                  speed={10}
                  imgClassName="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Challenge Section (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 w-full overflow-hidden bg-gray-100">
                <ParallaxImage
                  src={challenge.imageUrl}
                  alt={challenge.imageAlt}
                  speed={10}
                  imgClassName="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
              <span className="sm:col-span-4 text-base md:text-lg lg:text-xl font-mono uppercase text-gray-400 tracking-wider">
                {challenge.index}
              </span>
              <p className="sm:col-span-8 text-base md:text-lg lg:text-xl font-medium text-black leading-snug">
                {challenge.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
