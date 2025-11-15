import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { Shield, Users, Target, Zap } from 'lucide-react';

export default function AboutPage() {
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
                  About Deepguard
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Protecting Your{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Digital Privacy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Deepguard is your first line of defense against deepfake technology.
                We're on a mission to make digital content verification accessible to everyone.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission Section */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  In an era where deepfake technology is becoming increasingly sophisticated,
                  we believe everyone deserves the tools to verify the authenticity of digital content.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Deepguard combines cutting-edge AI and machine learning to detect manipulated
                  images and videos in real-time, empowering individuals and organizations to
                  make informed decisions about the content they consume.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6C47FF]/20 via-[#38DAFD]/20 to-[#FFF963]/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-[#6C47FF]" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Privacy First',
                  description: 'Your data stays on your device. We never collect or store your scanned content.',
                },
                {
                  icon: Zap,
                  title: 'Lightning Fast',
                  description: 'Real-time detection powered by optimized AI models running locally.',
                },
                {
                  icon: Users,
                  title: 'Accessible',
                  description: 'Free forever. Advanced technology shouldn\'t be limited to those who can afford it.',
                },
                {
                  icon: Target,
                  title: 'Accurate',
                  description: '99.7% detection accuracy backed by peer-reviewed research.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Built by Experts
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A team of AI researchers, security experts, and privacy advocates committed
                to making the internet a safer place.
              </p>
            </div>
            <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
              <div className="text-center">
                <p className="text-lg text-slate-300 mb-6">
                  Deepguard is developed by a distributed team of passionate individuals
                  working at the intersection of AI, cybersecurity, and digital rights.
                </p>
                <p className="text-lg text-slate-300">
                  Our work is supported by leading academic institutions and backed by
                  peer-reviewed research published in top-tier security conferences.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Join the Movement
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Download Deepguard today and take control of your digital security.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg">
                Download for Free
              </button>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
