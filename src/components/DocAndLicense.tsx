"use client";

import { motion } from 'framer-motion';
import { FileText, Shield, Gavel } from 'lucide-react';

export default function DocAndLicense() {
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
          Docs, Licenses & <span className="text-gradient">Governance</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Code without a license is legally unusable. Code without docs is practically unusable.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Documentation Essentials */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <FileText size={40} color="var(--text-primary)" />
            </div>
            <h2 style={{ fontSize: '3rem' }}>The Holy Trinity of Documentation</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', color: 'var(--text-secondary)' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '1rem', fontSize: '1.4rem' }}>README.md</strong>
              <p style={{ fontSize: '1.15rem' }}>The front page of your project. It must answer: What is this? Why should I use it? How do I install it in 3 steps?</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '1rem', fontSize: '1.4rem' }}>CONTRIBUTING.md</strong>
              <p style={{ fontSize: '1.15rem' }}>The onboarding manual. It tells developers how to run the app locally, how to run tests, and the code style guidelines.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '1rem', fontSize: '1.4rem' }}>CODE_OF_CONDUCT.md</strong>
              <p style={{ fontSize: '1.15rem' }}>The rules of engagement. Establishing what behavior is unacceptable and how harassment will be handled.</p>
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Licensing */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Shield size={40} color="var(--accent-cyan)" />
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Licensing</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
              <p>
                By default, copyright law protects your code. If you don't add an Open Source license, no one is legally allowed to use, modify, or distribute your code.
              </p>
              <p>
                <strong style={{ color: 'var(--accent-cyan)' }}>Permissive (MIT):</strong> "Do whatever you want, just don't sue me." Popular in the web ecosystem.
              </p>
              <p>
                <strong style={{ color: 'var(--accent-indigo)' }}>Copyleft (GPL):</strong> "If you modify this code, your new software MUST also be open source." Used by Linux.
              </p>
            </div>
          </motion.div>

          {/* Governance */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Gavel size={40} color="var(--accent-pink)" />
              </div>
              <h2 style={{ fontSize: '2.5rem' }}>Governance</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', fontSize: '1.25rem' }}>
              <p>
                Who decides what gets merged? Who has the final say?
              </p>
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>BDFL:</strong> 
                Benevolent Dictator for Life. One person has absolute authority (e.g., Linus Torvalds).
              </div>
              <div>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Meritocracy:</strong> 
                Decisions are made by a steering committee. The more you contribute, the more voting power you earn.
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
