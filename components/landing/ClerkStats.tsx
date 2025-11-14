'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '95%+',
    label: 'Detection Accuracy',
    description: 'On benchmark datasets',
  },
  {
    value: '<200ms',
    label: 'Analysis Time',
    description: 'Lightning-fast results',
  },
  {
    value: '100%',
    label: 'Private',
    description: 'Zero data collection',
  },
  {
    value: '2 Models',
    label: 'AI Systems',
    description: 'Specialized detection',
  },
];

export const ClerkStats: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />

      {/* Accent Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(97,168,255,0.1),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by privacy-conscious users
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Research-grade performance meets mobile convenience.
            Built with cutting-edge AI research.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl text-center transition-all duration-300 hover:border-[#61A8FF]/50 hover:shadow-[0_0_40px_rgba(97,168,255,0.2)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#61A8FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-500">
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
          className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#61A8FF]/10 via-[#61A8FF]/5 to-transparent border border-[#61A8FF]/20 backdrop-blur-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Research-Backed Technology
            </h3>
            <p className="text-lg text-gray-400 mb-8">
              Our models are built on published research with performance validated
              on industry-standard benchmarks. We're committed to advancing the
              field of deepfake detection while maintaining user privacy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#61A8FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Peer-reviewed research</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#61A8FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Open-source models</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#61A8FF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Regular updates</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
