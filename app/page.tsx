import { Metadata, NextPage } from 'next';
import { format } from 'date-fns';

import PageHome from '@/src/components/PageHome';

import { Role } from '@/src/types/role';

const roles: Role[] = [
  {
    title: 'Senior React Developer',
    location: 'OMM, London, UK',
    dates: 'Sep 2021 - Dec 2024',
    description: [
      'I was part of a small dev team within a digital agency that worked on a number of projects which included video based and AR microsites for Nike, JBL, Tommy Hilfiger, Puma and Crocs through to a series of web apps for a large scale interactive rugby museum in Ireland.',
      'I used React, Typescript, Framer Motion, Next.js, Storybook and Electron as well as a whole host of other libraries. Our team carried out regular code reviews of each other`s work to maintain coding standards and to minimise bugs. We also used kanban boards to keep on top of tasks to help project managers and other stakeholders see what was being worked on.'
    ]
  },
  {
    title: 'UI Designer / Developer',
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
    title: 'UI Designer / Developer',
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
  { title: 'UX Developer, Senior UX Developer', location: 'Volume Ltd, Wokingham, UK', dates: 'Dec 2009 - Jun 2014' },
  { title: 'Web Designer', location: 'Dunwoody Marketing Communications Ltd, Newbury, UK', dates: 'Apr 2008 - Nov 2009' },
  { title: 'Web Designer', location: 'Connexion Ltd, Reading, UK', dates: 'Apr 2007 - Mar 2008' }
];

const getLastUpdated = async () => format(new Date(), "p 'on' PP");

const Home: NextPage = async () => {
  const lastUpdated = await getLastUpdated();

  return <PageHome roles={roles} lastUpdated={lastUpdated} />;
};

export default Home;
