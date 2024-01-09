import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Head from '@components/Head'
import Nav from '@components/Nav'

import bpLogo from '@images/blinkpool/logo.png';
import bpCards from "@images/blinkpool/business-cards.jpg"
import bpBillboard from "@images/blinkpool/outdoor-billboard.jpg"
import bpBrand2 from "@images/blinkpool/brand2.jpg"
import bpBrand1 from "@images/blinkpool/brand1.jpg"
import bpBrand4 from "@images/blinkpool/brand4.jpg"
import bpBrand3 from "@images/blinkpool/brand3.jpg"
import fianiumDisplay3 from "@images/fianium/fianium-display3.jpg"
import fianiumDisplay4 from "@images/fianium/fianium-display4.jpg"
import fianiumDisplays from "@images/fianium/fianium-displays.jpg"
import fianiumLogoWords from "@images/fianium/fianium-logo-word-collage.png"
import fianiumLogo from "@images/fianium/fianium-logo.jpg"
import fianiumProductPhotos from "@images/fianium/fianium-product-photos.jpg"
import fianiumPhotos from "@images/fianium/fianium-photos.jpg"
import eleri from "@images/print/eleri.jpg"
import funk from "@images/print/funk-photo.jpg"
import nexus from "@images/print/nexus.jpg"

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
        <Image src={bpLogo} alt="blinkpool logo" width={0} height={0} />
        <p>Logo for a UK based e-sports gambling company</p>
        
        <Image src={bpCards} alt="blinkpool business cards" width={0} height={0} />
        <p>Company business cards and headed paper</p>

        <Image src={bpBillboard} alt="blinkpool branding" width={0} height={0} />
        <p>Outdoor advertising during a major esports event in Birmingham</p>

        <Image src={bpBrand2} alt="blinkpool branding" width={0} height={0} />
        <Image src={bpBrand1} alt="blinkpool branding" width={0} height={0} />
        <Image src={bpBrand4} alt="blinkpool branding" width={0} height={0} />
        <Image src={bpBrand3} alt="blinkpool branding" width={0} height={0} />
        <p>A selection of Blinkpool branded collateral and clothing</p>

        <h2>Fianium</h2>
        <span className="date">2003 - 2016</span>
        <Image src={fianiumDisplay3} alt="fianium backlit poster" width={0} height={0} />
        <p>Large, backlit tradeshow poster</p>
        <Image src={fianiumDisplay4} alt="fianium display" width={0} height={0} />
        <Image src={fianiumDisplays} alt="fianium display design" width={0} height={0} />
        <p>A selection of tradeshow display stands</p>
        <Image src={fianiumLogoWords} alt="fianium logo word collage" width={0} height={0} />
        <p>Stylised Fianium logo</p>
        <Image src={fianiumLogo} alt="fianium logo" width={0} height={0} />
        <p>Fianium logo and various print collateral</p>
        <Image src={fianiumProductPhotos} alt="fianium product photos" width={0} height={0} />
        <p>Product photography</p>
        <Image src={fianiumPhotos} alt="fianium photos" width={0} height={0} />
        <p>General photography</p>

        <h2>Various Projects</h2>
        <span className="date">2011 - Current</span>
        <Image src={eleri} alt="eleri" width={0} height={0} />
        <p>Logo for a clothing brand for made-to-order womenswear</p>
        <Image src={funk} alt="funk at the forge logo" width={0} height={0} />
        <p>Logo for a jazz, funk and blues night in Camden, London</p>
        <Image src={nexus} alt='' width={0} height={0} />
        <p>Logo for <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">www.nexusmods.com</a></p>
      </article>
    </>
  )

}

export default Print
