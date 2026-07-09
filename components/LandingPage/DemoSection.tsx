"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "99.9%", label: "Accuracy" },
  { number: "<50ms", label: "Response time" },
  { number: "50+", label: "Languages" },
];

export default function DemoSection() {
  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-ink-800 mb-4">
            Watch how it works
          </h2>
          <p className="text-lg text-ink-600 font-semibold mb-12">
            See VoiceChess in action with real players.
          </p>

          <div className="card-duo overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Nn2i4qokxNY"
                title="VoiceChess Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {stats.map((stat, index) => (
              <div key={index} className="card-duo p-6">
                <div className="text-3xl font-black text-brand-yellowDark mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-ink-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
