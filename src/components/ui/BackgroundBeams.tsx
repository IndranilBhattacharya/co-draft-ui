"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const paths = Array.from({ length: 60 }, (_, i) => {
      const startX = -300 + Math.random() * 300 + i * 20;
      const startY = -200 + Math.random() * 100;

      // Create multiple wavy control points to ensure a curvy path
      const ctrl1X = startX + 100 + Math.sin(i * 0.5) * 100;
      const ctrl1Y = startY + 80 + Math.sin(i * 0.6) * 100;

      const ctrl2X = ctrl1X + 100 + Math.sin(i * 0.7) * 100;
      const ctrl2Y = ctrl1Y + 80 + Math.sin(i * 0.8) * 100;

      const ctrl3X = ctrl2X + 100 + Math.sin(i * 0.9) * 100;
      const ctrl3Y = ctrl2Y + 80 + Math.sin(i * 1.0) * 100;

      const ctrl4X = ctrl3X + 100 + Math.sin(i * 1.1) * 100;
      const ctrl4Y = ctrl3Y + 80 + Math.sin(i * 1.2) * 100;

      const endX = ctrl4X + 100 + Math.sin(i * 1.3) * 100;
      const endY = ctrl4Y + 80 + Math.sin(i * 1.4) * 100;

      return `M${startX} ${startY} C${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${ctrl3X} ${ctrl3Y} S${ctrl4X} ${ctrl4Y}, ${endX} ${endY}`;
    });

    return (
      <div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px]",
          className
        )}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle background glow */}
          <path
            d={paths[0]}
            stroke="url(#backgroundGlow)"
            strokeOpacity="0.08"
            strokeWidth="0.7"
          />

          {paths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#grayGradient-${index})`}
              strokeOpacity={0.5 + Math.random() * 0.2}
              strokeWidth="0.6"
              animate={{
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}

          <defs>
            {/* Grayscale linear gradients */}
            {paths.map((_, index) => (
              <motion.linearGradient
                id={`grayGradient-${index}`}
                key={`gradient-${index}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
                animate={{
                  x2: ["100%", "0%"],
                  y2: ["0%", "100%"],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              >
                <stop offset="0%" stopColor="#000" stopOpacity="0"></stop>
                <stop offset="30%" stopColor="#777"></stop>
                <stop offset="70%" stopColor="#aaa"></stop>
                <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            {/* Background radial glow */}
            <radialGradient
              id="backgroundGlow"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(600 300) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.1" stopColor="#888" stopOpacity="0.25" />
              <stop offset="0.4" stopColor="#aaa" stopOpacity="0.08" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
