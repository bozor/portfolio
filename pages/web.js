import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import Head from '../components/head'
import Nav from '../components/nav'

function Web() {
  const router = useRouter()
  
  return (
    <>
      <Head title="Boris Grudinin - Web" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header">
        <h1>Web</h1>
      </header>
      <article className="page-content">
        <h2>Blinkpool <span>React, Meteor, Node</span></h2>
        <span className="date">2017 - 2019</span>
        <Image src="../images/web/bp-desktop.jpg" alt='' width={0} height={0} />
        <div className="description">
          <p><strong>Blinkpool</strong> was a UK regulated esports gambling website which evolved over a period of 3 years. I was responsible for the prototyping, design and front end development.</p>
          <p>The site went through numerous iterations and we followed a data led decision making approach when it came to evolving the site. Each iteration was carefully analysed with the help of Google Analytics, Hotjar, Mixpanel and user interviews where possible, to see how the changes we made affected user behaviour.</p>
        </div>
        <Image src="../images/web/bp-mobile.jpg" alt='' width={0} height={0} />
        <p>Small screen version of the Blinkpool site.</p>

        <h2>Gem Titans <span>React, Meteor, Node</span></h2>
        <span className="date">2019</span>
        <Image src="../images/web/gem-titans.jpg" alt='' width={0} height={0} />
        <div className="description">
          <p><strong>Gem Titans</strong> was a free to play responsive web app. I was responsible for the prototyping, design and front end development.</p>
          <p>The web app was a stock market style game which allowed users to buy and sell shares (gems) that coincided with an answer to a particular question about a game that was shown on the twitch stream. Users could build up tokens that they could then exchange for prizes like game skins or Steam vouchers.</p>
          <p>Just like Blinkpool, we used extensive analytics tools to monitor how changes we made affected user behaviour.</p>
        </div>

        <h2>Blinkpredict <span>React, Meteor, Node</span></h2>
        <span className="date">2016 - 2018</span>
        <Image src="../images/web/predict-desktop.jpg" alt='' width={0} height={0} />
        <div className="description">
          <p><strong>Blinkpredict</strong> was a free to play responsive web app that was a precursor to Blinkpool. I was responsible for the prototyping, design and front end development.</p>
          <p>We used this site to test out potential features for our real-money product, Blinkpool. The site had a few thousand users that gave us timely and useful feedback. We also used Mixpanel and Google Analytics which allowed us to make quick decisions and iterate through our ideas.</p>
        </div>
        <Image src="../images/web/predict-mobile.jpg" alt='' width={0} height={0} />
        <p>Small screen version of the Blinkpredict site.</p>

        <h2>Get Fit with Davina <span>Rails</span></h2>
        <span className="date">2015 - 2016</span>
        <Image src="../images/web/gfwd.jpg" alt='' width={0} height={0} />
        <p><strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved with the wireframing, design and front end development.</p>

        <h2>Fianium <span>Grunt, CircleCI</span></h2>
        <span className="date">2014 - 2016</span>
        <a href="http://www.fianium.com" target="_blank" rel="noreferrer"><Image src="../images/web/fianium.jpg" alt='' width={0} height={0} /></a>
        <p>Website for <a href="http://www.fianium.com" rel="noreferrer" target="_blank">Fianium</a>, a laser manufacturer (now NKT Photonics). I designed and implemented it along with setting up a simple automated deployment process using CircleCI.</p>
      </article>
    </>
  )
}

export default Web
