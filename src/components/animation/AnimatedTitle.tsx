"use client";

import { motion } from "motion/react";

interface AnimatedTitleProps {
  title: string;
  className?: string;
  isHovered?: boolean;
}

export default function AnimatedTitle({
  title,
  className = "",
  isHovered = false,
}: AnimatedTitleProps) {
  const letters = title.split("");

  return (
    <motion.h2
      aria-label={title}
      animate={isHovered ? "visible" : "hidden"}
      className={className}
    >
      <span className="sr-only">{title}</span>

      <span aria-hidden="true" className="flex">
        {letters.map((letter, index) => {
          const char = letter === " " ? "\u00A0" : letter;

          return (
            <span
              key={`${char}-${index}`}
              className="relative inline-block h-[1em] overflow-hidden"
            >
              {/* Current letter */}
              <motion.span
                variants={{
                  hidden: {
                    y: "0%",
                  },
                  visible: {
                    y: "-100%",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                      mass: 0.8,
                      delay: index * 0.035,
                    },
                  },
                }}
                className="relative block"
              >
                {char}
              </motion.span>

              {/* Incoming letter */}
              <motion.span
                variants={{
                  hidden: {
                    y: "100%",
                  },
                  visible: {
                    y: "0%",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 28,
                      mass: 0.8,
                      delay: index * 0.035,
                    },
                  },
                }}
                className="absolute left-0 top-0 block"
              >
                {char}
              </motion.span>
            </span>
          );
        })}
      </span>
    </motion.h2>
  );
}
