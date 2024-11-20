import React from "react";

function StatSection() {
  return (
    <div className="bg-primary-ui md:max-w-[700px] max-lg:hidden rounded-full flex justify-evenly items-center relative bottom-12 xl:left-1/3 md:left-1/4 z-20">
      <div className="p-4">
        <h2 className="font-sans text-sm text-black font-semibold">
          Point ventes
        </h2>
        <h1 className="font-sans text-4xl font-bold text-black">80+</h1>
      </div>
      <div className="p-4">
        <h2 className="font-sans text-sm text-black font-semibold">
          Produits fabriqués
        </h2>
        <h1 className="font-sans text-4xl font-bold text-black">60+</h1>
      </div>
      <div className="p-4">
        <h2 className="font-sans text-sm text-black font-semibold">
          Expérience
        </h2>
        <h1 className="font-sans text-4xl font-bold text-black">10 ans</h1>
      </div>
    </div>
  );
}

export default StatSection;
