import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <Card className='p-6 bg-gray-100 max-h-[410px] w-[321px] shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col justify-center items-center'>
      <CardContent className='p-4 flex flex-col justify-center items-center'>
        <div className='aspect-square relative mb-4 max-w-44 h-44 bg-white rounded-lg p-6'>
          <Image
            src={product.product_img || '/placeholder-image.jpg'}
            alt={product.title}
            fill
            className='object-fit rounded-lg'
          />
        </div>
        <h2 className='text-xl font-semibold text-center text-[#2F2F2F] mb-2 font-open'>
          {product.title}
        </h2>
      </CardContent>
      <CardFooter className='flex justify-center mt-6'>
        <a
          href={product.product_pdf}
          download
          className='font-open bg-primary-ui text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300'
        >
          Telechargez catalogue
        </a>
      </CardFooter>
    </Card>
  );
}
