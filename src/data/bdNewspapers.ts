export type NewspaperCategory = 'Bangla' | 'English' | 'TV' | 'Sports';
export type NewspaperLanguage = 'bn' | 'en';

export type Newspaper = {
  id: string;
  name: string;
  url: string;
  category: NewspaperCategory;
  language: NewspaperLanguage;
};

export const BD_NEWSPAPERS: Newspaper[] = [
  {
    id: 'prothom-alo',
    name: 'Prothom Alo',
    url: 'https://www.prothomalo.com/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'kaler-kantho',
    name: 'Kaler Kantho',
    url: 'https://www.kalerkantho.com/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'ittefaq',
    name: 'The Daily Ittefaq',
    url: 'https://www.ittefaq.com.bd/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'jugantor',
    name: 'Jugantor',
    url: 'https://www.jugantor.com/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'samakal',
    name: 'Samakal',
    url: 'https://samakal.com/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'bdnews24-bn',
    name: 'bdnews24 (Bangla)',
    url: 'https://bangla.bdnews24.com/',
    category: 'Bangla',
    language: 'bn',
  },
  {
    id: 'bangla-tribune',
    name: 'Bangla Tribune',
    url: 'https://banglatribune.com/',
    category: 'Bangla',
    language: 'bn',
  },

  {
    id: 'daily-star',
    name: 'The Daily Star',
    url: 'https://www.thedailystar.net/',
    category: 'English',
    language: 'en',
  },
  {
    id: 'dhaka-tribune',
    name: 'Dhaka Tribune',
    url: 'https://www.dhakatribune.com/',
    category: 'English',
    language: 'en',
  },
  {
    id: 'new-age',
    name: 'New Age',
    url: 'https://www.newagebd.net/',
    category: 'English',
    language: 'en',
  },
  {
    id: 'bdnews24-en',
    name: 'bdnews24 (English)',
    url: 'https://bdnews24.com/',
    category: 'English',
    language: 'en',
  },

  { id: 'ntv', name: 'NTV', url: 'https://www.ntvbd.com/', category: 'TV', language: 'bn' },
  {
    id: 'somoy',
    name: 'Somoy TV',
    url: 'https://www.somoynews.tv/',
    category: 'TV',
    language: 'bn',
  },
  {
    id: 'channel24',
    name: 'Channel 24',
    url: 'https://www.channel24bd.tv/',
    category: 'TV',
    language: 'bn',
  },

  {
    id: 'cricbuzz',
    name: 'Cricbuzz',
    url: 'https://www.cricbuzz.com/',
    category: 'Sports',
    language: 'en',
  },
  {
    id: 'espncricinfo',
    name: 'ESPNcricinfo',
    url: 'https://www.espncricinfo.com/',
    category: 'Sports',
    language: 'en',
  },
];

export const BD_CATEGORIES: NewspaperCategory[] = ['Bangla', 'English', 'TV', 'Sports'];
