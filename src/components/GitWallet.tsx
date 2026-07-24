"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GitBranch, GitCommit, GitMerge, ChevronUp } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardData {
  id: string;
  type: 'gold' | 'silver' | 'platinum';
  hash: string;
  author: string;
  time: string;
  branch: string;
}

interface GitWalletProps {
  balance?: string;
  className?: string;
  themeColor?: string;
  walletImage?: string;
}

const MOCK_CARDS: CardData[] = [
  {
    id: '1',
    type: 'gold',
    hash: 'commit a1b2c3d4',
    author: 'LINUS TORVALDS',
    time: '2 MINS AGO',
    branch: 'main'
  },
  {
    id: '2',
    type: 'silver',
    hash: 'commit 8f9e0d1c',
    author: 'ALEXANDER HAMILTON',
    time: '4 HOURS AGO',
    branch: 'feature/auth'
  }
];

const Card = ({ 
  data, 
  index, 
  isActive, 
  isHovered, 
  onClick,
  totalCards 
}: { 
  data: CardData; 
  index: number; 
  isActive: boolean; 
  isHovered: boolean;
  onClick: () => void;
  totalCards: number;
}) => {
  const isGold = data.type === 'gold';
  
  const yOffset = isActive 
    ? 55 
    : isHovered 
      ? -160 + (index * 60) 
      : 0 + (index * 15); 
      
  const zIndex = isActive ? 40 : 10 + index;
  
  const scale = isActive ? 1.05 : 1 - (totalCards - 1 - index) * 0.05;
  const brightness = isActive ? 1 : isHovered ? 1 : 0.6 - (totalCards - 1 - index) * 0.1;
  const rotateX = isActive ? 0 : isHovered ? -5 : 0; 

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
        rotateX: rotateX,
        filter: `brightness(${brightness})`,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn(
        "absolute left-0 w-full h-[200px] rounded-xl cursor-pointer shadow-xl overflow-hidden transform-gpu border border-white/10",
        isGold ? "bg-gradient-to-br from-[#E6C685] via-[#A88B4D] to-[#6C5528]" : "bg-gradient-to-br from-[#E2E2E2] via-[#9CA3AF] to-[#4B5563]"
      )}
      style={{
        transformStyle: 'preserve-3d',
        top: '-45px', 
        transformOrigin: 'bottom center'
      }}
    >
      <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-5 h-full flex flex-col justify-between font-mono text-shadow-sm select-none">
        <div className="flex justify-between items-start">
          <div className="w-10 h-7 rounded bg-black/10 border border-black/10 flex items-center justify-center backdrop-blur-sm">
             <div className="w-7 h-4 border border-black/20 rounded-sm" />
          </div>
          <GitBranch className={cn("w-5 h-5 opacity-80", isGold ? "text-[#3E2C0F]" : "text-gray-800")} />
        </div>

        <div className="space-y-3">
          <div className={cn("text-lg tracking-widest font-bold font-mono", isGold ? "text-[#3E2C0F]" : "text-gray-900")}>
            {data.hash}
          </div>
          
          <div className="flex justify-between items-end">
            <div className="space-y-0.5">
              <div className={cn("text-[9px] uppercase opacity-70", isGold ? "text-[#3E2C0F]" : "text-gray-800")}>Author</div>
              <div className={cn("text-xs font-bold tracking-wide uppercase", isGold ? "text-[#3E2C0F]" : "text-gray-900")}>
                {data.author}
              </div>
            </div>
            <div className="space-y-0.5 text-right">
               <div className={cn("text-[9px] uppercase opacity-70", isGold ? "text-[#3E2C0F]" : "text-gray-800")}>Modified</div>
               <div className={cn("text-xs font-bold", isGold ? "text-[#3E2C0F]" : "text-gray-900")}>{data.time}</div>
            </div>
          </div>
        </div>

        <div className={cn("absolute top-5 right-5 flex items-center gap-1", isGold ? "text-[#3E2C0F]" : "text-gray-900")}>
          <div className="font-archivo text-lg font-black tracking-tighter uppercase">{data.branch}</div>
          <GitCommit className="w-4 h-4 opacity-60" />
        </div>
      </div>
    </motion.div>
  );
};

export default function GitWallet({ balance = "14,234 COMMITS", className, themeColor = "#ff5a00", walletImage = "/git.png" }: GitWalletProps) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [isWalletHovered, setIsWalletHovered] = useState(false);

  const handleBackgroundClick = () => {
    setActiveCardId(null);
  };

  const activeData = activeCardId ? MOCK_CARDS.find(c => c.id === activeCardId) : null;
  const currentTitle = activeData ? `BRANCH: ${activeData.branch.toUpperCase()}` : "REPOSITORY STATUS";
  const currentValue = activeData ? "HEAD IS AT" : balance;

  return (
    <div 
      className={cn("relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black border-y-8 border-black", className)}
      style={{ borderColor: themeColor }}
      onClick={handleBackgroundClick}
    >
      <div className="absolute top-0 left-[-20%] w-[140%] h-[140%] opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 50%, ${themeColor}, transparent 70%)` }} />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md perspective-1000">
        
        <div 
          className="relative w-80 h-56 md:w-96 md:h-64"
          onMouseEnter={() => setIsWalletHovered(true)}
          onMouseLeave={() => setIsWalletHovered(false)}
        >
          <div className="absolute inset-x-6 top-0 bottom-0 perspective-1000 transform-style-3d pointer-events-none">
            {MOCK_CARDS.map((card, index) => (
              <div key={card.id} className="pointer-events-auto">
                <Card 
                  data={card}
                  index={index}
                  isActive={activeCardId === card.id}
                  isHovered={isWalletHovered}
                  onClick={() => setActiveCardId(activeCardId === card.id ? null : card.id)}
                  totalCards={MOCK_CARDS.length}
                />
              </div>
            ))}
          </div>

          <motion.div 
            className="absolute inset-0 bg-[#141414] rounded-2xl shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)] border border-white/5 z-30 flex flex-col items-center justify-center text-center overflow-hidden"
            initial={false}
            animate={{
              rotateX: isWalletHovered || activeCardId ? 5 : 0,
              y: isWalletHovered ? 5 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="absolute inset-0 opacity-60 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-3 border border-dashed border-white/10 rounded-xl opacity-50 pointer-events-none z-20" />

            {walletImage && (
              <img 
                src={walletImage} 
                alt="Wallet Cover" 
                className="absolute inset-0 w-full h-full object-cover z-10 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
              />
            )}

            <div className="relative z-30 flex flex-col items-center space-y-2 mt-4 bg-black/80 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/10">
              <span className="text-white/60 text-[10px] tracking-[0.25em] font-bold uppercase">{currentTitle}</span>
              <motion.div 
                key={currentValue}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl text-[#E0E0E0] font-archivo font-black tracking-tight uppercase"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
              >
                {currentValue}
              </motion.div>
            </div>

            <div className="absolute top-0 inset-x-8 h-1 bg-black/40 rounded-b-lg blur-[1px]" />
          </motion.div>
          
           <motion.div 
            className="absolute inset-0 bg-[#080808] rounded-2xl z-0 transform translate-y-3 translate-z-[-10px] scale-[0.98]"
          />

        </div>

        <motion.div 
          className="text-white/40 font-mono text-[10px] tracking-widest uppercase mt-12 flex flex-col items-center gap-2 font-medium"
          animate={{ opacity: isWalletHovered ? 1 : 0.5 }}
        >
          <ChevronUp size={16} className={isWalletHovered ? "animate-bounce" : ""} />
          {activeCardId ? "Click background to close" : "Select a branch"}
        </motion.div>
      </div>
    </div>
  );
}
