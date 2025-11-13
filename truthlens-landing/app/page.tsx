export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.8)] backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center h-12">
          <a href="#" className="text-xl font-semibold text-white">
            TruthLens
          </a>
          <ul className="hidden md:flex gap-8 text-sm">
            <li>
              <a href="#features" className="text-white hover:text-[#0a84ff] transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-white hover:text-[#0a84ff] transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="#download" className="text-white hover:text-[#0a84ff] transition-colors">
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mt-12 py-24 px-6 text-center bg-gradient-to-b from-[#1c1c1e] to-black">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-white to-[#0a84ff] bg-clip-text text-transparent">
            Detect Deepfakes
            <br />& AI Images
          </h1>
          <p className="text-2xl md:text-3xl font-normal text-[#98989d] mb-10">
            100% Private. On Your Device.
          </p>
          <p className="text-lg text-[#98989d] mb-12 max-w-[600px] mx-auto">
            Advanced AI-powered detection that runs completely on your iPhone. No data transmission. No tracking. Just truth.
          </p>

          <div className="flex flex-col items-center gap-6 mt-12" id="download">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full text-lg font-medium transition-all hover:bg-[#0a84ff] hover:text-white hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>

            <div className="p-6 bg-[#1c1c1e] rounded-3xl shadow-2xl inline-block">
              <div className="w-48 h-48 bg-[#2c2c2e] rounded-2xl flex items-center justify-center text-[#98989d] text-sm">
                QR Code Placeholder
              </div>
              <p className="mt-3 text-sm text-[#98989d] text-center">Scan to download</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-black" id="features">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Powerful Detection. Simple to Use.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                className="text-center p-8 bg-[#1c1c1e] rounded-3xl transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#0a84ff] to-[#5ac8fa] rounded-2xl flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#98989d] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1c1c1e] to-[#2c2c2e]" id="privacy">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-[#30d158] text-black rounded-full font-semibold mb-8">
            🔐 Privacy First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Data Stays Yours</h2>
          <p className="text-xl text-[#98989d] leading-relaxed">
            Unlike other detection tools that send your images to the cloud, TruthLens processes
            everything on your device. No servers. No data collection. No tracking. What happens on
            your iPhone, stays on your iPhone.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Detect AI from
                <br />
                All Major Platforms
              </h2>
              <ul className="space-y-4">
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
                  <li key={index} className="flex items-center gap-3 text-lg border-b border-[#1c1c1e] pb-4">
                    <span className="text-[#30d158] text-2xl font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1c1c1e] rounded-3xl p-12 text-center text-[#98989d] min-h-[400px] flex items-center justify-center">
              <p>
                App Screenshot Placeholder
                <br />
                (Analysis result with heatmap)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#1c1c1e] text-center">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#98989d] mb-4">&copy; 2025 TruthLens. All rights reserved.</p>
          <p className="text-[#98989d] mb-6">Free. No ads. No tracking. No subscriptions.</p>
          <div className="flex justify-center gap-8 text-sm">
            <a href="#" className="text-[#98989d] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#98989d] hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#98989d] hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="text-[#98989d] hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
