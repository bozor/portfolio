import React from 'react';
import { Roboto_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { SmoothScrollbar } from '@14islands/r3f-scroll-rig';

import Nav from '@components/Nav';

import s from '@styles/layout.module.scss';

import '@styles/index.scss';

const robotoMono = Roboto_Mono({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

type LayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: 'Boris Grudinin - %s',
    default: 'Boris Grudinin'
  },
  description: 'Boris Grudinin - Digital Interaction Specialist',
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${robotoMono.className} ${s.outer}`}>

        <div className={s.inner}>
          <section className={s.content}>
            <Nav />
            {children}
          </section>
        </div>
      </body>
      <GoogleTagManager gtmId={'G-95677VDEHT'} />
    </html>
  )
}