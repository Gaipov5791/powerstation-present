import galleryImg1 from "../assets/images/gallery-img1.jpg";
import galleryImg2 from "../assets/images/gallery-img2.jpg";
import galleryImg3 from "../assets/images/gallery-img3.jpg";
import galleryImg4 from "../assets/images/gallery-img4.jpg";
import galleryImg5 from "../assets/images/gallery-img5.jpg";
import galleryImg6 from "../assets/images/gallery-img6.jpg";
import galleryImg7 from "../assets/images/gallery-img7.jpg";
import galleryImg8 from "../assets/images/gallery-img8.jpg";
import galleryImg9 from "../assets/images/gallery-img9.jpg";
import galleryImg13 from "../assets/images/image13.jpg";
import galleryImg14 from "../assets/images/image14.jpg";
import galleryImg15 from "../assets/images/image15.jpg";
import galleryImg16 from "../assets/images/image16.jpg";
import galleryImg17 from "../assets/images/image17.jpg";
import galleryImg18 from "../assets/images/image18.jpg";
import galleryImg19 from "../assets/images/image19.jpg";
import galleryImg20 from "../assets/images/image20.jpg";
import galleryImg21 from "../assets/images/image21.jpg";
import galleryImg22 from "../assets/images/image22.jpg";
import galleryImg23 from "../assets/images/image23.jpg";
import galleryImg24 from "../assets/images/image24.jpg";
import galleryImg29 from "../assets/images/image29.jpg";
import galleryImg30 from "../assets/images/image30.jpg";
import galleryImg31 from "../assets/images/image31.jpg";
import galleryImg32 from "../assets/images/image32.jpg";
import galleryImg33 from "../assets/images/image33.jpg";
import galleryImg34 from "../assets/images/image34.jpg";
import galleryImg35 from "../assets/images/image35.jpg";
import galleryImg36 from "../assets/images/image36.jpg";
import galleryImg37 from "../assets/images/image37 (2).jpg";
import galleryImg38 from "../assets/images/image38.jpg";
import galleryImg39 from "../assets/images/image39.jpg";
import galleryImg40 from "../assets/images/image40.jpg";
import galleryImg41 from "../assets/images/image41.jpg";
import galleryImg42 from "../assets/images/image42.jpg";
import galleryImg43 from "../assets/images/image43.jpg";
import galleryImg44 from "../assets/images/image44.jpg";
import galleryImg45 from "../assets/images/image45.jpg";
import galleryImg46 from "../assets/images/image46.jpg";
import galleryImg47 from "../assets/images/image47.jpg";
import galleryImg48 from "../assets/images/image48.jpg";
import galleryImg49 from "../assets/images/image49.jpg";
import galleryImg50 from "../assets/images/image50.jpg";
import galleryImg51 from "../assets/images/image51.jpg";
import galleryImg52 from "../assets/images/image52.jpg";
import galleryImg53 from "../assets/images/image53.jpg";
import galleryImg54 from "../assets/images/image54.jpg";
import galleryImg55 from "../assets/images/image55.jpg";
import galleryImg56 from "../assets/images/image56.jpg";
import galleryImg57 from "../assets/images/image57.jpg";
import galleryImg58 from "../assets/images/image58.jpg";
import galleryImg59 from "../assets/images/image59.jpg";
import galleryImg60 from "../assets/images/image60.jpg";
import galleryImg61 from "../assets/images/image61.jpg";
import galleryImg62 from "../assets/images/image62.jpg";
import galleryImg63 from "../assets/images/image63.jpg";
import galleryImg64 from "../assets/images/image64.jpg";

import galleryVideo1 from "../assets/video/video1.mp4";
import galleryVideo2 from "../assets/video/video2.mp4";
import galleryVideo3 from "../assets/video/video3.mp4";
import galleryVideo4 from "../assets/video/video4.mp4";
import galleryVideo5 from "../assets/video/video5.mp4";
import galleryVideo6 from "../assets/video/video6.mp4";
import galleryVideo7 from "../assets/video/video7.mp4";
import galleryVideo8 from "../assets/video/video8.mp4";
import galleryVideo9 from "../assets/video/video9.mp4";
import galleryVideo10 from "../assets/video/video10.mp4";
import galleryVideo11 from "../assets/video/video11.mp4";8
import galleryVideo12 from "../assets/video/video12.mp4";
import galleryVideo13 from "../assets/video/video13.mp4";
import galleryVideo14 from "../assets/video/video14.mp4";
import galleryVideo15 from "../assets/video/video15.mp4";
import galleryVideo16 from "../assets/video/video16.mp4";
import galleryVideo17 from "../assets/video/video17.mp4";
import galleryVideo18 from "../assets/video/video18.mp4";
import galleryVideo19 from "../assets/video/video19.mp4";
import galleryVideo20 from "../assets/video/video20.mp4";
import galleryVideo21 from "../assets/video/video21.mp4";
import galleryVideo22 from "../assets/video/video22.mp4";
import galleryVideo23 from "../assets/video/video23.mp4";
import galleryVideo24 from "../assets/video/video24.mp4";
import galleryVideo25 from "../assets/video/video25.mp4";
import galleryVideo26 from "../assets/video/video26.mp4";
import galleryVideo27 from "../assets/video/video27.mp4";


export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'строительство' | 
            'гидросооружения' |
            'оборудование' | 
            'бетонный узел' | 
            'перспектива' | 
            'видео';
  videoUrl?: string;
}

export const galleryImages: GalleryImage[] = [
  // Construction Category
  {
    id: 1,
    src: galleryImg1,
    alt: "Начало строительства плотины на реке Авлетим",
    category: "строительство"
  },
  {
    id: 2,
    src: galleryImg2,
    alt: "Начало строительства с помощью тяжелеой техники",
    category: "строительство"
  },
  {
    id: 3,
    src: galleryImg3,
    alt: "Начало строительства с помощью тяжелеой техники",
    category: "строительство"
  },
  {
    id: 4,
    src: galleryImg4,
    alt: "Установка трансформатора",
    category: "строительство"
  },
  {
    id: 5,
    src: galleryImg5,
    alt: "Арматуры для металлоконструкций",
    category: "строительство"
  },
  {
    id: 6,
    src: galleryImg6,
    alt: "Арматуры для металлоконструкций",
    category: "строительство"
  },
  {
    id: 7,
    src: galleryImg7,
    alt: "Строительство плотины",
    category: "строительство"
  },
  {
    id: 8,
    src: galleryImg8,
    alt: "Бетонные работы",
    category: "строительство"
  },
  {
    id: 9,
    src: galleryImg9,
    alt: "Спецтехника для заливки бетона",
    category: "строительство"
  },
  {
    id: 13,
    src: galleryImg13,
    alt: "Установка генераторов",
    category: "строительство"
  },
  {
    id: 14,
    src: galleryImg14,
    alt: "Монтаж металлоконструкций",
    category: "строительство"
  },
  {
    id: 15,
    src: galleryImg15,
    alt: "Монтаж металлоконструкций",
    category: "строительство"
  },
  {
    id: 16,
    src: galleryImg16,
    alt: "Строительство плотины",
    category: "строительство"
  },
  {
    id: 17,
    src: galleryImg17,
    alt: "Сторительство плотины",
    category: "строительство"
  },
  {
    id: 18,
    src: galleryImg18,
    alt: "Плотина ГЭС",
    category: "строительство"
  },
  {
    id: 19,
    src: galleryImg19,
    alt: "Геодезические расчеты",
    category: "строительство"
  },
  {
    id: 20,
    src: galleryImg20,
    alt: "Строительство плотины",
    category: "строительство"
  },
  {
    id: 21,
    src: galleryImg21,
    alt: "Взрывные работы",
    category: "строительство"
  },
  {
    id: 22,
    src: galleryImg22,
    alt: "Собюлдение техники безопасности во время взрывных работ",
    category: "строительство"
  },
  {
    id: 23,
    src: galleryImg23,
    alt: "Определение места машинного зала",
    category: "строительство"
  },
  {
    id: 24,
    src: galleryImg24,
    alt: "Диспетчерский пункт",
    category: "строительство"
  },
  {
    id: 29,
    src: galleryImg29,
    alt: "Строительство машинного здания",
    category: "строительство"
  },
  {
    id: 30,
    src: galleryImg30,
    alt: "Строительство машинного здания",
    category: "строительство"
  },
  {
    id: 31,
    src: galleryImg31,
    alt: "Строительство машинного здания",
    category: "строительство"
  },
  {
    id: 32,
    src: galleryImg32,
    alt: "Строительство машинного здания",
    category: "строительство"
  },
  //Водозаборные сооружения
  {
    id: 33,
    src: galleryImg33,
    alt: "Возведение водозаборных сооружений",
    category: "гидросооружения"
  },
  {
    id: 34,
    src: galleryImg34,
    alt: "Возведение водозаборных сооружений",
    category: "гидросооружения"
  },
  {
    id: 35,
    src: galleryImg35,
    alt: "Возведение водозаборных сооружений",
    category: "гидросооружения"
  },
  {
    id: 36,
    src: galleryImg36,
    alt: "Возведение водозаборных сооружений",
    category: "гидросооружения"
  },

  // Бетонный узел
  {
    id: 40,
    src: galleryImg40,
    alt: "Бетонный узел",
    category: "бетонный узел"
  },
  {
    id: 41,
    src: galleryImg41,
    alt: "Бетонный узел",
    category: "бетонный узел"
  },
  {
    id: 42,
    src: galleryImg42,
    alt: "Бетонный узел",
    category: "бетонный узел"
  },
  //Оборудование
  {
    id: 37,
    src: galleryImg37,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 38,
    src: galleryImg38,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 39,
    src: galleryImg39,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 43,
    src: galleryImg43,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 44,
    src: galleryImg44,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 45,
    src: galleryImg45,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 46,
    src: galleryImg46,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 47,
    src: galleryImg47,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 48,
    src: galleryImg48,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 49,
    src: galleryImg49,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 50,
    src: galleryImg50,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 62,
    src: galleryImg62,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 63,
    src: galleryImg63,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  {
    id: 64,
    src: galleryImg64,
    alt: "Оборудование для ГЭС",
    category: "оборудование"
  },
  //Перспективние проекты
  {
    id: 51,
    src: galleryImg51,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 52,
    src: galleryImg52,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 53,
    src: galleryImg53,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 54,
    src: galleryImg54,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 55,
    src: galleryImg55,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 56,
    src: galleryImg56,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 57,
    src: galleryImg57,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 58,
    src: galleryImg58,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 59,
    src: galleryImg59,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 60,
    src: galleryImg60,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  {
    id: 61,
    src: galleryImg61,
    alt: "Выбор места для новой ГЭС",
    category: "перспектива"
  },
  // Видео галлерея
  {
    id: 70,
    src: galleryVideo1,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo1
  },
  {
    id: 71,
    src: galleryVideo2,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo2
  },
  {
    id: 72,
    src: galleryVideo3,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo3
  },
  {
    id: 73,
    src: galleryVideo4,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo4
  },
  {
    id: 74,
    src: galleryVideo5,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo6
  },
  {
    id: 75,
    src: galleryVideo6,
    alt: "Начало работы",
    category: "видео",
    videoUrl: galleryVideo6
  },
  {
    id: 76,
    src: galleryVideo7,
    alt: "Установка тансформатора",
    category: "видео",
    videoUrl: galleryVideo7
  },
  {
    id: 77,
    src: galleryVideo8,
    alt: "Взрывные работы",
    category: "видео",
    videoUrl: galleryVideo8
  },
  {
    id: 78,
    src: galleryVideo9,
    alt: "Взрывные работы",
    category: "видео",
    videoUrl: galleryVideo9
  },
  {
    id: 79,
    src: galleryVideo10,
    alt: "Взрывные работы",
    category: "видео",
    videoUrl: galleryVideo10
  },
  {
    id: 80,
    src: galleryVideo11,
    alt: "Взрывные работы",
    category: "видео",
    videoUrl: galleryVideo11
  },
  {
    id: 81,
    src: galleryVideo12,
    alt: "Строительство плотины",
    category: "видео",
    videoUrl: galleryVideo12
  },
  {
    id: 82,
    src: galleryVideo13,
    alt: "Строительство плотины",
    category: "видео",
    videoUrl: galleryVideo13
  },
  {
    id: 83,
    src: galleryVideo14,
    alt: "Строительство деривационного канала",
    category: "видео",
    videoUrl: galleryVideo14
  },
  {
    id: 84,
    src: galleryVideo15,
    alt: "Строительство деривационного канала",
    category: "видео",
    videoUrl: galleryVideo15
  },
  {
    id: 85,
    src: galleryVideo16,
    alt: "Стоительство машинного здания",
    category: "видео",
    videoUrl: galleryVideo16
  },
  {
    id: 86,
    src: galleryVideo17,
    alt: "Стоительство машинного здания",
    category: "видео",
    videoUrl: galleryVideo17
  },
  {
    id: 87,
    src: galleryVideo18,
    alt: "Стоительство машинного здания",
    category: "видео",
    videoUrl: galleryVideo18
  },
  {
    id: 88,
    src: galleryVideo19,
    alt: "Установка водозаборных сооружений",
    category: "видео",
    videoUrl: galleryVideo19
  },
  {
    id: 89,
    src: galleryVideo20,
    alt: "Установка водозаборных сооружений",
    category: "видео",
    videoUrl: galleryVideo20
  },
  {
    id: 90,
    src: galleryVideo21,
    alt: "Установка водозаборных сооружений",
    category: "видео",
    videoUrl: galleryVideo21
  },
  {
    id: 91,
    src: galleryVideo22,
    alt: "Установка водозаборных сооружений",
    category: "видео",
    videoUrl: galleryVideo22
  },
  {
    id: 92,
    src: galleryVideo23,
    alt: "Строительство машинного здания",
    category: "видео",
    videoUrl: galleryVideo23
  },
  {
    id: 93,
    src: galleryVideo24,
    alt: "Выбор места для строительства машинного здания",
    category: "видео",
    videoUrl: galleryVideo24
  },
  {
    id: 94,
    src: galleryVideo25,
    alt: "Переговоры со специалистами из Европы и представителями Росатома",
    category: "видео",
    videoUrl: galleryVideo25
  },
  {
    id: 95,
    src: galleryVideo26,
    alt: "Погрузка оборудования для нашей ГЭС",
    category: "видео",
    videoUrl: galleryVideo26
  },
  {
    id: 96,
    src: galleryVideo27,
    alt: "Погрузка оборудования для нашей ГЭС",
    category: "видео",
    videoUrl: galleryVideo27
  },
];


