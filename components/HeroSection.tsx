import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Logo from "../public/logo-opera.svg";

function HeroSection() {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-5xl font-semibold flex flex-col justify-start items-center font-sans">
        Exprimez votre style avec{" "}
      </h1>
      <h2 className="flex justify-center items-center text-5xl font-semibold font-sans relative bottom-6">
        <Image
          src={Logo}
          height={191}
          width={150}
          alt="Logo"
          className="relative right-1"
        />
        Peinture
      </h2>

      <p className="font-sans text-md font-medium relative bottom-8">
        Une touche d'élégance et de durabilité pour chaque espace
      </p>

      <div className="space-x-2">
        <Button
          variant="default"
          className="bg-primary-ui hover:bg-primary-ui text-[#171717] font-medium px-4 py-2 rounded-full">
          Visitez nos travaux
        </Button>
        <Button
          variant="outline"
          className="bg-transparent text-white font-medium px-4 py-2 rounded-full">
          Trouvez votre produit
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
