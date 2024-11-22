"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SwiperSlide, Swiper } from "swiper/react";
import HeroSection from "./HeroSection";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import Navbar from "./Navbar";
import { useLanguage } from "@/zustand";

export default function BackgroundSlider() {
  const { language } = useLanguage();

  return (
    <section
      className={`flex flex-col justify-center ${
        language == "ar" ? "items-end" : "items-center"
      } w-full h-[800px]`}>
      <Navbar />
      {/* Swiper Setup */}
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full z-0 myswiper">
        <SwiperSlide>
          <Image
            src={bgPhoto}
            alt="Photo by Drew Beamer"
            fill
            className={`object-cover max-w-full h-auto ${
              language === "ar" ? "rtl-image" : ""
            }`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bgPhoto2}
            alt="Photo by Drew Beamer"
            fill
            className={`object-cover max-w-full w-full h-auto ${
              language === "ar" ? "rtl-image" : ""
            }`}
          />
        </SwiperSlide>
      </Swiper>

      {/* flex flex-col justify-center items-end w-full h-[800px] */}
      {/* flex flex-col justify-end items-start font-open */}
      {/* Overlay content */}
      <div
        className={`absolute ${
          language !== "ar" && "inset-0"
        } z-20 flex items-center justify-around xl:w-2/3 m-4 mx-12`}>
        <HeroSection />
      </div>
    </section>
  );
}
