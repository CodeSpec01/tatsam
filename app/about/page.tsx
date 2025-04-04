"use client"

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, History } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-red-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          {...fadeIn}
        >
          About Us
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Target className="w-12 h-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600">To promote and preserve Hindi language and culture at NSUT</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Eye className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-600">Creating a vibrant community of Hindi enthusiasts and cultural ambassadors</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <History className="w-12 h-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
            "Our History"
            </h2>
            <p className="text-gray-600">Founded in 2020, Tatsam Society has been at the forefront of Hindi literary and cultural activities</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
