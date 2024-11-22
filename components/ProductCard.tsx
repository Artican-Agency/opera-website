import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";
import { useLanguage } from "@/zustand";
import { Language } from "@/lib/utils";

export default function vProductCard({
  product,
}: {
  product: {
    _id: string;
    title: string;
    product_img: string;
    product_pdf: string;
  };
}) {
  const { language } = useLanguage();

  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{
        scale: 1.04,
      }}>
      <Card className="bg-white w-full h-100 flex flex-col justify-between shadow-xl rounded-xl border border-gray-200">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="relative w-full h-32 mb-6 rounded-md overflow-hidden flex items-center justify-center">
            <Image
              src={product.product_img || "/placeholder-image.jpg"}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <h2 className="text-base font-semibold text-center text-gray-800 mb-4 font-open">
            {product.title}
          </h2>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <a
            href={product.product_pdf}
            target="_blank"
            className="font-open bg-primary-ui hover:bg-[#d8a72a] text-[#171515] text-sm font-semibold px-4 py-2 rounded-full shadow-lg transition duration-300">
            {Language.productPage.productCard.cta.text[language]}
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
