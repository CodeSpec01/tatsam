"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Activity } from 'lucide-react';

export default function Members() {

  const benefits = [
    { icon: Users, title: 'Community Access', description: 'Join our vibrant community of Hindi enthusiasts' },
    { icon: Award, title: 'Special Events', description: 'Exclusive access to workshops and events' },
    { icon: Activity, title: 'Active Participation', description: 'Opportunities to organize and lead activities' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-red-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          Members Corner
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <benefit.icon className="w-12 h-12 text-red-600 mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-black">{benefit.title}</h2>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-blue-600 text-white py-3 px-8 rounded-full font-semibold text-lg hover:from-red-700 hover:to-blue-700 transition-all"
          >
           Join Our Community
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}