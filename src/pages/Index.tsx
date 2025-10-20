import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SpecialistsSection from '@/components/sections/SpecialistsSection';
import DiagnosticsSection from '@/components/sections/DiagnosticsSection';
import DiseasesSection from '@/components/sections/DiseasesSection';
import BlogSection from '@/components/sections/BlogSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import AppointmentSection from '@/components/sections/AppointmentSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ServicesSection />
      <SpecialistsSection />
      <DiagnosticsSection />
      <DiseasesSection />
      <BlogSection />
      <ReviewsSection />
      <AppointmentSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
