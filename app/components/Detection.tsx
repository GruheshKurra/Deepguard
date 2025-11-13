const detectionCapabilities = [
  "Stable Diffusion (all versions)",
  "DALL-E 3",
  "Midjourney v4-v6",
  "Sora",
  "StyleGAN variants",
  "Face swaps & deepfakes",
  "Facial retouching & filters",
  "And more with regular updates",
];

export default function Detection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Detect AI from
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                All Major Platforms
              </span>
            </h2>

            <ul className="space-y-4">
              {detectionCapabilities.map((capability, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 text-lg group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg
                      className="w-4 h-4 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 flex items-center justify-center p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">📱</div>
                <div className="text-gray-500 text-lg mb-4">
                  App Screenshot
                </div>
                <div className="text-gray-600 text-sm">
                  Analysis result with heatmap
                  <br />
                  Coming soon
                </div>
              </div>
            </div>

            {/* Decorative blur elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
