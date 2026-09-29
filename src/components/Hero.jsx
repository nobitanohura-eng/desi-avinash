import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';
import ThodaDesiLockup from './typography/ThodaDesiLockup';

export default function Hero({ onOpenContact }) {
  const scrollToWork = () => {
    playClickSound();
    const elem = document.querySelector('#work');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      {/* 🌶️ Nimbu-Mirchi Nazar Suraksha — hanging from top like a real doorway talisman */}
      <div className="absolute top-0 right-[10%] sm:right-[16%] z-20 pointer-events-none flex flex-col items-center">
        {/* Top nail/pin */}
        <div className="w-2.5 h-2.5 rounded-full bg-studio-black border border-studio-mustard shadow-sm" />
        {/* The thread/string */}
        <div className="w-[1.5px] h-20 sm:h-28 bg-studio-black/40" />
        {/* The nimbu-mirchi itself, swinging with confident presence */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="nimbu-mirchi-hang"
        >
          <img
            src="/assets/stickers/nimbu-mirchi.png"
            alt="Nimbu Mirchi — nazar na lage"
            className="w-24 sm:w-32 md:w-36 h-auto object-contain sticker cursor-pointer pointer-events-auto filter drop-shadow-md hover:scale-105 transition-transform"
            title="नज़र न लगे 🌶️"
          />
        </motion.div>
      </div>

      {/* Background Architectural & Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 flex justify-between border-x border-studio-maroon/10">
          <div className="w-[1px] h-full bg-studio-maroon/5 hidden lg:block" />
          <div className="w-[1px] h-full bg-studio-maroon/5 hidden md:block" />
          <div className="w-[1px] h-full bg-studio-maroon/5 hidden lg:block" />
        </div>
      </div>

      {/* Decorative Archival Corner Motifs */}
      <div className="absolute top-28 left-6 sm:left-12 pointer-events-none opacity-25">
        <img
          src="/assets/illustrations/four-petal-rosette.png"
          alt=""
          className="w-10 h-10 object-contain animate-spin-slow"
        />
      </div>
      <div className="absolute top-28 right-6 sm:right-12 pointer-events-none opacity-25">
        <img
          src="/assets/illustrations/indian-star.png"
          alt=""
          className="w-10 h-10 object-contain animate-spin-slow"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Hierarchy & Copy */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Top Micro-Metadata Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-studio-maroon/25 bg-studio-ivoryLight/80 text-studio-maroon font-mono text-[11px] tracking-widest uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-studio-terracotta animate-pulse" />
                <span>INDEPENDENT DIGITAL STUDIO</span>
              </div>
              <div className="font-mono text-[11px] tracking-wider text-studio-black/50 hidden sm:inline-block">
                WEB · UGC · CREATIVE · AI
              </div>
            </motion.div>

            {/* Neo-Vanguard Indian Typographic Artwork Object */}
            <ThodaDesiLockup className="mb-6" />

            {/* Hero Main Statement (Awwwards Grade Editorial Typography) */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold text-studio-black tracking-[-0.02em] leading-[1.08] mb-6 max-w-4xl"
            >
              AI without taste is just{' '}
              <span className="italic font-normal text-studio-maroon underline decoration-studio-mustard/60 underline-offset-8">
                industrial noise.
              </span>
            </motion.h1>

            {/* Editorial Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-base sm:text-xl text-studio-black/75 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              We design digital experiences, brand worlds and content that feel{' '}
              <strong className="font-semibold text-studio-black">made</strong> — not manufactured. Modern digital craft with a desi soul.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <button
                onClick={scrollToWork}
                onMouseEnter={playHoverSound}
                className="group px-7 py-3.5 bg-studio-maroon hover:bg-studio-maroonDark text-studio-ivory font-mono text-xs font-semibold tracking-[0.16em] uppercase rounded-sm flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-stamp"
              >
                <span>VIEW THE WORK</span>
                <ArrowDown size={14} className="transition-transform group-hover:translate-y-1 text-studio-mustard" />
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onOpenContact();
                }}
                onMouseEnter={playHoverSound}
                className="group px-7 py-3.5 border border-studio-maroon/30 hover:border-studio-maroon bg-studio-ivoryLight/60 hover:bg-studio-ivoryLight text-studio-black font-mono text-xs font-semibold tracking-[0.16em] uppercase rounded-sm flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={14} className="text-studio-terracotta transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Branded Stamp Seal & Visual Identity Focal Point */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Decorative Archival Framing Card */}
              <div className="w-72 sm:w-80 p-6 rounded-md bg-studio-ivoryLight border border-studio-maroon/20 shadow-archival relative overflow-hidden group">
                
                {/* Evil Eye — nazar battu tucked at corner */}
                <div className="absolute -top-4 -left-4 w-14 h-14 z-20 pointer-events-auto">
                  <img
                    src="/assets/stickers/evil-eye.png"
                    alt=""
                    className="w-full h-full object-contain sticker rounded-full opacity-90 hover:opacity-100 filter drop-shadow-md hover:scale-110 transition-transform"
                    title="नज़र हटाओ 🧿"
                  />
                </div>
                {/* Subtle Postage Stamp Outer Border */}
                <div className="absolute inset-2 border border-dashed border-studio-maroon/25 pointer-events-none rounded-sm" />

                {/* Top Label */}
                <div className="flex justify-between items-center pb-3 border-b border-studio-maroon/15 mb-4 font-mono text-[10px] tracking-widest text-studio-maroon">
                  <span>SERIES NO. 2026</span>
                  <span>NEW DELHI · IN</span>
                </div>

                {/* Center Lotus Emblem Art */}
                <div className="relative py-4 flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative cursor-pointer"
                  >
                    <img
                      src="/assets/illustrations/lotus-emblem.png"
                      alt="Avinash Studio Lotus Emblem"
                      className="w-44 h-32 object-contain drop-shadow-sm"
                    />
                  </motion.div>
                  <div className="mt-3 text-center">
                    <span className="font-display text-lg tracking-wider text-studio-maroon block">
                      AVINASH STUDIO
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-studio-black/60 uppercase">
                      HANDCRAFTED DIGITAL ARTIFACTS
                    </span>
                  </div>
                </div>

                {/* Bottom Hindi Cursive Tag */}
                <div className="pt-3 border-t border-studio-maroon/15 mt-3 flex justify-between items-center">
                  <span className="font-hand text-xl text-studio-forest">
                    बनाते रहो!
                  </span>
                  <div className="w-6 h-6 rounded-full border border-studio-maroon/30 flex items-center justify-center font-mono text-[8px] text-studio-maroon">
                    AS
                  </div>
                </div>
              </div>

              {/* Floating Round Seal */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -right-6 w-20 h-20 pointer-events-none drop-shadow-md hidden sm:block"
              >
                <img
                  src="/assets/brand/round-seal.png"
                  alt="Avinash Studio Round Seal"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full mt-12 pt-6 border-t border-studio-maroon/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-studio-black/60">
        <div className="flex items-center gap-4">
          <span className="text-studio-maroon">01 / OVERVIEW</span>
          <span>·</span>
          <span>EST. 2026 INDIA</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-devanagari text-sm text-studio-maroon">कम शोर। ज़्यादा काम।</span>
          <span>·</span>
          <span className="text-studio-black/80">SCROLL TO EXPLORE ↓</span>
        </div>
      </div>
    </section>
  );
}
