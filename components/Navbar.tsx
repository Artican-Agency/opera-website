import { CircleHelp, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/Navigation';
import Link from 'next/link';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './ui/dialog';

export default function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`absolute top-0 z-50 flex items-center justify-center w-full mb-4 text-white  ${className}`}
    >
      <div className='flex max-xl:flex-col justify-between items-center md:w-2/3 w-11/12 xl:space-x-6 ml-0 relative z-50'>
        <div className='flex justify-between items-center md:w-2/3 w-11/12 space-x-6 relative z-50'>
          <a href='/'>
            <Image
              src='/logo-opera.svg'
              alt='Logo'
              width={150}
              height={150}
              className='object-contain'
            />
          </a>

          {/* Responsive Controls */}
          <div className='flex justify-center items-center space-x-4 xl:hidden max-md:w-1/4'>
            <Dialog>
              <DialogTrigger asChild>
                <button className='bg-transparent'>
                  <CircleHelp color='white' />
                </button>
              </DialogTrigger>
              <DialogContent>
                <p>Help content goes here...</p>
                <DialogClose asChild>
                  <button className='text-white'>Close</button>
                </DialogClose>
              </DialogContent>
            </Dialog>

            <button className='bg-transparent'>
              <Globe color='white' />
            </button>

            <button onClick={toggleMenu}>
              <Menu color='white' height={30} width={30} />
            </button>
          </div>
        </div>

        {/* Main Navigation for larger screens */}

        <div
          className={`flex flex-col items-center w-full h-fit py-12 pt-24 space-y-8 bg-black absolute top-0 ml-0 xl:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          {/* Close layout button */}

          <ul className='flex flex-col items-center space-y-8'>
            <button
              onClick={toggleMenu}
              className='absolute top-4 right-4 xl:hidden mt-12'
            >
              <X color='white' height={30} width={30} />
            </button>
            <li className='font-sans'>
              <a className='text-white' href='/'>
                Acceuil
              </a>
            </li>
            <li className='font-sans'>
              <a href='/#Qui' className='whitespace-nowrap'>
                Qui sommes nous
              </a>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-transparent hover:bg-transparent text-md font-light'>
                    Produits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-transparent'>
                    <div className='backdrop-blur-sm bg-transparent p-4 w-[200px] rounded-md'>
                      <div className='grid gap-2'>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/enduits'
                          >
                            Enduits
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/decors'
                          >
                            Décors
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/batiments'
                          >
                            Batiments
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className='font-sans'>
              <a href='/blogs'>Blog&Vidéos</a>
            </li>
            <li className='font-sans'>
              <a href='/Contact'>Contact</a>
            </li>
          </ul>
          <div className='flex justify-center space-x-2 items-center'>
            <button className='bg-transparent'>
              <CircleHelp color='white' />
            </button>

            <button className='bg-transparent'>
              <Globe color='white' />
            </button>
          </div>
        </div>

        <div className='xl:flex justify-around items-center w-2/3 space-x-12 hidden'>
          <ul className='flex justify-evenly items-center space-x-12'>
            <li className='font-sans'>
              <a href='/'>Acceuil</a>
            </li>
            <li className='font-sans'>
              <a href='/#Qui' className='whitespace-nowrap'>
                Qui sommes nous
              </a>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className='bg-transparent  hover:bg-transparent text-md font-light'>
                    Produits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-transparent'>
                    <div className='backdrop-blur-sm bg-transparent p-4 w-[200px] rounded-md'>
                      <div className='grid gap-2'>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/enduits'
                          >
                            Enduits
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/decors'
                          >
                            Décors
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100'
                            href='/produit/batiments'
                          >
                            Batiments
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className='font-sans'>
              <a href='#Blogs'>Blog&Vidéos</a>
            </li>
            <li className='font-sans'>
              <a href='#Contact'>Contact</a>
            </li>
          </ul>
          <div className='flex justify-center items-center space-x-4'>
            <button className='bg-transparent'>
              <CircleHelp color='white' />
            </button>

            <button className='bg-transparent'>
              <Globe color='white' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
