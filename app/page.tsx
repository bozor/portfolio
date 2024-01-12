import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import { format } from 'date-fns';

import Header from '@components/Header';

import githubLogo from '@images/github.svg';
import Role from '@/src/components/Role';

const roles = [
  {
    title: 'Senior React Developer',
    location: 'OMM, London, UK',
    dates: 'Sep 2021 - Current',
    description: [
      'I developed a number of projects which ranged from video based and AR microsites for Nike through to an NPM component library which I then used in a series of web apps for a large scale interactive rugby installation in Ireland.',
      'I used React, Typescript, Framer Motion, Storybook and Electron as well as a whole host of other libraries. Our team used kanban boards to keep on top of tasks to help project managers and other stakeholders see what was being worked on.'
    ]
  },
  {
    title: 'Lead UI Designer / Developer',
    location: 'Blinkbox Labs, London, UK',
    dates: 'Sep 2016 - Jan 2021',
    description: [
      'In this role, I was responsible for the design, front end build and branding for various free to play and traditional betting products using React and React Native. I was able to take ideas from initial concept, through to design and implementation while making sure we were adhering to front-end code best practices.',
      'Alongside design and development, I created a brand for a popular UK esports betting website which included a large scale outdoor ad campaign in Birmingham for a major esport event.'
    ]
  },
  {
    title: 'Corporate Image Developer',
    location: 'Fianium Ltd, Southampton, UK',
    dates: 'Jan 2003 - Jul 2016',
    description: [
      'Fianium were a long standing freelance client until they merged with another company. I looked after their corporate image which involved the design and maintenance of their website, tradeshow displays, posters, datasheets and product photography.'
    ]
  },
  {
    title: 'Lead UI Designer / Developer',
    location: 'getfitwithdavina.com, London, UK',
    dates: 'Sep 2015 - Feb 2016',
    description: [
      'This contract role was for a startup developing a celebrity fitness and nutrition website. I was responsible for the design and front end build. The site was built using Ruby on Rails with HAML as the templating language, SASS and jQuery to enhance the user experience.'
    ]
  },
  {
    title: 'Senior Front End Developer',
    location: 'Paymentsense Ltd, London, UK',
    dates: 'Jun 2014 - Aug 2015',
    description: [
      'This role allowed me to work on the user experience, information architecture, wireframes, design and front end build of a complex, web based CRM, sales and telephony system. The company followed agile practices and I split my work between two separate teams of developers and ensured the UI was consistent throughout.'
    ]
  },
  {
    title: 'UX Developer, Senior UX Developer',
    location: 'Volume Ltd, Wokingham, UK',
    dates: 'Dec 2009 - Jun 2014',
    description: [
      'My remit covered the full lifecycle of a project from initial wireframes and information architecture through to visual design, implementation and testing of websites, web apps and mobile apps. I was able to work on projects for BP Castrol, Dell, GoDaddy, Oracle and Zebra Technologies, along with several charities and local good causes.'
    ]
  },
  {
    title: 'Web Designer',
    location: 'Dunwoody Marketing Communications Ltd, Newbury, UK',
    dates: 'Apr 2008 - Nov 2009'
  },
  {
    title: 'Web Designer',
    location: 'Connexion Ltd, Reading, UK',
    dates: 'Apr 2007 - Mar 2008'
  }
]

const getLastUpdated = async () => format(new Date(), "p 'on' PP");

const Home: NextPage = async () => {
  const lastUpdated = await getLastUpdated();

  const renderRoles = () => {
    return roles.map((role, index) => {
      return (
        <Role
          key={index}
          title={role.title} 
          location={role.location} 
          dates={role.dates} 
          description={role.description || null}
        />
      )
    })
  }
  
  return (
    <>
      <Header text="Boris Grudinin" subtitle="A highly skilled digital interaction specialist with two decades of experience" />

      <article className="page-content">
        <p className="intro">I have been able to work on a wide array of different projects in varied environments which have helped me to broaden my skill set. I am just as comfortable prototyping ideas in Adobe XD as I am turning them into web and mobile apps in Visual Studio Code. I always look to challenge myself and to stay up to date with the latest trends and technologies in order to integrate them into my solutions.</p>
        
        <h2>Experience</h2>

        { renderRoles() }

        <section className="skills">
          <h2>Skills</h2>
          <p>Javascript (React, React-Native, Framer Motion, Typescript, Storybook), HTML (HTML5), CSS (SASS, Less, CSS Modules), Adobe CC (Illustrator, InDesign, XD, Photoshop), Figma, Git Version Control, Android UI Development.</p>
        </section>

        <section className="credits">
          <p className="small">🖥️ Built using Next.js and SASS. Automatically deployed at {lastUpdated} using <Image src={githubLogo} alt="github" width={12} height={12} /> actions.</p>
        </section>
      </article>
    </>
  )
}

export default Home
