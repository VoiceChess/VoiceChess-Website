"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Accessibility", href: "#accessibility" },
  { name: "Download", href: "#download" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-card"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/logos/Logo-NoBackground.png"
              alt="VoiceChess Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-ink-900">Voice</span>
              <span className="text-brand-yellowDark">Chess</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="rounded-full px-4 py-2 text-sm font-bold text-ink-700 hover:text-ink-900 hover:bg-brand-yellowBg transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
            <a
              href="#download"
              className="ml-2 rounded-2xl bg-brand-yellow px-5 py-2.5 text-sm font-extrabold text-ink-900 shadow-chunky-sm transition-all duration-150 hover:bg-brand-yellowDark hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
            >
              Get the App
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-yellowBg text-ink-900 transition-colors hover:bg-brand-yellowLight"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-line"
      >
        <div className="px-4 py-5 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-base font-bold text-ink-700 hover:text-ink-900 hover:bg-brand-yellowBg transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block rounded-2xl bg-brand-yellow px-4 py-3 text-center text-base font-extrabold text-ink-900 shadow-chunky-sm"
          >
            Get the App
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
