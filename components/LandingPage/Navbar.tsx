"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-line"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[70px]">
          <a href="#home" className="flex items-center gap-2">
            <Image
              src="/logos/Logo-NoBackground.png"
              alt="VoiceChess Logo"
              width={110}
              height={36}
              className="h-9 w-auto"
              priority
            />
            <span className="text-xl font-black tracking-tight">
              <span className="text-ink-900">Voice</span>
              <span className="text-brand-yellowDark">Chess</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 ml-auto mr-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-xl px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-ink-600 hover:text-brand-yellowDark hover:bg-brand-yellowBg transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="/download" className="btn-duo-yellow">
              Download APK
            </a>
          </div>

          <div className="lg:hidden ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-line text-ink-700 hover:bg-brand-yellowBg transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-line">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-extrabold uppercase tracking-wide text-ink-600 hover:text-brand-yellowDark hover:bg-brand-yellowBg transition-colors duration-150"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-duo-yellow w-full mt-2"
            >
              Download APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
