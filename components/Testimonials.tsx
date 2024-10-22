'use client';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Person from './../public/person-1.png';

export default function Testimonial() {
  return (
    <Card className='w-full max-w-6xl mx-auto my-12'>
      <CardContent className='p-6'>
        <h2 className='text-3xl font-bold text-center mb-6'>Témoignages</h2>

        <Swiper
          slidesPerView={1}
          pagination={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide className='flex flex-col justify-center items-center'>
            <blockquote className='text-center mb-6 font-semibold'>
              &quot;Donec nibh magna, interdum quis massa sed, rhoncus laoreet
              quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante
              augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel
              nibh tellus. Pellentesque in risus non dui venenatis sollicitudin
              sed vitae diam. Fusce tincidunt nisi mi, at molestie odio accumsan
              non. Pellentesque ma&quot;
            </blockquote>
            <div className='flex flex-col items-center'>
              <Image
                src={Person}
                alt='Profile picture'
                width={80}
                height={80}
                className='rounded-full mb-2'
              />
              <p className='text-sm text-muted-foreground'>CEO of NATFAL</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col justify-center items-center'>
            <blockquote className='text-center mb-6 font-semibold'>
              &quot;Donec nibh magna, interdum quis massa sed, rhoncus laoreet
              quam. Mauris accumsan felis fermentum euismod egestas. Mauris ante
              augue, cursus sit amet arcu a, maximus suscipit nibh. Integer vel
              nibh tellus. Pellentesque in risus non dui venenatis sollicitudin
              sed vitae diam. Fusce tincidunt nisi mi, at molestie odio accumsan
              non. Pellentesque ma&quot;
            </blockquote>
            <div className='flex flex-col items-center'>
              <Image
                src={Person}
                alt='Profile picture'
                width={80}
                height={80}
                className='rounded-full mb-2'
              />
              <p className='text-sm text-muted-foreground'>CEO of NATFAL</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </CardContent>
    </Card>
  );
}
