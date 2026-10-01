import React from "react";
import { Zap, ShieldCheck, DatabaseBackup, Headphones } from "lucide-react";

export function TrustStrip() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast infrastructure",
      description: "Low-latency NVMe arrays, optimized caching engines, and redundant networking.",
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Managed security",
      description: "Layer 7 web application firewall, real-time malware isolation, and SSL hardening.",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: DatabaseBackup,
      title: "Automated backups",
      description: "Encrypted daily snapshots with rapid 1-click restoration for files and databases.",
      color: "text-brand-400 bg-brand-500/10 border-brand-500/20",
    },
    {
      icon: Headphones,
      title: "Human support",
      description: "Direct assistance from systems and cloud engineers who understand real infrastructure.",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
  ];

  return (
    <div className="w-full py-12 border-y border-surface-border bg-surface/30 backdrop-blur-sm">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-surface-muted/30 border border-surface-border/60 hover:border-slate-700 transition-colors"
              >
                <div
                  className={`p-2.5 rounded-xl border shrink-0 ${b.color}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
