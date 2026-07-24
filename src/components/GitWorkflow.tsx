"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, GitCommit, GitPullRequest, GitFork, Copy } from 'lucide-react';
import InteractiveFolder from './InteractiveFolder';

export default function GitWorkflow({ themeColor }: { themeColor: string }) {
  const steps = [
    { id: 'fork', title: 'FORK', cmd: 'Click Fork on GitHub', icon: <GitFork size={32} /> },
    { id: 'clone', title: 'CLONE', cmd: 'git clone <url>', icon: <Copy size={32} /> },
    { id: 'branch', title: 'BRANCH', cmd: 'git checkout -b <name>', icon: <GitBranch size={32} /> },
    { id: 'commit', title: 'COMMIT', cmd: 'git commit -m "msg"', icon: <GitCommit size={32} /> },
    { id: 'push', title: 'PUSH', cmd: 'git push origin <name>', icon: <GitPullRequest size={32} /> },
  ];

  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center py-12">
      {/* Node Map Image Header */}
      <div className="relative w-full max-w-5xl h-64 md:h-80 mb-20 border-8 border-black shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] overflow-hidden group">
         <img src="/git-node-map.png" alt="Git Node Map" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500" />
         <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-8 backdrop-blur-sm">
           <h3 className="font-archivo text-4xl md:text-6xl uppercase font-black text-white text-center leading-none">
             The Contribution Timeline
           </h3>
           <p className="font-mono text-sm mt-6 font-bold tracking-widest uppercase px-4 py-2 border-2 border-dashed" style={{ borderColor: themeColor, color: themeColor }}>
             Hover over the timeline nodes below
           </p>
         </div>
      </div>

      {/* Interactive Timeline Folders */}
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-12 md:gap-8 relative w-full max-w-6xl mt-8">
        {/* Timeline connector line */}
        <div className="hidden md:block absolute top-[40%] left-[5%] right-[5%] h-2 bg-white/20 -translate-y-1/2 z-0" />
        
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className="relative z-10 flex flex-col items-center gap-6 group flex-1"
            onMouseEnter={() => setActiveStep(idx)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* The Node Folder */}
            <div className="border-8 border-black p-4 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-4 transition-transform duration-300">
               <InteractiveFolder 
                  size={1.1}
                  color={activeStep === idx ? themeColor : '#000000'}
                  label={step.title}
                  items={[
                    <div key="icon" className="text-black flex items-center justify-center w-full h-full">{step.icon}</div>
                  ]}
               />
            </div>
            
            {/* Tooltip / Command Info */}
            <div className="relative h-16 w-full flex justify-center">
              <AnimatePresence>
                {activeStep === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-0 bg-black border-4 border-white px-4 py-2 whitespace-nowrap z-50 shadow-2xl"
                    style={{ borderColor: themeColor }}
                  >
                    <p className="font-mono font-bold text-xs md:text-sm" style={{ color: themeColor }}>$ {step.cmd}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
