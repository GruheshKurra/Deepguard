import {
  ClerkNavigation,
  ClerkHero,
  ClerkFeatures,
  ClerkStats,
  ClerkCTA,
  ClerkFooter,
  ScreenshotShowcase,
} from '@/components/landing';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main id="main">
        <ClerkHero />
        <ScreenshotShowcase />
        <ClerkFeatures />
        <ClerkStats />
        <ClerkCTA />
      </main>
      <ClerkFooter />
    </div>
  );
}
