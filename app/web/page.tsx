import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Projects from '@components/Projects';

import { TProject } from '@/src/types/project';

import omm from 'public/images/web/omm.jpg';
import puma from 'public/images/web/puma-table.jpg';
import nikeLilPenny from 'public/images/web/nike-lil-penny.jpg';
import nikeBraLegging from 'public/images/web/nike-bra-legging.jpg';
import jbl from 'public/images/web/jbl.jpg';
import nikeRunningShoe from 'public/images/web/nike-running-shoe-finder.jpg';
import nikeRunningShoe2 from 'public/images/web/nike-running-shoe-finder2.jpg';
import ire from 'public/images/web/ire.jpg';
import bpDesktop from 'public/images/web/bp-desktop.jpg';
import bpMobile from 'public/images/web/bp-mobile.jpg';
import gemTitans from 'public/images/web/gem-titans.jpg';
import predictDesktop from 'public/images/web/predict-desktop.jpg';
import predictMobile from 'public/images/web/predict-mobile.jpg';
import gfwd from 'public/images/web/gfwd.jpg';
import fianium from 'public/images/web/fianium.jpg';

export const metadata: Metadata = { title: 'Web' };

const projects: TProject[] = [
  {
    title: 'OMM Agency Website',
    date: '2024',
    technologies: 'React, Typescript, Storybook Framer Motion, Next.js, Three.js, GraphQL',
    url: 'https://weareomm.com/',
    imgSrcs: [omm],
    description: [
      <p>
        A major overhaul of the{' '}
        <a href="https://weareomm.com/" target="_blank" rel="noreferrer">
          OMM
        </a>{' '}
        agency website.
      </p>,
      <p>
        I worked alongside a lead developer and a number of designers during this project.{' '}
        <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">
          Storybook
        </a>{' '}
        was invaluable during this project. It allowed us to implement each component and all of their states in isolation and it helped
        designers to check that brand guidelines were being adhered to.
      </p>
    ]
  },
  {
    title: 'JBL Challenge',
    technologies: 'React, Typescript, Framer Motion, PlayCanvas, Next.js, Electron',
    date: '2024',
    imgSrcs: [jbl],
    description: [
      <p>
        <strong>JBL Challenge</strong> is a campaign to promote one of JBL`s portable speakers. It is made up of a microsite, an endless
        runner style web game and a series of arcade style cabinets running the web game in various electronics stores around Germany.
      </p>,
      <p>
        The game was made using{' '}
        <a href="https://playcanvas.com/" target="_blank" rel="noreferrer">
          PlayCanvas
        </a>{' '}
        by one of the agency`s lead developers, while I was responsible for the microsite and the game UI.
      </p>
    ]
  },
  {
    title: 'Nike Running Shoe Finder 2.0',
    technologies: 'React, Typescript, Framer Motion, Next.js, Three.js, GraphQL',
    date: '2024',
    imgSrcs: [nikeRunningShoe2],
    description: [
      <p>
        <strong>Nike Running Shoe Finder 2.0</strong> is a responsive website that is linked to from the running section of nike.com and the
        Nike mobile app.
      </p>,
      <p>Working with a lead developer, I tackled most of the UI while they implemented the shoe visualisation in Three.js.</p>
    ]
  },
  {
    title: 'Nike New Age of Sport',
    technologies: 'React, Typescript, Next.js, Three.js, 8th Wall',
    date: '2023',
    imgSrcs: [nikeLilPenny],
    description: [
      <p>
        <strong>Nike New Age of Sport</strong> was a promotional AR microsite for a relaunch of one of Nike`s famous basketball shoes.
      </p>,
      <p>The AR component was created by another developer using 8th Wall while I helped with the UI elements and testing.</p>
    ]
  },
  {
    title: 'PUMA Basketball Interactive Table',
    technologies: 'React, Typescript, Framer Motion, Next.js, Three.js, GraphQL',
    date: '2023',
    imgSrcs: [puma],
    description: [
      <p>
        <strong>PUMA Basketball Interactive Table</strong> is a large 86&ldquo; touchscreen that was installed in PUMA corporate
        Headquarters, Herzogenaurach, Germany.
      </p>,
      <p>
        It allows users to explore PUMA`s upcoming basketball shoe collection by placing rfid embedded sample shoes onto a sensor. The user
        is then able to use the large touchscreen display to play around with the shoe in 3D and get more information about it.
      </p>
    ]
  },
  {
    title: 'Nike Bra &amp; Legging Finder',
    technologies: 'React, Typescript, Framer Motion, Next.js, Electron, Mixpanel',
    date: '2023-2024',
    imgSrcs: [nikeBraLegging],
    description: [
      <p>
        <strong>Nike Bra &amp; Legging Finder</strong> is a physical installation in Nike Town London that uses electron to run an react web
        app. It asks users a series of questions and suggests possible matching Nike products which can then be purchased in store.
      </p>
    ]
  },
  {
    title: 'International Rugby Experience',
    technologies: 'React, Typescript, Storybook, Framer Motion, Electron',
    date: '2021-2023',
    url: 'https://www.internationalrugbyexperience.com/',
    imgSrcs: [ire],
    description: [
      <p>
        <a href="https://www.internationalrugbyexperience.com/" target="_blank" rel="noreferrer">
          International Rugby Experience
        </a>{' '}
        is a multi storey, interactive rugby museum in Limerick, Ireland. Working as part of a 7 person development team, I was responsible
        for a lot of the frontend as well as some image generation on the backend for personalised emails.
      </p>,
      <p>
        I worked on 12 different touch screen electron apps along with an npm package of common components which helped maintain UI
        consistency throughout.
      </p>
    ]
  },
  {
    title: 'Nike Running Shoe Finder',
    technologies: 'React, Typescript, Framer Motion, Next.js, Electron',
    date: '2023',
    imgSrcs: [nikeRunningShoe],
    description: [
      <p>
        <strong>Nike Running Shoe Finder</strong> is a physical installation in Nike Town London. It takes centre stage in the running area
        of the store.
      </p>,
      <p>
        I worked on one of the phases of the project which involved stripping out the old{' '}
        <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
          chakra ui
        </a>{' '}
        in favour of more ubiquitous css modules along with general code refactoring.
      </p>
    ]
  },
  {
    title: 'Blinkpool',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2017-2019',
    imgSrcs: [bpDesktop],
    extras: {
      imgSrc: bpMobile,
      caption: <p>Small screen version of the Blinkpool site.</p>
    },
    description: [
      <p>
        <strong>Blinkpool</strong> was a UK regulated esports gambling website which evolved over a period of 3 years. I was responsible for
        the prototyping, design and front end development.
      </p>,
      <p>
        The site went through numerous iterations and we followed a data led decision making approach when it came to evolving the site.
        Each iteration was carefully analysed with the help of Google Analytics, Hotjar, Mixpanel and user interviews where possible, to see
        how the changes we made affected user behaviour.
      </p>
    ]
  },
  {
    title: 'Gem Titans',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2019',
    imgSrcs: [gemTitans],
    extras: {
      imgSrc: predictMobile,
      caption: <p>Small screen version of the Blinkpredict site.</p>
    },
    description: [
      <p>
        <strong>Gem Titans</strong> was a free to play responsive web app. I was responsible for the prototyping, design and front end
        development.
      </p>,
      <p>
        The web app was a stock market style game which allowed users to buy and sell shares (gems) that coincided with an answer to a
        particular question about a game that was shown on the twitch stream. Users could build up tokens that they could then exchange for
        prizes like game skins or Steam vouchers.
      </p>,
      <p>Just like Blinkpool, we used extensive analytics tools to monitor how changes we made affected user behaviour.</p>
    ]
  },
  {
    title: 'Blinkpredict',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2016 - 2018',
    imgSrcs: [predictDesktop],
    description: [
      <p>
        <strong>Blinkpredict</strong> was a free to play responsive web app that was a precursor to Blinkpool. I was responsible for the
        prototyping, design and front end development.
      </p>,
      <p>
        We used this site to test out potential features for our real-money product, Blinkpool. The site had a few thousand users that gave
        us timely and useful feedback. We also used Mixpanel and Google Analytics which allowed us to make quick decisions and iterate
        through our ideas.
      </p>
    ]
  },
  {
    title: 'Get Fit with Davina',
    technologies: 'Ruby on Rails, Less, Mixpanl',
    date: '2015 - 2016',
    imgSrcs: [gfwd],
    description: [
      <p>
        <strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved
        with the wireframing, design and front end development.
      </p>
    ]
  },
  {
    title: 'Fianium',
    technologies: 'Grunt, CircleCI',
    date: '2014 - 2016',
    url: 'http://www.fianium.com',
    imgSrcs: [fianium],
    description: [
      <p>
        Website for{' '}
        <a href="http://www.fianium.com" rel="noreferrer" target="_blank">
          Fianium
        </a>
        , a laser manufacturer (now NKT Photonics). I designed and implemented it along with setting up a simple automated deployment
        process using CircleCI.
      </p>
    ]
  }
];

const Web: NextPage = () => {
  return (
    <>
      <Header text="Web" />

      <article className="page-content">
        <Projects projects={projects} />
      </article>
    </>
  );
};

export default Web;
