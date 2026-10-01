import React from "react";
import Link from "next/link";
import { businessServices } from "@/data/products";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Globe,
  ShieldCheck,
  DatabaseBackup,
  Activity,
  MessageSquareCode,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Globe,
  ShieldCheck,
  DatabaseBackup,
  Activity,
  MessageSquareCode,
};

export function BusinessServicesSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <Badge variant="brand" size="md">
            Comprehensive Digital Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            More than hosting
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything your business requires to communicate reliably, guard against security breaches, and preserve business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessServices.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <GlowCard key={service.id} className="flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:bg-cyan-500/10 border border-brand-500/20 flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
