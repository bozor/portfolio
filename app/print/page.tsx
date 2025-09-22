import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import ProjectsPrint from '@/src/components/ProjectsPrint';

import { ProjectPrint } from '@/src/types/project';

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

const projectsPrint: ProjectPrint[] = [
  {
    title: 'Blinkpool',
    date: '2016 - 2019',
    items: [
      {
        images: {
          srcs: [bpLogo],
          alts: ['blinkpool logo']
        },
        description: [<p>Logo for a UK based e-sports gambling company</p>]
      },
      {
        images: {
          srcs: [bpCards],
          alts: ['blinkpool business cards']
        },
        description: [<p>Company business cards and headed paper</p>]
      },
      {
        images: {
          srcs: [bpBillboard],
          alts: ['blinkpool branding']
        },
        description: [<p>Outdoor advertising during a major esports event in Birmingham</p>]
      },
      {
        images: {
          srcs: [bpBrand2, bpBrand1, bpBrand4, bpBrand3],
          alts: ['blinkpool branding', 'blinkpool branding', 'blinkpool branding', 'blinkpool branding']
        },
        description: [<p>A selection of Blinkpool branded collateral and clothing</p>]
      }
    ]
  },
  {
    title: 'Fianium',
    date: '2003 - 2016',
    items: [
      {
        images: {
          srcs: [fianiumDisplay3],
          alts: ['fianium backlit poster']
        },
        description: [<p>Large, backlit tradeshow poster</p>]
      },
      {
        images: {
          srcs: [fianiumDisplay4, fianiumDisplays],
          alts: ['fianium display', 'fianium display design']
        },
        description: [<p>A selection of tradeshow display stands</p>]
      },
      {
        images: {
          srcs: [fianiumLogoWords],
          alts: ['fianium logo word collage']
        },
        description: [<p>Stylised Fianium logo</p>]
      },
      {
        images: {
          srcs: [fianiumLogo],
          alts: ['fianium logo']
        },
        description: [<p>Fianium logo and various print collateral</p>]
      },
      {
        images: {
          srcs: [fianiumProductPhotos],
          alts: ['fianium product photos']
        },
        description: [<p>Product photography</p>]
      },
      {
        images: {
          srcs: [fianiumPhotos],
          alts: ['fianium photos']
        },
        description: [<p>General photography</p>]
      }
    ]
  },
  {
    title: 'Various Projects',
    date: '2011 - Current',
    items: [
      {
        images: {
          srcs: [eleri],
          alts: ['eleri']
        },
        description: [<p>Logo for a clothing brand for made-to-order womenswear</p>]
      },
      {
        images: {
          srcs: [funk],
          alts: ['funk at the forge']
        },
        description: [<p>Logo for a jazz, funk and blues night in Camden, London</p>]
      },
      {
        images: {
          srcs: [nexus],
          alts: ['nexus mods']
        },
        description: [
          <p>
            Logo for{' '}
            <a href="http://www.nexusmods.com" target="_blank" rel="noreferrer">
              www.nexusmods.com
            </a>
          </p>
        ]
      }
    ]
  }
];

const Print: NextPage = () => {
  return (
    <>
      <Header text="Print" />
      <ProjectsPrint projectsPrint={projectsPrint} />
    </>
  );
};

export default Print;
