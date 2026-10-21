/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HireBestCabSection from './components/HireBestCabSection';
import ServicesSection from './components/ServicesSection';
import PopularRoutesSection from './components/PopularRoutesSection';
import CarOptionsSection from './components/CarOptionsSection';
import FinalCTASection from './components/FinalCTASection';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white antialiased">
      {/* Top Header Bar with Instant Phone Number */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero section with phone number and Call Now button */}
        <HeroSection />

        {/* 2. Hire the Best Cab Services in Mohali - Featured Visual Banner */}
        <HireBestCabSection />

        {/* 3. Local & Outstation Cab Services */}
        <ServicesSection />

        {/* 3. Popular Routes */}
        <PopularRoutesSection />

        {/* 4. Car options: Swift Dzire, Sedan, SUV and Hatchback */}
        <CarOptionsSection />

        {/* 5. Final Call Now and WhatsApp CTA */}
        <FinalCTASection />
      </main>

      {/* Floating WhatsApp button on the right */}
      <FloatingWhatsApp />

      {/* Sticky Bottom Bar for Mobile Visitors from Google Ads */}
      <StickyMobileBar />
    </div>
  );
}
