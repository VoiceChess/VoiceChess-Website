"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Mic, Users } from "lucide-react";

const items = [
  {
    icon: Mic,
    title: "Voice-first controls",
    description: "Players can hear the board and make moves without relying on sight.",
  },
  {
    icon: Heart,
    title: "Made for accessibility",
    description:
      "Readable contrast, clear labels, audio guidance, and simple flows from the start.",
  },
  {
    icon: Users,
    title: "Built with players",
    description:
      "Shaped by real needs from blind and visually impaired chess players.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-yellowDark leading-[1.02] tracking-[-0.04em]">
            Chess should be playable by everyone.
          </h2>
          <p className="mt-5 text-lg md:text-xl text-ink-700 font-extrabold leading-8">
            VoiceChess turns every move into clear audio guidance, so blind and
            visually impaired players can play, learn, and improve with confidence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="relative mx-auto w-full max-w-5xl h-[320px] md:h-[520px] rounded-[2rem] overflow-hidden border-2 border-b-4 border-line bg-white">
            <Image
              src="/img/image4.jpeg"
              alt="Players using VoiceChess together"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card-duo p-6 bg-white"
            >
              <div className="grid min-h-[56px] min-w-[56px] w-14 place-items-center rounded-2xl bg-brand-yellow text-white mb-5">
                <item.icon className="h-7 w-7" strokeWidth={2.7} />
              </div>
              <h3 className="text-ink-800 font-black text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-ink-600 font-semibold leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
