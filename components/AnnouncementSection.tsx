"use client";
import Image from "next/image";
import yellow_bg from "@/public/yellow-bg.svg";
import lac from "@/public/opera-lac.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';


export default function AnnouncementSection() {
  return (
    <div className="announce relative lg:h-[296px] h-fit overflow-hidden w-2/3 rounded-2xl m-6 p-12 mx-12">
      <Image
        src={yellow_bg}
        alt="Yellow textured background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="bg-yellow-400/30 z-10">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
          }}
          loop={true}
          className="mySwiper"
          pagination={true}
          modules={[Navigation, Autoplay,Pagination]}>
          <SwiperSlide>
            <div className="h-full w-full max-w-3xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6">
                <Image
                  src={lac}
                  alt="Etenche Plus paint bucket"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              <div className="text-white max-w-md text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Etenche Plus</h2>
                <p className="mb-6 text-sm lg:text-base">
                  Qeydiyyatli hesabdan birdefaye edilen her 10 AZN ve uzeri
                  Azersu odenisleri ucun, aninda 3-QAT
                </p>
                <button className="bg-[#2C2C2C] text-white font-sans p-2 px-4 rounded-lg font-medium mb-4">
                  Details
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full w-full max-w-3xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
              {/* Product Image */}
              <div className="mb-6">
                <Image
                  src={lac}
                  alt="Etenche Plus paint bucket"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>

              {/* Product Information */}
              <div className="text-white max-w-md text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Etenche Plus</h2>
                <p className="mb-6 text-sm lg:text-base">
                  Qeydiyyatli hesabdan birdefaye edilen her 10 AZN ve uzeri
                  Azersu odenisleri ucun, aninda 3-QAT
                </p>
                <button className="bg-[#2C2C2C] text-white font-sans p-2 px-4 rounded-lg font-medium mb-4">
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
