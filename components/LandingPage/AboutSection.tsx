"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Heart, Mic, Users } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  {
    icon: Heart,
    title: "Inclusive Design",
    description: "Built from the ground up with accessibility in mind.",
    tint: "bg-danger-bg text-danger",
  },
  {
    icon: Mic,
    title: "Smart Recognition",
    description: "Advanced voice recognition for seamless, hands-free play.",
    tint: "bg-brand-yellowBg text-brand-yellowDark",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Developed with input from blind chess players worldwide.",
    tint: "bg-sky-bg text-sky-dark",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        textRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-pop border-4 border-white">
              <Image
                src="/img/image4.jpeg"
                alt="Person listening with headphones"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-brand-yellowLight/50 blur-2xl" />
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-sky-light/40 blur-2xl" />
            <span
              aria-hidden="true"
              className="absolute -top-4 right-8 text-4xl animate-wiggle"
            >
              ♟️
            </span>
          </div>

          <div ref={textRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellowBg px-4 py-2">
              <span className="text-brand-yellowDark text-sm font-extrabold uppercase tracking-wide">
                About VoiceChess
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-ink-900 leading-tight">
              Empowering blind players through voice
            </h2>

            <p className="text-lg text-ink-700 leading-relaxed">
              VoiceChess lets blind players experience the strategy, thrill, and
              emotion of chess through intelligent voice guidance.
            </p>
            <p className="text-lg text-ink-700 leading-relaxed">
              Our technology bridges accessibility and competitive gaming, so
              everyone can enjoy the timeless game regardless of visual ability.
            </p>

            <div className="space-y-4 pt-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card border border-line transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${item.tint}`}
                  >
                    <item.icon className="h-6 w-6" strokeWidth={2.4} />
                  </div>
                  <div>
                    <h3 className="text-ink-900 font-extrabold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-ink-700 text-sm mt-1">
                      {item.description}
                    </p>
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
