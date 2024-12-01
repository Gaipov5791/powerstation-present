import React from 'react';
import { Building2 } from 'lucide-react';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { SocialLinks } from './SocialLinks';
import { ContactInfo } from './ContactInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Эльбрус</h2>
                <p className="text-gray-300 text-sm">Строительная компания</p>
              </div>
            </div>
            <p className="text-gray-300">
              Ведущая строительная компания с многолетним опытом в создании качественных
              и инновационных строительных решений.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <FooterSection title="Быстрые ссылки">
            <div className="flex flex-col space-y-2">
              <FooterLink href="#home">Главная</FooterLink>
              <FooterLink href="#about">О нас</FooterLink>
              <FooterLink href="#features">Новости</FooterLink>
              <FooterLink href="#gallery">Галлерея</FooterLink>
              <FooterLink href="#contact">Контакты</FooterLink>
            </div>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Услуги">
            <div className="flex flex-col space-y-2">
              <FooterLink href="#services">Жилищное строительство</FooterLink>
              <FooterLink href="#services">Коммерческое строительство</FooterLink>
              <FooterLink href="#services">Ремонт и реконструкция</FooterLink>
              <FooterLink href="#services">Проектирование</FooterLink>
              <FooterLink href="#services">Консультации</FooterLink>
            </div>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Контакты">
            <ContactInfo />
          </FooterSection>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Эльбрус. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};