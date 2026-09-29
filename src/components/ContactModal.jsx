import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, Mail, Phone, MessageSquare, Loader2, AlertCircle } from 'lucide-react';
import { playClickSound, playStampSound } from '../utils/sound';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Experiences',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const studioEmail = 'avinashkr502080@gmail.com';
  const phoneNumber = '8920636919';
  const web3AccessKey = 'f4dc1e02-a136-4902-8b55-403c200e07c4';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    playStampSound();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3AccessKey,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          from_name: 'Avinash Studio Portfolio Inquiry'
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.message || 'Submission failed. Please use direct email redirect.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please click direct email below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      service: 'Web Experiences',
      message: ''
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-studio-black/80 backdrop-blur-md">
        
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          onClick={() => {
            playClickSound();
            onClose();
          }}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-studio-ivory rounded-xl border border-studio-maroon/30 shadow-2xl p-6 sm:p-8 overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-studio-maroon/15 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-studio-maroon animate-pulse" />
              <span className="font-mono text-xs font-bold tracking-widest text-studio-maroon uppercase">
                COMMISSION A BUILD / START A PROJECT
              </span>
            </div>
            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              className="p-1.5 text-studio-black/60 hover:text-studio-maroon transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-studio-maroon text-studio-ivory flex items-center justify-center mb-4 shadow-stamp">
                <Check size={32} />
              </div>
              <span className="font-devanagari text-2xl text-studio-maroon font-bold mb-1">
                संदेश भेज दिया गया है! ✦
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-studio-black mb-3">
                Brief Dispatched to Avinash Studio
              </h3>
              <p className="font-sans text-sm text-studio-black/75 max-w-md mb-6 leading-relaxed">
                Thank you for reaching out. We have received your project details via Web3Forms and will review them and respond shortly.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded bg-studio-ivoryLight border border-studio-maroon/30 text-studio-black font-mono text-xs hover:border-studio-maroon transition-colors"
                >
                  SEND ANOTHER BRIEF
                </button>
                <button
                  onClick={() => {
                    playClickSound();
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded bg-studio-maroon text-studio-ivory font-mono text-xs font-semibold hover:bg-studio-maroonDark transition-colors"
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms Hidden Input */}
              <input type="hidden" name="access_key" value={web3AccessKey} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-wider uppercase text-studio-black/70 mb-1">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Sharma"
                    className="w-full px-3.5 py-2.5 bg-studio-ivoryLight border border-studio-maroon/20 rounded font-sans text-sm text-studio-black focus:outline-none focus:border-studio-maroon"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] tracking-wider uppercase text-studio-black/70 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@brand.com"
                    className="w-full px-3.5 py-2.5 bg-studio-ivoryLight border border-studio-maroon/20 rounded font-sans text-sm text-studio-black focus:outline-none focus:border-studio-maroon"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-wider uppercase text-studio-black/70 mb-1">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-studio-ivoryLight border border-studio-maroon/20 rounded font-sans text-sm text-studio-black focus:outline-none focus:border-studio-maroon"
                >
                  <option value="Web Experiences">Web Experiences & Interactive Sites</option>
                  <option value="UGC & Creative">UGC Video & Social Ads</option>
                  <option value="Brand Worlds">Brand World & Visual Identity</option>
                  <option value="AI Systems">AI Creative Systems & Workflows</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-wider uppercase text-studio-black/70 mb-1">
                  Project Details / Vision *
                </label>
                <textarea
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about what you want to build, the goals, and any timeline..."
                  className="w-full px-3.5 py-2.5 bg-studio-ivoryLight border border-studio-maroon/20 rounded font-sans text-sm text-studio-black focus:outline-none focus:border-studio-maroon resize-none"
                />
              </div>

              {errorMessage && (
                <div className="p-3 rounded bg-red-100/80 border border-red-300 text-red-800 text-xs font-mono flex items-center gap-2">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button & Direct Contacts */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                
                {/* Desi Typography Contact Option */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {/* Email option: Hidden raw address, clicks to open mail client */}
                  <a
                    href={`mailto:${studioEmail}`}
                    onClick={playClickSound}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-studio-maroon/25 bg-studio-ivoryLight text-studio-maroon hover:border-studio-maroon font-mono text-[11px] font-semibold transition-colors"
                    title="ईमेल भेजें (Redirects to Email)"
                  >
                    <Mail size={12} />
                    <span className="font-devanagari">ईमेल भेजें ↗</span>
                  </a>

                  {/* Phone / WhatsApp in Desi Typography */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-studio-maroon/25 bg-studio-ivoryLight text-studio-black font-mono text-[11px]">
                    <span className="font-devanagari text-studio-maroon font-bold">फोन:</span>
                    <a
                      href={`tel:+91${phoneNumber}`}
                      onClick={playClickSound}
                      className="font-bold hover:text-studio-maroon tracking-wider"
                    >
                      {phoneNumber}
                    </a>
                    <span className="text-studio-maroon/30">·</span>
                    <a
                      href={`https://wa.me/91${phoneNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={playClickSound}
                      className="text-emerald-700 hover:text-emerald-900 font-bold"
                    >
                      WA 💬
                    </a>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded bg-studio-maroon hover:bg-studio-maroonDark text-studio-ivory font-mono text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-stamp transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={13} className="animate-spin" />
                      <span>भेज रहे हैं...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT BRIEF</span>
                      <Send size={13} />
                    </>
                  )}
                </button>

              </div>
            </form>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
