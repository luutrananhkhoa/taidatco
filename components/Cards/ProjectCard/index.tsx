import Image from 'next/image'
import React, { FC } from 'react'

interface ProjectCardProps {
    id: number,
    alt: string,
    src: string
}

const ProjectCard:FC<ProjectCardProps> = ({id, alt, src}) => {
    return (
        <div className='w-90 h-[480px]'>
            <Image
                className="rounded-lg object-cover w-full h-full"
                src={src}
                width={0}
                height={0}
                sizes="20vw"
                alt={alt}
            />
        </div>
    )
}

export default ProjectCard