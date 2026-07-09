"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, Sparkles } from "lucide-react";

const floaties = [
  { emoji: "♟️", className: "top-24 left-[8%]", delay: "0s" },
  { emoji: "♞", className: "top-40 right-[10%]", delay: "0.6s" },
  { emoji: "🎧", className: "bottom-40 left-[12%]", delay: "1.2s" },
  { emoji: "♛", className: "bottom-24 right-[16%]", delay: "0.9s" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-yellowBg via-white to-sky-bg/40 pt-20"
    >
      {/* Soft color blobs */}
      <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-brand-yellowLight/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-[28rem] w-[28rem] rounded-full bg-sky-light/30 blur-3xl" />

      {/* Floating fun icons */}
      {floaties.map((f, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden text-4xl md:text-5xl opacity-80 animate-float lg:block ${f.className}`}
          style={{ animationDelay: f.delay }}
        >
          {f.emoji}
        </span>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card border border-brand-yellowLight"
            >
              <Sparkles className="h-4 w-4 text-brand-yellowDark" />
              <span className="text-sm font-bold text-ink-800">
                Chess you can hear & play by voice
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-ink-900"
            >
              Play chess with your{" "}
              <span className="text-brand-yellowDark">voice</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-ink-700 leading-relaxed max-w-lg"
            >
              Voice-controlled gameplay designed for visually impaired players,
              with real-time audio feedback and a friendly AI coach that makes
              every move accessible.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-yellow px-8 py-4 text-base font-extrabold text-ink-900 shadow-chunky transition-all duration-150 hover:bg-brand-yellowDark hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              >
                <Mic className="h-5 w-5" />
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-base font-extrabold text-ink-900 shadow-card border-2 border-line transition-all duration-150 hover:border-sky hover:-translate-y-0.5"
              >
                See Features
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 pt-6"
            >
              <div className="rounded-2xl bg-white px-5 py-3 shadow-card border border-line">
                <div className="text-2xl md:text-3xl font-extrabold text-brand-yellowDark">
                  1k+
                </div>
                <div className="text-sm font-semibold text-ink-600">
                  Happy players
                </div>
              </div>
              <div className="rounded-2xl bg-white px-5 py-3 shadow-card-blue border border-line">
                <div className="text-2xl md:text-3xl font-extrabold text-sky-dark">
                  100%
                </div>
                <div className="text-sm font-semibold text-ink-600">
                  Accessible
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative h-[560px] w-full hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center gap-4">
              {/* Glow */}
              <div className="absolute h-72 w-72 rounded-full bg-brand-yellowLight/50 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, x: -50, y: 40, rotate: -10 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: -10 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="z-10"
              >
                <div className="relative w-52 h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-pop border-4 border-white">
                  <Image
                    src="/mockups/mockup1.png"
                    alt="VoiceChess app screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="z-30 -mx-6"
              >
                <div className="relative w-56 h-[500px] overflow-hidden rounded-[2.25rem] bg-white shadow-pop border-4 border-white">
                  <Image
                    src="/mockups/mockup2.png"
                    alt="VoiceChess main screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50, y: 40, rotate: 10 }}
                animate={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="z-20"
              >
                <div className="relative w-52 h-[460px] overflow-hidden rounded-[2rem] bg-white shadow-pop border-4 border-white">
                  <Image
                    src="/mockups/mockup3.png"
                    alt="VoiceChess app screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="lg:hidden relative mx-auto mt-4 h-[420px] w-[220px]">
            <div className="absolute inset-0 rounded-full bg-brand-yellowLight/40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white shadow-pop border-4 border-white">
              <Image
                src="/mockups/mockup2.png"
                alt="VoiceChess main screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
