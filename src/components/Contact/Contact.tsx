import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-600 mt-4 sm:mt-6">
            Свяжитесь с нами
          </h2>
          <p className="text-gray-600 text-lg">
            Мы всегда готовы ответить на ваши вопросы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
};