"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Check,
  Vibrate,
  Eye,
  Keyboard,
  Sliders,
  Globe,
  Volume2,
} from "lucide-react";

const accessibilityFeatures = [
  { icon: Volume2, title: "screen reader ready" },
  { icon: Vibrate, title: "haptic feedback" },
  { icon: Eye, title: "high contrast options" },
  { icon: Keyboard, title: "keyboard navigation" },
  { icon: Sliders, title: "adjustable audio" },
  { icon: Globe, title: "multilingual support" },
];

export default function AccessibilitySection() {
  return (
    <section id="accessibility" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full h-[320px] md:h-[460px] rounded-[2rem] overflow-hidden border-2 border-b-4 border-line bg-white">
              <Image
                src="/img/image2.jpeg"
                alt="Blind chess players using tactile boards"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-brand-yellow border-b-4 border-brand-yellowDark px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white">
                  <Check className="h-4 w-4 text-brand-yellowDark" strokeWidth={3.5} />
                </span>
                <span className="text-base md:text-lg font-black text-white whitespace-nowrap">
                  WCAG 2.1 AA
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-black text-ink-800 leading-[1.02] tracking-[-0.04em] mb-5">
              accessible from the first move.
            </h2>
            <p className="text-lg md:text-xl text-ink-700 font-extrabold leading-8 mb-8">
              VoiceChess is designed for blind players first, with audio,
              touch, contrast, and navigation choices built into the experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="card-duo flex items-center gap-3 p-4 bg-white text-left">
                  <div className="grid min-h-[44px] min-w-[44px] place-items-center rounded-xl bg-brand-yellow text-white">
                    <feature.icon className="h-5 w-5" strokeWidth={2.7} />
                  </div>
                  <span className="font-black text-ink-800 capitalize">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
