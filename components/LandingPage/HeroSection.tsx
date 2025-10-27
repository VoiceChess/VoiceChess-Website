"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#1a2332] to-[#0a0f1a]"
    >
      {/* Large Organic Shape - Right Side */}
      <div className="absolute top-0 right-0 w-[65%] h-full">
        <svg
          viewBox="0 0 800 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 w-full h-full"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M800 0C800 0 750 150 650 250C550 350 400 400 350 500C300 600 320 750 250 850C180 950 0 900 0 900V0H800Z"
            fill="url(#gradient1)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#B8941F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Decorative Geometric Elements */}
      <div className="absolute top-20 left-16 w-20 h-20 border-4 border-accent/20 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute top-40 left-32 w-12 h-12 bg-accent/10 rounded-full blur-xl" />
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-accent/30 rotate-12" />

      {/* Floating accent dots */}
      <div
        className="absolute top-32 right-1/4 w-3 h-3 bg-accent rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-48 right-1/3 w-2 h-2 bg-accent/60 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-32 right-1/4 w-4 h-4 bg-accent/40 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "3.5s" }}
      />

      {/* Grid Pattern Overlay */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="text-white">VoiceMate Chess</span>
              <br />
              <span className="text-accent">App Landing Page</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg"
            >
              Experience chess like never before. Voice-controlled gameplay
              designed for visually impaired players with real-time audio
              feedback and intelligent assistance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#download"
                className="inline-block px-8 py-3.5 bg-accent text-primary rounded-full font-semibold text-base transition-all duration-300 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/30 hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 pt-6"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  10k+
                </div>
                <div className="text-sm text-white/60">Downloads</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  4.8★
                </div>
                <div className="text-sm text-white/60">Rating</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">
                  100%
                </div>
                <div className="text-sm text-white/60">Accessible</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone Mockups with Real Images */}
          <div className="relative h-[550px] w-full hidden lg:block">
            <div className="absolute inset-0 flex left-40 top-40 items-center justify-center gap-6 translate-x-8 translate-y-16">
              {/* Phone 1 - Left Back */}
              <motion.div
                initial={{ opacity: 0, x: -50, y: 40, rotateZ: -12 }}
                animate={{ opacity: 1, x: 0, y: 0, rotateZ: -12 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="z-10"
              >
                <div className="relative w-56 h-[500px] overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/mockup1.png"
                    alt="VoiceMate Chess App Screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Phone 2 - Center Middle */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotateZ: -12 }}
                animate={{ opacity: 1, y: 0, rotateZ: -12 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="z-20"
              >
                <div className="relative w-56 h-[500px] overflow-hidden shadow-xl">
                  <Image
                    src="/assets/images/mockup2.jpg"
                    alt="VoiceMate Chess App Main Screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Phone 3 - Right Front (half visible) */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 40, rotateZ: -12 }}
                animate={{ opacity: 1, x: 0, y: 0, rotateZ: -12 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="z-30"
              >
                <div className="relative w-56 h-[500px] overflow-hidden shadow-lg">
                  <Image
                    src="/assets/images/mockup3.jpg"
                    alt="VoiceMate Chess App Screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Glow effect behind center phone */}
              <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl z-0" />
            </div>
          </div>

          {/* Mobile - Single Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:hidden"
          >
            <div className="relative w-52 h-[420px] overflow-hidden shadow-lg">
              <Image
                src="/assets/images/mockup1.png"
                alt="VoiceMate Chess App"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
