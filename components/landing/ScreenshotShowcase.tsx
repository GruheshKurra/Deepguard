'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, Play, Pause } from 'lucide-react';
import Image from 'next/image';

interface Screenshot {
  src: string;
  title: string;
  description: string;
  category: 'onboarding' | 'main' | 'features' | 'settings';
}

const screenshots: Screenshot[] = [
  // Main screens - prioritized first
  {
    src: '/screenshots HD/home-screen-main.jpeg',
    title: 'Home Dashboard',
    description: 'Quick access to Gallery, Camera, Video, and Live analysis with AI model selection',
    category: 'main',
  },
  {
    src: '/screenshots HD/home-screen-stats.jpeg',
    title: 'Usage Statistics',
    description: 'Track your scans with real-time stats showing Real vs AI-detected content',
    category: 'main',
  },
  {
    src: '/screenshots HD/analysis-result-real.jpeg',
    title: 'Analysis Result',
    description: 'Detailed results showing authenticity confidence level with visual indicators',
    category: 'main',
  },
  {
    src: '/screenshots HD/live-detection-authentic.jpeg',
    title: 'Live Camera Detection',
    description: 'Real-time AR-style analysis with instant authenticity feedback',
    category: 'features',
  },
  {
    src: '/screenshots HD/history-overview.jpeg',
    title: 'Analysis History',
    description: 'Browse all your analyzed videos and images with organized counts',
    category: 'features',
  },
  // Onboarding screens
  {
    src: '/screenshots HD/welcome-signin.jpeg',
    title: 'Welcome Screen',
    description: 'Sign in with Apple for secure iCloud sync across all devices',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-splash.jpeg',
    title: 'Getting Started',
    description: 'AI-powered assistant for detecting AI-generated content and deepfakes',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-privacy.jpeg',
    title: '100% Private',
    description: 'All analysis runs completely on-device - your data never leaves your phone',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-images.jpeg',
    title: 'Image Analysis',
    description: 'Pick from gallery, take photos, or use bulk mode for batch processing',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-video.jpeg',
    title: 'Video Analysis',
    description: 'Frame-by-frame scans to detect AI-generated or manipulated video content',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-metadata.jpeg',
    title: 'Smart Metadata',
    description: 'Read EXIF data to detect tools like DALL-E, Midjourney, and Stable Diffusion',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-report.jpeg',
    title: 'Report Abuse',
    description: 'Create detailed reports for malicious deepfake use to combat cybercrime',
    category: 'onboarding',
  },
  {
    src: '/screenshots HD/onboarding-sync.jpeg',
    title: 'iCloud Sync',
    description: 'Your analysis history syncs securely across all your Apple devices',
    category: 'onboarding',
  },
  // Settings screens
  {
    src: '/screenshots HD/settings-screen.jpeg',
    title: 'Settings & Sync',
    description: 'AI Model status, iCloud sync info, and feature toggles',
    category: 'settings',
  },
  {
    src: '/screenshots HD/settings-menu.jpeg',
    title: 'App Settings',
    description: 'Data management, legal documents, and 100% on-device processing info',
    category: 'settings',
  },
  {
    src: '/screenshots HD/privacy-policy.jpeg',
    title: 'Privacy Policy',
    description: 'Transparent privacy practices - all AI analysis performed on-device',
    category: 'settings',
  },
  {
    src: '/screenshots HD/terms-of-use.jpeg',
    title: 'Terms of Use',
    description: 'Clear terms of service with acceptance details and legal information',
    category: 'settings',
  },
  {
    src: '/screenshots HD/reports-empty.jpeg',
    title: 'Abuse Reports',
    description: 'Document and report malicious deepfakes to help combat cybercrime',
    category: 'features',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'main', label: 'Main Screens' },
  { id: 'features', label: 'Features' },
  { id: 'onboarding', label: 'Onboarding' },
  { id: 'settings', label: 'Settings' },
];

export const ScreenshotShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const filteredScreenshots = selectedCategory === 'all'
    ? screenshots
    : screenshots.filter((s) => s.category === selectedCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredScreenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay, filteredScreenshots.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredScreenshots.length) % filteredScreenshots.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredScreenshots.length);
  };

  const currentScreenshot = filteredScreenshots[currentIndex];

  return (
    <section className="relative py-24 px-6 bg-[#030712] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(108,71,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,218,253,0.05),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,249,99,0.04),transparent_40%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-[#6C47FF] uppercase tracking-wider mb-3">
            App Screenshots
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-tight">
            Experience the app
            <br />
            <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
              before you download
            </span>
          </h3>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Take a tour through DeepGuard&apos;s intuitive interface and powerful features.
            Every screen is designed with privacy and usability in mind.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#6C47FF] text-white shadow-[0_4px_16px_rgba(108,71,255,0.3)]'
                  : 'bg-surface/50 text-text-secondary hover:bg-surface hover:text-text-primary border border-surface-tertiary/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Main Showcase */}
        <div className="flex flex-col items-center gap-12">
          {/* Phone Mockup with Feature Callouts */}
          <div className="relative w-full max-w-5xl flex items-center justify-center">
            {/* Left Feature Callouts */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2"
            >
              <div className="relative flex items-center">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#6C47FF]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#6C47FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">100% Private</span>
                  </div>
                  <p className="text-xs text-text-secondary">All processing happens on-device</p>
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              
              <div className="relative flex items-center ml-8">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#38DAFD]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#38DAFD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Real-time</span>
                  </div>
                  <p className="text-xs text-text-secondary">Live camera detection mode</p>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>
              
              <div className="relative flex items-center">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF963]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#FFF963]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Smart EXIF</span>
                  </div>
                  <p className="text-xs text-text-secondary">Detect AI tool signatures</p>
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6C47FF]/20 via-[#38DAFD]/10 to-transparent blur-3xl scale-110" />
              
              {/* iPhone Frame */}
              <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#16162a] rounded-[3.5rem] p-3 shadow-[0_32px_64px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] border border-white/[0.08]">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />
                
                {/* Screen */}
                <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[9/19.5] rounded-[2.8rem] overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScreenshot?.src}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      {currentScreenshot && (
                        <Image
                          src={currentScreenshot.src}
                          alt={currentScreenshot.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Reflection */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#6C47FF]/10 to-transparent blur-2xl" />
            </motion.div>

            {/* Right Feature Callouts */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex flex-col gap-6 absolute right-0 top-1/2 -translate-y-1/2"
            >
              <div className="relative flex items-center flex-row-reverse">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#6C47FF]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#6C47FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">iCloud Sync</span>
                  </div>
                  <p className="text-xs text-text-secondary">Sync across all your devices</p>
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-white/20 to-transparent" />
              </div>
              
              <div className="relative flex items-center flex-row-reverse mr-8">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#38DAFD]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#38DAFD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Video Analysis</span>
                  </div>
                  <p className="text-xs text-text-secondary">Frame-by-frame detection</p>
                </div>
                <div className="w-8 h-px bg-gradient-to-l from-white/20 to-transparent" />
              </div>
              
              <div className="relative flex items-center flex-row-reverse">
                <div className="bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-[200px] shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-text-primary">Report Abuse</span>
                  </div>
                  <p className="text-xs text-text-secondary">Combat malicious deepfakes</p>
                </div>
                <div className="w-12 h-px bg-gradient-to-l from-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center max-w-lg"
          >
            {/* Current Screenshot Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenshot?.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6C47FF]/10 text-[#6C47FF] text-xs font-medium mb-4 border border-[#6C47FF]/20">
                  <Smartphone className="w-3 h-3" />
                  {currentScreenshot?.category.charAt(0).toUpperCase() + currentScreenshot?.category.slice(1)}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                  {currentScreenshot?.title}
                </h4>
                <p className="text-lg text-text-secondary max-w-md mx-auto leading-relaxed">
                  {currentScreenshot?.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-surface/50 text-text-primary hover:bg-surface transition-all duration-200 border border-surface-tertiary/30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className={`p-3 rounded-full transition-all duration-200 border ${
                  isAutoplay
                    ? 'bg-[#6C47FF]/20 text-[#6C47FF] border-[#6C47FF]/30'
                    : 'bg-surface/50 text-text-secondary border-surface-tertiary/30'
                }`}
              >
                {isAutoplay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-surface/50 text-text-primary hover:bg-surface transition-all duration-200 border border-surface-tertiary/30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex items-center justify-center gap-2 flex-wrap max-w-md mx-auto">
              {filteredScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-[#6C47FF]'
                      : 'w-2 h-2 bg-surface-tertiary/50 hover:bg-surface-tertiary'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="mt-6 text-text-tertiary text-sm text-center">
              {currentIndex + 1} of {filteredScreenshots.length} screenshots
            </div>
          </motion.div>
        </div>

        {/* Thumbnail Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 overflow-x-auto pb-4"
        >
          <div className="flex gap-4 justify-center min-w-max px-4">
            {filteredScreenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                onClick={() => setCurrentIndex(index)}
                className={`relative flex-shrink-0 w-16 h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-[#6C47FF] ring-offset-2 ring-offset-[#030712] scale-105'
                    : 'opacity-50 hover:opacity-80 hover:scale-102'
                }`}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
