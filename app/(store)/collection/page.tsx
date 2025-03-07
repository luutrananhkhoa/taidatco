'use client'
import { useParams } from 'next/navigation'
import { FC, useCallback, useEffect, useState } from 'react';
import CategorySection from '@/containers/Collection/CategorySection';
import ProductSection from '@/containers/Collection/ProductsSection';
import { getProducts } from '@/lib/product';
import { Product } from '@/lib/product/types';

const Collection: FC = () => {
    const params = useParams<{ tag: string; item: string }>()
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<string>('Sắp xếp');

    const fetchProducts = useCallback(async () => {
        const response = await getProducts({ page: 1, limit: 20, sort: 'created_at', order: 'asc' });
  
        if(!response) return;
        console.log('data', response);

        setProducts(response.data);
        setLoading(false);

        return response;
    }, [ products]);

    const handleSortOptionClick = (value: string) => {
        setIsShowFilter(false);
        setFilterValue(value);
    };

    useEffect(() => {
        fetchProducts();
    }, []);
    
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
                    <ProductSection 
                        products={products}
                        loading={loading}
                        isShowFilter={isShowFilter}
                        setIsShowFilter={setIsShowFilter}
                        filterValue={filterValue}
                        handleSortOptionClick={handleSortOptionClick}
                    />
                </div>
            </div>
        </>
    )
}

export default Collection