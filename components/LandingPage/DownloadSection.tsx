"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GooglePlayIcon, AppleIcon } from './Icons';

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 bg-gradient-to-br from-secondary/95 to-secondary overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Available Soon on
              <br />
              <span className="text-accent">App Store & Google Play</span>
            </h2>

            <p className="text-lg md:text-xl text-primary/70 max-w-2xl mx-auto">
              Join thousands of players experiencing chess in a whole new way. Download and start playing with your voice.
            </p>
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group bg-primary text-accent px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl flex items-center space-x-4 min-w-[280px]">
              <AppleIcon className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs text-accent/70">Download on the</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </button>

            <button className="group bg-primary text-accent px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl flex items-center space-x-4 min-w-[280px]">
              <GooglePlayIcon className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs text-accent/70">Get it on</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
