import React from 'react'
import { Services } from './constant'
import ServiceCard from '@/components/Cards/ServiceCard'

type Props = {}

const ServiceSection = (props: Props) => {
  return (
    <section className="w-full flex justify-center bg-black text-white">
        <div className="w-full max-w-screen-xl flex flex-col py-20 md:py-40 items-center gap-8 md:gap-24">
            <div className="flex w-full xl:justify-between flex-col lg:flex-row items-center flex-wrap justify-center gap-6">
            {Services.map((el, _i) => (
                <ServiceCard
                    key={_i}
                    title={el.title}
                    content={el.content}
                    id={el.id}
                />
            ))}
            </div>
        </div>
    </section>
  )
}

export default ServiceSection