import { Container } from "../common/Container";
import MotionImage from "../ui/MotionImage";

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
  solutionText = "",
  resultIndex = "04 — RESULT",
  resultHeading = "",
  bannerImageUrl = "",
  bannerImageAlt = "",
  sideImageUrl = "",
  sideImageAlt = "",
}: SolutionResultProps) {
  return (
    <section className="pb-6 bg-white text-gray-900">
      <Container>
        {/* Top Banner Image */}
        <MotionImage
          src={bannerImageUrl}
          alt={bannerImageAlt}
          className="w-full aspect-square md:aspect-[2.2/1] mb-4 sm:mb-6"
        />

        {/* Bottom Content & Side Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Solution, Branding, and Result */}
          <div className="md:col-span-7 flex flex-col justify-between h-full pt-2">
            {/* Solution Block */}
            <div className="flex flex-col lg:grid grid-cols-1 sm:grid-cols-12 gap-2 items-start">
              <span className="sm:col-span-4 text-base lg:text-xl  uppercase text-gray-400 tracking-wider">
                {solutionIndex}
              </span>
              <p className="sm:col-span-8 text-base lg:text-2xl font-medium text-black leading-snug">
                {solutionText}
              </p>
            </div>
            {/* Result Block */}
            <div className="hidden md:flex flex-col lg:grid grid-cols-12 gap-4 lg:items-start">
              <span className="sm:col-span-4 text-base lg:text-xl  uppercase text-gray-400 tracking-wider">
                {resultIndex}
              </span>
              <h2 className="sm:col-span-8 text-base lg:text-2xl font-medium text-black leading-tight">
                {resultHeading}
              </h2>
            </div>
          </div>

          {/* Right Column: Tall Architectural Image */}
          <div className="md:col-span-5">
            <div className="relative aspect-[3/3.50] w-full overflow-hidden bg-gray-100">
              <MotionImage
                src={sideImageUrl}
                alt={sideImageAlt}
                className="w-full aspect-[3/3.50]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-3.5 items-start md:hidden">
              <span className="sm:col-span-4 text-base lg:text-xl  uppercase text-gray-400 tracking-wider">
                {resultIndex}
              </span>
              <h2 className="sm:col-span-8 text-base lg:text-2xl font-medium text-black leading-tight">
                {resultHeading}
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
