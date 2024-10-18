"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import biton from "../public/opera-biton.png";
import bait from "../public/opera-bait.png";
import satine from "../public/opera-satine.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import required Swiper modules (optional)
import SwiperCore from "swiper";
import { useState } from "react";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function RelevantProducts() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-white flex flex-col justify-between md:items-start items-center h-full px-24 py-12 overflow-hidden">
      <h1 className="text-black font-sans font-bold text-5xl md:text-start text-center">
        Travail avec un excellent <span className="block">Produit.</span>
      </h1>
      <div className="flex xl:flex-row flex-col justify-center items-start mt-2">
        <p className="max-w-[300px] max-xl:hidden text-xl text-[#6A6A6A] font-medium relative md:top-6 md:text-start text-center">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>

        <div className="flex justify-center items-center space-x-6 w-full">
          <Swiper
            slidesPerView={3} // Default to 1 slide per view
            centeredSlides={true}
            autoplay={{
              delay: 1500,
            }}
            loop={true}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              // When the screen width is 640px or greater
              640: {
                slidesPerView: 1, // 1 slide for mobile
              },
              // When the screen width is 768px or greater
              768: {
                slidesPerView: 2, // 2 slides for tablet
              },
              // When the screen width is 1024px or greater
              1024: {
                slidesPerView: 3, // 3 slides for desktop
              },
            }}>
            <SwiperSlide>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer`}>
                <div
                  className={`${
                    activeIndex === 0 ? "bg-[#F9BF29]" : ""
                  } opacity-40 h-[296px] w-[257px] absolute rounded-3xl transition-colors duration-300`}></div>
                <Image
                  className="relative z-40"
                  src={biton}
                  width={174}
                  height={183}
                  alt="Béton Fix"
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  Béton Fix
                </h2>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer`}>
                <div
                  className={`${
                    activeIndex === 1 ? "bg-[#F9BF29]" : ""
                  } opacity-40 h-[296px] w-[257px] absolute rounded-3xl transition-colors duration-300`}></div>
                <Image
                  className="relative z-40"
                  src={bait}
                  width={174}
                  height={183}
                  alt="Opéra Mat"
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  Opéra Mat
                </h2>
              </motion.div>
            </SwiperSlide>

            <SwiperSlide>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer`}>
                <div
                  className={`${
                    activeIndex === 2 ? "bg-[#F9BF29]" : ""
                  } opacity-40 h-[296px] w-[257px] absolute rounded-3xl transition-colors duration-300`}></div>
                <Image
                  className="relative z-40 w-[142px] h-[160px]"
                  src={satine}
                  width={174}
                  height={183}
                  alt="Satiné"
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  Satiné
                </h2>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* <div className="grid xl:hidden md:grid-cols-3 grid-cols-1 justify-center items-center space-x-6 space-y-4 py-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40"
            src={biton}
            width={150}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Béton Fix
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40"
            src={bait}
            width={174}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Opéra Mat
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40 w-[142px] h-[160px]"
            src={satine}
            width={174}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Satiné
          </h2>
        </div>
      </div> */}

      <Button
        variant="default"
        className="relative rounded-full text-xl px-8 py-6 mt-5">
        Plus
      </Button>
    </section>
  );
}

export default RelevantProducts;
