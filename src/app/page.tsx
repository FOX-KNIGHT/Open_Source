"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import HeroSection from '@/components/HeroSection';
import HistoryOfOpenSource from '@/components/HistoryOfOpenSource';
import OpenSourceEconomics from '@/components/OpenSourceEconomics';
import OpenSourcePrograms from '@/components/OpenSourcePrograms';
import CareerInOpenSource from '@/components/CareerInOpenSource';
import FindingProjects from '@/components/FindingProjects';
import GitWorkflow from '@/components/GitWorkflow';
import GitHubEcosystem from '@/components/GitHubEcosystem';
import DocAndLicense from '@/components/DocAndLicense';
import CommunityBuilding from '@/components/CommunityBuilding';
import StartingYourOwnProject from '@/components/StartingYourOwnProject';
import FirstPRGuide from '@/components/FirstPRGuide';
import QuizSection from '@/components/QuizSection';

const slides = [
  { id: 'hero', component: HeroSection, title: 'Introduction' },
  { id: 'history', component: HistoryOfOpenSource, title: 'History of Open Source' },
  { id: 'economics', component: OpenSourceEconomics, title: 'Economics & Business' },
  { id: 'programs', component: OpenSourcePrograms, title: 'Global Programs' },
  { id: 'career', component: CareerInOpenSource, title: 'Career Acceleration' },
  { id: 'finding', component: FindingProjects, title: 'Finding Projects' },
  { id: 'git', component: GitWorkflow, title: 'Git Mastery' },
  { id: 'github', component: GitHubEcosystem, title: 'GitHub Ecosystem' },
  { id: 'docs', component: DocAndLicense, title: 'Docs & Governance' },
  { id: 'community', component: CommunityBuilding, title: 'Community & Security' },
  { id: 'starting', component: StartingYourOwnProject, title: 'Maintainer Mode' },
  { id: 'first-pr', component: FirstPRGuide, title: 'Live PR Walkthrough' },
  { id: 'quiz', component: QuizSection, title: 'Interactive Q&A' },
];

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.code === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on slide change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlideIndex]);

  const CurrentSlideComponent = slides[currentSlideIndex].component;

  return (
    <main className="presentation-mode">
      {/* Slide Content Area */}
      <div className="slide-content-wrapper" ref={scrollRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="slide-inner"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Dynamic Island Control */}
      <div style={{ position: 'fixed', bottom: '3rem', width: '100%', display: 'flex', justifyContent: 'center', zIndex: 100, pointerEvents: 'none' }}>
        <motion.div 
          layout
          style={{ 
            pointerEvents: 'auto',
            padding: '0.5rem 0.75rem', 
            background: 'rgba(255, 255, 255, 0.75)', 
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)', 
            border: '1px solid var(--glass-border)', 
            borderRadius: '40px',
            display: 'flex', 
            gap: '1rem',
            alignItems: 'center',
            boxShadow: 'var(--glass-shadow)',
            overflow: 'hidden'
          }}
          whileHover="hovered"
          initial="initial"
          animate="initial"
        >
          <button 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            style={{ 
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              padding: '0.5rem',
              cursor: currentSlideIndex === 0 ? 'not-allowed' : 'pointer',
              opacity: currentSlideIndex === 0 ? 0.3 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <ChevronLeft size={20} />
          </button>

          <motion.div 
            layout
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 500 }}>
              {String(currentSlideIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <motion.span 
              variants={{
                initial: { width: 0, opacity: 0, marginLeft: 0, display: 'none' },
                hovered: { width: 'auto', opacity: 1, marginLeft: '0.75rem', display: 'block' }
              }}
              transition={{ duration: 0.3 }}
              style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem', whiteSpace: 'nowrap' }}
            >
              {slides[currentSlideIndex].title}
            </motion.span>
          </motion.div>

          <button 
            onClick={nextSlide}
            disabled={currentSlideIndex === slides.length - 1}
            style={{ 
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '30px',
              cursor: currentSlideIndex === slides.length - 1 ? 'not-allowed' : 'pointer',
              opacity: currentSlideIndex === slides.length - 1 ? 0.3 : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              fontWeight: 500,
              fontSize: '0.9rem',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Next <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>
    </main>
  );
}
