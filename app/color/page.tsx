'use client';
import Navbar from '@/components/Navbar';
import { SwiperSlide, Swiper } from 'swiper/react';
import bgPhoto from '../../public/colors.png';

import Image from 'next/image';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import Footer from '@/components/Footer';
import PainterFinder from '@/components/PainterFinder';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Color1 from '@/public/color-pallete.png';
import Color2 from '@/public/color-pallete2.png';

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import colors from '@/public/colors.json';
import { Button } from '@/components/ui/button';

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center h-[500px] text-white w-full'>
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
        <h1 className='text-5xl font-semibold'>Color Palette</h1>
        <h3 className='flex justify-center items-center relative top-12 text-md'>
          <a href='/'>Acceuil</a> <ChevronRight height={18} width={18} />
          Color
        </h3>
      </div>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#fffff');

  const handleImageClick = (image: number, color: string) => {
    setSelectedImage(image as any);
    setBackgroundColor(color);
  };

  return (
    <main className='bg-white h-full overflow-y-hidden'>
      <HeroSection />
      <div className='flex flex-col justify-center items-center my-24 space-y-12'>
        <div className='flex flex-col items-center space-y-12 md:flex-row md:space-x-12'>
          {/* Main Image */}
          <Image
            className='max-w-2xl rounded-lg'
            src={selectedImage || Color1}
            alt='Selected Color'
            style={{ backgroundColor: backgroundColor }}
          />

          {/* Color Palette */}
          <div className='bg-gray-100 md:w-[400px] py-6 px-4 rounded-lg overflow-x-hidden w-full'>
            <ScrollArea className='h-[200px] mx-auto overflow-x-hidden w-full'>
              <div className='grid grid-cols-9 gap-2 w-full'>
                {colors.map(color => (
                  <button
                    key={color.name}
                    className='w-8 h-8 rounded-full'
                    style={{ backgroundColor: color.rgb }}
                    onClick={() => handleImageClick(selectedImage as any, color.rgb)}
                  >
                    <span className='sr-only'>{color.name}</span>
                  </button>
                ))}
              </div>
              <ScrollBar orientation='horizontal' />
            </ScrollArea>
          </div>
        </div>

        <div className='space-x-4 flex justify-center items-center'>
          <button onClick={() => handleImageClick(Color1 as any, '#FF0000')}>
            <Image className='max-w-xs rounded-lg' src={Color1} alt='Color 1' />
          </button>
          <button onClick={() => handleImageClick(Color2 as any, '#00FF00')}>
            <Image
              className='max-w-xs rounded-lg bg-white'
              src={Color2}
              alt='Color 2'
            />
          </button>
        </div>
      </div>

      <div className='mt-52'>
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
