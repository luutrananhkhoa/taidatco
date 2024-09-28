"use client";

import Image from 'next/image';
import React from 'react'
import { LogOut, PanelRightOpen } from 'lucide-react';
import avatar from '@/public/avatar.png';
import Link from 'next/link';
import { MenuItems } from './constant';
import SidebarNav from '@/components/Navs/SidebarNav';


const Sidebar = () => {

    const SidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all 
    duration-300 h-full z-40 overflow-y-auto bg-white w-0 hidden`;

    // const SidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all 
    // duration-300 h-full z-40 overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;
    
    return (
        <div className={SidebarClassNames}>
            <div className='flex h-[100%] w-full flex-col justify-start'>
                {/* Logo */}
                <div className='z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-8 pb-4'>
                    <div className={`text-2xl font-bold text-gray-800 transition-opacity duration-300 
                        opacity-100`}
                        >
                        TAIDATCO
                    </div>
                    <button className='p-2 cursor-pointer'>
                        <PanelRightOpen/>
                    </button> 
                </div>
                {/* User section */}
                <div className='flex gap-5 items-center px-6 py-6 border-y-[1.5px] border-gray-200'>
                    <Image src={avatar} alt="avatar" width={40} height={40}/>
                    <div className=''>
                        <h3 className='text-md font-bold tracking-wide'>Admin</h3>
                        <p className='text-xs text-gray-500'>admin@gmail.com</p>
                    </div>
                </div>
                {/* Links */}
                <nav className='mt-4'>
                    {MenuItems.map((item, index)=>{
                        return (
                            <SidebarNav 
                                key={index} 
                                icon={item.icon} 
                                value={item.value} 
                                href={item.href}
                            />
                        )
                    })}
                </nav>
            </div>
            <div>
                <Link href={'/login'} className="w-full">
                    <div className={`relative flex cursor-pointer items-center gap-4 transition-colors
                    hover:bg-gray-100 justify-start px-8 py-3`}>
                        <LogOut className={`h-6 w-6 text-gray-800`}/>
                        <span className={`text-lg font-medium text-gray-800 dark:text-gray-100 hover:font-semibold`}>
                            Logout
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar