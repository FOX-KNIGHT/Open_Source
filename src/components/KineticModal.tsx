"use client";

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowDown, MoveRight, X } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import StaggeredMenu from './StaggeredMenu';
import ServiceWallet from './ServiceWallet';
import InteractiveFolder from './InteractiveFolder';
import CyberTerminal from './CyberTerminal';

export type KineticData = {
  id: string;
  themeColor: string;
  textColor: string;
  heroTitle: string;
  metadata: { label: string; role: string };
  marqueeRows: [string, string];
  services: { title: string; description: string; detailedContent: string; tags: string[] }[];
  ctaTitle: string;
};

interface KineticModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: KineticData | null;
}

export default function KineticModal({ isOpen, onClose, data }: KineticModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const deepDiveRef = useRef<HTMLDivElement>(null);
  const isDeepDiveInView = useInView(deepDiveRef, { margin: "0px 0px -40% 0px" });
  
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setExpandedIndex(null); // Reset accordion on open
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!data) return null;

  let walletImage = '/image.png';
  if (data.id === 'git') walletImage = '/git.png';
  if (data.id === 'github') walletImage = '/github.png';
  if (data.id === 'community') walletImage = '/branching.png';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden font-sans selection:bg-black selection:text-white"
          style={{ backgroundColor: data.themeColor, color: data.textColor }}
        >
          {/* Floating Navigation Pill */}
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-full max-w-6xl px-8 pointer-events-none">
            <div className="pointer-events-auto">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" 
                alt="GeeksforGeeks Official Logo" 
                className="h-6"
              />
            </div>
            <div className="bg-black rounded-full px-6 py-3 pointer-events-auto flex gap-6 items-center border-2 border-transparent hover:border-black transition-colors">
              <button onClick={onClose} className="font-mono text-white text-xs uppercase tracking-tight hover:text-[#FF4D00] transition-colors flex items-center gap-2">
                <X size={14} /> Close Section
              </button>
            </div>
            <div className="font-mono text-sm tracking-tight hidden md:block mix-blend-difference text-white">MASTERCLASS</div>
          </div>

          {/* Typographic Hero Section */}
          <div className="min-h-screen flex flex-col justify-end pb-12 pt-32 px-8">
            <h1 
              className="font-archivo uppercase leading-[0.85] tracking-[-0.04em] text-center"
              style={{ fontSize: '14vw' }}
            >
              {data.heroTitle}
            </h1>
            
            <div className="mt-12 border-t-2 border-current pt-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="font-mono text-sm uppercase tracking-tight flex-1">
                {data.metadata.label}
              </div>
              
              {/* Rotating Scroll Indicator */}
              <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 144 144" className="w-full h-full fill-current">
                    <path id="circlePath" d="M 72, 72 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" fill="none" />
                    <text className="font-mono text-[9px] font-bold uppercase tracking-widest">
                      <textPath href="#circlePath" startOffset="0%">
                        Scroll Down • Scroll Down • Scroll Down • 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <ArrowDown size={24} className="relative z-10" />
              </div>

              <div className="font-mono text-sm uppercase tracking-tight flex-1 text-right max-w-xs">
                {data.metadata.role}
              </div>
            </div>
          </div>

          {/* Skewed Marquee Section */}
          <div className="w-full bg-black py-16 -skew-y-2 overflow-hidden my-24 border-y-2 border-black">
            <div className="flex flex-col gap-4 skew-y-2">
              {/* Row 1 */}
              <div className="flex w-max whitespace-nowrap animate-marquee">
                {[...Array(6)].map((_, i) => (
                  <span key={`r1-${i}`} className="font-archivo text-[10vw] uppercase leading-none tracking-tight px-8" style={{ color: data.themeColor }}>
                    {data.marqueeRows[0]}
                  </span>
                ))}
              </div>
              {/* Row 2 (Reverse) */}
              <div className="flex w-max whitespace-nowrap animate-marquee-reverse opacity-80">
                {[...Array(6)].map((_, i) => (
                  <span key={`r2-${i}`} className="font-archivo text-[10vw] uppercase leading-none tracking-tight text-white px-8">
                    {data.marqueeRows[1]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Service Component */}
          <div ref={deepDiveRef} className="w-full bg-black text-white relative overflow-hidden py-24 px-4 md:px-8">
             <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
               <h2 className="font-archivo text-5xl md:text-7xl uppercase mb-16 text-center" style={{ color: data.themeColor }}>Deep Dive</h2>
               
               {data.id === 'docs' ? (
                 <div className="flex flex-wrap justify-center gap-16 md:gap-24 mt-12 w-full max-w-5xl">
                   {data.services.map((service, idx) => (
                     <div key={idx} className="flex flex-col items-center gap-8 group w-full md:w-auto">
                        <div className="border-8 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
                          <InteractiveFolder 
                            size={1.5} 
                            color="#000000" 
                            label={service.title}
                            items={[
                              <div key="1" className="text-black font-mono text-[8px] font-bold">INFO</div>,
                              <div key="2" className="text-black font-mono text-[8px] font-bold">DOCS</div>
                            ]}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-archivo text-2xl uppercase mb-3" style={{ color: data.themeColor }}>{service.title}</h3>
                          <p className="font-mono text-sm text-white/80 max-w-xs">{service.description}</p>
                        </div>
                     </div>
                   ))}
                 </div>
               ) : data.id === 'community' ? (
                 <CyberTerminal 
                   services={data.services}
                   themeColor={data.themeColor}
                 />
               ) : (
                 <ServiceWallet 
                   walletImage={walletImage}
                   services={data.services}
                   themeColor={data.themeColor}
                 />
               )}
             </div>
          </div>

          {/* Giant CTA and Footer */}
          <div className="min-h-screen flex flex-col justify-between pt-32 px-8 bg-white text-black">
            <div className="flex-1 flex flex-col items-center justify-center">
              <h2 className="font-archivo text-[12vw] uppercase leading-[0.85] tracking-[-0.04em] text-center mb-12">
                {data.ctaTitle}
              </h2>
              <button 
                onClick={onClose}
                className="bg-black text-white font-mono uppercase tracking-tight text-xl px-12 py-6 rounded-full hover:scale-110 transition-transform duration-300 flex items-center gap-4 group cursor-pointer"
              >
                Back to Masterclass <ArrowDown className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <footer className="border-t-2 border-black py-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase">
              <div>© 2026 GFG Masterclass</div>
              <div className="flex gap-8">
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">GitHub</a>
                <a href="#" className="hover:underline">LinkedIn</a>
              </div>
            </footer>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
