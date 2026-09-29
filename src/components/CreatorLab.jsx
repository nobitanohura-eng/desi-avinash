import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowUpRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

function ReelCard({ item, idx }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    playClickSound();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(true);
      });
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    playClickSound();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-xl bg-studio-ivoryLight border border-studio-maroon/20 overflow-hidden shadow-archival flex flex-col hover:border-studio-maroon transition-all duration-300 hover:shadow-lg"
    >
      {/* 9:16 Vertical Reel Visual Frame */}
      <div 
        className="relative aspect-[9/16] w-full bg-studio-black overflow-hidden flex flex-col justify-between p-4 cursor-pointer select-none"
        onClick={togglePlay}
        onMouseEnter={() => {
          playHoverSound();
          if (videoRef.current && !isPlaying) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
          }
        }}
        onMouseLeave={() => {
          if (videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }}
      >
        {/* Real MP4 Video Element */}
        <video
          ref={videoRef}
          src={item.videoSrc}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loop
          playsInline
          muted={isMuted}
          preload="metadata"
        />

        {/* Cinematic Gradient Overlays for High-Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60 pointer-events-none" />

        {/* Top Metadata & Controls */}
        <div className="relative z-10 flex items-center justify-between pointer-events-auto">
          <span className="px-2.5 py-1 rounded bg-studio-ivory/20 backdrop-blur-md border border-studio-ivory/30 font-mono text-[9px] tracking-widest uppercase font-semibold text-studio-ivory shadow-sm">
            {item.badge}
          </span>
          
          <div className="flex items-center gap-2">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className="w-7 h-7 rounded-full bg-black/50 hover:bg-studio-maroon text-studio-ivory backdrop-blur-md border border-studio-ivory/30 flex items-center justify-center transition-colors"
              title={isMuted ? "Unmute audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <span className="font-mono text-[9px] tracking-wider text-studio-ivory/80 uppercase px-2 py-0.5 rounded bg-black/40">
              9:16
            </span>
          </div>
        </div>

        {/* Center Floating Play / Pause Trigger */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center pointer-events-none">
          <motion.div
            animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
            transition={{ repeat: isPlaying ? Infinity : 0, duration: 2 }}
            className={`w-12 h-12 rounded-full ${isPlaying ? 'bg-studio-maroon/80 border-studio-mustard' : 'bg-studio-ivory/25 border-studio-ivory/50'} backdrop-blur-md border flex items-center justify-center transition-all duration-300 shadow-xl group-hover:scale-110`}
          >
            {isPlaying ? (
              <Pause size={18} className="text-studio-ivory" />
            ) : (
              <Play size={18} className="text-studio-ivory ml-0.5" />
            )}
          </motion.div>
          <span className="font-mono text-[9px] tracking-widest text-studio-ivory/90 uppercase mt-2 px-2 py-0.5 rounded bg-black/50 backdrop-blur-sm">
            {isPlaying ? 'PAUSE PREVIEW' : 'CLICK / HOVER TO PLAY'}
          </span>
        </div>

        {/* Bottom Text & Hook */}
        <div className="relative z-10 pointer-events-none">
          <div className="font-mono text-[9px] tracking-widest text-studio-mustard uppercase mb-1 font-semibold flex items-center gap-1.5 drop-shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-studio-mustard animate-pulse" />
            {item.tag}
          </div>
          <div className="font-serif text-base sm:text-lg font-bold leading-tight drop-shadow-md text-studio-ivory">
            {item.hook}
          </div>
        </div>
      </div>

      {/* Card Editorial Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-studio-ivoryLight">
        <div>
          <h4 className="font-serif text-base sm:text-lg font-bold text-studio-black mb-1.5 group-hover:text-studio-maroon transition-colors">
            {item.title}
          </h4>
          <p className="font-sans text-xs text-studio-black/75 leading-relaxed mb-4">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-studio-maroon/15 flex items-center justify-between font-mono text-[10px]">
          <span className="text-studio-maroon font-semibold">{item.stats}</span>
          <span className="text-studio-terracotta flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-bold">
            REEL ACTIVE ↗
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CreatorLab() {
  const ugcItems = [
    {
      id: 'reel-saree',
      videoSrc: '/assets/ugc/reel-saree.mp4',
      tag: 'ETHNIC & SAREE FIT',
      title: 'Meesho Saree Draping & Review',
      hook: '“TRENDING ETHNIC FIT.”',
      description: 'Dynamic textile drape, fabric shimmer, and natural pacing engineered for high-impulse social conversion.',
      badge: '01 / SAREE',
      stats: 'High Retention UGC'
    },
    {
      id: 'reel-blouse',
      videoSrc: '/assets/ugc/reel-blouse.mp4',
      tag: 'COUTURE CRAFT',
      title: 'Designer Blouse Embroidery',
      hook: '“PRECISION IN EVERY THREAD.”',
      description: 'Macro detail zoom, intricate zari threadwork, and tactile fabric close-up capturing bridal craftsmanship.',
      badge: '02 / BLOUSE',
      stats: 'Macro Detail Retention'
    },
    {
      id: 'reel-lehenga',
      videoSrc: '/assets/ugc/reel-lehenga.mp4',
      tag: 'BRIDAL & FESTIVE',
      title: 'Peacock Motif Heavy Lehenga',
      hook: '“REGAL FESTIVE DRAPE.”',
      description: 'Slow-burn cinematic reveal, royal peacock flair movement, and luxury color-grade tailored for ethnic weddings.',
      badge: '03 / LEHENGA',
      stats: 'Cinematic Viral Reach'
    },
    {
      id: 'reel-navratri',
      videoSrc: '/assets/ugc/reel-navratri.mp4',
      tag: 'FESTIVE SPECIAL',
      title: 'Navratri Under-90 Festive Steal',
      hook: '“DANDIYA READY IN SECONDS.”',
      description: 'Snappy rhythmic pacing, festive garba color burst, and high-energy budget hook maximizing view-through rate.',
      badge: '04 / NAVRATRI',
      stats: 'High-Velocity Hook'
    }
  ];

  return (
    <section id="creator-lab" className="py-24 sm:py-32 relative bg-studio-ivory border-t border-studio-maroon/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-studio-maroon/20 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-studio-maroon uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-studio-maroon" />
              <span>CREATOR LAB · 03</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-studio-black tracking-tight">
              SOCIAL SPEED.<br />STUDIO TASTE.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-sans text-base text-studio-black/75 leading-relaxed mb-2">
              Short-form content built to stop the scroll — without losing the craft. High-retention product and UGC visuals with editorial standards.
            </p>
            <span className="font-devanagari text-lg text-studio-maroon">
              देखने में simple. बनाने में नहीं.
            </span>
          </div>
        </div>

        {/* कानcept sticker — Hinglish creative identity accent — BADA & VISIBLE */}
        <div className="absolute right-6 sm:right-12 top-16 sm:top-20 w-28 sm:w-36 md:w-44 pointer-events-auto hidden md:block">
          <img
            src="/assets/stickers/kancept.png"
            alt=""
            className="w-full h-auto object-contain sticker opacity-85 hover:opacity-100 rotate-3 rounded-sm transition-all duration-300 filter drop-shadow-md hover:scale-105"
            title="कानcept — concept hai 🎨"
          />
        </div>

        {/* 4 Real UGC Reel Videos Grid (9:16 vertical cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ugcItems.map((item, idx) => (
            <ReelCard key={item.id} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
