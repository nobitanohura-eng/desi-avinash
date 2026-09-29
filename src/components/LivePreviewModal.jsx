import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, RefreshCw, Smartphone, Monitor } from 'lucide-react';
import { playClickSound } from '../utils/sound';

export default function LivePreviewModal({ project, isOpen, onClose }) {
  const [deviceMode, setDeviceMode] = React.useState('desktop');
  const [key, setKey] = React.useState(0);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-studio-black/80 backdrop-blur-md">
        
        {/* Backdrop Click */}
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
          className="relative w-full max-w-6xl h-[88vh] bg-studio-ivory rounded-lg border border-studio-maroon/30 shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Top Browser Chrome Bar */}
          <div className="bg-studio-ivoryDark px-4 py-3 border-b border-studio-maroon/20 flex items-center justify-between">
            
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="w-3 h-3 rounded-full bg-studio-maroon/80 hover:opacity-100 flex items-center justify-center"
              />
              <div className="w-3 h-3 rounded-full bg-studio-terracotta/60" />
              <div className="w-3 h-3 rounded-full bg-studio-forest/60" />
              
              <div className="ml-3 hidden sm:flex items-center gap-2 text-studio-black/60 font-mono text-xs">
                <span className="font-semibold text-studio-maroon">{project.title}</span>
                <span>—</span>
                <span className="truncate max-w-xs">{project.url}</span>
              </div>
            </div>

            {/* Device Switcher & Actions */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-studio-ivory rounded border border-studio-maroon/20 p-0.5">
                <button
                  onClick={() => setDeviceMode('desktop')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    deviceMode === 'desktop'
                      ? 'bg-studio-maroon text-studio-ivory'
                      : 'text-studio-black/60 hover:text-studio-maroon'
                  }`}
                  title="Desktop View"
                >
                  <Monitor size={14} />
                </button>
                <button
                  onClick={() => setDeviceMode('mobile')}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    deviceMode === 'mobile'
                      ? 'bg-studio-maroon text-studio-ivory'
                      : 'text-studio-black/60 hover:text-studio-maroon'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone size={14} />
                </button>
              </div>

              <button
                onClick={() => setKey(prev => prev + 1)}
                className="p-1.5 rounded border border-studio-maroon/20 text-studio-black/60 hover:text-studio-maroon transition-colors"
                title="Reload"
              >
                <RefreshCw size={14} />
              </button>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-studio-maroon text-studio-ivory font-mono text-xs rounded hover:bg-studio-maroonDark transition-colors"
              >
                <span>OPEN LIVE</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="p-1.5 text-studio-black/60 hover:text-studio-maroon transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Frame Container */}
          <div className="flex-1 bg-neutral-900 flex items-center justify-center p-2 sm:p-4 overflow-hidden relative">
            <div
              className={`h-full transition-all duration-300 bg-white rounded shadow-xl overflow-hidden ${
                deviceMode === 'mobile'
                  ? 'w-[375px] max-h-[700px] border-4 border-neutral-800 rounded-3xl'
                  : 'w-full'
              }`}
            >
              <iframe
                key={key}
                src={project.url}
                title={project.title}
                className="w-full h-full border-none"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
