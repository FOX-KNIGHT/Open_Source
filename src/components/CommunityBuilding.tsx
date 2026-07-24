"use client";

import React from 'react';
import CyberTerminal from './CyberTerminal';
import { ServiceData } from './ServiceWallet';
import { CheckCircle, XCircle } from 'lucide-react';

interface CommunityBuildingProps {
  services: ServiceData[];
  themeColor: string;
}

export default function CommunityBuilding({ services, themeColor }: CommunityBuildingProps) {
  
  const dos = [
    "Assume positive intent",
    "Say 'thank you' for contributions",
    "Keep discussions public and transparent",
    "Document everything clearly",
    "Enforce the Code of Conduct consistently"
  ];
  
  const donts = [
    "Ignore or ghost contributors",
    "Use jargon without explaining it",
    "Allow toxic behavior to slide",
    "Expect people to work for free",
    "Gatekeep knowledge"
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Ticker Section */}
      <div className="w-full border-y-8 border-black mb-24 py-8 overflow-hidden bg-[#111] flex" style={{ borderColor: themeColor }}>
        <div className="flex w-max whitespace-nowrap animate-marquee items-center">
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">OVER 100M REPOS ON GITHUB</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
          <span className="text-[#ccff00] font-archivo text-3xl md:text-5xl uppercase font-black px-8">94% OF PROJECTS RELY ON OPEN SOURCE</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">73M+ ACTIVE DEVELOPERS</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">OVER 100M REPOS ON GITHUB</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
          <span className="text-[#ccff00] font-archivo text-3xl md:text-5xl uppercase font-black px-8">94% OF PROJECTS RELY ON OPEN SOURCE</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">73M+ ACTIVE DEVELOPERS</span>
          <span className="text-white font-archivo text-3xl md:text-5xl uppercase font-black px-8">&bull;</span>
        </div>
      </div>

      {/* Do's and Don'ts Table */}
      <div className="w-full max-w-6xl px-4 md:px-8 mb-32 flex flex-col items-center relative z-10">
         <h3 className="w-full text-center font-archivo text-5xl md:text-7xl uppercase mb-12 font-black" style={{ color: themeColor }}>Code of Conduct</h3>
         
         <div className="flex flex-col md:flex-row w-full border-8 border-black bg-black shadow-[16px_16px_0px_0px_rgba(255,255,255,1)]" style={{ boxShadow: `16px 16px 0px 0px ${themeColor}` }}>
            
            {/* DOs */}
            <div className="flex-1 p-8 md:p-12 border-b-8 md:border-b-0 md:border-r-8 border-black bg-[#111]">
              <div className="flex items-center gap-4 mb-8 border-b-4 border-green-500/30 pb-4">
                <CheckCircle size={40} className="text-green-500" />
                <h4 className="font-archivo text-4xl uppercase font-black text-green-500">DO</h4>
              </div>
              <ul className="flex flex-col gap-6">
                {dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white font-mono font-bold text-lg">
                    <span className="text-green-500 font-black">+</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* DONTs */}
            <div className="flex-1 p-8 md:p-12 bg-[#111]">
              <div className="flex items-center gap-4 mb-8 border-b-4 border-red-500/30 pb-4">
                <XCircle size={40} className="text-red-500" />
                <h4 className="font-archivo text-4xl uppercase font-black text-red-500">DON'T</h4>
              </div>
              <ul className="flex flex-col gap-6">
                {donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white font-mono font-bold text-lg">
                    <span className="text-red-500 font-black">-</span> {item}
                  </li>
                ))}
              </ul>
            </div>
         </div>
      </div>
      
      {/* Existing Terminal component for specific tools */}
      <div className="w-full px-4 md:px-8 max-w-6xl relative z-20">
         <h3 className="w-full text-center font-archivo text-4xl md:text-5xl uppercase mb-12 font-black text-white">Community Automation Tools</h3>
         <CyberTerminal services={services} themeColor={themeColor} />
      </div>

    </div>
  );
}
