import React from 'react';
import { ArrowUp, Youtube, Mail, Phone } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-studio-black text-studio-ivory pt-20 pb-12 border-t border-studio-maroon/40 relative overflow-hidden">
      
      {/* Background Archival Graphic Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-80 h-80">
        <img
          src="/assets/illustrations/sunburst.png"
          alt=""
          className="w-full h-full object-contain filter invert"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-studio-ivory/15">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              {/* Reverse Wordmark */}
              <div className="w-56 mb-6">
                <img
                  src="/assets/brand/wordmark-reverse.png"
                  alt="Avinash Studio"
                  className="w-full object-contain drop-shadow"
                />
              </div>

              <p className="font-sans text-sm text-studio-ivory/70 max-w-sm leading-relaxed mb-6">
                Independent Digital Creative Studio crafting bespoke websites, high-hook UGC visuals, and AI-powered systems.
              </p>

              <div className="font-devanagari text-xl text-studio-mustard/90 mb-4">
                “थोड़ा देसी। थोड़ा अलग।”
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-studio-ivory/10 border border-studio-ivory/15 font-mono text-[10px] tracking-widest text-studio-mustard uppercase">
                MADE IN INDIA · EST. 2026
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-studio-ivory/50 mb-6 pb-2 border-b border-studio-ivory/10">
              INDEX
            </div>
            <ul className="space-y-3 font-mono text-xs">
              {[
                { name: 'SELECTED BUILDS', href: '#work' },
                { name: 'CREATOR LAB / UGC', href: '#creator-lab' },
                { name: 'MOVING IMAGE', href: 'https://youtube.com/@aviinash89', external: true },
                { name: 'STUDIO PROCESS', href: '#process' },
                { name: 'CAPABILITIES', href: '#services' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    rel={item.external ? 'noopener noreferrer' : ''}
                    onMouseEnter={playHoverSound}
                    className="text-studio-ivory/80 hover:text-studio-mustard transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-studio-terracotta group-hover:translate-x-1 transition-transform">→</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-studio-ivory/50 mb-6 pb-2 border-b border-studio-ivory/10">
              CONNECT
            </div>
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="block text-studio-ivory/50 text-[10px] mb-1">CREATOR</span>
                <span className="text-studio-ivory font-semibold text-sm">Avinash</span>
              </div>

              <div>
                <span className="block text-studio-ivory/50 text-[10px] mb-1 font-devanagari">सीधा ईमेल</span>
                <a
                  href="mailto:avinashkr502080@gmail.com"
                  onClick={playClickSound}
                  className="text-studio-mustard hover:underline flex items-center gap-1.5 font-mono text-xs"
                  title="ईमेल भेजें"
                >
                  <Mail size={13} />
                  <span>CLICK TO EMAIL ↗</span>
                </a>
              </div>

              <div>
                <span className="block text-studio-ivory/50 text-[10px] mb-1 font-devanagari">फोन / बातचीत</span>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <a
                    href="tel:+918920636919"
                    onClick={playClickSound}
                    className="text-studio-ivory hover:text-studio-mustard font-bold tracking-wider"
                  >
                    8920636919
                  </a>
                  <span className="text-studio-ivory/30">·</span>
                  <a
                    href="https://wa.me/918920636919"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-emerald-400 hover:text-emerald-300 font-semibold"
                  >
                    WA 💬
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-studio-ivory/50 text-[10px] mb-1">YOUTUBE ARCHIVE</span>
                <a
                  href="https://youtube.com/@aviinash89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-ivory/90 hover:text-red-400 flex items-center gap-2"
                >
                  <Youtube size={14} className="text-red-500" />
                  <span>@aviinash89</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 🛺 Rickshaw — desi easter egg at the very bottom — BADA & VISIBLE */}
        <div className="flex justify-center py-6 opacity-70 hover:opacity-100 transition-all duration-300">
          <img
            src="/assets/stickers/rickshaw.png"
            alt=""
            className="w-32 sm:w-44 h-auto object-contain sticker filter drop-shadow-md hover:scale-105 transition-transform"
            title="सफ़र जारी है 🛺"
          />
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-studio-ivory/50">
          <div>
            © {new Date().getFullYear()} AVINASH STUDIO. ALL RIGHTS RESERVED.
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={playHoverSound}
            className="flex items-center gap-2 text-studio-ivory/70 hover:text-studio-mustard transition-colors group"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full border border-studio-ivory/20 flex items-center justify-center group-hover:border-studio-mustard group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={13} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
