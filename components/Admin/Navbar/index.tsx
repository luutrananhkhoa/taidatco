import { Menu } from 'lucide-react';
import React from 'react'

const Navbar = () => {

  return (
    <div className='abolute left-10 top-10 bg-white'>
        <button className='border rounded-lg p-2'>
            <Menu/>
        </button>
        <div className='w-full px-12 pt-10 pb-4'>
            <h1 className='text-3xl'>Dashboard</h1>
        </div>
    </div>
  )
}

export default Navbar