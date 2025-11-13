export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden" id="download">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Detect Deepfakes
          <br />
          & AI Images
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-400 font-semibold mb-6">
          100% Private. On Your Device.
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Advanced AI-powered detection that runs completely on your iPhone.
          <br className="hidden md:block" />
          No data transmission. No tracking. Just truth.
        </p>

        {/* Download section */}
        <div className="flex flex-col items-center space-y-8">
          {/* App Store button */}
          <a
            href="#"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/20"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>Download on App Store</span>
          </a>

          {/* QR Code */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-3xl border border-white/10 shadow-2xl">
            <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center text-black text-sm font-medium">
              QR Code
              <br />
              Coming Soon
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Scan to download
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-white mb-2">&gt;95%</div>
            <div className="text-sm text-gray-500">Accuracy</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">&lt;200ms</div>
            <div className="text-sm text-gray-500">Analysis Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-gray-500">Private</div>
          </div>
        </div>
      </div>
    </section>
  );
}
