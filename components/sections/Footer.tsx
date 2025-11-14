'use client';

import React from 'react';
import { Container } from '../ui/Container';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'GitHub', href: '#' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-8 glass-card text-center border-t border-white/10">
      <Container>
        <p
          className="text-text-secondary mb-5"
          style={{
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          &copy; 2025 TruthLens. All rights reserved.
        </p>
        <p
          className="text-text-secondary mb-8"
          style={{
            fontWeight: 300,
            lineHeight: 1.5,
          }}
        >
          Free. No ads. No tracking. No subscriptions.
        </p>
        <nav aria-label="Footer navigation">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-text-secondary hover:text-accent-blue transition-all duration-300 smooth-scale focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </Container>
    </footer>
  );
};
