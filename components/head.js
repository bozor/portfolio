import React from 'react'
import NextHead from 'next/head'
import Script from 'next/script'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="apple-touch-icon" sizes="180x180" href={require('favicon/apple-touch-icon.png')} />
    <link rel="icon" type="image/png" sizes="32x32" href={require('favicon/favicon-32x32.png')} />
    <link rel="icon" type="image/png" sizes="16x16" href={require('favicon/favicon-16x16.png')} /> */}
    {/* <link rel="manifest" href={require('favicon/site.webmanifest')} /> */}
    {/* <link rel="mask-icon" href={require('favicon/safari-pinned-tab.svg')} color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" /> */}
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
  </NextHead>
)

export default Head
