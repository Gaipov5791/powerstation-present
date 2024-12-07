import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Youtube } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const youtubeChannelUrl = "https://www.youtube.com/@ElbrusConstruction";
  
  return (
    <section className="bg-gray-900 py-16" id="video">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-4 sm:mt-6">
            Наши Видео
          </h2>
          <p className="text-gray-400 text-lg">
            Следите за нашими проектами на YouTube
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Featured Video */}
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onClick={() => window.open('https://www.youtube.com/watch?v=example', '_blank')}
          >
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c"
              alt="Строительство ГЭС"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Channel Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white">
              Присоединяйтесь к нашему каналу
            </h3>
            <p className="text-gray-400">
              На нашем YouTube канале вы найдете:
            </p>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Обзоры строительных проектов</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Технологические процессы</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Интервью с экспертами</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Новости компании</span>
              </li>
            </ul>
            
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 w-fit"
            >
              <Youtube className="w-6 h-6" />
              <span>Подписаться на канал</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};