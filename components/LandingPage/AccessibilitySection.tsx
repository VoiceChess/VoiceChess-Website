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
      "Tactile vibrations confirm moves and game events for extra clarity.",
  },
  {
    icon: Eye,
    title: "Adjustable Contrast",
    description:
      "High-contrast modes and color schemes for low-vision users.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description:
      "Complete keyboard support for alternative input methods.",
  },
  {
    icon: Sliders,
    title: "Customizable Audio",
    description:
      "Adjust voice speed, pitch, and volume to your preference.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Available in 50+ languages with native voice feedback.",
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
          { x: -40, opacity: 0 },
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
      className="relative py-24 bg-sky-bg overflow-hidden"
    >
      <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-sky-light/40 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-brand-yellowLight/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card mb-4">
            <span className="text-sky-dark text-sm font-extrabold uppercase tracking-wide">
              Built for everyone
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink-900 mb-6 leading-tight">
            Accessibility isn&apos;t an option —<br />
            it&apos;s our foundation
          </h2>
          <p className="text-lg text-ink-700 max-w-3xl mx-auto">
            Everyone deserves the joy of chess. That&apos;s why we built
            VoiceChess from the ground up with accessibility at its core.
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
                className="accessibility-item flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card border border-line transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-bg text-sky-dark">
                  <feature.icon className="h-6 w-6" strokeWidth={2.4} />
                </div>
                <div>
                  <h3 className="text-ink-900 font-extrabold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-ink-700 text-sm leading-relaxed">
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
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-pop border-4 border-white">
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
              className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-yellow px-6 py-4 shadow-chunky font-extrabold text-ink-900"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-900">
                  <Check className="h-4 w-4 text-brand-yellow" strokeWidth={3} />
                </span>
                <span className="text-2xl font-extrabold">WCAG 2.1</span>
              </div>
              <div className="text-sm mt-1">AA Compliant</div>
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
          <div className="max-w-3xl mx-auto rounded-3xl bg-white p-8 shadow-pop border border-line">
            <p className="text-xl md:text-2xl text-ink-900 italic leading-relaxed">
              &quot;<span className="text-brand-yellowDark font-bold">VoiceChess</span>{" "}
              has transformed how I experience the game. For the first time, I
              can play independently and confidently.&quot;
            </p>
            <div className="mt-6">
              <p className="text-brand-yellowDark font-extrabold">Gressia</p>
              <p className="text-ink-600 text-sm">
                National Blind Chess Athlete of Indonesia
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
