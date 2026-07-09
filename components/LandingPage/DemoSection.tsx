"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "99.9%", label: "Accuracy", tint: "text-success" },
  { number: "<50ms", label: "Response time", tint: "text-brand-yellowDark" },
  { number: "50+", label: "Languages", tint: "text-sky-dark" },
];

export default function DemoSection() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink-900 mb-4">
            Watch how it works
          </h2>
          <p className="text-ink-700 mb-12 text-lg">
            See VoiceChess in action with real players.
          </p>

          <div className="relative rounded-3xl overflow-hidden shadow-pop border-4 border-white bg-brand-yellowBg">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-card border border-line"
              >
                <div className={`text-3xl md:text-4xl font-extrabold mb-1 ${stat.tint}`}>
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-ink-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
