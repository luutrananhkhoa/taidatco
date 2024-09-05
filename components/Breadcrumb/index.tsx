"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, Fragment, ReactNode } from 'react'

type breadcrumbProps = {
    homeElement: ReactNode;
    separator: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
}

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: breadcrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div className='w-full flex justify-center align-center p-4'>
      <ul className={`w-full flex justify-center align-center gap-2 font-semibold text-sm ${containerClasses}`}>
        <li className={listClasses}>
          <Link href={'/'}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink === "Product" ? "Sản phẩm" : itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};


export default Breadcrumb