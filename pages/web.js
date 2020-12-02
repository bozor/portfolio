import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Fonts from '../components/fonts'

class Web extends React.Component {
  // componentDidMount() {
  //   Fonts()
  // }

  render() {
    return (
      <React.Fragment>
        <Head title="Boris Grudinin" />
        <Nav />

        <header>
          <h1>Web</h1>
        </header>
        <article>
          <h2>Get Fit with Davina <span>(2015 - 2016)</span></h2>
          <a href="http://www.getfitwithdavina.com" rel="nofollow" target="_blank"><img src="static/images/web/gfwd.jpg" /></a>
          <p><a href="http://www.getfitwithdavina.com" rel="nofollow" target="_blank">getfitwithdavina.com</a> is a website designed to help people learn about nutrition and get in shape. I was involved with the wireframing, design and front end development.</p>
          <h2>Fianium <span>(2016)</span></h2>
          <a href="http://www.fianium.com" rel="nofollow" target="_blank"><img src="static/images/web/fianium.jpg" /></a>
          <p>Website for <a href="http://www.fianium.com" rel="nofollow" target="_blank">Fianium</a>, a laser manufacturer. I was responsible for the design and implemention.</p>
          <h2>General Websites <span>(2007 - Current)</span></h2>
          <a href="http://www.oracle-downloads.com/oraclecloud/index.html" target="_blank"><img src="static/images/web/oracle-cloud.jpg" /></a>
          <p>A <a href="http://www.oracle-downloads.com/oraclecloud/index.html" target="_blank">dynamic infographic</a> built as part of a bigger marketing campaign for Oracle. It uses a custom made javascript library to provide a parallax scrolling effect. I was involved in creating the parallax library and front end development.</p>
          <img src="static/images/web/tbm.jpg" />
          <p>Website for a charity football tournament, The Big Match. I was responsible for the wireframing, design and front end development.</p>
          <img src="static/images/web/virtual-zebra.jpg" />
          <p>A website designed to showcase Zebra Technologies' range of handheld printers, <a href="http://www.virtualzebra.com" target="_blank">www.virtualzebra.com</a>. It is made up of two elements - the homepage and the individual worlds. This was originally implemented in flash and I was part of a team that used HTML5/javascript to make it mobile/tablet compatible. I was responsible for the front-end development both the homepage and the individual worlds along with working on part of the javascript engine.</p>
          <a href="http://www.nexusmods.com" target="_blank"><img src="static/images/web/nexus.jpg" /></a>
          <p>Website template for <a href="http://www.nexusmods.com" target="_blank">www.nexusmods.com</a> a major online computer gaming community. I wireframed, designed and implemented the initial templates that were then used throughout the Nexus network of websites.</p>
          <img src="static/images/web/cfw.jpg" />
          <p>Website for a DJ. I was responsible for the design and implemention.</p>
          {/* <!-- <img src="static/images/web/integrow.jpg" />
          <p>Website to to promote a horticultural producers organisation, <a href="http://www.integrow.co.uk" target="_blank">Integrow</a>. I was responsible for the wireframing, design and implementation.</p>
          <img src="static/images/web/marchwood.jpg" />
          <p>A local conservatory company, <a href="http://www.marchwood.com" target="_blank">Marchwood</a>. I was responsible for the wireframing, design and implementation.</p>
          <img src="static/images/web/greenfields.jpg" />
          <p>Website for an eco-friendly housing development in Hampshire</p>
          <img src="static/images/web/evolve.jpg" />
          <p>CRM system for a small marketing agency</p> --> */}
</article>

        {/* <article>
          <h2>Pitch work <span>(2007 - 2010)</span></h2>
          <img src="static/images/web/p4u.jpg" />
          <img src="static/images/web/rcuk.jpg" />
          <img src="static/images/web/westons.jpg" />
          <!-- <img src="static/images/web/stage.jpg" />
          <img src="static/images/web/imserv.jpg" /> -->
        </article> */}
      </React.Fragment>
    )
  }
}

export default Web
