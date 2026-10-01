"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  Server,
  Zap,
  Users,
  Globe2,
  HeartHandshake,
  Cpu,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Active Websites & Apps", value: "15,000+" },
  { label: "Global Datacenters", value: "6 Regions" },
  { label: "Verified 90-Day Uptime", value: "99.994%" },
  { label: "Avg. Engineer Response", value: "< 8 Mins" },
];

const values = [
  {
    icon: <Cpu className="w-6 h-6 text-brand-500" />,
    title: "No Oversubscribed Hardware",
    desc: "Unlike budget hosts that cram thousands of accounts onto aging spinning-disk drives, we guarantee dedicated CPU cores and high-IOPS NVMe PCIe Gen 5 arrays.",
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-500" />,
    title: "Real Engineers, Not Script Readers",
    desc: "When you open a support ticket at 2 AM, you communicate directly with certified Linux sysadmins and .NET architects who can inspect server logs and fix root causes.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Zero Hidden Renewal Traps",
    desc: "We despise predatory marketing tactics that hook customers on $1 introductory rates and quietly bill $300 renewals. Our pricing is transparent and predictable.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
    title: "Independent & Self-Funded",
    desc: "We answer to our customers and engineers, not short-term private equity firms looking to cut support staff or downscale server specifications.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Company", href: "/about" }, { label: "About Us" }]}
        badge="Built by Sysadmins for Builders"
        badgeVariant="brand"
        title="We're Rebuilding Web Hosting"
        highlightedTitle="The Way It Should Be"
        description="Founded by veteran DevOps engineers, WandaHost delivers modern cloud infrastructure, cutting-edge NVMe hardware, and genuine human technical support."
      >
        <Button href="/hosting" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View Our Infrastructure
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Get in Touch With Our Team
        </Button>
      </PageHeader>

      {/* Stats Counter Bar */}
      <section className="py-12 border-b border-surface-border bg-surface/30">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4">
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-cyan-400 to-emerald-400">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <Badge variant="cyan" size="md">
              Our Journey
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Why We Started WandaHost
            </h2>
          </div>

          <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              In 2021, our founding team managed infrastructure for fast-growing digital agencies and software products. We tested virtually every major web host on the market and repeatedly ran into the same frustrating compromises: slow server response times (TTFB) during peak hours, outsourced tier-1 support that closed tickets without answers, and sudden multi-hundred-dollar renewal spikes.
            </p>
            <p>
              We realized that the hosting industry had become stagnant — dominated by corporate conglomerates that prioritize aggressive cost-cutting over performance and customer relationships.
            </p>
            <p>
              We built <strong>WandaHost</strong> as the antidote: an infrastructure provider that invests heavily in modern AMD EPYC silicon, enterprise PCIe Gen 5 NVMe storage, and 24/7 level-3 sysadmins who love solving challenging server issues.
            </p>
          </div>
        </div>
      </section>

      {/* Values Pillars */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Core Guiding Principles
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              The promises that drive every engineering decision and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <GlowCard key={i}>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-xl mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Experience the Difference Today
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Join thousands of developers, agencies, and businesses hosting with WandaHost. Risk-free for 30 days.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/hosting" variant="glow" size="lg">
            Get Started Risk-Free
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Speak to Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
