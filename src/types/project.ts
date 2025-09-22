import { ReactNode } from "react";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  technologies?: string;
  date: string;
  url?: string;
  imgSrcs: StaticImageData[];
  description: ReactNode;
  extras?: {
    imgSrc: StaticImageData;
    caption: ReactNode;
  }
}

type ProjectPrintItem = {
  images:
    {
      srcs: StaticImageData[],
      alts?: string[]
    },
  description: ReactNode;
}

export type ProjectPrint = {
  title: string;
  date: string;
  items: ProjectPrintItem[]
}