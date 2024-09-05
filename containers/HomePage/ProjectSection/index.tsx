import React, { FC } from 'react'
import { Projects } from './constants'
import ProjectCard from '@/components/Cards/ProjectCard';

const ProjectSection:FC = () => {
  return (
    <section className='w-full flex gap-14 justify-center flex-col items-center pb-40 pt-10'>
        <h1 className='text-4xl md:text-5xl font-semibold'>Công trình thi công</h1>
        <div className='flex justify-center items-center w-full px-20'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {Projects.map((item, index)=>{
                    return(
                        <ProjectCard  
                            id={item.id}
                            key={index}
                            src={"/hero.png"}
                            alt={item.alt}
                        />
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default ProjectSection