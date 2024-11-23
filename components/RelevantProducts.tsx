"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

import biton from "../public/opera-biton.png";
import bait from "../public/opera-bait.png";
import satine from "../public/Satine.png";
import AntiBact from "../public/AntiBact.png";
import Plafoni from "../public/Plafoni.png";
import FixateurPlus from "../public/fixateur.png";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";

const products = [
  {
    id: 0,
    src: Plafoni,
    alt: {
      en: "Plafoni",
      fr: "Plafoni",
      ar: "بلافوني",
    },
    name: {
      en: "Plafoni",
      fr: "Plafoni",
      ar: "بلافوني",
    },
  },
  {
    id: 1,
    src: biton,
    alt: {
      en: "Béton Fix",
      fr: "Béton Fix",
      ar: "بيتون فيكس",
    },
    name: {
      en: "Béton Fix",
      fr: "Béton Fix",
      ar: "بيتون فيكس",
    },
  },
  {
    id: 2,
    src: bait,
    alt: {
      en: "Opéra Mat",
      fr: "Opéra Mat",
      ar: "أوبرا مات",
    },
    name: {
      en: "Opéra Mat",
      fr: "Opéra Mat",
      ar: "أوبرا مات",
    },
  },
  {
    id: 3,
    src: satine,
    alt: {
      en: "Satiné",
      fr: "Satiné",
      ar: "ساتيني",
    },
    name: {
      en: "Satiné",
      fr: "Satiné",
      ar: "ساتيني",
    },
  },
  {
    id: 4,
    src: AntiBact,
    alt: {
      en: "Anti Bact",
      fr: "Anti Bact",
      ar: "أنتي باكت",
    },
    name: {
      en: "Anti Bact",
      fr: "Anti Bact",
      ar: "أنتي باكت",
    },
  },
  {
    id: 5,
    src: FixateurPlus,
    alt: {
      en: "Fixateur Plus",
      fr: "Fixateur Plus",
      ar: "فيكساتور بلس",
    },
    name: {
      en: "Fixateur Plus",
      fr: "Fixateur Plus",
      ar: "فيكساتور بلس",
    },
  },
];

function RelevantProducts() {
  const { switchLanguage, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section
      dir={language == "ar" ? "rtl" : "ltr"}
      id="trav"
      className="bg-white flex flex-col justify-center md:items-center xl:items-start h-full px-24 py-12 overflow-hidden">
      <h1 className="text-black font-sans font-bold text-5xl xl:text-start text-center">
        {Language.productSection.title[language]}{" "}
      </h1>

      <p className="min-w-[220px] xl:hidden text-xl text-[#6A6A6A] font-medium relative md:top-6 xl:text-start text-center mb-8">
        {Language.productSection.subtitle[language]}{" "}
      </p>

      <div className="flex">
        <div className="flex items-start justify-start mt-2">
          <div className="flex flex-col justify-center items-start xl:py-6 mb-6 w-full">
            <p className="max-w-[300px] min-w-[220px] max-xl:hidden text-xl text-[#6A6A6A] font-medium relative md:top-6 xl:text-start text-center">
              {Language.productSection.subtitle[language]}{" "}
            </p>

            <Button
              variant="default"
              className="relative top-12 py-0 rounded-full w-[120px] text-xl px-8 text-center xl:text-start max-xl:hidden">
              {Language.productSection.button.text[language]}{" "}
            </Button>
          </div>

          <div className="xl:hidden w-[800px]">
            <Swiper
              slidesPerView={3}
              centeredSlides={true}
              autoplay={{
                delay: 1500,
                reverseDirection: language == "ar",
                disableOnInteraction: true,
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
                    src={products[0].src}
                    width={174}
                    height={183}
                    alt={products[0].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[0].name[language]}
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
                    src={products[1].src}
                    width={174}
                    height={183}
                    alt={products[1].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[1].name[language]}
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
                    src={products[2].src}
                    width={174}
                    height={183}
                    alt={products[2].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[2].name[language]}
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
                    src={products[3].src}
                    width={174}
                    height={183}
                    alt={products[3].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[3].name[language]}
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
                    src={products[4].src}
                    width={174}
                    height={183}
                    alt={products[4].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[4].name[language]}
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
                    src={products[5].src}
                    width={174}
                    height={183}
                    alt={products[5].alt[language]}
                  />
                  <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                    {products[5].name[language]}
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
              disableOnInteraction: true,
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
                  src={products[0].src}
                  width={174}
                  height={183}
                  alt={products[0].alt[language]}
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  {products[0].name[language]}
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
                  src={products[1].src}
                  width={174}
                  height={183}
                  alt={products[1].alt[language]}
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  {products[1].name[language]}
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
                  src={products[2].src}
                  width={174}
                  height={183}
                  alt={products[2].alt[language]}
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  {products[2].name[language]}
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
                  src={products[3].src}
                  width={174}
                  height={183}
                  alt={products[3].alt[language]}
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  {products[3].name[language]}
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
                  src={products[4].src}
                  width={174}
                  height={183}
                  alt={products[4].alt[language]}
                />
                <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
                  {products[4].name[language]}
                </h2>
              </motion.div>
            </SwiperSlide>

            {/* More than 4 will cause probleme in large screens*/}
          </Swiper>
        </div>
      </div>

      <Button
        variant="default"
        className="relative top-24 rounded-full text-xl px-8 py-6 mt-5 xl:hidden">
        {Language.productSection.button.text[language]}{" "}
      </Button>
    </section>
  );
}

export default RelevantProducts;
