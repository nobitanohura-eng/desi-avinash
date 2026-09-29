import React from 'react';
import { motion } from 'framer-motion';

/**
 * ThodaDesiLockup — Neo-Vanguard Indian Typographic Artwork Object
 * 
 * Instead of plain HTML text, this is a designed editorial composition
 * combining graphic typography, patterned fills, screenprint misregistration,
 * hanging jhumka accents, and surrounding archival micro-typography.
 */
export default function ThodaDesiLockup({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-block my-2 ${className}`}
    >
      {/* Designed Typographic Poster Lockup Box */}
      <div className="relative p-4 sm:p-5 rounded-md bg-studio-ivoryLight/90 border border-studio-maroon/25 shadow-archival overflow-hidden group">
        
        {/* Halftone Texture Overlay */}
        <div className="absolute inset-0 halftone-overlay pointer-events-none" />

        {/* Top Micro-Metadata Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-studio-maroon/15 font-mono text-[9px] tracking-widest text-studio-maroon/70">
          <div className="flex items-center gap-2">
            <span className="text-studio-terracotta">⌖</span>
            <span>TYPE-LOCKUP // 01</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-studio-forest" />
            <span className="hidden sm:inline">ORIGINAL ARTWORK · NEW DELHI</span>
            <span className="sm:hidden">2026/IN</span>
          </div>
        </div>

        {/* Main Typographic Artwork Composition */}
        <div className="relative z-10 flex flex-col items-start gap-1">
          
          {/* Top Row: "थोड़ा" + Graphic "देसी" Artwork */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="font-devanagari text-3xl sm:text-5xl lg:text-6xl text-studio-maroon font-normal tracking-wide screenprint-shadow leading-none select-none">
              थोड़ा
            </span>

            {/* The Graphic "देसी" Artwork with Bandhani Pattern & Jhumkas */}
            <div className="relative inline-block group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/stickers/desi.png"
                alt="देसी"
                className="h-14 sm:h-20 lg:h-24 w-auto object-contain filter drop-shadow-md select-none hover:scale-105 transition-transform"
              />
            </div>
          </div>

          {/* Bottom Row: "थोड़ा अलग।" with Distressed Underline */}
          <div className="relative flex items-center gap-3 pt-1">
            <span className="font-devanagari text-3xl sm:text-5xl lg:text-6xl text-studio-black font-normal tracking-wide leading-none select-none">
              थोड़ा अलग।
            </span>
            <span className="font-mono text-[9px] text-studio-terracotta bg-studio-ivory px-2 py-0.5 border border-studio-terracotta/30 rounded-sm uppercase tracking-wider hidden sm:inline-block">
              NON-STANDARD
            </span>
          </div>

        </div>

        {/* Bottom Editorial Caption & Translation Subtitle */}
        <div className="mt-3.5 pt-2.5 border-t border-studio-maroon/15 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-mono text-[10px] text-studio-black/60">
          <div className="flex items-center gap-2">
            <span className="text-studio-terracotta font-bold">✦</span>
            <span className="tracking-wider uppercase font-medium">THODA DESI. THODA ALAG.</span>
          </div>
          <div className="text-[9px] tracking-widest text-studio-maroon/80 font-mono">
            A LITTLE INDIE · A LOT DIFFERENT
          </div>
        </div>

        {/* Corner Registration Mark */}
        <div className="absolute bottom-1 right-1 font-mono text-[8px] text-studio-maroon/30 pointer-events-none select-none">
          ⌖
        </div>
      </div>
    </motion.div>
  );
}
