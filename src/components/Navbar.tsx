import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <nav className="bg-turan-teal shadow-lg border-b border-turan-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/aafe69ca-6636-4732-a1d3-ffa402adebbb.png" 
              alt="Dünya Turan Birliği" 
              className="h-14 w-14"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('home')}
              </Link>
              <Link to="/news" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('news')}
              </Link>
              <Link to="/about" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('about')}
              </Link>
              <Link to="/projects" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('projects')}
              </Link>
              <Link to="/events" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('events')}
              </Link>
              <Link to="/membership" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('membership')}
              </Link>
              <Link to="/donate">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="bg-turan-red hover:bg-turan-red/90 text-white border-none"
                >
                  {t('donate')}
                </Button>
              </Link>
              <Link to="/contact" className="text-white hover:text-turan-gold px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {t('contact')}
              </Link>
              
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