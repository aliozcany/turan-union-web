import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Donate = () => {
  const { t } = useLanguage();

  const donationAmounts = [100, 250, 500, 1000, 2500, 5000];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('donateTitle')}
          </h1>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-turan-light/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-turan-teal">
                  {t('language') === 'tr' ? 'Desteğinizle Gücümüze Güç Katın' : 'Add Strength to Our Power with Your Support'}
                </CardTitle>
                <CardDescription className="text-lg">
                  {t('language') === 'tr' 
                    ? 'Turan halklarının birlik ve beraberliğini güçlendirmek için bağışlarınıza ihtiyacımız var'
                    : 'We need your donations to strengthen the unity and solidarity of Turkic peoples'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      className="h-16 text-lg border-turan-teal text-turan-teal hover:bg-turan-teal hover:text-white"
                    >
                      {amount} TL
                    </Button>
                  ))}
                </div>
                <div className="text-center">
                  <Button className="bg-turan-red hover:bg-turan-red/90 text-white px-8 py-3 text-lg">
                    {t('donateButton')}
                  </Button>
                </div>
                <div className="mt-8 p-4 bg-turan-light/10 rounded-lg">
                  <h3 className="font-bold text-turan-teal mb-2">
                    {t('language') === 'tr' ? 'Banka Bilgileri' : 'Bank Information'}
                  </h3>
                  <p className="text-foreground">
                    <strong>
                      {t('language') === 'tr' ? 'Hesap Adı:' : 'Account Name:'}
                    </strong> {t('language') === 'tr' ? 'Dünya Turan Birliği' : 'World Turan Union'}<br/>
                    <strong>IBAN:</strong> TR00 0000 0000 0000 0000 0000 00<br/>
                    <strong>
                      {t('language') === 'tr' ? 'Banka:' : 'Bank:'}
                    </strong> {t('language') === 'tr' ? 'Örnek Bankası' : 'Sample Bank'}
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

export default Donate;