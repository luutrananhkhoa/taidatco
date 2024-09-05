import Image from 'next/image'
import React, { FC } from 'react'

interface CategoryCardProps {
    id: number,
    title: string,
    imgSrc: string
}

const CategoryCard:FC<CategoryCardProps> = ({id, title, imgSrc}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 cursor-pointer p-2 min-w-20">
        <Image 
            src={imgSrc}
            className='object-cover'
            width={'60'}
            height={'60'}
            alt=''
        />
        <h3 className='font-semibold text-wrap w-40 text-center'>{title}</h3>
    </div>
  )
}

export default CategoryCard