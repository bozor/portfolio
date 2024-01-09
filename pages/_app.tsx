import type { AppProps } from 'next/app';
import React from 'react';

import '../src/styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}