'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lock, Zap, Target, BarChart3, Palette } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  featured?: boolean;
}

const features: Feature[] = [
  {
    icon: Search,
    title: 'Dual Detection',
    description:
      'Two specialized AI models detect both deepfake manipulations and AI-generated images with >95% accuracy.',
    featured: true,
  },
  {
    icon: Lock,
    title: '100% Private',
    description:
      'All processing happens on your device. Zero data transmission. No tracking. Your images never leave your phone.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Analyze images in under 200ms. Batch process up to 500 images at once. All offline.',
  },
  {
    icon: Target,
    title: 'Research-Backed',
    description:
      'Built on cutting-edge research with published results. Regular model updates for new AI generators.',
    featured: true,
  },
  {
    icon: BarChart3,
    title: 'Detailed Analysis',
    description:
      'View confidence scores, heatmaps, and forensic details. Understand exactly what was detected.',
  },
  {
    icon: Palette,
    title: 'Easy to Use',
    description:
      'Capture, upload, or paste. Get instant results. No technical knowledge required.',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 px-8 bg-background gradient-shadow-bg" id="features">
      <Container>
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-24"
          style={{
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powerful Detection. Simple to Use.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={feature.featured ? 'lg:col-span-2' : ''}
    >
      <Card variant="feature" featured={feature.featured} className="text-center h-full">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-blue to-[#5ac8fa] rounded-xl flex items-center justify-center smooth-scale">
          <Icon size={32} className="text-white" aria-hidden="true" />
        </div>
        <h3
          className="text-2xl font-semibold mb-4"
          style={{
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {feature.title}
        </h3>
        <p
          className="text-text-secondary"
          style={{
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '-0.01em',
          }}
        >
          {feature.description}
        </p>
      </Card>
    </motion.div>
  );
};
