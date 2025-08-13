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
                <CardTitle className="text-turan-teal">İletişim Formu</CardTitle>
                <CardDescription>Bizimle iletişime geçmek için formu doldurun</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input id="name" placeholder="Adınızı ve soyadınızı girin" />
                </div>
                <div>
                  <Label htmlFor="email">E-posta</Label>
                  <Input id="email" type="email" placeholder="E-posta adresinizi girin" />
                </div>
                <div>
                  <Label htmlFor="subject">Konu</Label>
                  <Input id="subject" placeholder="Mesajınızın konusunu girin" />
                </div>
                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea id="message" placeholder="Mesajınızı yazın" rows={6} />
                </div>
                <Button className="w-full bg-turan-teal hover:bg-turan-teal/90 text-white">
                  Mesaj Gönder
                </Button>
              </CardContent>
            </Card>

            <Card className="border-turan-light/20">
              <CardHeader>
                <CardTitle className="text-turan-teal">{t('footerContact')}</CardTitle>
                <CardDescription>Bize ulaşabileceğiniz kanallar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-turan-teal">{t('address')}</h3>
                  <p className="text-foreground">
                    Örnek Mahallesi, Turan Caddesi No: 123<br/>
                    Çankaya/Ankara
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
                  <h3 className="font-semibold text-turan-teal">Çalışma Saatleri</h3>
                  <p className="text-foreground">
                    Pazartesi - Cuma: 09:00 - 17:00<br/>
                    Cumartesi: 09:00 - 13:00
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