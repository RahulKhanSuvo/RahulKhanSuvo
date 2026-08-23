import { Container } from "../common/Container";
import heroImage from "@/assets/images/suvo.png";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";
import GlitchImage from "./GlitchImage";

function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen flex justify-between flex-col py-5 px-1">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[62vw] max-w-72 sm:max-w-80 md:w-88 aspect-87.5/130">
        <GlitchImage src={heroImage} alt="Hero" />
      </div>
      <div className="relative">
        <ScrollVelocityContainer className="font-bold font-heading first-letter:uppercase text-[12rem]/[0.9] sm:text-[8rem]/[0.9] md:text-[16rem]/[0.9] pt-18 sm:pt-24 md:pt-30">
          <ScrollVelocityRow
            baseVelocity={18}
            direction={1}
            pauseOnHover
            gap={64}
            className="relative z-20 text-white mix-blend-exclusion"
          >
            FRONTEND DEVELOPER
          </ScrollVelocityRow>
          <ScrollVelocityRow
            baseVelocity={18}
            direction={-1}
            pauseOnHover
            gap={64}
            className="relative z-0"
          >
            BACKEND DEVELOPER
          </ScrollVelocityRow>
          <ScrollVelocityRow
            baseVelocity={18}
            direction={1}
            pauseOnHover
            gap={64}
            className="relative z-20 text-white mix-blend-difference"
          >
            FULLSTACK DEVELOPER
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </div>
      <Container className="flex gap-3 w-full flex-row justify-between sm:items-center sm:gap-4">
        {/*socil link*/}
        <div className="flex flex-wrap gap-3 text-sm sm:gap-4 sm:text-base">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/RahulKhanSuvo"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/rahul-khan-suvo"
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/8801609553810"
          >
            WhatsApp
          </a>
        </div>
        {/*open to work*/}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          {/*blink dot*/}
          <span className="relative flex size-2 ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </span>
          <p>OPEN TO WORK</p>
        </div>
      </Container>
    </section>
  );
}
export default HeroSection;
