import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-gray-300" />
        <span className="text-gray-300">+996 551 04 04 57</span>
      </div>
      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-gray-300" />
        <span className="text-gray-300">sk.elbrus777@mail.ru</span>
      </div>
      <div className="flex items-center space-x-3">
        <MapPin className="h-5 w-5 text-gray-300" />
        <span className="text-gray-300">г.Бишкек, ул. И. Раззакова 19</span>
      </div>
    </div>
  );
};