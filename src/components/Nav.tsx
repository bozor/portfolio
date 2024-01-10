'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'about' },
  { href: '/web', label: 'web' },
  { href: '/print', label: 'print' },
  { href: '/apps', label: 'apps' }
];

const Nav = () => {
  const pathname = usePathname();
  
  return (
    <nav className={`layout-nav page-${pathname.substring(1).slice(0,-1) || 'about'}`}>
      {links.map(({href, label }) => (
        <span key={`nav-link-${href}-${label}`} className={`nav-item nav-${label}`}>
          <Link href={href}>
            {label}
          </Link>
        </span>
      ))}
    </nav>
  )
}

export default Nav
