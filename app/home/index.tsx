import Footer from '@/components/footer'
import Header from '@/components/Header'
import HeroSection from '@/containers/HomePage/HeroSection'
import React from 'react'

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between'>
        <Header/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default Home