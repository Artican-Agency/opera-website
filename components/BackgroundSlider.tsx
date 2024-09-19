"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SwiperSlide, Swiper } from "swiper/react";
import HeroSection from "./HeroSection";
import bgPhoto from "../public/bg-1.png";
import Image from "next/image";

export default function BackgroundSlider() {
  return (
    <div className="relative w-full h-screen">
      {/* Swiper Setup */}
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000, // 5 seconds interval
          disableOnInteraction: false,
        }}
        className="w-full h-full">
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
              src={bgPhoto}
              alt="Photo by Drew Beamer"
              fill
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <HeroSection />
      </div>
    </div>
  );
}
