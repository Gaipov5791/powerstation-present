import React from 'react';
import { motion } from 'framer-motion';

interface GalleryFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  // { id: 'all', label: 'Все' },
  { id: 'строительство', label: 'Строительство' },
  { id: 'бетонный узел', label: 'Бетонный узел' },
  { id: 'гидросооружения', label: 'Водозаборные сооружения' },
  { id: 'оборудование', label: 'Оборудование для ГЭС' },
  { id: 'перспектива', label: 'Перспективные проекты' },
  { id: 'видео', label: 'Видео галлерея' },
];

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`
            px-6 py-2 rounded-full text-sm font-medium
            transition-all duration-300 transform hover:scale-105
            ${
              activeFilter === filter.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }
          `}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  );
};