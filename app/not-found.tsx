"use client";

import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-7xl mb-6" aria-hidden="true">
          ♟️
        </div>
        <h1 className="text-7xl md:text-8xl font-black text-brand-yellowDark mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-black text-ink-800 mb-4">
          Page not found
        </h2>
        <p className="text-lg text-ink-600 font-semibold mb-10 max-w-md mx-auto">
          Oops! The page you are looking for doesn&apos;t exist. It might have
          been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-duo-yellow py-4 px-8 text-base">
            Back to Home
          </Link>
          <Link href="/#download" className="btn-duo-white py-4 px-8 text-base">
            Download App
          </Link>
        </div>
      </div>
    </div>
  );
}
