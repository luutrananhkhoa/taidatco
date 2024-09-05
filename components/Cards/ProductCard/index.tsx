import CartIcon from '@/components/Icons/CartIcon'
import { ProductDetail } from '@/types/ProductDetail'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type ProductCardProps  = {
  item: ProductDetail
}

const ProductCard:FC<ProductCardProps> = ({item}) => {
  return (
    <div className="bg-white px-8 py-14 shadow-lg rounded-lg flex flex-col items-center cursor-pointer">
      <Link href={`/product/${item.handle}`} className="">
        <Image src={item.imgSrc} alt={item.productName} width={250} height={250} className="object-cover" />
        <div className='w-full flex justify-between items-start py-4'>
            <p className="text-black text-md font-medium mt-2">{item.productName}</p>
            <button className="text-white rounded-full p-2 border bg-black">
                <CartIcon />
            </button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard