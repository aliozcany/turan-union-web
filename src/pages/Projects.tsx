import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: 'Turan Gençlik Eğitim Projesi',
      description: 'Turan coğrafyasındaki gençlerin eğitim seviyesini yükseltmeyi hedefleyen kapsamlı proje.',
      status: 'Devam Ediyor',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Kültürel Miras Koruma',
      description: 'Geleneksel el sanatları ve kültürel değerlerin korunması ve yaşatılması projesi.',
      status: 'Planlama Aşamasında',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Kardeş Şehirler İşbirliği',
      description: 'Turan şehirleri arasında ekonomik ve kültürel işbirliğini geliştirme projesi.',
      status: 'Tamamlandı',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('projects')}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow border-turan-light/20">
                <CardHeader>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-turan-teal">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{project.status}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{project.description}</p>
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

export default Projects;