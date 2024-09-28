import React, { FC } from 'react'
import Image from 'next/image';
import ProductImage from '@/containers/Product/ProductImage';
import ProductDescriptionSection from '@/containers/Product/Description';
import { ProductDetail } from '@/types/ProductDetail';
import ItemSection from '@/containers/Product/ItemSection';
import Breadcrumb from '@/components/Breadcrumb';

const sampleProductDetail: ProductDetail = {
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
};

const ProductDetailPage:FC = () => {
  return (
    <>
      <Breadcrumb
        homeElement="Trang chủ"
        separator="/"
        containerClasses="breadcrumbs"
        listClasses="breadcrumb-item"
        activeClasses="active"
        capitalizeLinks={true}
      />
      <main>
        <ItemSection product={sampleProductDetail}/>
      </main>
    </>
  )
}

export default ProductDetailPage