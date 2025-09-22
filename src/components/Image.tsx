'use client';

import { motion } from 'framer-motion';

import { default as NextImage, StaticImageData } from 'next/image';

import s from './Image.module.scss';

type ImageProps = { src: StaticImageData; alt: string };
type ImageLoaderProps = { src: string; width: number; quality?: number };

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 80}`;
};

const Image = ({ src, alt }: ImageProps) => {
  return (
    <motion.div
      className={s.wrap}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.35 } }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <NextImage
        loader={imageLoader}
        src={src}
        alt={alt}
        width={0}
        height={0}
        placeholder="blur"
        blurDataURL="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==)"
        quality={70}
        sizes="(max-width: 850px) 100vw, 1250px"
      />
    </motion.div>
  );
};

export default Image;
