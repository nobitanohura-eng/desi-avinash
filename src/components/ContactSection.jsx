import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Mail, Phone, MessageSquare } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function ContactSection({ onOpenContact }) {
  const scrollToWork = () => {
    playClickSound();
    const elem = document.querySelector('#work');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 relative bg-studio-ivoryLight border-t border-studio-maroon/20 overflow-hidden">
      {/* Background Archival Decorative Elements */}
      <div className="absolute left-8 top-12 opacity-15 pointer-events-none hidden sm:block">
        <img
          src="/assets/illustrations/leaf-sprig.png"
          alt=""
          className="w-48 h-32 object-contain"
        />
      </div>

      {/* Evil Eye — nazar na lage on business inquiries — BADA & VISIBLE */}
      <div className="absolute right-6 sm:right-16 bottom-8 sm:bottom-12 w-20 sm:w-24 md:w-28 pointer-events-auto hidden sm:block">
        <img
          src="/assets/stickers/evil-eye.png"
          alt=""
          className="w-full h-auto object-contain sticker opacity-80 hover:opacity-100 rotate-[6deg] rounded-full transition-all duration-300 filter drop-shadow-md hover:scale-105"
          title="नज़र न लगे 🧿"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-studio-maroon/25 bg-studio-ivory text-studio-maroon font-mono text-[10px] tracking-[0.2em] uppercase mb-8 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-studio-terracotta" />
          <span>START A COLLABORATION</span>
        </motion.div>

        {/* Big Impact Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-studio-black tracking-tight leading-[1.05] mb-6"
        >
          “MAKE IT FEEL<br />
          <span className="text-studio-maroon italic">INEVITABLE.”</span>
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-lg sm:text-2xl text-studio-black/75 max-w-xl mb-10 font-normal leading-relaxed"
        >
          Have an idea, brand or product you want to bring to life? Let's make it real.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          <button
            onClick={() => {
              playClickSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            className="group px-8 py-4 bg-studio-maroon hover:bg-studio-maroonDark text-studio-ivory font-mono text-xs font-semibold tracking-[0.18em] uppercase rounded-sm flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-stamp"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight size={15} className="text-studio-mustard group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={scrollToWork}
            onMouseEnter={playHoverSound}
            className="group px-8 py-4 border border-studio-maroon/30 hover:border-studio-maroon bg-studio-ivory text-studio-black font-mono text-xs font-semibold tracking-[0.18em] uppercase rounded-sm flex items-center gap-3 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>VIEW THE WORK</span>
            <ArrowDown size={14} className="text-studio-terracotta group-hover:translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Desi Typography Direct Contact Strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-studio-maroon/15 font-mono text-xs">
          {/* Email Redirect Option — Address hidden, click redirects */}
          <a
            href="mailto:avinashkr502080@gmail.com"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-studio-maroon/25 bg-studio-ivory hover:bg-studio-ivoryLight text-studio-maroon transition-all shadow-sm group"
            title="सीधा ईमेल करें (Redirects to Email)"
          >
            <Mail size={14} className="text-studio-maroon" />
            <span className="font-devanagari text-sm font-semibold">सीधा ईमेल भेजें</span>
            <span className="text-[10px] tracking-wider text-studio-black/60 group-hover:text-studio-maroon font-mono uppercase">
              · CLICK TO MAIL ↗
            </span>
          </a>

          {/* Phone & WhatsApp in Desi Typography */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-studio-maroon/25 bg-studio-ivory shadow-sm">
            <Phone size={14} className="text-studio-terracotta" />
            <span className="font-devanagari text-sm font-bold text-studio-maroon">फोन / बातचीत:</span>
            <a
              href="tel:+918920636919"
              onClick={playClickSound}
              className="font-mono text-xs font-bold text-studio-black hover:text-studio-maroon tracking-wider"
            >
              8920636919 📞
            </a>
            <span className="text-studio-maroon/30">|</span>
            <a
              href="https://wa.me/918920636919"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              className="font-mono text-[11px] font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
            >
              <MessageSquare size={12} />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
