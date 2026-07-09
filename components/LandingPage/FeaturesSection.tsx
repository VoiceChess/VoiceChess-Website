"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, TrendingUp, Bot, BookOpen, Palette } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Scan",
    description: "Capture a physical chess position and make it voice-ready.",
  },
  {
    icon: Bot,
    title: "Play AI",
    description: "Practice against a friendly opponent at your own level.",
  },
  {
    icon: BookOpen,
    title: "Learn",
    description: "Follow guided lessons and puzzles one step at a time.",
  },
  {
    icon: TrendingUp,
    title: "Analyze",
    description: "Review evaluations, suggestions, and game insights.",
  },
  {
    icon: Palette,
    title: "Themes",
    description: "Adjust pieces, colors, and boards for comfort and contrast.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-brand-yellowDark tracking-[-0.04em] mb-4"
          >
            scan. speak. improve.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-lg text-ink-600 font-extrabold"
          >
            A focused chess flow built around voice, accessibility, and practice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className={`card-duo grid min-h-[220px] grid-rows-[64px_auto_1fr] gap-4 p-5 bg-white lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              } ${index === 4 ? "sm:col-span-2 lg:col-span-2 lg:col-start-4" : ""}`}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow text-white">
                <feature.icon className="h-7 w-7" strokeWidth={2.7} />
              </div>
              <h3 className="text-2xl font-black text-ink-800 tracking-[-0.03em]">
                {feature.title}
              </h3>
              <p className="text-ink-600 font-semibold leading-relaxed">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
