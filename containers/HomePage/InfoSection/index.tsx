import PrimaryButton from '@/components/Buttons/PrimaryButton'
import Image from 'next/image'
import React from 'react'

type Props = {}

const InfoSection = (props: Props) => {
  return (
    <section className="w-full flex justify-center md:gap-10">
      <div className="w-full max-w-screen-xl flex flex-col md:grid  grid-flow-col grid-cols-1 grid-rows-6 md:grid-cols-4 md:grid-rows-5 gap-8 md:gap-8 mx-5 md:mx-20 f :items-center justify-between py-20">
        <div className="flex flex-col md:gap-12 gap-8 md:row-span-2 md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-3">
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="text-secondaryColor md:text-lg font-bold text-sm">
              Sản phẩm
            </h1>
            <h2 className="text-black md:text-3xl lg:text-5xl font-bold text-2xl">
              Được điêu khắc tỉ mỉ
              <br />
              chất lượng hoàn thiện cao
            </h2>
          </div>
          <p className="w-full text-sm md:text-base lg:text-lg text-textColor">
            {" "}
            Hoàn thiện với các chi tiết được điêu khắc tỉ mỉ. Đảm bảo chất lượng dịch vụ tốt nhất cho khách hàng. Bền bỉ với thời gian.
          </p>
        </div>
        <div className=" md:row-span-2 w-full h-[200px] md:h-auto  md:col-start-1 md:col-end-3 relative bg-black">
          <Image
            src={"/hero.png"}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="md:row-start-2 w-full h-[200px] md:h-auto md:row-end-6 md:col-start-3 md:col-end-5 bg-black relative">
          <Image
            src={"/hero.png"}
            alt="Seciton IMG"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  )
}

export default InfoSection