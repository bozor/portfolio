import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import * as Project from '@components/Project';

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
        <Project.Wrapper title="Blinkpool">
          <Project.Header date="2016 - 2019" />
          <Project.Images imgSrcs={[bpLogo]} imgAlts={['blinkpool logo']} />
          <Project.Description>
            <p>Logo for a UK based e-sports gambling company</p>
          </Project.Description>
          <Project.Images imgSrcs={[bpCards]} imgAlts={['blinkpool business cards']} />
          <Project.Description>
            <p>Company business cards and headed paper</p>
          </Project.Description>
          <Project.Images imgSrcs={[bpBillboard]} imgAlts={['blinkpool branding']} />
          <Project.Description>
            <p>Outdoor advertising during a major esports event in Birmingham</p>
          </Project.Description>
          <Project.Images
            imgSrcs={[bpBrand2, bpBrand1, bpBrand4, bpBrand3]}
            imgAlts={['blinkpool branding', 'blinkpool branding', 'blinkpool branding', 'blinkpool branding']}
          />
          <Project.Description>
            <p>A selection of Blinkpool branded collateral and clothing</p>
          </Project.Description>
        </Project.Wrapper>

        <Project.Wrapper title="Fianium">
          <Project.Header date="2003 - 2016" />
          <Project.Images imgSrcs={[fianiumDisplay3]} imgAlts={['fianium backlit poster']} />
          <Project.Description>
            <p>Large, backlit tradeshow poster</p>
          </Project.Description>
          <Project.Images imgSrcs={[fianiumDisplay4, fianiumDisplays]} imgAlts={['fianium display', 'fianium display design']} />
          <Project.Description>
            <p>A selection of tradeshow display stands</p>
          </Project.Description>
          <Project.Images imgSrcs={[fianiumLogoWords]} imgAlts={['fianium logo word collage']} />
          <Project.Description>
            <p>Stylised Fianium logo</p>
          </Project.Description>
          <Project.Images imgSrcs={[fianiumLogo]} imgAlts={['fianium logo']} />
          <Project.Description>
            <p>Fianium logo and various print collateral</p>
          </Project.Description>
          <Project.Images imgSrcs={[fianiumProductPhotos]} imgAlts={['fianium product photos']} />
          <Project.Description>
            <p>Product photography</p>
          </Project.Description>
          <Project.Images imgSrcs={[fianiumProductPhotos]} imgAlts={['fianium photos']} />
          <Project.Description>
            <p>General photography</p>
          </Project.Description>
        </Project.Wrapper>

        <Project.Wrapper title="Various Projects">
          <Project.Header date="2011 - Current" />
          <Project.Images imgSrcs={[eleri]} imgAlts={['eleri']} />
          <Project.Description>
            <p>Logo for a clothing brand for made-to-order womenswear</p>
          </Project.Description>
          <Project.Images imgSrcs={[funk]} imgAlts={['funk at the forge logo']} />
          <Project.Description>
            <p>Logo for a jazz, funk and blues night in Camden, London</p>
          </Project.Description>
          <Project.Images imgSrcs={[nexus]} imgAlts={['nexus mods']} />
          <Project.Description>
            <p>
              Logo for{' '}
              <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">
                www.nexusmods.com
              </a>
            </p>
          </Project.Description>
        </Project.Wrapper>
      </article>
    </>
  );
};

export default Print;
