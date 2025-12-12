"use client";

import { motion } from "framer-motion";
import React from "react";

type AnimatedBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
};

/**
 * Animated gradient background with softly moving blurred blobs.
 * Designed to resemble a purple/orange hero background.
 */
export function AnimatedBackground({
  children,
  className,
}: AnimatedBackgroundProps) {
  return (
    <div className={"relative overflow-hidden " + (className ?? "")}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0113] via-[#0a0113] to-[#06010b]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,#7c3aed1f,transparent),radial-gradient(900px_500px_at_-10%_60%,#f59e0b1a,transparent),radial-gradient(900px_500px_at_110%_70%,#22d3ee1a,transparent)]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/30 via-fuchsia-500/20 to-purple-600/10 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-300/30 via-pink-400/20 to-violet-500/20 blur-3xl"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-sky-300/30 via-indigo-400/20 to-fuchsia-500/20 blur-3xl"
        animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_50%,transparent,rgba(0,0,0,0.35))]" />
      <div className="relative">{children}</div>
    </div>
  );
}
