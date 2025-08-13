import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-turan-teal to-turan-light text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('welcome')}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;