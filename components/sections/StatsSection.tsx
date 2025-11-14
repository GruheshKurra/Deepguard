'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: '100K+', label: 'Downloads' },
  { number: '95%+', label: 'Accuracy' },
  { number: '4.8★', label: 'App Store' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 px-8 gradient-shadow-bg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card variant="premium" hoverable={false} className="text-center">
                <div
                  className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent"
                  style={{
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-lg text-text-secondary"
                  style={{
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
