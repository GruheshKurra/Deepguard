import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { Shield, Lock, Eye, Database, Download, UserX } from 'lucide-react';

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
                  First
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Your privacy is our highest priority. This policy explains how Deepguard
                handles your data (spoiler: we don't collect any).
              </p>
              <p className="text-sm text-slate-400 mt-4">
                Last updated: November 15, 2025
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
                  title: 'Local Processing Only',
                  description: 'All analysis happens on your device. Nothing is ever uploaded to our servers.',
                },
                {
                  icon: UserX,
                  title: 'Zero Data Collection',
                  description: 'We don\'t collect, store, or transmit any personal information or scanned content.',
                },
                {
                  icon: Eye,
                  title: 'No Tracking',
                  description: 'No analytics, no cookies, no telemetry. We have no idea what you scan.',
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
                  Information We Don't Collect
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard is designed with privacy at its core. We fundamentally do not collect, process,
                    or store any of the following:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Images or videos you scan',
                      'Analysis results or reports',
                      'Personal information or identifiers',
                      'Usage statistics or analytics',
                      'Device information or specifications',
                      'IP addresses or location data',
                      'Cookies or tracking data',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-white">
                    We mean it: we have no servers, no databases, and no way to access your data.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  How Deepguard Works
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard operates entirely on your local device using on-device AI models:
                  </p>
                  <ul className="space-y-3">
                    <li>
                      <strong className="text-white">Local Processing:</strong> When you scan an image or video,
                      all analysis is performed by AI models running directly on your computer.
                    </li>
                    <li>
                      <strong className="text-white">No Network Activity:</strong> Deepguard doesn't require or
                      use an internet connection for scanning. You can disconnect from the internet entirely
                      and it will work the same.
                    </li>
                    <li>
                      <strong className="text-white">Temporary Memory:</strong> Files are loaded into memory
                      only for the duration of the scan and are immediately discarded afterward.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Software Updates
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    To check for updates, Deepguard may contact our servers to see if a new version is available.
                    This check includes:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Your current app version number</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Your operating system type (e.g., macOS, Windows, Linux)</span>
                    </li>
                  </ul>
                  <p>
                    This minimal information is only used to determine if an update is available and is not
                    logged or stored. You can disable automatic update checks in settings.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  Open Source Transparency
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard is fully open source. You can:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Review the complete source code on GitHub</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Verify that no data collection occurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Build the application from source yourself</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Audit network activity to confirm no data transmission</span>
                    </li>
                  </ul>
                  <p>
                    We encourage security researchers and privacy advocates to examine our code and hold us
                    accountable to our privacy commitments.
                  </p>
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
                  <p>
                    Deepguard does not integrate with or use any third-party analytics, advertising,
                    or tracking services. The application is completely self-contained.
                  </p>
                  <p>
                    If you download Deepguard from platform-specific stores (App Store, Microsoft Store, etc.),
                    those platforms may collect their own analytics about downloads and installations according
                    to their privacy policies.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  Your Rights
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Since we don't collect any personal data, there's nothing for us to access, modify,
                    or delete. You maintain complete control over:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>All files you scan (they never leave your device)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>Any reports you generate (stored locally only)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#6C47FF] mt-1">•</span>
                      <span>App settings and preferences</span>
                    </li>
                  </ul>
                  <p>
                    You can delete the application at any time, and all local data will be removed from your device.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    7
                  </div>
                  Children's Privacy
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard does not collect any information from anyone, including children under 13.
                    The application is safe for users of all ages.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    8
                  </div>
                  Changes to This Policy
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We may update this privacy policy to reflect changes in our practices or for legal reasons.
                    Any changes will be posted on this page with an updated revision date.
                  </p>
                  <p>
                    However, our core commitment to privacy will never change: Deepguard will always process
                    data locally and never collect your personal information or scanned content.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    9
                  </div>
                  Contact Us
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    If you have questions about this privacy policy or Deepguard's privacy practices,
                    please contact us:
                  </p>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="font-mono text-sm">privacy@deepguard.org</p>
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
              <Download className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Privacy-First Protection
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Experience deepfake detection that respects your privacy.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg">
                Download Deepguard
              </button>
            </div>
          </Container>
        </section>
      </main>
      <ClerkFooter />
    </div>
  );
}
