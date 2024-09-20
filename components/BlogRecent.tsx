"use client"
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function BlogRecent() {
  return (
    <section className="bg-white flex flex-col justify-between items-start h-full px-24">
      <div className="flex justify-between text-center w-full">
        <h1 className="text-[#2F2F2F] text-5xl font-semibold">
          Les blogs recents
        </h1>

        <a
          className="xl:flex hidden justify-center items-center text-[#2F2F2F] font-sans text-sm font-semibold"
          href="">
          Plus de blogs
          <span>
            <ArrowRight width={24} height={24} />
          </span>
        </a>
      </div>
      <div className="2xl:flex hidden justify-center items-start p-12">
        <div className="flex flex-col items-start">
          <Image
            src={bgPhoto}
            alt="Photo"
            className="object-cover max-w-full h-72"
          />

          <h2 className="font-sans font-normal py-4 text-sm text-[#2F2F2F]">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <Image
            src={bgPhoto2}
            alt="Photo"
            className="object-cover max-w-full h-72"
          />

          <h2 className="font-sans font-normal py-4 text-sm text-[#2F2F2F]">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <Image
            src={bgPhoto}
            alt="Photo"
            className="object-cover max-w-full h-72"
          />

          <h2 className="font-sans font-normal py-4 text-sm text-[#2F2F2F]">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
      </div>

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
    </section>
  );
}

export default BlogRecent;
