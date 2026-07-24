"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react';

const prSteps = [
  { text: "Find an issue tagged 'good first issue' on GitHub.", cmd: "Browser: Search GitHub Labels." },
  { text: "Fork the repository.", cmd: "Browser: Click 'Fork' (Top Right)." },
  { text: "Clone your new fork locally.", cmd: "git clone https://github.com/yourname/repo.git" },
  { text: "Create a feature branch.", cmd: "git checkout -b fix-auth-bug" },
  { text: "Write the code (or docs) to fix the issue.", cmd: "code src/auth.ts" },
  { text: "Stage the specific files you changed.", cmd: "git add src/auth.ts" },
  { text: "Commit with a semantic, descriptive message.", cmd: 'git commit -m "fix(auth): resolve null pointer in login"' },
  { text: "Push the branch up to your fork on GitHub.", cmd: "git push origin fix-auth-bug" },
  { text: "Open the Pull Request against the upstream repo.", cmd: "Browser: Click 'Compare & pull request'." }
];

export default function FirstPRGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < prSteps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

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
          Live <span className="text-gradient">PR Walkthrough</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          Let's simulate the exact end-to-end process of making your very first Open Source contribution.
        </p>
      </motion.div>

      {/* Content Layout */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        
        {/* Left: Premium Terminal */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass" 
          style={{ width: '100%', maxWidth: '1000px', minHeight: '600px', display: 'flex', flexDirection: 'column', padding: 0, background: '#000', borderColor: 'transparent' }}
        >
          {/* macOS Terminal Header */}
          <div style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#27c93f' }}></div>
            <div style={{ flex: 1, textAlign: 'center', color: '#86868b', fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 500, marginRight: '64px' }}>
              terminal ~ bash
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '2rem', padding: '3rem 4rem' }}>
            {prSteps.slice(0, currentStep).map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ color: '#86868b', marginBottom: '0.5rem', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                  {`// Step ${idx + 1}: ${step.text}`}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>
                  <ChevronRight size={20} color="#2997ff" />
                  <span style={{ fontWeight: 600 }}>{step.cmd}</span>
                </div>
              </motion.div>
            ))}

            {currentStep === prSteps.length && (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '3rem', color: '#fff' }}
              >
                <CheckCircle2 size={80} color="#27c93f" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '3rem', margin: 0 }}>PR Opened!</h3>
                <p style={{ color: '#86868b', marginTop: '1rem', fontSize: '1.4rem' }}>Now we wait for the maintainers to review.</p>
              </motion.div>
            )}
          </div>

          <div style={{ padding: '2rem 4rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'center' }}>
            {currentStep < prSteps.length ? (
              <button onClick={nextStep} style={{ width: '100%', padding: '1.5rem', background: '#fff', color: '#000', border: 'none', borderRadius: '40px', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer' }}>
                Execute Next Step
              </button>
            ) : (
              <button onClick={() => setCurrentStep(0)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '40px', fontSize: '1.2rem', fontWeight: 600, cursor: 'pointer' }}>
                <RotateCcw size={20} /> Restart Simulation
              </button>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
