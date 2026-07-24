"use client";

import { motion } from 'framer-motion';
import { Briefcase, Handshake, Building } from 'lucide-react';

export default function OpenSourceEconomics() {
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
          The <span className="text-gradient-accent">Economics</span>
        </h1>
        <p style={{ fontSize: '1.6rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          If the code is free, how does anyone make money? Understanding the business models that sustain the ecosystem.
        </p>
      </motion.div>

      {/* Content Layout - Fluid Offset */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Support & Services Model */}
        <motion.div 
          layout
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="premium-glass"
          style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Briefcase size={40} color="var(--accent-cyan)" />
              </div>
              <h2 style={{ fontSize: '3rem' }}>Support & Services</h2>
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>
                The oldest and most proven model. The software is free, but companies pay for enterprise-grade support, SLAs, training, and custom integrations.
              </p>
              <p style={{ fontSize: '1.2rem', paddingLeft: '1.5rem', borderLeft: '3px solid var(--accent-cyan)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Red Hat Case Study:</strong> 
                Red Hat gives away Linux for free but sells support contracts. They became the first open-source company to cross $1B in revenue and were acquired by IBM for $34 Billion.
              </p>
            </div>
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Open Core & Cloud Hosting */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Building size={40} color="var(--accent-indigo)" />
              </div>
              <h2 style={{ fontSize: '2.2rem' }}>Open Core & SaaS</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Open Core:</strong> 
                The core product is open source, but premium features (like LDAP integration or advanced security) are closed-source and paid.
              </p>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Cloud Hosting (SaaS):</strong> 
                The software is free to download, but hosting it yourself is hard. Companies like MongoDB, Elastic, and Vercel make billions by hosting the open-source software for you in the cloud.
              </p>
            </div>
          </motion.div>

          {/* Big Tech & Sponsorships */}
          <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="premium-glass"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: 'var(--bg-primary)', borderRadius: '30px', boxShadow: 'var(--glass-shadow)' }}>
                <Handshake size={40} color="var(--accent-pink)" />
              </div>
              <h2 style={{ fontSize: '2.2rem' }}>Sponsorships</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>Why Big Tech Pays:</strong> Google created Kubernetes and gave it away. Why? To commoditize their competitor's margin. By making container orchestration free, they weakened AWS's proprietary grip.
              </p>
              <p>
                <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>GitHub Sponsors:</strong> Individual developers can now be funded directly by the community. Projects like Vue.js make over $1M a year purely through Patreon and GitHub Sponsors.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
