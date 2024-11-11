"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollImage from "@/public/scroller_one.png";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const races = document.querySelector(".races1") as HTMLElement;

    if (!races) {
      console.error("Races element not found");
      return;
    }

    const tween = gsap.to(races, {
      y: "-100",
      duration: 12,
      ease: "slow",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper1",
      endTrigger: ".next-section",
      start: `top 60%`,
      end: () => `+=${-120}`,
      pin: true,
      animation: tween,
      scrub: 1,
      markers: false,
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative racesWrapper1">
      <div className="flex flex-col items-center justify-center space-y-4 races1 xl:mx-56">
        <div className="w-full max-w-[756px] h-56 overflow-hidden lg:rounded-[2.5rem]">
          <Image
            className="w-full h-full object-cover bg-center"
            ref={containerRef}
            src={ScrollImage}
            alt="Scroll image"
          />
        </div>
      </div>
    </div>
  );
};

export default Scroller;
