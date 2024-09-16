import React from 'react'
import { Metadata, NextPage } from 'next'

import Header from '@components/Header'
import Image from '@components/Image'

import ggArcade1 from '@images/apps/gg-arcade.jpg'
import ggArcade2 from '@images/apps/gg-arcade2.jpg'
import ggArcade3 from '@images/apps/gg-arcade3.jpg'

import pp1 from '@images/apps/pp.jpg'
import pp2 from '@images/apps/pp2.jpg'

export const metadata: Metadata = {
  title: "Apps",
}

const Apps: NextPage = () => {
  return (
    <>
      <Header text="Apps" />

      <article className="page-content">
        <h2>GG Arcade <span>React Native, Azure Playfab</span></h2>
        <span className="date">2020</span>
        <Image src={ggArcade1} alt='' />
        <Image src={ggArcade2} alt='' />
        <Image src={ggArcade3} alt='' />
        <p><strong>GG Arcade</strong> was a free to play social casino Android app with over 10k active users. Users could win tokens and exchange them for prizes which included game skins and gift vouchers for online stores like Amazon. I was responsible for the design along with the front end implementation.</p>
        <h2>PocketPredictor <span>React Native</span></h2>
        <span className="date">2019 - 2020</span>
        <Image src={pp1} alt='' />
        <Image src={pp2} alt='' />
        <p><strong>PocketPredictor</strong> was a free to play prediction Android app. Users could win tokens by correctly answering questions about future esports matches and exchange them for game skins. I was responsible for the initial prototype, design and the front end implementation.</p>
      </article>
    </>
  )
}

export default Apps
