"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, TrendingUp, Bot, BookOpen, Palette } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Camera,
    title: "Scan",
    description:
      "Scan physical chess boards with your camera to digitize positions instantly and keep playing by voice.",
    tint: "bg-sky-bg text-sky-dark",
    shadow: "shadow-card-blue",
  },
  {
    icon: TrendingUp,
    title: "Analysis",
    description:
      "Get detailed position analysis with engine evaluation, best-move suggestions, and strategic insights.",
    tint: "bg-success-bg text-success",
    shadow: "shadow-card",
  },
  {
    icon: Bot,
    title: "Play with AI",
    description:
      "Face intelligent AI opponents with adjustable difficulty levels suitable for every skill range.",
    tint: "bg-brand-yellowBg text-brand-yellowDark",
    shadow: "shadow-card",
  },
  {
    icon: BookOpen,
    title: "Learning & Puzzles",
    description:
      "Access learning materials, tactical puzzles, and training exercises to improve your game.",
    tint: "bg-info-bg text-info",
    shadow: "shadow-card-blue",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description:
      "Personalize board themes, piece sets, and color schemes that match your style.",
    tint: "bg-danger-bg text-danger",
    shadow: "shadow-card",
  },
];

export default function FeaturesSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="features"
      className="relative py-24 bg-brand-yellowBg overflow-hidden"
    >
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-yellowLight/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sky-light/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-ink-900 mb-4"
          >
            Designed for everyone
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-lg text-ink-700"
          >
            Powerful features that make chess accessible, intelligent, and
            genuinely fun for all players.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl bg-white p-8 border border-line ${
                feature.shadow
              } transition-transform duration-200 hover:-translate-y-1.5 ${
                index < 3
                  ? "lg:col-span-2"
                  : index === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2 lg:col-start-4"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-6 ${feature.tint} transition-transform duration-200 group-hover:scale-110`}
              >
                <feature.icon className="h-7 w-7" strokeWidth={2.4} />
              </div>
              <h3 className="text-xl font-extrabold text-ink-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-ink-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
