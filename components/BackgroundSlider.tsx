"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SwiperSlide, Swiper } from "swiper/react";
import HeroSection from "./HeroSection";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";

import Image from "next/image";

import "swiper/css";

export default function BackgroundSlider() {
  return (
    <div className="relative w-full h-screen">
      {/* Swiper Setup */}
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="w-full h-full z-0 mySwiper">
        <SwiperSlide>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={bgPhoto}
              alt="Photo by Drew Beamer"
              fill
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </SwiperSlide>
        <SwiperSlide>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={bgPhoto2}
              alt="Photo by Drew Beamer"
              fill
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </SwiperSlide>
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <HeroSection />
      </div>
    </div>
  );
}
