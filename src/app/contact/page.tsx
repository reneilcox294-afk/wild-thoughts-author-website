'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

const ContactPage: React.FC = () => {
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
            <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-primary-200">We'd love to hear from you. Send us a message!</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Email</h3>
                <p className="text-primary-700 dark:text-primary-300">
                  <a href="mailto:contact@akeemcox.com" className="hover:text-gold-500 transition-colors">
                    contact@akeemcox.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Social Media</h3>
                <div className="space-y-2">
                  <p className="text-primary-700 dark:text-primary-300">
                    <a href="https://twitter.com/akeemcox" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                      Twitter @akeemcox
                    </a>
                  </p>
                  <p className="text-primary-700 dark:text-primary-300">
                    <a href="https://instagram.com/akeemcox" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                      Instagram @akeemcox
                    </a>
                  </p>
                  <p className="text-primary-700 dark:text-primary-300">
                    <a href="https://facebook.com/akeemcox" target="_blank" rel="noopener noreferrer" className="hover:text-gold-500 transition-colors">
                      Facebook /akeemcox
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-2">Response Time</h3>
                <p className="text-primary-700 dark:text-primary-300">
                  We typically respond to inquiries within 24-48 hours.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'When will the book be available for purchase?',
                answer: 'The book is coming soon! Sign up for our newsletter to be notified as soon as it becomes available.',
              },
              {
                question: 'What formats will the book be available in?',
                answer: 'The book will be available in Paperback, eBook, and Audiobook formats.',
              },
              {
                question: 'Can I request a signed copy?',
                answer: 'Yes! Once the book is available, you can request a signed copy through our contact form.',
              },
              {
                question: 'Will there be a book tour or events?',
                answer: 'We are planning several book launch events and author appearances. Follow our social media for announcements!',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-primary-700 dark:text-primary-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;