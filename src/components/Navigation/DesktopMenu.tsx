import React from 'react';
import { NavigationLink } from './NavigationLink';
import { NavItem } from './types';

interface DesktopMenuProps {
  items: NavItem[];
  onItemClick: (id: string) => void;
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ items, onItemClick }) => {
  return (
    <div className="hidden 2xl:block xl:block lg:block md:block max-[860px]:hidden">
      <div className="flex space-x-4">
        {items.map((item) => (
          <NavigationLink
            key={item.id}
            href={`#${item.id}`}
            onClick={() => onItemClick(item.id)}
          >
            {item.label}
          </NavigationLink>
        ))}
      </div>
    </div>
  );
};