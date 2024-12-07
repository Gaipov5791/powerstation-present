import React from 'react';
import { motion } from 'framer-motion';

interface FeaturesImageProps {
  src: string;
  alt: string;
}

export const FeaturesImage: React.FC<FeaturesImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      className="w-full lg:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg group">
        <img
          className="w-full h-[240px] sm:h-[320px] lg:h-[350px] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
          src={src}
          alt={alt}
          loading="lazy"
        />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 backdrop-blur-sm">
              <p className="text-white text-base font-medium line-clamp-2">{alt}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};