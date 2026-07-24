"use client";

import { motion } from 'framer-motion';
import { Briefcase, LineChart, CodeSquare } from 'lucide-react';

export default function CareerInOpenSource() {
  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', minHeight: '70vh', justifyContent: 'center' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>
          Accelerate Your <span className="text-gradient">Career</span>
        </h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '800px' }}>
          Open source is the ultimate proof of skill. It's a public portfolio that demonstrates you can write clean code, collaborate with teams, and solve complex problems.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', boxShadow: 'var(--glass-shadow)' }}>
            <Briefcase size={32} color="var(--accent-cyan)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Skip the Resume Filter</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              When you contribute to tools that companies already use in production, you bypass the traditional resume screening process. Many open source contributors are recruited directly by the companies that maintain or use the projects they contribute to.
            </p>
          </div>
        </motion.div>

        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="premium-glass"
          style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', boxShadow: 'var(--glass-shadow)' }}>
            <CodeSquare size={32} color="var(--accent-indigo)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Real-World Architecture</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Tutorials and side projects are great, but they rarely expose you to the complexities of large codebases. Open source teaches you how to navigate millions of lines of code, handle technical debt, and write tests for production systems.
            </p>
          </div>
        </motion.div>

        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="premium-glass"
          style={{ gridColumn: '1 / -1', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
        >
          <div style={{ padding: '1.2rem', background: 'var(--bg-primary)', borderRadius: '24px', boxShadow: 'var(--glass-shadow)' }}>
            <LineChart size={32} color="var(--accent-pink)" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>Building a Reputation Network</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Your contributions act as public endorsements. Earning the respect of senior engineers at companies like Vercel, Meta, or Google through your PRs builds a professional network that is infinitely more valuable than LinkedIn connections.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
