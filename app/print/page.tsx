import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Image from '@components/Image';

import bpLogo from 'public/images/blinkpool/logo.png';
import bpCards from 'public/images/blinkpool/business-cards.jpg';
import bpBillboard from 'public/images/blinkpool/outdoor-billboard.jpg';
import bpBrand2 from 'public/images/blinkpool/brand2.jpg';
import bpBrand1 from 'public/images/blinkpool/brand1.jpg';
import bpBrand4 from 'public/images/blinkpool/brand4.jpg';
import bpBrand3 from 'public/images/blinkpool/brand3.jpg';
import fianiumDisplay3 from 'public/images/fianium/fianium-display3.jpg';
import fianiumDisplay4 from 'public/images/fianium/fianium-display4.jpg';
import fianiumDisplays from 'public/images/fianium/fianium-displays.jpg';
import fianiumLogoWords from 'public/images/fianium/fianium-logo-word-collage.png';
import fianiumLogo from 'public/images/fianium/fianium-logo.jpg';
import fianiumProductPhotos from 'public/images/fianium/fianium-product-photos.jpg';
import fianiumPhotos from 'public/images/fianium/fianium-photos.jpg';
import eleri from 'public/images/print/eleri.jpg';
import funk from 'public/images/print/funk-photo.jpg';
import nexus from 'public/images/print/nexus.jpg';

export const metadata: Metadata = { title: 'Print' };

const Print: NextPage = () => {
  return (
    <>
      <Header text="Print" />

      <article className="page-content">
        <h2>Blinkpool</h2>
        <span className="date">2016 - 2019</span>
        <Image src={bpLogo} alt="blinkpool logo" />
        <p>Logo for a UK based e-sports gambling company</p>

        <Image src={bpCards} alt="blinkpool business cards" />
        <p>Company business cards and headed paper</p>

        <Image src={bpBillboard} alt="blinkpool branding" />
        <p>Outdoor advertising during a major esports event in Birmingham</p>

        <Image src={bpBrand2} alt="blinkpool branding" />
        <Image src={bpBrand1} alt="blinkpool branding" />
        <Image src={bpBrand4} alt="blinkpool branding" />
        <Image src={bpBrand3} alt="blinkpool branding" />
        <p>A selection of Blinkpool branded collateral and clothing</p>

        <h2>Fianium</h2>
        <span className="date">2003 - 2016</span>
        <Image src={fianiumDisplay3} alt="fianium backlit poster" />
        <p>Large, backlit tradeshow poster</p>
        <Image src={fianiumDisplay4} alt="fianium display" />
        <Image src={fianiumDisplays} alt="fianium display design" />
        <p>A selection of tradeshow display stands</p>
        <Image src={fianiumLogoWords} alt="fianium logo word collage" />
        <p>Stylised Fianium logo</p>
        <Image src={fianiumLogo} alt="fianium logo" />
        <p>Fianium logo and various print collateral</p>
        <Image src={fianiumProductPhotos} alt="fianium product photos" />
        <p>Product photography</p>
        <Image src={fianiumPhotos} alt="fianium photos" />
        <p>General photography</p>

        <h2>Various Projects</h2>
        <span className="date">2011 - Current</span>
        <Image src={eleri} alt="eleri" />
        <p>Logo for a clothing brand for made-to-order womenswear</p>
        <Image src={funk} alt="funk at the forge logo" />
        <p>Logo for a jazz, funk and blues night in Camden, London</p>
        <Image src={nexus} alt="" />
        <p>
          Logo for{' '}
          <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">
            www.nexusmods.com
          </a>
        </p>
      </article>
    </>
  );
};

export default Print;
