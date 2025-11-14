import {
  Navigation,
  HeroSection,
  FeaturesGrid,
  StatsSection,
  PrivacySection,
  DetailSection,
  FAQSection,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navigation />
      <main id="main">
        <HeroSection />
        <FeaturesGrid />
        <StatsSection />
        <PrivacySection />
        <DetailSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
