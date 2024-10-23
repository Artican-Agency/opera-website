"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SwiperSlide, Swiper } from "swiper/react";
import HeroSection from "./HeroSection";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { CircleHelp, Globe, Menu } from "lucide-react";

export default function BackgroundSlider() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[800px]">
      <nav className="absolute top-0 z-50 flex items-center justify-center w-full my-4">
        <div className="flex justify-between items- md:w-2/3 w-11/12 space-x-6">
          <a href="/">
            <Image
              src="/logo-opera.svg"
              alt="Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </a>

          <div className="flex justify-center items-center space-x-4 xl:hidden max-md:w-1/4">
            <button className="bg-transparent xl:block hidden">
              <CircleHelp color="white" />
            </button>

            <button className="bg-transparent">
              <Globe color="white" />
            </button>

            <button>
              <Menu color="white" height={30} width={30} />
            </button>
          </div>

          <div className="xl:flex justify-around items-center w-2/3 space-x-12 hidden">
            <ul className="flex justify-evenly items-center space-x-12">
              <li className="font-sans">
                <a href="/">Acceuil</a>
              </li>
              <li className="font-sans">
                <a href="#Qui" className="whitespace-nowrap">
                  Qui sommes nous
                </a>
              </li>
              <li className="font-sans">
                <a href="#Qui">Produits</a>
              </li>
              <li className="font-sans">
                <a href="#Blogs">Blog&Vidéos</a>
              </li>
              <li className="font-sans">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <div className="flex justify-center items-center space-x-4">
              <button className="bg-transparent">
                <CircleHelp color="white" />
              </button>

              <button className="bg-transparent">
                <Globe color="white" />
              </button>
            </div>
          </div>
        </div>
      </nav>
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
