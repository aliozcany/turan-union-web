import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <nav className="bg-turan-teal shadow-lg border-b border-turan-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/aafe69ca-6636-4732-a1d3-ffa402adebbb.png" 
              alt="Dünya Turan Birliği" 
              className="h-12 w-12"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('home')}
              </a>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('news')}
              </a>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('about')}
              </a>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('projects')}
              </a>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('events')}
              </a>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('membership')}
              </a>
              <Button 
                variant="secondary" 
                size="sm" 
                className="bg-turan-red hover:bg-turan-red/90 text-white border-none"
              >
                {t('donate')}
              </Button>
              <a href="#" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('contact')}
              </a>
              
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-white hover:text-turan-gold hover:bg-turan-light/20"
              >
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-white hover:text-turan-gold hover:bg-turan-light/20"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;