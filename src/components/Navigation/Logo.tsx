import React from 'react';
import logo from '../../assets/images/logo.png';


export const Logo: React.FC = () => {
  return (
    <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
      <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center">
        <img 
          src={logo} 
          alt="Эльбрус Logo" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left sm:flex hidden">
        <span className="text-white text-lg font-bold tracking-widest block">
          Эльбрус
        </span>
        <span className="text-white uppercase text-xs">
          Строительная компания
        </span>
      </div>
    </div>
  );
};