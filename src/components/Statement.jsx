import React from 'react';
import { motion } from 'framer-motion';
import DilSeLockup from './typography/DilSeLockup';

export default function Statement() {
  return (
    <section id="studio" className="py-24 sm:py-32 relative bg-studio-ivory border-y border-studio-maroon/15 overflow-hidden">
      {/* Subtle Background Pattern Accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none bg-repeat bg-[length:120px_120px] bg-[url('/assets/patterns/p1-botanical.png')]" />

      {/* देसी sticker — floating cultural identity mark */}
      <div className="absolute left-4 sm:left-8 bottom-8 sm:bottom-12 pointer-events-auto hidden sm:block">
        <img
          src="/assets/stickers/desi.png"
          alt=""
          className="w-20 sm:w-24 h-auto object-contain sticker opacity-50 hover:opacity-90 -rotate-6"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Archival Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-studio-maroon/20 bg-studio-ivoryLight text-studio-maroon font-mono text-[10px] tracking-[0.2em] uppercase mb-8"
        >
          <img src="/assets/illustrations/four-petal-rosette.png" alt="" className="w-3.5 h-3.5 object-contain" />
          <span>STUDIO PHILOSOPHY & MANIFESTO</span>
        </motion.div>

        {/* Neo-Vanguard Typographic Poster Artwork Object */}
        <DilSeLockup />

        {/* Micro Tag with Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6 pt-6 border-t border-studio-maroon/20"
        >
          <div className="w-10 h-[1px] bg-studio-terracotta/40" />
          <span className="font-mono text-xs tracking-widest text-studio-forest uppercase font-medium">
            कम शोर · ज़्यादा काम
          </span>
          <div className="w-10 h-[1px] bg-studio-terracotta/40" />
        </motion.div>

      </div>
    </section>
  );
}
