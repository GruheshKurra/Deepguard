export default function Privacy() {
  return (
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden" id="privacy">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
          <span className="text-2xl">🔐</span>
          <span className="text-sm font-semibold text-green-400">
            Privacy First
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Your Data Stays Yours
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
          Unlike other detection tools that send your images to the cloud,
          TruthLens processes everything on your device.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "No Servers", icon: "🚫" },
            { label: "No Data Collection", icon: "📵" },
            { label: "No Tracking", icon: "🔕" },
            { label: "100% On-Device", icon: "📱" },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-white/5"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-sm font-medium text-gray-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-500 mt-12 max-w-2xl mx-auto">
          What happens on your iPhone, stays on your iPhone.
        </p>
      </div>
    </section>
  );
}
