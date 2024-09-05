'use client'
import { useParams } from 'next/navigation'
import { FC } from 'react';
import CategorySection from '@/containers/Collection/CategorySection';
import ProductSection from '@/containers/Collection/ProductsSection';

const Collection: FC = () => {
    const params = useParams<{ tag: string; item: string }>()

    return (
        <>
            <div className='min-h-screen text-black w-full flex flex-col items-center'>
                <div className=' text-black w-full max-w-screen-2xl flex justify-center flex-col items-center'>
                    <div className='w-full flex justify- items-center flex-col'>
                        <div className='pt-20 pb-4'>
                            <h1 className='text-5xl font-bold'>Sản Phẩm</h1>
                        </div>    
                    </div>
                    <CategorySection />
                    <ProductSection />
                </div>
            </div>
        </>
    )
}

export default Collection