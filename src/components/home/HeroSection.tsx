import { Container } from "../common/Container";
import heroImage from "@/assets/images/suvo.png";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";
import GlitchImage from "./GlitchImage";

function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen flex justify-between flex-col py-5">
      <div className="absolute w-87.5 h-130  left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/7 z-10">
        <GlitchImage src={heroImage} alt="Hero" />
      </div>
      <div className="relative">
        <ScrollVelocityContainer className="font-bold font-heading first-letter:uppercase leading-none md:text-[16rem] pt-30">
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
      <Container className="flex justify-between items-center gap-4 w-full">
        {/*socil link*/}
        <div className="flex gap-4">
          <a href="#">Github</a>
          <a href="#">LinkedIn</a>
          <a href="#">WhatsApp</a>
        </div>
        {/*open to work*/}
        <div className="flex items-center gap-2">
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
