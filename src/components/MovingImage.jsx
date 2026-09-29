import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ArrowUpRight, Play, Radio, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function MovingImage() {
  const channelUrl = 'https://youtube.com/@aviinash89';

  const topics = [
    { label: '4K INTERACTION BUILDS', desc: 'Step-by-step UI craftsmanship & motion' },
    { label: 'DESI DESIGN SYSTEMS', desc: 'Neo-vernacular typography & cultural aesthetics' },
    { label: 'CREATIVE DIRECTION', desc: 'Turning brand ideas into high-retention stories' },
    { label: 'AI WITHOUT NOISE', desc: 'Amplifying human taste with generative workflows' },
  ];

  return (
    <section id="moving-image" className="py-24 sm:py-32 relative bg-studio-ivoryLight border-t border-studio-maroon/20 overflow-hidden">
      {/* Background Archival Grid Motif */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#641F2B_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-studio-maroon/20 mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-studio-maroon uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-studio-maroon" />
              <span>MOVING IMAGE · 04</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-studio-black tracking-tight">
              THE WORK MOVES.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-base text-studio-black/75 leading-relaxed mb-3">
              Some things are better seen in motion. In-depth tutorials, real code breakdowns, and studio experiments.
            </p>
            <div className="font-devanagari text-lg text-studio-maroon font-medium">
              ध्वनि एवं चलचित्र — Avinash Studio Broadcasts
            </div>
          </div>
        </div>

        {/* Dedicated YouTube Channel Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl bg-studio-black text-studio-ivory overflow-hidden border border-studio-maroon/40 shadow-2xl"
        >
          {/* Subtle Archival Texture & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-studio-maroon/40 via-studio-black to-black opacity-90" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FAF5EE_1px,transparent_1px)] bg-[size:16px_16px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 lg:p-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Channel Tag Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 font-mono text-[11px] tracking-widest uppercase mb-6 backdrop-blur-sm">
                <Youtube size={16} className="text-red-500 animate-pulse" />
                <span>OFFICIAL YOUTUBE BROADCASTS</span>
              </div>

              {/* Title & Channel Handle */}
              <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-studio-ivory leading-[1.1] mb-4">
                AVINASH STUDIO <br />
                <span className="text-studio-mustard italic font-normal">ON YOUTUBE</span>
              </h3>

              <div className="font-mono text-xs sm:text-sm tracking-wider text-studio-ivory/70 mb-6 flex items-center gap-2">
                <span>CHANNEL:</span>
                <span className="text-studio-ivory font-bold bg-studio-maroon/60 px-2 py-0.5 rounded border border-studio-maroon">
                  @aviinash89
                </span>
                <span>·</span>
                <span className="text-studio-mustard font-devanagari text-base">देखने में simple. बनाने में नहीं.</span>
              </div>

              <p className="font-sans text-sm sm:text-base text-studio-ivory/80 leading-relaxed mb-8 max-w-xl">
                Watch full creative breakdowns, UI engineering demos, micro-interaction craftsmanship, and behind-the-scenes experiments exploring modern digital design and Indian visual culture.
              </p>

              {/* Key Topics / Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {topics.map((t, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-lg bg-studio-ivory/5 border border-studio-ivory/10 flex items-start gap-2.5 backdrop-blur-sm"
                  >
                    <span className="text-studio-mustard text-xs mt-0.5">✦</span>
                    <div>
                      <div className="font-mono text-[11px] font-semibold tracking-wider text-studio-ivory">
                        {t.label}
                      </div>
                      <div className="font-sans text-[11px] text-studio-ivory/60">
                        {t.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Channel Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-red-600/30 hover:scale-[1.02]"
                >
                  <Youtube size={20} className="fill-white" />
                  <span>SUBSCRIBE & WATCH ON YOUTUBE</span>
                  <ArrowUpRight size={16} />
                </a>

                <span className="font-mono text-[11px] text-studio-ivory/60 uppercase tracking-widest">
                  NEW EPISODES DROPPING
                </span>
              </div>

            </div>

            {/* Right Column: Vintage Painted Gramophone Illustration Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              
              {/* Outer Archival Postage Frame */}
              <div className="relative w-full max-w-sm aspect-square rounded-2xl bg-studio-maroonDark/60 border border-studio-maroon/50 p-6 flex flex-col items-center justify-between shadow-2xl backdrop-blur-md overflow-hidden group">
                
                {/* Vintage Circular Halo Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-studio-mustard/15 via-transparent to-black/60 pointer-events-none" />
                <div className="absolute -inset-4 bg-[radial-gradient(#CBB38B_1px,transparent_1px)] bg-[size:14px_14px] opacity-15 pointer-events-none" />

                {/* Card Top Label */}
                <div className="relative z-10 w-full flex items-center justify-between pb-3 border-b border-studio-ivory/15 font-mono text-[9px] tracking-widest text-studio-mustard uppercase">
                  <span>ACOUSTIC & MOTION</span>
                  <span>EST. 2026</span>
                </div>

                {/* Center Gramophone Illustration */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative cursor-pointer"
                  >
                    {/* The Vintage Indian Gramophone from assets/illustrations/ */}
                    <img
                      src="/assets/illustrations/gramophone.png"
                      alt="Vintage Desi Gramophone Illustration"
                      className="w-48 sm:w-56 h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_16px_32px_rgba(203,179,139,0.3)] transition-all duration-300"
                    />
                  </motion.div>

                  <div className="mt-4 text-center">
                    <span className="font-devanagari text-xl text-studio-mustard block font-medium">
                      ध्वनि एवं चित्र
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-studio-ivory/70 uppercase">
                      STUDIO BROADCAST CRAFT
                    </span>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="relative z-10 w-full pt-3 border-t border-studio-ivory/15 flex items-center justify-between font-mono text-[9px] text-studio-ivory/60">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    BROADCAST READY
                  </span>
                  <a
                    href={channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClickSound}
                    className="text-studio-mustard hover:underline font-semibold flex items-center gap-1"
                  >
                    @AVIINASH89 ↗
                  </a>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
