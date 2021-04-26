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
        <h2>GG Arcade <span>React Native, Azure Playfab</span></h2>
        <span className="date">2020</span>
        <img src="../images/apps/gg-arcade.jpg" />
        <img src="../images/apps/gg-arcade2.jpg" />
        <img src="../images/apps/gg-arcade3.jpg" />
        <p><strong>GG Arcade</strong> was a free to play social casino Android app with over 10k active users. Users could win tokens and exchange them for prizes which included game skins and gift vouchers for online stores like Amazon. I was responsible for the design along with the front end implementation.</p>
        <h2>PocketPredictor <span>React Native</span></h2>
        <span className="date">2019 - 2020</span>
        <img src="../images/apps/pp.jpg" />
        <img src="../images/apps/pp2.jpg" />
        <p><strong>PocketPredictor</strong> was a free to play prediction Android app. Users could win tokens by correctly answering questions about future esports matches and exchange them for game skins. I was responsible for the initial prototype, design and the front end implementation.</p>
      </article>
    </React.Fragment>
  )
}

export default Apps
