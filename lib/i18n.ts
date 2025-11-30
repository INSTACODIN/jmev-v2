export type Locale = 'fr' | 'en';

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

export interface Translations {
  nav: {
    ewind: string;
    ev3: string;
    elight: string;
    news: string;
    aboutUs: string;
    contactUs: string;
    comingSoon: string;
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
  elight: {
    title: string;
    subtitle: string;
    rightHandDrive: string;
    leftHandDrive: string;
    viewConfiguration: string;
    watchVideo: string;
    meticulouslyDesigned: string;
    meticulouslyDesignedDesc: string;
    silverHookHeadlamp: string;
    silverHookHeadlampDesc: string;
    smartHomeSpace: string;
    smartHomeSpaceDesc: string;
    powerSeat: string;
    powerSeatDesc: string;
    thermalManagement: string;
    thermalManagementDesc: string;
    dualScreen: string;
    dualScreenDesc: string;
    powerSupply: string;
    powerSupplyDesc: string;
    ota: string;
    otaDesc: string;
    bodyStructure: string;
    bodyStructureDesc: string;
    suspension: string;
    suspensionDesc: string;
    drivingModes: string;
    economicMode: string;
    economicModeDesc: string;
    standardMode: string;
    standardModeDesc: string;
    motionMode: string;
    motionModeDesc: string;
    safetyTitle: string;
    qualityManagement: string;
    qualityManagementDesc: string;
    sinoEuroStandards: string;
    sinoEuroStandardsDesc: string;
    fiveSecurityGuarantees: string;
    batteryProtection: string;
    batteryProtectionDesc: string;
    batteryProduction: string;
    batteryProductionDesc: string;
    designToProduction: string;
    designToProductionDesc: string;
  };
}

export const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      ewind: 'EWIND',
      ev3: 'EV3',
      elight: 'ELIGHT',
      news: 'Actualités',
      aboutUs: 'À propos',
      contactUs: 'Contact',
      comingSoon: 'Coming Soon',
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
      comingSoon: 'Coming Soon',
      learnMore: 'En savoir plus',
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
      comingSoonTitle: 'Coming Soon',
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
    elight: {
      title: 'ELIGHT',
      subtitle: 'Véhicule électrique de nouvelle génération',
      rightHandDrive: 'Conduite à droite',
      leftHandDrive: 'Conduite à gauche',
      viewConfiguration: 'Voir la configuration',
      watchVideo: 'Regarder la vidéo',
      meticulouslyDesigned: 'CONÇU MÉTICULEUSEMENT',
      meticulouslyDesignedDesc: 'Appliquez l\'esthétique de l\'art de la puissance écologique, comme un guépard qui court librement dans le vent. Lignes nettes mais vives, style robuste mais agile montré sous différentes lumières et ombres. Accumulez les lumières dans la forme et concentrez la qualité dans le corps, avec une atmosphère luxueuse.',
      silverHookHeadlamp: 'Phare LED à crochet argenté éblouissant',
      silverHookHeadlampDesc: 'En plus du phare à crochet argenté éblouissant, une conception améliorée de phares adaptatifs haute et basse portée apporte des yeux plus flexibles et intelligents.',
      smartHomeSpace: 'Espace intelligent',
      smartHomeSpaceDesc: 'Le super grand espace de conduite du même niveau élargit l\'imagination de l\'utilisation de l\'espace. La technologie d\'inspiration met toujours les gens en premier pour profiter d\'un cockpit intelligent confortable.',
      powerSeat: 'Siège électrique 8 directions',
      powerSeatDesc: 'Le siège du conducteur est réglable électriquement dans 8 directions et le conducteur peut basculer les espaces de conduite et de transport confortables à volonté pour répondre aux besoins d\'espace du conducteur et des passagers pour un voyage libre et agréable.',
      thermalManagement: 'Système de gestion thermique intelligent',
      thermalManagementDesc: 'Utilisez le premier système de climatisation à récupération de chaleur pour VE en Chine pour améliorer efficacement l\'indice de consommation d\'énergie et augmenter l\'autonomie de 30% par rapport à la climatisation RTC ordinaire (climatisation à pompe à chaleur en option).',
      dualScreen: 'Double écran',
      dualScreenDesc: 'Double écran HD panoramique 10,25" + 12,3" avec éclat d\'étoile pour vue panoramique, profitez de l\'inspiration technologique de support de liaison pour contrôle gestuel de l\'IVI.',
      powerSupply: 'Alimentation dédiée pour tous les appareils',
      powerSupplyDesc: 'Transformation d\'énergie, pour permettre la connexion sûre et transparente de "voiture à voiture" et "voiture à appareil".',
      ota: 'OTA embarqué (technologie Over-The-Air)',
      otaDesc: '20+ OTA sur les véhicules, pour permettre la mise à niveau des systèmes de véhicule.',
      bodyStructure: 'Carrosserie légère haute résistance hybride acier-aluminium thermoformée',
      bodyStructureDesc: 'La BIW légère haute résistance acier-aluminium thermoformée, utilisant 44 plaques d\'acier thermoformées, dont la résistance atteint 1 500 MPa, pour construire un cadre de cage haute résistance. Grâce à la conception légère composite acier-aluminium, il crée une maison de voyage sûre légère et robuste, non seulement pour la poursuite de la vitesse et de la passion, mais aussi pour la recherche de douceur et de tranquillité d\'esprit.',
      suspension: 'Suspension indépendante à quatre roues pour une expérience de conduite confortable',
      suspensionDesc: 'Conception de suspension indépendante avant McPherson et arrière multi-bras pour une expérience de conduite confortable et fluide.',
      drivingModes: '3 modes de conduite',
      economicMode: 'Mode économique',
      economicModeDesc: 'Meilleure énergie électrique économique',
      standardMode: 'Mode standard',
      standardModeDesc: 'Puissance économique et énergie électrique',
      motionMode: 'Mode sport',
      motionModeDesc: 'Réponse de puissance plus positive',
      safetyTitle: 'CONÇU MÉTICULEUSEMENT',
      qualityManagement: 'Système de gestion de la qualité',
      qualityManagementDesc: 'Systèmes de contrôle qualité et technologies de production de classe mondiale',
      sinoEuroStandards: 'Normes sino-européennes et normes mondiales',
      sinoEuroStandardsDesc: 'En tant que premier modèle VE construit conjointement selon les normes sino-européennes et ayant passé l\'acceptation des normes de sécurité des véhicules européens, il a une force complète et est considéré comme une référence mondiale.',
      fiveSecurityGuarantees: 'Former un pool de sécurité avec 5 garanties de sécurité majeures',
      batteryProtection: 'Protection de batterie rectangulaire',
      batteryProtectionDesc: 'Structure de protection de batterie rectangulaire complète, pour fournir à la batterie une protection forte, contrôle de température interne, anti-collision externe et autres fonctionnalités puissantes.',
      batteryProduction: 'Processus de production de batterie détaillé pour assurer la sécurité du module',
      batteryProductionDesc: 'Le processus de production de la batterie est conçu pour renforcer la stabilité et les performances de dissipation thermique de la cellule de batterie, retarder le processus de vieillissement et prolonger la durée de vie de la batterie, pour une meilleure expérience.',
      designToProduction: 'De la conception à la production',
      designToProductionDesc: 'Nous persistons toujours dans l\'excellence pour un développement durable.',
    },
  },
  en: {
    nav: {
      ewind: 'EWIND',
      ev3: 'EV3',
      elight: 'ELIGHT',
      news: 'News',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      comingSoon: 'Coming Soon',
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
    elight: {
      title: 'ELIGHT',
      subtitle: 'Next-generation electric vehicle',
      rightHandDrive: 'Right-hand Drive',
      leftHandDrive: 'Left-hand Drive',
      viewConfiguration: 'View Configuration',
      watchVideo: 'Watch Video',
      meticulouslyDesigned: 'METICULOUSLY DESIGNED',
      meticulouslyDesignedDesc: 'Apply the ecological power art aesthetics, like a cheetah running freely in the wind. Sharp but vivid lines, hale but agile styling showed under different lights and shadows. Accumulate lights in shape and concentrate the quality in body, with luxurious atmosphere.',
      silverHookHeadlamp: 'Dazzling Silver-hook LED Headlamp',
      silverHookHeadlampDesc: 'In addition to the dazzling silver-hook head-lamp, an upgraded design of adaptive high and low beam lamps brings more flexible and intelligent eyes.',
      smartHomeSpace: 'Smart Home Space',
      smartHomeSpaceDesc: 'The super large driving space of the same level expands the space utilization imagination. Inspiration technology always puts people first to enjoy a comfortable intelligent cockpit.',
      powerSeat: '8-way Power Seat',
      powerSeatDesc: 'The driver\'s seat is electrically adjustable in 8 directions and the driver can switch the comfortable driving and riding spaces at will to meet the space needs of the driver and passengers for free and pleasant travel.',
      thermalManagement: 'Intelligent Thermal Management System',
      thermalManagementDesc: 'Use the first waste heat A/C system for EV in China to effectively improve the energy consumption index and increase the endurance mileage by 30% compared with of ordinary RTC heating A/C (heat pump A/C optional).',
      dualScreen: 'Dual Screen',
      dualScreenDesc: '10.25"+12.3" panoramic HD dual screen star-eye flashes for panoramic view, enjoy technological inspiration of linkage support for gesture control of IVI.',
      powerSupply: 'Dedicated Power Supply for All Appliances',
      powerSupplyDesc: 'Power transformation, to allow for the safe and seamless connection of "car-to-car" and "car-to-appliance".',
      ota: 'On-board OTA (Over-The-Air Technology)',
      otaDesc: '20+ OTAs on vehicles, to allow for the upgrade of the vehicle systems.',
      bodyStructure: 'Thermoformed Steel-aluminum Hybrid High-strength Light-weight Body',
      bodyStructureDesc: 'The hot forming steel-aluminum high-strength light-weight BIW, using 44 pieces of hot forming steel plates, which stength up 1,500MPa, to build a high-strength cage frame. Through the steel-aluminum composite light-weight design, it creates a light-weight and tough travel safe house, not only for the pursuit of speed and passion, but also for the seeking of smoothness and peace of mind.',
      suspension: 'Four-wheel Independent Suspension for Comfortable Riding Experience',
      suspensionDesc: 'Front McPherson & rear multi-link independent suspension design for comfortable and smooth driving experience.',
      drivingModes: '3 Driving Modes',
      economicMode: 'Economic Mode',
      economicModeDesc: 'Better economic electric energy',
      standardMode: 'Standard Mode',
      standardModeDesc: 'Both economic power and electric energy',
      motionMode: 'Motion Mode',
      motionModeDesc: 'More positive power response',
      safetyTitle: 'METICULOUSLY DESIGNED',
      qualityManagement: 'Quality Management System',
      qualityManagementDesc: 'World-class quality control systems and production technologies',
      sinoEuroStandards: 'Sino-Euro Standards and Global Standards',
      sinoEuroStandardsDesc: 'As the first EV model jointly built according to Sino-Euro standards and passed the acceptance of European vehicle safety standards, it has full strength and is regarded as a global benchmark.',
      fiveSecurityGuarantees: 'Form a Safety Pool with 5 Major Security Guarantees',
      batteryProtection: 'Rectangle-shape Battery Protection',
      batteryProtectionDesc: 'Comprehensive rectangle-shape battery pack protection structure, to provide the battery pack with strong protection, internal temperature control, external anti-collision, and other powerful features.',
      batteryProduction: 'Detailed Battery Production Process to Ensure the Module Safety',
      batteryProductionDesc: 'The battery production process is designed to strengthen the stability and heat dissipation performance of the battery cell, delay the aging process, and extend the service life of the battery, for better experience.',
      designToProduction: 'From Design to Production',
      designToProductionDesc: 'We always persist in excellence for sustainable development.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

