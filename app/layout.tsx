import React from 'react';
import { Roboto_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

import Layout from '@/src/components/Layout';

import '@styles/index.scss';

const robotoMono = Roboto_Mono({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: 'Boris Grudinin - %s',
    default: 'Boris Grudinin'
  },
  description: 'Boris Grudinin - Senior Frontend Developer',
  icons: [
    {
      rel: 'shortcut icon',
      url: '/work/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: '/work/favicon-96x96.png'
    }
  ]
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Layout fontClassName={robotoMono.className}>{children}</Layout>
      <GoogleAnalytics gaId={'G-95677VDEHT'} />
    </html>
  );
}
