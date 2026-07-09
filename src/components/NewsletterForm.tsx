'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { NewsletterFormData } from '@/types';

const NewsletterForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter signup:', data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800 dark:from-primary-950 dark:to-primary-900 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-primary-200 mb-8">
            Subscribe to receive exclusive updates, quotes, and news about the book.
          </p>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-gold-500 rounded-lg text-white font-semibold"
            >
              ✓ Thank you for subscribing!
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email',
                },
              })}
              className="flex-1 px-4 py-3 rounded-lg text-primary-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {errors.email && <p className="text-red-400 mt-2 text-sm">{errors.email.message}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterForm;