import React from 'react';
import { motion } from 'framer-motion';

/**
 * DilSeLockup — Neo-Vanguard Typographic Poster Composition
 * 
 * For the Studio Manifesto section.
 * "दिल से बनाया। दिमाग से सुधारा।"
 * Treated as an authentic Indian editorial screenprint poster object.
 */
export default function DilSeLockup({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block w-full max-w-3xl my-6 ${className}`}
    >
      <div className="relative p-6 sm:p-10 rounded-lg bg-studio-ivoryLight border border-studio-maroon/20 shadow-archival overflow-hidden group">
        
        {/* Halftone texture overlay */}
        <div className="absolute inset-0 halftone-overlay pointer-events-none" />

        {/* Archival corner registration marks */}
        <div className="absolute top-2.5 left-3 font-mono text-[9px] tracking-widest text-studio-maroon/40 uppercase">
          ⌖ AS-POSTER // 02
        </div>
        <div className="absolute top-2.5 right-3 font-mono text-[9px] tracking-widest text-studio-maroon/60 uppercase border border-studio-maroon/20 px-2 py-0.5 rounded-sm bg-studio-ivory">
          STUDIO MANIFESTO · 2026
        </div>

        {/* Lotus Emblem Watermark Accent in Background */}
        <div className="absolute right-4 bottom-4 w-32 h-32 opacity-10 pointer-events-none">
          <img
            src="/assets/illustrations/lotus-emblem.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Typographic Artwork */}
        <div className="relative z-10 text-center py-4 sm:py-6">
          
          {/* Line 1: दिल से बनाया। */}
          <div className="relative inline-block">
            <span className="font-devanagari text-4xl sm:text-6xl lg:text-7xl text-studio-maroon font-normal tracking-wide screenprint-shadow block leading-tight select-none">
              “दिल से बनाया।
            </span>
            {/* Small decorative stamp annotation */}
            <span className="absolute -top-3 -right-6 sm:-right-8 font-mono text-[8px] sm:text-[9px] bg-studio-mustard text-studio-black px-2 py-0.5 rounded border border-studio-black/30 font-bold rotate-6 shadow-sm hidden sm:inline-block">
              WITH HEART
            </span>
          </div>

          {/* Line 2: दिमाग से सुधारा।” */}
          <div className="relative inline-block mt-2 sm:mt-3">
            <span className="font-devanagari text-4xl sm:text-6xl lg:text-7xl text-studio-black font-normal tracking-wide block leading-tight select-none">
              दिमाग से सुधारा।”
            </span>
            {/* Hand-drawn distressed underline */}
            <div className="w-3/4 mx-auto h-[2px] bg-studio-terracotta mt-2 rounded-full opacity-60" />
          </div>

        </div>

        {/* Bottom Subtitle / Translation Bar */}
        <div className="mt-6 pt-4 border-t border-studio-maroon/15 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] text-studio-black/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-studio-terracotta" />
            <span className="tracking-wider uppercase font-semibold">MADE WITH INTENT · SHARPENED BY TASTE</span>
          </div>
          <div className="font-serif italic text-sm text-studio-maroon">
            Handcrafted digital artifacts.
          </div>
        </div>

      </div>
    </motion.div>
  );
}
