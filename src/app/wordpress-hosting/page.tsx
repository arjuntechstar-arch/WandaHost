"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import { formatCurrency } from "@/lib/utils";
import {
  Check,
  Zap,
  Shield,
  Layers,
  RefreshCw,
  GitBranch,
  ArrowRight,
  Server,
  Sparkles,
} from "lucide-react";

export default function WordPressHostingPage() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("yearly");
  const [cacheEnabled, setCacheEnabled] = useState(true);

  const wpPlans = [
    {
      id: "wp-starter",
      name: "WP Starter",
      tagline: "For blogs, creators, and new businesses",
      monthlyPrice: 6.99,
      yearlyPrice: 5.49,
      storage: "30 GB NVMe",
      sites: "1 WordPress Site",
      features: [
        "1 Managed WordPress Installation",
        "30 GB Enterprise NVMe Storage",
        "Free Wildcard SSL Certificate",
        "Pre-configured LiteSpeed Caching",
        "Automated daily cloud backups",
        "Automated core & plugin updates",
        "Free WP white-glove site migration",
      ],
      isPopular: false,
      ctaText: "Get WP Starter",
    },
    {
      id: "wp-pro",
      name: "WP Professional",
      tagline: "For e-commerce, WooCommerce & busy agencies",
      monthlyPrice: 12.99,
      yearlyPrice: 9.99,
      storage: "80 GB NVMe",
      sites: "Up to 5 WordPress Sites",
      features: [
        "Up to 5 WordPress Installations",
        "80 GB Enterprise NVMe Storage",
        "Redis Object Cache Acceleration",
        "1-Click Staging & Cloning environment",
        "Smart plugin auto-updates with rollback",
        "WooCommerce optimized database parameters",
        "WP-CLI & SSH developer access",
        "24/7 Priority WordPress technical support",
      ],
      isPopular: true,
      badge: "Most Popular",
      ctaText: "Get WP Professional",
    },
    {
      id: "wp-agency",
      name: "WP Agency Scale",
      tagline: "For multi-site agencies and high-traffic publishers",
      monthlyPrice: 24.99,
      yearlyPrice: 19.99,
      storage: "180 GB NVMe",
      sites: "Up to 20 WordPress Sites",
      features: [
        "Up to 20 WordPress Installations",
        "180 GB Enterprise NVMe Storage",
        "Dedicated Redis memory instance",
        "Multi-environment dev / staging / prod",
        "Git repository deployment webhooks",
        "Proactive malware scan & live quarantine",
        "Daily & on-demand hourly backups",
        "Direct WordPress lead architect access",
      ],
      isPopular: false,
      ctaText: "Get WP Agency",
    },
  ];

  const wpFaqs = [
    {
      question: "What makes Managed WordPress different from normal Shared Hosting?",
      answer:
        "Managed WordPress is tuned specifically for the PHP and MySQL workload of WordPress. It includes server-side LiteSpeed and Redis object caching, automated WordPress core and plugin security patches, 1-click staging environments, and support engineers who specialize specifically in WordPress troubleshooting.",
    },
    {
      question: "How does the 1-Click Staging environment work?",
      answer:
        "With one click from your control panel, WandaHost clones your live WordPress website and database to a private sandbox URL. You can safely test plugins, major theme updates, or custom code, and then push changes back to production when you are satisfied.",
    },
    {
      question: "Can I host WooCommerce online stores?",
      answer:
        "Yes! Our WP Professional and Agency tiers are engineered for WooCommerce. They feature high PHP worker allocations, Redis object caching to speed up dynamic checkout calls, and isolated database pools.",
    },
    {
      question: "Do you automatically update my WordPress plugins and core?",
      answer:
        "Yes, our smart update engine checks for new releases and tests update stability before applying them. If an update triggers an error, our system automatically restores the pre-update snapshot seamlessly.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="Optimized WordPress Cloud"
        badgeVariant="cyan"
        title="Managed WordPress Hosting Engineered for"
        highlightedTitle="Pure Speed"
        description="Experience up to 5x faster page loads with server-level LiteSpeed caching, Redis object acceleration, automated security patching, and 1-click staging environments."
        breadcrumbs={[{ label: "Hosting", href: "/hosting" }, { label: "WordPress Hosting" }]}
      >
        <Button href="#plans" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View WordPress Plans
        </Button>
        <Button href="/contact?topic=wp-migration" variant="outline" size="lg">
          Request Free Migration
        </Button>
      </PageHeader>

      {/* Interactive TTFB & Speed Benchmark Section */}
      <section className="py-16 bg-surface/30 border-b border-surface-border">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="emerald" size="sm">
              Performance Benchmark
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
              Time To First Byte (TTFB) & Concurrency
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Toggle our LiteSpeed + Redis acceleration layer below to preview the architectural performance impact.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 p-1.5 rounded-full bg-white dark:bg-surface-elevated border border-surface-border shadow-sm">
              <button
                onClick={() => setCacheEnabled(true)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  cacheEnabled ? "btn-primary text-white shadow-sm" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-yellow-300" />
                <span>LiteSpeed + Redis (Active)</span>
              </button>
              <button
                onClick={() => setCacheEnabled(false)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  !cacheEnabled ? "btn-primary text-white shadow-sm" : "text-slate-600 dark:text-slate-400"
                }`}
              >
                <span>Uncached Apache Stack</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-sm text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Time To First Byte (TTFB)
              </div>
              <div className={`text-4xl font-black font-mono tabular-nums transition-colors ${cacheEnabled ? "text-emerald-500" : "text-amber-500"}`}>
                {cacheEnabled ? "142 ms" : "1,840 ms"}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {cacheEnabled ? "⚡ Sub-second response (13x Faster)" : "⚠️ High database queue delay"}
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-sm text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Concurrent Visitors Supported
              </div>
              <div className={`text-4xl font-black font-mono tabular-nums transition-colors ${cacheEnabled ? "text-cyan-500" : "text-slate-500"}`}>
                {cacheEnabled ? "1,250 req/s" : "48 req/s"}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {cacheEnabled ? "🚀 26x Traffic Surge Handling" : "⚠️ Frequent 504 gateway timeouts"}
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-sm text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Core Web Vitals Score
              </div>
              <div className={`text-4xl font-black font-mono tabular-nums transition-colors ${cacheEnabled ? "text-emerald-500" : "text-rose-500"}`}>
                {cacheEnabled ? "99 / 100" : "58 / 100"}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                {cacheEnabled ? "🏆 Google Mobile Indexing Ready" : "⚠️ Penalized in search ranking"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-background relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Select Your Managed WordPress Plan
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Zero setup fees. Free white-glove site migration included with every plan.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-muted border border-surface-border">
              <button
                onClick={() => setCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  cycle === "monthly" ? "btn-primary shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setCycle("yearly")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  cycle === "yearly" ? "btn-primary shadow-sm" : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                <span>Yearly</span>
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {wpPlans.map((plan) => {
              const price = cycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <GlowCard
                  key={plan.id}
                  highlight={plan.isPopular}
                  glowColor="cyan"
                  className="flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      {plan.badge && (
                        <Badge variant="cyan" size="sm">
                          {plan.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 min-h-[34px]">
                      {plan.tagline}
                    </p>

                    <div className="mt-6 pb-6 border-b border-surface-border">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono tabular-nums">
                          {formatCurrency(price)}
                        </span>
                        <span className="text-xs text-slate-500">/month</span>
                      </div>
                      <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium mt-1 font-mono tabular-nums">
                        {cycle === "yearly" ? `Billed ${formatCurrency(price * 12)} annually` : "Billed monthly"}
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
                      href={`/contact?plan=${plan.id}&cycle=${cycle}`}
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

      {/* Feature Pillars */}
      <section className="py-20 border-t border-surface-border bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="brand" size="md">
              Developer & Publisher Superpowers
            </Badge>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground tracking-tight">
              Designed for High-Converting WordPress Sites
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Everything WordPress creators, agencies, and e-commerce stores need to deliver seamless visitor experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "LiteSpeed & Redis Caching",
                desc: "Server-level caching eliminates PHP execution bottlenecks, serving cached pages directly from memory in milliseconds.",
              },
              {
                icon: Layers,
                title: "1-Click Staging & Cloning",
                desc: "Safely test plugins, themes, and custom PHP code in an isolated clone before syncing live with zero downtime.",
              },
              {
                icon: RefreshCw,
                title: "Smart Patch Management",
                desc: "Automated vulnerability patching for core and popular plugins with automated pre-update snapshot rollbacks.",
              },
              {
                icon: Shield,
                title: "Dedicated Malware Isolation",
                desc: "Continuous file scanning identifies compromised scripts and isolates malicious code before it impacts visitors.",
              },
              {
                icon: GitBranch,
                title: "Developer Tools (WP-CLI, Git)",
                desc: "Full terminal SSH access, WP-CLI automation, Git push-to-deploy hooks, and customizable PHP versions.",
              },
              {
                icon: Server,
                title: "WooCommerce Optimization",
                desc: "Custom database index tuning and uncapped memory limits built to handle concurrent shopping cart checkouts.",
              },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 shadow-sm dark:shadow-none space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{f.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={wpFaqs} title="WordPress Hosting FAQs" />

      {/* Bottom CTA */}
      <section className="py-16 bg-surface-muted/50 border-t border-surface-border text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Have an existing WordPress site you want migrated?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Our WordPress specialists will transfer your site, databases, and mailboxes with zero downtime.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href="/contact?topic=wp-migration" variant="primary" size="md">
              Request Free Migration
            </Button>
            <Button href="/hosting" variant="outline" size="md">
              View All Hosting
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
