import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../ui/scroll-based-velocity";

function HeroSection() {
  return (
    <section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden h-screen">
        <ScrollVelocityContainer className="font-bold font-heading first-letter:uppercase leading-none md:text-[15rem] pt-20">
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
    </section>
  );
}
export default HeroSection;
