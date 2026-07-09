'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-primary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Wild Thoughts</h3>
            <p className="text-primary-300 text-sm">
              A philosophical journey through life, discipline, and personal growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-300 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-primary-300 hover:text-gold-400 transition-colors">
                  About Book
                </Link>
              </li>
              <li>
                <Link href="/author" className="text-primary-300 hover:text-gold-400 transition-colors">
                  About Author
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-300 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Newsletter</h4>
            <p className="text-primary-300 text-sm mb-4">
              Subscribe to receive exclusive updates and insights.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Follow</h4>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-gold-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-gold-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-gold-400 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-400 text-sm">
              &copy; {currentYear} Akeem Cox. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-400 mt-4 md:mt-0">
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;