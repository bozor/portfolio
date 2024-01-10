import type { AppProps } from 'next/app';
import React from 'react';
import { Roboto_Mono } from 'next/font/google'

import '@styles/index.scss';
import Layout from '@components/Layout';
import Head from 'next/head';

const robotoMono = Roboto_Mono({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout className={robotoMono.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}