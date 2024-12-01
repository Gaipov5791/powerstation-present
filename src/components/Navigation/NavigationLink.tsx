import React from 'react';

interface NavigationLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  onClick,
  children,
  isMobile = false,
}) => {
  const baseStyles = "relative font-medium transition-all duration-300 ease-in-out";
  
  const mobileStyles = `
    text-gray-300 hover:bg-white/10 hover:text-white 
    block px-3 py-2 rounded-md text-base
    transform hover:-translate-x-1
  `;
  
  const desktopStyles = `
    text-gray-300 px-3 py-2 rounded-md text-sm
    hover:text-white
    before:content-['']
    before:absolute before:bottom-0 before:left-0
    before:w-full before:h-[2px]
    before:bg-white
    before:transform before:scale-x-0
    before:origin-right before:transition-transform before:duration-300
    hover:before:scale-x-100 hover:before:origin-left
    after:content-['']
    after:absolute after:inset-0
    after:bg-white/10 after:rounded-md
    after:transform after:scale-y-0
    after:origin-bottom after:transition-transform after:duration-300
    hover:after:scale-y-100
    overflow-hidden
  `;

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
};