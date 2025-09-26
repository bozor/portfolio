import React from 'react';
import Image from 'next/image';

import Header from '@components/Header';
import Role from '@components/Role';
import Logos from '@components/Logos';

import { Role as RoleType } from '../types/role';

import githubLogo from 'public/images/github.svg';

import s from './PageHome.module.scss';

type PageHomeProps = {
  roles: RoleType[];
  lastUpdated: string;
};

const PageHome = ({ roles, lastUpdated }: PageHomeProps) => {
  return (
    <>
      <Header text="Boris Grudinin" subtitle="A highly skilled senior frontend developer with two decades of experience" />

      <p className={s.intro}>
        I have been able to work on a wide array of different projects in varied environments which have helped me to broaden my skill set.
        I am just as comfortable prototyping ideas in Figma as I am turning them into web and mobile apps in Visual Studio Code. I always
        look to challenge myself and to stay up to date with the latest trends and technologies in order to integrate them into my
        solutions.
      </p>

      <h2>Get in touch</h2>

      <ul className={s.contact}>
        <li>
          🔗{' '}
          <a href="https://www.linkedin.com/in/borisgrudinin/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          📧 <a href="mailto:boris@grudinin.co.uk">boris@grudinin.co.uk</a>
        </li>
        <li>
          📞 <a href="tel:07917356783">07917356783</a>
        </li>
      </ul>

      <section className={s.experience}>
        <h2>Experience</h2>
        {roles.map((role, index) => (
          <Role
            key={`${role.dates}-${index}`}
            title={role.title}
            location={role.location}
            dates={role.dates}
            description={role.description || null}
          />
        ))}
      </section>

      <section className={s.skills}>
        <h2>Skills</h2>
        <p>
          Javascript (React, React-Native, Framer Motion, Next.js, Typescript, Storybook, Electron, Cypress), HTML (HTML5), CSS (SASS, Less,
          CSS Modules), Adobe CC (Illustrator, InDesign, XD, Photoshop), Figma, GraphQL, Git Version Control, Android UI Development.
        </p>
      </section>

      <section className={s.clients}>
        <h2>Worked with</h2>
        <Logos />
      </section>

      <section className={s.credits}>
        <p>
          🖥️ Built using React, Next.js and SASS. Automatically deployed at {lastUpdated} using{' '}
          <Image src={githubLogo} alt="github" width={16} height={16} /> actions.
        </p>
      </section>
    </>
  );
};

export default PageHome;
