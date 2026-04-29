import img1 from '../public/WhatsApp Image 2026-04-27 at 8.07.47 AM.jpeg';
import img3 from '../public/WhatsApp Image 2026-04-27 at 8.07.47 AM (2).jpeg';

export const COUPLE = {
  left: 'Emec',
  right: 'Agathe',
};

export const HERO = {
  // Mariage civil (compte à rebours)
  weddingDateISO: '2026-05-13T10:00:00',
  subtitle: "Du 13 au 14 Mai 2026 — Abidjan, Côte d'Ivoire",
};

export const NAV_LINKS: Array<[string, string]> = [
  ['#accueil', 'Accueil'],
  ['#galerie', 'Galerie'],
  ['#programme', 'Programmes'],
  ['#couleurs', 'Couleurs'],
  ['#cadeaux', 'Cadeaux'],
];

export const PROGRAM_SECTION_TITLE = 'Programme Emec & Agathe';

export const PROGRAM_BY_DAY = [
  {
    dateLabel: 'Mercredi 13 mai 2026',
    events: [{ time: '10 heures', title: 'Mariage civil', desc: 'À la Mairie du Plateau' }],
  },
  {
    dateLabel: 'Jeudi 14 mai 2026',
    events: [
      {
        time: '11 heures',
        title: 'Bénédiction à l’église',
        desc: 'Adventiste du 7ème jour de Yopougon Jérusalem',
      },
      {
        time: '13 heures',
        title: 'Réception',
        desc: 'À la Base Navale de la Marine Nationale, sise à Abobo Doumé',
      },
    ],
  },
];

export const GALLERY_SECTION_TITLE = 'Galerie Emec & Agathe';

export const GALLERY_PHOTOS = [
  { src: img1, caption: 'Éclats d\'instant' },
  { src: img3, caption: 'Premiers pas' },
];

// Chargement automatique des images de palette (noms parfois encodés bizarrement).
const paletteModules = import.meta.glob('../public/palette/*.jpg', {
  eager: true,
  import: 'default',
});

export const PALETTE_IMAGES = Object.keys(paletteModules)
  .sort()
  .map((k) => (paletteModules as Record<string, string>)[k]);

export const GIFTS = [
  [1, 'Écran télévision android 55 pouces 4K', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [2, 'Écran télévision android 43 pouces 4K', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [3, 'Climatiseur inverter 1.5 chv', 2, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [4, 'Réfrigérateur No frost 4 portes 400 ou 522 L', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [5, 'Cuisinière 4 feux 60x60 avec four', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [6, 'Ventilateur à eau rechargeable', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [7, 'Ventilateur à eau non rechargeable', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [8, 'Ventilateur simple (Tefal ou Binatone)', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [9, 'Micro-onde 25L Hisense ou Midéa', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [10, 'Machine à laver semi-automatique 7.5kg', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [11, 'Air Fryer 5.2 L Hisense', 1, 'ElectroShop Angré Mahou', '07 49 72 20 18 / www.electroshop.ci'],
  [12, 'Kit Mixer blender Moulinex', 1, 'Orca Deco Marcory', '—'],
  [13, 'Batteuse à cake Moulinex', 1, 'Orca Deco Marcory', '—'],
  [14, 'Fer à repasser', 1, 'Orca Deco Marcory', '—'],
  [15, 'Ustensiles (assiettes, verres, casseroles, soupières, glacières, etc…)', '—', 'Decoria Riviera', '—'],
  [16, 'Cartes cadeaux', 5, 'Galerie Peryssac', '—'],
];


export const FOOTER = {
  year: 2026,
  rendezVous: '13 au 14 Mai 2026',
  links: [
    ['#accueil', 'Accueil'],
    ['#galerie', 'Galerie'],
    ['#cadeaux', 'Cadeaux'],
    ['#programme', 'Programmes'],
    ['#rsvp', 'RSVP'],
  ] as Array<[string, string]>,
  addresses: [
    ['https://www.google.com/maps/search/?api=1&query=Mairie%20du%20Plateau%2C%20Abidjan', 'Mairie du Plateau'],
    ['https://www.google.com/maps/search/?api=1&query=%C3%89glise%20Adventiste%20du%207%C3%A8me%20jour%20de%20Yopougon%20J%C3%A9rusalem', 'Adventiste du 7ème jour — Yopougon Jérusalem'],
    ['https://www.google.com/maps/search/?api=1&query=Base%20Navale%20de%20la%20Marine%20Nationale%2C%20Abobo%20Doum%C3%A9', 'Base Navale de la Marine Nationale — Abobo Doumé'],
  ] as Array<[string, string]>,
};

