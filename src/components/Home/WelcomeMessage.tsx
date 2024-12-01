import React from 'react';
import { motion } from 'framer-motion';

export const WelcomeMessage: React.FC = () => {
  return (
    <motion.div 
      className="w-full max-w-lg px-8 py-8 text-white"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-5xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Добро пожаловать в "Эльбрус"
      </motion.h2>
      
      <motion.div 
        className="space-y-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="font-medium">
          Надёжность, инновации и качество — наш фундамент.
        </p>
        <p>
          Компания "Эльбрус" предлагает профессиональные строительные услуги 
          для жилых, коммерческих и гидроэнергетических объектов.
        </p>
        <p>
          Доверьте нам реализацию ваших идей — мы воплощаем мечты в реальность!
        </p>
      </motion.div>
    </motion.div>
  );
};