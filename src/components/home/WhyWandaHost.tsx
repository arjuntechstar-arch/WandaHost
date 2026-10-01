import React from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import {
  Layers,
  Code2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "One technology partner",
    description: "Eliminate multiple disparate vendors. Domains, hosting, email, cloud infrastructure, and AI tools under one roof.",
  },
  {
    icon: Code2,
    title: "Developer-friendly",
    description: "Built for modern workflows with Git deployment webhooks, SSH/cPanel access, staging environments, and API readiness.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first",
    description: "Enterprise OWASP WAF rules, automated TLS/SSL renewals, malware isolation, and redundant offsite backup vaults.",
  },
  {
    icon: Zap,
    title: "Automation-first",
    description: "Automated provisioning, self-healing services, WhatsApp business notifications, and AI conversational workflows.",
  },
  {
    icon: TrendingUp,
    title: "Scalable infrastructure",
    description: "Start on affordable shared hosting and smoothly graduate to high-IOPS VPS or managed multi-zone cloud clusters.",
  },
  {
    icon: Headphones,
    title: "Practical human support",
    description: "No generic scripted replies. Talk directly to experienced infrastructure engineers who know servers inside and out.",
  },
];

export function WhyWandaHost() {
  return (
    <section className="py-24 bg-surface/30 border-y border-surface-border relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <Badge variant="brand" size="md">
            The WandaHost Advantage
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Why leading businesses build with WandaHost
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Engineered from day one to deliver dependability, performance, and clear technical communication without the gimmicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <GlowCard key={item.title} className="p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
