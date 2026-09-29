import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { playClickSound, playHoverSound, toggleSound, isSoundEnabled } from '../utils/sound';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClickSound();
  };

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CREATOR LAB', href: '#creator-lab' },
    { name: 'STUDIO', href: '#studio' },
    { name: 'PROCESS', href: '#process' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    playClickSound();
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-studio-ivory/90 backdrop-blur-md border-b border-studio-maroon/15 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark / Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              playClickSound();
            }}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 rounded border border-studio-maroon/40 flex items-center justify-center bg-studio-ivoryLight overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/assets/brand/monogram-as-stamp.png"
                alt="AS Monogram"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider text-studio-maroon leading-none">
                AVINASH STUDIO
              </span>
              <span className="font-mono text-[9px] tracking-widest text-studio-black/60 uppercase">
                DIGITAL CRAFT · EST. 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={playHoverSound}
                className="font-mono text-[11px] font-medium tracking-[0.18em] text-studio-black/80 hover:text-studio-maroon transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-studio-maroon transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Sound Toggle + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleAudio}
              onMouseEnter={playHoverSound}
              aria-label="Toggle Sound Effects"
              title={soundOn ? 'Sound On' : 'Sound Muted'}
              className="p-2 rounded-full border border-studio-maroon/20 hover:border-studio-maroon text-studio-maroon/80 hover:text-studio-maroon transition-all hover:scale-105 active:scale-95"
            >
              {soundOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Start a Project CTA Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-sm bg-studio-maroon text-studio-ivory font-mono text-[11px] font-medium tracking-wider hover:bg-studio-maroonDark transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-stamp"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={13} className="text-studio-mustard" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Menu"
              className="md:hidden p-2 text-studio-maroon hover:text-studio-black transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[60px] z-40 bg-studio-ivory/98 backdrop-blur-xl md:hidden px-8 py-10 flex flex-col justify-between border-b border-studio-maroon/20"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[10px] tracking-widest text-studio-maroon/60 uppercase pb-2 border-b border-studio-maroon/10">
                NAVIGATION
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-display text-2xl tracking-wide text-studio-black hover:text-studio-maroon transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-studio-terracotta">→</span>
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-studio-maroon/15 flex flex-col gap-4">
              <button
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 bg-studio-maroon text-studio-ivory font-mono text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 rounded-sm shadow-stamp"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={15} />
              </button>
              <div className="text-center font-devanagari text-sm text-studio-maroon/70">
                “थोड़ा देसी। थोड़ा अलग।”
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
