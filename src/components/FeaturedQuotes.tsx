'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_QUOTES } from '@/config/constants';

const FeaturedQuotes: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-4">
            Featured Quotes
          </h2>
          <p className="text-xl text-primary-600 dark:text-primary-300">
            Wisdom from the book
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {FEATURED_QUOTES.map((quote) => (
            <motion.div
              key={quote.id}
              variants={itemVariants}
              className="border-l-4 border-gold-500 pl-6 py-4"
            >
              <p className="text-xl sm:text-2xl font-serif italic text-primary-900 dark:text-white mb-3">
                "{quote.text}"
              </p>
              <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">
                — {quote.chapter}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedQuotes;