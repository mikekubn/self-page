import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IImageTooltop {
  root: string,
  height: number,
  width: number,
  alt: string,
  tooltip: string,
  positon: string,
}

const ImageTooltip = ({
  root, height, width, alt, tooltip, positon,
}: IImageTooltop): React.ReactElement => (
  <div className={`flex flex-col ${positon} m-7`}>
    <motion.div
      whileInView={{ scale: 0.9 }}
      transition={{ yoyo: Infinity, duration: 0.7 }}
      className="flex flex-col items-start"
    >
      <Image src={`/img/${root}.png`} height={height} width={width} alt={alt} />
      <p className="mt-2">{tooltip}</p>
    </motion.div>
  </div>
);

export default ImageTooltip;
