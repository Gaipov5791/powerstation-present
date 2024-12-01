import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { GalleryImage as GalleryImageType } from '../../data/galleryData';

interface GalleryImageProps {
  image: GalleryImageType;
  onClick: () => void;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ image, onClick }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        {image.category === 'видео' && (
          <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" />
        )}
        <p className="absolute bottom-0 left-0 right-0 text-white p-4 text-sm font-medium bg-black bg-opacity-50">
          {image.alt}
        </p>
      </div>
    </motion.div>
  );
};

export default GalleryImage;