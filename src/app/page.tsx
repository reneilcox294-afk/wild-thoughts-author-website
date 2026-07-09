'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedQuotes from '@/components/FeaturedQuotes';
import Testimonials from '@/components/Testimonials';
import NewsletterForm from '@/components/NewsletterForm';
import CTAButton from '@/components/CTAButton';
import { bookConfig } from '@/config/site';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Wild Thoughts of a Young Man's Tale"
        subtitle="A philosophical journey through life, discipline, purpose, wisdom, self-reflection, resilience, and personal growth."
        cta={{
          text: 'Explore the Book',
          href: '#about',
        }}
      />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-primary-900 dark:text-white mb-6">
                A Book for Modern Thinkers
              </h2>
              <p className="text-lg text-primary-700 dark:text-primary-300 mb-6 leading-relaxed">
                {bookConfig.description}
              </p>
              <p className="text-lg text-primary-700 dark:text-primary-300 mb-8 leading-relaxed">
                This comprehensive exploration of life's deepest questions provides readers with actionable insights and philosophical frameworks for navigating the complexities of modern existence.
              </p>
              <div className="flex gap-4">
                <CTAButton text="Learn More" href="/book" size="lg" />
                <CTAButton text="Meet the Author" href="/author" variant="outline" size="lg" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">📖</div>
                  <h3 className="text-2xl font-serif font-bold">Coming Soon</h3>
                  <p className="text-gold-100 mt-2">Book Cover Preview</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Quotes */}
      <FeaturedQuotes />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 dark:bg-primary-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Mind?</h2>
            <p className="text-xl text-primary-200 mb-8">
              Join thousands of readers who are discovering the power of philosophical thinking and personal growth.
            </p>
            <button className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get the Book (Coming Soon)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </>
  );
};

export default HomePage;