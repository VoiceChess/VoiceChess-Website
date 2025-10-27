"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, TrendingUp, Bot, BookOpen, Palette } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Camera,
    title: 'Scan',
    description: 'Scan physical chess boards with your camera to digitize positions instantly and continue playing with voice commands.',
  },
  {
    icon: TrendingUp,
    title: 'Analysis',
    description: 'Get detailed position analysis with engine evaluation, best moves suggestions, and strategic insights for improvement.',
  },
  {
    icon: Bot,
    title: 'Play with AI',
    description: 'Play against intelligent AI opponents with adjustable difficulty levels suitable for all skill ranges.',
  },
  {
    icon: BookOpen,
    title: 'Learning & Puzzles',
    description: 'Access comprehensive learning materials, tactical puzzles, and training exercises to improve your game.',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description: 'Personalize your experience with custom board themes, piece sets, and color schemes that match your style.',
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
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section id="features" className="relative py-24 bg-surface overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Designed for Everyone
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-lg text-text-secondary"
          >
            Powerful features that make chess accessible, intelligent, and enjoyable for all players.
          </motion.p>
        </div>

        {/* Features Grid - 3 items top, 2 centered bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className={`group relative bg-primary border border-highlight/30 rounded-xl p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 ${
                index < 3
                  ? 'lg:col-span-2'
                  : index === 3
                    ? 'lg:col-span-2 lg:col-start-2'
                    : 'lg:col-span-2 lg:col-start-4'
              }`}
            >
              {/* Icon background with low opacity */}
              <div className="absolute top-6 right-6 opacity-5">
                <feature.icon className="w-24 h-24 text-accent" strokeWidth={1} />
              </div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/20">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-3 relative z-10">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed relative z-10">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent rounded-b-xl transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
