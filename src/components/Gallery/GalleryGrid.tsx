import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage as GalleryImageType } from '../../data/galleryData';
import GalleryImage from './GalleryImage';

interface GalleryGridProps {
  images: GalleryImageType[];
  onImageClick: (image: GalleryImageType, index: number) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  return (
    <motion.div
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {images.map((image, index) => (
        <GalleryImage
          key={image.id}
          image={image}
          onClick={() => onImageClick(image, index)}
        />
      ))}
    </motion.div>
  );
};