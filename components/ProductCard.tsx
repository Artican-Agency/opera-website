import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect } from 'react';

export default function ProductCard({
  product,
}: {
  product: {
    _id: string;
    title: string;
    product_img: string;
    product_pdf: string;
  };
}) {
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <Card className='w-full max-w-sm overflow-hidden'>
      <CardContent className='p-4'>
        <div className='aspect-square relative mb-4'>
          <Image
            src={product.product_img}
            alt={product.title}
            fill
            className='object-contain'
          />
        </div>
        <h2 className='text-xl font-bold text-center'>{product.title}</h2>
        <p className='text-sm text-muted-foreground text-center mt-1'>
          Description
        </p>
      </CardContent>
    </Card>
  );
}
