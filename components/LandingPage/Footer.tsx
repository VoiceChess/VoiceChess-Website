"use client";

import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white border-t-2 border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left w-full">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Image
                src="/logos/Logo-NoBackground.png"
                alt="VoiceChess Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-black">
                <span className="text-ink-900">Voice</span>
                <span className="text-brand-yellowDark">Chess</span>
              </span>
            </div>
            <p className="mt-3 max-w-md text-ink-600 font-semibold leading-7">
              Making chess playable through voice, audio guidance, and accessible design.
            </p>
          </div>

          <a
            href="https://www.instagram.com/voicechess.app?igsh=bDlycnZtZWVtMWtr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-b-4 border-line text-ink-600 transition-colors duration-150 hover:text-brand-yellowDark hover:bg-brand-yellowBg active:border-b-2 active:translate-y-0.5"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-between border-t-2 border-line pt-6 text-sm font-bold text-ink-600 w-full">
          <p>© 2025 VoiceChess. All rights reserved.</p>
          <p>Built for accessibility.</p>
        </div>
      </div>
    </footer>
  );
}
