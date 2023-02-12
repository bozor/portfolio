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
        <p className="intro">I am a highly skilled digital interaction specialist with over a decade of experience. In this time, I have been able to work on a wide variety of different projects in varied environments which have helped me to broaden my skill set. I am just as comfortable prototyping ideas in Adobe XD as I am turning them into web and mobile apps in Visual Studio Code. I always look to challenge myself and to stay up to date with the latest trends and technologies in order to integrate them into my solutions.</p>
        
        <h2>Experience</h2>
        <section className="role">
          <h3>
            <strong>Senior React Developer</strong>
            <span>(OMM, London, UK)</span>
          </h3>
          <span className="date">Sep 2021 - Current</span>
          <p>I developed a number of projects which ranged from video based and AR microsites for Nike through to an NPM component library which I then used in a series of web apps for a large scale interactive rugby installation. I used React, Typescript, SASS, Framer Motion and Zustand as well as a whole host of other libraries in my solutions. Our team used kanban boards to keep on top of tasks and help project managers see what was being worked on..</p>
        </section>

        <section className="role">
          <h3>
            <strong>Lead UI Designer / Developer</strong>
            <span>(Blinkbox Labs, London, UK)</span>
          </h3>
          <span className="date">Sep 2016 - Jan 2021</span>
          <p>In this role, I was responsible for the design, front end build and branding for various free to play and traditional betting products using React and React Native. I was able to take ideas from initial concept, through to design and implementation while making sure we were adhering to front-end code best practices. Alongside design and development, I created a brand for a popular UK esports betting website which included a large scale outdoor ad campaign in Birmingham for a major esport event.</p>
        </section>

        <section className="role">
          <h3>
            <strong>Corporate Image Developer</strong>
            <span>(Fianium Ltd, Southampton, UK)</span>
          </h3>
          <span className="date">Jan 2003 - Jul 2016</span>
          <p>Fianium were a long standing freelance client until they merged with another company. I looked after their corporate image which involved the design and maintenance of their website, tradeshow displays, posters, datasheets and product photography.</p>
        </section>

        <section className="role">
          <h3>
            <strong>Lead UI Designer / Developer</strong>
            <span>(getfitwithdavina.com, London, UK)</span>
          </h3>
          <span className="date">Sep 2015 - Feb 2016</span>
          <p>This contract role was for a startup developing a celebrity fitness and nutrition website. I was responsible for the design and front end build. The site was built using Ruby on Rails with HAML as the templating language, SASS and jQuery to enhance the user experience.</p>
        </section>

        <section className="role">
          <h3>
            <strong>Senior Front End Developer</strong>
            <span>(Paymentsense Ltd, London, UK)</span>
          </h3>
          <span className="date">Jun 2014 - Aug 2015</span>
          <p>This role allowed me to work on the user experience, information architecture, wireframes, design and front end build of a complex, web based CRM, sales and telephony system. The company followed agile practices and I split my work between two separate teams of developers and ensured the UI was consistent throughout.</p>
        </section>

        <section className="role">
          <h3>
            <strong>UX Developer, Senior UX Developer</strong>
            <span>(Volume Ltd, Wokingham, UK)</span>
          </h3>
          <span className="date">Dec 2009 - Jun 2014</span>
          <p>My remit covered the full lifecycle of a project from initial wireframes and information architecture through to visual design, implementation and testing of websites, web apps and mobile apps. I was able to work on projects for BP Castrol, Dell, GoDaddy, Oracle and Zebra Technologies, along with several charities and local good causes.</p>
        </section>

        <section className="role">
          <h3>
            <strong>Web Designer</strong>
            <span>(Dunwoody Marketing Communications Ltd, Newbury, UK)</span>
          </h3>
          <span className="date">Apr 2008 - Nov 2009</span>
        </section>

        <section className="role">
          <h3>
            <strong>Web Designer</strong>
            <span>(Connexion Ltd, Reading, UK)</span>
          </h3>
          <span className="date">Apr 2007 - Mar 2008</span>
        </section>

        <h2>Skills</h2>
        <p>Adobe CS (Illustrator, InDesign, XD, Photoshop), HTML (HTML5), CSS (SASS, Less), Javascript (React, React-Native, Typescript), Templating (HAML, Mustache, JSX), Git Version Control, Android Phone UI Development, iOS Phone UI Development.</p>
      </article>
    </React.Fragment>
  )
}

export default Home
