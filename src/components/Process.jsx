import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'RESEARCH',
      hindi: 'खोज',
      desc: 'Deep archival references, cultural observation, aesthetic direction, and market contrast analysis.'
    },
    {
      num: '02',
      title: 'THINK',
      hindi: 'सोच',
      desc: 'Defining brand meaning, narrative core, editorial positioning, and tactile user journeys.'
    },
    {
      num: '03',
      title: 'MAKE',
      hindi: 'निर्माण',
      desc: 'Crafting bespoke visuals, typography systems, responsive web architectures, and high-retention content.'
    },
    {
      num: '04',
      title: 'REFINE',
      hindi: 'तराश',
      desc: 'Spring physics, micro-interactions, responsive typographic scales, performance profiling, and 60FPS polish.'
    },
    {
      num: '05',
      title: 'RELEASE',
      hindi: 'प्रसार',
      desc: 'Production deployment built for real-world traffic, conversion, and enduring cultural resonance.'
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative bg-studio-ivory border-t border-studio-maroon/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-studio-maroon/20 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-studio-maroon uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-studio-maroon" />
              <span>HOW WE MAKE · 05</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-studio-black tracking-tight">
              EDITORIAL CRAFT.<br />SYSTEMATIC BUILD.
            </h2>
          </div>
          <div className="max-w-md">
            {/* Neo-Vanguard Typographic Lockup Object */}
            <div className="p-4 rounded-md bg-studio-ivoryLight border border-studio-maroon/20 shadow-sm relative overflow-hidden mb-3 flex items-center justify-between gap-4">
              <div className="absolute top-1 right-2 font-mono text-[8px] text-studio-maroon/40 uppercase">
                ⌖ DUAL-CRAFT
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-devanagari text-2xl sm:text-3xl text-studio-maroon font-normal tracking-wide screenprint-shadow leading-tight">
                  “सोचा भी है।
                </span>
                <span className="font-devanagari text-2xl sm:text-3xl text-studio-black font-normal tracking-wide leading-tight">
                  बनाया भी है।”
                </span>
                <div className="mt-2 pt-1.5 border-t border-studio-maroon/15 font-mono text-[9px] text-studio-terracotta uppercase tracking-wider font-semibold">
                  CONCEIVED & CRAFTED UNDER ONE ROOF
                </div>
              </div>
              <div className="w-14 sm:w-16 h-18 sm:h-20 flex-shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                <img
                  src="/assets/illustrations/chai-glass.png"
                  alt="Cutting Chai Glass"
                  className="w-full h-full object-contain filter drop-shadow-sm hover:scale-105 transition-transform"
                  title="Cutting Chai ☕"
                />
              </div>
            </div>

            <p className="font-sans text-sm text-studio-black/70">
              No disconnected strategy decks. We conceive the idea and build the exact artifact ourselves.
            </p>
          </div>
        </div>

        {/* 5-Step Editorial Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-studio-ivoryLight border border-studio-maroon/20 relative group hover:border-studio-maroon transition-all flex flex-col justify-between"
            >
              {/* Top Step Number & Hindi Stamp */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-studio-maroon/15 mb-4">
                  <span className="font-mono text-xs font-bold text-studio-maroon tracking-wider">
                    {step.num} / 05
                  </span>
                  <span className="font-devanagari text-base text-studio-terracotta">
                    {step.hindi}
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-studio-black mb-3 tracking-wide group-hover:text-studio-maroon transition-colors">
                  {step.title}
                </h4>

                <p className="font-sans text-xs text-studio-black/75 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Decorative Measurement Tick */}
              <div className="pt-6 mt-6 border-t border-studio-maroon/10 flex items-center justify-between font-mono text-[9px] text-studio-black/40">
                <span>STAGE {step.num}</span>
                <span>✦</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Chai sticker — because हर process चाय पे चलता है — BADA & VISIBLE */}
      <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 w-24 sm:w-32 md:w-36 pointer-events-auto hidden sm:block">
        <img
          src="/assets/stickers/chai.png"
          alt=""
          className="w-full h-auto object-contain sticker opacity-85 hover:opacity-100 rotate-[-4deg] rounded-sm transition-all duration-300 filter drop-shadow-md hover:scale-105"
          title="चाय चाहिए? ☕"
        />
      </div>
    </section>
  );
}
