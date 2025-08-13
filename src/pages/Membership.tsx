import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Membership = () => {
  const { t } = useLanguage();

  const membershipTypes = [
    {
      type: 'Bireysel Üyelik',
      price: '100 TL/Yıl',
      benefits: [
        'Etkinliklere öncelikli katılım',
        'Dernek yayınlarına erişim',
        'Aylık bülten',
        'Özel etkinlik davetleri'
      ]
    },
    {
      type: 'Kurumsal Üyelik',
      price: '500 TL/Yıl',
      benefits: [
        'Tüm bireysel üyelik hakları',
        'Proje ortaklığı fırsatları',
        'Kurumsal tanıtım imkanı',
        'Özel danışmanlık hizmetleri'
      ]
    },
    {
      type: 'Destekleyici Üyelik',
      price: '1000 TL/Yıl',
      benefits: [
        'Tüm üyelik hakları',
        'Yönetim kurulu toplantılarına katılım',
        'Özel etkinlik düzenleme',
        'Dernek faaliyetlerinde söz hakkı'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('membership')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-turan-light/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-turan-teal text-xl">{membership.type}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-turan-red">{membership.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {membership.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-foreground">
                        <span className="w-2 h-2 bg-turan-teal rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-turan-teal hover:bg-turan-teal/90 text-white">
                    Üye Ol
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Membership;