import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  const handleContactClick = () => {
    toast({
      title: "Contact Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const handleQuoteClick = () => {
    toast({
      title: "Quote Request Received!",
      description: "Our team will prepare a custom quote for you.",
    });
  };

  return (
    <div className="min-h-screen gradient-bg text-white overflow-hidden">
      <Navbar onQuoteClick={handleQuoteClick} />
      <HeroSection onContactClick={handleContactClick} />
      <FeaturesSection />
      <CapabilitiesSection onQuoteClick={handleQuoteClick} />
      <StatsSection />
      <AboutSection />
      <ContactSection onContactClick={handleContactClick} />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;