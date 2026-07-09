"use client";

import React from "react";
import { motion } from "framer-motion";
import { GooglePlayIcon, AppleIcon } from "./Icons";

export default function DownloadSection() {
  return (
    <section
      id="download"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-yellow to-brand-yellowDark"
    >
      <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-sky-light/30 blur-3xl" />
      <span aria-hidden="true" className="absolute top-16 right-[12%] hidden text-5xl opacity-30 animate-float lg:block">♞</span>
      <span aria-hidden="true" className="absolute bottom-16 left-[10%] hidden text-5xl opacity-30 animate-float lg:block" style={{ animationDelay: "1s" }}>♛</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink-900 mb-6 leading-tight">
              Available soon on
              <br />
              <span className="text-white">App Store &amp; Google Play</span>
            </h2>
            <p className="text-lg md:text-xl text-ink-900/80 max-w-2xl mx-auto font-medium">
              Join thousands of players experiencing chess in a whole new way.
              Download and start playing with your voice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <button className="group flex items-center gap-4 rounded-2xl bg-ink-900 px-8 py-5 text-white shadow-pop transition-all duration-150 hover:-translate-y-1 active:translate-y-0.5 min-w-[280px]">
              <AppleIcon className="h-8 w-8 text-white" />
              <div className="text-left">
                <div className="text-xs text-white/70">Download on the</div>
                <div className="text-xl font-extrabold">App Store</div>
              </div>
            </button>

            <button className="group flex items-center gap-4 rounded-2xl bg-white px-8 py-5 text-ink-900 shadow-pop transition-all duration-150 hover:-translate-y-1 active:translate-y-0.5 min-w-[280px]">
              <GooglePlayIcon className="h-8 w-8" />
              <div className="text-left">
                <div className="text-xs text-ink-600">Get it on</div>
                <div className="text-xl font-extrabold">Google Play</div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
