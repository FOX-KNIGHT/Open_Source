"use client";

import React, { useState } from 'react';
import { InteractiveFolder } from './InteractiveFolder';
import { FileText, Image as ImageIcon, Code, Users, BookOpen, Terminal, Layers, Palette } from 'lucide-react';

export default function ResourcesSection() {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);

  const toggleFolder = (index: number) => {
    setActiveFolder(prev => (prev === index ? null : index));
  };
  return (
    <section className="w-full bg-white border-t-8 border-black pt-24 pb-12 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
      
      <div className="text-center z-10">
        <h2 className="font-archivo text-5xl md:text-7xl font-black uppercase tracking-tighter text-black">
          Open Source Resources
        </h2>
      </div>

      <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8 z-10 w-full max-w-6xl px-8 mt-32 mb-6">
        
        {/* Source Code */}
        <div className="flex flex-col items-center w-full md:w-auto flex-1 min-w-[300px] max-w-[340px]">
          <div className="w-full h-[170px] flex justify-center items-center hover:-translate-y-4 transition-transform duration-300">
            <InteractiveFolder 
              size={2} 
              color="#0033ff" 
              label="SOURCE CODE"
              isOpen={activeFolder === 0}
              items={[
                <Code key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <Terminal key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <FileText key="3" className="w-8 h-8 text-black" strokeWidth={2.5} />,
              ]}
            />
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white w-full flex-grow">
            <h3 className="font-archivo font-black text-2xl uppercase">Complete Repo</h3>
            <p className="font-mono text-sm font-bold text-black/80 flex-grow">
              Access the entire Next.js project source code, including all components, animations, and configurations.
            </p>
            <button 
              onClick={() => toggleFolder(0)}
              className="mt-4 w-full py-3 bg-[#0033ff] text-white font-archivo font-black uppercase text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {activeFolder === 0 ? "CLOSE FOLDER" : "Download .ZIP"}
            </button>
          </div>
        </div>

        {/* Documentation */}
        <div className="flex flex-col items-center w-full md:w-auto flex-1 min-w-[300px] max-w-[340px]">
          <div className="w-full h-[170px] flex justify-center items-center hover:-translate-y-4 transition-transform duration-300">
            <InteractiveFolder 
              size={2} 
              color="#ffde00" 
              label="DOCUMENTS"
              isOpen={activeFolder === 1}
              items={[
                <BookOpen key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <Layers key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <FileText key="3" className="w-8 h-8 text-black" strokeWidth={2.5} />
              ]}
            />
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white w-full flex-grow">
            <h3 className="font-archivo font-black text-2xl uppercase">Developer Docs</h3>
            <p className="font-mono text-sm font-bold text-black/80 flex-grow">
              Read the comprehensive guides, architectural decisions, and setup instructions to get running instantly.
            </p>
            <button 
              onClick={() => toggleFolder(1)}
              className="mt-4 w-full py-3 bg-[#ffde00] text-black font-archivo font-black uppercase text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {activeFolder === 1 ? "CLOSE FOLDER" : "Read Manual"}
            </button>
          </div>
        </div>

        {/* Assets & Community */}
        <div className="flex flex-col items-center w-full md:w-auto flex-1 min-w-[300px] max-w-[340px]">
          <div className="w-full h-[170px] flex justify-center items-center hover:-translate-y-4 transition-transform duration-300">
            <InteractiveFolder 
              size={2} 
              color="#ff5a00" 
              label="ASSETS"
              isOpen={activeFolder === 2}
              items={[
                <ImageIcon key="1" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <Palette key="2" className="w-8 h-8 text-black" strokeWidth={2.5} />,
                <Users key="3" className="w-8 h-8 text-black" strokeWidth={2.5} />
              ]}
            />
          </div>
          
          <div className="flex flex-col items-center text-center gap-4 border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white w-full flex-grow">
            <h3 className="font-archivo font-black text-2xl uppercase">Media & Discord</h3>
            <p className="font-mono text-sm font-bold text-black/80 flex-grow">
              Download all high-res SVG vectors used in this project and join the community for exclusive updates.
            </p>
            <button 
              onClick={() => toggleFolder(2)}
              className="mt-4 w-full py-3 bg-[#ff5a00] text-white font-archivo font-black uppercase text-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              {activeFolder === 2 ? "CLOSE FOLDER" : "Join Discord"}
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
