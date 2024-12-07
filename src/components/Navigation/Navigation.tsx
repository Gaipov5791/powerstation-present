import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { NAV_ITEMS } from './types';
import { useScrollLock } from '../../hooks/useScrollLock';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) {
        lockScroll();
      } else {
        unlockScroll();
      }
      return newState;
    });
  };

  const scrollSmoothHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      unlockScroll();
      
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        unlockScroll();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Logo />
          <DesktopMenu items={NAV_ITEMS} onItemClick={scrollSmoothHandler} />

          <div className="min-[860px]:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        items={NAV_ITEMS}
        onItemClick={scrollSmoothHandler}
      />
    </nav>
  );
};