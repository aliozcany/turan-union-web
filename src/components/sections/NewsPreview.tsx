import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsPreview = () => {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      title: 'Turan Kültür Festivali 2025',
      description: 'Geleneksel kültürümüzü yaşatmak için düzenlenen festival...',
      date: '15 Ocak 2025',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Eğitim Projesi Başladı',
      description: 'Gençler için düzenlenen eğitim programı...',
      date: '10 Ocak 2025',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Kardeş Şehirler Buluşması',
      description: 'Turan coğrafyasındaki şehirler arasında işbirliği...',
      date: '5 Ocak 2025',
      image: '/placeholder.svg'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-turan-teal">
          {t('latestNews')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </section>
  );
};

export default NewsPreview;