import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import Projects from '@components/Projects';

export const metadata: Metadata = { title: 'Apps' };

import { projectsApps } from '@/src/data/apps';

const Apps: NextPage = () => {
  return (
    <>
      <Header text="Apps" />
      <Projects projects={projectsApps} />
    </>
  );
};

export default Apps;
