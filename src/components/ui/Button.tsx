"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  shine?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      href,
      leftIcon,
      rightIcon,
      children,
      disabled,
      shine,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 disabled:opacity-50 disabled:cursor-not-allowed group select-none overflow-hidden";

    const sizeStyles = {
      sm: "text-sm px-4 py-2 gap-1.5",
      md: "text-base px-5 py-2.5 gap-2",
      lg: "text-lg px-6 py-3.5 gap-2.5 font-semibold",
    };

    const variantStyles = {
      primary: "btn-primary active:scale-[0.98]",
      secondary: "btn-secondary active:scale-[0.98]",
      outline: "btn-outline active:scale-[0.98]",
      ghost: "btn-ghost active:scale-[0.98]",
      glow: "btn-glow active:scale-[0.98]",
    };

    const showShine = shine ?? (variant === "primary" || variant === "glow");

    const content = (
      <>
        {/* Shimmering shine beam animation */}
        {showShine && (
          <span
            className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none"
            aria-hidden="true"
          >
            <span className="btn-shine-light" />
          </span>
        )}
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0 relative z-10" />
        ) : (
          leftIcon && <span className="shrink-0 transition-transform group-hover:-translate-x-0.5 relative z-10">{leftIcon}</span>
        )}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0 transition-transform group-hover:translate-x-1 relative z-10">{rightIcon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
