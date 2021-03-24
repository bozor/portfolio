import React from 'react'
import { useRouter } from 'next/router'

import Head from '../components/head'
import Nav from '../components/nav'

function Apps() {
  const router = useRouter()

  return (
    <React.Fragment>
      <Head title="Boris Grudinin" />
      <Nav className={`page-${router.pathname.substring(1)}`} />

      <header className="page-header">
        <h1>Apps</h1>
      </header>
      <article className="page-content">
        <h2>Android Apps</h2>
        <span className="date">2012 - Current</span>
        <img src="static/images/apps/pmb.jpg" />
        <p>Clothes sharing app. I was repsonsible for the wireframing, design and most of the front end implementation.</p>
      </article>
    </React.Fragment>
  )
}

export default Apps
