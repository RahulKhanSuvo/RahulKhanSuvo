import { Container } from "../common/Container";
import { SectionTitle } from "../shared/SectionTitle";

export const AboutSection = () => {
  return (
    <section id="about" className="h-screen py-32">
      <Container className="flex flex-col gap-14">
        <div className="space-y-5">
          <p className="text-gray-600">(01)</p>
          <div className="w-full h-[0.2px] bg-gray-200"></div>
        </div>
        <div>
          <div>
            {" "}
            <SectionTitle>About</SectionTitle>
            <p className="text-4xl text-gray-600">
              I design and develop digital experiences with a focus on craft,
              motion, and interaction — creating interfaces where every detail
              is intentional.
            </p>
          </div>
          <div></div>
        </div>
      </Container>
    </section>
  );
};
