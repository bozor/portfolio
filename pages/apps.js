import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/head'
import Nav from '../components/nav'

function Apps() {
  const router = useRouter()

  return (
    <React.Fragment>
      <Head title="Boris Grudinin - Apps" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header">
        <h1>Apps</h1>
      </header>
      <article className="page-content">
        <h2>Android Apps (React Native)</h2>
        <span className="date">2012 - Current</span>
        <img src="../images/apps/gg-arcade.jpg" />
        <img src="../images/apps/gg-arcade2.jpg" />
        <p>GG Arcade was a free to play app with over 10k active users. Users could win token and exchange them for prizes which included game skins and gift vouchers for online stores like amazon. I was responsible for the design along with the front end implementation.</p>
        {/* <img src="../images/apps/pmb.jpg" />
        <p>Clothes sharing app. I was repsonsible for the wireframing, design and most of the front end implementation.</p> */}
      </article>
    </React.Fragment>
  )
}

export default Apps
