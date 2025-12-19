'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '90%+',
    label: 'Detection Accuracy',
    description: 'Validated on benchmarks',
  },
  {
    value: '<200ms',
    label: 'Analysis Time',
    description: 'Using Neural Engine',
  },
  {
    value: '100%',
    label: 'Private',
    description: 'On-device processing',
  },
  {
    value: '20+',
    label: 'AI Tools Detected',
    description: 'EXIF metadata analysis',
  },
];

export const ClerkStats: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#030712]" />

      {/* Accent Gradient - Clerk Style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,71,255,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Trusted by privacy-conscious users
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed px-2">
            Research-grade performance meets mobile convenience.
            Built with cutting-edge Core ML technology.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-4 sm:p-6 md:p-8 rounded-lg bg-surface/50 border border-surface-tertiary/30 backdrop-blur-sm text-center transition-all duration-300 hover:bg-surface hover:border-[#6C47FF]/40 hover:shadow-[0_8px_24px_rgba(108,71,255,0.15)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6C47FF]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-text-primary to-text-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-tertiary">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 p-6 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#6C47FF]/10 via-[#38DAFD]/5 to-transparent border border-surface-tertiary/40 backdrop-blur-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary mb-3 tracking-tight">
              Research-Backed Technology
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mb-6 md:mb-8 leading-relaxed">
              DeepGuard's models are built on published research with performance validated
              on industry-standard benchmarks. We're committed to advancing the
              field of deepfake detection while maintaining user privacy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#6C47FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Core ML Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#38DAFD]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Neural Engine Support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFF963]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
