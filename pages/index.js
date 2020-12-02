import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'

import Fonts from '../components/fonts'

class Home extends React.Component {
  // componentDidMount() {
  //   Fonts()
  // }

  render() {
    return (
      <React.Fragment>
        <Head title="Boris Grudinin" />
        <Nav />

        <header>
          <h1>Boris Grudinin</h1>
        </header>

        <article>
          <p className="intro">I am a highly skilled web designer with over a decade of experience. In this time, I have been able to work on a wide variety of different projects which have helped me to broaden my skill set. I am just as comfortable in Photoshop as in a text editor. I always look to challenge myself and to stay up to date with the latest trends and technologies in order to integrate them into my solutions.</p>

          <section className="role">
            <h2>Lead UI Designer / Developer (Contract) <span><a href="www.getfitwithdavina.com" target="_blank" rel="nofollow">www.getfitwithdavina.com</a>, (London, UK)</span></h2>
            <span className="role-date">Sep 15 - Feb 16</span>
            <p>This contract role was for a startup developing a celebrity fitness and nutrition website. I was responsible for the design and front end build. The site was built using Ruby on Rails with HAML as the templating language, SASS and jQuery to enhance the user experience.</p>
          </section>
          <section className="role">
            <h2>Corporate Image Developer <span>(Fianium Ltd, Southampton, UK)</span></h2>
            <span className="role-date">Jan 03 - Jul 16</span>
            <p>Fianium are a long standing freelance client. I look after their corporate image which involves the design and maintenance of their website, tradeshow displays, posters, datasheets and product photography. My latest project was a responsive redesign of their website using Grunt to automate the build process and CircleCI to automatically deploy to either the staging or the live environment.</p>
          </section>
          <section className="role">
            <h2>Senior Front End Developer <span>(Paymentsense Ltd, London, UK)</span></h2>
            <span className="role-date">Jun 14 - Aug 15</span>
            <p>This role allowed me to work on the user experience, information architecture, wireframes, design and front end build of a complex, web based CRM, sales and telephony system. Due to the nature of the project, I was able to work with the latest front end technologies like HTML5, CSS3 and AngularJS. The company follow agile practices and I split my work between two separate teams of developers and ensured the UI is consistent throughout.</p>
          </section>
          <section className="role">
            <h2>Senior UX Developer <span>(Volume Ltd, Wokingham, UK)</span></h2>
            <span className="role-date">Dec 09 - Jun 14</span>
            <p>My remit covered the full lifecycle of a project from initial wireframes and information architecture through to visual design, implementation and testing of websites, web apps and mobile apps. I was able to work on projects for BP Castrol, Dell, GoDaddy, Oracle and Zebra Technologies, along with several charities and local good causes.</p>
          </section>
          <section className="role">
            <h2>Web Designer <span>(Dunwoody Marketing Communications Ltd, Newbury, UK)</span></h2>
            <span className="role-date">Apr 08 - Nov 09</span>
            {/* <p>This role involved the design and front end development of a large number of varied websites. I had to manage my own schedule in order to meet deadlines while working on projects for Barratt Homes, Zurich and David Wilson Homes.</p> */}
	        </section>
          <section className="role">
            <h2>Web Designer <span>(Connexion Ltd, Reading, UK)</span></h2>
            <span className="role-date">Apr 07 - Mar 08</span>
            {/* <p>During my time with Connexion, I worked on the front end of several websites for local businesses.</p> */}
	        </section>

          <h2>Skills</h2>
          <p>Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Microsoft Visual Studio, Eclipse IDE, HTML (HTML5), CSS (CSS3, SASS, Less), JavaScript (jQuery, AngularJS, ReactJS, Grunt), Templating (HAML, Mustache), Version Control (Git and TFS), Android Phone UI Development, iOS Phone UI Development.</p>
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
}

export default Home
