"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/animation/Reveal";
import {
  ArrowRight,
  Search,
  Zap,
  Globe2,
  ShieldCheck,
  Bot,
  Activity,
  CheckCircle2,
  Sliders,
  Sparkles,
  Server,
  Layers,
} from "lucide-react";

interface EdgeRegion {
  id: string;
  label: string;
  latency: string;
  nodes: number;
  flag: string;
}

const edgeRegions: EdgeRegion[] = [
  { id: "us-east", label: "US-East", latency: "9ms", nodes: 512, flag: "🇺🇸" },
  { id: "eu-central", label: "EU-Central", latency: "16ms", nodes: 384, flag: "🇪🇺" },
  { id: "ap-south", label: "AP-South", latency: "22ms", nodes: 420, flag: "🇮🇳" },
];

export function HeroSection() {
  // Simulated real-time fluctuating metric
  const [requestsPerSec, setRequestsPerSec] = useState(1245);
  const [selectedRegion, setSelectedRegion] = useState<EdgeRegion>(edgeRegions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRequestsPerSec((prev) => prev + (Math.floor(Math.random() * 9) - 4));
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Dynamic Animated Aurora Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Luminous floating aurora gradient 1 (Cyan/Blue) */}
        <div className="absolute -top-20 left-1/4 w-[600px] h-[450px] bg-gradient-to-r from-cyan-400/25 via-sky-300/20 to-indigo-500/20 rounded-full blur-[130px] animate-aurora-1" />
        {/* Luminous floating aurora gradient 2 (Violet/Indigo) */}
        <div className="absolute top-1/3 right-10 w-[550px] h-[450px] bg-gradient-to-r from-violet-500/20 via-purple-400/15 to-pink-400/15 rounded-full blur-[140px] animate-aurora-2" />
        {/* Light micro-grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Editorial Headline Left + Floating Interactive Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            <Reveal direction="down" delay={0.05}>
              <div className="inline-flex items-center gap-2">
                <Badge variant="cyan" size="md">
                  ⚡ Next-Generation Cloud & AI Hosting
                </Badge>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">
                  99.99% Uptime · Pure NVMe
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-foreground leading-[1.12]">
                Next-Generation Cloud & AI Hosting,{" "}
                <span className="text-brand-600 dark:text-cyan-400 [[class*='finish-gradient']_&]:text-transparent [[class*='finish-gradient']_&]:bg-clip-text [[class*='finish-gradient']_&]:bg-gradient-to-r [[class*='finish-gradient']_&]:from-brand-600 [[class*='finish-gradient']_&]:via-indigo-600 [[class*='finish-gradient']_&]:to-cyan-500">
                  Engineered for Speed.
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.15}>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Scale effortlessly with high-performance NVMe infrastructure, global Anycast edge nodes, and integrated autonomous AI optimization. Built for modern businesses, developers, and agencies.
              </p>
            </Reveal>

            {/* High-Contrast Action Buttons */}
            <Reveal direction="up" delay={0.2}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  href="/hosting"
                  variant="glow"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Deploy Your Project
                </Button>
                <Button
                  href="#server-configurator"
                  variant="outline"
                  size="lg"
                  rightIcon={<Sliders className="w-4 h-4" />}
                >
                  Configure Server
                </Button>
                <Button
                  href="/domains"
                  variant="ghost"
                  size="lg"
                  leftIcon={<Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />}
                >
                  Search Domain
                </Button>
              </div>
            </Reveal>

            {/* Reassurance Trust Ticker */}
            <Reveal direction="up" delay={0.25}>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-3">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 30-Day Money-Back
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero Hidden Fees
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> 24/7 Human Engineers
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Floating Interactive Glassmorphism Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Interactive Edge Region Selector Bar */}
            <div className="flex flex-wrap items-center justify-between p-2 rounded-2xl bg-surface/90 dark:bg-surface-elevated/90 border border-surface-border backdrop-blur-md shadow-sm gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider pl-2 flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>Anycast Edge:</span>
              </span>
              <div className="flex gap-1">
                {edgeRegions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      selectedRegion.id === region.id
                        ? "btn-primary shadow-sm text-white"
                        : "text-slate-600 dark:text-slate-400 hover:text-foreground hover:bg-surface/50"
                    }`}
                  >
                    <span>{region.flag}</span>
                    <span>{region.label}</span>
                    <span className={`text-xs font-mono tabular-nums ${selectedRegion.id === region.id ? "text-cyan-200" : "text-emerald-500 font-bold"}`}>
                      {region.latency}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 1: Live Cloud Metrics Card & Active Nodes Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Live Cloud Metrics */}
              <div className="p-5 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/70 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="font-bold text-slate-700 dark:text-slate-200">1. Live Cloud Metrics</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold font-mono tabular-nums">
                    {selectedRegion.latency} Latency
                  </span>
                </div>

                {/* Animated undulating SVG wave */}
                <div className="h-14 w-full my-2 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <path
                      d="M0,40 Q30,10 60,35 T120,20 T180,30 T200,15"
                      fill="none"
                      stroke="url(#metric-gradient)"
                      strokeWidth="3"
                      className="animate-wave-flow"
                    />
                    <defs>
                      <linearGradient id="metric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="50%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex items-baseline justify-between pt-2 border-t border-surface-border/60">
                  <div>
                    <div className="text-2xl font-extrabold text-foreground font-mono tabular-nums">
                      {requestsPerSec.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-500">Requests / Sec</div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums">
                      99.99%
                    </div>
                    <div className="text-xs text-slate-500">Real-time Uptime</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Active Server Nodes */}
              <div className="p-5 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/70 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="font-bold text-slate-700 dark:text-slate-200">2. Active Server Nodes</span>
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>

                {/* 3D-styled Globe Radar Graphic */}
                <div className="flex items-center justify-center py-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center">
                      <Globe2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-surface-border/60">
                  <div>
                    <div className="text-xl font-extrabold text-foreground font-mono tabular-nums">14</div>
                    <div className="text-xs text-slate-500">Global Regions</div>
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-brand-600 dark:text-brand-400 font-mono tabular-nums">
                      {selectedRegion.nodes}
                    </div>
                    <div className="text-xs text-slate-500">{selectedRegion.label} Nodes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: WhatsApp AI Bot Preview Card */}
            <div className="p-5 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/70 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="font-bold text-sm text-foreground">
                    3. WhatsApp AI Bot Preview
                  </span>
                </div>
                <Badge variant="emerald" size="sm">
                  Live Flow
                </Badge>
              </div>

              {/* Chat simulation snippet */}
              <div className="p-3.5 rounded-2xl bg-surface/80 border border-surface-border text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 text-xs">
                    WandaHost AI: Deploying your next node...
                  </span>
                  <span className="text-xs text-slate-400 font-mono">10:42 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 w-3/4 rounded-full" />
                  </div>
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Three Jewel-Toned Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/60 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <Badge variant="brand" size="sm">
                New!
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              High-Performance Infrastructure
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Pure PCIe Gen 5 NVMe storage and dedicated AMD EPYC™ cores optimized for sub-second page loads.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/60 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <Badge variant="cyan" size="sm">
                AI Powered
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Global AI Optimization
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Dynamic auto-scaling, intelligent resource routing, and automated WhatsApp lead acquisition agents.
            </p>
          </div>

          <div className="p-6 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/60 shadow-luminous shadow-luminous-hover transition-all backdrop-blur-xl group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <Badge variant="emerald" size="sm">
                99.99% SLA
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Unmatched Scalability
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Grow seamlessly from starter websites to multi-node enterprise Kubernetes clusters with zero migration hurdles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
