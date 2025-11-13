interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <a
            href="#"
            className="text-xl font-semibold tracking-tight hover:text-gray-300 transition-colors"
          >
            TruthLens
          </a>
          <ul className="hidden md:flex items-center space-x-8 text-sm">
            <li>
              <a
                href="#features"
                className="hover:text-gray-300 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-gray-300 transition-colors"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="hover:text-gray-300 transition-colors"
              >
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
