import React from 'react';

interface PhoneMockupProps {
  className?: string;
  delay?: number;
}

export default function PhoneMockup({ className = '', delay = 0 }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative w-64 h-[520px] bg-gradient-to-br from-surface to-surface-light rounded-[40px] shadow-2xl border-[12px] border-primary overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-primary rounded-b-3xl z-10" />

        {/* Screen Content - Dummy Chess App UI */}
        <div className="w-full h-full bg-gradient-to-b from-primary via-surface to-surface-light p-4 pt-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-accent" />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-highlight/30" />
              <div className="w-8 h-8 rounded-lg bg-highlight/30" />
            </div>
          </div>

          {/* Chess Board Preview */}
          <div className="bg-surface-light/50 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <div className="grid grid-cols-8 gap-0.5 aspect-square">
              {Array.from({ length: 64 }).map((_, i) => {
                const row = Math.floor(i / 8);
                const col = i % 8;
                const isLight = (row + col) % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`aspect-square ${
                      isLight ? 'bg-[#E8D4A0]' : 'bg-[#A67C52]'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <div className="h-12 bg-accent rounded-xl flex items-center justify-center">
              <div className="w-24 h-4 bg-primary/80 rounded" />
            </div>
            <div className="h-12 bg-highlight/30 rounded-xl flex items-center justify-center">
              <div className="w-32 h-4 bg-text-secondary/30 rounded" />
            </div>
          </div>

          {/* Stats/Info Cards */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="h-20 bg-surface/50 backdrop-blur-sm rounded-xl p-3">
              <div className="w-12 h-3 bg-accent/50 rounded mb-2" />
              <div className="w-16 h-4 bg-text-secondary/30 rounded" />
            </div>
            <div className="h-20 bg-surface/50 backdrop-blur-sm rounded-xl p-3">
              <div className="w-12 h-3 bg-accent/50 rounded mb-2" />
              <div className="w-16 h-4 bg-text-secondary/30 rounded" />
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-text-secondary/30 rounded-full" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-[40px] blur-2xl -z-10" />
    </div>
  );
}
