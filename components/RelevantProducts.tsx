"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import biton from "../public/opera-biton.png";
import bait from "../public/opera-bait.png";
import satine from "../public/opera-satine.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

function RelevantProducts() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="bg-white flex flex-col justify-center md:items-center xl:items-start h-full px-24 py-12 overflow-hidden">
      <h1 className="text-black font-sans font-bold text-5xl xl:text-start text-center">
        Travail avec un excellent <span className="block">Produit.</span>
      </h1>

      <p className="min-w-[220px] xl:hidden text-xl text-[#6A6A6A] font-medium relative md:top-6 xl:text-start text-center mb-8">
        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
        vivethe as it was for us to know what was to be done.
      </p>

      <div className="flex">
        <div className="flex items-start justify-start mt-2">
          <div className="flex flex-col justify-center items-start xl:py-6 mb-6 w-full">
            <p className="max-w-[300px] min-w-[220px] max-xl:hidden text-xl text-[#6A6A6A] font-medium relative md:top-6 xl:text-start text-center">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>

            <Button
              variant="default"
              className="relative top-12 py-0 rounded-full w-[120px] text-xl px-8 text-center xl:text-start max-xl:hidden">
              Plus
            </Button>
          </div>

          <div className="xl:hidden w-[800px]">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
              }}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              modules={[Navigation, Autoplay, Pagination]}>
              <SwiperSlide>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                  className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                  className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                  className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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

        <div className="xl:w-1/2 lg:w-full max-xl:hidden">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            modules={[Navigation, Autoplay, Pagination]}>
            <SwiperSlide>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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
                className="relative h-[296px] w-[257px] flex flex-col justify-center items-center cursor-pointer">
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

      <Button
        variant="default"
        className="relative top-24 rounded-full text-xl px-8 py-6 mt-5 xl:hidden">
        Plus
      </Button>
    </section>
  );
}

export default RelevantProducts;
