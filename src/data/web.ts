import { Project } from "../types/project"

export const projectsWeb: Project[] = [
  {
    title: 'OMM Agency Website',
    date: '2024',
    technologies: 'React, Typescript, Storybook Framer Motion, Next.js, Three.js, GraphQL',
    url: 'https://weareomm.com/',
    imgSrcs: ['/work/images/web/omm.jpg'],
    description: [
        'A major overhaul of the <a href="https://weareomm.com/" target="_blank" rel="noreferrer">OMM</a> agency website.'
      ,
        'I worked alongside a lead developer and a number of designers during this project. <a href="https://storybook.js.org/" target="_blank" rel="noreferrer">Storybook</a> was invaluable during this project. It allowed us to implement each component and all of their states in isolation and it helped designers to check that brand guidelines were being adhered to.'
      
    ]
  },
  {
    title: 'JBL Challenge',
    technologies: 'React, Typescript, Framer Motion, PlayCanvas, Next.js, Electron',
    date: '2024',
    imgSrcs: ['/work/images/web/jbl.jpg'],
    description: [
      '<strong>JBL Challenge</strong> is a campaign to promote one of JBL`s portable speakers. It is made up of a microsite, an endless runner style web game and a series of arcade style cabinets running the web game in various electronics stores around Germany.'
      ,
      'The game was made using <a href="https://playcanvas.com/" target="_blank" rel="noreferrer">PlayCanvas</a>by one of the agency`s lead developers, while I was responsible for the microsite and the game UI.'
    ]
  },
  {
    title: 'Nike Running Shoe Finder 2.0',
    technologies: 'React, Typescript, Framer Motion, Next.js, Three.js, GraphQL',
    date: '2024',
    imgSrcs: ['/work/images/web/nike-running-shoe-finder2.jpg'],
    description: [
      '<strong>Nike Running Shoe Finder 2.0</strong> is a responsive website that is linked to from the running section of nike.com and the Nike mobile app.'
      ,
      'Working with a lead developer, I tackled most of the UI while they implemented the shoe visualisation in Three.js.'
    ]
  },
  {
    title: 'Nike New Age of Sport',
    technologies: 'React, Typescript, Next.js, Three.js, 8th Wall',
    date: '2023',
    imgSrcs: ['/work/images/web/nike-lil-penny.jpg'],
    description: [
      '<strong>Nike New Age of Sport</strong> was a promotional AR microsite for a relaunch of one of Nike`s famous basketball shoes.'
      ,
      'The AR component was created by another developer using 8th Wall while I helped with the UI elements and testing.'
    ]
  },
  {
    title: 'PUMA Basketball Interactive Table',
    technologies: 'React, Typescript, Framer Motion, Next.js, Three.js, GraphQL',
    date: '2023',
    imgSrcs: ['/work/images/web/puma-table.jpg'],
    description: [
      '<strong>PUMA Basketball Interactive Table</strong> is a large 86&ldquo; touchscreen that was installed in PUMA corporate Headquarters, Herzogenaurach, Germany.'
      ,
      'It allows users to explore PUMA`s upcoming basketball shoe collection by placing rfid embedded sample shoes onto a sensor. The user is then able to use the large touchscreen display to play around with the shoe in 3D and get more information about it.'
    ]
  },
  {
    title: 'Nike Bra & Legging Finder',
    technologies: 'React, Typescript, Framer Motion, Next.js, Electron, Mixpanel',
    date: '2023-2024',
    imgSrcs: ['/work/images/web/nike-bra-legging.jpg'],
    description: [
      '<strong>Nike Bra &amp; Legging Finder</strong> is a physical installation in Nike Town London that uses electron to run an react web app. It asks users a series of questions and suggests possible matching Nike products which can then be purchased in store.'
    ]
  },
  {
    title: 'International Rugby Experience',
    technologies: 'React, Typescript, Storybook, Framer Motion, Electron',
    date: '2021-2023',
    url: 'https://www.internationalrugbyexperience.com/',
    imgSrcs: ['/work/images/web/ire.jpg'],
    description: [
      '<a href="https://www.internationalrugbyexperience.com/" target="_blank" rel="noreferrer">International Rugby Experience</a> is a multi storey, interactive rugby museum in Limerick, Ireland. Working as part of a 7 person development team, I was responsible for a lot of the frontend as well as some image generation on the backend for personalised emails.'
      ,
      'I worked on 12 different touch screen electron apps along with an npm package of common components which helped maintain UI consistency throughout.'
    ]
  },
  {
    title: 'Nike Running Shoe Finder',
    technologies: 'React, Typescript, Framer Motion, Next.js, Electron',
    date: '2023',
    imgSrcs: ['/work/images/web/nike-running-shoe-finder.jpg'],
    description: [
      '<strong>Nike Running Shoe Finder</strong> is a physical installation in Nike Town London. It takes centre stage in the running area of the store.'
      ,
      'I worked on one of the phases of the project which involved stripping out the old <a href="https://chakra-ui.com/" target="_blank" rel="noreferrer">chakra ui</a> in favour of more ubiquitous css modules along with general code refactoring.'
    ]
  },
  {
    title: 'Blinkpool',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2017-2019',
    imgSrcs: ['/work/images/web/bp-desktop.jpg'],
    extras: {
      imgSrc: '/work/images/web/bp-mobile.jpg',
      caption: 'Small screen version of the Blinkpool site.'
    },
    description: [
      '<strong>Blinkpool</strong> was a UK regulated esports gambling website which evolved over a period of 3 years. I was responsible for the prototyping, design and front end development.'
      ,
      'The site went through numerous iterations and we followed a data led decision making approach when it came to evolving the site. Each iteration was carefully analysed with the help of Google Analytics, Hotjar, Mixpanel and user interviews where possible, to see how the changes we made affected user behaviour.'
    ]
  },
  {
    title: 'Gem Titans',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2019',
    imgSrcs: ['/work/images/web/gem-titans.jpg'],
    description: [
      '<strong>Gem Titans</strong> was a free to play responsive web app. I was responsible for the prototyping, design and frontend development.','The web app was a stock market style game which allowed users to buy and sell shares (gems) that coincided with an answer to a particular question about a game that was shown on the twitch stream. Users could build up tokens that they could then exchange for prizes like game skins or Steam vouchers.','Just like Blinkpool, we used extensive analytics tools to monitor how changes we made affected user behaviour.'
    ]
  },
  {
    title: 'Blinkpredict',
    technologies: 'React, Meteor, Node, Mixpanel, Google Analytics',
    date: '2016 - 2018',
    imgSrcs: ['/work/images/web/predict-desktop.jpg'],
    extras: {
      imgSrc: '/work/images/web/predict-mobile.jpg',
      caption: 'Small screen version of the Blinkpredict site.'
    },
    description: [
      '<strong>Blinkpredict</strong> was a free to play responsive web app that was a precursor to Blinkpool. I was responsible for the prototyping, design and frontend development.',
        'We used this site to test out potential features for our real-money product, Blinkpool. The site had a few thousand users that gave us timely and useful feedback. We also used Mixpanel and Google Analytics which allowed us to make quick decisions and iterate through our ideas.'
    ]
  },
  {
    title: 'Get Fit with Davina',
    technologies: 'Ruby on Rails, Less, Mixpanl',
    date: '2015 - 2016',
    imgSrcs: ['/work/images/web/gfwd.jpg'],
    description: [
      '<strong>getfitwithdavina.com</strong> was a website designed to help people learn about nutrition and get in shape. I was involved with the wireframing, design and frontend development.'
    ]
  },
  {
    title: 'Fianium',
    technologies: 'Grunt, CircleCI',
    date: '2014 - 2016',
    url: 'http://www.fianium.com',
    imgSrcs: ['/work/images/web/fianium.jpg'],
    description: [
      'Website for <a href="http://www.fianium.com" rel="noreferrer" target="_blank">Fianium</a>, a laser manufacturer (now NKT Photonics). I designed and implemented it along with setting up a simple automated deployment process using CircleCI.'
    ]
  }
];