import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/head'
import Nav from '../components/nav'

function Web() {
  const router = useRouter()
  
  return (
    <React.Fragment>
      <Head title="Boris Grudinin" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header">
        <h1>Web</h1>
      </header>
      <article className="page-content">
        <h2>Get Fit with Davina</h2>
        <span className="date">2015 - 2016</span>
        <img src="static/images/web/gfwd.jpg" />
        <p><strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved with the wireframing, design and front end development.</p>
        <h2>Fianium</h2>
        <span className="date">2014 - 2016</span>
        <a href="http://www.fianium.com" rel="nofollow" target="_blank"><img src="static/images/web/fianium.jpg" /></a>
        <p>Website for <a href="http://www.fianium.com" rel="nofollow" target="_blank">Fianium</a>, a laser manufacturer (now NKT Photonics). I was responsible for the design and implemention.</p>
      </article>
    </React.Fragment>
  )
}

export default Web
