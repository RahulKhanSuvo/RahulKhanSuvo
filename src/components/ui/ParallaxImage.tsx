"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string | StaticImageData;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  speed?: number;
}

export default function ParallaxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover",
  priority,
  speed = 10,
}: ParallaxImageProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `-${speed}%`]);

  return (
    <motion.div
      style={{
        y,
        top: `-${speed}%`,
        height: `${100 + 2.5 * speed}%`,
      }}
      className={`absolute inset-x-0 ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} className={imgClassName} />
    </motion.div>
  );
}
