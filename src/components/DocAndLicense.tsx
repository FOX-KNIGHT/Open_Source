"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckSquare, ShieldAlert, ShieldCheck, Scale } from 'lucide-react';

export default function DocAndLicense({ themeColor }: { themeColor: string }) {
  const [activeLicense, setActiveLicense] = useState<number | null>(null);

  const licenses = [
    {
      id: 'mit',
      name: 'MIT License',
      icon: <ShieldCheck size={48} />,
      desc: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice']
    },
    {
      id: 'apache',
      name: 'Apache 2.0',
      icon: <Scale size={48} />,
      desc: 'A permissive license whose main conditions require preservation of copyright and license notices, and provides an express grant of patent rights.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Trademark use', 'Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes']
    },
    {
      id: 'gpl',
      name: 'GNU GPLv3',
      icon: <ShieldAlert size={48} />,
      desc: 'A strong copyleft license conditioned on making available complete source code of licensed works and modifications.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes', 'Disclose source', 'Same license']
    }
  ];

  const readmeItems = [
    { title: 'Project Title & Description', desc: 'Clear name and a 1-2 sentence pitch.' },
    { title: 'Badges', desc: 'Status, license, build passing, etc.' },
    { title: 'Table of Contents', desc: 'For longer documents.' },
    { title: 'Installation', desc: 'Step-by-step setup instructions.' },
    { title: 'Usage', desc: 'Examples of how to use the project.' },
    { title: 'Contributing', desc: 'How others can help.' },
    { title: 'License', desc: 'Link to the full license text.' }
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 md:px-8">
      
      {/* Licenses Section */}
      <div className="w-full max-w-6xl mb-32">
        <h3 className="w-full text-center font-archivo text-5xl md:text-7xl uppercase mb-12 font-black" style={{ color: themeColor }}>Choose a License</h3>
        
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {licenses.map((lic, idx) => (
             <motion.div 
               layout
               key={idx} 
               onClick={() => setActiveLicense(activeLicense === idx ? null : idx)}
               className={`border-8 border-black p-8 cursor-pointer flex-1 transition-colors duration-300 ${activeLicense === idx ? 'bg-[#222]' : 'bg-[#111] hover:bg-[#1a1a1a]'}`}
               style={{ boxShadow: `8px 8px 0px 0px ${themeColor}` }}
             >
               <motion.div layout className="flex flex-col items-center text-center">
                 <div className="mb-6" style={{ color: themeColor }}>{lic.icon}</div>
                 <h4 className="font-archivo text-3xl md:text-4xl uppercase text-white mb-4 font-black">{lic.name}</h4>
                 <p className="font-mono text-sm text-white/80 font-bold mb-4">{lic.desc}</p>
                 
                 <AnimatePresence>
                   {activeLicense === idx && (
                     <motion.div 
                       initial={{ opacity: 0, height: 0 }}
                       animate={{ opacity: 1, height: 'auto' }}
                       exit={{ opacity: 0, height: 0 }}
                       className="w-full mt-8 text-left flex flex-col gap-6 border-t-4 pt-6 border-white/10"
                     >
                        <div>
                          <h5 className="font-bold text-green-400 uppercase tracking-widest mb-3 text-sm">Permissions</h5>
                          <ul className="flex flex-wrap gap-2">
                            {lic.permissions.map((p, i) => <li key={i} className="text-xs font-mono font-bold bg-green-900/40 text-green-300 px-3 py-1 border border-green-500/30">{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-red-400 uppercase tracking-widest mb-3 text-sm">Limitations</h5>
                          <ul className="flex flex-wrap gap-2">
                            {lic.limitations.map((p, i) => <li key={i} className="text-xs font-mono font-bold bg-red-900/40 text-red-300 px-3 py-1 border border-red-500/30">{p}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-400 uppercase tracking-widest mb-3 text-sm">Conditions</h5>
                          <ul className="flex flex-wrap gap-2">
                            {lic.conditions.map((p, i) => <li key={i} className="text-xs font-mono font-bold bg-blue-900/40 text-blue-300 px-3 py-1 border border-blue-500/30">{p}</li>)}
                          </ul>
                        </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </motion.div>
             </motion.div>
          ))}
        </div>
      </div>

      {/* README Checklist Section */}
      <div className="w-full max-w-4xl relative z-10">
        <h3 className="w-full text-center font-archivo text-5xl md:text-7xl uppercase mb-12 font-black" style={{ color: themeColor }}>Perfect README</h3>
        <div className="bg-white border-8 border-black p-8 md:p-16" style={{ boxShadow: `16px 16px 0px 0px ${themeColor}` }}>
           <div className="flex flex-col gap-8">
             {readmeItems.map((item, idx) => (
               <div key={idx} className="flex items-start gap-6 group hover:-translate-y-2 transition-transform duration-300 cursor-default">
                 <div className="mt-1">
                   <CheckSquare size={36} className="text-black opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: themeColor === '#ffffff' ? '#000' : themeColor }} />
                 </div>
                 <div className="flex flex-col border-b-4 border-black/10 pb-4 w-full group-hover:border-black/30 transition-colors">
                   <h4 className="font-archivo text-2xl md:text-3xl uppercase font-black text-black">{item.title}</h4>
                   <p className="font-mono text-black/70 font-bold text-sm md:text-base mt-2">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
      
    </div>
  );
}
