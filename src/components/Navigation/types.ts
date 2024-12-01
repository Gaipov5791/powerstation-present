export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'ГЛАВНАЯ' },
  { id: 'about', label: 'О НАС' },
  { id: 'features', label: 'НОВОСТИ' },
  { id: 'gallery', label: 'ГАЛЛЕРЕЯ' },
  { id: 'video', label: 'ВИДЕО' },
  { id: 'contact', label: 'КОНТАКТЫ' },
];