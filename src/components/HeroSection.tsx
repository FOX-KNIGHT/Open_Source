"use client";

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', minHeight: '70vh', justifyContent: 'center' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left: Massive Typography */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <span style={{ 
            display: 'inline-block', 
            alignSelf: 'flex-start',
            padding: '0.75rem 1.5rem', 
            background: 'var(--bg-secondary)', 
            borderRadius: '40px', 
            color: 'var(--accent-cyan)', 
            fontSize: '1rem', 
            fontWeight: 600,
            letterSpacing: '-0.01em',
            border: '1px solid var(--glass-border)' 
          }}>
            Google Developer Student Clubs
          </span>
          <h1 style={{ fontSize: '6.5rem', lineHeight: 1 }}>
            Open Source <br />
            <span className="text-gradient">Masterclass</span>
          </h1>
          <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            From your first commit to understanding the global economics of free software.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
              <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-cyan)' }}></span>
              Press Space to Begin
            </div>
          </div>
        </motion.div>

        {/* Right: Floating Glass Art */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ position: 'relative', height: '500px' }}
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="premium-glass"
            style={{ 
              position: 'absolute', 
              top: '10%', 
              right: '10%', 
              width: '350px', 
              height: '350px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.8)'
            }}
          >
            <div style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))',
              filter: 'blur(30px)',
              opacity: 0.5
            }}></div>
            <div style={{ position: 'absolute', fontSize: '8rem', opacity: 0.8 }}>⌘</div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
