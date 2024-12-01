import { StaticImageData } from 'next/image';

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'construction' | 'hydroelectric' | 'infrastructure';
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1574267432553-4b4628081c31",
    alt: "Hydroelectric Dam Construction",
    category: "construction",
    width: 1920,
    height: 1280
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    alt: "Power Station Infrastructure",
    category: "infrastructure",
    width: 1920,
    height: 2880
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9",
    alt: "Hydroelectric Generator",
    category: "hydroelectric",
    width: 1920,
    height: 1280
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    alt: "Construction Site",
    category: "construction",
    width: 1920,
    height: 1280
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c",
    alt: "Hydroelectric Dam",
    category: "hydroelectric",
    width: 1920,
    height: 1280
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    alt: "Power Infrastructure",
    category: "infrastructure",
    width: 1920,
    height: 2880
  }
];