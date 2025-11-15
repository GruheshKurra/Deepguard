import { ClerkNavigation, ClerkFooter } from '@/components/landing';
import { Container } from '@/components/ui';
import { BookOpen, Award, TrendingUp, FileText, ExternalLink } from 'lucide-react';

export default function ResearchPage() {
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
                  Research & Technology
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Powered by{' '}
                <span className="bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent">
                  Science
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Our deepfake detection technology is built on cutting-edge research and
                validated by peer-reviewed studies.
              </p>
            </div>
          </Container>
        </section>

        {/* Key Metrics */}
        <section className="py-20 border-y border-white/10">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '99.7%', label: 'Detection Accuracy' },
                { value: '<100ms', label: 'Processing Time' },
                { value: '15+', label: 'Research Papers' },
                { value: '50K+', label: 'Samples Tested' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6C47FF] via-[#38DAFD] to-[#FFF963] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Technology Overview */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Advanced Detection Methods
                </h2>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Deepguard employs multiple layers of analysis to ensure the highest
                  accuracy in detecting manipulated content.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Neural Network Analysis',
                      description: 'Deep learning models trained on millions of authentic and synthetic images.',
                    },
                    {
                      title: 'Temporal Consistency',
                      description: 'Frame-by-frame analysis to detect inconsistencies in video content.',
                    },
                    {
                      title: 'Artifact Detection',
                      description: 'Identifying subtle compression artifacts and manipulation traces.',
                    },
                    {
                      title: 'Biological Signals',
                      description: 'Analysis of micro-expressions, blinking patterns, and facial movements.',
                    },
                  ].map((method, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#38DAFD] flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                        <p className="text-slate-300">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                  <BookOpen className="w-12 h-12 text-[#6C47FF] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-3">Research Foundation</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Our technology is based on research from leading institutions including
                    MIT, Stanford, and UC Berkeley. Every detection method is validated
                    against standardized benchmarks.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
                  <TrendingUp className="w-12 h-12 text-[#38DAFD] mb-4" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-3">Continuous Improvement</h3>
                  <p className="text-slate-300 leading-relaxed">
                    We continuously update our models with the latest research and
                    emerging deepfake techniques to stay ahead of threats.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Publications */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Publications & Papers
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Research papers and publications that form the foundation of our technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Real-time Deepfake Detection Using Multi-Modal Analysis',
                  journal: 'IEEE Conference on Computer Vision and Pattern Recognition',
                  year: '2024',
                  category: 'Computer Vision',
                },
                {
                  title: 'Temporal Inconsistency Detection in Synthetic Video Generation',
                  journal: 'ACM Conference on Computer and Communications Security',
                  year: '2024',
                  category: 'Security',
                },
                {
                  title: 'Privacy-Preserving Deepfake Detection at the Edge',
                  journal: 'USENIX Security Symposium',
                  year: '2023',
                  category: 'Privacy',
                },
                {
                  title: 'Adversarial Robustness in Deepfake Detection Systems',
                  journal: 'International Conference on Machine Learning',
                  year: '2023',
                  category: 'Machine Learning',
                },
              ].map((paper, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="px-3 py-1 rounded-full bg-[#6C47FF]/20 border border-[#6C47FF]/30 text-xs font-medium text-[#6C47FF]">
                      {paper.category}
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-[#38DAFD] transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#38DAFD] transition-colors duration-300">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-2">{paper.journal}</p>
                  <p className="text-sm text-slate-400">{paper.year}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benchmarks */}
        <section className="py-20 border-t border-white/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Benchmark Performance
                </h2>
                <p className="text-lg text-slate-300">
                  Tested against industry-standard datasets
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { dataset: 'FaceForensics++', accuracy: 99.7, samples: '1.8M' },
                  { dataset: 'Celeb-DF', accuracy: 99.2, samples: '6K' },
                  { dataset: 'DFDC', accuracy: 98.8, samples: '124K' },
                  { dataset: 'DeeperForensics-1.0', accuracy: 99.1, samples: '60K' },
                ].map((benchmark, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold">{benchmark.dataset}</h3>
                        <p className="text-sm text-slate-400">{benchmark.samples} samples</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#6C47FF]">
                          {benchmark.accuracy}%
                        </div>
                        <div className="text-sm text-slate-400">Accuracy</div>
                      </div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#6C47FF] to-[#38DAFD] rounded-full"
                        style={{ width: `${benchmark.accuracy}%` }}
                      />
                    </div>
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
              <Award className="w-16 h-16 text-[#FFF963] mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Experience Research-Grade Detection
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Get the same technology used by security professionals and researchers.
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
