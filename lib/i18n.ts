export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

export interface Translations {
  nav: {
    ewind: string;
    ev3: string;
    ev2: string;
    news: string;
    aboutUs: string;
    contactUs: string;
  };
  footer: {
    models: string;
    followUs: string;
    developedBy: string;
  };
  carousel: {
    view: string;
  };
  common: {
    viewConfiguration: string;
    watchVideo: string;
    comingSoon: string;
    learnMore: string;
  };
  ev2: {
    title: string;
    subtitle: string;
    spaciousVersatile: string;
    spaciousVersatileDesc: string;
    colorOptions: string;
    exquisiteAppearance: string;
    exquisiteAppearanceDesc: string;
    smoothStable: string;
    smoothStableDesc: string;
    highEndurance: string;
    highEnduranceDesc: string;
    fiveStarSafety: string;
  };
  ev3: {
    title: string;
    subtitle: string;
    configuration: string;
    carType: string;
    intelligentFeatures: string;
  };
  ewind: {
    title: string;
    subtitle: string;
    comingSoonTitle: string;
    comingSoonDesc: string;
    stayUpdated: string;
    notifyMe: string;
    whatToExpect: string;
    advancedTechnology: string;
    advancedTechnologyDesc: string;
    ecoFriendly: string;
    ecoFriendlyDesc: string;
    premiumQuality: string;
    premiumQualityDesc: string;
  };
}

export const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      ewind: 'EWIND',
      ev3: 'EV3',
      ev2: 'EV2',
      news: 'Actualités',
      aboutUs: 'À propos',
      contactUs: 'Contact',
    },
    footer: {
      models: 'Modèles',
      followUs: 'Suivez-nous',
      developedBy: 'développé avec ❤️ par INSTACODIN',
    },
    carousel: {
      view: 'Voir',
    },
    common: {
      viewConfiguration: 'Voir la configuration',
      watchVideo: 'Regarder la vidéo',
      comingSoon: 'Bientôt disponible',
      learnMore: 'En savoir plus',
    },
    ev2: {
      title: 'EV2',
      subtitle: 'Véhicule électrique spacieux et polyvalent',
      spaciousVersatile: 'Spacieux et polyvalent',
      spaciousVersatileDesc: '5 portes et 4 places pour les passagers; grand espace et carrosserie flexible pour le stockage.',
      colorOptions: 'Options de couleur',
      exquisiteAppearance: 'Apparence exquise',
      exquisiteAppearanceDesc: 'Design intelligent, avec intérieurs à deux couleurs pour mettre en valeur.',
      smoothStable: 'Expérience de conduite fluide et stable',
      smoothStableDesc: 'Redesign sur plateforme EV pure, avec conception de centre de gravité bas et le ratio de charge optimal des essieux avant et arrière de 49:51 pour une bonne maniabilité.',
      highEndurance: 'Haute autonomie',
      highEnduranceDesc: 'L\'autonomie du JMEV EV2 est de 201 km. Équipé du système de récupération d\'énergie efficace à 30%, rappel de batterie faible et fonctions de protection de l\'autonomie.',
      fiveStarSafety: 'Carrosserie de sécurité cinq étoiles',
    },
    ev3: {
      title: 'EV3',
      subtitle: 'Véhicule électrique intelligent',
      configuration: 'Configuration',
      carType: 'Type de véhicule',
      intelligentFeatures: 'Fonctionnalités intelligentes',
    },
    ewind: {
      title: 'EWIND',
      subtitle: 'L\'avenir de la mobilité électrique arrive. Restez à l\'écoute pour une expérience de conduite extraordinaire.',
      comingSoonTitle: 'Bientôt disponible',
      comingSoonDesc: 'Nous travaillons dur pour vous apporter l\'EWIND - un véhicule électrique révolutionnaire qui combine une technologie de pointe avec un design exceptionnel.',
      stayUpdated: 'Restez informé',
      notifyMe: 'Me notifier',
      whatToExpect: 'À quoi s\'attendre',
      advancedTechnology: 'Technologie avancée',
      advancedTechnologyDesc: 'Technologie de véhicule électrique de pointe pour des performances supérieures.',
      ecoFriendly: 'Écologique',
      ecoFriendlyDesc: 'Zéro émission pour un avenir plus propre et plus vert.',
      premiumQuality: 'Qualité premium',
      premiumQualityDesc: 'Construit avec précision et attention à chaque détail.',
    },
  },
  en: {
    nav: {
      ewind: 'EWIND',
      ev3: 'EV3',
      ev2: 'EV2',
      news: 'News',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
    },
    footer: {
      models: 'Models',
      followUs: 'Follow Us',
      developedBy: 'developed with ❤️ by INSTACODIN',
    },
    carousel: {
      view: 'View',
    },
    common: {
      viewConfiguration: 'View Configuration',
      watchVideo: 'Watch Video',
      comingSoon: 'Coming Soon',
      learnMore: 'Learn More',
    },
    ev2: {
      title: 'EV2',
      subtitle: 'Spacious and Versatile Electric Vehicle',
      spaciousVersatile: 'Spacious and Versatile',
      spaciousVersatileDesc: '5 doors and 4 seats for passengers; large space and flexible body for storage.',
      colorOptions: 'Color Options',
      exquisiteAppearance: 'Exquisite Appearance',
      exquisiteAppearanceDesc: 'Smart design, with two-color splicing interiors for highlighting.',
      smoothStable: 'Smooth and Stable Driving Experience',
      smoothStableDesc: 'Redesign on pure EV platform, with design of low gravity center and the optimal front and rear axle load ratio of 49:51 for good handling.',
      highEndurance: 'High Endurance',
      highEnduranceDesc: 'The cruising range of JMEV EV2 is 201km. Equipped with the 30% efficient energy recovery system, low battery reminder and range protection functions.',
      fiveStarSafety: 'Five-star Safety Body',
    },
    ev3: {
      title: 'EV3',
      subtitle: 'Intelligent Electric Vehicle',
      configuration: 'Configuration',
      carType: 'Car Type',
      intelligentFeatures: 'Intelligent Features',
    },
    ewind: {
      title: 'EWIND',
      subtitle: 'The future of electric mobility is on its way. Stay tuned for an extraordinary driving experience.',
      comingSoonTitle: 'Coming Soon',
      comingSoonDesc: 'We\'re working hard to bring you the EWIND - a revolutionary electric vehicle that combines cutting-edge technology with exceptional design.',
      stayUpdated: 'Stay Updated',
      notifyMe: 'Notify Me',
      whatToExpect: 'What to Expect',
      advancedTechnology: 'Advanced Technology',
      advancedTechnologyDesc: 'Cutting-edge electric vehicle technology for superior performance.',
      ecoFriendly: 'Eco-Friendly',
      ecoFriendlyDesc: 'Zero emissions for a cleaner, greener future.',
      premiumQuality: 'Premium Quality',
      premiumQualityDesc: 'Built with precision and attention to every detail.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

