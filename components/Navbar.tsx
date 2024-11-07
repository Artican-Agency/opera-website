import { CircleHelp, Globe, Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/Navigation";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={`absolute top-0 z-50 flex items-center justify-center w-full my-4 + ${className}`}>
      <div className="flex justify-between items- md:w-2/3 w-11/12 space-x-6">
        <a href="/">
          <Image
            src="/logo-opera.svg"
            alt="Logo"
            width={150}
            height={150}
            className="object-contain"
          />
        </a>

        <div className="flex justify-center items-center space-x-4 xl:hidden max-md:w-1/4">
          <button className="bg-transparent xl:block hidden">
            <CircleHelp color="white" />
          </button>

          <button className="bg-transparent">
            <Globe color="white" />
          </button>

          <button>
            <Menu color="white" height={30} width={30} />
          </button>
        </div>

        <div className="xl:flex justify-around items-center w-2/3 space-x-12 hidden">
          <ul className="flex justify-evenly items-center space-x-12">
            <li className="font-sans">
              <a href="/">Acceuil</a>
            </li>
            <li className="font-sans">
              <a href="#Qui" className="whitespace-nowrap">
                Qui sommes nous
              </a>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent  hover:bg-transparent text-md font-light">
                    Produits
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-transparent">
                    <div className="backdrop-blur-sm bg-transparent p-4 w-[200px] rounded-md">
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="#">
                            Enduits
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="#">
                            Décors
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="#">
                            Batiments
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className="font-sans">
              <a href="#Blogs">Blog&Vidéos</a>
            </li>
            <li className="font-sans">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-transparent">
              <CircleHelp color="white" />
            </button>

            <button className="bg-transparent">
              <Globe color="white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
