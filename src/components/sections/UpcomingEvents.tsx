import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const UpcomingEvents = () => {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: 'Turan Gençlik Zirvesi',
      date: '25 Şubat 2025',
      location: 'İstanbul, Türkiye',
      description: 'Turan coğrafyasından gençlerin bir araya geldiği etkinlik'
    },
    {
      id: 2,
      title: 'Kültür ve Sanat Semineri',
      date: '15 Mart 2025',
      location: 'Ankara, Türkiye',
      description: 'Geleneksel sanatlarımızı koruma üzerine seminer'
    },
    {
      id: 3,
      title: 'Ekonomik İşbirliği Forumu',
      date: '10 Nisan 2025',
      location: 'Astana, Kazakistan',
      description: 'Turan devletleri arasında ekonomik işbirliği'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-turan-teal">
          {t('upcomingEvents')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow border-turan-light/20">
              <CardHeader>
                <CardTitle className="text-turan-teal">{event.title}</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm space-y-1 flex-col items-start">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">{event.description}</p>
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

export default UpcomingEvents;