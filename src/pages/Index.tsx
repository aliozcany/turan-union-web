import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import NewsPreview from '@/components/sections/NewsPreview';
import UpcomingEvents from '@/components/sections/UpcomingEvents';
import WorldMap from '@/components/sections/WorldMap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewsPreview />
      <UpcomingEvents />
      <WorldMap />
      <Footer />
    </div>
  );
};

export default Index;
