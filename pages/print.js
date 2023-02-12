import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
        <h2>Blinkpool</h2>
        <span className="date">2016 - 2019</span>
        <Image src="../images/blinkpool/logo.png" alt="blinkpool logo" />
        <p>Logo for a UK based e-sports gambling company</p>
        
        <Image src="../images/blinkpool/business-cards.jpg" alt="blinkpool business cards" />
        <p>Company business cards and headed paper</p>

        <Image src="../images/blinkpool/outdoor-billboard.jpg" alt="blinkpool branding" />
        <p>Outdoor advertising during a major esports event in Birmingham</p>

        <Image src="../images/blinkpool/brand2.jpg" alt="blinkpool branding" />
        <Image src="../images/blinkpool/brand1.jpg" alt="blinkpool branding" />
        <Image src="../images/blinkpool/brand4.jpg" alt="blinkpool branding" />
        <Image src="../images/blinkpool/brand3.jpg" alt="blinkpool branding" />
        <p>A selection of Blinkpool branded collateral and clothing</p>

        <h2>Fianium</h2>
        <span className="date">2003 - 2016</span>
        <Image src="../images/fianium/fianium-display3.jpg" alt="fianium backlit poster" />
        <p>Large, backlit tradeshow poster</p>
        <Image src="../images/fianium/fianium-display4.jpg" alt="fianium display" />
        <Image src="../images/fianium/fianium-displays.jpg" alt="fianium display design" />
        <p>A selection of tradeshow display stands</p>
        <Image src="../images/fianium/fianium-logo-word-collage.png" alt="fianium logo word collage" />
        <p>Stylised Fianium logo</p>
        <Image src="../images/fianium/fianium-logo.jpg" alt="fianium logo" />
        <p>Fianium logo and various print collateral</p>
        <Image src="../images/fianium/fianium-product-photos.jpg" alt="fianium product photos" />
        <p>Product photography</p>
        <Image src="../images/fianium/fianium-photos.jpg" alt="fianium photos" />
        <p>General photography</p>

        <h2>Various Projects</h2>
        <span className="date">2011 - Current</span>
        <Image src="../images/print/eleri.jpg" alt="eleri" />
        <p>Logo for a clothing brand for made-to-order womenswear</p>
        <Image src="../images/print/funk-photo.jpg" alt="funk at the forge logo" />
        <p>Logo for a jazz, funk and blues night in Camden</p>
        <Image src="../images/print/nexus.jpg" alt='' />
        <p>Logo for <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">www.nexusmods.com</a></p>
      </article>
    </React.Fragment>
  )

}

export default Print
