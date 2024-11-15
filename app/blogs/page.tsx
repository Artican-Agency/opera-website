"use client";
import Navbar from "@/components/Navbar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SwiperSlide, Swiper } from "swiper/react";
import bgPhoto from "../../public/colors.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import Footer from "@/components/Footer";
import PainterFinder from "@/components/PainterFinder";

import { useEffect, useState } from "react";
import Link from "next/link";
import { instance } from "@/instance";
import { formatDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronRight } from "lucide-react";
import AnnouncementSection from "@/components/AnnouncementSection";

function TabsComponent({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: any;
}) {
  return (
    <Tabs
      defaultValue="blogs"
      className="bg-white"
      onValueChange={(value: string) => setActiveTab(value)}>
      <div className="flex justify-center mb-8">
        <TabsList className="bg-white">
          <TabsTrigger
            value="blogs"
            className="text-[#D4A300] bg-white font-semibold font-open text-xl">
            Blogs
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="text-[#D4A300] bg-white font-semibold font-open text-xl">
            Videos
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center h-[500px] text-white w-full">
      <Navbar />

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
      </Swiper>

      <div className="absolute inset-1/5 z-20 flex items-center justify-center xl:w-2/3 m-4 flex-col">
        <h1 className="text-5xl font-semibold">Blog & Vidéos</h1>
        <h3 className="flex justify-center items-center relative top-12 text-md">
          <a href="/">Acceuil</a> <ChevronRight height={18} width={18} />
          Blogs
        </h3>
      </div>
    </div>
  );
}

interface Article {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  size?: "large" | "medium" | "small";
}

export default function Page() {
  const [activeTab, setActiveTab] = useState("blogs");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/blog/all`);
        if (data.data.length === 0) return;

        setLoading(false);

        setBlogs(data.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="bg-white h-full overflow-y-hidden">
      <HeroSection />

      {/* <div className="container mx-auto p-4">
        <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div> */}
      <div className="flex justify-center items-center">
        <AnnouncementSection />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 my-24">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Skeleton className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Skeleton className="w-24 h-4 mb-2" />
                    <Skeleton className="w-32 h-6 mb-2" />
                    <Skeleton className="w-20 h-4" />
                  </div>
                </div>
              </div>
            ))
          : blogs.map((blog) => (
              <Link
                key={blog.id}
                href="#"
                className={`group relative overflow-hidden rounded-lg`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={blog.blog_img}
                    alt={blog.title}
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="mb-2">
                      <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-sm text-primary backdrop-blur-sm">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white font-open">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-200 font-open">
                      {formatDate(blog.createdAt)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </div>

      <div className="mt-52">
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
