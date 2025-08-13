import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-turan-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('aboutUs')}</h3>
            <p className="text-white/90 leading-relaxed">
              {t('footerAbout')}
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-turan-gold" />
                <span>+90 (212) 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-turan-gold" />
                <span>info@dunyaturanbirligi.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-turan-gold" />
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2025 Dünya Turan Birliği. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;