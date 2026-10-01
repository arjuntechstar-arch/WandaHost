"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animation/Reveal";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  badge?: string;
  badgeVariant?: "brand" | "cyan" | "emerald" | "amber";
  title: string;
  highlightedTitle?: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  children?: React.ReactNode;
}

export function PageHeader({
  badge,
  badgeVariant = "brand",
  title,
  highlightedTitle,
  description,
  breadcrumbs,
  children,
}: PageHeaderProps) {
  return (
    <div className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-surface-border bg-surface/30">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-brand-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 bg-surface/80 px-3 py-1.5 rounded-full border border-surface-border backdrop-blur-sm">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                {bc.href ? (
                  <Link href={bc.href} className="hover:text-foreground transition-colors">
                    {bc.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{bc.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <Reveal direction="up" delay={0.05}>
            <div className="mb-4">
              <Badge variant={badgeVariant} size="md">
                {badge}
              </Badge>
            </div>
          </Reveal>
        )}

        {/* Main Title */}
        <Reveal direction="up" delay={0.1}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight max-w-4xl mx-auto leading-[1.15]">
            {title}{" "}
            {highlightedTitle && (
              <span className="text-brand-600 dark:text-cyan-400 [[class*='finish-gradient']_&]:text-transparent [[class*='finish-gradient']_&]:bg-clip-text [[class*='finish-gradient']_&]:bg-gradient-to-r [[class*='finish-gradient']_&]:from-brand-600 [[class*='finish-gradient']_&]:via-indigo-600 [[class*='finish-gradient']_&]:to-cyan-500">
                {highlightedTitle}
              </span>
            )}
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal direction="up" delay={0.15}>
          <p className="mt-5 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </Reveal>

        {/* Action Buttons or Custom Children */}
        {children && (
          <Reveal direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
