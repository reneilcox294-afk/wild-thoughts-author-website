'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BOOK_CHAPTERS, bookConfig } from '@/config/constants';
import CTAButton from '@/components/CTAButton';

const BookPage: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">{bookConfig.title}</h1>
            <p className="text-xl text-primary-200">by {bookConfig.author}</p>
          </motion.div>
        </div>
      </section>

      {/* Book Details */}
      <section className="py-16 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Book Cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg p-8 h-96 flex items-center justify-center shadow-2xl"
            >
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">📖</div>
                <h3 className="text-2xl font-serif font-bold">Coming Soon</h3>
                <p className="text-gold-100 mt-2">Book Cover</p>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-bold text-primary-900 dark:text-white mb-6">
                About the Book
              </h2>
              <p className="text-lg text-primary-700 dark:text-primary-300 mb-8 leading-relaxed">
                {bookConfig.description}
              </p>

              {/* Book Info Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">Genre</p>
                  <p className="text-primary-900 dark:text-white">{bookConfig.genre}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">Language</p>
                  <p className="text-primary-900 dark:text-white">{bookConfig.language}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">Publication Year</p>
                  <p className="text-primary-900 dark:text-white">{bookConfig.publishYear}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">Format</p>
                  <p className="text-primary-900 dark:text-white">{bookConfig.format.join(', ')}</p>
                </div>
              </div>

              <button className="w-full px-6 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Get the Book (Coming Soon)
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 bg-primary-50 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
              What's Inside
            </h2>
            <p className="text-xl text-primary-600 dark:text-primary-300">
              A comprehensive exploration of life's greatest themes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BOOK_CHAPTERS.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="ml-4 font-semibold text-primary-900 dark:text-white text-lg">
                    {chapter.title}
                  </h3>
                </div>
                <p className="text-primary-700 dark:text-primary-300">{chapter.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookPage;