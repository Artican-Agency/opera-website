'use client';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SwiperSlide, Swiper } from 'swiper/react';
import bgPhoto from '../../public/colors.png';

import Image from 'next/image';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import PainterFinder from '@/components/PainterFinder';

import { useState } from 'react';

function TabsComponent({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: any;
}) {
  return (
    <Tabs
      defaultValue='blogs'
      className='bg-white'
      onValueChange={(value: string) => setActiveTab(value)}
    >
      <div className='flex justify-center mb-8'>
        <TabsList className='bg-white'>
          <TabsTrigger
            value='blogs'
            className='text-[#D4A300] bg-white font-semibold font-open text-xl'
          >
            Blogs
          </TabsTrigger>
          <TabsTrigger
            value='videos'
            className='text-[#D4A300] bg-white font-semibold font-open text-xl'
          >
            Videos
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
}

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
        <h1 className='text-5xl font-semibold'>Blog & Vidéos</h1>
        <h3 className='flex justify-center items-center relative top-12 text-md'>
          Blog & Vidéos
        </h3>
      </div>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('blogs');

  const posts = [
    {
      id: 1,
      title: 'Modern Interior Design Trends',
      date: 'Monday | December 19, 2022',
      image: '/placeholder.svg?height=400&width=600',
      category: 'blogs',
      isWide: true,
    },
    {
      id: 2,
      title: 'Rustic Home Decor Ideas',
      date: 'Monday | December 19, 2022',
      image: '/placeholder.svg?height=400&width=600',
      category: 'blogs',
      isWide: true,
    },
    {
      id: 3,
      title: 'Zen Minimalist Spaces',
      date: 'Monday | December 19, 2022',
      image: '/placeholder.svg?height=300&width=400',
      category: 'blogs',
    },
    { 
      id: 4,
      title: 'Pink & Red Color Schemes',
      date: 'Monday | December 19, 2022',
      image: '/placeholder.svg?height=300&width=400',
      category: 'videos',
    },
    {
      id: 5,
      title: 'Orange & Warm Tones',
      date: 'Monday | December 19, 2022',
      image: '/placeholder.svg?height=300&width=400',
      category: 'videos',
    },
  ];

  return (
    <main className='bg-white h-full overflow-y-hidden'>
      <HeroSection />

      <div className='container mx-auto p-4'>
        <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className='mt-52'>
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
