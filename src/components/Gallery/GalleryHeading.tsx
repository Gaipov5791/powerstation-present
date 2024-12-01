import React from 'react';
import { motion } from 'framer-motion';

export const GalleryHeading: React.FC = () => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Наша Галерея
      </h2>
      <p className="text-gray-600 text-lg">
        Фотографии наших проектов и достижений
      </p>
    </motion.div>
  );
};