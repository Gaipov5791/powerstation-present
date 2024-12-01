import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
};