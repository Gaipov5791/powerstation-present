import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { LoadingSpinner } from './LoadingSpinner';

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);
    try {
      await emailjs.sendForm(
        "service_zmdj1pi",
        "template_847rtgg",
        form.current,
        "h-j0xBlXdWjifeU98"
      );
      toast.success('Сообщение успешно отправлено!');
      form.current.reset();
    } catch (error) {
      toast.error('Ошибка при отправке сообщения.');
      console.error('Failed to send email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white p-8 shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <FormInput
          name="from_name"
          label="Имя"
          placeholder="Введите ваше имя"
          required
        />
        
        <FormInput
          name="from_email"
          type="email"
          label="Email"
          placeholder="Введите ваш email"
          required
        />

        <FormTextarea
          name="message"
          label="Сообщение"
          placeholder="Введите ваше сообщение"
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`
            w-full bg-gradient-to-r from-blue-600 to-indigo-600
            text-white py-3 px-6 rounded-lg
            flex items-center justify-center space-x-2
            transform transition-all duration-300
            hover:from-blue-700 hover:to-indigo-700
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-70 disabled:cursor-not-allowed
            ${isLoading ? 'cursor-wait' : 'hover:-translate-y-1'}
          `}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Отправить сообщение</span>
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};