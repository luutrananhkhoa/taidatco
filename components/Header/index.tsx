import Link from 'next/link'
import React from 'react'
import HeaderNav from '../Navs/HeaderNav'
import { HeaderNavs } from './constants'
import HamburgerButton from '../Buttons/HamburgerButton'
import Brand from '../Brand'

const Header = () => {
  return (
    <header className="w-full flex justify-center py-4 md:py-8 border-b-2 border-[#F3F3F3] relative">
      <div className="w-full max-w-screen-xl mx-5 md:mx-20 flex items-center justify-between">
        <Link href={"/"}>
          <Brand />
        </Link>
        <nav className=" gap-14 hidden lg:flex">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />   
          ))}
        </nav>
        <div className="flex lg:hidden">
          <HamburgerButton />
        </div>
      </div>
    </header>
  )
}

export default Header