"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface MotionImageProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  amount?: number;
}

export default function MotionImage({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover",
  priority,
  amount = 48,
}: MotionImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-gray-100 ${className}`}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-12%] h-[124%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={imgClassName}
        />
      </motion.div>
    </div>
  );
}
