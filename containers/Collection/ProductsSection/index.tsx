import ArrowDownIcon from '@/components/Icons/ArrowDownIcon'
import React, { FC, useState } from 'react'
import { SortOptions } from './constant'
import ProductCard from '@/components/Cards/ProductCard'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { ProductDetail } from '@/types/ProductDetail'

type Props = {}

const sampleProducts: ProductDetail[] = [
    {
        productCode: "P001",
        productName: "Gạch đất sét nung 20x20",
        handle: "gach-dat-set-nung-p001",
        imgSrc: "/cat_1.png",
        description: [
          {
            id: 1,
            key: "Kích thước",
            value: "20x20x6 cm"
          },
          {
            id: 2,
            key: "Số lượng",
            value: "25 viên/m2"
          },
          {
            id: 3,
            key: "Trọng lượng",
            value: "2 kg/viên"
          },
          {
            id: 4,
            key: "Chất liệu",
            value: "đất sét nung chất lượng cao"
          }
        ],
        summary: "Gạch đất sét nung chất lượng cao, kích thước 20x20x6 cm, phù hợp cho nhiều loại công trình.",
        category: {
          id: 1,
          value: "Vật liệu xây dựng"
        }
    },
    {
        productCode: "P001",
        productName: "Gạch đất sét nung 20x20",
        handle: "gach-dat-set-nung-p001",
        imgSrc: "/cat_1.png",
        description: [
          {
            id: 1,
            key: "Kích thước",
            value: "20x20x6 cm"
          },
          {
            id: 2,
            key: "Số lượng",
            value: "25 viên/m2"
          },
          {
            id: 3,
            key: "Trọng lượng",
            value: "2 kg/viên"
          },
          {
            id: 4,
            key: "Chất liệu",
            value: "đất sét nung chất lượng cao"
          }
        ],
        summary: "Gạch đất sét nung chất lượng cao, kích thước 20x20x6 cm, phù hợp cho nhiều loại công trình.",
        category: {
          id: 1,
          value: "Vật liệu xây dựng"
        }
    },
    {
        productCode: "P001",
        productName: "Gạch đất sét nung 20x20",
        handle: "gach-dat-set-nung-p001",
        imgSrc: "/cat_1.png",
        description: [
          {
            id: 1,
            key: "Kích thước",
            value: "20x20x6 cm"
          },
          {
            id: 2,
            key: "Số lượng",
            value: "25 viên/m2"
          },
          {
            id: 3,
            key: "Trọng lượng",
            value: "2 kg/viên"
          },
          {
            id: 4,
            key: "Chất liệu",
            value: "đất sét nung chất lượng cao"
          }
        ],
        summary: "Gạch đất sét nung chất lượng cao, kích thước 20x20x6 cm, phù hợp cho nhiều loại công trình.",
        category: {
          id: 1,
          value: "Vật liệu xây dựng"
        }
    }
    ,{
        productCode: "P001",
        productName: "Gạch đất sét nung 20x20",
        handle: "gach-dat-set-nung-p001",
        imgSrc: "/cat_1.png",
        description: [
          {
            id: 1,
            key: "Kích thước",
            value: "20x20x6 cm"
          },
          {
            id: 2,
            key: "Số lượng",
            value: "25 viên/m2"
          },
          {
            id: 3,
            key: "Trọng lượng",
            value: "2 kg/viên"
          },
          {
            id: 4,
            key: "Chất liệu",
            value: "đất sét nung chất lượng cao"
          }
        ],
        summary: "Gạch đất sét nung chất lượng cao, kích thước 20x20x6 cm, phù hợp cho nhiều loại công trình.",
        category: {
          id: 1,
          value: "Vật liệu xây dựng"
        }
    }
    ,{
        productCode: "P001",
        productName: "Gạch đất sét nung 20x20",
        handle: "gach-dat-set-nung-p001",
        imgSrc: "/cat_1.png",
        description: [
          {
            id: 1,
            key: "Kích thước",
            value: "20x20x6 cm"
          },
          {
            id: 2,
            key: "Số lượng",
            value: "25 viên/m2"
          },
          {
            id: 3,
            key: "Trọng lượng",
            value: "2 kg/viên"
          },
          {
            id: 4,
            key: "Chất liệu",
            value: "đất sét nung chất lượng cao"
          }
        ],
        summary: "Gạch đất sét nung chất lượng cao, kích thước 20x20x6 cm, phù hợp cho nhiều loại công trình.",
        category: {
          id: 1,
          value: "Vật liệu xây dựng"
        }
    }
]

  
const ProductSection: FC = (props: Props) => {

    const [isShowFilter, setIsShowFilter] = useState<Boolean>(false)
    const [filterValue, setFilterValue] = useState<String>('Sắp xếp')
    const handleSortOptionClick = (value: string) => {
        setIsShowFilter(false)
        setFilterValue(value)
    };

    const renderProductList = () => {
        return(
            sampleProducts.map((item, index)=>{
                return <ProductCard item={item}/>
            })
        )
    }
  return (
    <>
        {/* Filter Section */}
        <div className='w-full pt-20 pb-6 relative'>
            <div className='w-full flex justify-between items-center'>
                <div className=''>
                    <button onClick={() => setIsShowFilter((prev) => !prev)} className="text-black bg-greyColor hover:bg-[#E7E5E5] focus:ring-4 focus:ring-greyColor font-medium text-sm px-6 py-4 text-center inline-flex items-center rounded-full" type="button">
                        {filterValue}
                        <ArrowDownIcon />
                    </button>
                    <div className={`${isShowFilter ? 'opacity-100 visible' : 'opacity-0 invisible'} absolute transition-opacity duration-500 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4`}>
                        <ul className="py-1">
                            {SortOptions.map((item, index)=>{
                                return(
                                    <li key={index} onClick={()=>handleSortOptionClick(item.name)}>
                                        <p className="text-sm hover:bg-gray-100 font-medium text-gray-900 block px-4 py-2 cursor-pointer">
                                            {item.name}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div>
                    <p>Hiển thị 8 trên 1832 kết quả</p>
                </div>
            </div>
        </div>

        {/* Product list Section*/}
        <div className="w-full border-t-2 pt-10 pb-40">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {renderProductList()}
            </div>
            <div className='w-full flex justify-center pt-10 md:pt-20'>
                <PrimaryButton text="Hiển thị thêm"/>
            </div>
        </div>
    </>
  )
}

export default ProductSection