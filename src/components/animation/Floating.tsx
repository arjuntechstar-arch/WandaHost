"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FloatingProps {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  delay?: number;
  className?: string;
}

export function Floating({
  children,
  duration = 4,
  yOffset = 8,
  delay = 0,
  className,
}: FloatingProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
