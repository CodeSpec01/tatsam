"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/codespec/image/upload/v1743769418/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            तत्सम
            <span className="block text-2xl sm:text-3xl mt-2">
              The Hindi Society of NSUT
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Preserving and promoting Hindi literature and culture through
            events, workshops, and creative expressions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/events">Explore Events</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}