"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../common/Container";
import { servicesData, Service } from "@/data/servicesData";

interface ServicesSectionProps {
  services?: Service[];
  defaultOpenId?: string;
}

export const ServicesSection = ({
  services = servicesData,
  defaultOpenId = "full-stack-development",
}: ServicesSectionProps) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleService = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // Helper for responsive alignment container styles
  const getAlignmentClass = (
    index: number,
    alignment?: Service["alignment"],
  ) => {
    const isRight =
      alignment === "right" || (alignment !== "left" && index % 2 === 1);
    return isRight ? "items-end text-right ml-auto" : "items-start text-left";
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-white text-neutral-900 overflow-hidden"
    >
      <Container className="flex flex-col">
        {/* Section Tag */}
        <div className="w-full border-t border-neutral-200 pt-6 pb-16 sm:pb-20">
          <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider">
            (SERVICES)
          </span>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
          {services.map((service, index) => {
            const isOpen = openId === service.id;

            return (
              <div
                key={service.id}
                className={`flex flex-col max-w-full ${getAlignmentClass(index, service.alignment)}`}
              >
                {/* Clickable Header Row */}
                <div
                  onClick={() => toggleService(service.id)}
                  className="inline-flex items-baseline cursor-pointer group flex-wrap gap-x-3 sm:gap-x-4 select-none"
                >
                  {/* Title */}
                  <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.25rem] font-bold tracking-tight text-neutral-900 leading-none transition-colors duration-300 group-hover:text-neutral-600">
                    {service.title}
                  </h3>

                  {/* Inline Image Pill with Parentheses */}
                  <span className="inline-flex items-baseline font-light text-2xl sm:text-4xl md:text-5xl lg:text-[4.5rem] text-neutral-900">
                    (
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                      className="relative inline-flex items-center justify-center align-middle mx-1 sm:mx-2 h-[1.15em] w-[2.2em] sm:w-[2.6em] overflow-hidden rounded-[0.4em] border border-neutral-300 shadow-sm bg-neutral-100"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                      />
                    </motion.span>
                    )
                  </span>

                  {/* Close indicator when active */}
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -5 }}
                      className="text-xs sm:text-sm font-mono text-neutral-400 lowercase ml-2 align-baseline self-center"
                    >
                      (close)
                    </motion.span>
                  )}
                </div>

                {/* Expanded Content Sub-row */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden mt-4 sm:mt-5 flex flex-col gap-3"
                    >
                      <p className="text-base sm:text-lg font-normal text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-[0.7rem] sm:text-xs tracking-[0.2em] font-mono text-neutral-400 uppercase leading-relaxed pt-1">
                        {service.tags.join(" · ")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
