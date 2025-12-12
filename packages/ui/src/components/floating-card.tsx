"use client";

import React from "react";
import { motion } from "framer-motion";

type FloatingCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FloatingCard({
  children,
  className,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.div
      className={
        "rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur " +
        (className ?? "")
      }
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
