'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { Badge } from '../ui/Badge';

export const PrivacySection: React.FC = () => {
  return (
    <section
      className="py-32 lg:py-40 px-8 depth-layer bg-gradient-to-b from-surface to-surface-secondary gradient-shadow-bg"
      id="privacy"
    >
      <Container size="md">
        <div className="text-center">
          <motion.div
            className="inline-block mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success" icon={<ShieldCheck size={20} />}>
              Privacy First
            </Badge>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            style={{
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Data Stays Yours
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-text-secondary max-w-[800px] mx-auto"
            style={{
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '-0.01em',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unlike other detection tools that send your images to the cloud, TruthLens processes
            everything on your device. No servers. No data collection. No tracking. What happens on
            your iPhone, stays on your iPhone.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};
