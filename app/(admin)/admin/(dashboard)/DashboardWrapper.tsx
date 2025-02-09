'use client';

import Navbar from '@/components/Admin/Navbar';
import Sidebar from '@/components/Admin/Sidebar';
import React from 'react'

const DashboardLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
      <Sidebar />
      <main className={`flex w-full flex-col bg-gray-50 md:pl-64`}>
        <Navbar/>
        <div className='px-12 py-12'>
        {children}
        </div>
      </main>
    </div>
  )
} 

const DashboardWrapper = ({children} : {children : React.ReactNode}) => {
  return (
    <DashboardLayout>{children}</DashboardLayout>
  )
} 

export default DashboardWrapper