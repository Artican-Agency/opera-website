import Image from "next/image";
import React from "react";
import biton from "../../public/opera-biton.png";

function CardSection() {
  return (
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
  );
}

export default CardSection;
