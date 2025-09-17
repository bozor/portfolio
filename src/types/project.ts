import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type TProject = {
  title: string;
  technologies: string;
  date: string;
  url?: string;
  imgSrcs: StaticImageData[];
  description: ReactNode;
  extras?: {
    imgSrc: StaticImageData;
    caption: ReactNode;
  }
}