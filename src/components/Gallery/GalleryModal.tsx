import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage } from '../../data/galleryData';

interface GalleryModalProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images, selectedIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(selectedIndex);
  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <button
          className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          onClick={handlePrevious}
        >
          <ChevronLeft size={24} />
        </button>

        {currentImage.category === 'видео' ? (
          <div className="w-full max-w-4xl">
            <video
              className="w-full aspect-video"
              controls
              autoPlay
              playsInline
            >
              <source src={currentImage.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[80vh] max-w-[90vw] object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />
        )}

        <button
          className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          onClick={handleNext}
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
          <p className="text-lg font-medium">{currentImage.alt}</p>
          <p className="text-sm text-gray-300">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;