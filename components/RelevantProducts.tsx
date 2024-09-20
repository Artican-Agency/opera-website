import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import biton from "../public/opera-biton.png";
import bait from "../public/opera-bait.png";
import satine from "../public/opera-satine.png";

function RelevantProducts() {
  return (
    <section className="bg-white flex flex-col justify-between md:items-start items-center h-full px-24 py-12">
      <h1 className="text-black font-sans font-bold text-5xl md:text-start text-center">
        Travail avec un excellent <span className="block">Produit.</span>
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-start mt-2">
        <p className="max-w-[300px] text-xl text-[#6A6A6A] font-medium relative md:top-6 md:text-start text-center">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <div className="xl:flex hidden justify-center items-center space-x-6">
          <div className="relative h-[296px] w-[257px] flex flex-col justify-center items-center">
            <div className="bg-[#F9BF29] opacity-40 h-[296px] w-[257px] absolute rounded-3xl"></div>
            <Image
              className="relative z-40"
              src={biton}
              width={174}
              height={183}
              alt=""
            />

            <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
              Béton Fix
            </h2>
          </div>
          <div className="relative h-[296px] w-[257px] flex flex-col justify-center items-center">
            <div className="bg-white opacity-40 h-[296px] w-[257px] absolute rounded-3xl"></div>
            <Image
              className="relative z-40"
              src={bait}
              width={174}
              height={183}
              alt=""
            />

            <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
              Opéra Mat
            </h2>
          </div>
          <div className="relative h-[296px] w-[257px] flex flex-col justify-center items-center">
            <div className="bg-white opacity-40 h-[296px] w-[257px] absolute rounded-3xl"></div>
            <Image
              className="relative z-40 w-[142px] h-[160px]"
              src={satine}
              width={174}
              height={183}
              alt=""
            />

            <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
              Satiné
            </h2>
          </div>
        </div>
      </div>

      <div className="grid xl:hidden md:grid-cols-3 grid-cols-1 justify-center items-center space-x-6 space-y-4 py-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40"
            src={biton}
            width={150}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Béton Fix
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40"
            src={bait}
            width={174}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Opéra Mat
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            className="relative z-40 w-[142px] h-[160px]"
            src={satine}
            width={174}
            height={183}
            alt=""
          />

          <h2 className="text-[#2C2C2C] font-sans text-xl font-bold relative z-50 mt-4">
            Satiné
          </h2>
        </div>
      </div>

      <Button
        variant="default"
        className="relative xl:bottom-12 rounded-full text-xl px-8 py-6">
        Plus
      </Button>
    </section>
  );
}

export default RelevantProducts;
