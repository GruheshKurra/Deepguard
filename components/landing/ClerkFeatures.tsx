'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Lock, Smartphone, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'On-Device Processing',
    description: 'All analysis happens locally on your iPhone. Your images never leave your device. Complete privacy guaranteed.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Brain,
    title: 'Dual AI Models',
    description: 'Two specialized neural networks detect deepfakes and AI-generated images with over 95% accuracy.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get detection results in under 200ms. Lightning-fast analysis optimized for Apple Silicon.',
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Lock,
    title: 'Zero Data Collection',
    description: 'No analytics, no tracking, no telemetry. We don\'t collect any data about you or your images.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Smartphone,
    title: 'Works Offline',
    description: 'Full functionality without internet. Perfect for privacy-conscious users and sensitive situations.',
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analysis',
    description: 'Get confidence scores, heatmaps, and forensic details. Understand exactly why content was flagged.',
    gradient: 'from-red-500/20 to-pink-500/20',
  },
];

export const ClerkFeatures: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(97,168,255,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(97,168,255,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-[#61A8FF] uppercase tracking-wider mb-4">
              Features
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-[#61A8FF] to-[#7BB8FF] bg-clip-text text-transparent">
                detect fake content
              </span>
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powered by cutting-edge research and optimized for mobile devices.
              TruthLens brings research-grade detection to your pocket.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(97,168,255,0.1)]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#61A8FF]/20 to-[#61A8FF]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#61A8FF]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to protect yourself from AI deception?
          </p>
          <button className="px-8 py-4 bg-[#61A8FF] hover:bg-[#5098EF] text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_40px_rgba(97,168,255,0.3)] hover:shadow-[0_0_60px_rgba(97,168,255,0.5)] hover:scale-105">
            Get Started →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
