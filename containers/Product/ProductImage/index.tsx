import Image from 'next/image'
import React, { FC } from 'react'

type productImageProps = {
    productCode: string,
    productName: string,
    src: string
}

const ProductImage: FC<productImageProps> = ({productCode, productName, src}) => {
  return (
    <div className='flex-1 px-20 py-10'>
        <Image
            src={src}
            alt={productName}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full aspect-square object-cover"
        />
    </div>
  )
}

export default ProductImage