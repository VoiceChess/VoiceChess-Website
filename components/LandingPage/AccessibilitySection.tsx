"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const accessibilityFeatures = [
  {
    icon: Volume2,
    title: "Voice-Over Support",
    description:
      "Full compatibility with screen readers and voice-over technology on all platforms.",
  },
  {
    icon: Vibrate,
    title: "Haptic Feedback",
    description:
      "Tactile vibrations provide additional feedback for move confirmation and game events.",
  },
  {
    icon: Eye,
    title: "Adjustable Contrast",
    description:
      "Customizable high-contrast modes and color schemes for low vision users.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "Complete keyboard support for users who prefer or require alternative input methods.",
  },
  {
    icon: Sliders,
    title: "Customizable Audio",
    description:
      "Adjustable voice speed, pitch, and volume to match individual preferences.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Available in 50+ languages with native voice feedback in each language.",
  },
];

export default function AccessibilitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemsRef.current) {
      const items = itemsRef.current.querySelectorAll(".accessibility-item");

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top center+=150",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      id="accessibility"
      ref={sectionRef}
      className="relative py-24 bg-highlight overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Built for Everyone
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Accessibility is not an option —<br />
            it&apos;s our foundation
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We believe that everyone deserves access to the joy of chess.
            That&apos;s why we&apos;ve built VoiceChess from the ground up with
            accessibility at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={itemsRef} className="space-y-4">
            {accessibilityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="accessibility-item relative flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 overflow-hidden"
              >
                {/* Icon background with low opacity */}
                <div className="absolute -bottom-4 -right-4 opacity-20">
                  <feature.icon
                    className="w-20 h-20 text-accent"
                    strokeWidth={1}
                  />
                </div>

                <div className="flex-shrink-0 relative z-10">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" strokeWidth={3} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10" />
              <Image
                src="/img/image2.jpeg"
                alt="Accessibility technology"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-accent text-primary px-6 py-4 rounded-xl shadow-xl font-semibold"
            >
              <div className="text-2xl font-bold">WCAG 2.1</div>
              <div className="text-sm">AAA Compliant</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl md:text-2xl text-white italic leading-relaxed">
              &quot;<span className="text-accent">VoiceChess</span> has
              transformed how I experience the game. For the first time, I can
              play independently and confidently.&quot;
            </p>
            <div className="mt-6">
              <p className="text-accent font-semibold">Gressia</p>
              <p className="text-white/70 text-sm">
                National Blind Chess Athlete of Indonesia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
