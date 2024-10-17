import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Logo from '../public/logo-opera.svg';

function HeroSection() {
  return (
    <div className='flex flex-col justify-start items-start'>
      <h1 className='md:text-5xl text-4xl font-bold flex flex-col justify-start items-center font-sans text-white'>
        Exprimez votre style avec{' '}
      </h1>
      <h2 className='flex justify-center items-center md:text-5xl text-4xl font-bold font-sans relative bottom-6 text-white'>
        <Image
          src={Logo}
          height={191}
          width={150}
          alt='Logo'
          className='relative right-1 height-[120px] width-[100px] md:height-[150px] md:width-[120px]'
        />
        Peinture
      </h2>

      <p className='font-sans text-md font-medium relative bottom-8 text-white'>
        Une touche d'élégance et de durabilité pour chaque espace
      </p>

      <div className='space-x-2 max-sm:space-y-2 xs:flex justify-center items-center'>
        <Button
          variant='default'
          className='hover:bg-gray-200 bg-primary-ui text-[#171717] font-medium px-4 py-2 rounded-full'
        >
          Visitez nos travaux
        </Button>
        <Button
          variant='outline'
          className='bg-transparent text-white font-medium px-4 py-2 rounded-full'
        >
          Trouvez votre produit
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
