import React from 'react';
import { Metadata, NextPage } from 'next';

import Header from '@components/Header';
import ProjectsPrint from '@/src/components/ProjectsPrint';

import { projectsPrint } from '@/src/data/print';

export const metadata: Metadata = { title: 'Print' };

const Print: NextPage = () => {
  return (
    <>
      <Header text="Print" />
      <ProjectsPrint projectsPrint={projectsPrint} />
    </>
  );
};

export default Print;
