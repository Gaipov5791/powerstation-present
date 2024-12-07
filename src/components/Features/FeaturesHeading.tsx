import React from 'react';
import { motion } from 'framer-motion';

export const FeaturesHeading: React.FC = () => {
  return (
    <motion.div
      className="text-center lg:text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mt-4 sm:mt-6">НОВОСТИ</h2>
      <p className="mt-4 font-semibold text-lg text-gray-600">
        Последние события и достижения нашей компании
      </p>
    </motion.div>
  );
};