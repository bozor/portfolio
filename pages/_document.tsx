import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Boris Grudinin - Digital Interaction Specialist"
        />
        {/* <link rel="apple-touch-icon" sizes="180x180" href={require('favicon/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" sizes="32x32" href={require('favicon/favicon-32x32.png')} />
        <link rel="icon" type="image/png" sizes="16x16" href={require('favicon/favicon-16x16.png')} />
        <link rel="manifest" href={require('favicon/site.webmanifest')} />
        <link rel="mask-icon" href={require('favicon/safari-pinned-tab.svg')} color="#5bbad5" /> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=UA-29914500-1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-29914500-1');
          `}
        </Script>
      </Head>
      <body className="layout-outer">
        <div className="layout-inner">
          <section className="layout-content">
            <Main />
            <NextScript />
          </section>
        </div>
      </body>
    </Html>
  )
}