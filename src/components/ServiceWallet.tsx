"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronUp } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ServiceData {
  title: string;
  description: string;
  detailedContent: string;
  tags: string[];
}

interface ServiceWalletProps {
  walletImage: string;
  services: ServiceData[];
  themeColor: string;
  className?: string;
}

const ServiceCard = ({ 
  data, 
  index, 
  isActive, 
  isHovered, 
  onClick,
  totalCards,
  themeColor
}: { 
  data: ServiceData; 
  index: number; 
  isActive: boolean; 
  isHovered: boolean;
  onClick: () => void;
  totalCards: number;
  themeColor: string;
}) => {
  // If active, pull it out enough to read but not so high it clips the top nav.
  const yOffset = isActive 
    ? -240 
    : isHovered 
      ? -280 + (index * 70) // Hover: Fan out much higher with large 70px gaps so titles are fully readable
      : -10 + (index * 10); // Resting: tucked in
      
  const zIndex = isActive ? 50 : 10 + index;
  const scale = isActive ? 1.05 : 1 - (totalCards - 1 - index) * 0.05;
  const brightness = isActive ? 1 : isHovered ? 1 : 0.7 - (totalCards - 1 - index) * 0.1;

  return (
    <motion.div
      layout
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      initial={false}
      animate={{
        y: yOffset,
        scale: scale,
        zIndex: zIndex,
        filter: `brightness(${brightness})`,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn(
        "absolute left-0 w-full rounded-xl cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform-gpu border-4 border-black bg-white flex flex-col",
        isActive ? "h-[420px]" : "h-[360px]"
      )}
      style={{
        transformOrigin: 'bottom center',
        top: '-45px'
      }}
    >
      <div className="flex-1 p-6 md:p-8 font-mono overflow-y-auto scrollbar-width-none [&::-webkit-scrollbar]:hidden flex flex-col">
        <div className="flex justify-between items-start mb-6 border-b-4 border-black pb-4">
           <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.85] text-black" style={{ color: themeColor === '#ffffff' ? '#000000' : themeColor }}>
             {data.title}
           </h3>
           <span className="text-2xl md:text-4xl font-black opacity-20 text-black">{(index + 1).toString().padStart(2, '0')}</span>
        </div>
        
        <p className="text-sm md:text-base font-bold mb-6 text-black leading-snug">
          {data.description}
        </p>

        {isActive && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="text-xs md:text-sm font-sans leading-relaxed border-l-4 border-black pl-4 text-black/80 flex-1"
          >
            {data.detailedContent}
          </motion.div>
        )}

        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t-2 border-dashed border-black/20">
          {data.tags.map((tag, tIdx) => (
            <span key={tIdx} className="px-3 py-1 border-2 border-black font-mono text-[10px] md:text-xs uppercase font-black text-black" style={{ backgroundColor: themeColor === '#ffffff' ? '#e5e7eb' : themeColor }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function ServiceWallet({ walletImage, services, themeColor, className }: ServiceWalletProps) {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [isWalletHovered, setIsWalletHovered] = useState(false);

  const handleBackgroundClick = () => {
    setActiveCardIndex(null);
  };

  return (
    <div 
      className={cn("relative w-full min-h-[750px] flex flex-col items-center justify-center overflow-visible", className)}
      onClick={handleBackgroundClick}
    >
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl perspective-1000 pt-64">
        
        <div 
          className="relative w-80 h-56 md:w-[40rem] md:h-80"
          onMouseEnter={() => setIsWalletHovered(true)}
          onMouseLeave={() => setIsWalletHovered(false)}
        >
          {/* Card Stack Area */}
          <div className="absolute inset-x-4 md:inset-x-8 top-0 bottom-0 perspective-1000 transform-style-3d pointer-events-none">
            {services.map((service, index) => (
              <div key={index} className="pointer-events-auto">
                <ServiceCard 
                  data={service}
                  index={index}
                  isActive={activeCardIndex === index}
                  isHovered={isWalletHovered}
                  onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                  totalCards={services.length}
                  themeColor={themeColor}
                />
              </div>
            ))}
          </div>

          {/* Wallet Pocket (Front) */}
          <motion.div 
            className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center overflow-hidden border-8 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] bg-white group"
            initial={false}
            animate={{
              rotateX: isWalletHovered || activeCardIndex !== null ? 8 : 0,
              y: isWalletHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformOrigin: 'bottom center' }}
          >
            <img src={walletImage} alt="Wallet Cover" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 font-mono text-xs uppercase font-bold border-2 border-white/20">
              {services.length} Services
            </div>
            
            {/* Wallet Slot Visual */}
            <div className="absolute top-0 inset-x-8 h-2 bg-black/30 rounded-b-xl blur-[1px]" />
          </motion.div>
          
        </div>

        {/* Instruction Hint */}
        <motion.div 
          className="text-white/80 font-mono text-xs tracking-widest uppercase mt-20 flex flex-col items-center gap-2 font-bold bg-black px-6 py-3 border-4 border-white/10"
          animate={{ opacity: isWalletHovered || activeCardIndex !== null ? 1 : 0.5 }}
        >
          <ChevronUp size={20} className={isWalletHovered && activeCardIndex === null ? "animate-bounce" : ""} style={{ color: themeColor }} />
          {activeCardIndex !== null ? "Click anywhere to close card" : "Hover wallet to reveal services"}
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceWallet;
