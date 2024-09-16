'use client'

import { motion } from 'framer-motion';

import { default as NextImage, StaticImageData } from 'next/image';

type ImageProps = {
  src: StaticImageData;
  alt: string;
}

const Image = ({src, alt} : ImageProps) => {
  return (
    <motion.div 
      className='image' 
      initial={{
        opacity: 0
      }} 
      whileInView={{
        opacity: 1, 
        transition: {
          duration: 0.35
        }
      }} 
      viewport={{
        once: true,
        amount: 0.25
      }}
    >
      <NextImage src={src} alt={alt} width={0} height={0} />
    </motion.div>
  )
}

export default Image;