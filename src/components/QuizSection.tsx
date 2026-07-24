"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const questions = [
  {
    q: "If I modify code licensed under MIT, do I have to open source my changes?",
    a: "No. MIT is a permissive license. You can use it in closed-source commercial products."
  },
  {
    q: "What is the difference between Git and GitHub?",
    a: "Git is the local version control software on your laptop. GitHub is a cloud hosting provider for Git repositories."
  },
  {
    q: "How does Open Source make money?",
    a: "Enterprise support contracts, cloud hosting (SaaS), open-core premium features, and corporate sponsorships."
  },
  {
    q: "What happens if two developers edit the exact same line of code?",
    a: "A Merge Conflict. Git halts the merge and forces you to manually choose which edit to keep."
  }
];

export default function QuizSection() {
  const [activeQ, setActiveQ] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const handleNext = () => {
    setRevealed(false);
    setActiveQ((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="strict-bound" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', alignItems: 'center' }}>
      
      {/* Title Area */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>
          Interactive <span className="text-gradient">Q&A</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Test the audience's knowledge based on the masterclass.
        </p>
      </motion.div>

      {/* Quiz Card */}
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="premium-glass" 
        style={{ width: '100%', maxWidth: '1000px', textAlign: 'center', minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 0 }}
      >
        
        <div style={{ padding: '6rem 4rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQ}
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <HelpCircle size={64} color="var(--accent-indigo)" style={{ margin: '0 auto 3rem' }} />
              
              <h3 style={{ fontSize: '3.5rem', marginBottom: '4rem', lineHeight: 1.2, color: 'var(--text-primary)' }}>
                {questions[activeQ].q}
              </h3>
              
              <div style={{ minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {revealed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent-cyan)', lineHeight: 1.4 }}
                  >
                    {questions[activeQ].a}
                  </motion.div>
                ) : (
                  <button className="btn-secondary" onClick={() => setRevealed(true)} style={{ fontSize: '1.4rem', padding: '1.5rem 3rem' }}>
                    Reveal Answer
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--glass-border)', padding: '2rem 4rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1.4rem' }}>
            Question {activeQ + 1} of {questions.length}
          </span>
          <button className="btn-primary" onClick={handleNext} style={{ fontSize: '1.4rem', padding: '1.25rem 3rem' }}>
            Next Question
          </button>
        </div>
      </motion.div>
    </div>
  );
}
