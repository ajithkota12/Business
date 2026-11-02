import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  type Language,
  type Translations,
  TRANSLATIONS,
  PRODUCT_TRANSLATIONS,
} from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  getProductTranslation: (productId: string) => {
    title: string;
    englishTitle: string;
    teluguTitle: string;
    description: string;
    ingredients?: string[];
  };
  getCategoryTranslation: (categoryId: string) => {
    label: string;
    description: string;
  };
  getDenominationLabel: (packetValue: string, hasOffer?: boolean) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'wholesale_app_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'te') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentT = TRANSLATIONS[language];

  const getProductTranslation = (productId: string) => {
    const p = PRODUCT_TRANSLATIONS[productId];
    if (!p) {
      return {
        title: '',
        englishTitle: '',
        teluguTitle: '',
        description: '',
      };
    }
    return {
      title: language === 'te' ? p.teluguTitle : p.englishTitle,
      englishTitle: p.englishTitle,
      teluguTitle: p.teluguTitle,
      description: language === 'te' ? p.teluguDesc : p.englishDesc,
      ingredients: p.teluguIngredients,
    };
  };

  const getCategoryTranslation = (categoryId: string) => {
    switch (categoryId) {
      case 'whole-spices':
        return {
          label: currentT.categoriesSection.wholeSpices,
          description: currentT.categoriesSection.wholeSpicesDesc,
        };
      case 'dry-fruits':
        return {
          label: currentT.categoriesSection.dryFruits,
          description: currentT.categoriesSection.dryFruitsDesc,
        };
      case 'blends-mixes':
        return {
          label: currentT.categoriesSection.blends,
          description: currentT.categoriesSection.blendsDesc,
        };
      case 'grocery-items':
        return {
          label: currentT.categoriesSection.groceries,
          description: currentT.categoriesSection.groceriesDesc,
        };
      case 'all':
      default:
        return {
          label: currentT.categoriesSection.all,
          description: currentT.categoriesSection.allDesc,
        };
    }
  };

  const getDenominationLabel = (packetValue: string, hasOffer?: boolean) => {
    if (language === 'te') {
      if (packetValue === '₹2') {
        return hasOffer ? '₹2 ప్యాకెట్ రకం (ప్రత్యేక ఆఫర్)' : '₹2 ప్యాకెట్ రకం';
      }
      if (packetValue === '₹5') return '₹5 ప్యాకెట్ రకం';
      if (packetValue === '₹10') return '₹10 ప్యాకెట్ రకం';
      return `${packetValue} ప్యాకెట్ రకం`;
    }
    if (packetValue === '₹2') {
      return hasOffer ? '₹2 Packet Variety (Special Offer)' : '₹2 Packet Variety';
    }
    if (packetValue === '₹5') return '₹5 Packet Variety';
    if (packetValue === '₹10') return '₹10 Packet Variety';
    return `${packetValue} Packet Variety`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: currentT,
        getProductTranslation,
        getCategoryTranslation,
        getDenominationLabel,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
