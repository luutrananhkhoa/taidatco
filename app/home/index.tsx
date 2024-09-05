import HeroSection from '@/containers/HomePage/HeroSection'
import InfoSection from '@/containers/HomePage/InfoSection'
import ProjectSection from '@/containers/HomePage/ProjectSection'
import ServiceSection from '@/containers/HomePage/ServiceSection'
import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
        <HeroSection/>
        <ServiceSection />
        <InfoSection/>
        <ProjectSection />
    </div>
  )
}

export default Home