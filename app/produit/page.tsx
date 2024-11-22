"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import bgPhoto from "../../public/colors.png";

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
import { Language } from "@/lib/utils";
import { useLanguage } from "@/zustand";

function HeroSection() {
  const { language } = useLanguage();

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
        </h3>
      </div>
    </div>
  );
}

interface Product {
  _id: string;
  title: string;
  product_img: string;
  product_pdf: string;
}

export default function Page() {
  const { category } = useParams() ?? {};

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get(`/product/${category}`);
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [category]);
  return (
    <main className="bg-white h-full overflow-y-hidden w-full">
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center items-center bg-white py-12 w-full mx-auto">
        {products && products.length > 1 ? (
          products.map((product) => (
            <div
              key={product._id}
              className="w-64 max-h-[310px] bg-white shadow-lg rounded-lg overflow-hidden">
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full w-full col-span-full">
            <h1 className="text-2xl">Loading...</h1>
          </div>
        )}
      </div>

      <div className="mt-52">
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
