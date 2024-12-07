import React from 'react';
import { FeaturesList } from './FeaturesList';
import { FeaturesImage } from './FeaturesImage';

interface FeaturesContentProps {
  imageSrc: string;
}

export const FeaturesContent: React.FC<FeaturesContentProps> = ({ imageSrc }) => {
  return (
    <div className="mt-8 sm:mt-16">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="w-full lg:w-1/2">
          <div className="mt-2">
            <FeaturesList />
          </div>
        </div>
        <FeaturesImage
          src={imageSrc}
          alt="Гидроэлектростанция в процессе строительства"
        />
      </div>
    </div>
  );
};