"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { motion } from "framer-motion";
import {
  GitBranch,
  Hammer,
  CheckCircle,
  UploadCloud,
  Server,
  Activity,
  ArrowRight,
  Database,
  Layers,
  Cpu,
} from "lucide-react";

const pipelineStages = [
  { step: "1", title: "GitHub Push", subtitle: "git push origin main", icon: GitBranch },
  { step: "2", title: "dotnet build", subtitle: "Release -c -o ./out", icon: Hammer },
  { step: "3", title: "Unit Tests", subtitle: "dotnet test --logger", icon: CheckCircle },
  { step: "4", title: "Zero Downtime", subtitle: "Shadow Copy Deploy", icon: UploadCloud },
  { step: "5", title: "IIS 10 Pool", subtitle: "Isolated App Pool", icon: Server },
  { step: "6", title: "Health Monitor", subtitle: "Active Telemetry", icon: Activity },
];

export function DotNetSection() {
  return (
    <section className="py-24 bg-surface/40 border-y border-surface-border relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Positioning */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="brand" size="md">
                Technical Differentiator
              </Badge>
              <span className="text-xs text-brand-700 dark:text-brand-300 font-mono">
                ASP.NET Core • .NET 8/9 • IIS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Built for modern .NET applications
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Deploy ASP.NET and .NET applications with managed Windows/IIS infrastructure, dedicated MS SQL Server databases, SSL, automated backups and 24/7 monitoring.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Modern Runtimes
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Full compatibility with .NET 8, .NET 9, and legacy .NET Framework 4.8.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-muted/60 border border-surface-border">
                <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 mb-1">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Dedicated SQL
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Microsoft SQL Server Web, Standard, or Express with automated snapshots.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                href="/dotnet-hosting"
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore .NET Hosting
              </Button>
              <Button href="/contact?topic=dotnet" variant="outline" size="lg">
                Talk to .NET Architect
              </Button>
            </div>
          </div>

          {/* Right Column: Animated CI/CD Pipeline Visualizer */}
          <div className="lg:col-span-6">
            <GlowCard glowColor="indigo" className="p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-foreground">
                    Automated Continuous Deployment Pipeline
                  </span>
                </div>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono">Status: Live</span>
              </div>

              {/* 6 Pipeline Stages */}
              <div className="space-y-3">
                {pipelineStages.map((stage, idx) => {
                  const Icon = stage.icon;
                  return (
                    <div
                      key={stage.title}
                      className="relative p-3 rounded-xl bg-surface-muted/50 border border-surface-border/80 flex items-center justify-between hover:border-slate-600 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-mono font-bold text-xs border border-brand-500/20 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-foreground">
                              {stage.title}
                            </span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                              Step 0{stage.step}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5">
                            {stage.subtitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 dark:text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <CheckCircle className="w-3 h-3" />
                        <span>PASSED</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal Pipeline Log Preview */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-surface-border/80 font-mono text-[11px] text-slate-400 preserve-dark">
                <div className="text-emerald-400">$ dotnet publish -c Release</div>
                <div className="text-slate-400">Restoring dependencies... [OK]</div>
                <div className="text-cyan-400">Deployed to IIS: PID 4821 with zero worker disruption.</div>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
