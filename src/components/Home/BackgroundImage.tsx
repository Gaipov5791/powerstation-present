import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundImageProps {
  imageUrl: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageUrl }) => {
  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
        style={{
          backgroundImage: `url(${imageUrl})`,
          imageRendering: 'crisp-edges',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          filter: 'contrast(1.05) brightness(1.02)',
        }}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
        style={{
          mixBlendMode: 'overlay',
          backdropFilter: 'blur(0px)',
        }}
      />
    </motion.div>
  );
};