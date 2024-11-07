"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SwiperSlide, Swiper } from "swiper/react";
import HeroSection from "./HeroSection";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { ChevronDown, CircleHelp, Globe, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/Navigation";
import Link from "next/link";
import Navbar from "./Navbar";

export default function BackgroundSlider() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[800px]">
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
            className="object-cover max-w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={bgPhoto2}
            alt="Photo by Drew Beamer"
            fill
            className="object-cover max-w-full w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
      {/* Overlay content */}
      <div className="absolute inset-0 z-20 flex items-center justify-around xl:w-2/3 m-4">
        <HeroSection />
      </div>
    </div>
  );
}
