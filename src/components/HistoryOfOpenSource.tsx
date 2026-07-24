"use client";

import { motion } from 'framer-motion';
import { BookOpen, History, Users } from 'lucide-react';

export default function HistoryOfOpenSource() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', minHeight: '70vh', justifyContent: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>
          The <span className="text-gradient">Origins</span> of Open Source
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
          Understanding where we came from helps us understand where we are going. It started as a philosophy and evolved into the foundation of the modern internet.
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
            <History size={32} color="var(--accent-cyan)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>The Free Software Movement</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Started in the 1980s by Richard Stallman. The core philosophy was that users should have the freedom to run, copy, distribute, study, change, and improve software. It was an ethical imperative, not just a development model.
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
            <Users size={32} color="var(--accent-indigo)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>The Open Source Shift</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Coined in 1998, "Open Source" shifted the focus from philosophy to pragmatic business value. It argued that decentralized, peer-reviewed development produces better, more secure software.
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
            <BookOpen size={32} color="var(--accent-pink)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Linux & The Internet</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Linus Torvalds created Linux in 1991. It proved that a massive, globally distributed group of volunteers could build a world-class operating system that eventually dominated the servers running the internet.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
