"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-[#1a2332] to-[#0a0f1a] flex items-center justify-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating accent dots */}
      <div
        className="absolute top-20 right-1/4 w-3 h-3 bg-accent rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-accent/40 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3.5s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* 404 Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted, or perhaps you mistyped the URL.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-block px-8 py-3.5 bg-accent text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/#download"
            className="inline-block px-8 py-3.5 bg-surface text-white rounded-full font-semibold text-base transition-all duration-300 hover:bg-surface-light hover:shadow-xl hover:scale-105"
          >
            Download App
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
