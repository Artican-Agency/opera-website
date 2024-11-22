"use client";
import AboutUs from "@/components/AboutUs";
import AnnouncementSection from "@/components/AnnouncementSection";
import BackgroundSlider from "@/components/BackgroundSlider";
import BlogRecent from "@/components/BlogRecent";
import Footer from "@/components/Footer";
import PainterFinder from "@/components/PainterFinder";
import RelevantProducts from "@/components/RelevantProducts";
import Scroller from "@/components/Scroller";
import Scroller2 from "@/components/Scroller2";
import Scroller3 from "@/components/Scroller3";
import Scroller4 from "@/components/Scroller4";
import Scroller5 from "@/components/Scroller5";
import Scroller6 from "@/components/Scroller6";
import StatSection from "@/components/StatSection";
import Testimonial from "@/components/Testimonials";
import { useLanguage } from "@/zustand";

export default function Home() {
  const { language } = useLanguage();

  const title = {
    en: "Perfection in Colors",
    fr: "La Perfection des Couleurs",
    ar: "الكمال في الألوان",
  };

  return (
    <main className="bg-white">
      <div className="relative z-10">
        <BackgroundSlider />
      </div>
      <StatSection />
      <RelevantProducts />
      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className=" text-black font-sans font-bold text-5xl xl:text-start text-center mb-12">
          {title[language]}
        </h1>
        <div className="relative top-36">
          <Scroller />
          <Scroller2 />
          <Scroller3 />
          <Scroller4 />
          <Scroller5 />
          <Scroller6 />
        </div>
      </div>

      <BlogRecent />
      <div className="flex flex-col justify-center items-center">
        <AboutUs />
        <AnnouncementSection />
        <Testimonial />
      </div>
      <PainterFinder />

      <Footer />
    </main>
  );
}
