import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/head'
import Nav from '../components/nav'

function Print() {
  const router = useRouter()
  
  return (
    <React.Fragment>
      <Head title="Boris Grudinin - Print" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header" id="print">
        <h1>Print</h1>
      </header>

      <article className="page-content">
        <h2>Fianium</h2>
        <span className="date">2003 - 2016</span>

        <img src="../static/images/fianium/fianium-display3.jpg" alt="fianium backlit poster" />
        <p>Large, backlit tradeshow poster</p>
        <img src="../static/images/fianium/fianium-display4.jpg" alt="fianium display" />
        <p>Large, backlit tradeshow display stand</p>
        <img src="../static/images/fianium/fianium-displays.jpg" alt="fianium display design" />
        <p>Various other tradeshow display stands</p>
        <img src="../static/images/fianium/fianium-logo-word-collage.png" alt="fianium logo word collage" />
        <p>Stylised Fianium logo</p>
        <img src="../static/images/fianium/fianium-logo.jpg" alt="fianium logo" />
        <p>Fianium logo and various print collateral</p>
        <img src="../static/images/fianium/fianium-product-photos.jpg" alt="fianium product photos" />
        <p>Product photography</p>
        <img src="../static/images/fianium/fianium-photos.jpg" alt="fianium photos" />
        <p>General photography</p>
      </article>

      <article className="page-content">
        <h2>Various Projects</h2>
        <span className="date">2005 - Current</span>
        <img src="../static/images/print/nexus.jpg" />
        <p>Logo for <a href="http://www.nexusmods.com" target="_blank">www.nexusmods.com</a></p>
      </article>
    </React.Fragment>
  )

}

export default Print
