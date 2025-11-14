'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, ArrowRight } from 'lucide-react';

export const ClerkHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#000000] to-[#0A0A0A]">
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#61A8FF]/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#61A8FF]/10 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#61A8FF]/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(97,168,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(97,168,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm text-[#61A8FF]"
        >
          <Sparkles className="w-4 h-4" />
          <span>100% Private • On-Device AI Detection</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="block text-white">Detect Deepfakes</span>
          <span className="block bg-gradient-to-r from-[#61A8FF] via-[#7BB8FF] to-[#61A8FF] bg-clip-text text-transparent">
            With Confidence
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Advanced AI-powered detection that runs completely on your iPhone.
          No cloud uploads. No data tracking. Just pure on-device intelligence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="group px-8 py-4 bg-[#61A8FF] hover:bg-[#5098EF] text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_rgba(97,168,255,0.3)] hover:shadow-[0_0_60px_rgba(97,168,255,0.5)] hover:scale-105">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-xl">
            View Demo
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#61A8FF]" />
            <span>100% Private</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#61A8FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Research-Backed</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#61A8FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Lightning Fast</span>
          </div>
        </motion.div>

        {/* iPhone Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-sm">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#61A8FF]/20 to-transparent blur-3xl" />

            {/* Phone Frame */}
            <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border border-gray-800">
              <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                {/* Screen Content */}
                <div className="h-full bg-gradient-to-b from-[#0A0A0A] to-black p-8 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#61A8FF]/20 flex items-center justify-center mb-4">
                    <Shield className="w-10 h-10 text-[#61A8FF]" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-white font-semibold">Analyzing...</div>
                    <div className="flex gap-1 justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#61A8FF] animate-pulse" />
                      <div className="w-2 h-2 rounded-full bg-[#61A8FF] animate-pulse delay-100" />
                      <div className="w-2 h-2 rounded-full bg-[#61A8FF] animate-pulse delay-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
