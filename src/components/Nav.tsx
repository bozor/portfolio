import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'about' },
  { href: '/web', label: 'web' },
  { href: '/print', label: 'print' },
  { href: '/apps', label: 'apps' }
];

const Nav = () => {
  const router = useRouter();
  
  return (
    <nav className={`layout-nav page-${router.pathname.substring(1) || 'about'}`}>
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
