"use client";

import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect } from "react";

type ParticlesProps = {
  count?: number;
  className?: string;
};

export function Particles({ count = 20, className }: ParticlesProps) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({
      y: [0, -20, 0],
      x: [0, i % 2 === 0 ? 10 : -10, 0],
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 8 + (i % 5),
        repeat: Infinity,
        ease: "easeInOut",
      },
    }));
  }, [controls]);

  return (
    <div
      className={"pointer-events-none absolute inset-0 " + (className ?? "")}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          custom={i}
          animate={controls}
          className="absolute h-[2px] w-[2px] rounded-full bg-white/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "drop-shadow(0 0 6px rgba(255,255,255,0.35))",
          }}
        />
      ))}
    </div>
  );
}
