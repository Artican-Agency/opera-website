"use client";
import Image from "next/image";
import yellow_bg from "@/public/yellow-bg.svg";
import lac from "@/public/opera-lac.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { instance } from "@/instance";
import { Skeleton } from "./ui/skeleton";

export default function AnnouncementSection() {
  const [announces, setAnnounces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnounces = async () => {
      try {
        const { data } = await instance.get(`/announce/all`);
        if (data.data.length === 0) return;

        setLoading(false);

        setAnnounces(data.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAnnounces();
  }, []);

  if (!loading)
    return (
      <section
        id="announce"
        className="announce relative lg:h-[296px] h-full overflow-hidden w-2/3 rounded-2xl m-6 p-12 mx-12">
        <Image
          src={yellow_bg}
          alt="Yellow textured background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="bg-yellow-400/30 z-10 h-full">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            className="mySwiper"
            pagination={true}
            modules={[Navigation, Autoplay, Pagination]}>
            {announces.map((announce) => (
              <SwiperSlide key={announce._id} className="cursor-pointer">
                <div className="h-full w-full max-w-3xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center">
                  <div className="mb-6">
                    <Image
                      src={announce.product.product_img}
                      alt="Etenche Plus paint bucket"
                      width={170}
                      height={170}
                      className="rounded-lg"
                    />
                  </div>

                  <div className="text-white max-w-md text-center lg:text-left lg:ml-12">
                    <h2 className="text-4xl font-bold mb-4 font-open">
                      {announce.title}
                    </h2>
                    <p className="mb-6 text-sm lg:text-base font-open">
                      {announce.detail}
                    </p>
                    <a
                      href={announce.product.product_pdf}
                      className="bg-[#2C2C2C] text-white p-[2px] px-4 rounded-lg text-sm mb-4 font-open">
                      Details
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  else
    return (
      <div className="announce relative lg:h-[296px] h-full overflow-hidden w-2/3 rounded-2xl m-6 p-6">
        <div className="absolute inset-0 bg-gray-400/30 z-0" />
        <div className="h-full w-full flex flex-col lg:flex-row items-center justify-center bg-gray-100/30 z-10">
          <div className="mb-6">
            <Skeleton className="w-[250px] h-[170px] rounded-lg" />
          </div>
          <div className="text-white flex flex-col justify-center items-center   max-w-md text-center lg:text-left lg:ml-12">
            <Skeleton className="h-8 w-3/4 rounded-md mb-4" />
            <Skeleton className="h-4 w-full rounded-md mb-6" />
            <Skeleton className="h-4 w-5/6 rounded-md mb-6" />
            <Skeleton className="h-8 w-24 rounded-lg" />
          </div>
        </div>
      </div>
    );
}
