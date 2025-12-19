'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Brain, Zap, Lock, Target, Scan } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { GradientText } from '../ui/GradientText';
import { QRCodeSVG } from 'qrcode.react';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="mt-16 py-32 lg:py-40 px-8 text-center depth-layer bg-gradient-to-b from-surface to-background relative overflow-hidden gradient-shadow-bg">
      {/* Floating 3D Background Elements */}
      <FloatingElements />

      <Container className="relative z-10">
        <motion.div style={{ y }}>
          {/* Skip to main content link */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:rounded-md"
          >
            Skip to content
          </a>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GradientText from="#ffffff" to="#61A8FF">
              Detect Deepfakes
            </GradientText>
            <br />
            <span className="text-text-primary">& AI Images</span>
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl font-light text-text-secondary mb-8"
            style={{
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            100% Private. On Your Device.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-text-secondary mb-16 max-w-[700px] mx-auto"
            style={{
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Advanced AI-powered detection that runs completely on your iPhone. No data transmission. No tracking. Just truth.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-12 mt-20"
            id="download"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              variant="primary"
              size="lg"
              asLink
              href="#"
              aria-label="Download DeepGuard on the App Store"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </Button>

            {/* Enhanced QR Code */}
            <div className="relative">
              <div className="glass-premium p-8 rounded-3xl inline-block smooth-hover">
                <QRCodeSVG
                  value="https://apps.apple.com/app/deepguard"
                  size={180}
                  level="H"
                  fgColor="#000000"
                  bgColor="transparent"
                />
                <p className="mt-4 text-sm text-text-secondary text-center font-medium">
                  Scan to download
                </p>
              </div>
              {/* Glow effect behind QR code */}
              <div className="absolute inset-0 bg-accent-blue/20 blur-3xl -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

// Floating 3D Elements Component
const FloatingElements: React.FC = () => {
  const icons = [
    { Icon: Shield, top: '10%', left: '5%', delay: 0 },
    { Icon: Brain, top: '20%', right: '8%', delay: 1 },
    { Icon: Zap, top: '60%', left: '12%', delay: 2 },
    { Icon: Lock, top: '70%', right: '15%', delay: 1.5 },
    { Icon: Target, top: '40%', left: '8%', delay: 0.5 },
    { Icon: Scan, top: '50%', right: '10%', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, top, left, right, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top,
            left,
            right,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={64} className="text-accent-blue" />
        </motion.div>
      ))}
    </div>
  );
};
