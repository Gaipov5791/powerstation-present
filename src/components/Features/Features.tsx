import React from 'react';
import { FeaturesContainer } from '../Features/FeaturesContainer';
import { FeaturesHeading } from './FeaturesHeading';
import { FeaturesContent } from '../Features/FeaturesContent';
import featuresHero from '../../assets/images/hidroelectric-build.jpg';

export const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16" id="features">
      <FeaturesContainer>
        <FeaturesHeading />
        <FeaturesContent imageSrc={featuresHero} />
      </FeaturesContainer>
    </section>
  );
};