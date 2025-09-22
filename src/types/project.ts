export type Project = {
  title: string;
  technologies?: string;
  date: string;
  url?: string;
  imgSrcs: string[];
  description: string[];
  extras?: {
    imgSrc: string;
    caption: string;
  }
}

type ProjectPrintItem = {
  images: {
    srcs: string[],
    alts?: string[]
  },
  description: string[];
}

export type ProjectPrint = {
  title: string;
  date: string;
  items: ProjectPrintItem[]
}