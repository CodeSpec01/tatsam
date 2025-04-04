import Hero from '@/components/hero';
import Newsletter from '@/components/newsletter';
import RecentEvents from '@/components/recent-events';
import AboutPreview from '@/components/about-preview';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutPreview />
      <RecentEvents />
      <Newsletter />
    </main>
  );
}