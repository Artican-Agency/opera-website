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
    <Card className="w-full p-6 bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <CardContent className="p-4 flex flex-col justify-center items-center">
        <div className="aspect-square relative mb-4 w-2/3 max-w-fit h-32">
          <Image
            src={product.product_img || "/placeholder-image.jpg"}
            alt={product.title}
            fill
            className="object-fit rounded-lg"
          />
        </div>
        <h2 className="font-open text-xl font-semibold text-center text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="font-open text-base text-center text-gray-600 mt-2 leading-relaxed">
          This is a great product you&apos;ll love.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center mt-6">
        <a
          href={product.product_pdf}
          download
          className="font-open bg-primary-ui text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300">
          Download Catalogue
        </a>
      </CardFooter>
    </Card>
  );
}
