'use client';

import { SwiperSlide, Swiper } from 'swiper/react';
import bgPhoto from '../../public/colors.png';

import Image from 'next/image';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import Navbar from '@/components/Navbar';
import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { instance } from '@/instance';
import ProductCard from '@/components/ProductCard';

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[500px] text-white'>
      <Navbar />

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className='w-full h-full z-0 myswiper'
      >
        <SwiperSlide>
          <Image
            src={bgPhoto}
            alt='Photo by Drew Beamer'
            fill
            className='object-cover max-w-full h-auto'
          />
        </SwiperSlide>
      </Swiper>

      <div className='absolute inset-1/5 z-20 flex items-center justify-center xl:w-2/3 m-4 flex-col'>
        <h1 className='text-5xl font-semibold'>Produits</h1>
        <h3 className='flex justify-center items-center relative top-12 text-md'>
          Acceuil <ChevronRight height={18} width={18} />
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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await instance.get('/product/all');
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <main className='bg-white'>
      <HeroSection />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products &&
          products.length > 1 &&
          products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
    </main>
  );
}
