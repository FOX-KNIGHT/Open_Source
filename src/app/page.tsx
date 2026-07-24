"use client";

import HeroSection from '@/components/HeroSection';
import HorizontalTicker from '@/components/HorizontalTicker';
import CircularGallery from '@/components/CircularGallery';
import GitWorkflow from '@/components/GitWorkflow';
import GitHubEcosystem from '@/components/GitHubEcosystem';
import DocAndLicense from '@/components/DocAndLicense';
import CommunityBuilding from '@/components/CommunityBuilding';
import { motion, useInView } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import KineticModal, { KineticData } from '@/components/KineticModal';
import ExplodedView from '@/components/ExplodedView';
import ResourcesSection from '@/components/ResourcesSection';

export default function Home() {
  const [selectedDeepDive, setSelectedDeepDive] = useState<KineticData | null>(null);
  
  const deepDiveRef = useRef(null);
  const isDeepDiveInView = useInView(deepDiveRef, { margin: "0px 0px -80% 0px" });

  const galleryItems = [
    "Git Mastery",
    "GitHub Ecosystem",
    "Docs & License",
    "Community Building"
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Refresh ScrollTrigger after a slight delay to ensure all components and images are rendered
    const timeout = setTimeout(() => {
      ScrollTrigger.sort(); // Crucial: Sort triggers by DOM order before refreshing!
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const gitMasteryData: KineticData = {
    id: 'git',
    themeColor: '#ff5a00',
    textColor: '#000000',
    heroTitle: 'GIT MASTERY',
    metadata: { label: 'DECENTRALIZED ENGINE', role: 'VERSION CONTROL' },
    marqueeRows: ['EVERY COMMIT MATTERS', 'DISTRIBUTED ARCHITECTURE'],
    services: [
      { 
        title: 'The Working Tree', 
        description: 'Understand the three states of Git: the working directory, the staging area (index), and the committed repository history.', 
        detailedContent: 'Git operates across three primary local states. The Working Directory holds your modified, untracked files. When you run `git add`, these files are moved to the Staging Area (or Index), preparing them for the next commit. Finally, `git commit` permanently stores a snapshot of the Staging Area into your Repository History (.git directory). Understanding this flow is the key to preventing accidental data loss.',
        tags: ['STAGING', 'INDEX', 'COMMIT'] 
      },
      { 
        title: 'Local Branching', 
        description: 'Create isolated environments for feature development. Learn to context-switch instantly without risking your main codebase.', 
        detailedContent: 'Unlike older version control systems, branches in Git are incredibly lightweight—they are simply movable pointers to a specific commit. Using `git switch -c <branch-name>` creates a safe, isolated environment where you can experiment, build features, or fix bugs without ever risking the stability of your `main` branch.',
        tags: ['ISOLATION', 'FEATURE DEV'] 
      },
      { 
        title: 'Merging & Rebasing', 
        description: 'Integrate parallel histories. Master the differences between a merge commit and a clean, linear rebased history.', 
        detailedContent: 'When integrating work, you have two choices. Merging (`git merge`) takes two endpoints and creates a new "merge commit", preserving the exact historical context. Rebasing (`git rebase`), however, takes your branch\'s commits and replays them one-by-one on top of the target branch. This rewrites history to create a perfectly clean, straight timeline—ideal for readable pull requests.',
        tags: ['CONFLICTS', 'LINEAR HISTORY'] 
      },
    ],
    ctaTitle: 'COMMIT NOW',
  };

  const githubEcosystemData: KineticData = {
    id: 'github',
    themeColor: '#ffffff',
    textColor: '#000000',
    heroTitle: 'GITHUB ECOSYSTEM',
    metadata: { label: 'SOCIAL NETWORK', role: 'INFRASTRUCTURE LAYER' },
    marqueeRows: ['PULL REQUESTS & ISSUES', 'CONTINUOUS INTEGRATION'],
    services: [
      { 
        title: 'Issues & Discussions', 
        description: 'The hub for project management. Track bugs, plan features, and foster community discussions openly.', 
        detailedContent: 'Issues are the actionable to-do list of an open source project. By using Issue Templates, you can force contributors to provide necessary context (like OS version and reproduction steps). Discussions, on the other hand, provide a forum-like space for open-ended questions, architectural debates, and community announcements without cluttering your bug tracker.',
        tags: ['TRIAGE', 'Q&A', 'PLANNING'] 
      },
      { 
        title: 'Dependabot Security', 
        description: 'Automated dependency updates and security vulnerability scanning to keep your supply chain secure.', 
        detailedContent: 'Supply chain attacks are a massive threat. Dependabot actively monitors your `package.json` or `requirements.txt` against the GitHub Advisory Database. When a vulnerability is found in a dependency, Dependabot automatically opens a Pull Request updating the package to a safe version, letting you patch vulnerabilities with a single click.',
        tags: ['SCANNING', 'AUTOMATION'] 
      },
      { 
        title: 'Actions & CI/CD', 
        description: 'Automate your software workflows. Build, test, and deploy directly from your GitHub repository.', 
        detailedContent: 'GitHub Actions brings automation directly to your repository. By writing simple YAML workflows, you can automatically spin up virtual machines (runners) every time a Pull Request is opened. These runners can execute your unit tests, enforce code linting, and automatically deploy your application if all checks pass—ensuring broken code never reaches production.',
        tags: ['PIPELINES', 'DEPLOYMENT'] 
      },
    ],
    ctaTitle: 'AUTOMATE IT',
  };

  const docsLicenseData: KineticData = {
    id: 'docs',
    themeColor: '#0033ff',
    textColor: '#ffffff',
    heroTitle: 'DOCS & LICENSE',
    metadata: { label: 'CODE IS DEAD', role: 'WITHOUT DOCUMENTATION' },
    marqueeRows: ['READ THE FREE MANUAL', 'OPEN SOURCE INITIATIVE'],
    services: [
      { 
        title: 'The README.md', 
        description: 'The front page of your project. Master the art of writing compelling introductions and clear installation instructions.', 
        detailedContent: 'Your README is your project\'s landing page. If developers can\'t understand what your project does within 5 seconds, they will leave. A premium README includes: dynamic status badges, a clear value proposition, copy-pasteable installation instructions, and a minimal "Hello World" usage example.',
        tags: ['ONBOARDING', 'INSTALLATION'] 
      },
      { 
        title: 'API Documentation', 
        description: 'Generate and maintain technical references that developers actually want to read using standard tooling.', 
        detailedContent: 'Nobody wants to read source code to figure out how to call a function. Modern projects use tools like TypeDoc (for TypeScript), Sphinx (for Python), or Swagger (for REST APIs) to automatically parse inline comments and generate beautiful, searchable documentation websites that stay perfectly in sync with your code.',
        tags: ['TYPEDOC', 'SWAGGER'] 
      },
      { 
        title: 'Choosing a License', 
        description: 'Navigate the legal landscape of Open Source. Understand the implications of MIT, Apache, and copyleft licenses like GPL.', 
        detailedContent: 'Without a license, default copyright laws apply, meaning nobody can legally use your code. The MIT License is permissive and lets anyone do anything. The Apache 2.0 License is similar but adds express grants of patent rights. The GPLv3 License is a "copyleft" license—it allows usage, but legally forces anyone who modifies and distributes your code to also open-source their changes.',
        tags: ['MIT', 'GPLv3', 'APACHE'] 
      },
    ],
    ctaTitle: 'WRITE DOCS',
  };

  const communityData: KineticData = {
    id: 'community',
    themeColor: '#ffde00',
    textColor: '#000000',
    heroTitle: 'COMMUNITY BUILDING',
    metadata: { label: 'CODE OF CONDUCT', role: 'ISSUE TRIAGING' },
    marqueeRows: ['MAINTAINERS & CONTRIBUTORS', 'HEALTHY OPEN SOURCE'],
    services: [
      { 
        title: 'Code of Conduct', 
        description: 'Establish baseline behavioral expectations to ensure a safe, inclusive, and welcoming environment for all contributors.', 
        detailedContent: 'Open source can be notoriously toxic. Adopting a standardized Code of Conduct (like the Contributor Covenant) establishes explicit baseline behavioral expectations. It protects marginalized groups, defines what constitutes harassment, and outlines the exact enforcement mechanisms maintainers will take against bad actors.',
        tags: ['SAFETY', 'INCLUSION'] 
      },
      { 
        title: 'Issue Triaging', 
        description: 'Manage the influx of bug reports. Learn to properly label, reproduce, and route issues to the right contributors.', 
        detailedContent: 'A healthy repository doesn\'t have 1,000 open issues. Triaging is the ongoing process of managing the backlog: aggressively closing unactionable bug reports, applying standardized color-coded labels (e.g., `good first issue`, `needs reproduction`), and routing valid issues to the correct maintainers.',
        tags: ['LABELS', 'REPRODUCIBILITY'] 
      },
      { 
        title: 'Sponsorships', 
        description: 'Sustain your open source work. Explore funding models and setup GitHub Sponsors for financial backing.', 
        detailedContent: 'Burnout is the number one killer of open source projects. Platforms like GitHub Sponsors and Open Collective allow individuals and massive corporations that rely on your free infrastructure to financially back your work. Structuring sponsorship tiers can provide the sustainable income needed to maintain the project long-term.',
        tags: ['FUNDING', 'SUSTAINABILITY'] 
      },
    ],
    ctaTitle: 'JOIN US',
  };

  return (
    <main className="min-h-screen bg-white relative">
      {/* Global Floating Header (Logo) */}
      <div className="fixed top-0 left-0 p-8 z-50 pointer-events-none flex items-center">
        <div className="pointer-events-auto">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" 
            alt="GeeksforGeeks Official Logo" 
            className="h-6 md:h-8"
          />
        </div>
      </div>

      {/* Global Floating Header (Text) */}
      <div className={`fixed top-0 left-0 right-0 p-8 z-50 pointer-events-none flex items-center transition-colors duration-300 ${isDeepDiveInView ? 'text-black' : 'mix-blend-difference text-white'}`}>
        <div className="ml-[80px] md:ml-[100px] flex flex-col uppercase tracking-widest text-sm font-bold">
          <span>Open Source</span>
          <span>Masterclass</span>
        </div>
      </div>

      {/* 1. Blob-Reveal Hero Section */}
      <HeroSection />

      {/* 2. GSAP Horizontal Scroll Ticker */}
      <HorizontalTicker />

      {/* 3. Circular Gallery Showcase */}
      <CircularGallery items={galleryItems} />

      {/* 4. Exploded View Assembly (Deep Dives) */}
      <ExplodedView 
        items={[gitMasteryData, githubEcosystemData, docsLicenseData, communityData]} 
        onSelect={setSelectedDeepDive} 
      />

      {/* 5. Masterclass Resources */}
      <ResourcesSection />

      {/* Footer to give some scrolling space */}
      <footer className="border-t-4 border-black mt-20 p-8 flex flex-col items-center justify-center gap-4 font-bold uppercase tracking-widest text-xl">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" 
          alt="GeeksforGeeks Official Logo" 
          className="h-8"
        />
        <span>END OF MASTERCLASS</span>
      </footer>

      {/* Kinetic Modal Overlay */}
      <KineticModal 
        isOpen={!!selectedDeepDive} 
        onClose={() => setSelectedDeepDive(null)} 
        data={selectedDeepDive} 
      />
    </main>
  );
}
