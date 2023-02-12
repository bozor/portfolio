import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  console.log('here')
  return (
    <Html>
      <Head />
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