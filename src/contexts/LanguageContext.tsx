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
    address: 'Adres',
    
    // Pages
    aboutTitle: 'Hakkımızda',
    aboutDescription: 'Dünya Turan Birliği Hakkında',
    aboutContent: 'Dünya Turan Birliği, Turan coğrafyasındaki kardeş halklar arasında kültürel, ekonomik ve sosyal bağları güçlendirmek amacıyla kurulmuş bir sivil toplum kuruluşudur.',
    
    projectsTitle: 'Projelerimiz',
    projectsDescription: 'Toplumsal kalkınma için yürüttüğümüz projeler',
    
    donateTitle: 'Bağış Yapın',
    donateDescription: 'Projelerimize destek olun',
    donateAmount: 'Bağış Miktarı',
    donateButton: 'Bağış Yap',
    
    membershipTypes: 'Üyelik Türleri',
    individualMembership: 'Bireysel Üyelik',
    corporateMembership: 'Kurumsal Üyelik',
    supporterMembership: 'Destekleyici Üyelik',
    joinNow: 'Üye Ol',
    
    contactForm: 'İletişim Formu',
    contactFormDescription: 'Bizimle iletişime geçmek için formu doldurun',
    nameLabel: 'Ad Soyad',
    namePlaceholder: 'Adınızı ve soyadınızı girin',
    emailLabel: 'E-posta',
    emailPlaceholder: 'E-posta adresinizi girin',
    subjectLabel: 'Konu',
    subjectPlaceholder: 'Mesajınızın konusunu girin',
    messageLabel: 'Mesaj',
    messagePlaceholder: 'Mesajınızı yazın',
    sendMessage: 'Mesaj Gönder',
    workingHours: 'Çalışma Saatleri',
    workingHoursDetail: 'Pazartesi - Cuma: 09:00 - 17:00\nCumartesi: 09:00 - 13:00',
    
    // Admin Panel
    adminPanel: 'Yönetim Paneli',
    addNews: 'Haber Ekle',
    addProject: 'Proje Ekle',
    newsManagement: 'Haber Yönetimi',
    projectManagement: 'Proje Yönetimi',
    title: 'Başlık',
    titlePlaceholder: 'Başlık girin',
    description: 'Açıklama',
    descriptionPlaceholder: 'Açıklama girin',
    content: 'İçerik',
    contentPlaceholder: 'İçerik yazın',
    image: 'Resim',
    imagePlaceholder: 'Resim URL\'si girin',
    save: 'Kaydet',
    cancel: 'İptal',
    status: 'Durum',
    selectStatus: 'Durum seçin',
    ongoing: 'Devam Ediyor',
    completed: 'Tamamlandı',
    planning: 'Planlama Aşamasında'
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
    address: 'Address',
    
    // Pages
    aboutTitle: 'About Us',
    aboutDescription: 'About World Turan Union',
    aboutContent: 'World Turan Union is a civil society organization established to strengthen cultural, economic and social ties among the brotherly peoples of the Turan geography.',
    
    projectsTitle: 'Our Projects',
    projectsDescription: 'Projects we carry out for social development',
    
    donateTitle: 'Make a Donation',
    donateDescription: 'Support our projects',
    donateAmount: 'Donation Amount',
    donateButton: 'Donate',
    
    membershipTypes: 'Membership Types',
    individualMembership: 'Individual Membership',
    corporateMembership: 'Corporate Membership',
    supporterMembership: 'Supporter Membership',
    joinNow: 'Join Now',
    
    contactForm: 'Contact Form',
    contactFormDescription: 'Fill out the form to contact us',
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email address',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Enter the subject of your message',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message',
    sendMessage: 'Send Message',
    workingHours: 'Working Hours',
    workingHoursDetail: 'Monday - Friday: 09:00 - 17:00\nSaturday: 09:00 - 13:00',
    
    // Admin Panel
    adminPanel: 'Admin Panel',
    addNews: 'Add News',
    addProject: 'Add Project',
    newsManagement: 'News Management',
    projectManagement: 'Project Management',
    title: 'Title',
    titlePlaceholder: 'Enter title',
    description: 'Description',
    descriptionPlaceholder: 'Enter description',
    content: 'Content',
    contentPlaceholder: 'Write content',
    image: 'Image',
    imagePlaceholder: 'Enter image URL',
    save: 'Save',
    cancel: 'Cancel',
    status: 'Status',
    selectStatus: 'Select status',
    ongoing: 'Ongoing',
    completed: 'Completed',
    planning: 'Planning Phase'
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