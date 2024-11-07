"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import bgPhoto from "../public/bg-1.png";
import bgPhoto2 from "../public/bg-2.png";
import bgPhoto3 from "../public/post-1.png";
import bgPhoto4 from "../public/post-2.png";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useWindowWidth } from "@react-hook/window-size";

function BlogRecent() {
  const windoWidth = useWindowWidth();

  return (
    <section className="bg-white flex flex-col justify-between items-center h-full lg:px-24 px-4">
      <div className="flex justify-between text-center w-full">
        <h1 className="text-[#2F2F2F] text-5xl font-semibold">
          Les blogs recents
        </h1>

        <a
          className="xl:flex hidden justify-center items-center text-[#2F2F2F] text-sm font-semibold font-open"
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

          <h2 className="font-normal py-4 text-sm text-[#2F2F2F] font-open">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <Image
            src={bgPhoto2}
            alt="Photo"
            className="object-cover max-w-full h-72"
          />

          <h2 className="font-open font-normal py-4 text-sm text-[#2F2F2F]">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
        <div className="flex flex-col items-start">
          <Image
            src={bgPhoto3}
            alt="Photo"
            className="object-cover max-w-full h-72"
          />

          <h2 className="font-open font-normal py-4 text-sm text-[#2F2F2F]">
            First Time Home Owner Ideas <span className="block">by Opéra</span>
          </h2>
        </div>
      </div>

      <div className="2xl:hidden w-full h-96 py-4">
        <Swiper
          autoplay={{
            delay: 3000,
          }}
          slidesPerView={windoWidth > 500 ? 1.5 : 1}
          modules={[Autoplay]}
          className="w-full h-full z-0 myswiper">
          <SwiperSlide>
            <Image
              src={bgPhoto3}
              alt="Photo by Drew Beamer"
              fill
              className="object-cover max-w-full w-full h-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bgPhoto4}
              alt="Photo by Drew Beamer"
              fill
              className="object-center max-w-full h-auto"
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
      </div>
    </section>
  );
}

export default BlogRecent;
