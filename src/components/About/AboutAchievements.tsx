import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Опыт в крупных проектах:',
    description: 'участие в строительстве малой ГЭС мощностью 3 МВт в Ыссык-Атинском районе в качестве консультанта.'
  },
  {
    title: 'Текущие проекты:',
    description: 'строительство малой ГЭС мощностью 2 МВт на реке Авлетим, находящееся на финальной стадии реализации (готовность 80%).'
  },
  {
    title: 'Перспективы:',
    description: 'старт строительства каскада из трех малых ГЭС на реке Кара-Суу и меморандум о возведении ГЭС мощностью 30 МВт на реке Чандалаш.'
  }
];

export const AboutAchievements: React.FC = () => {
  return (
    <>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-6">
        Мы гордимся нашими достижениями:
      </h3>
      <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 space-y-2 mt-4">
        {achievements.map((achievement, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className='font-semibold'>{achievement.title}</span> {achievement.description}
          </motion.li>
        ))}
      </ul>
    </>
  );
};