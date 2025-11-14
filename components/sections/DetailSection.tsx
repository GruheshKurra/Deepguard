'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const platforms = [
  'Stable Diffusion (all versions)',
  'DALL-E 3',
  'Midjourney v4-v6',
  'Sora',
  'StyleGAN variants',
  'Face swaps & deepfakes',
  'Facial retouching & filters',
  'And more with regular updates',
];

export const DetailSection: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 px-8 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
              style={{
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Detect AI from
              <br />
              All Major Platforms
            </h2>
            <ul className="space-y-6">
              {platforms.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-4 text-lg border-b border-surface pb-6 smooth-hover"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <Check size={20} className="text-success" aria-hidden="true" />
                  </div>
                  <span
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card variant="elevated" hoverable={false} className="text-center min-h-[500px] flex items-center justify-center">
              <div
                style={{
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
                className="text-text-secondary"
              >
                App Screenshot Placeholder
                <br />
                (Analysis result with heatmap)
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
