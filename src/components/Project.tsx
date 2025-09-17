'use client';

import { StaticImageData } from 'next/image';

import Image from '@components/Image';
import { createContext, ReactNode, useContext } from 'react';

type ProjectContextProps = {
  title: string;
  children: ReactNode;
};

type HeaderProps = {
  technologies: string;
  date: string;
};

type ImagesProps = {
  url?: string;
  imgSrcs: StaticImageData[];
};

type DescriptionProps = {
  children: ReactNode;
};

type ExtrasProps = {
  imgSrc: StaticImageData;
  children: ReactNode;
};

const ProjectContext = createContext({ title: '' });
const useProjectContext = () => useContext(ProjectContext);

const renderImages = (imgSrcs: StaticImageData[], title: string) => {
  return imgSrcs.map((imgSrc, index) => <Image src={imgSrc} alt={title} key={index} />);
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
        <span>{technologies}</span>
      </h2>
      <span className="date">{date}</span>
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

export const Description = ({ children }: DescriptionProps) => {
  return <div className="description">{children}</div>;
};

export const Extras = ({ imgSrc, children }: ExtrasProps) => {
  const { title } = useProjectContext();
  return (
    <>
      <Image src={imgSrc} alt={title} />
      {children}
    </>
  );
};
