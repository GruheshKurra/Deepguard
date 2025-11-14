'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple } from 'lucide-react';

export const ClerkCTA: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0f172a] to-[#030712]" />

      {/* Gradient Orbs - Clerk Style */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6C47FF]/12 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38DAFD]/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-2xl bg-gradient-to-br from-[#6C47FF]/15 via-[#38DAFD]/10 to-transparent border border-surface-tertiary/40 backdrop-blur-xl overflow-hidden"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6C47FF]/5 to-transparent -skew-x-12" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight leading-tight">
              Start detecting deepfakes
              <br />
              <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                with complete privacy
              </span>
            </h2>

            <p className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Download TruthLens for free and experience the power of on-device
              AI detection. No subscriptions, no hidden costs, no data collection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-8 py-4 bg-white hover:bg-gray-50 text-black font-medium rounded-lg transition-all duration-200 flex items-center gap-3 shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-surface/50 hover:bg-surface text-text-primary font-medium rounded-lg transition-all duration-200 border border-surface-tertiary/50 hover:border-surface-tertiary backdrop-blur-xl">
                Learn More
              </button>
            </div>

            {/* Feature Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-text-tertiary">
              <div className="px-4 py-1.5 rounded-full bg-surface/40 border border-surface-tertiary/30 backdrop-blur-xl">
                ✓ Free Forever
              </div>
              <div className="px-4 py-1.5 rounded-full bg-surface/40 border border-surface-tertiary/30 backdrop-blur-xl">
                ✓ No Account Required
              </div>
              <div className="px-4 py-1.5 rounded-full bg-surface/40 border border-surface-tertiary/30 backdrop-blur-xl">
                ✓ Works Offline
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-text-tertiary text-sm"
        >
          Requires iPhone 11 or newer running iOS 16.0+
        </motion.p>
      </div>
    </section>
  );
};
