'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useDarkMode } from '@/hooks/useDarkMode';
import { NAVIGATION_LINKS } from '@/config/constants';

const Navigation: React.FC = () => {
  const { isDark, toggleDarkMode, isMounted } = useDarkMode();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-primary-900 border-b border-primary-100 dark:border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-serif font-bold text-primary-900 dark:text-white hidden sm:inline">
              Wild Thoughts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-700 dark:text-primary-300 hover:text-gold-500 dark:hover:text-gold-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            {isMounted && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-900 dark:text-primary-100 hover:bg-primary-200 dark:hover:bg-primary-700"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-primary-100 dark:bg-primary-800"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;