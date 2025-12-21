import React from 'react';

interface BackgroundGlowProps {
  themeColor?: string;
  primaryColor?: string;
  secondaryColor?: string | null;
  accentColor?: string | null;
}

/**
 * Converts hex color to RGB components for gradient mixing
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

/**
 * Creates a lighter version of a color by mixing with white
 */
const lightenColor = (hex: string, amount: number = 0.3): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const r = Math.round(rgb.r + (255 - rgb.r) * amount);
  const g = Math.round(rgb.g + (255 - rgb.g) * amount);
  const b = Math.round(rgb.b + (255 - rgb.b) * amount);

  return `rgb(${r}, ${g}, ${b})`;
};

export default function BackgroundGlow({
  themeColor = '#8b5cf6',
  primaryColor = '#7c3aed',
  secondaryColor = null,
  accentColor = null,
}: BackgroundGlowProps) {
  // Use partner colors or fall back to defaults
  const color1 = lightenColor(themeColor, 0.5);
  const color2 = lightenColor(secondaryColor || primaryColor, 0.5);
  const color3 = lightenColor(accentColor || themeColor, 0.4);
  const color4 = lightenColor(primaryColor, 0.6);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top section */}
      <div
        className="absolute top-10 md:top-20 left-5 md:left-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-30 animate-float-slow"
        style={{
          background: `radial-gradient(circle, ${color1}, ${color2})`,
        }}
      />
      <div
        className="absolute top-20 md:top-40 right-1/4 md:right-1/3 w-48 md:w-80 h-48 md:h-80 rounded-full blur-3xl opacity-25 animate-float-reverse"
        style={{
          background: `radial-gradient(circle, ${color2}, ${color1})`,
        }}
      />
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-3xl opacity-15 animate-float"
        style={{
          background: `linear-gradient(to right, ${color4}, ${color2})`,
        }}
      />

      {/* Middle section */}
      <div
        className="absolute top-[45%] right-5 md:right-20 w-72 md:w-[450px] h-72 md:h-[450px] rounded-full blur-3xl opacity-15 animate-float-delayed"
        style={{
          background: `radial-gradient(circle, ${color1}, ${color2})`,
        }}
      />

      {/* Bottom section */}
      <div
        className="absolute top-[55%] left-5 md:left-20 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-3xl opacity-25 animate-float-slow"
        style={{
          background: `radial-gradient(circle, ${color1}, ${color3})`,
        }}
      />
      <div
        className="absolute top-[70%] right-1/4 md:right-1/3 w-64 md:w-[400px] h-64 md:h-[400px] rounded-full blur-3xl opacity-20 animate-float-reverse"
        style={{
          background: `radial-gradient(circle, ${color3}, ${color2})`,
        }}
      />
      <div
        className="absolute bottom-10 md:bottom-20 right-5 md:right-20 w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-3xl opacity-25 animate-float-delayed"
        style={{
          background: `radial-gradient(circle, ${color1}, ${color3})`,
        }}
      />
      <div
        className="absolute bottom-20 md:bottom-40 left-1/4 md:left-1/3 w-72 md:w-[450px] h-72 md:h-[450px] rounded-full blur-3xl opacity-20 animate-float-slow-reverse"
        style={{
          background: `radial-gradient(circle, ${color3}, ${color2})`,
        }}
      />
    </div>
  );
}
