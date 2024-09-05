import { ProductDetail } from '@/types/ProductDetail';
import React, { FC } from 'react'
import ProductImage from '../ProductImage';
import ProductDescriptionSection from '../Description';
import RelatedSection from '../RelatedSection';

type ItemSectionProps = {
    product: ProductDetail
}  
  
const ItemSection:FC<ItemSectionProps> = ({product}) => {
  return (
    <div className='min-h-screen text-black w-full flex flex-col items-center'>
        <div className=' text-black w-full max-w-screen-2xl flex justify-center flex-col items-center'> 
            <div className='w-full flex justify-between items-start gap-4'>
                <ProductImage 
                    productCode={product.productCode}
                    productName={product.productName}
                    src={product.imgSrc}
                />
                <ProductDescriptionSection
                    productCode={product.productCode}
                    productName={product.productName}
                    category={product.category.value}
                    summary={product.summary}
                    description={product.description}
                />
            </div>
        </div>
        <RelatedSection/>
    </div>
  )
}

export default ItemSection