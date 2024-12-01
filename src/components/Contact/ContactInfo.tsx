import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SocialLinks } from './SocialLinks';

const contactItems = [
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г.Бишкек, ул. И. Раззакова 19',
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+996 551 04 04 57',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'sk.elbrus777@mail.ru',
  },
  {
    icon: Clock,
    title: 'Режим работы',
    content: 'Пн-Пт: 9:00 - 18:00',
  },
];

export const ContactInfo: React.FC = () => {
  return (
    <motion.div
      className="bg-white p-8 shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Наши контакты
      </h3>
      
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="bg-blue-100 p-3 rounded-lg">
              <item.icon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">{item.title}</h4>
              <p className="text-gray-600 mt-1">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-4">
          Социальные сети
        </h4>
        <SocialLinks />
      </div>
    </motion.div>
  );
};