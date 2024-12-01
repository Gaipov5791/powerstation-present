import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Facebook"
      >
        <Facebook className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a
        href="#"
        className="text-gray-300 hover:text-white transition-colors duration-200"
        aria-label="Twitter"
      >
        <Twitter className="h-6 w-6" />
      </a>
    </div>
  );
};