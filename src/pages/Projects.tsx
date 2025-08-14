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
      title: t('language') === 'tr' ? 'Turan Gençlik Eğitim Projesi' : 'Turan Youth Education Project',
      description: t('language') === 'tr' ? 'Turan coğrafyasındaki gençlerin eğitim seviyesini yükseltmeyi hedefleyen kapsamlı proje.' : 'Comprehensive project aimed at raising the education level of young people in Turan geography.',
      status: t('language') === 'tr' ? 'Devam Ediyor' : 'Ongoing',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: t('language') === 'tr' ? 'Kültürel Miras Koruma' : 'Cultural Heritage Protection',
      description: t('language') === 'tr' ? 'Geleneksel el sanatları ve kültürel değerlerin korunması ve yaşatılması projesi.' : 'Project for preserving and keeping alive traditional handicrafts and cultural values.',
      status: t('language') === 'tr' ? 'Planlama Aşamasında' : 'Planning Phase',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: t('language') === 'tr' ? 'Kardeş Şehirler İşbirliği' : 'Sister Cities Cooperation',
      description: t('language') === 'tr' ? 'Turan şehirleri arasında ekonomik ve kültürel işbirliğini geliştirme projesi.' : 'Project to develop economic and cultural cooperation between Turan cities.',
      status: t('language') === 'tr' ? 'Tamamlandı' : 'Completed',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('projectsTitle')}
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