import React from 'react';
import { motion } from 'framer-motion';

interface AboutImageProps {
  src: string;
  alt: string;
}

export const AboutImage: React.FC<AboutImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      className="w-full sm:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        className="w-full h-full object-cover object-center rounded-lg shadow-lg"
        src={src}
        alt={alt}
      />
    </motion.div>
  );
};