import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useScrollPosition } from './useScrollPosition';

export const ScrollToTop: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 400;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-3 
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600
        text-white p-3 rounded-full shadow-lg
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-[9999]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </button>
  );
};