"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { instance } from "@/instance";
import { formatDate, Language } from "@/lib/utils";

import "swiper/css";
import { useLanguage } from "@/zustand";

function BlogRecent() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const { language } = useLanguage();

  useEffect(() => {
    let isMobile = window.matchMedia("(max-width: 800px)").matches;
    setIsMobile(isMobile);
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await instance.get("/blog/all");
        if (data.data.length === 0) return;

        setBlogs(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-white flex flex-col justify-between items-center h-full lg:px-24 px-4">
      <div
        dir={language == "ar" ? "rtl" : "ltr"}
        className="flex justify-between text-center w-full">
        <h1 className="text-[#2F2F2F] text-5xl font-semibold">
          {Language.recentBlogs.title[language]}
        </h1>

        <a
          dir={language == "ar" ? "rtl" : "ltr"}
          className="xl:flex hidden justify-center items-center text-[#2F2F2F] text-sm font-semibold font-open"
          href="/blogs">
          {Language.recentBlogs.moreBlogs.text[language]}
          <span>
            <ArrowRight width={24} height={24} />
          </span>
        </a>
      </div>

      <a href="/blogs" className="w-full h-full py-4">
        <Swiper
          autoplay={{
            delay: 3000,
            reverseDirection: language == "ar",
            disableOnInteraction: true,
          }}
          slidesPerView={isMobile ? 1 : 1.5}
          modules={[Autoplay]}
          className="w-full h-full z-0 myswiper">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-96 bg-gray-200 animate-pulse"></div>
                </SwiperSlide>
              ))
            : blogs.map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className="relative h-[500px] w-full">
                    <Image
                      src={blog.blog_img}
                      alt={blog.title}
                      fill
                      className="object-cover max-w-full w-full h-auto"
                    />
                    <div className="absolute bottom-4 w-full bg-black/60 p-2 h-24">
                      <h3 className="text-white font-open text-lg">
                        {blog.title}
                      </h3>
                      <p className="text-gray-300 text-sm font-open">
                        {formatDate(blog.createdAt)}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </a>
    </section>
  );
}

export default BlogRecent;
