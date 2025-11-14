'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How does TruthLens detect deepfakes?',
    answer:
      'TruthLens uses two specialized AI models that analyze images for subtle artifacts and patterns characteristic of AI generation and manipulation. Our models are trained on millions of real and fake images to achieve over 95% accuracy.',
  },
  {
    question: 'Does TruthLens work offline?',
    answer:
      'Yes! All detection happens entirely on your device. TruthLens works perfectly offline with no internet connection required after initial download.',
  },
  {
    question: 'What types of AI images can it detect?',
    answer:
      'TruthLens can detect images from major AI generators including DALL-E, Midjourney, Stable Diffusion, and more. It also detects deepfakes, face swaps, and facial manipulations.',
  },
  {
    question: 'Is my data completely private?',
    answer:
      'Absolutely. TruthLens processes everything on your device. We never transmit, store, or access your images. There is no server communication, no analytics, and no tracking whatsoever.',
  },
  {
    question: 'How accurate is the detection?',
    answer:
      'Our models achieve over 95% accuracy on standard benchmarks. However, no detection system is perfect. We provide confidence scores to help you interpret results.',
  },
  {
    question: 'Does TruthLens cost money?',
    answer:
      'TruthLens is completely free with no ads, no subscriptions, and no in-app purchases. We believe everyone should have access to reliable deepfake detection.',
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="py-32 lg:py-40 px-8 bg-background gradient-shadow-bg">
      <Container size="md">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
          style={{
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Accordion.Item value={`item-${index}`} className="glass-card rounded-xl overflow-hidden">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-secondary/50 transition-colors group">
                    <span
                      className="text-lg md:text-xl font-semibold pr-4"
                      style={{
                        fontWeight: 600,
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="flex-shrink-0 text-accent-blue transition-transform duration-300 group-data-[state=open]:rotate-180"
                      size={24}
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div
                    className="p-6 pt-0 text-text-secondary"
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.6,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  );
};
