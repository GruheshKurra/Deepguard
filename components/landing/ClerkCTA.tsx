'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple } from 'lucide-react';

export const ClerkCTA: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#61A8FF]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#61A8FF]/10 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-[#61A8FF]/20 via-[#61A8FF]/10 to-transparent border border-[#61A8FF]/30 backdrop-blur-xl overflow-hidden"
        >
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start detecting deepfakes
              <br />
              <span className="bg-gradient-to-r from-[#61A8FF] to-[#7BB8FF] bg-clip-text text-transparent">
                with complete privacy
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Download TruthLens for free and experience the power of on-device
              AI detection. No subscriptions, no hidden costs, no data collection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group px-10 py-5 bg-white hover:bg-gray-100 text-black font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] hover:scale-105">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on</div>
                  <div className="text-lg font-bold">App Store</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30 backdrop-blur-xl">
                Learn More
              </button>
            </div>

            {/* Feature Pills */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                ✓ Free Forever
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                ✓ No Account Required
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
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
          className="mt-12 text-center text-gray-500 text-sm"
        >
          Requires iPhone 11 or newer running iOS 16.0+
        </motion.p>
      </div>
    </section>
  );
};
