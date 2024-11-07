import Image from "next/image";
import React from "react";
import House from "@/public/exterior-house.png";

function Page() {
  return (
    <div>
      <Image className="bg-green-600" src={House} alt="wall" width={500} height={800} />
    </div>
  );
}

export default Page;
