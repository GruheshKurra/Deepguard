'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';

export const ClerkHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#030712] via-[#030712] to-[#0f172a]">
      {/* Gradient Orbs Background - Clerk Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#6C47FF]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#38DAFD]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-[#FFF963]/8 rounded-full blur-[110px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-[450px] h-[450px] bg-[#6C47FF]/12 rounded-full blur-[130px]" />
      </div>

      {/* Grid Pattern Overlay - Clerk Style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,71,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,71,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 rounded-full bg-surface/50 backdrop-blur-xl border border-surface-tertiary/30 text-xs sm:text-sm text-text-secondary font-medium"
        >
          <Sparkles className="w-4 h-4 text-[#6C47FF]" />
          <span>100% Private • On-Device AI Detection</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.1]"
        >
          <span className="block text-text-primary">Detect Deepfakes</span>
          <span className="block bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
            With Confidence
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Advanced AI-powered deepfake detection that runs completely on your iPhone.
          Analyze images, videos, and live camera feeds. No cloud uploads. No data tracking.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          <a 
            href="https://apps.apple.com/app/deepguard"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-5 sm:px-7 py-3 bg-[#6C47FF] hover:bg-[#5a3ad6] text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(108,71,255,0.25)] hover:shadow-[0_8px_32px_rgba(108,71,255,0.35)] text-sm sm:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a 
            href="https://github.com/GruheshKurra/deepguard-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 sm:px-7 py-3 bg-surface/50 hover:bg-surface text-text-primary font-medium rounded-lg transition-all duration-200 border border-surface-tertiary/50 hover:border-surface-tertiary backdrop-blur-xl text-sm sm:text-base text-center"
          >
            View on GitHub
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-text-tertiary"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#6C47FF]" />
            <span>100% Private</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#38DAFD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Core ML Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#FFF963]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Lightning Fast</span>
          </div>
        </motion.div>


      </div>
    </section>
  );
};
