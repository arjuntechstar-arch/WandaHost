"use client";

import React from "react";
import Link from "next/link";
import { MegaMenuConfig } from "@/types/navigation";
import { Badge } from "@/components/ui/Badge";
import {
  Server,
  Layers,
  Cpu,
  HardDrive,
  Users,
  Mail,
  Globe,
  ShieldCheck,
  DatabaseBackup,
  Activity,
  Cloud,
  Wrench,
  Database,
  GitBranch,
  Sparkles,
  Bot,
  MessageSquare,
  BookOpen,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Layers,
  Cpu,
  HardDrive,
  Users,
  Mail,
  Globe,
  ShieldCheck,
  DatabaseBackup,
  Activity,
  Cloud,
  Wrench,
  Database,
  GitBranch,
  Sparkles,
  Bot,
  MessageSquare,
  BookOpen,
};

interface MegaMenuProps {
  config: MegaMenuConfig;
  onClose: () => void;
}

export function MegaMenu({ config, onClose }: MegaMenuProps) {
  return (
    <div className="w-[860px] max-w-[95vw] p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-surface/95 border border-slate-200/90 dark:border-surface-border shadow-2xl backdrop-blur-2xl transition-all">
      <div className="grid grid-cols-12 gap-6">
        {/* Left 8 columns: Categories and items */}
        <div className="col-span-8 grid grid-cols-2 gap-6 pr-5 border-r border-slate-200/60 dark:border-surface-border/60">
          {config.categories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 pb-1.5 border-b border-slate-100 dark:border-white/[0.05]">
                {category.title}
              </h4>
              <ul className="space-y-1">
                {category.items.map((item) => {
                  const Icon = item.iconName ? iconMap[item.iconName] || Globe : Globe;
                  return (
                    <li key={item.name} className="list-none">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group relative flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200/80 dark:hover:border-white/[0.08] hover:bg-slate-100/70 dark:hover:bg-white/[0.04] transition-all duration-150 ease-out"
                      >
                        {/* Refined Icon Container */}
                        <div className="mt-0.5 p-2 rounded-xl bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-brand-300 group-hover:bg-brand-500/10 group-hover:text-brand-600 dark:group-hover:text-cyan-400 group-hover:border-brand-500/30 border border-slate-200/70 dark:border-white/[0.06] transition-all duration-150 shrink-0 shadow-xs">
                          <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                        </div>

                        {/* Title and Description */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors tracking-tight">
                              {item.name}
                            </span>
                            {item.badge && (
                              <Badge variant="cyan" size="sm" className="text-xs px-2 py-0.5">
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          {item.description && (
                            <p className="text-[13px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 font-normal leading-relaxed group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                              {item.description}
                            </p>
                          )}
                        </div>

                        {/* Subtle arrow indicator on hover */}
                        <ArrowRight className="w-3.5 h-3.5 mt-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-brand-600 dark:text-cyan-400 shrink-0 self-center" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Right 4 columns: Featured Callout */}
        <div className="col-span-4 flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-brand-50/80 via-indigo-50/40 to-white dark:from-brand-950/40 dark:via-surface-muted/50 dark:to-surface border border-brand-200/60 dark:border-brand-500/20 shadow-sm dark:shadow-none">
          {config.featured && (
            <div className="space-y-3">
              {config.featured.badge && (
                <Badge variant="brand" size="sm" className="text-xs font-semibold tracking-wide">
                  {config.featured.badge}
                </Badge>
              )}
              <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                {config.featured.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {config.featured.description}
              </p>
            </div>
          )}

          {config.featured && (
            <Link
              href={config.featured.href}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 dark:text-cyan-400 hover:text-brand-700 dark:hover:text-cyan-300 pt-4 group transition-colors"
            >
              <span>{config.featured.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
