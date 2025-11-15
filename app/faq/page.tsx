'use client';

import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Deepguard?',
      answer: 'Deepguard is a free, privacy-focused desktop application that helps you detect deepfakes in images and videos. It uses advanced AI technology to analyze content and identify potential manipulations, all while keeping your data completely private on your device.',
    },
    {
      question: 'How accurate is Deepguard?',
      answer: 'Deepguard achieves 99.7% accuracy on standard benchmarks like FaceForensics++. Our detection technology is based on peer-reviewed research and continuously updated to detect the latest deepfake techniques. However, no detection system is perfect, and we recommend using Deepguard as one tool in your verification toolkit.',
    },
    {
      question: 'Is Deepguard really free?',
      answer: 'Yes, Deepguard is completely free to use with no hidden costs, subscriptions, or premium tiers. We believe that protection against deepfakes should be accessible to everyone, not just those who can afford expensive tools.',
    },
    {
      question: 'Does Deepguard require an internet connection?',
      answer: 'No! Deepguard works completely offline. All analysis happens locally on your device, which means your content never leaves your computer. This ensures maximum privacy and allows you to use Deepguard anywhere, anytime.',
    },
    {
      question: 'What types of files does Deepguard support?',
      answer: 'Deepguard currently supports common image formats (JPG, PNG, WebP) and video formats (MP4, MOV, AVI). We\'re constantly working to add support for more file types. You can also analyze content directly from your camera or screen.',
    },
    {
      question: 'How does Deepguard protect my privacy?',
      answer: 'Privacy is our top priority. Deepguard processes everything locally on your device - we never upload, store, or transmit your scanned content. We don\'t collect analytics, track your usage, or require you to create an account. Your data is yours alone.',
    },
    {
      question: 'What platforms does Deepguard support?',
      answer: 'Deepguard is currently available for macOS (11.0+), Windows (10/11), and Linux (Ubuntu 20.04+). We\'re working on mobile versions for iOS and Android.',
    },
    {
      question: 'How long does it take to analyze content?',
      answer: 'Most images are analyzed in under 100 milliseconds. Videos take longer depending on length and resolution, but our optimized algorithms ensure fast processing even on older hardware. You\'ll see real-time progress indicators during analysis.',
    },
    {
      question: 'Can Deepguard detect all types of deepfakes?',
      answer: 'Deepguard is designed to detect a wide range of manipulation techniques including face swaps, lip-syncing, facial reenactment, and GAN-generated content. However, deepfake technology is constantly evolving. We regularly update our detection models to stay current with new techniques.',
    },
    {
      question: 'What should I do if Deepguard flags content?',
      answer: 'If Deepguard detects potential manipulation, it will show you a confidence score and highlight suspicious areas. Use this as a starting point for further investigation. We recommend cross-referencing with other sources, checking metadata, and considering the context before drawing conclusions.',
    },
    {
      question: 'Does Deepguard work with live video?',
      answer: 'Yes! Deepguard can analyze live video feeds from your camera or screen in real-time. This is useful for video calls, live streams, or any real-time content verification needs.',
    },
    {
      question: 'How do I report a bug or request a feature?',
      answer: 'We welcome feedback! You can report bugs or request features through our GitHub repository. We actively monitor issues and incorporate user feedback into our development roadmap.',
    },
    {
      question: 'Is the source code available?',
      answer: 'Yes, Deepguard is open source! You can view, audit, and contribute to the code on our GitHub repository. Transparency is important to us, and we believe open source is the best way to build trustworthy security tools.',
    },
    {
      question: 'Can I use Deepguard for commercial purposes?',
      answer: 'Yes, Deepguard is free for both personal and commercial use under our open source license. However, we ask that you credit Deepguard in your product and consider contributing improvements back to the community.',
    },
    {
      question: 'How often is Deepguard updated?',
      answer: 'We release updates regularly to improve detection accuracy, add new features, and fix bugs. The app will notify you when updates are available. We recommend keeping Deepguard up to date for the best protection.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about Deepguard
              </p>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-lg font-semibold pr-8">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still have questions?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Join our community or reach out to us directly. We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                  Join Discord
                </button>
                <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300">
                  Contact Support
                </button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
