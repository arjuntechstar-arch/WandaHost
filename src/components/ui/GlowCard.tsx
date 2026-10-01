"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "indigo" | "cyan" | "emerald";
  highlight?: boolean;
}

export function GlowCard({
  className,
  glowColor = "indigo",
  highlight = false,
  children,
  ...props
}: GlowCardProps) {
  const glowMap = {
    indigo: "hover:border-brand-500/50 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.25)]",
    cyan: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.25)]",
    emerald: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)]",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border transition-all duration-300 p-6",
        "bg-surface/70 backdrop-blur-md",
        highlight
          ? "border-brand-500/40 shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)]"
          : "border-surface-border",
        glowMap[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
