import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Eye } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';
import LivePreviewModal from './LivePreviewModal';

export default function SelectedWork() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: '01',
      title: 'MOMOHAUS',
      category: 'Premium Food Brand / Interactive Website',
      hook: '“BUILT TO MAKE YOU HUNGRY.”',
      description: 'An immersive digital culinary showcase combining high-contrast typography, interactive flavor storytelling, and friction-free ordering UX.',
      url: 'https://momohaus.vercel.app/',
      accentColor: '#641F2B',
      stamp: 'CRAFT FOOD · 2026',
      tech: ['React', 'Interactive UI', 'Performance', 'Animation'],
      stats: '100% Craft Focus',
      stickerAccent: '/assets/stickers/chai.png',
      stickerTitle: 'चाय पे चर्चा ☕'
    },
    {
      id: '02',
      title: 'ANANDA RESTAURANT',
      category: 'Hospitality & Dining Website',
      hook: '“ATMOSPHERE BEFORE APPETITE.”',
      description: 'An atmospheric, fine-dining web portal highlighting culinary heritage, interactive curated menus, table reservations, and rich photography.',
      url: 'https://ananda-restaurant.vercel.app/',
      accentColor: '#294437',
      stamp: 'HOSPITALITY · 2026',
      tech: ['Editorial UI', 'Tailwind', 'Responsive', 'UX Architecture'],
      stats: 'Heritage Dining',
      stickerAccent: '/assets/stickers/evil-eye.png',
      stickerTitle: 'नज़र हटाओ 🧿'
    },
    {
      id: '03',
      title: 'ARIHANT CABS',
      category: 'Business / Fleet & Travel Website',
      hook: '“THE JOURNEY STARTS BEFORE THE JOURNEY.”',
      description: 'A performance-driven commercial car rental platform featuring real-time fare calculator, multi-city route selection, and instant WhatsApp booking flows.',
      url: 'https://arihant-orcin.vercel.app/',
      accentColor: '#35445B',
      stamp: 'FLEET & TRAVEL · 2026',
      tech: ['Commercial UX', 'Conversion Rate', 'Live Booking', 'Mobile-First'],
      stats: 'High Conversion',
      stickerAccent: '/assets/stickers/rickshaw.png',
      stickerTitle: 'चलो चलें 🛺'
    }
  ];

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-studio-ivoryLight overflow-hidden">
      {/* Background Archival Five-Petal Floral Watermark */}
      <div className="absolute left-[-5%] top-16 w-72 sm:w-80 h-72 sm:h-80 opacity-[0.06] pointer-events-none">
        <img
          src="/assets/illustrations/five-petal-flower.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Background Section Framing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-studio-maroon/20 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-studio-maroon uppercase mb-3">
              <img
                src="/assets/illustrations/five-petal-flower.png"
                alt=""
                className="w-4 h-4 object-contain opacity-80"
              />
              <span>SELECTED BUILDS · 02</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-studio-black tracking-tight screenprint-shadow">
              REAL SITES.<br />REAL WORLDS.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-base text-studio-black/70 leading-relaxed mb-3">
              Every build is crafted for the real world — interactive, production-ready, and designed to convert.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-studio-ivory rounded border border-studio-maroon/20 text-studio-maroon font-devanagari text-lg shadow-sm">
              <span>✦ काम में बात होनी चाहिए।</span>
              <span className="font-mono text-[9px] text-studio-terracotta uppercase tracking-wider">
                PROOF OVER TALK
              </span>
            </div>
          </div>
        </div>

        {/* Projects Showcase (Editorial Asymmetric Layout) */}
        <div className="space-y-20">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-6 sm:p-10 rounded-lg bg-studio-ivory border border-studio-maroon/20 shadow-archival relative group ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Archival Corner Stamp Marks */}
                <div className="absolute top-3 left-3 font-mono text-[9px] tracking-widest text-studio-maroon/40 uppercase">
                  [{project.id}] // PROD
                </div>
                <div className="absolute top-3 right-3 font-mono text-[9px] tracking-widest text-studio-maroon/60 uppercase border border-studio-maroon/20 px-2 py-0.5 rounded-sm bg-studio-ivoryLight">
                  {project.stamp}
                </div>

                {/* Per-project unique desi sticker accent — BADA & VISIBLE */}
                {project.stickerAccent && (
                  <div className="absolute bottom-4 left-4 w-20 sm:w-28 md:w-32 h-auto z-20 pointer-events-auto hidden sm:block">
                    <img
                      src={project.stickerAccent}
                      alt=""
                      className="w-full h-auto object-contain sticker opacity-85 group-hover:opacity-100 rotate-[-5deg] rounded-sm transition-all duration-300 filter drop-shadow-md hover:scale-105"
                      title={project.stickerTitle}
                    />
                  </div>
                )}

                {/* Left / Info Column */}
                <div className={`lg:col-span-5 flex flex-col justify-between pt-6 ${isEven ? 'lg:order-2' : ''}`}>
                  <div>
                    {/* Category */}
                    <div className="font-mono text-[11px] font-semibold tracking-wider text-studio-terracotta uppercase mb-3">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-studio-black tracking-tight mb-3 group-hover:text-studio-maroon transition-colors">
                      {project.title}
                    </h3>

                    {/* Hook Statement */}
                    <div className="font-display text-lg sm:text-xl text-studio-maroon mb-4 italic">
                      {project.hook}
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm sm:text-base text-studio-black/75 leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Tech & Capabilities Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-studio-ivoryLight border border-studio-maroon/15 font-mono text-[10px] text-studio-black/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-studio-maroon/15 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => {
                        playClickSound();
                        setActiveModalProject(project);
                      }}
                      onMouseEnter={playHoverSound}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-studio-maroon hover:bg-studio-maroonDark text-studio-ivory font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95"
                    >
                      <Eye size={14} className="text-studio-mustard" />
                      <span>LIVE PREVIEW</span>
                    </button>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-studio-maroon/30 hover:border-studio-maroon text-studio-black hover:text-studio-maroon font-mono text-xs font-medium tracking-wider uppercase transition-colors"
                    >
                      <span>LAUNCH SITE</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Right / Visual Browser Preview Container */}
                <div className={`lg:col-span-7 flex flex-col pt-6 ${isEven ? 'lg:order-1' : ''}`}>
                  <div className="w-full h-full min-h-[300px] sm:min-h-[380px] rounded border border-studio-maroon/20 bg-studio-ivoryLight overflow-hidden flex flex-col relative shadow-inner">
                    
                    {/* Mock Browser Header */}
                    <div className="bg-studio-ivoryDark/90 px-4 py-2.5 border-b border-studio-maroon/15 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-studio-maroon/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-studio-terracotta/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-studio-forest/60" />
                      </div>
                      <div className="font-mono text-[10px] text-studio-black/50 bg-studio-ivory px-4 py-0.5 rounded border border-studio-maroon/10 truncate max-w-[200px] sm:max-w-xs">
                        {project.url}
                      </div>
                      <div className="w-4" />
                    </div>

                    {/* Preview Interactive Area */}
                    <div className="relative flex-1 bg-studio-ivory overflow-hidden flex items-center justify-center group/preview">
                      <iframe
                        src={project.url}
                        title={project.title}
                        className="w-full h-full min-h-[340px] pointer-events-none opacity-90 transition-transform duration-700 group-hover/preview:scale-[1.02]"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />

                      {/* Click overlay to trigger interactive modal */}
                      <div
                        onClick={() => {
                          playClickSound();
                          setActiveModalProject(project);
                        }}
                        className="absolute inset-0 bg-studio-black/20 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-[2px]"
                      >
                        <span className="px-4 py-2 bg-studio-ivory text-studio-maroon font-mono text-xs font-semibold rounded shadow-lg flex items-center gap-2">
                          <Eye size={14} />
                          <span>EXPAND INTERACTIVE PREVIEW</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Live Preview Modal */}
      <LivePreviewModal
        project={activeModalProject}
        isOpen={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
