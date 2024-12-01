import React from 'react';
import { Youtube, MessageCircle } from 'lucide-react';

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 group"
    aria-label={label}
  >
    <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
      {icon}
    </div>
  </a>
);

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <SocialLink
        href="https://wa.me/996551040457"
        icon={<MessageCircle className="w-6 h-6" />}
        label="WhatsApp"
      />
      <SocialLink
        href="https://www.youtube.com/@ElbrusConstruction"
        icon={<Youtube className="w-6 h-6" />}
        label="YouTube"
      />
      <SocialLink
        href="https://t.me/elbrus_construction"
        icon={
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z" />
          </svg>
        }
        label="Telegram"
      />
      <SocialLink
        href="https://twitter.com/elbrus_const"
        icon={<XIcon />}
        label="X (Twitter)"
      />
    </div>
  );
};