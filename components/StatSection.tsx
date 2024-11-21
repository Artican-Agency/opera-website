import React from "react";

function StatSection() {
  return (
    <div className="bg-primary-ui max-md:mx-4 md:max-w-[700px] rounded-full flex justify-evenly items-center relative bottom-12 xl:left-1/3 md:left-1/4 z-20">
      <div className="p-4">
        <h2 className="font-sans text-sm  max-w-24 text-center text-black font-semibold">
          Point ventes
        </h2>
        <h1 className="font-sans lg:text-4xl text-xl font-bold text-black">
          80+
        </h1>
      </div>
      <div className="p-4">
        <h2 className="font-sans text-sm max-w-24 text-center text-black font-semibold">
          Produits fabriqués
        </h2>
        <h1 className="font-sans text-center lg:text-4xl text-2xl font-bold text-black">
          61+
        </h1>
      </div>
      <div className="p-4">
        <h2 className="font-sans text-sm text-black font-semibold">
          Expérience
        </h2>
        <h1 className="font-sans lg:text-4xl text-2xl font-bold text-black">
          10 ans
        </h1>
      </div>
    </div>
  );
}

export default StatSection;
