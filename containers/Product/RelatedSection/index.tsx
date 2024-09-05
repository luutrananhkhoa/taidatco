import ProductCard from '@/components/Cards/ProductCard'
import { ProductDetail } from '@/types/ProductDetail'
import React from 'react'

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
]

const RelatedSection = (props: Props) => {

    const renderRelatedProducts = (itemList : ProductDetail[]) =>{
        return(
            itemList.map((item: ProductDetail, index)=>{
                return  <ProductCard key={index} item={item} />
            })
        )
    }
  return (
    <div className='text-black w-full max-w-screen-2xl flex justify-center flex-col items-center py-40'>
        <div className='p-4'>
            <h1 className='text-4xl font-semibold'>Sản Phẩm Liên Quan</h1>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {renderRelatedProducts(sampleProducts)}
        </div>
    </div>
  )
}

export default RelatedSection