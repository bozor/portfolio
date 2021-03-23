import React from 'react'

import Head from '../components/head'
import Nav from '../components/nav'

function Home() {
  return (
    <React.Fragment>
      <Head title="Boris Grudinin" />
      <Nav className={'page-about'} />

      <header className="page-header">
        <h1>Boris Grudinin</h1>
      </header>

      <article className="page-content">
        <p className="intro">I am a highly skilled web designer with over a decade of experience. In this time, I have been able to work on a wide variety of different projects which have helped me to broaden my skill set. I am just as comfortable in Photoshop as in a text editor. I always look to challenge myself and to stay up to date with the latest trends and technologies in order to integrate them into my solutions.</p>
        <section className="role">
          <h3>
            <strong>Lead UI Designer / Developer</strong>
            <span> (Douglas-White &amp; Gosai Ltd, London, UK)</span>
          </h3>
          <span className="role-date">Nov 16 - Jan 21</span>
          <p>I am responsible for the design, front end build and branding for various free to play and traditional betting products using React and React Native. The role allowed me to take ideas from initial concept, through to design and implementation while making sure we were adhering to front-end code best practices. I was also able to develop a brand for a popular esports betting website which included a large scale outdoor ad campaign in Birmingham for a major esport event.</p>
        </section>

        <section className="role">
          <h3>Lead UI Designer / Developer (Contract) <span> (getfitwithdavina.com, London, UK)</span></h3>
          <span className="role-date">Sep 15 - Feb 16</span>
          <p>This contract role was for a startup developing a celebrity fitness and nutrition website. I was responsible for the design and front end build. The site was built using Ruby on Rails with HAML as the templating language, SASS and jQuery to enhance the user experience.</p>
        </section>
        <section className="role">
          <h3>Corporate Image Developer <span>(Fianium Ltd, Southampton, UK)</span></h3>
          <span className="role-date">Jan 03 - Jul 16</span>
          <p>Fianium were a long standing freelance client until they merged with another company. I looked after their corporate image which involved the design and maintenance of their website, tradeshow displays, posters, datasheets and product photography.</p>
        </section>
        <section className="role">
          <h3>Senior Front End Developer <span>(Paymentsense Ltd, London, UK)</span></h3>
          <span className="role-date">Jun 14 - Aug 15</span>
          <p>This role allowed me to work on the user experience, information architecture, wireframes, design and front end build of a complex, web based CRM, sales and telephony system. The company followed agile practices and I split my work between two separate teams of developers and ensured the UI is consistent throughout.</p>
        </section>
        <section className="role">
          <h3>UX Developer, Senior UX Developer <span>(Volume Ltd, Wokingham, UK)</span></h3>
          <span className="role-date">Dec 09 - Jun 14</span>
          <p>My remit covered the full lifecycle of a project from initial wireframes and information architecture through to visual design, implementation and testing of websites, web apps and mobile apps. I was able to work on projects for BP Castrol, Dell, GoDaddy, Oracle and Zebra Technologies, along with several charities and local good causes.</p>
        </section>
        <section className="role">
          <h3>Web Designer <span>(Dunwoody Marketing Communications Ltd, Newbury, UK)</span></h3>
          <span className="role-date">Apr 08 - Nov 09</span>
          {/* <p>This role involved the design and front end development of a large number of varied websites. I had to manage my own schedule in order to meet deadlines while working on projects for Barratt Homes, Zurich and David Wilson Homes.</p> */}
        </section>
        <section className="role">
          <h3>Web Designer <span>(Connexion Ltd, Reading, UK)</span></h3>
          <span className="role-date">Apr 07 - Mar 08</span>
          {/* <p>During my time with Connexion, I worked on the front end of several websites for local businesses.</p> */}
        </section>

        <h2>Skills</h2>
        <p className="no-margin">Adobe CS (Illustrator, InDesign, XD, Photoshop), HTML (HTML5), CSS (SASS, Less), Javascript (React, React-Native, Typescript), Templating (HAML, Mustache, JSX), Git Version Control, Android Phone UI Development, iOS Phone UI Development.</p>
      </article>

      {/* <div className="hero">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <Link href="https://github.com/zeit/next.js#getting-started">
            <a className="card">
              <h3>Getting Started &rarr;</h3>
              <p>Learn more about Next on Github and in their examples</p>
            </a>
          </Link>
          <Link href="https://open.segment.com/create-next-app">
            <a className="card">
              <h3>Examples &rarr;</h3>
              <p>
                Find other example boilerplates on the{' '}
                <code>create-next-app</code> site
            </p>
            </a>
          </Link>
          <Link href="https://github.com/segmentio/create-next-app">
            <a className="card">
              <h3>Create Next App &rarr;</h3>
              <p>Was this tool helpful? Let us know how we can improve it</p>
            </a>
          </Link>
        </div>
      </div> */}
    </React.Fragment>
  )
}

export default Home
