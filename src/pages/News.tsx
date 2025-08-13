import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const News = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: 'Turan Kültür Festivali 2025',
      description: 'Geleneksel kültürümüzü yaşatmak için düzenlenen festival. Bu yıl 15 ülkeden sanatçılar katılacak.',
      date: '15 Ocak 2025',
      image: '/placeholder.svg',
      content: 'Turan coğrafyasının zengin kültürel mirasını yaşatmak amacıyla düzenlenen festival...'
    },
    {
      id: 2,
      title: 'Eğitim Projesi Başladı',
      description: 'Gençler için düzenlenen eğitim programı başarıyla hayata geçirildi.',
      date: '10 Ocak 2025',
      image: '/placeholder.svg',
      content: 'Turan gençlerinin eğitim seviyesini yükseltmek için başlatılan proje...'
    },
    {
      id: 3,
      title: 'Kardeş Şehirler Buluşması',
      description: 'Turan coğrafyasındaki şehirler arasında işbirliği protokolü imzalandı.',
      date: '5 Ocak 2025',
      image: '/placeholder.svg',
      content: 'Kardeş şehirler arasında kültürel ve ekonomik işbirliğini artırma projesi...'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('news')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow border-turan-light/20">
                <CardHeader>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-turan-teal">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{item.description}</p>
                  <Button variant="outline" className="border-turan-teal text-turan-teal hover:bg-turan-teal hover:text-white">
                    {t('viewDetails')}
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

export default News;