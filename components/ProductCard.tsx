import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  return (
    <Card className="bg-gray-100 w-[280px] h-[380px] shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <CardContent className="p-4 flex flex-col justify-center items-center">
        <div className="relative w-40 h-40 mb-4 rounded-lg overflow-hidden">
          <Image
            src={product.product_img || "/placeholder-image.jpg"}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="text-lg font-semibold text-center text-[#2F2F2F] mb-2 font-open">
          {product.title}
        </h2>
      </CardContent>
      <CardFooter className="flex justify-center mb-4">
        <a
          href={product.product_pdf}
          download
          className="font-open bg-primary-ui text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300">
          Téléchargez le catalogue
        </a>
      </CardFooter>
    </Card>
  );
}
