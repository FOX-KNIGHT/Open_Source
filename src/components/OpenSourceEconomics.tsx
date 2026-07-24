"use client";

import React from 'react';
import { DollarSign, Handshake, Heart } from 'lucide-react';

export default function OpenSourceEconomics() {
  return (
    <div className="w-full bg-black text-white py-32 px-4 md:px-8 flex flex-col items-center">
      <h2 className="font-archivo text-5xl md:text-7xl uppercase font-black text-center mb-24 max-w-5xl">The Economics of Open Source</h2>
      
      <div className="flex flex-col md:flex-row justify-center gap-12 w-full max-w-7xl">
         
         <div className="flex-1 min-w-[300px] border-8 border-white p-10 bg-[#111] shadow-[16px_16px_0px_0px_#ff0055] hover:-translate-y-4 transition-transform duration-300">
            <Heart size={64} className="text-[#ff0055] mb-8" />
            <h3 className="font-archivo text-4xl uppercase font-black mb-6">GitHub Sponsors</h3>
            <p className="font-mono text-base opacity-80 font-bold leading-relaxed">
              Allows the developer community to financially support the people and organizations who design, build, and maintain the open source projects they depend on, directly.
            </p>
         </div>
         
         <div className="flex-1 min-w-[300px] border-8 border-white p-10 bg-[#111] shadow-[16px_16px_0px_0px_#00ffff] hover:-translate-y-4 transition-transform duration-300">
            <Handshake size={64} className="text-[#00ffff] mb-8" />
            <h3 className="font-archivo text-4xl uppercase font-black mb-6">Open Collective</h3>
            <p className="font-mono text-base opacity-80 font-bold leading-relaxed">
              A legal and financial toolbox for grassroots groups. It’s a fundraising platform for open source communities to operate transparently and manage funds.
            </p>
         </div>
         
         <div className="flex-1 min-w-[300px] border-8 border-white p-10 bg-[#111] shadow-[16px_16px_0px_0px_#ccff00] hover:-translate-y-4 transition-transform duration-300">
            <DollarSign size={64} className="text-[#ccff00] mb-8" />
            <h3 className="font-archivo text-4xl uppercase font-black mb-6">Corporate Backing</h3>
            <p className="font-mono text-base opacity-80 font-bold leading-relaxed">
              Many massive open source projects (like React, Kubernetes, and TensorFlow) are primarily funded and maintained by large tech companies for mutual ecosystem benefit.
            </p>
         </div>

      </div>
    </div>
  );
}
