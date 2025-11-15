'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X } from 'lucide-react';

export const ClerkNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-surface-tertiary/20 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-[0_0_16px_rgba(108,71,255,0.3)]">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-text-primary tracking-tight">TruthLens</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/how-it-works"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="/pricing"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              Pricing
            </a>
            <a
              href="/faq"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              FAQ
            </a>
            <a
              href="/research"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              Research
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-5 py-2 bg-[#6C47FF] hover:bg-[#5a3ad6] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-[0_8px_24px_rgba(108,71,255,0.3)] text-sm">
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-6 pb-6 border-t border-surface-tertiary/20 pt-6"
          >
            <div className="flex flex-col gap-2">
              <a
                href="/how-it-works"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-surface-secondary/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/pricing"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-surface-secondary/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="/faq"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-surface-secondary/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/research"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-surface-secondary/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </a>
              <button className="mt-4 w-full px-5 py-2.5 bg-[#6C47FF] hover:bg-[#5a3ad6] text-white font-medium rounded-lg transition-all duration-200 hover:shadow-[0_8px_24px_rgba(108,71,255,0.3)]">
                Download
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
