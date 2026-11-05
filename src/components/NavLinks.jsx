import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href, children}) => {
    const pathName = usePathname();
    const isActive = href === "/" ? pathName === "/" : pathName.startsWith(href);

    return <Link href={href} className={`${isActive ? 'bg-[#1A2312] text-[#C2F800] rounded-full' : ''}`}>{children}</Link>;
};

export default NavLinks;