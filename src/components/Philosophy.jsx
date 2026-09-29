import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  const quotes = [
    {
      en: 'WORK UNTIL THE WORK SPEAKS.',
      hi: 'काम बोलता है।',
      note: 'Output over claims.'
    },
    {
      en: 'THE STANDARD IS PERSONAL.',
      hi: 'बनाते रहो।',
      note: 'Enduring craft.'
    },
    {
      en: 'LESS TALK. MORE CRAFT.',
      hi: 'सीधा काम की बात।',
      note: 'Zero noise.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-studio-maroon text-studio-ivory overflow-hidden">
      {/* Background Archival Lotus Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 pointer-events-none">
        <img
          src="/assets/illustrations/lotus-variant.png"
          alt=""
          className="w-full h-full object-contain filter invert"
        />
      </div>

      {/* Toxic postage stamp — editorial rebel accent — BADA & VISIBLE */}
      <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-10 w-32 sm:w-44 md:w-52 pointer-events-auto hidden sm:block">
        <img
          src="/assets/stickers/toxic.png"
          alt=""
          className="w-full h-auto object-contain sticker opacity-80 hover:opacity-100 rotate-[4deg] rounded-sm transition-all duration-300 filter drop-shadow-lg hover:scale-105"
          title="तेज़ मिर्ची 🌶️"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Philosophy Manifesto */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-ivory/20 bg-studio-maroonDark font-mono text-[10px] tracking-[0.2em] uppercase text-studio-mustard mb-6">
            <span>STUDIO STANDARDS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 screenprint-shadow-mustard">
            “AI without taste is just{' '}
            <span className="text-studio-mustard italic underline decoration-studio-ivory/30 underline-offset-8">industrial noise.</span>”
          </h2>

          <div className="font-display text-2xl sm:text-3xl text-studio-ivory/90 mb-6 font-normal">
            We bring the taste.
          </div>

          <p className="font-sans text-base sm:text-xl text-studio-ivory/80 max-w-2xl leading-relaxed">
            Technology makes creation faster. Taste and direction decide whether it is worth seeing.
          </p>
        </div>

        {/* Attitude & Personality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-studio-ivory/20">
          {quotes.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg bg-studio-maroonDark/60 border border-studio-ivory/15 hover:border-studio-mustard/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-devanagari text-2xl sm:text-3xl text-studio-mustard mb-4 font-normal">
                  {q.hi}
                </div>
                <div className="font-serif text-lg font-bold text-studio-ivory tracking-wide mb-2">
                  {q.en}
                </div>
              </div>
              <div className="pt-4 border-t border-studio-ivory/10 font-mono text-[10px] text-studio-ivory/60 uppercase">
                {q.note}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
