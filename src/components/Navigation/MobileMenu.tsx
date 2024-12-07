import React from 'react';
import { NavigationLink } from './NavigationLink';
import { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  items: NavItem[];
  onItemClick: (id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, items, onItemClick }) => {
  return (
    <div
      className={`
        min-[860px]:hidden
        fixed top-[3.5rem] sm:top-16 md:top-20 left-0 w-full
        bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]
        overflow-y-auto
        z-40
      `}
    >
      <div className="px-4 py-6 space-y-4">
        {items.map((item) => (
          <NavigationLink
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onItemClick(item.id)}
            isMobile
          >
            {item.label}
          </NavigationLink>
        ))}
      </div>
    </div>
  );
};