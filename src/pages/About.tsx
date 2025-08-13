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
            {t('about')}
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Dünya Turan Birliği, Turan coğrafyasındaki halklar arasında kardeşlik, dayanışma ve işbirliğini güçlendirmek amacıyla kurulmuş bir sivil toplum kuruluşudur.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Amacımız, ortak tarih, kültür ve değerlere sahip Türk halklarının bir araya gelmesini sağlamak, kültürel mirasımızı korumak ve gelecek nesillere aktarmaktır.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-turan-teal">Misyonumuz</h2>
              <ul className="list-disc pl-6 mb-6 text-foreground">
                <li>Turan coğrafyasındaki halklar arasında kültürel bağları güçlendirmek</li>
                <li>Ortak tarih ve kültürümüzü yaşatmak</li>
                <li>Eğitim ve kültür alanında işbirliği projeler geliştirmek</li>
                <li>Gençler arası etkileşimi artırmak</li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 text-turan-teal">Vizyonumuz</h2>
              <p className="text-lg leading-relaxed text-foreground">
                Turan halklarının birlik ve beraberlik içinde, ortak değerler etrafında buluştuğu güçlü bir toplum oluşturmak.
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