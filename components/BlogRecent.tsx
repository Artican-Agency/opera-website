"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { instance } from "@/instance"; // Make sure this is properly configured
import { formatDate } from "@/lib/utils";

import "swiper/css";

function BlogRecent() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMobile = window.matchMedia("(max-width: 800px)").matches;
    setIsMobile(isMobile);
  });

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await instance.get("/blog/all"); // Replace with your actual API endpoint
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
      <div className="flex justify-between text-center w-full">
        <h1 className="text-[#2F2F2F] text-5xl font-semibold">
          Les blogs récents
        </h1>

        <a
          className="xl:flex hidden justify-center items-center text-[#2F2F2F] text-sm font-semibold font-open"
          href="/blogs">
          Plus de blogs
          <span>
            <ArrowRight width={24} height={24} />
          </span>
        </a>
      </div>

      <div className="w-full h-full py-4">
        <Swiper
          autoplay={{
            delay: 3000,
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
                  <div className="relative h-96 w-full">
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
      </div>
    </section>
  );
}

export default BlogRecent;
