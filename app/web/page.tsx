import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Image from '@components/Image';

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

const Web: NextPage = () => {
  return (
    <>
      <Header text="Web" />

      <article className="page-content">
        <h2>
          OMM Agency Website<span>React, Typescript, Framer Motion, Next.js, Three.js, GraphQL</span>
        </h2>
        <span className="date">2024</span>
        <a href="https://weareomm.com/" target="_blank" rel="noreferrer">
          <Image src={omm} alt="" />
        </a>
        <div className="description">
          <p>
            A major overhaul of the{' '}
            <a href="https://weareomm.com/" target="_blank" rel="noreferrer">
              OMM
            </a>{' '}
            agency website.
          </p>
          <p>
            I worked alongside a lead developer and a number of designers during this project.{' '}
            <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">
              Storybook
            </a>{' '}
            was invaluable during this project. It allowed us to implement each component and all of their states in isolation and it helped
            designers to check that brand guidelines were being adhered to.
          </p>
        </div>

        <h2>
          JBL Challenge<span>React, Typescript, Framer Motion, PlayCanvas, Next.js, Electron</span>
        </h2>
        <span className="date">2024</span>
        <a href="https://challenge.jbl.com/" target="_blank" rel="noreferrer">
          <Image src={jbl} alt="" />
        </a>
        <div className="description">
          <p>
            <a href="https://challenge.jbl.com/" target="_blank" rel="noreferrer">
              JBL Challenge
            </a>{' '}
            is a campaign to promote one of JBL`s portable speakers. It is made up of a microsite, an endless runner style web game and a
            series of arcade style cabinets running the web game in various electronics stores around Germany.
          </p>
          <p>
            The game was made using{' '}
            <a href="https://playcanvas.com/" target="_blank" rel="noreferrer">
              PlayCanvas
            </a>{' '}
            by one of the agency`s lead developers, while I was responsible for the microsite and the game UI.
          </p>
        </div>

        <h2>
          Nike Running Shoe Finder 2.0<span>React, Typescript, Framer Motion, Next.js, Three.js, GraphQL</span>
        </h2>
        <span className="date">2024</span>
        <a href="https://nikerunningshoefinder.com/" target="_blank" rel="noreferrer">
          <Image src={nikeRunningShoe2} alt="" />
        </a>
        <div className="description">
          <p>
            <a href="https://nikerunningshoefinder.com/" target="_blank" rel="noreferrer">
              Nike Running Shoe Finder 2.0
            </a>{' '}
            is a responsive website that is linked to from the running section of nike.com and the Nike mobile app.
          </p>
          <p>Working with a lead developer, I tackled most of the UI while they implemented the shoe visualisation in Three.js.</p>
        </div>

        <h2>
          Nike New Age of Sport<span>React, Typescript, Next.js, Three.js, 8th Wall</span>
        </h2>
        <span className="date">2023</span>
        <Image src={nikeLilPenny} alt="" />
        <div className="description">
          <p>
            <strong>Nike New Age of Sport</strong> was a promotional AR microsite for a relaunch of one of Nike`s famous basketball shoes.
          </p>
          <p>The AR component was created by another developer using 8th Wall while I helped with the UI elements and testing.</p>
        </div>

        <h2>
          PUMA Basketball Interactive Table<span>React, Typescript, Framer Motion, Next.js, Three.js, GraphQL</span>
        </h2>
        <span className="date">2023</span>
        <Image src={puma} alt="" />
        <div className="description">
          <p>
            <strong>PUMA Basketball Interactive Table</strong> is a large 86&ldquo; touchscreen that was installed in PUMA corporate
            Headquarters, Herzogenaurach, Germany.
          </p>
          <p>
            It allows users to explore PUMA`s upcoming basketball shoe collection by placing rfid embedded sample shoes onto a sensor. The
            user is then able to use the large touchscreen display to play around with the shoe in 3D and get more information about it.
          </p>
        </div>

        <h2>
          Nike Bra &amp; Legging Finder <span>React, Typescript, Framer Motion, Next.js, Electron, Mixpanel</span>
        </h2>
        <span className="date">2023-2024</span>
        <Image src={nikeBraLegging} alt="" />
        <div className="description">
          <p>
            <strong>Nike Bra &amp; Legging Finder</strong> is a physical installation in Nike Town London that uses electron to run an react
            web app. It asks users a series of questions and suggests possible matching Nike products which can then be purchased in store.
          </p>
        </div>

        <h2>
          International Rugby Experience <span>React, Typescript, Framer Motion, Electron</span>
        </h2>
        <span className="date">2021-2023</span>
        <a href="https://www.internationalrugbyexperience.com/" target="_blank" rel="noreferrer">
          <Image src={ire} alt="" />
        </a>
        <div className="description">
          <p>
            <a href="https://www.internationalrugbyexperience.com/" target="_blank" rel="noreferrer">
              International Rugby Experience
            </a>{' '}
            is a multi storey, interactive rugby museum in Limerick, Ireland. Working as part of a 7 person development team, I was
            responsible for a lot of the frontend as well as some image generation on the backend for personalised emails.
          </p>
          <p>
            I worked on 10 different touch screen electron apps along with an npm package of common components which helped maintain UI
            consistency throughout.
          </p>
        </div>

        <h2>
          Nike Running Shoe Finder <span>React, Typescript, Framer Motion, Next.js, Electron</span>
        </h2>
        <span className="date">2023</span>
        <Image src={nikeRunningShoe} alt="" />
        <div className="description">
          <p>
            <strong>Nike Running Shoe Finder</strong> is a physical installation in Nike Town London. It takes centre stage in the running
            area of the store.
          </p>
          <p>
            I worked on one of the phases of the project which involved stripping out the old{' '}
            <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">
              chakra ui
            </a>{' '}
            in favour of more ubiquitous css modules along with general code refactoring.
          </p>
        </div>

        <h2>
          Blinkpool <span>React, Meteor, Node</span>
        </h2>
        <span className="date">2017 - 2019</span>
        <Image src={bpDesktop} alt="" />
        <div className="description">
          <p>
            <strong>Blinkpool</strong> was a UK regulated esports gambling website which evolved over a period of 3 years. I was responsible
            for the prototyping, design and front end development.
          </p>
          <p>
            The site went through numerous iterations and we followed a data led decision making approach when it came to evolving the site.
            Each iteration was carefully analysed with the help of Google Analytics, Hotjar, Mixpanel and user interviews where possible, to
            see how the changes we made affected user behaviour.
          </p>
        </div>
        <Image src={bpMobile} alt="" />
        <p>Small screen version of the Blinkpool site.</p>

        <h2>
          Gem Titans <span>React, Meteor, Node</span>
        </h2>
        <span className="date">2019</span>
        <Image src={gemTitans} alt="" />
        <div className="description">
          <p>
            <strong>Gem Titans</strong> was a free to play responsive web app. I was responsible for the prototyping, design and front end
            development.
          </p>
          <p>
            The web app was a stock market style game which allowed users to buy and sell shares (gems) that coincided with an answer to a
            particular question about a game that was shown on the twitch stream. Users could build up tokens that they could then exchange
            for prizes like game skins or Steam vouchers.
          </p>
          <p>Just like Blinkpool, we used extensive analytics tools to monitor how changes we made affected user behaviour.</p>
        </div>

        <h2>
          Blinkpredict <span>React, Meteor, Node</span>
        </h2>
        <span className="date">2016 - 2018</span>
        <Image src={predictDesktop} alt="" />
        <div className="description">
          <p>
            <strong>Blinkpredict</strong> was a free to play responsive web app that was a precursor to Blinkpool. I was responsible for the
            prototyping, design and front end development.
          </p>
          <p>
            We used this site to test out potential features for our real-money product, Blinkpool. The site had a few thousand users that
            gave us timely and useful feedback. We also used Mixpanel and Google Analytics which allowed us to make quick decisions and
            iterate through our ideas.
          </p>
        </div>
        <Image src={predictMobile} alt="" />
        <p>Small screen version of the Blinkpredict site.</p>

        <h2>
          Get Fit with Davina <span>Ruby on Rails</span>
        </h2>
        <span className="date">2015 - 2016</span>
        <Image src={gfwd} alt="" />
        <p>
          <strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved
          with the wireframing, design and front end development.
        </p>

        <h2>
          Fianium <span>Grunt, CircleCI</span>
        </h2>
        <span className="date">2014 - 2016</span>
        <a href="http://www.fianium.com" target="_blank" rel="noreferrer">
          <Image src={fianium} alt="" />
        </a>
        <p>
          Website for{' '}
          <a href="http://www.fianium.com" rel="noreferrer" target="_blank">
            Fianium
          </a>
          , a laser manufacturer (now NKT Photonics). I designed and implemented it along with setting up a simple automated deployment
          process using CircleCI.
        </p>
      </article>
    </>
  );
};

export default Web;
