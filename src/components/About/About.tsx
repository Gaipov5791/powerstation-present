import React from 'react';
import { AboutHeading } from './AboutHeading';
import { AboutImage } from './AboutImage';
import { AboutContent } from './AboutContent';
import hidroelectricBuild from '../../assets/images/about-img.jpg';

export const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutHeading />
        
        <div className="mt-12 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            <AboutImage
              src= {hidroelectricBuild}
              alt="About Us - Hydroelectric Dam Construction"
            />
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
};