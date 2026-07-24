"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { KineticData } from './KineticModal';
import { ArrowDown } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExplodedViewProps {
  items: KineticData[];
  onSelect: (item: KineticData) => void;
}

export default function ExplodedView({ items, onSelect }: ExplodedViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const card0Ref = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Setup timeline with scrolltrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1500", // Reduced scrolling distance for faster animation
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      const cards = [card0Ref.current, card1Ref.current, card2Ref.current, card3Ref.current].filter(Boolean) as HTMLDivElement[];

      // Initial state: ensure everything is visible in the DOM
      gsap.set(cards, { opacity: 0, scale: 0.1 });
      gsap.set(mockupRef.current, { scale: 1, opacity: 1, rotationX: 0, rotationY: 0 });

      const explodeOffsets = [
        { x: "-50vw", y: "-40vh", rotate: -25 },
        { x: "50vw", y: "-30vh", rotate: 20 },
        { x: "-40vw", y: "50vh", rotate: 35 },
        { x: "40vw", y: "40vh", rotate: -15 },
      ];

      // 1. Core pulses and explodes (0% -> 20%)
      tl.to(mockupRef.current, {
        scale: 2,
        opacity: 0,
        rotationZ: 45,
        duration: 0.2,
        ease: "power4.in"
      });

      // 2. Cards explode outwards from center (20% -> 50%)
      cards.forEach((card, i) => {
        // Calculate offset to center of screen
        const rect = card.getBoundingClientRect();
        // If rect is 0, we fallback to 0
        const cardCenterX = rect.width ? rect.left + rect.width / 2 : window.innerWidth / 2;
        const cardCenterY = rect.height ? rect.top + rect.height / 2 : window.innerHeight / 2;
        const startX = (window.innerWidth / 2) - cardCenterX;
        const startY = (window.innerHeight / 2) - cardCenterY;

        tl.fromTo(card, 
          { x: startX, y: startY, scale: 0.1, opacity: 0, rotation: 0 },
          { 
            x: explodeOffsets[i].x, 
            y: explodeOffsets[i].y, 
            scale: 0.8, 
            opacity: 1, 
            rotation: explodeOffsets[i].rotate, 
            duration: 0.3,
            ease: "power4.out"
          },
          0.2
        );
      });

      // 3. Cards fly back together and assemble into the grid (50% -> 100%)
      cards.forEach((card, i) => {
        tl.to(card, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1, // ensure it stays visible
          duration: 0.5,
          ease: "power3.inOut"
        }, 0.5);
      });

      // Add a small rotation animation to the mockup continuously
      gsap.to(mockupRef.current, {
        rotationY: 360,
        repeat: -1,
        duration: 8,
        ease: "linear"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center border-y-8 border-black py-32">
      
      {/* Central Mockup (The Core) */}
      <div 
        ref={mockupRef}
        className="absolute z-50 w-64 h-64 bg-black flex flex-col items-center justify-center border-8 border-[#ff5a00] shadow-[8px_8px_0px_0px_#ff5a00]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2 className="font-archivo text-5xl text-white uppercase tracking-tighter text-center leading-none">
          Deep<br/>Dive<br/>Core
        </h2>
        <div className="absolute -bottom-16 flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold">
          <ArrowDown className="animate-bounce" /> Scroll to Explode
        </div>
      </div>

      {/* The Final Assembled Grid */}
      <div ref={gridRef} className="w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 z-40">
        
        {/* Item 0: Git Mastery */}
        <div 
          ref={card0Ref}
          onClick={() => onSelect(items[0])}
          className="col-span-1 md:col-span-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#ff5a00] p-6 md:p-8 cursor-pointer flex flex-col md:flex-row gap-6 hover:scale-[1.02] transition-transform"
        >
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{items[0].heroTitle}</h3>
              <p className="text-lg md:text-xl font-bold border-l-4 border-black pl-4">{items[0].metadata.label}</p>
            </div>
            <div className="mt-6">
              <span className="font-mono text-xs md:text-sm font-bold uppercase bg-black text-white px-4 py-2">Click to Access</span>
            </div>
          </div>
          <div className="border-4 border-black bg-white w-full md:w-56 h-32 md:h-full flex items-center justify-center p-0 overflow-hidden relative group">
             <img src="/git-node-map.png" alt="Git Node Map" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
             <div className="absolute font-mono text-center font-bold text-sm bg-black text-white px-2 py-1">Git Node Map</div>
          </div>
        </div>

        {/* Item 1: GitHub */}
        <div 
          ref={card1Ref}
          onClick={() => onSelect(items[1])}
          className="col-span-1 md:col-span-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white p-6 md:p-8 text-black cursor-pointer flex flex-col justify-between hover:scale-[1.02] transition-transform"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">{items[1].heroTitle}</h3>
            <p className="text-base font-bold text-black bg-white inline-block px-2">{items[1].metadata.label}</p>
          </div>
          <div className="mt-6 border-4 border-black bg-white h-32 w-full p-0 overflow-hidden relative group">
             <img src="/pull-request.png" alt="Pull Request" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        </div>

        {/* Item 2: Docs */}
        <div 
          ref={card2Ref}
          onClick={() => onSelect(items[2])}
          className="col-span-1 md:col-span-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#0033ff] p-6 md:p-8 text-white cursor-pointer flex flex-col justify-between hover:scale-[1.02] transition-transform"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">{items[2].heroTitle}</h3>
          <p className="text-lg font-bold mb-6">Code without docs is dead. Protect your work.</p>
          <div className="border-4 border-black bg-white h-32 w-full p-0 overflow-hidden relative group">
             <img src="/image.png" alt="Docs" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
          </div>
        </div>

        {/* Item 3: Community */}
        <div 
          ref={card3Ref}
          onClick={() => onSelect(items[3])}
          className="col-span-1 md:col-span-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#ffde00] p-6 md:p-8 text-black cursor-pointer flex flex-col justify-between hover:scale-[1.02] transition-transform"
        >
          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">{items[3].heroTitle}</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white border-4 border-black text-sm md:text-base text-center font-bold text-black p-0 h-32 overflow-hidden relative group">
              <img src="/branching.png" alt="Code of Conduct" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs">Conduct</div>
            </div>
            <div className="bg-white border-4 border-black text-sm md:text-base text-center font-bold text-black p-0 h-32 overflow-hidden relative group">
              <img src="/git-graph.png" alt="Issue Triaging" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs">Triaging</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
