import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('contact')}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-turan-light/20">
              <CardHeader>
                <CardTitle className="text-turan-teal">{t('contactForm')}</CardTitle>
                <CardDescription>{t('contactFormDescription')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">{t('nameLabel')}</Label>
                  <Input id="name" placeholder={t('namePlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="email">{t('emailLabel')}</Label>
                  <Input id="email" type="email" placeholder={t('emailPlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="subject">{t('subjectLabel')}</Label>
                  <Input id="subject" placeholder={t('subjectPlaceholder')} />
                </div>
                <div>
                  <Label htmlFor="message">{t('messageLabel')}</Label>
                  <Textarea id="message" placeholder={t('messagePlaceholder')} rows={6} />
                </div>
                <Button className="w-full bg-turan-teal hover:bg-turan-teal/90 text-white">
                  {t('sendMessage')}
                </Button>
              </CardContent>
            </Card>

            <Card className="border-turan-light/20">
              <CardHeader>
                <CardTitle className="text-turan-teal">{t('footerContact')}</CardTitle>
                <CardDescription>
                  {t('language') === 'tr' ? 'Bize ulaşabileceğiniz kanallar' : 'Channels you can reach us'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-turan-teal">{t('address')}</h3>
                  <p className="text-foreground">
                    {t('language') === 'tr' 
                      ? 'Örnek Mahallesi, Turan Caddesi No: 123\nÇankaya/Ankara'
                      : 'Sample District, Turan Street No: 123\nÇankaya/Ankara'
                    }
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-turan-teal">{t('phone')}</h3>
                  <p className="text-foreground">+90 312 123 45 67</p>
                </div>
                <div>
                  <h3 className="font-semibold text-turan-teal">{t('email')}</h3>
                  <p className="text-foreground">info@dunyaturanbirligi.org</p>
                </div>
                <div>
                  <h3 className="font-semibold text-turan-teal">{t('workingHours')}</h3>
                  <p className="text-foreground">
                    {t('workingHoursDetail')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;