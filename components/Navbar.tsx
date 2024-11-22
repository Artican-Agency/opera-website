import { CircleHelp, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/Navigation";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Navbar({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { switchLanguage, language } = useLanguage();

  const handleLanguageChange = (newLanguage: "en" | "fr" | "ar") => {
    switchLanguage(newLanguage);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      dir={language == "ar" ? "rtl" : "ltr"}
      className={`absolute top-0 z-[80] flex items-center justify-center w-full mb-4 text-white ${className}`}>
      <div className="flex xl:mx-12 lg:mx-2 justify-between items-center w-full relative z-[80]">
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-0">
          <motion.a
            whileHover={{
              scale: 1.2,
            }}
            href="/">
            <Image
              src="/logo-opera.svg"
              alt="Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </motion.a>

          {/* Responsive Controls */}
          <div className="flex justify-center items-center space-x-4 xl:hidden">
            <a href="/contact" className="bg-transparent">
              <CircleHelp color="white" />
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-transparent mx-4">
                  <Globe className="mx-2" color="white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white relative z-[80]">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button onClick={toggleMenu}>
              <Menu color="white" height={30} width={30} />
            </button>
          </div>
        </div>

        {/* Main Navigation for larger screens */}
        <div
          className={`flex flex-col items-center w-full py-12 pt-24 space-y-8 ml-[0px] bg-black absolute top-0 ${
            isMenuOpen ? "block" : "hidden"
          }`}>
          {/* Close layout button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 xl:hidden">
            <X color="white" height={30} width={30} />
          </button>
          <ul className="flex flex-col items-center space-y-8">
            <li className="font-sans">
              <motion.a
                whileHover={{
                  scale: 1.2,
                }}
                className="text-white"
                href="/">
                {Language.navbar.links.home[language]}
              </motion.a>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-md font-light text-white mx-2">
                    {Language.navbar.links.products[language]}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-transparent">
                    <div className="backdrop-blur-sm bg-transparent p-4 w-[200px] rounded-md">
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/enduits">
                            {
                              Language.navbar.links.products_submenu.coatings[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/decors">
                            {
                              Language.navbar.links.products_submenu.decor[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/batiments">
                            {
                              Language.navbar.links.products_submenu.buildings[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className="font-sans">
              <a href="/blogs" className="text-white">
                {Language.navbar.links.blog[language]}
              </a>
            </li>
            <li className="font-sans">
              <a href="/contact" className="text-white">
                {Language.navbar.links.contact[language]}
              </a>
            </li>
          </ul>
          <div className="flex justify-center space-x-2 items-center">
            <button className="bg-transparent mx-4">
              <CircleHelp color="white" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-transparent mx-4">
                  <Globe className="mx-2" color="white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white relative z-[80]">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="hidden xl:flex justify-around items-center w-full space-x-12">
          <ul className="flex justify-evenly items-center space-x-12">
            <li className="font-sans">
              <a href="/">{Language.navbar.links.home[language]}</a>
            </li>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mx-2 bg-transparent hover:bg-transparent text-md font-light">
                    {Language.navbar.links.products[language]}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-transparent">
                    <div className="backdrop-blur-sm bg-transparent p-4 w-[200px] rounded-md">
                      <div className="grid gap-2">
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/enduits">
                            {
                              Language.navbar.links.products_submenu.coatings[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/decors">
                            {
                              Language.navbar.links.products_submenu.decor[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block space-y-1 rounded-md p-3 leading-none transition-colors hover:bg-white/10 hover:text-white text-gray-100"
                            href="/produit/batiments">
                            {
                              Language.navbar.links.products_submenu.buildings[
                                language
                              ]
                            }
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className="font-sans">
              <a href="/blogs"> {Language.navbar.links.blog[language]}</a>
            </li>
            <li className="font-sans">
              <a href="/contact">{Language.navbar.links.contact[language]}</a>
            </li>
          </ul>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-transparent mx-4">
              <CircleHelp color="white" />
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-transparent mx-4">
                  <Globe className="mx-2" color="white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black text-white">
                <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("fr")}>
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLanguageChange("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
