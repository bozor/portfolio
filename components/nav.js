import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'about' },
  { href: 'web', label: 'web' },
  { href: 'print', label: 'print' },
  { href: 'apps', label: 'apps' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  link.cssClass = `nav-item nav-${link.href}`
  return link
})

const Nav = () => (
  <nav>
    {links.map(({ key, cssClass, href, label }) => (
      <span key={key} className={cssClass}>
        <Link href={href}>
          <a>{label}</a>
        </Link>
      </span>
    ))}
  </nav>
)

export default Nav
