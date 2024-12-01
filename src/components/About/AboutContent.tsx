import React from 'react';
import { motion } from 'framer-motion';
import { AboutAchievements } from './AboutAchievements';

export const AboutContent: React.FC = () => {
  return (
    <motion.div 
      className="w-full sm:w-1/2"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
        ОсОО "Строительная компания Эльбрус" — эксперт в строительстве малых гидроэлектростанций (ГЭС).
        Наша компания не только проектирует и строит современные энергосистемы, но и оказывает полный спектр услуг:
        от выбора перспективных створов до юридического сопровождения проектов.
      </p>
      
      <AboutAchievements />
      
      <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Наша команда состоит из высококвалифицированных инженеров с международным опытом, а также специалистов с более чем 40-летним стажем в гидроэнергетике.
        Совместная работа с партнерами из Европы позволяет нам применять передовые технологии и подходы.
      </p>
      
      <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        Мы вносим значительный вклад в развитие региона, обеспечивая рабочие места для более 50 сотрудников, а также поддерживая более 150 специалистов из смежных отраслей.
      </p>
    </motion.div>
  );
};