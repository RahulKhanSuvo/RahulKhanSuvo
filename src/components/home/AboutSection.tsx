// "use client";

// import { motion } from "motion/react";
import { Container } from "../common/Container";
import { SectionTitle } from "../shared/SectionTitle";
// import CountUp from "../CountUp";
import ScrollReveal from "../ScrollReveal";

// const stats = [
//   { value: 1, suffix: "+", label: "Years of Professional Experience" },
//   { value: 3, suffix: "+", label: "Years Building Web Applications" },
//   { value: 15, suffix: "+", label: "Projects Delivered" },
//   { value: 100, suffix: "%", label: "Commitment to Craft" },
// ];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-neutral-900">
      <Container className="flex flex-col">
        {/* Top line and section counter */}
        <div className="w-full border-t border-neutral-200 pt-6 pb-12 sm:pb-16">
          <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
            (01)
          </span>
        </div>

        {/* Header with Title and Dot */}
        {/*<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-6 sm:gap-12 md:gap-16"
        >
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-neutral-900 leading-none">
            ABOUT
          </h2>
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-neutral-900 mb-1 sm:mb-2 md:mb-3 inline-block shrink-0" />
        </motion.div>*/}

        <SectionTitle>ABOUT</SectionTitle>

        {/* Lead Statement — word-by-word scroll reveal */}
        <div className="mt-14 sm:mt-18 lg:mt-20 w-full space-y-6 sm:space-y-7 lg:space-y-8">
          <ScrollReveal
            containerClassName="!my-0"
            textClassName="!text-xl sm:!text-2xl lg:!text-[1.75rem] !font-normal tracking-tight text-neutral-800 leading-snug sm:leading-relaxed lg:leading-[1.5]"
          >
            Good software starts with understanding the problem, not just the
            requirement.
          </ScrollReveal>
          <ScrollReveal
            containerClassName="!my-0"
            textClassName="!text-xl sm:!text-2xl lg:!text-[1.75rem] !font-normal tracking-tight text-neutral-800 leading-snug sm:leading-relaxed lg:leading-[1.5]"
          >
            I like to understand what a product is trying to achieve before
            deciding how it should be built. That means thinking about the user
            experience, technical trade-offs, performance, maintainability, and
            what makes sense for the product as it grows.
          </ScrollReveal>
          <ScrollReveal
            containerClassName="!my-0"
            textClassName="!text-xl sm:!text-2xl lg:!text-[1.75rem] !font-normal tracking-tight text-neutral-800 leading-snug sm:leading-relaxed lg:leading-[1.5]"
          >
            With 2+ years of hands-on development experience, including 1+ year
            in a professional role and current contract-based work, I&apos;ve
            built web applications across frontend, backend, APIs, databases,
            and the systems connecting them.
          </ScrollReveal>
          <ScrollReveal
            containerClassName="!my-0"
            textClassName="!text-xl sm:!text-2xl lg:!text-[1.75rem] !font-normal tracking-tight text-neutral-800 leading-snug sm:leading-relaxed lg:leading-[1.5]"
          >
            I&apos;m comfortable taking ownership of a problem, working across
            different parts of a product, and making practical decisions instead
            of adding unnecessary complexity.
          </ScrollReveal>
          <ScrollReveal
            containerClassName="!my-0"
            textClassName="!text-xl sm:!text-2xl lg:!text-[1.75rem] !font-semibold tracking-tight text-neutral-900 leading-snug sm:leading-relaxed lg:leading-[1.5]"
          >
            I don&apos;t just want to complete the task. I want to understand it
            well enough to build the right solution.
          </ScrollReveal>
        </div>

        {/* Key Metrics / Stats */}
        {/*<motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-28 sm:mt-36 grid grid-cols-2 lg:grid-cols-4 border-t border-neutral-200 pt-12 gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2  items-center text-center"
            >
              <p className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900">
                <CountUp to={stat.value} className="inline-block" />
                <span>{stat.suffix}</span>
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-56 leading-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>*/}
      </Container>
    </section>
  );
};
