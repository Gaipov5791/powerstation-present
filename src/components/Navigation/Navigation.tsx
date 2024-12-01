import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { NAV_ITEMS } from './types';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollSmoothHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <DesktopMenu items={NAV_ITEMS} onItemClick={scrollSmoothHandler} />

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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