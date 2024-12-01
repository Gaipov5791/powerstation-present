import React from 'react';
import { WelcomeMessage } from './WelcomeMessage';
import { BackgroundImage } from './BackgroundImage';
import hydroelectricDam from '../../assets/images/hidroelectric-dam.jpg';

export const Home: React.FC = () => {
  return (
    <section 
      className="min-h-screen grid grid-cols-1 md:grid-cols-2" 
      id="home"
    >
      {/* Left Side - Content */}
      <div className="flex items-center justify-center order-2 md:order-1 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800">
        <WelcomeMessage />
      </div>

      {/* Right Side - Image */}
      <div className="h-[50vh] md:h-auto order-1 md:order-2 relative overflow-hidden">
        <BackgroundImage imageUrl={hydroelectricDam} />
      </div>
    </section>
  );
};