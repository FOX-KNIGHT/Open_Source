"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const rows = container.querySelectorAll('.ticker-row');

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=4000', // Increased scroll distance since they animate sequentially
        }
      });

      // Animate rows sequentially, all moving left so the sentence is readable
      rows.forEach((row) => {
        const scrollAmount = row.scrollWidth - window.innerWidth;

        gsap.set(row, { x: 0 }); // Ensure they start left-aligned
        tl.to(row, {
          x: -scrollAmount,
          ease: 'none',
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden bg-black flex flex-col justify-center gap-4 py-10">
      
      {/* Row 1 */}
      <div className="ticker-row flex w-max flex-shrink-0 whitespace-nowrap items-center text-[#ccff00] text-7xl md:text-9xl font-black uppercase tracking-tighter px-[10vw]">
        <span>IN EVERY COMMIT,</span>
        <svg className="inline-block mx-12 w-20 h-20 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span>DISCOVER THE</span>
      </div>

      {/* Row 2 */}
      <div className="ticker-row flex w-max flex-shrink-0 whitespace-nowrap items-center text-white text-7xl md:text-9xl font-black uppercase tracking-tighter px-[10vw]">
        <span>UNDENIABLE POWER</span>
        <span className="text-[#ff00ff] mx-8">✦</span>
        <span>OF SHARING</span>
      </div>

      {/* Row 3 */}
      <div className="ticker-row flex w-max flex-shrink-0 whitespace-nowrap items-center text-[#8a2be2] text-7xl md:text-9xl font-black uppercase tracking-tighter px-[10vw]">
        <span>PURE OPEN-SOURCE</span>
        <span className="text-white mx-8">✦</span>
        <span>CODE.</span>
      </div>

    </div>
  );
}
