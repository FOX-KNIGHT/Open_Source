"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, MessageSquare, PlayCircle, GitPullRequest } from 'lucide-react';

export default function FirstPRGuide({ themeColor }: { themeColor: string }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Find an Issue", desc: "Look for 'good first issue' or 'help wanted' labels on repositories." },
    { title: "Read Guidelines", desc: "Always check CONTRIBUTING.md before writing any code." },
    { title: "Draft PR", desc: "Open a Pull Request early with a [WIP] title to get feedback." },
    { title: "Review & Merge", desc: "Respond to maintainer feedback, make changes, and get merged!" }
  ];

  return (
    <div className="w-full flex flex-col items-center py-12 px-4 md:px-8">
      
      {/* Ecosystem Breakdown */}
      <div className="w-full max-w-6xl mb-32 flex flex-wrap gap-8 justify-center">
        <h3 className="w-full text-center font-archivo text-5xl md:text-6xl uppercase mb-12 font-black" style={{ color: themeColor }}>The GitHub Ecosystem</h3>
        {[
          { title: "Actions", icon: <PlayCircle size={48} />, desc: "Automate testing and deployment pipelines directly in your repository." },
          { title: "Discussions", icon: <MessageSquare size={48} />, desc: "Ask questions, share ideas, and build community outside of issues." },
          { title: "Projects", icon: <FileCode size={48} />, desc: "Organize work with Kanban boards, roadmaps, and custom views." }
        ].map((feat, idx) => (
          <div key={idx} className="flex-1 min-w-[280px] border-8 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] group hover:-translate-y-2 transition-transform duration-300">
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity" style={{ color: themeColor === '#ffffff' ? '#000' : themeColor }}>{feat.icon}</div>
            <h4 className="font-archivo text-3xl uppercase mb-4 text-black font-black">{feat.title}</h4>
            <p className="font-mono text-sm text-black/80 font-bold">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* First PR Wizard */}
      <div className="w-full max-w-6xl bg-[#0a0a0a] border-8 border-black flex flex-col md:flex-row overflow-hidden relative" style={{ boxShadow: `16px 16px 0px 0px ${themeColor}` }}>
        
        {/* Left Side: Steps */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center border-b-8 md:border-b-0 md:border-r-8 border-black relative z-10 bg-[#0a0a0a]">
          <div className="flex items-center gap-4 mb-8">
             <GitPullRequest size={48} style={{ color: themeColor }} />
             <h3 className="font-archivo text-4xl md:text-5xl uppercase font-black text-white leading-none">
               Your First PR
             </h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 md:p-5 border-4 transition-all duration-300 relative overflow-hidden group`}
                style={{ 
                  borderColor: activeStep === idx ? themeColor : '#333',
                  backgroundColor: activeStep === idx ? 'rgba(255,255,255,0.05)' : 'transparent'
                }}
              >
                {/* Active Indicator */}
                {activeStep === idx && (
                  <motion.div layoutId="activeIndicator" className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: themeColor }} />
                )}
                
                <h4 className="font-archivo text-2xl md:text-3xl uppercase mb-2 text-white group-hover:pl-2 transition-all">
                  <span className="opacity-50 mr-4 font-mono text-xl">{idx + 1}</span>
                  {step.title}
                </h4>
                <p className="font-mono text-sm text-white/70 group-hover:pl-2 transition-all">{step.desc}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Right Side: Image / Visual */}
        <div className="w-full md:w-1/2 relative min-h-[400px] bg-black p-6 md:p-10 flex items-center justify-center overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.9, rotate: -5, y: 20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 5, y: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative z-10 w-full max-w-md border-8 bg-[#111] shadow-2xl p-3 md:p-5"
              style={{ borderColor: themeColor }}
            >
              {/* Fake PR Header */}
              <div className="border-b-4 pb-4 mb-4" style={{ borderColor: themeColor }}>
                <h5 className="font-sans text-xl md:text-2xl font-bold text-white mb-2">Update README.md <span className="text-white/50 font-normal">#1</span></h5>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 border border-green-500/50 rounded-full font-bold">Open</span>
                  <span className="text-white/50 py-1">ayush opened this pull request</span>
                </div>
              </div>
              
              <div className="relative border-4 border-white/20 overflow-hidden h-[180px] md:h-[220px]">
                 <motion.div 
                   className="relative w-full"
                   animate={{ y: activeStep === 0 ? "0%" : activeStep === 1 ? "-5%" : activeStep === 2 ? "-15%" : "-65%" }}
                   transition={{ type: "spring", stiffness: 100, damping: 20 }}
                 >
                   <img src="/pull-request.png" alt="Pull Request UI" className="w-full h-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                   
                   {/* Simulated UI highlights based on step, mapped to full image height */}
                   {activeStep === 0 && <div className="absolute top-[2%] right-[2%] w-[10%] h-[4%] border-2 border-red-500 animate-pulse" />}
                   {activeStep === 1 && <div className="absolute top-[20%] left-[36%] w-[55%] h-[5%] border-2 border-yellow-500 animate-pulse" />}
                   {activeStep === 2 && <div className="absolute top-[41%] left-[36%] w-[55%] h-[5%] border-2 border-blue-500 animate-pulse" />}
                   {activeStep === 3 && <div className="absolute bottom-[2%] left-[5%] w-[90%] h-[8%] border-2 border-green-500 bg-green-500/20 animate-pulse" />}
                 </motion.div>
              </div>
              
              {/* Dynamic Overlay Text based on step */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 bg-black border-4 px-6 py-3 shadow-xl transform rotate-3" style={{ borderColor: themeColor }}>
                <p className="font-mono font-bold text-sm uppercase" style={{ color: themeColor }}>
                  {activeStep === 0 && "STATUS: SEARCHING"}
                  {activeStep === 1 && "STATUS: READING DOCS"}
                  {activeStep === 2 && "STATUS: COMMITTING"}
                  {activeStep === 3 && "STATUS: MERGED!"}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
