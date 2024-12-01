import React from 'react';
import { motion } from 'framer-motion';
import { useFeaturesList } from '../Features/hooks/useFeatureLists';

export const FeaturesList: React.FC = () => {
  const features = useFeaturesList();

  return (
    <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 space-y-4">
      {features.map((feature, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="hover:text-gray-900 transition-colors duration-200"
        >
          {feature}
        </motion.li>
      ))}
    </ul>
  );
};