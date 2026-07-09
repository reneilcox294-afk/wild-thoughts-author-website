'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AUTHOR_BIO } from '@/config/constants';
import { siteConfig } from '@/config/site';

const AuthorPage: React.FC = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">About the Author</h1>
            <p className="text-xl text-primary-200">Get to know Akeem Cox</p>
          </motion.div>
        </div>
      </section>

      {/* Author Profile */}
      <section className="py-16 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Author Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-1 flex justify-center"
            >
              <div className="w-full max-w-xs">
                <img
                  src={AUTHOR_BIO.image}
                  alt={AUTHOR_BIO.name}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Author Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 md:col-span-2"
            >
              <h2 className="font-serif text-4xl font-bold text-primary-900 dark:text-white mb-2">
                {AUTHOR_BIO.name}
              </h2>
              <p className="text-xl text-gold-600 dark:text-gold-400 font-semibold mb-6">
                {AUTHOR_BIO.title}
              </p>

              <p className="text-lg text-primary-700 dark:text-primary-300 mb-6 leading-relaxed">
                {AUTHOR_BIO.bio}
              </p>

              <p className="text-lg text-primary-700 dark:text-primary-300 mb-8 leading-relaxed">
                {AUTHOR_BIO.background}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={AUTHOR_BIO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Twitter
                </a>
                <a
                  href={AUTHOR_BIO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Instagram
                </a>
                <a
                  href={AUTHOR_BIO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 dark:text-white mb-4">
              The Author's Journey
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  Jamaican Roots
                </h3>
                <p className="text-primary-700 dark:text-primary-300">
                  Born and raised in Jamaica, Akeem Cox developed a deep appreciation for philosophical inquiry and cultural wisdom.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  Personal Growth Journey
                </h3>
                <p className="text-primary-700 dark:text-primary-300">
                  Years of self-reflection and personal development shaped Akeem's unique perspective on life, discipline, and resilience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  Writing Mission
                </h3>
                <p className="text-primary-700 dark:text-primary-300">
                  Driven by a passion to inspire others, Akeem began writing to share his insights and help readers discover their true potential.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorPage;