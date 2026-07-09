'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
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
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">About This Website</h1>
            <p className="text-xl text-primary-200">Learn more about our mission and vision</p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-primary-700 dark:text-primary-300 mb-6 leading-relaxed">
              "Wild Thoughts of a Young Man's Tale" is more than just a book—it's a movement dedicated to fostering deep thinking, personal growth, and meaningful transformation. Our mission is to inspire young people to embrace discipline, discover their purpose, and build resilience in the face of life's challenges.
            </p>
            <p className="text-lg text-primary-700 dark:text-primary-300 leading-relaxed">
              Through philosophical inquiry and practical wisdom, we aim to create a community of thoughtful individuals committed to becoming the best versions of themselves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-primary-50 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 dark:text-white mb-4">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Discipline',
                description: 'The foundation of all meaningful change and personal growth.',
                icon: '💪',
              },
              {
                title: 'Purpose',
                description: 'Finding and pursuing your true calling with intention and clarity.',
                icon: '🎯',
              },
              {
                title: 'Wisdom',
                description: 'Learning from experience and applying knowledge to create better futures.',
                icon: '🧠',
              },
              {
                title: 'Resilience',
                description: 'Rising stronger from challenges and setbacks.',
                icon: '🌱',
              },
              {
                title: 'Growth',
                description: 'Continuous improvement and evolution as individuals.',
                icon: '📈',
              },
              {
                title: 'Authenticity',
                description: 'Being true to yourself and encouraging others to do the same.',
                icon: '✨',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-primary-700 dark:text-primary-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;