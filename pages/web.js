import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/head'
import Nav from '../components/nav'

function Web() {
  const router = useRouter()
  
  return (
    <React.Fragment>
      <Head title="Boris Grudinin - Web" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header">
        <h1>Web</h1>
      </header>
      <article className="page-content">
        <h2>Blinkpool <span>React, Meteor, Node</span></h2>
        <span className="date">2016 - 2019</span>
        <img src="../images/web/bp-desktop.jpg" />
        <div className="description">
          <p><strong>Blinkpool</strong> was a UK regulated esports gambling website which evolved over a period of 3 years. I was responsible for the prototyping, design and front end development.</p>
          <p>The site went through numerous iterations, with each one being carefully analysed with the help of Google Analytics, Hotjar and Mixpanel to see how the changes we made affected user behaviour.</p>
        </div>
        <img src="../images/web/bp-mobile.jpg" />
        <p>Small screen version of the Blinkpool site.</p>

        <h2>Gem Titans <span>React, Meteor, Node</span></h2>
        <span className="date">2019</span>
        <img src="../images/web/gem-titans.jpg" />
        <div className="description">
          <p><strong>Gem Titans</strong> was a free to play responsive web app. I was responsible for the prototyping, design and front end development.</p>
          <p>The web app was a stock market style game which allowed users to buy and sell 'shares' (gems) that coincided with an answer to a particular question about a game that was shown on the twitch stream. Users could build up tokens that they could then exchange for prizes like game skins or Steam vouchers.</p>
        </div>

        <h2>Get Fit with Davina <span>Rails</span></h2>
        <span className="date">2015 - 2016</span>
        <img src="../images/web/gfwd.jpg" />
        <p><strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved with the wireframing, design and front end development.</p>

        <h2>Fianium <span>Grunt, CircleCI</span></h2>
        <span className="date">2014 - 2016</span>
        <a href="http://www.fianium.com" rel="nofollow" target="_blank"><img src="../images/web/fianium.jpg" /></a>
        <p>Website for <a href="http://www.fianium.com" rel="nofollow" target="_blank">Fianium</a>, a laser manufacturer (now NKT Photonics). I designed and implemented it along with setting up a simple automated deployment process using CircleCI.</p>
      </article>
    </React.Fragment>
  )
}

export default Web
