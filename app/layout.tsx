import React from 'react';
import { Roboto_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

import '@styles/index.scss';
import Nav from '@components/Nav';

const robotoMono = Roboto_Mono({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

type layoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Boris Grudinin - %s',
  description: 'Boris Grudinin - Digital Interaction Specialist',
}

export default function RootLayout({
  children,
}: layoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${robotoMono.className} layout-outer`}>
        <div className="layout-inner">
          <section className="layout-content">
            <Nav />
            {children}
          </section>
        </div>
      </body>
      <GoogleTagManager gtmId={'G-95677VDEHT'} />
    </html>
  )
}