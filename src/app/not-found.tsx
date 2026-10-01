"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Compass,
  ArrowRight,
  Server,
  Globe2,
  HardDrive,
  Headphones,
  Tag,
  Home,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-brand-600/15 via-indigo-600/15 to-cyan-500/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-semibold border border-rose-500/20">
          <Compass className="w-3.5 h-3.5" />
          <span>Error 404 · Page Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-cyan-400 font-mono tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
          Looking for a WandaHost Server?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
          The page or resource you requested might have been moved, renamed, or is temporarily unavailable. Here are popular destinations:
        </p>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-left">
          <Link
            href="/hosting"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <Server className="w-4 h-4 text-brand-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Web Hosting
            </div>
            <div className="text-[11px] text-slate-500">cPanel & NVMe</div>
          </Link>

          <Link
            href="/vps"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <HardDrive className="w-4 h-4 text-cyan-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Cloud VPS
            </div>
            <div className="text-[11px] text-slate-500">Dedicated KVM</div>
          </Link>

          <Link
            href="/domains"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <Globe2 className="w-4 h-4 text-emerald-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Domains
            </div>
            <div className="text-[11px] text-slate-500">Search & TLDs</div>
          </Link>

          <Link
            href="/pricing"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <Tag className="w-4 h-4 text-amber-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Pricing Matrix
            </div>
            <div className="text-[11px] text-slate-500">All products</div>
          </Link>

          <Link
            href="/support"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <Headphones className="w-4 h-4 text-indigo-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Help Center
            </div>
            <div className="text-[11px] text-slate-500">24/7 Support</div>
          </Link>

          <Link
            href="/"
            className="p-3.5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-brand-500 transition-all group"
          >
            <Home className="w-4 h-4 text-rose-500 mb-1" />
            <div className="font-bold text-xs text-foreground group-hover:text-brand-500 transition-colors">
              Home Page
            </div>
            <div className="text-[11px] text-slate-500">Back to start</div>
          </Link>
        </div>

        <div className="pt-6">
          <Button href="/" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
