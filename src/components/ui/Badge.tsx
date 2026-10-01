import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "cyan" | "emerald" | "amber" | "outline" | "surface";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "brand",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wide transition-colors";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-sm px-3.5 py-1",
  };

  const variantStyles = {
    brand:
      "badge-brand bg-brand-500/15 text-brand-700 dark:text-brand-300 border border-brand-500/30",
    cyan: "badge-cyan bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30",
    emerald:
      "badge-emerald bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
    amber: "badge-amber bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700",
    surface: "bg-slate-100 dark:bg-surface-elevated text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-surface-border",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
