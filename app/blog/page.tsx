"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

export default function Blog() {

  const posts = [
    {
      id: 1,
      title: 'हिंदी साहित्य का महत्व',
      excerpt: 'आधुनिक युग में हिंदी साहित्य की भूमिका और महत्व पर एक विस्तृत चर्चा',
      author: 'राहुल शर्मा',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
      id: 2,
      title: 'डिजिटल युग में हिंदी',
      excerpt: 'तकनीकी विकास के साथ हिंदी भाषा का बदलता स्वरूप',
      author: 'प्रिया वर्मा',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
        >
          {'Blog'}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-gradient-to-r from-red-600 to-blue-600 py-2 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-blue-700 transition-all"
                >
                  "Read More"
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}