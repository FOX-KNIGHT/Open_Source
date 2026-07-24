"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CircularGalleryProps {
  items: string[];
  bend?: number;
  textColor?: string;
}

export default function CircularGallery({ items, bend = 3, textColor = "#ccff00" }: CircularGalleryProps) {
  // Note: This is a CSS-based placeholder for the requested OGL CircularGallery component.
  // The actual WebGL/OGL implementation should replace this once provided.

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center cursor-grab active:cursor-grabbing bg-black overflow-hidden"
      style={{ perspective: "2500px" }}
    >
      {/* Fade Overlays to hide edge intersections */}
      <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      <div className="absolute top-10 text-white/50 text-xs tracking-widest uppercase z-10">
        [Placeholder: OGL Circular Gallery WebGL Component]
      </div>
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: [0, -360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i;
          return (
            <div
              key={i}
              className="absolute text-2xl md:text-5xl font-black uppercase tracking-tighter whitespace-nowrap px-8"
              style={{
                color: textColor,
                transform: `rotateY(${angle}deg) translateZ(550px)`,
                transformStyle: "preserve-3d",
                backfaceVisibility: 'hidden',
                WebkitTextStroke: `1px ${textColor}`,
                WebkitTextFillColor: i % 2 === 0 ? textColor : 'transparent',
                textShadow: '3px 3px 0px rgba(0,0,0,1)'
              }}
            >
              {item}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
