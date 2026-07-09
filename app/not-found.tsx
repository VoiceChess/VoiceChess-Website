"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-yellowBg via-white to-sky-bg/40 flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-brand-yellowLight/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-sky-light/30 blur-3xl" />

      <span
        aria-hidden="true"
        className="absolute top-24 right-1/4 text-5xl animate-float"
      >
        ♟️
      </span>
      <span
        aria-hidden="true"
        className="absolute bottom-32 left-1/4 text-5xl animate-float"
        style={{ animationDelay: "1s" }}
      >
        ♞
      </span>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-8xl md:text-9xl font-extrabold text-brand-yellowDark mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 mb-6">
            Page not found
          </h2>
          <p className="text-lg md:text-xl text-ink-700 mb-12 max-w-2xl mx-auto">
            Oops! The page you are looking for doesn&apos;t exist. It might have
            been moved or deleted, or perhaps you mistyped the URL.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-block rounded-2xl bg-brand-yellow px-8 py-4 text-base font-extrabold text-ink-900 shadow-chunky transition-all duration-150 hover:bg-brand-yellowDark hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            Back to Home
          </Link>
          <Link
            href="/#download"
            className="inline-block rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-ink-900 shadow-card border-2 border-line transition-all duration-150 hover:border-sky hover:-translate-y-0.5"
          >
            Download App
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
