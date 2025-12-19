import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { Shield, Lock, Eye, Database, Cloud, Apple } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Privacy{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Your privacy is our highest priority. DeepGuard performs all AI analysis
                entirely on your device. Your images and videos are never uploaded to our servers.
              </p>
              <p className="text-sm text-slate-400 mt-4">
                Last updated: December 19, 2024
              </p>
            </div>
          </Container>
        </section>

        {/* Key Principles */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Simple, straightforward commitments to your privacy
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: '100% On-Device Processing',
                  description: 'All ML inference runs locally using Core ML and Apple Neural Engine. Your images never leave your device.',
                },
                {
                  icon: Eye,
                  title: 'Zero Data Collection',
                  description: 'No analytics, no telemetry, no tracking. We don\'t collect any data about you or your scanned content.',
                },
                {
                  icon: Cloud,
                  title: 'Your iCloud, Your Data',
                  description: 'Analysis history syncs to YOUR personal iCloud account, encrypted end-to-end. We cannot access it.',
                },
              ].map((principle, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center mb-4 mx-auto">
                    <principle.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-slate-300">{principle.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Introduction
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    DeepGuard ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we handle your information when you use our iOS application.
                  </p>
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <p className="flex items-center gap-2 font-semibold text-green-400">
                      <Lock className="w-5 h-5" /> Key Point
                    </p>
                    <p className="mt-2">
                      DeepGuard performs all AI analysis entirely on your device using Apple's Core ML framework.
                      Your images and videos are never uploaded to our servers or any third-party services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Information We Collect
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white">Information You Provide:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Apple className="w-5 h-5 text-[#6C47FF] mt-0.5 flex-shrink-0" />
                      <span><strong>Apple ID Information:</strong> When you sign in with Apple, we receive your Apple ID user identifier and optionally your name and email (if you choose to share them). This is used solely for authentication and iCloud sync.</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-white mt-6">Information We Do NOT Collect:</p>
                  <ul className="space-y-2">
                    {[
                      'Your photos or videos',
                      'Analysis results',
                      'Location data',
                      'Device usage analytics',
                      'Personal browsing history',
                      'Any telemetry or tracking data',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  On-Device Processing
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    All AI-powered deepfake detection happens locally on your device using Apple's Core ML framework
                    and Neural Engine. This means:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Your images never leave your device for analysis',
                      'No data is sent to external AI services',
                      'Analysis results are stored only on your device and in your personal iCloud',
                      'The app works completely offline',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  iCloud Sync
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    If you enable iCloud, your analysis history syncs across your Apple devices using YOUR personal
                    iCloud storage. This data is:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Encrypted by Apple end-to-end',
                      'Stored in your personal iCloud account',
                      'Not accessible by DeepGuard or any third party',
                      'Deletable at any time through the app settings',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  Third-Party Services
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>DeepGuard uses the following Apple services:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span><strong>Sign in with Apple:</strong> For secure authentication</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span><strong>CloudKit:</strong> For syncing your data across your devices</span>
                    </li>
                  </ul>
                  <p className="font-semibold text-white">
                    We do not use any third-party analytics, advertising, or tracking services.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  Required Permissions
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>DeepGuard requests the following permissions:</p>
                  <div className="grid gap-4 mt-4">
                    {[
                      { icon: '📷', title: 'Camera', desc: 'For photo capture and live detection' },
                      { icon: '🖼️', title: 'Photo Library (Read)', desc: 'To select images for analysis' },
                      { icon: '🖼️', title: 'Photo Library (Write)', desc: 'To save analyzed images (optional)' },
                      { icon: '☁️', title: 'iCloud', desc: 'For cross-device history sync' },
                    ].map((perm, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <span className="text-xl">{perm.icon}</span>
                        <div>
                          <p className="font-semibold text-white">{perm.title}</p>
                          <p className="text-sm">{perm.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    7
                  </div>
                  Data Retention
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Your analysis history remains on your device and in your iCloud until you choose to delete it.
                    You can clear all history at any time from the Settings menu in the app.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    8
                  </div>
                  Children's Privacy
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    DeepGuard is not intended for children under 13. We do not knowingly collect information from
                    children under 13. Since we don't collect any personal data, the app is safe for users of all ages.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    9
                  </div>
                  Changes to This Policy
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="font-semibold text-white">
                    Our core commitment to privacy will never change: DeepGuard will always process data locally
                    and never collect your personal information or scanned content.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    10
                  </div>
                  Contact Us
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    If you have questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="font-mono text-sm">📧 gruheshkurra2@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Shield className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Privacy-First Protection
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Experience deepfake detection that respects your privacy.
              </p>
              <a 
                href="https://apps.apple.com/app/deepguard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg"
              >
                Download DeepGuard
              </a>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
