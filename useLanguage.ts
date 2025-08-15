import { useState, useEffect } from 'react';
import { Language, DEFAULT_LANGUAGE } from '../utils/constants';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(DEFAULT_LANGUAGE);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = currentLanguage === 'en' ? 'bn' : 'en';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const getText = (en: string, bn: string) => {
    return currentLanguage === 'en' ? en : bn;
  };

  return {
    currentLanguage,
    toggleLanguage,
    getText
  };
}