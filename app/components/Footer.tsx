export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-3xl font-bold mb-4">TruthLens</div>
          <p className="text-gray-500 mb-2">
            &copy; 2025 TruthLens. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mb-8">
            Free. No ads. No tracking. No subscriptions.
          </p>

          <div className="flex justify-center space-x-8 text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* iOS requirement note */}
          <p className="text-gray-700 text-xs mt-12">
            Requires iPhone 11 or later with iOS 16.0+
          </p>
        </div>
      </div>
    </footer>
  );
}
