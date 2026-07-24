"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { ServiceData } from './ServiceWallet';

interface CyberTerminalProps {
  services: ServiceData[];
  themeColor: string;
}

export default function CyberTerminal({ services, themeColor }: CyberTerminalProps) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  
  // If themeColor is too dark (like #333333), use a bright terminal green/yellow for accents
  const terminalAccent = themeColor === '#333333' ? '#00ffcc' : themeColor;

  useEffect(() => {
    if (activeIdx === null) {
       setDisplayedText("AWAITING_COMMAND...");
       return;
    }
    
    // Typewriter effect
    const fullText = services[activeIdx].description + "\n\n> " + services[activeIdx].detailedContent;
    let i = 0;
    setDisplayedText("");
    
    const intervalId = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 15);
    
    return () => clearInterval(intervalId);
  }, [activeIdx, services]);

  return (
    <div className="w-full max-w-5xl mx-auto font-mono mt-12 relative z-10">
      <div 
        className="w-full bg-[#0a0a0a] border-4 md:border-8 flex flex-col shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[20px_20px_0px_0px_rgba(255,255,255,1)]"
        style={{ borderColor: terminalAccent, boxShadow: `16px 16px 0px 0px ${terminalAccent}` }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b-4 md:border-b-8 bg-[#1a1a1a]" style={{ borderColor: terminalAccent }}>
          <div className="flex items-center gap-3">
            <Terminal size={20} style={{ color: terminalAccent }} />
            <span className="text-sm tracking-widest font-bold uppercase" style={{ color: terminalAccent }}>
              GFG_OS_TERMINAL_v2.0
            </span>
          </div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-white/20 border-2 border-white/40" />
            <div className="w-4 h-4 bg-white/20 border-2 border-white/40" />
            <div className="w-4 h-4 bg-white/20 border-2 border-white/40" />
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex flex-col md:flex-row min-h-[450px]">
          {/* Sidebar / Commands */}
          <div className="w-full md:w-1/3 border-b-4 md:border-b-0 md:border-r-8 p-6 flex flex-col gap-6 bg-[#050505]" style={{ borderColor: terminalAccent }}>
            <div className="text-white/50 text-xs uppercase tracking-widest font-bold">Available Scripts:</div>
            <div className="flex flex-col gap-4">
              {services.map((service, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`text-left text-sm md:text-base font-black uppercase tracking-tight transition-all duration-200 group relative py-2`}
                    style={{ color: isActive ? '#fff' : terminalAccent }}
                  >
                    <span className={`absolute left-0 transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}>
                      &gt;
                    </span>
                    <span className="ml-6 block">
                      ./{service.title.replace(/\s+/g, '_').toLowerCase()}.sh
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Output Area */}
          <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col bg-black overflow-hidden relative">
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none z-10" />
            
            <div className="relative z-20 flex-1 flex flex-col">
              {activeIdx !== null ? (
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6 opacity-60">
                    <span style={{ color: terminalAccent }}>$</span>
                    <span className="text-white text-base">execute ./{services[activeIdx].title.replace(/\s+/g, '_').toLowerCase()}.sh</span>
                  </div>
                  
                  <div className="text-white text-sm md:text-base leading-relaxed whitespace-pre-wrap flex-1 opacity-90">
                    {displayedText}
                    <motion.span 
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-3 h-5 ml-1 align-middle"
                      style={{ backgroundColor: terminalAccent }}
                    />
                  </div>
                  
                  {/* Tags appear immediately */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {services[activeIdx].tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="px-3 py-1 border-2 font-bold uppercase text-xs"
                        style={{ borderColor: terminalAccent, color: terminalAccent, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full opacity-60 flex-col gap-6 text-center">
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-6 h-8"
                    style={{ backgroundColor: terminalAccent }}
                  />
                  <span className="text-sm uppercase tracking-widest font-bold" style={{ color: terminalAccent }}>
                    Waiting for input... Select a script to execute.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
