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
      className={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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