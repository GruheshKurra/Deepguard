'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Brain, Lock, Smartphone, Camera, Video, FileStack, History, AlertTriangle } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'On-Device Processing',
    description: 'All analysis happens locally on your iPhone using Core ML. Your images never leave your device. Complete privacy guaranteed.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Brain,
    title: 'Dual AI Models',
    description: 'Choose between DeepGuard v1 and v2 models. Specialized neural networks detect deepfakes and AI-generated images with over 90% accuracy.',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Camera,
    title: 'Live Camera Detection',
    description: 'Real-time AR-style detection. Point your camera at any image for instant analysis with live color-coded overlays.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    icon: Video,
    title: 'Video Analysis',
    description: 'Frame-by-frame video deepfake detection. Analyzes each frame and provides aggregate results with timeline breakdown.',
    gradient: 'from-red-500/20 to-orange-500/20',
  },
  {
    icon: FileStack,
    title: 'Bulk Analysis',
    description: 'Analyze up to 50 images at once with progress tracking. Auto-saves all results to history with EXIF metadata analysis.',
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    icon: Lock,
    title: 'Smart EXIF Detection',
    description: 'Detects 20+ AI tools including DALL-E, Midjourney, Stable Diffusion, and validates real camera signatures.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    icon: History,
    title: 'iCloud Sync',
    description: 'Analysis history syncs securely via iCloud across all your Apple devices. Encrypted end-to-end in your personal account.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    icon: AlertTriangle,
    title: 'Abuse Reports',
    description: 'Document and report malicious deepfake use with categorized reports. Track status from pending to resolved.',
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    icon: Smartphone,
    title: 'Works Offline',
    description: 'Full functionality without internet. Perfect for privacy-conscious users. No cloud uploads ever required.',
    gradient: 'from-teal-500/20 to-emerald-500/20',
  },
];

export const ClerkFeatures: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#030712] overflow-hidden">
      {/* Background Elements - Clerk Style */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(108,71,255,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,218,253,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-[#6C47FF] uppercase tracking-wider mb-3">
              Features
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-tight">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                detect AI-generated content
              </span>
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Powered by cutting-edge research and optimized for Apple Silicon.
              DeepGuard brings research-grade detection to your pocket.
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
              <div className="relative h-full p-6 rounded-lg bg-surface/50 border border-surface-tertiary/30 backdrop-blur-sm transition-all duration-300 hover:bg-surface hover:border-surface-tertiary/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C47FF]/15 to-[#38DAFD]/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#6C47FF]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h4>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6C47FF]/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
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
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6 text-base">
            Ready to protect yourself from AI deception?
          </p>
          <button className="px-7 py-3 bg-[#6C47FF] hover:bg-[#5a3ad6] text-white font-medium rounded-lg transition-all duration-200 shadow-[0_8px_24px_rgba(108,71,255,0.25)] hover:shadow-[0_8px_32px_rgba(108,71,255,0.35)]">
            Download for iOS →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
