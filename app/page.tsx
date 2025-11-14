import {
  ClerkNavigation,
  ClerkHero,
  ClerkFeatures,
  ClerkStats,
  ClerkCTA,
  ClerkFooter,
} from '@/components/landing';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ClerkNavigation />
      <main id="main">
        <ClerkHero />
        <ClerkFeatures />
        <ClerkStats />
        <ClerkCTA />
      </main>
      <ClerkFooter />
    </div>
  );
}
