"use client";

import React from "react";
import { motion } from "framer-motion";

type PhoneMockProps = {
  screen: React.ReactNode;
  className?: string;
};

export function PhoneMock({ screen, className }: PhoneMockProps) {
  return (
    <motion.div
      className={
        "relative mx-auto h-[560px] w-[280px] rounded-[2.2rem] border border-white/10 bg-black/70 shadow-2xl backdrop-blur " +
        (className ?? "")
      }
      style={{ boxShadow: "0 20px 80px rgba(124,58,237,0.35)" }}
      initial={{ rotate: -8, y: 10, scale: 0.98 }}
      animate={{ rotate: -6, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
    >
      <div className="absolute left-1/2 top-2 h-6 w-28 -translate-x-1/2 rounded-full bg-white/10" />
      <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
        {screen}
      </div>
    </motion.div>
  );
}
