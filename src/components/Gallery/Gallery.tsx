import React, { useState, useEffect } from 'react';
import { GalleryHeading } from './GalleryHeading';
import { GalleryFilters } from './GalleryFilters';
import { GalleryGrid } from './GalleryGrid';
import { GalleryMobileSlider } from './GalleryMobileSlider';
import GalleryModal from './GalleryModal';
import { galleryImages } from '../../data/galleryData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('строительство');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredImages = galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="bg-gray-100 py-12 sm:py-16" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryHeading />
        
        <GalleryFilters
          activeFilter={activeCategory}
          onFilterChange={setActiveCategory}
        />

        {isMobile ? (
          <GalleryMobileSlider
            images={filteredImages}
            onImageClick={(index) => setSelectedImageIndex(index)}
          />
        ) : (
          <GalleryGrid
            images={filteredImages}
            onImageClick={(_, index) => setSelectedImageIndex(index)}
          />
        )}
      </div>

      {selectedImageIndex !== null && (
        <GalleryModal
          images={filteredImages}
          selectedIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </div>
  );
};

export default Gallery;