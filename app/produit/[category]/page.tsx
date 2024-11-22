"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import bgPhoto from "../../../public/colors.png";

import Image from "next/image";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import Navbar from "@/components/Navbar";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { instance } from "@/instance";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import PainterFinder from "@/components/PainterFinder";
import { useParams } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Language } from "@/lib/utils";
import { useLanguage } from "@/zustand";

function HeroSection() {
  const { language } = useLanguage();

  const { category } = useParams() ?? {};
  return (
    <div className="flex flex-col justify-center items-center w-full h-[500px] text-white">
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
        <h1 className="text-5xl font-semibold">
          {Language.productPage.heroSection.title[language]}
        </h1>
        <h3 className="flex justify-center items-center relative top-12 text-md">
          <a href="/">Acceuil</a> <ChevronRight height={18} width={18} />
          Produit
          <ChevronRight height={18} width={18} />
          {typeof category === "string" ? capitalizeFirstLetter(category) : ""}
        </h3>
      </div>
    </div>
  );
}

export default function Page() {
  const { category } = useParams() ?? {};

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/product/${category}`);
        if (data.data.length === 0) return;

        setProducts(data.data);
        console.log("🚀 ~ fetchProducts ~ data:", data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);
  return (
    <main className="bg-white h-full overflow-y-hidden w-full">
      <HeroSection />
      <ProductGrid products={products} />
      <div className="mt-52">
        <PainterFinder />
      </div>
      <Footer />
    </main>
  );
}

const LoadingSkeleton = () => (
  <Card className="bg-white w-full h-100 flex flex-col justify-between shadow-xl rounded-xl border border-gray-200">
    <CardContent className="p-6 flex flex-col items-center">
      <Skeleton className="w-full h-32 mb-6 rounded-md" />
      <Skeleton className="h-6 w-3/4 mb-4 rounded-md" />
    </CardContent>
    <CardFooter className="flex justify-center pb-6">
      <Skeleton className="h-10 w-3/4 rounded-full" />
    </CardFooter>
  </Card>
);

function ProductGrid({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center bg-white py-12 w-full mx-auto">
      {products && products.length > 0
        ? products.map((product) => (
            <div
              key={product._id}
              className="w-64 max-h-[310px] bg-white shadow-lg rounded-lg overflow-hidden">
              <ProductCard product={product} />
            </div>
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-64 max-h-[310px]">
              <LoadingSkeleton />
            </div>
          ))}
    </div>
  );
}
