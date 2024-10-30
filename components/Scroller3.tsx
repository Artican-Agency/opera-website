"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollImage from "@/public/scroller_three.png";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scroller3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const races = document.querySelector(".races3") as HTMLElement;

    if (!races) {
      console.error("Races element not found");
      return;
    }

    const tween = gsap.to(races, {
      y: "-100",
      duration: 3,
      ease: "slow",
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper3",
      endTrigger: ".next-section",
      start: `top ${window.innerWidth > 1200 ? "50%" : "50%"}`,
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
    <div className="relative bottom-32 racesWrapper3">
      <div className="flex flex-col items-center justify-center space-y-4 races3 xl:mx-56">
        <Image
          className="w-full max-w-[1024px] h-56 object-fill rounded-[2.5rem]"
          ref={containerRef}
          src={ScrollImage}
          alt="Scroll image"
        />
      </div>
    </div>
  );
};

export default Scroller3;
