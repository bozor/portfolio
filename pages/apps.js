import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Fonts from '../components/fonts'

class Apps extends React.Component {
  // componentDidMount() {
  //   Fonts()
  // }

  render() {
    return (
      <React.Fragment>
        <Head title="Boris Grudinin" />
        <Nav />

        <header>
          <h1>Mobile Apps</h1>
        </header>
        <article>
          <h2>Android Apps <span>(2012 - Current)</span></h2>
          <img src="static/images/apps/pmb.jpg" />
          <p>Clothes sharing app. I was repsonsible for the wireframing, design and most of the front end implementation.</p>
        </article>

        <article>
          <h2>iOS Apps <span>(2012 - Current)</span></h2>
          <img src="static/images/apps/fs.jpg" />
          <p>Reskin of existing clothes sharing app. I was repsonsible for the re-design and some of the front end implementation.</p>
        </article>
      </React.Fragment>
    )
  }
}

export default Apps
