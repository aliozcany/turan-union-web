import React from 'react';

const WorldMap = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-turan-teal">
          Turan Coğrafyası
        </h2>
        <div className="bg-turan-teal/10 rounded-lg p-8 text-center">
          <div className="w-full h-96 bg-turan-light/20 rounded-lg flex items-center justify-center">
            <p className="text-turan-teal text-lg">
              Dünya Haritası - Turan Devletleri
            </p>
          </div>
          <p className="mt-4 text-muted-foreground">
            Türkiye, Azerbaycan, Kazakistan, Kırgızistan, Özbekistan, Türkmenistan ve diğer Türk devletleri
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;