"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-surface overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/30 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop"
                alt="Person listening with headphones"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-highlight/20 rounded-full blur-2xl" />
          </div>

          <div ref={textRef} className="space-y-6">
            <div className="inline-block">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                About VoiceMate Chess
              </span>
              <div className="h-1 w-20 bg-accent mt-2 rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
              Empowering Blind Players Through Voice
            </h2>

            <p className="text-lg text-text-secondary leading-relaxed">
              VoiceMate Chess empowers blind players to experience the strategy, thrill, and emotion of chess through intelligent voice guidance.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              Our innovative technology bridges the gap between accessibility and competitive gaming, ensuring that everyone can enjoy the timeless game of chess regardless of visual ability.
            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  title: 'Inclusive Design',
                  description: 'Built from the ground up with accessibility in mind',
                },
                {
                  title: 'Smart Recognition',
                  description: 'Advanced voice recognition technology for seamless play',
                },
                {
                  title: 'Community Driven',
                  description: 'Developed with input from blind chess players worldwide',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-surface-light/50 hover:bg-surface-light transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-2" />
                  <div>
                    <h3 className="text-text-primary font-semibold text-lg">{item.title}</h3>
                    <p className="text-text-secondary text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
