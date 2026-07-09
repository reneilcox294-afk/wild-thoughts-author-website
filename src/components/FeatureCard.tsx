'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-primary-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-primary-700 dark:text-primary-300">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;