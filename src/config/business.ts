export type OpeningHoursEntry = {
  day: string;
  opens: string;
  closes: string;
  closed?: boolean;
};

export const business = {
  brandName: 'Cutting Laser Lampung',
  publicName: 'Cutting Laser Lampung',
  whatsappNumber: '6281273070930',
  phone: '6281273070930',
  phoneDisplay: '+62 812-7307-0930',
  email: 'saka.andira@gmail.com',
  address: 'Jl. Ryacudu Gg. Al Fajar, Way Dadi, Kec. Sukarame, Kota Bandar Lampung, Lampung 35133, Indonesia',
  addressParts: {
    streetAddress: 'Jl. Ryacudu Gg. Al Fajar',
    addressLocality: 'Bandar Lampung',
    neighborhood: 'Way Dadi',
    district: 'Kec. Sukarame',
    addressRegion: 'Lampung',
    postalCode: '35133',
    addressCountry: 'ID',
  },
  mapsUrl: 'https://maps.app.goo.gl/cpJSqQ58KMznkQkb8',
  coordinates: { latitude: '', longitude: '' },
  openingHours: [
    { day: 'Monday', opens: '08:00', closes: '17:00' },
    { day: 'Tuesday', opens: '08:00', closes: '17:00' },
    { day: 'Wednesday', opens: '08:00', closes: '17:00' },
    { day: 'Thursday', opens: '08:00', closes: '17:00' },
    { day: 'Friday', opens: '08:00', closes: '17:00' },
    { day: 'Saturday', opens: '08:00', closes: '17:00' },
    { day: 'Sunday', opens: '00:00', closes: '00:00', closed: true },
  ] as OpeningHoursEntry[],
  timezone: 'Asia/Jakarta',
  serviceArea: 'Lampung',
  googleBusinessProfileUrl: 'https://share.google/Mjbq92qzvL7z5k0n0',
  socialUrls: {
    instagram: 'https://www.instagram.com/kinglaserart',
    facebook: 'https://www.facebook.com/kinglaserartlampung/',
    tiktok: 'https://www.tiktok.com/@kinglasercutting',
  },
  analytics: { ga4Id: '', gtmId: '', searchConsoleVerification: '' },
} as const;

export const siteUrl = 'https://cuttinglaserlampung.com';
export const businessHoursText = 'Senin–Sabtu 08.00–17.00, Minggu tutup.';
export const missingBusinessInputs = [] as string[];
