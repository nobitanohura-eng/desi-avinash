import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Palette, Cpu, ArrowUpRight } from 'lucide-react';
import { playHoverSound, playClickSound } from '../utils/sound';

export default function Services({ onOpenContact }) {
  const services = [
    {
      num: '01',
      title: 'WEB EXPERIENCES',
      subtitle: 'Bespoke Websites & Digital Flagships',
      icon: Code,
      desc: 'Interactive websites, high-performance landing pages, custom web animations, and brand-driven digital experiences engineered for maximum speed and conversion.',
      deliverables: ['Custom Web Development', 'Awwwards-Grade Motion', 'Responsive UX/UI', 'Performance & SEO Optimization']
    },
    {
      num: '02',
      title: 'UGC & CREATIVE',
      subtitle: 'High-Retention Short-Form Visuals',
      icon: Video,
      desc: 'Short-form video ads, creator-style product storytelling, dynamic motion reels, and social visual systems built to arrest attention within the first 2 seconds.',
      deliverables: ['9:16 Vertical UGC Ads', 'Product Storytelling', 'High-Hook Motion Design', 'Platform-Native Creative']
    },
    {
      num: '03',
      title: 'BRAND WORLDS',
      subtitle: 'Visual Systems & Identity Craft',
      icon: Palette,
      desc: 'Comprehensive visual identities, bespoke typographic hierarchies, design systems, editorial guidelines, and cultural art direction that make brands unforgettable.',
      deliverables: ['Visual Identity & Logos', 'Custom Design Systems', 'Editorial Art Direction', 'Brand Guidelines & Assets']
    },
    {
      num: '04',
      title: 'AI SYSTEMS',
      subtitle: 'Workflows, Agents & Generative UI',
      icon: Cpu,
      desc: 'AI-driven creative pipelines, generative interfaces, automated content production systems, and intelligent web assistants that amplify human taste.',
      deliverables: ['AI Workflow Architecture', 'Generative Media Pipelines', 'Custom AI Assistants', 'Smart Web Automations']
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-studio-ivory overflow-hidden">
      {/* Background Archival Mandala Watermark */}
      <div className="absolute right-[-10%] top-1/3 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 opacity-[0.07] pointer-events-none">
        <img
          src="/assets/illustrations/mandala-rosette.png"
          alt=""
          className="w-full h-full object-contain animate-spin-slow"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-studio-maroon/20 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-studio-maroon uppercase mb-3">
              <img
                src="/assets/illustrations/mandala-rosette.png"
                alt=""
                className="w-4 h-4 object-contain opacity-80"
              />
              <span>CAPABILITIES · 06</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-studio-black tracking-tight">
              STUDIO SERVICES.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-base text-studio-black/75 leading-relaxed">
              Four focused studio disciplines. From full-scale digital builds to viral UGC storytelling.
            </p>
          </div>
        </div>

        {/* 4 Capabilities Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={playHoverSound}
                className="p-8 rounded-lg bg-studio-ivoryLight border border-studio-maroon/20 shadow-archival flex flex-col justify-between hover:border-studio-maroon transition-all group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-studio-maroon/15 mb-6">
                    <span className="font-mono text-xs font-bold text-studio-maroon tracking-widest">
                      SERVICE // {srv.num}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-studio-maroon/30 flex items-center justify-center text-studio-maroon group-hover:bg-studio-maroon group-hover:text-studio-ivory transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-studio-black tracking-tight mb-1 group-hover:text-studio-maroon transition-colors">
                    {srv.title}
                  </h3>
                  <div className="font-mono text-xs text-studio-terracotta mb-4 uppercase tracking-wider">
                    {srv.subtitle}
                  </div>

                  <p className="font-sans text-sm text-studio-black/75 leading-relaxed mb-6 font-normal">
                    {srv.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-studio-maroon/10">
                    {srv.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 font-mono text-[11px] text-studio-black/70">
                        <span className="text-studio-maroon">✦</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    playClickSound();
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded border border-studio-maroon/30 hover:border-studio-maroon text-studio-maroon hover:bg-studio-maroon hover:text-studio-ivory font-mono text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
                >
                  <span>INQUIRE ABOUT {srv.title}</span>
                  <ArrowUpRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
