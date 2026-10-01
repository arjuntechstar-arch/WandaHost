"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, leftIcon, rightElement, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-slate-400 pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            ref={ref}
            className={cn(
              "w-full rounded-xl bg-surface dark:bg-surface-muted/80 border text-foreground placeholder:text-slate-400 dark:placeholder:text-slate-500",
              "px-4 py-3 text-base transition-all duration-200 outline-none",
              "focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
              leftIcon && "pl-11",
              rightElement && "pr-12",
              error
                ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
                : "border-surface-border",
              className
            )}
            {...props}
          />
          {rightElement && <div className="absolute right-2.5 flex items-center">{rightElement}</div>}
        </div>
        {error ? (
          <p className="text-sm text-rose-400 mt-1">{error}</p>
        ) : helperText ? (
          <p className="text-sm text-slate-400 mt-1">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
