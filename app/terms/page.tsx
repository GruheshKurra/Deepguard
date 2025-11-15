import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { FileText, Scale } from 'lucide-react';

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
                  Service
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Please read these terms carefully before using Deepguard.
              </p>
              <p className="text-sm text-slate-400 mt-4">
                Last updated: November 15, 2025
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
                    By downloading, installing, or using Deepguard, you agree to be bound by these Terms of Service.
                    If you do not agree to these terms, do not use the software.
                  </p>
                  <p>
                    These terms apply to all users of Deepguard, whether you're using it for personal,
                    educational, or commercial purposes.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  License Grant
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard is open source software licensed under the MIT License. This means you have the right to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Use the software for any purpose, including commercial use',
                      'Modify the source code to suit your needs',
                      'Distribute copies of the software',
                      'Distribute modified versions of the software',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    The full license text is available in the source code repository and must be included
                    in any redistribution.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  Acceptable Use
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    You may use Deepguard for lawful purposes only. You agree not to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Use the software to harass, threaten, or harm others',
                      'Attempt to circumvent or disable security features',
                      'Use the software in violation of applicable laws or regulations',
                      'Misrepresent the capabilities or accuracy of the software',
                      'Remove or alter any copyright, trademark, or proprietary notices',
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
                  Disclaimer of Warranties
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white">
                    DEEPGUARD IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
                  </p>
                  <p>
                    While we strive for high accuracy, no deepfake detection system is perfect. We make no warranties,
                    express or implied, including but not limited to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'The accuracy or reliability of detection results',
                      'The software being error-free or uninterrupted',
                      'The software meeting your specific requirements',
                      'The results being admissible as evidence in legal proceedings',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    You should use Deepguard as one tool in your verification process, not as the sole
                    determinant of authenticity.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    5
                  </div>
                  Limitation of Liability
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-semibold text-white">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE DEEPGUARD DEVELOPERS AND CONTRIBUTORS
                    SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THE SOFTWARE.
                  </p>
                  <p>
                    This includes, but is not limited to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Direct, indirect, incidental, or consequential damages',
                      'Loss of profits, data, or business opportunities',
                      'Damages from false positives or false negatives',
                      'Damages from reliance on detection results',
                      'Any other damages, even if advised of the possibility',
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
                  Indemnification
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    You agree to indemnify and hold harmless the Deepguard developers, contributors, and
                    affiliated parties from any claims, damages, or expenses (including legal fees) arising from:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Your use of the software',
                      'Your violation of these terms',
                      'Your violation of any rights of another party',
                      'Any modifications you make to the software',
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
                  Updates and Modifications
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We may release updates to Deepguard from time to time. Updates may:
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Add new features or improve existing ones',
                      'Fix bugs or security vulnerabilities',
                      'Improve detection accuracy',
                      'Change the user interface or functionality',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#6C47FF] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    While updates are optional, we strongly recommend keeping Deepguard up to date
                    for the best security and accuracy.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    8
                  </div>
                  Third-Party Content
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Deepguard may use third-party libraries and components, each subject to their own licenses.
                    These licenses are included in the software distribution and source code.
                  </p>
                  <p>
                    We are not responsible for third-party content you choose to scan with Deepguard.
                    You are solely responsible for ensuring you have the right to analyze any content
                    you process.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    9
                  </div>
                  Termination
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    You may stop using Deepguard at any time by uninstalling the software. These terms
                    remain in effect for your use up until termination.
                  </p>
                  <p>
                    Sections that by their nature should survive termination (including disclaimers,
                    limitations of liability, and indemnification) will continue to apply.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    10
                  </div>
                  Governing Law
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    These terms shall be governed by and construed in accordance with the laws of the
                    jurisdiction in which the Deepguard project is primarily developed, without regard
                    to conflict of law principles.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    11
                  </div>
                  Changes to Terms
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be posted on this page
                    with an updated revision date. Your continued use of Deepguard after changes constitutes
                    acceptance of the modified terms.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    12
                  </div>
                  Severability
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    If any provision of these terms is found to be unenforceable or invalid, that provision
                    will be limited or eliminated to the minimum extent necessary so that the remaining terms
                    remain in full force and effect.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                    13
                  </div>
                  Contact Information
                </h2>
                <div className="pl-11 space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="font-mono text-sm">legal@deepguard.org</p>
                  </div>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                <p className="text-slate-300 text-center">
                  By using Deepguard, you acknowledge that you have read, understood, and agree to be
                  bound by these Terms of Service.
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
                Download Deepguard and start protecting yourself from deepfakes.
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
