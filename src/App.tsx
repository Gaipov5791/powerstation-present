import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Features } from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import { VideoSection } from './components/Video/VideoSection';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      <Navigation />
      <div className="flex-grow">
        <Home />
        <About />
        <Features />
        <Gallery />
        <VideoSection />
        <Contact />
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;