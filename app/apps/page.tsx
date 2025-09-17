import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Projects from '@components/Projects';

import { TProject } from '@/src/types/project';

import ggArcade1 from 'public/images/apps/gg-arcade.jpg';
import ggArcade2 from 'public/images/apps/gg-arcade2.jpg';
import ggArcade3 from 'public/images/apps/gg-arcade3.jpg';

import pp1 from 'public/images/apps/pp.jpg';
import pp2 from 'public/images/apps/pp2.jpg';

export const metadata: Metadata = { title: 'Apps' };

const projects: TProject[] = [
  {
    title: 'GG Arcade',
    technologies: 'React Native, Azure Playfab',
    date: '2020',
    imgSrcs: [ggArcade1, ggArcade2, ggArcade3],
    description: [
      <p>
        <strong>GG Arcade</strong> was a free to play social casino Android app with over 10k active users. Users could win tokens and
        exchange them for prizes which included game skins and gift vouchers for online stores like Amazon. I was responsible for the design
        along with the front end implementation.
      </p>
    ]
  },
  {
    title: 'PocketPredictor',
    technologies: 'React Native',
    date: '2019 - 2020',
    imgSrcs: [pp1, pp2],
    description: [
      <p>
        <strong>PocketPredictor</strong> was a free to play prediction Android app. Users could win tokens by correctly answering questions
        about future esports matches and exchange them for game skins. I was responsible for the initial prototype, design and the front end
        implementation.
      </p>
    ]
  }
];

const Apps: NextPage = () => {
  return (
    <>
      <Header text="Apps" />

      <article className="page-content">
        <Projects projects={projects} />
      </article>
    </>
  );
};

export default Apps;
