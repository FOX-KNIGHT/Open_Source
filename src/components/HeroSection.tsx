"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
}

export default function HeroSection() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  // Size of the blob
  const size = isHovered ? 400 : 40;

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black text-white font-serif"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Background Image (IMAGE ONE placeholder) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=3288&auto=format&fit=crop')" }}
      />
      
      {/* Revealed Image via Blob (IMAGE TWO placeholder) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-10 flex items-center justify-center pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3174&auto=format&fit=crop')",
        }}
        animate={{
          WebkitMaskImage: `radial-gradient(circle at ${x}px ${y}px, black ${size}px, transparent ${size + 1}px)`,
          maskImage: `radial-gradient(circle at ${x}px ${y}px, black ${size}px, transparent ${size + 1}px)`,
        } as any}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />

      {/* Centered Main Text */}
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-difference flex justify-center items-center">
        <h1 
          className="text-8xl font-bold pointer-events-auto cursor-default tracking-tighter text-white"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          OPEN SOURCE
        </h1>
      </div>
    </div>
  );
}
