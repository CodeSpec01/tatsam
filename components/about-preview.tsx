import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Tatsam Society</h2>
          <p className="text-muted-foreground mb-6">
            Tatsam, the Hindi Society of NSUT, is dedicated to promoting Hindi
            literature and culture among students. Through various events,
            workshops, and creative platforms, we aim to preserve and celebrate our
            rich cultural heritage.
          </p>
          <p className="text-muted-foreground mb-8">
            Our society provides a platform for students to explore their creative
            potential through poetry, prose, debates, and various other forms of
            literary expression.
          </p>
          <Button asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070"
            alt="Students participating in a cultural event"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}