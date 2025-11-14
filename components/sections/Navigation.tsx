'use client';

import React from 'react';
import { Container } from '../ui/Container';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-premium border-b border-surface-tertiary/20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            className="text-2xl font-semibold text-text-primary smooth-scale"
            aria-label="TruthLens Home"
          >
            TruthLens
          </a>
          <ul className="hidden md:flex gap-10 text-sm font-medium" role="navigation">
            <li>
              <a
                href="#features"
                className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
