"use client";

import React from 'react';
import { InteractiveFolder } from './InteractiveFolder';
import { FileText, Image as ImageIcon, Code, Users, BookOpen } from 'lucide-react';

export default function ResourcesSection() {
  return (
    <section className="w-full bg-white border-t-8 border-black py-32 flex flex-col items-center justify-center gap-16 relative overflow-hidden">
      
      <div className="text-center z-10">
        <h2 className="font-archivo text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-black">
          Masterclass Resources
        </h2>
        <div className="inline-block border-4 border-black bg-[#ff5a00] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="font-mono font-bold text-sm md:text-base border-2 border-dashed border-black px-4 py-2 uppercase bg-white">
            Click to Reveal • Hover to Drift
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 z-10 w-full max-w-6xl px-8 mt-8">
        
        {/* Source Code */}
        <div className="border-8 border-black p-10 bg-[#0033ff] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
          <InteractiveFolder 
            size={1.5} 
            color="#000000" 
            label="SOURCE CODE"
            items={[
              <Code key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
              <FileText key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />,
            ]}
          />
        </div>

        {/* Documentation */}
        <div className="border-8 border-black p-10 bg-[#ffde00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
          <InteractiveFolder 
            size={1.5} 
            color="#000000" 
            label="DOCUMENTS"
            items={[
              <BookOpen key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
              <FileText key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />
            ]}
          />
        </div>

        {/* Assets & Community */}
        <div className="border-8 border-black p-10 bg-[#ff5a00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform duration-300">
          <InteractiveFolder 
            size={1.5} 
            color="#000000" 
            label="ASSETS"
            items={[
              <ImageIcon key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
              <Users key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />
            ]}
          />
        </div>

      </div>

    </section>
  );
}
