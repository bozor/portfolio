import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'about' },
  { href: '/web', label: 'web' },
  { href: '/print', label: 'print' },
  { href: '/apps', label: 'apps' }
];

const Nav = (c: { className: string }) => {
  return (
    <nav className={`layout-nav ${c.className}`}>
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
