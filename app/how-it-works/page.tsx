import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { Upload, Scan, CheckCircle, Download, Eye, Brain, Shield, Zap } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="text-sm font-medium bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  How It Works
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Detect Deepfakes in{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  3 Simple Steps
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Advanced AI technology made simple. No technical knowledge required.
              </p>
            </div>
          </Container>
        </section>

        {/* Steps Section */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="max-w-5xl mx-auto space-y-24">
              {[
                {
                  step: '01',
                  icon: Upload,
                  title: 'Upload or Capture',
                  description: 'Import images or videos, use your camera, or scan directly from your screen. Deepguard supports all common file formats.',
                  features: [
                    'Drag and drop files',
                    'Live camera capture',
                    'Screen recording',
                    'Batch processing',
                  ],
                },
                {
                  step: '02',
                  icon: Scan,
                  title: 'AI Analysis',
                  description: 'Our advanced neural networks analyze the content using multiple detection methods, all happening locally on your device.',
                  features: [
                    'Facial inconsistency detection',
                    'Temporal analysis',
                    'Artifact identification',
                    'Biological signal verification',
                  ],
                },
                {
                  step: '03',
                  icon: CheckCircle,
                  title: 'Get Results',
                  description: 'Receive instant results with confidence scores, visual heatmaps showing suspicious areas, and detailed analysis reports.',
                  features: [
                    'Confidence scoring',
                    'Visual heatmaps',
                    'Detailed reports',
                    'Export results',
                  ],
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="text-6xl md:text-8xl font-bold text-white/5 mb-4">
                      {step.step}
                    </div>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] mb-6">
                      <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#6C47FF]" />
                          <span className="text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center p-12">
                      <step.icon
                        className="w-full h-full text-[#6C47FF] opacity-20"
                        strokeWidth={0.5}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technology Section */}
        <section className="py-20">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Powered by Advanced Technology
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Multiple layers of AI analysis working together for maximum accuracy
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Deep Learning',
                  description: 'Neural networks trained on millions of samples',
                },
                {
                  icon: Eye,
                  title: 'Visual Analysis',
                  description: 'Pixel-level examination for subtle artifacts',
                },
                {
                  icon: Zap,
                  title: 'Real-time Processing',
                  description: 'Optimized for speed without sacrificing accuracy',
                },
                {
                  icon: Shield,
                  title: 'Privacy First',
                  description: 'Everything runs locally on your device',
                },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                  <p className="text-slate-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Use Cases
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Deepguard helps protect you in various scenarios
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Social Media Verification',
                  description: 'Verify authenticity of viral images and videos before sharing',
                  emoji: '📱',
                },
                {
                  title: 'News & Journalism',
                  description: 'Ensure the integrity of visual content in reporting',
                  emoji: '📰',
                },
                {
                  title: 'Personal Security',
                  description: 'Protect yourself from identity theft and manipulation',
                  emoji: '🔒',
                },
                {
                  title: 'Video Calls',
                  description: 'Verify the authenticity of people in video conferences',
                  emoji: '💼',
                },
                {
                  title: 'Content Moderation',
                  description: 'Screen user-generated content for manipulated media',
                  emoji: '👥',
                },
                {
                  title: 'Legal Evidence',
                  description: 'Validate the authenticity of digital evidence',
                  emoji: '⚖️',
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{useCase.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-slate-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Requirements */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  System Requirements
                </h2>
                <p className="text-lg text-slate-300">
                  Deepguard works on most modern computers
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'macOS',
                    requirements: ['macOS 11.0 or later', 'Intel or Apple Silicon', '4GB RAM minimum'],
                  },
                  {
                    title: 'Windows',
                    requirements: ['Windows 10/11', 'x64 processor', '4GB RAM minimum'],
                  },
                  {
                    title: 'Linux',
                    requirements: ['Ubuntu 20.04+', 'x64 processor', '4GB RAM minimum'],
                  },
                ].map((platform, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <h3 className="text-xl font-semibold mb-4">{platform.title}</h3>
                    <ul className="space-y-2">
                      {platform.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-[#6C47FF] flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Download className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Download Deepguard now and start protecting yourself from deepfakes.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg">
                Download for Free
              </button>
              <p className="text-sm text-slate-400 mt-4">
                Free forever • No account required • Works offline
              </p>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
