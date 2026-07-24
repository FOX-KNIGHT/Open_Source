"use client";

import { motion } from 'framer-motion';
import { PlayCircle, ShieldAlert, MessageCircle } from 'lucide-react';

export default function GitHubEcosystem() {
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
          The <span className="text-gradient">GitHub</span> Ecosystem
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Git is just the version control engine. GitHub provides the social network, CI/CD, and security infrastructure.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '3rem' }}>
        
        {/* Issues & Discussions */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <MessageCircle size={40} color="var(--accent-cyan)" />
            </div>
            <h2 style={{ fontSize: '3rem' }}>Issues & Discussions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.3rem' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Issues:</strong> 
              The bug tracker and task list. Before you write code, always open an issue to propose your idea. This saves you from writing code that the maintainers don't want.
            </p>
            <p style={{ fontSize: '1.3rem' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Discussions:</strong> 
              A forum-like space for Q&A, ideas, and general chatter, keeping the Issue tracker clean for actionable engineering tasks.
            </p>
          </div>
        </motion.div>

        {/* Security & Dependabot */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="premium-glass"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <ShieldAlert size={40} color="var(--accent-pink)" />
            </div>
            <h2 style={{ fontSize: '2.5rem' }}>Security</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.2rem' }}>
              Modern applications use hundreds of open-source dependencies. If one gets hacked, your app is compromised.
            </p>
            <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '24px' }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Dependabot</strong>
              <p style={{ fontSize: '1.1rem' }}>An automated bot that scans your project for outdated or insecure dependencies and automatically opens Pull Requests to update them.</p>
            </div>
          </div>
        </motion.div>

        {/* GitHub Actions (Full width) */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="premium-glass"
          style={{ gridColumn: '1 / -1', display: 'flex', gap: '4rem', alignItems: 'center' }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <PlayCircle size={40} color="var(--accent-indigo)" />
              </div>
              <h2 style={{ fontSize: '3rem' }}>Actions & Automation</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.3rem' }}>
                The automation engine. When you push code, a GitHub Action can automatically spin up a server, run all unit tests, check for formatting errors, and even deploy the code to production.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
