"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import { teaserPlans } from "@/data/pricing";
import { formatCurrency } from "@/lib/utils";
import {
  Check,
  Shield,
  Zap,
  HardDrive,
  Globe,
  Clock,
  ArrowRight,
  Sparkles,
  Server,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function HostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const faqs = [
    {
      question: "What is NVMe Web Hosting and why is it faster?",
      answer:
        "NVMe (Non-Volatile Memory Express) SSDs communicate directly with system CPUs through PCIe lanes. This delivers up to 6x faster read/write throughput and 3x lower latency compared to traditional SATA SSDs, resulting in significantly faster page loading speeds.",
    },
    {
      question: "Can I migrate my existing site to WandaHost for free?",
      answer:
        "Yes! Our migration team provides free, white-glove site migration for all cPanel accounts. Simply submit your current cPanel credentials after signup and we will transfer your site, databases, and emails with zero downtime.",
    },
    {
      question: "Are free SSL certificates and automated backups included?",
      answer:
        "Every domain hosted on WandaHost receives automated, free Let's Encrypt Wildcard SSL certificates. We also run automated daily snapshots with 1-click restoration from your dashboard.",
    },
    {
      question: "Can I upgrade my plan as my business expands?",
      answer:
        "Yes, you can upgrade instantly with 1-click between Launch, Grow, and Scale without downtime or data changes. You only pay the prorated price difference.",
    },
    {
      question: "What is the 30-Day Money-Back Guarantee?",
      answer:
        "If you are not 100% satisfied with our hosting speed and service within 30 days of registration, we will issue a full refund on your hosting fees—no questions asked.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Page Header */}
      <PageHeader
        badge="High-Speed Web Hosting"
        badgeVariant="brand"
        title="Web Hosting Powered by"
        highlightedTitle="Enterprise NVMe"
        description="Launch your websites on high-performance cloud servers with cPanel control, free SSL certificates, automated daily snapshots, and 24/7 human technical assistance."
        breadcrumbs={[{ label: "Hosting", href: "/hosting" }, { label: "Shared Hosting" }]}
      >
        <Button href="#plans" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View Hosting Plans
        </Button>
        <Button href="/contact?topic=migration" variant="outline" size="lg">
          Free Migration Assistance
        </Button>
      </PageHeader>

      {/* 2. Billing Cycle Toggle & Plans */}
      <section id="plans" className="py-20 bg-background relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Choose the Perfect Hosting Tier
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Transparent pricing with no hidden renewal penalties. Cancel or switch anytime.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-muted border border-surface-border">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "btn-primary shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  billingCycle === "yearly"
                    ? "btn-primary shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {teaserPlans.map((plan) => {
              const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <GlowCard
                  key={plan.id}
                  highlight={plan.isPopular}
                  glowColor={plan.isPopular ? "indigo" : "cyan"}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      {plan.badge && (
                        <Badge variant={plan.isPopular ? "brand" : "surface"} size="sm">
                          {plan.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 min-h-[34px]">
                      {plan.description}
                    </p>

                    <div className="mt-6 pb-6 border-b border-surface-border">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono">
                          {formatCurrency(price)}
                        </span>
                        <span className="text-xs text-slate-500">/month</span>
                      </div>
                      <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                        {billingCycle === "yearly"
                          ? `Billed ${formatCurrency(price * 12)} annually`
                          : "Billed monthly"}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-surface-border">
                    <Button
                      href={`/contact?plan=${plan.id}&cycle=${billingCycle}`}
                      variant={plan.isPopular ? "glow" : "secondary"}
                      className="w-full"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Core Technical Pillars */}
      <section className="py-20 border-t border-surface-border bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="cyan" size="md">
              Architecture & Reliability
            </Badge>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight">
              Engineered for Speed, Stability & Security
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Every hosting account runs on enterprise-grade hypervisors with isolated resource limits and hardware redundancy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "LiteSpeed Web Server",
                desc: "Up to 5x faster dynamic content delivery with integrated LSCache and HTTP/3 support.",
              },
              {
                icon: HardDrive,
                title: "Pure NVMe SSD Storage",
                desc: "High IOPS enterprise solid-state drives in RAID-10 for instantaneous database response.",
              },
              {
                icon: Shield,
                title: "Built-In DDoS Mitigation",
                desc: "Continuous perimeter scrubbing protects your site against volumetric L3/L4 and L7 attacks.",
              },
              {
                icon: Clock,
                title: "Automated Daily Backups",
                desc: "Offsite backup snapshots taken daily with simple 1-click file, mailbox, or database restoration.",
              },
              {
                icon: Lock,
                title: "Free Wildcard SSL",
                desc: "Automated issuance and renewal of SSL/TLS certificates for your root and all subdomains.",
              },
              {
                icon: Globe,
                title: "Global DNS Anycast",
                desc: "Lightning-fast authoritative DNS resolution distributed over our global point-of-presence network.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 shadow-sm dark:shadow-none space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center border border-brand-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-20 border-t border-surface-border bg-background">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Detailed Plan Feature Comparison
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Compare features across Launch, Grow, and Scale tiers.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-border overflow-hidden bg-white dark:bg-surface-elevated/30 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-surface-border bg-surface-muted/60">
                    <th className="p-4 font-bold text-foreground">Feature</th>
                    <th className="p-4 font-bold text-foreground text-center">Launch</th>
                    <th className="p-4 font-bold text-brand-600 dark:text-brand-400 text-center">Grow (Popular)</th>
                    <th className="p-4 font-bold text-foreground text-center">Scale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border/60">
                  {[
                    { feat: "Websites Hosted", launch: "1", grow: "Up to 10", scale: "Unlimited" },
                    { feat: "NVMe Storage", launch: "20 GB", grow: "60 GB", scale: "150 GB" },
                    { feat: "Monthly Bandwidth", launch: "Unmetered", grow: "Unmetered", scale: "Unmetered" },
                    { feat: "cPanel Dashboard", launch: "Yes", grow: "Yes", scale: "Yes" },
                    { feat: "Free SSL Certificates", launch: "Yes", grow: "Yes", scale: "Yes" },
                    { feat: "Business Email Mailboxes", launch: "5 Accounts", grow: "Unlimited", scale: "Unlimited" },
                    { feat: "Automated Daily Backups", launch: "Yes (7 days)", grow: "Yes (30 days)", scale: "Yes (60 days + hourly)" },
                    { feat: "Redis Cache Acceleration", launch: "No", grow: "Included", scale: "Dedicated Instance" },
                    { feat: "Staging Environments", launch: "No", grow: "1-Click", scale: "Multi-Environment" },
                    { feat: "Technical Support", launch: "24/7 Standard", grow: "24/7 Priority", scale: "Dedicated Engineer" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-surface-muted/30 transition-colors">
                      <td className="p-4 font-medium text-slate-800 dark:text-slate-200">{row.feat}</td>
                      <td className="p-4 text-center text-slate-600 dark:text-slate-400">{row.launch}</td>
                      <td className="p-4 text-center font-semibold text-brand-600 dark:text-brand-400">{row.grow}</td>
                      <td className="p-4 text-center text-slate-600 dark:text-slate-400">{row.scale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <FaqSection items={faqs} />

      {/* 6. Bottom CTA Strip */}
      <section className="py-16 bg-surface-muted/50 border-t border-surface-border text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Need custom server configurations or specialized assistance?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Talk to our infrastructure engineering team. We are ready to craft a tailor-made hosting environment.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href="/contact" variant="primary" size="md">
              Speak with an Engineer
            </Button>
            <Button href="/vps" variant="outline" size="md">
              Explore VPS Hosting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
