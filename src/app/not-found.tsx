'use client';

import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-primary-900 pt-20">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl font-bold text-primary-900 dark:text-white mb-4">404</h1>
        <h2 className="font-serif text-3xl font-bold text-primary-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-primary-600 dark:text-primary-300 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;