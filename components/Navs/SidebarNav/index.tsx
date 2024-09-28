import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

type SidebarNavProps = {
    href: string,
    icon?: LucideIcon,
    value: string
}

const SidebarNav:FC<SidebarNavProps> = ({
    href,
    icon: Icon,
    value
}: SidebarNavProps) => {

    const pathname = usePathname()
    const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full">
            <div className={`relative flex cursor-pointer items-center gap-4 transition-colors py-6
            hover:bg-gray-100 ${isActive ? " text-white" : ""} justify-start px-8 py-3`}>
                {isActive && <div className='absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200'></div>}
                {Icon ? <Icon className={`h-6 w-6 text-gray-800`}/> : null}
                <span className={`text-lg ${isActive ? "font-bold" : "font-medium"} text-gray-800 dark:text-gray-100`}>
                    {value}
                </span>
            </div>
        </Link>
    )
}

export default SidebarNav