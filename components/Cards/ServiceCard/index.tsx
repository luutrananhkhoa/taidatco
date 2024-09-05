import React, { FC } from 'react'

interface ServiceCardProps {
    id: number;
    title: string;
    content: string;
  }
const ServiceCard: FC<ServiceCardProps> = ({
    title,
    content
})=> {
  return (
      <div className="p-6 w-full md:w-max flex items-center md:items-start flex-col md:gap-6 gap-3">
        <div>
            <h3 className="text-white text-6xl md:text-8xl font-bold">{title}</h3>
        </div>
        <div className="text-center md:text-left w-full md:w-[295px] lg:w-[346px]">
            <p className="text-white md:text-lg text-sm">{content}</p>
        </div>
      </div>
  )
}

export default ServiceCard