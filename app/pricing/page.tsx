import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { Check, Zap, Heart, Building2, Sparkles } from 'lucide-react';

export default function PricingPage() {
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
                  Simple Pricing
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Free for{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Everyone
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                No subscriptions, no hidden fees, no premium tiers. Deepguard is completely free
                because we believe digital security should be accessible to all.
              </p>
            </div>
          </Container>
        </section>

        {/* Main Pricing Card */}
        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] rounded-3xl opacity-20 blur-2xl" />

                {/* Main Card */}
                <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6C47FF] to-[#38DAFD] mb-4">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">Forever Free</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-4">$0</h2>
                    <p className="text-lg text-slate-300">
                      Everything you need to detect deepfakes. No credit card required.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      'Unlimited scans',
                      'All file formats supported',
                      'Real-time detection',
                      'Batch processing',
                      'Camera & screen capture',
                      'Detailed analysis reports',
                      'Visual heatmaps',
                      'Export results',
                      'Offline processing',
                      'Regular updates',
                      'No data collection',
                      'Open source',
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6C47FF] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <button className="px-10 py-5 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg mb-4">
                      Download Deepguard
                    </button>
                    <p className="text-sm text-slate-400">
                      Available for macOS, Windows, and Linux
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Free Section */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why is it free?
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                We believe that protection against deepfakes is a fundamental right in the digital age.
                Making Deepguard free ensures everyone has access to this critical security tool,
                regardless of their financial situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Community Driven',
                  description: 'Built and maintained by volunteers who care about digital privacy and security.',
                },
                {
                  icon: Zap,
                  title: 'Open Source',
                  description: 'Transparent development means the community can audit, contribute, and improve the code.',
                },
                {
                  icon: Building2,
                  title: 'Research Backed',
                  description: 'Supported by academic institutions and security researchers worldwide.',
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-slate-300">{reason.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Support Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Want to support us?
                </h2>
                <p className="text-lg text-slate-300 mb-8">
                  While Deepguard is free, we welcome contributions from those who want to help
                  sustain and improve the project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300">
                    Contribute Code
                  </button>
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300">
                    Sponsor Development
                  </button>
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300">
                    Share the Project
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#6C47FF]/20 border border-[#6C47FF]/30 text-sm font-medium text-[#6C47FF] mb-4">
                    For Organizations
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Enterprise Solutions
                  </h2>
                  <p className="text-lg text-slate-300 mb-6">
                    Need custom integrations, on-premise deployment, or dedicated support?
                    We offer tailored solutions for organizations with specific requirements.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Custom API integration',
                      'On-premise deployment',
                      'Dedicated support',
                      'SLA guarantees',
                      'Custom model training',
                      'Compliance assistance',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-[#6C47FF] flex-shrink-0" strokeWidth={2} />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                    Contact Sales
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6C47FF]/20 via-[#38DAFD]/20 to-[#FFF963]/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <Building2 className="w-32 h-32 text-[#6C47FF]" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Pricing FAQ
              </h2>
              <div className="space-y-6">
                {[
                  {
                    question: 'Will Deepguard always be free?',
                    answer: 'Yes! The core Deepguard application will always be free for personal use. This is a commitment we take seriously.',
                  },
                  {
                    question: 'Are there any limitations on the free version?',
                    answer: 'No. The free version includes all features with no restrictions on usage, file size, or processing time.',
                  },
                  {
                    question: 'How do you sustain the project?',
                    answer: 'Deepguard is sustained through a combination of volunteer contributions, academic grants, and optional enterprise licenses for organizations.',
                  },
                  {
                    question: 'Can I use Deepguard commercially?',
                    answer: 'Yes! Deepguard is free for both personal and commercial use under our open source license.',
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
