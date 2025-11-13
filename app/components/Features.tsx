const features = [
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
];

export default function Features() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-black" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Powerful Detection.
          <br />
          Simple to Use.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 -z-10" />

              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
