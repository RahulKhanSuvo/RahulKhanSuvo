import { Container } from "../common/Container";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";

function HeroSection() {
  return (
    <section className="relative overflow-hidden h-screen flex justify-between flex-col py-5">
      <div className="relative">
        <ScrollVelocityContainer className="font-bold font-heading first-letter:uppercase leading-none md:text-[16rem] pt-30">
          <ScrollVelocityRow
            baseVelocity={18}
            direction={1}
            pauseOnHover
            gap={64}
          >
            FRONTEND DEVELOPER
          </ScrollVelocityRow>
          <ScrollVelocityRow
            baseVelocity={18}
            direction={-1}
            pauseOnHover
            gap={64}
          >
            BACKEND DEVELOPER
          </ScrollVelocityRow>
          <ScrollVelocityRow
            baseVelocity={18}
            direction={1}
            pauseOnHover
            gap={64}
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
          <div className="w-2 h-2 font-light rounded-full animate-blink bg-green-500"></div>
          <p>OPEN TO WORK</p>
        </div>
      </Container>
    </section>
  );
}
export default HeroSection;
