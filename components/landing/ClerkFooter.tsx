'use client';

import React from 'react';
import { Shield, Github, Mail, ExternalLink } from 'lucide-react';

export const ClerkFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#030712] border-t border-surface-tertiary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center shadow-[0_0_16px_rgba(108,71,255,0.3)]">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-text-primary tracking-tight">DeepGuard</span>
            </div>
            <p className="text-text-secondary text-sm mb-6 max-w-sm leading-relaxed">
              AI-powered deepfake detection that runs completely on your iPhone.
              100% private, 100% secure. No cloud uploads ever.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/GruheshKurra/deepguard-ios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface/50 hover:bg-surface border border-surface-tertiary/30 hover:border-surface-tertiary/50 flex items-center justify-center text-text-tertiary hover:text-text-primary transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:gruheshkurra2@gmail.com"
                className="w-9 h-9 rounded-lg bg-surface/50 hover:bg-surface border border-surface-tertiary/30 hover:border-surface-tertiary/50 flex items-center justify-center text-text-tertiary hover:text-text-primary transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://karthik.zynthetix.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-surface/50 hover:bg-surface border border-surface-tertiary/30 hover:border-surface-tertiary/50 flex items-center justify-center text-text-tertiary hover:text-text-primary transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="/how-it-works" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/app/deepguard" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
                >
                  Download
                </a>
              </li>
              <li>
                <a href="/faq" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/research" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  Research
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-surface-tertiary/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} DeepGuard. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-text-tertiary">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#6C47FF]" />
              100% Private
            </span>
            <span>•</span>
            <span>Made with ♥ by <a href="https://karthik.zynthetix.in" target="_blank" rel="noopener noreferrer" className="text-[#6C47FF] hover:underline">Karthik</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
