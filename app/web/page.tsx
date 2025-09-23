import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Projects from '@components/Projects';

import { projectsWeb } from '@/src/data/web';

export const metadata: Metadata = { title: 'Web' };

const Web: NextPage = () => {
  return (
    <>
      <Header text="Web" />
      <Projects projects={projectsWeb} />
    </>
  );
};

export default Web;
