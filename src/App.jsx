import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import SelectedWork from './components/SelectedWork';
import CreatorLab from './components/CreatorLab';
import MovingImage from './components/MovingImage';
import Process from './components/Process';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-studio-ivory text-studio-black selection:bg-studio-maroon selection:text-studio-ivory">
      {/* Subtle Archival Paper Texture Noise */}
      <div className="paper-overlay" />

      {/* Tactile Branded Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <Statement />
        <SelectedWork />
        <CreatorLab />
        <MovingImage />
        <Process />
        <Philosophy />
        <Services onOpenContact={() => setContactModalOpen(true)} />
        <ContactSection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
