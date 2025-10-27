"use client";

import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import DemoSection from './DemoSection';
import AccessibilitySection from './AccessibilitySection';
import DownloadSection from './DownloadSection';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <AccessibilitySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
