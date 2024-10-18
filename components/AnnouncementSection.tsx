"use client";
import Image from "next/image";
import yellow_bg from "@/public/yellow-bg.svg";
import lac from "@/public/opera-lac.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function AnnouncementSection() {
  return (
    <div className="relative h-[400px] overflow-hidden w-2/3 rounded-2xl m-6 p-12 mx-12">
      <Image
        src={yellow_bg}
        alt="Yellow textured background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute inset-0 bg-yellow-400/30 z-10">
        <Swiper
          slidesPerView={3} // Default to 1 slide per view
          centeredSlides={true}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}>
          <SwiperSlide>
            <div className="h-full w-full max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center">
              {/* Product Image */}
              <div className="mb-6 md:mb-0 md:mr-12 mt-6 md:mt-0">
                <Image
                  src={lac}
                  alt="Etenche Plus paint bucket"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              {/* Product Information */}
              <div className="text-white max-w-md text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">Etenche Plus</h2>
                <p className="mb-6 text-sm md:text-base">
                  Qeydiyyatli hesabdan birdefaye edilen her 10 AZN ve uzeri
                  Azersu odenisleri ucun, aninda 3-QAT
                </p>
                <button className="bg-[#2C2C2C] text-white font-sans p-2 px-4 rounded-lg font-medium">
                  Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
