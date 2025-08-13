import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navbar
    home: 'Ana Sayfa',
    news: 'Haberler',
    about: 'Hakkımızda',
    projects: 'Projeler',
    events: 'Etkinlik Takvimi',
    membership: 'Üyelik',
    donate: 'Bağış Yap',
    contact: 'İletişim',
    
    // Home page
    welcome: 'Dünya Turan Birliği\'ne Hoş Geldiniz',
    subtitle: 'Turan halkları arasında kardeşlik, dayanışma ve işbirliğini güçlendiriyoruz',
    latestNews: 'Son Haberler',
    upcomingEvents: 'Gelecek Programlar',
    aboutUs: 'Hakkımızda',
    contactUs: 'İletişim',
    
    // Events
    eventDate: 'Tarih',
    eventLocation: 'Konum',
    viewDetails: 'Detayları Gör',
    
    // Footer
    footerAbout: 'Dünya Turan Birliği, Turan coğrafyasındaki halklar arasında kültürel, ekonomik ve sosyal bağları güçlendirmek amacıyla kurulmuş bir sivil toplum kuruluşudur.',
    footerContact: 'İletişim Bilgileri',
    phone: 'Telefon',
    email: 'E-posta',
    address: 'Adres'
  },
  en: {
    // Navbar
    home: 'Home',
    news: 'News',
    about: 'About Us',
    projects: 'Projects',
    events: 'Event Calendar',
    membership: 'Membership',
    donate: 'Donate',
    contact: 'Contact',
    
    // Home page
    welcome: 'Welcome to World Turan Union',
    subtitle: 'Strengthening brotherhood, solidarity and cooperation among Turkic peoples',
    latestNews: 'Latest News',
    upcomingEvents: 'Upcoming Events',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    
    // Events
    eventDate: 'Date',
    eventLocation: 'Location',
    viewDetails: 'View Details',
    
    // Footer
    footerAbout: 'World Turan Union is a civil society organization established to strengthen cultural, economic and social ties among the peoples of the Turan geography.',
    footerContact: 'Contact Information',
    phone: 'Phone',
    email: 'Email',
    address: 'Address'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['tr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};