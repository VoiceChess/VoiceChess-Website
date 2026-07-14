"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAndroid, FaGithub } from "react-icons/fa";

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
          Download the newest VoiceChess Android build. The link automatically
          resolves the latest APK published on GitHub Releases.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/download"
            className="flex min-w-[260px] items-center gap-4 rounded-2xl bg-white border-b-4 border-line px-8 py-4 text-ink-900 transition-all duration-100 hover:bg-brand-yellowBg active:border-b-0 active:translate-y-1"
          >
            <FaAndroid className="h-9 w-9" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink-600">
                Download latest
              </span>
              <span className="block text-xl font-black">Android APK</span>
            </span>
          </a>

          <a
            href="https://github.com/VoiceChess/VoiceChess-Mobile/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[260px] items-center gap-4 rounded-2xl bg-white border-b-4 border-line px-8 py-4 text-ink-900 transition-all duration-100 hover:bg-brand-yellowBg active:border-b-0 active:translate-y-1"
          >
            <FaGithub className="h-8 w-8" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs font-bold uppercase tracking-wide text-ink-600">
                View latest
              </span>
              <span className="block text-xl font-black">GitHub Release</span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
