"use client";

import { motion } from 'framer-motion';
import { Rocket, FileText, HeartHandshake } from 'lucide-react';

export default function StartingYourOwnProject() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', minHeight: '70vh', justifyContent: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>
          Start Your <span className="text-gradient">Own Project</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
          Transitioning from contributor to maintainer requires more than just pushing code. A successful project requires marketing, documentation, and community management.
        </p>
      </motion.div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', width: 'fit-content', boxShadow: 'var(--glass-shadow)' }}>
            <FileText size={32} color="var(--accent-cyan)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Documentation is Marketing</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            If your README doesn't explain what the project does in the first 3 seconds, developers will leave. Provide copy-pasteable examples, clear installation instructions, and visual demos.
          </p>
        </motion.div>

        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="premium-glass"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', width: 'fit-content', boxShadow: 'var(--glass-shadow)' }}>
            <HeartHandshake size={32} color="var(--accent-indigo)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Frictionless Onboarding</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Add a `CONTRIBUTING.md` file. Label easy issues with "good first issue". The easier you make it for a stranger to run your code locally, the more contributors you will attract.
          </p>
        </motion.div>

        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="premium-glass"
          style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', width: 'fit-content', boxShadow: 'var(--glass-shadow)' }}>
            <Rocket size={32} color="var(--accent-pink)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Launch & Distribution</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Don't just push to GitHub and pray. Launch your project on HackerNews, ProductHunt, and Twitter/X. Write a blog post about the technical challenges you solved while building it.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
