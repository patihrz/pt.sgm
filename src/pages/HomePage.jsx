// File: src/pages/HomePage.jsx
import React from 'react';
import PageLayout from '@/components/shared/PageLayout';
import HeroSection from '@/components/features/homepage/HeroSection';
import ServicesHighlight from '@/components/features/homepage/ServicesHighlight';
import WhyChooseUs from '@/components/features/homepage/WhyChooseUs';
import ClientLogos from '@/components/features/homepage/ClientLogos'; // <-- 1. Import komponen baru

const HomePage = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesHighlight />
      <WhyChooseUs />
      <ClientLogos /> {/* <-- 2. Tambahkan section baru di sini */}
      {/* <TestimonialsSection /> */}
      {/* <CallToActionSection /> */}
    </PageLayout>
  );
};

export default HomePage;