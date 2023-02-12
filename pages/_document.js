import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;500;700&display=swap" rel="stylesheet" />
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