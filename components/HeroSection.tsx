import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Logo from "../public/logo-opera-hero.svg";
import { Language } from "@/lib/utils";
import { useLanguage } from "@/zustand";

function HeroSection() {
  const { switchLanguage, language } = useLanguage();

  return (
    <section className={`flex flex-col ${language == "ar" ? "justify-end items-end" : "justify-start items-star"} t font-open`}>
      <h1 className="md:text-5xl text-4xl font-bold flex flex-col justify-start items-center font-sans text-white">
        {Language.hero.title[language]}
      </h1>
      <h2
        dir={language == "ar" ? "rtl" : "ltr"}
        className="flex space-x-2 mx-4 mt-8 justify-start items-center md:text-5xl text-4xl font-bold font-sans relative bottom-6 text-white">
        <Image
          src={Logo}
          height={191}
          width={150}
          alt="Logo"
          className="relative right-1 height-[120px] width-[100px] md:height-[150px] md:width-[120px]"
        />
        {Language.hero.subtitle[language]}
      </h2>

      <p className="font-sans mt-2 text-md font-medium relative bottom-8 text-white">
        {Language.hero.description[language]}
      </p>

      <div className="space-x-2 max-sm:space-y-2 xs:flex justify-center items-center">
        <a href="/produit/batiments">
          <Button
            dir={language == "ar" ? "rtl" : "ltr"}
            variant="default"
            className="hover:bg-gray-200 bg-primary-ui text-[#171717] font-medium px-4 py-2 rounded-full">
            {Language.hero.buttons.find_product[language]}
          </Button>
        </a>
        <a href="#qui">
          <Button
            variant="outline"
            className="bg-transparent text-white font-medium px-4 py-2 rounded-full">
            {Language.hero.buttons.visit_works[language]}
          </Button>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
