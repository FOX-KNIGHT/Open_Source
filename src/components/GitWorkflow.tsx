"use client";

import { motion } from 'framer-motion';
import { GitBranch, GitMerge } from 'lucide-react';

export default function GitWorkflow() {
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
          Git & Version Control <span className="text-gradient-accent">Mastery</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          The foundational mechanics of how decentralized teams build software together without overwriting each other's work.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '3rem' }}>
        
        {/* Core Concepts */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <GitBranch size={40} color="var(--accent-cyan)" />
            </div>
            <h2 style={{ fontSize: '2.5rem' }}>The Distributed Model</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.3rem' }}>Why Git?</strong> 
              <p style={{ fontSize: '1.2rem' }}>Before Git, version control was centralized (SVN). If the central server went down, nobody could work. Git is distributed: every developer has a full backup of the entire repository history on their laptop.</p>
            </div>
            <div>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem', fontSize: '1.3rem' }}>The Working Tree vs Staging</strong> 
              <p style={{ fontSize: '1.2rem' }}>Git separates your active work from what you plan to commit. You modify files in the <em>Working Tree</em>, add specific changes to the <em>Staging Area</em> (Index), and only then <em>Commit</em> them to history.</p>
            </div>
          </div>
        </motion.div>

        {/* The Commands (Premium Terminal) */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="premium-glass"
          style={{ padding: 0, display: 'flex', flexDirection: 'column', background: '#000', borderColor: 'transparent' }}
        >
          {/* Mac Terminal Header */}
          <div style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#27c93f' }}></div>
            <div style={{ flex: 1, textAlign: 'center', color: '#86868b', fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 500, marginRight: '64px' }}>
              bash ~ git
            </div>
          </div>
          <div style={{ padding: '3rem 4rem', display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
              <span style={{ color: '#2997ff' }}>git clone</span> <span style={{ color: '#fff' }}>&lt;url&gt;</span> <br/>
              <span style={{ color: '#86868b', fontSize: '1rem', marginTop: '0.5rem', display: 'block' }}>// Downloads the repository to your machine</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
              <span style={{ color: '#2997ff' }}>git checkout -b</span> <span style={{ color: '#fff' }}>feature-branch</span> <br/>
              <span style={{ color: '#86868b', fontSize: '1rem', marginTop: '0.5rem', display: 'block' }}>// Creates and switches to a safe isolated branch</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
              <span style={{ color: '#2997ff' }}>git add .</span> <br/>
              <span style={{ color: '#86868b', fontSize: '1rem', marginTop: '0.5rem', display: 'block' }}>// Stages all your modified files</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
              <span style={{ color: '#2997ff' }}>git commit -m</span> <span style={{ color: '#bf5af2' }}>"Fix bug"</span> <br/>
              <span style={{ color: '#86868b', fontSize: '1rem', marginTop: '0.5rem', display: 'block' }}>// Saves the snapshot to your local history</span>
            </div>
          </div>
        </motion.div>

        {/* Advanced Concepts */}
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
                <GitMerge size={40} color="var(--accent-pink)" />
              </div>
              <h2 style={{ fontSize: '3rem' }}>Advanced: Conflicts & Rebasing</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.25rem' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Merge Conflicts:</strong> Happen when two people edit the exact same line of code. Git stops and forces you to manually choose which edit to keep. Don't panic—it's just a text editing exercise.
              </p>
              <p style={{ fontSize: '1.25rem' }}>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Merge vs. Rebase:</strong> 
                Merging creates a special "merge commit" that ties two histories together. Rebasing rewrites history by picking up your branch and placing it cleanly at the tip of the main branch. 
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
