'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import s from './Nav.module.scss';

const links = [
  { href: '/', label: 'about' },
  { href: '/web', label: 'web' },
  { href: '/apps', label: 'apps' },
  { href: '/print', label: 'print' }
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={s.wrap}>
      {links.map(({ href, label }) => {
        const path = pathname.substring(1).slice(0, -1) || 'about';
        const isActive = label === path;
        const className = `${s.item} ${isActive ? s.active : ''}`;

        return (
          <Link key={`nav-link-${href}-${label}`} className={className} href={href}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
