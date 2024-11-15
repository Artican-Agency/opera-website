'use client';
import Navbar from '@/components/Navbar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SwiperSlide, Swiper } from 'swiper/react';
import bgPhoto from '../../public/colors.png';

import Image from 'next/image';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import Footer from '@/components/Footer';
import PainterFinder from '@/components/PainterFinder';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { instance } from '@/instance';
import { formatDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { ChevronRight } from 'lucide-react';
import AnnouncementSection from '@/components/AnnouncementSection';

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
        <h1 className='text-5xl font-semibold'>Contact Us</h1>
        <h3 className='flex justify-center items-center relative top-12 text-md'>
          <a href='/'>Acceuil</a> <ChevronRight height={18} width={18} />
          Contact
        </h3>
      </div>
    </div>
  );
}

import { Button } from '@/components/ui/button';
import { Select, SelectTrigger } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex lg:flex-row flex-col justify-center items-center w-full p-6 my-24'>
      <div className='mb-8 lg:w-1/3 mx-2'>
        <h1 className='text-4xl font-bold mb-4 text-center lg:text-start font-open'>Contactez nous</h1>
        <p className='text-muted-foreground font-open lg:text-start text-center'>
          Reach out to us for any inquiries, feedback, or support – we're here
          to help !
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6 w-3/5'>
        <div>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className='mt-2'
            required
          />
        </div>

        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className='mt-2'
            required
          />
        </div>

        <div>
          <Label htmlFor='message'>Message</Label>
          <Textarea
            id='message'
            value={formData.message}
            onChange={e =>
              setFormData({ ...formData, message: e.target.value })
            }
            className='mt-2 min-h-[150px]'
            required
          />
        </div>

        <Button type='submit' className='w-full bg-black hover:bg-black/90'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default function Page() {
  return (
    <main className='bg-white h-full overflow-y-hidden'>
      <HeroSection />

      <ContactForm />

      <div className='mt-52'>
        <PainterFinder />
      </div>

      <Footer />
    </main>
  );
}
