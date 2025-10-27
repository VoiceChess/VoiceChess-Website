"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Download', href: '#download' },
    { name: 'Pricing', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press Kit', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-primary overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-4">
              <Image
                src="/assets/images/Logo-NoBackground.jpg"
                alt="VoiceMate Chess Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-text-secondary leading-relaxed mb-6">
              Making strategy audible. The first accessible chess app designed specifically for blind and visually impaired players.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/voicechess.app?igsh=bDlycnZtZWVtMWtr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-surface-light rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:bg-surface transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
              viewport={{ once: true }}
            >
              <h3 className="text-text-primary font-semibold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-surface"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2025 VoiceMate Chess. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <span className="text-text-secondary text-sm">Built for accessibility</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    </footer>
  );
}
