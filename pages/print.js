import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Head from '../components/head'
import Nav from '../components/nav'

function Print() {
  const router = useRouter()
  
  return (
    <>
      <Head title="Boris Grudinin - Print" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header" id="print">
        <h1>Print</h1>
      </header>

      <article className="page-content">
        <h2>Blinkpool</h2>
        <span className="date">2016 - 2019</span>
        <Image src="../images/blinkpool/logo.png" alt="blinkpool logo" width={0} height={0} />
        <p>Logo for a UK based e-sports gambling company</p>
        
        <Image src="../images/blinkpool/business-cards.jpg" alt="blinkpool business cards" width={0} height={0} />
        <p>Company business cards and headed paper</p>

        <Image src="../images/blinkpool/outdoor-billboard.jpg" alt="blinkpool branding" width={0} height={0} />
        <p>Outdoor advertising during a major esports event in Birmingham</p>

        <Image src="../images/blinkpool/brand2.jpg" alt="blinkpool branding" width={0} height={0} />
        <Image src="../images/blinkpool/brand1.jpg" alt="blinkpool branding" width={0} height={0} />
        <Image src="../images/blinkpool/brand4.jpg" alt="blinkpool branding" width={0} height={0} />
        <Image src="../images/blinkpool/brand3.jpg" alt="blinkpool branding" width={0} height={0} />
        <p>A selection of Blinkpool branded collateral and clothing</p>

        <h2>Fianium</h2>
        <span className="date">2003 - 2016</span>
        <Image src="../images/fianium/fianium-display3.jpg" alt="fianium backlit poster" width={0} height={0} />
        <p>Large, backlit tradeshow poster</p>
        <Image src="../images/fianium/fianium-display4.jpg" alt="fianium display" width={0} height={0} />
        <Image src="../images/fianium/fianium-displays.jpg" alt="fianium display design" width={0} height={0} />
        <p>A selection of tradeshow display stands</p>
        <Image src="../images/fianium/fianium-logo-word-collage.png" alt="fianium logo word collage" width={0} height={0} />
        <p>Stylised Fianium logo</p>
        <Image src="../images/fianium/fianium-logo.jpg" alt="fianium logo" width={0} height={0} />
        <p>Fianium logo and various print collateral</p>
        <Image src="../images/fianium/fianium-product-photos.jpg" alt="fianium product photos" width={0} height={0} />
        <p>Product photography</p>
        <Image src="../images/fianium/fianium-photos.jpg" alt="fianium photos" width={0} height={0} />
        <p>General photography</p>

        <h2>Various Projects</h2>
        <span className="date">2011 - Current</span>
        <Image src="../images/print/eleri.jpg" alt="eleri" width={0} height={0} />
        <p>Logo for a clothing brand for made-to-order womenswear</p>
        <Image src="../images/print/funk-photo.jpg" alt="funk at the forge logo" width={0} height={0} />
        <p>Logo for a jazz, funk and blues night in Camden</p>
        <Image src="../images/print/nexus.jpg" alt='' width={0} height={0} />
        <p>Logo for <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">www.nexusmods.com</a></p>
      </article>
    </>
  )

}

export default Print
