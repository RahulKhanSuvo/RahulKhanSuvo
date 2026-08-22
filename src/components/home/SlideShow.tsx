"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { cn } from "@/lib/utils";

interface SlideShowProps {
  images: {
    src: StaticImageData | string;
    alt: string;
  }[];
  className?: string;
}

function SlideShow({ images, className }: SlideShowProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      loop
      speed={100}
      autoplay={{
        delay: 400,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      allowTouchMove={false}
      className={cn(className)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-fill"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideShow;
