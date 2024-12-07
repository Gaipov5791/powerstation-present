import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../data/galleryData';

interface GalleryMobileSliderProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export const GalleryMobileSlider: React.FC<GalleryMobileSliderProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className="mt-8 sm:mt-4 relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div 
              onClick={() => onImageClick(index)}
              className="cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-center mt-2 text-gray-600">{image.alt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button 
        className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      
      <button 
        className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};