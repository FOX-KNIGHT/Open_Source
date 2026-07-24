"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, ShieldAlert, Users, Scale, ChevronDown } from 'lucide-react';

const communityTopics = [
  {
    id: 'coc',
    icon: <Scale size={28} />,
    title: 'The Contributor Covenant',
    content: 'The most widely used Code of Conduct in Open Source (used by Linux, Swift, Vue). It explicitly outlines unacceptable behavior (harassment, trolling) and outlines the enforcement mechanisms. Without a clear mechanism for banning toxic users, a CoC is just a piece of paper.'
  },
  {
    id: 'toxic',
    icon: <ShieldAlert size={28} />,
    title: 'Managing Entitlement & Toxicity',
    content: 'Open Source spans the globe. Tone is easily lost in text, and some users feel entitled to demand features because the code is "free". Maintainers must actively de-escalate toxic behavior. If an issue gets heated, lock the thread for 24 hours to let tempers cool.'
  },
  {
    id: 'mentor',
    icon: <HeartHandshake size={28} />,
    title: 'Mentorship & Onboarding',
    content: 'The biggest hurdle for new contributors is intimidation. Use the "good first issue" label for tasks that require little context. Acknowledge first-time contributors publicly—a simple "Thank you for your first PR!" turns a one-time contributor into a core maintainer.'
  }
];

export default function CommunityBuilding() {
  const [openId, setOpenId] = useState<string>('coc');

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
          Community <span className="text-gradient-accent">Management</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Code brings people in. A safe, welcoming, and organized community makes them stay.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        
        {/* Left Column: Burnout */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
              <Users size={40} color="var(--accent-cyan)" />
            </div>
            <h2 style={{ fontSize: '3rem' }}>Maintainer Burnout</h2>
          </div>
          
          <div style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '2rem', flex: 1 }}>
            <p style={{ fontSize: '1.3rem' }}>
              Open source is a victim of its own success. A developer writes a weekend project, it gets popular, and suddenly 10,000 companies are using it.
            </p>
            <p style={{ fontSize: '1.3rem' }}>
              The developer is now expected to provide free tech support, fix bugs immediately, and review hundreds of PRs in their free time. This leads to massive burnout.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          {communityTopics.map((topic) => (
            <motion.div 
              layout
              key={topic.id} 
              className="premium-glass" 
              style={{ 
                padding: '0', 
                overflow: 'hidden',
                borderRadius: '32px',
                border: openId === topic.id ? '1px solid var(--glass-border)' : '1px solid transparent',
              }}
            >
              <button 
                onClick={() => setOpenId(openId === topic.id ? '' : topic.id)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  padding: '3rem', 
                  background: openId === topic.id ? 'var(--bg-secondary)' : 'transparent', 
                  border: 'none', 
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ color: openId === topic.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {topic.icon}
                  </div>
                  <h3 style={{ fontSize: '1.6rem', margin: 0, color: openId === topic.id ? 'var(--text-primary)' : 'var(--text-secondary)', fontWeight: 600 }}>
                    {topic.title}
                  </h3>
                </div>
                <motion.div animate={{ rotate: openId === topic.id ? 180 : 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                  <ChevronDown size={28} color={openId === topic.id ? 'var(--text-primary)' : 'var(--text-secondary)'} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openId === topic.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div style={{ padding: '0 3rem 3rem 6rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.2rem' }}>
                      {topic.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
