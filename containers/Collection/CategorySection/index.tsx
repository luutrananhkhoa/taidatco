import { CategoryCards } from '@/containers/Collection/CategorySection/constant'
import CategoryCard from '@/components/Cards/CategoryCard'
import React from 'react'

type Props = {}

const CategorySection = (props: Props) => {
  return (
    <div className='w-full flex justify-center items-center p-6'>
        <div className="p-2 flex gap-6 flex-wrap">
            <div className="p-6 flex flex-col items-center justify-center gap-1 border-r-2 border-zinc-200">
                <p className='text-xl md:text-3xl font-semibold'>Danh mục</p>
            </div>
            {CategoryCards.map((item, index)=>{
                return(
                    <CategoryCard
                        key={index}
                        id={item.id}
                        title={item.title}
                        imgSrc={item.imgSrc}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default CategorySection