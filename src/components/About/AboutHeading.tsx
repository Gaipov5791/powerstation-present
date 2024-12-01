import React from 'react';
import { motion } from 'framer-motion';

export const AboutHeading: React.FC = () => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mt-8 sm:mt-12">
        О НАС
      </h2>
      <p className="mt-4 font-semibold text-base sm:text-lg text-gray-600">
        "Мы создаем энергию для будущего!"
      </p>
    </motion.div>
  );
};