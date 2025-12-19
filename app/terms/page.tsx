import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { FileText, Scale, AlertTriangle } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Scale className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Terms of{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Use
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using DeepGuard.
              </p>
              <p className="text-sm text-slate-400 mt-4">
                Last updated: December 19, 2024
              </p>
            </div>
          </Container>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto space-y-12">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  Acceptance of Terms
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    By downloading, installing, or using DeepGuard ("the App"), you agree to be bound by these
                    Terms of Use. If you do not agree to these terms, please do not use the App.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  Description of Service
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    DeepGuard is an AI-powered iOS application that analyzes images and videos to detect potential
                    AI-generated or manipulated content (commonly known as "deepfakes"). The App uses machine learning
                    models that run entirely on your device using Apple's Core ML framework.
                  </p>
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="flex items-center gap-2 font-semibold text-yellow-400">
                      <AlertTriangle className="w-5 h-5" /> Important Disclaimer
                    </p>
                    <p className="mt-2">
                      DeepGuard provides probabilistic assessments based on machine learning analysis. Results are
                      not guaranteed to be 100% accurate and should not be used as the sole basis for important decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Use License
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
                  <ul className="space-y-2">
                    {[
                      'Download and install the App on your personal Apple devices',
                      'Use the App for personal, non-commercial purposes',
                      'Access features in accordance with these Terms',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
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
                  Restrictions
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>You agree NOT to:</p>
                  <ul className="space-y-2">
                    {[
                      'Reverse engineer, decompile, or disassemble the App',
                      'Modify, adapt, or create derivative works based on the App',
                      'Use the App for any illegal or unauthorized purpose',
                      'Use the App to harass, defame, or violate the rights of others',
                      'Attempt to circumvent any security features of the App',
                      'Use the App in any way that could damage or overburden our services',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">✗</span>
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
                  AI Analysis Limitations
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <p className="flex items-center gap-2 font-semibold text-red-400">
                      <AlertTriangle className="w-5 h-5" /> No Guarantee of Accuracy
                    </p>
                    <p className="mt-2">
                      The AI detection capabilities of DeepGuard are based on machine learning models that may produce
                      false positives or false negatives. Do not rely solely on DeepGuard's analysis for legal,
                      professional, or safety-critical decisions.
                    </p>
                  </div>
                  <p>You acknowledge that:</p>
                  <ul className="space-y-2">
                    {[
                      'AI detection technology is evolving and may not detect all types of manipulated content',
                      'Results should be considered as one data point among many when evaluating content authenticity',
                      'We make no warranties regarding the accuracy, reliability, or completeness of analysis results',
                      'Heavy compression may reduce accuracy',
                      'Screenshots of AI images (with metadata stripped) may be harder to detect',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    6
                  </div>
                  User Responsibilities
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>You are responsible for:</p>
                  <ul className="space-y-2">
                    {[
                      'Ensuring you have the right to analyze any content you submit to the App',
                      'Using the App in compliance with all applicable laws and regulations',
                      'Maintaining the security of your Apple ID and device',
                      'Any actions taken based on the App\'s analysis results',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    7
                  </div>
                  Intellectual Property
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    DeepGuard, including its design, features, and content, is protected by copyright, trademark,
                    and other intellectual property laws. You may not use our trademarks, logos, or branding without
                    prior written permission.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    8
                  </div>
                  Privacy
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Your use of DeepGuard is also governed by our{' '}
                    <a href="/privacy" className="text-[#6C47FF] hover:underline">
                      Privacy Policy
                    </a>
                    , which describes how we handle your information.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    9
                  </div>
                  Disclaimer of Warranties
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white uppercase">
                    THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM
                    ALL WARRANTIES INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                    FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    10
                  </div>
                  Limitation of Liability
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, EVEN IF WE HAVE
                    BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    11
                  </div>
                  Indemnification
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    You agree to indemnify and hold harmless DeepGuard and its creators from any claims, damages,
                    losses, or expenses arising from your use of the App or violation of these Terms.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    12
                  </div>
                  Termination
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We may terminate or suspend your access to the App at any time, without prior notice, for any
                    reason, including breach of these Terms.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    13
                  </div>
                  Governing Law
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India, without
                    regard to its conflict of law provisions.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    14
                  </div>
                  Changes to Terms
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify you of significant changes
                    by updating the "Last updated" date. Your continued use of the App after changes constitutes
                    acceptance of the new Terms.
                  </p>
                </div>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    15
                  </div>
                  Contact Us
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>If you have questions about these Terms, please contact us at:</p>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="font-mono text-sm">📧 gruheshkurra2@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <p className="text-slate-300 text-center">
                  By using DeepGuard, you acknowledge that you have read, understood, and agree to be bound by
                  these Terms of Use.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <FileText className="w-16 h-16 text-[#6C47FF] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Download DeepGuard and start protecting yourself from deepfakes.
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
