import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'about' },
  { href: '/web', label: 'web' },
  { href: '/print', label: 'print' },
  { href: '/apps', label: 'apps' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  link.cssClass = `nav-item nav-${link.label}`
  return link
})

const Nav = (c) => {
  return (
    <nav className={`layout-nav ${c.className}`}>
      {links.map(({ key, cssClass, href, label }) => (
        <span key={key} className={cssClass}>
          <Link href={href}>
            <span>{label}</span>
          </Link>
        </span>
      ))}
    </nav>
  )
}

export default Nav
