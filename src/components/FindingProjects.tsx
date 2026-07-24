"use client";

import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Users } from 'lucide-react';

export default function FindingProjects() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
      
      {/* Title Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
          Finding <span className="text-gradient">Projects</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          You don't have to be a senior engineer to contribute. Here is how to get started today.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Finding Projects */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <Search size={40} color="var(--accent-cyan)" />
            </div>
            <h2 style={{ fontSize: '3rem' }}>How to Find the Right Project</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', color: 'var(--text-secondary)' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.4rem', display: 'block', marginBottom: '1rem' }}>1. Scratch Your Own Itch</strong> 
              <p style={{ fontSize: '1.15rem' }}>The best project is one you already use. Look at the libraries in your `package.json`. If you find a bug, fix it.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.4rem', display: 'block', marginBottom: '1rem' }}>2. Use GitHub Labels</strong> 
              <p style={{ fontSize: '1.15rem' }}>Search for issues tagged with <code>good first issue</code> or <code>help wanted</code>. Maintainers create these specifically for you.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)', fontSize: '1.4rem', display: 'block', marginBottom: '1rem' }}>3. Check Project Health</strong> 
              <p style={{ fontSize: '1.15rem' }}>Before committing your time, check when the last commit was made. Avoid projects that look abandoned.</p>
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem' }}>
          {/* Documentation */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <PenTool size={40} color="var(--accent-indigo)" />
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Documentation</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.25rem' }}>
                Documentation is the highest ROI contribution you can make. Developers hate writing docs, so maintainers will love you forever if you fix typos, write tutorials, or translate docs.
              </p>
            </div>
          </motion.div>

          {/* Design & Community */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Layout size={40} color="var(--accent-pink)" />
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Design</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>UI/UX Design:</strong> Many open source projects look terrible. Contributing a Figma mockup or a new CSS stylesheet is incredibly valuable.
              </p>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Issue Triage:</strong> Reproducing bugs, asking for logs, or closing duplicate issues saves maintainers hundreds of hours.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
