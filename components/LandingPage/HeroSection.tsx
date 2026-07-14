"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-[70px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative flex items-end justify-center gap-2 sm:gap-4 w-full max-w-[640px]">
              <div className="relative hidden sm:block w-44 h-[380px] lg:w-52 lg:h-[440px]">
                <Image
                  src="/mockups/mockup1.png"
                  alt="VoiceChess welcome screen"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-56 h-[460px] lg:w-64 lg:h-[540px]">
                <Image
                  src="/mockups/mockup2.png"
                  alt="VoiceChess learning path screen"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative hidden sm:block w-44 h-[380px] lg:w-52 lg:h-[440px]">
                <Image
                  src="/mockups/mockup3.png"
                  alt="VoiceChess game screen"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.98] tracking-[-0.04em] text-ink-800 max-w-xl mx-auto lg:mx-0">
              The accessible way to play chess with your voice.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-600 font-extrabold leading-8 max-w-lg mx-auto lg:mx-0">
              Scan boards, hear positions, speak moves, and practice with AI in
              one simple chess app.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:justify-center lg:justify-start">
              <a href="/download" className="btn-duo-yellow min-w-[220px] py-4 text-base">
                Download Latest APK
              </a>
              <a href="#features" className="btn-duo-white min-w-[220px] py-4 text-base">
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
