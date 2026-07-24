"use client";

import { motion } from 'framer-motion';
import { Award, Globe, GraduationCap } from 'lucide-react';

export default function OpenSourcePrograms() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', minHeight: '70vh', justifyContent: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>
          Open Source <span className="text-gradient">Programs</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
          You don't have to start contributing alone. Several global programs pay students and beginners to write open source code under the guidance of expert mentors.
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
            <Globe size={32} color="var(--accent-cyan)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Google Summer of Code</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A global, online program focused on bringing new contributors into open source software development. Contributors write code for various open source organizations and receive a stipend from Google.
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
            <GraduationCap size={32} color="var(--accent-indigo)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>MLH Fellowship</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            A 12-week internship alternative where you contribute to Open Source projects used by companies worldwide. It features a curriculum, mentorship, and a global network of peers.
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
            <Award size={32} color="var(--accent-pink)" />
          </div>
          <h3 style={{ fontSize: '2rem' }}>Outreachy & LFX</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Outreachy provides internships to people subject to systemic bias, while the Linux Foundation (LFX) Mentorship offers hands-on experience in cloud native technologies and Linux core development.
          </p>
        </motion.div>
      </div>

    </div>
  );
}
