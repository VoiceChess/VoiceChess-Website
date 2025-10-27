"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DemoSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: bgRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-surface">
      <div ref={bgRef} className="absolute inset-0 bg-gradient-to-b from-primary/50 to-surface" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Watch How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-text-secondary mb-12"
          >
            See VoiceMate Chess in action with real players
          </motion.p>

          {/* YouTube Iframe */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md bg-surface-light/50 border border-accent/20">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Nn2i4qokxNY"
                title="VoiceMate Chess Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Stats Below Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { number: '99.9%', label: 'Accuracy' },
              { number: '<50ms', label: 'Response Time' },
              { number: '50+', label: 'Languages' },
              { number: '4.9★', label: 'User Rating' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-surface-light/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
