import { ProductDescriptionType } from '@/types/ProductDescription'
import React, { FC } from 'react'

type productDescriptionSectionProps = {
    productCode: string,
    productName: string,
    description: ProductDescriptionType[],
    category: string,
    summary: string
}

const ProductDescriptionSection:FC<productDescriptionSectionProps> = ({
    productCode,
    productName,
    description,
    category,
    summary
}) => {

    const renderDescription = (description: ProductDescriptionType[]) =>{
        if(description.length === 0 ){
            return;
        }
        
        return(
            <ul className='list-disc px-10'>
                {description.map((item, index)=>{
                    return <li key={index}>{item.key}: {item.value}</li>
                })}
            </ul>
        )
    }

  return (
    <div className='flex-1 py-10'>
        <div className='px-10 py-10 bg-greyColor rounded-xl flex flex-col items-start justify-start gap-6'>
            <div className='px-8 py-4 bg-black text-white rounded-full'>
                <span>{category}</span>
            </div>
            <div className='border-b-2 w-full pb-6'>
                <h1 className='text-4xl font-semibold mb-2'>{productName}</h1>
                <p><span className='font-semibold'>Mã sản phẩm:</span> {productCode}</p>
            </div>
            <div className='text-justify'>
                <p>{summary}</p>
            </div>
            <div className="">
                <span className="font-semibold text-xl">Mô Tả:</span>
                {renderDescription(description)}
            </div>
        </div>
    </div>
  )
}

export default ProductDescriptionSection