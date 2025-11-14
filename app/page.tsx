export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Navigation - Signature UI Glass Panel */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-semibold text-text-primary smooth-scale">
            TruthLens
          </a>
          <ul className="hidden md:flex gap-10 text-sm font-medium">
            <li>
              <a href="#features" className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale">
                Features
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale">
                Privacy
              </a>
            </li>
            <li>
              <a href="#download" className="text-text-primary hover:text-accent-blue transition-all duration-300 smooth-scale">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Signature UI with 3D Depth */}
      <section className="mt-16 py-32 px-8 text-center depth-layer bg-gradient-to-b from-surface to-background relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent fade-scale-enter">
            Detect Deepfakes
            <br />& AI Images
          </h1>
          <p className="text-3xl md:text-4xl font-light text-text-secondary mb-12">
            100% Private. On Your Device.
          </p>
          <p className="text-lg text-text-secondary mb-16 max-w-[700px] mx-auto leading-relaxed font-light">
            Advanced AI-powered detection that runs completely on your iPhone. No data transmission. No tracking. Just truth.
          </p>

          <div className="flex flex-col items-center gap-8 mt-16" id="download">
            <a
              href="#"
              className="btn-primary inline-flex items-center gap-3 text-lg font-medium smooth-scale"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>

            <div className="glass-card-elevated p-8 rounded-xl inline-block smooth-hover">
              <div className="w-52 h-52 bg-surface-secondary rounded-lg flex items-center justify-center text-text-secondary text-sm">
                QR Code Placeholder
              </div>
              <p className="mt-4 text-sm text-text-secondary text-center font-medium">Scan to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Signature UI Glassmorphism Cards */}
      <section className="py-32 px-8 bg-background" id="features">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            Powerful Detection. Simple to Use.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Dual Detection",
                description:
                  "Two specialized AI models detect both deepfake manipulations and AI-generated images with >95% accuracy.",
              },
              {
                icon: "🔒",
                title: "100% Private",
                description:
                  "All processing happens on your device. Zero data transmission. No tracking. Your images never leave your phone.",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                description:
                  "Analyze images in under 200ms. Batch process up to 500 images at once. All offline.",
              },
              {
                icon: "🎯",
                title: "Research-Backed",
                description:
                  "Built on cutting-edge research with published results. Regular model updates for new AI generators.",
              },
              {
                icon: "📊",
                title: "Detailed Analysis",
                description:
                  "View confidence scores, heatmaps, and forensic details. Understand exactly what was detected.",
              },
              {
                icon: "🎨",
                title: "Easy to Use",
                description:
                  "Capture, upload, or paste. Get instant results. No technical knowledge required.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-10 glass-card rounded-lg smooth-hover"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-blue to-[#5ac8fa] rounded-lg flex items-center justify-center text-3xl smooth-scale">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section - Signature UI with Depth */}
      <section className="py-32 px-8 depth-layer bg-gradient-to-b from-surface to-surface-secondary" id="privacy">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="inline-block px-8 py-4 bg-success text-black rounded-full font-semibold mb-10 smooth-scale">
            🔐 Privacy First
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">Your Data Stays Yours</h2>
          <p className="text-xl text-text-secondary leading-relaxed font-light">
            Unlike other detection tools that send your images to the cloud, TruthLens processes
            everything on your device. No servers. No data collection. No tracking. What happens on
            your iPhone, stays on your iPhone.
          </p>
        </div>
      </section>

      {/* Details Section - Signature UI Layout */}
      <section className="py-32 px-8 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
                Detect AI from
                <br />
                All Major Platforms
              </h2>
              <ul className="space-y-5">
                {[
                  "Stable Diffusion (all versions)",
                  "DALL-E 3",
                  "Midjourney v4-v6",
                  "Sora",
                  "StyleGAN variants",
                  "Face swaps & deepfakes",
                  "Facial retouching & filters",
                  "And more with regular updates",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg border-b border-surface pb-5 smooth-hover">
                    <span className="text-success text-2xl font-bold">✓</span>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card-elevated rounded-xl p-16 text-center text-text-secondary min-h-[500px] flex items-center justify-center">
              <p className="font-light">
                App Screenshot Placeholder
                <br />
                (Analysis result with heatmap)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Signature UI Minimal */}
      <footer className="py-16 px-8 glass-card text-center border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-text-secondary mb-5 font-light">&copy; 2025 TruthLens. All rights reserved.</p>
          <p className="text-text-secondary mb-8 font-light">Free. No ads. No tracking. No subscriptions.</p>
          <div className="flex justify-center gap-10 text-sm font-medium">
            <a href="#" className="text-text-secondary hover:text-accent-blue transition-all duration-300 smooth-scale">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-blue transition-all duration-300 smooth-scale">
              Terms of Service
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-blue transition-all duration-300 smooth-scale">
              Contact
            </a>
            <a href="#" className="text-text-secondary hover:text-accent-blue transition-all duration-300 smooth-scale">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
