'use client';

import { createContext, ReactNode, useContext } from 'react';
import { StaticImageData } from 'next/image';

import Image from '@components/Image';

import s from './Project.module.scss';

type ProjectContextProps = {
  title: string;
  children: ReactNode;
};

type HeaderProps = {
  technologies?: string;
  date: string;
};

type ImagesProps = {
  url?: string;
  imgSrcs: string[];
  imgAlts?: string[];
};

type DescriptionProps = {
  content: string[];
};

type ExtrasProps = {
  imgSrc: string;
  children: ReactNode;
};

const ProjectContext = createContext({ title: '' });
const useProjectContext = () => useContext(ProjectContext);

const renderImages = (imgSrcs: string[], title: string, imgAlts?: string[]) => {
  return imgSrcs.map((imgSrc, index) => <Image src={imgSrc} alt={(imgAlts && imgAlts[index]) || title} key={`${title}-${index}`} />);
};

export const Wrapper = ({ title, children }: ProjectContextProps) => {
  return <ProjectContext.Provider value={{ title }}>{children}</ProjectContext.Provider>;
};

export const Header = ({ technologies, date }: HeaderProps) => {
  const { title } = useProjectContext();
  return (
    <>
      <h2>
        {title}
        {technologies ? <span>{technologies}</span> : null}
      </h2>
      <span className={s.date}>{date}</span>
    </>
  );
};

export const Images = ({ url, imgSrcs }: ImagesProps) => {
  const { title } = useProjectContext();
  return url ? (
    <a href={url} target="_blank" rel="noreferrer">
      {renderImages(imgSrcs, title)}
    </a>
  ) : (
    renderImages(imgSrcs, title)
  );
};

export const Description = ({ content }: DescriptionProps) => {
  const { title } = useProjectContext();

  return (
    <div className={s.description}>
      {content.map((item, index) => (
        <p key={`${title}-${index}-content`} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </div>
  );
};

export const Extras = ({ imgSrc, children }: ExtrasProps) => {
  const { title } = useProjectContext();
  return (
    <>
      <Image src={imgSrc} alt={title} />
      <div className={s.description}>
        <p>{children}</p>
      </div>
    </>
  );
};
