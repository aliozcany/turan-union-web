import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('aboutTitle')}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                {t('aboutContent')}
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                {t('language') === 'tr' 
                  ? 'Amacımız, ortak tarih, kültür ve değerlere sahip Türk halklarının bir araya gelmesini sağlamak, kültürel mirasımızı korumak ve gelecek nesillere aktarmaktır.'
                  : 'Our aim is to bring together Turkic peoples with common history, culture and values, preserve our cultural heritage and pass it on to future generations.'
                }
              </p>
              <h2 className="text-2xl font-bold mb-4 text-turan-teal">
                {t('language') === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h2>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                {t('language') === 'tr' ? (
                  <>
                    <li>Turan coğrafyasındaki halklar arasında kültürel bağları güçlendirmek</li>
                    <li>Ortak tarih ve kültürümüzü yaşatmak</li>
                    <li>Eğitim ve kültür alanında işbirliği projeler geliştirmek</li>
                    <li>Gençler arası etkileşimi artırmak</li>
                  </>
                ) : (
                  <>
                    <li>Strengthening cultural ties among peoples in Turan geography</li>
                    <li>Keeping our common history and culture alive</li>
                    <li>Developing cooperation projects in education and culture</li>
                    <li>Increasing interaction among youth</li>
                  </>
                )}
              </ul>
              <h2 className="text-2xl font-bold mb-4 text-turan-teal">
                {t('language') === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                {t('language') === 'tr' 
                  ? 'Turan halklarının birlik ve beraberlik içinde, ortak değerler etrafında buluştuğu güçlü bir toplum oluşturmak.'
                  : 'To create a strong society where Turkic peoples unite in unity and solidarity around common values.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;