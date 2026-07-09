"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Accessibility", href: "#accessibility" },
    { name: "Download", href: "#download" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Community", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-brand-yellowBg overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-brand-yellow via-sky to-brand-yellow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/logos/Logo-NoBackground.png"
                alt="VoiceChess Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
              <span className="text-xl font-extrabold">
                <span className="text-ink-900">Voice</span>
                <span className="text-brand-yellowDark">Chess</span>
              </span>
            </div>
            <p className="text-ink-700 leading-relaxed mb-6 max-w-sm">
              Making strategy audible. The first accessible chess app designed
              specifically for blind and visually impaired players.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/voicechess.app?igsh=bDlycnZtZWVtMWtr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-ink-700 shadow-card transition-all duration-200 hover:text-brand-yellowDark hover:-translate-y-1"
              >
                <Instagram className="h-5 w-5" />
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
              <h3 className="text-ink-900 font-extrabold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-ink-700 hover:text-brand-yellowDark transition-colors duration-200 text-sm font-semibold"
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
          className="pt-8 border-t border-line"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ink-600 text-sm font-medium">
              © 2025 VoiceChess. All rights reserved.
            </p>
            <span className="text-ink-600 text-sm font-medium">
              Built for accessibility ♿
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
