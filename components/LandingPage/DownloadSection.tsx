"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden bg-brand-yellow py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white leading-[1.02] tracking-[-0.04em]"
        >
          learn chess anywhere.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-2xl text-lg md:text-xl font-extrabold text-white"
        >
          VoiceChess is coming soon to mobile. Get ready to scan, speak, and
          play from wherever you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="flex min-w-[260px] items-center gap-4 rounded-2xl bg-white border-b-4 border-line px-8 py-4 text-ink-900 transition-all duration-100 hover:bg-brand-yellowBg active:border-b-0 active:translate-y-1">
            <FaApple className="h-9 w-9" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink-600">
                Download on the
              </span>
              <span className="block text-xl font-black">App Store</span>
            </span>
          </button>

          <button className="flex min-w-[260px] items-center gap-4 rounded-2xl bg-white border-b-4 border-line px-8 py-4 text-ink-900 transition-all duration-100 hover:bg-brand-yellowBg active:border-b-0 active:translate-y-1">
            <FaGooglePlay className="h-8 w-8" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink-600">
                Get it on
              </span>
              <span className="block text-xl font-black">Google Play</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
