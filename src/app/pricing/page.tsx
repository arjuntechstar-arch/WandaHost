"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  categorizedPricing,
  pricingAddOns,
  calculatePrice,
} from "@/data/pricing";
import { PricingCategoryMatrix } from "@/types/pricing";
import {
  CheckCircle2,
  Server,
  Layers,
  Cpu,
  HardDrive,
  Mail,
  Sparkles,
  Users,
  Shield,
  ArrowRight,
  Plus,
  Check,
} from "lucide-react";

interface CategoryTab {
  id: keyof PricingCategoryMatrix;
  label: string;
  icon: React.ReactNode;
}

const categories: CategoryTab[] = [
  { id: "hosting", label: "Web Hosting", icon: <Server className="w-4 h-4" /> },
  { id: "wordpress", label: "Managed WordPress", icon: <Layers className="w-4 h-4" /> },
  { id: "dotnet", label: ".NET Specialist", icon: <Cpu className="w-4 h-4" /> },
  { id: "vps", label: "Cloud VPS", icon: <HardDrive className="w-4 h-4" /> },
  { id: "email", label: "Business Email", icon: <Mail className="w-4 h-4" /> },
  { id: "reseller", label: "Reseller Hosting", icon: <Users className="w-4 h-4" /> },
  { id: "ai", label: "AI Solutions", icon: <Sparkles className="w-4 h-4" /> },
];

const faqs = [
  {
    question: "Do your prices renew at a higher rate like other hosting providers?",
    answer:
      "No! At WandaHost we believe in transparent, honest pricing. Your renewal rate is guaranteed to remain predictable with no surprise 300% renewal spikes.",
  },
  {
    question: "What is your 30-Day Money-Back Guarantee?",
    answer:
      "If you are not completely satisfied with our performance or support within your first 30 days of service, we will refund your hosting fees in full — no questions asked.",
  },
  {
    question: "Can I switch billing cycles or upgrade my plan later?",
    answer:
      "Yes. You can switch from monthly to annual billing or upgrade to higher compute tiers at any time directly through your WandaHost portal. Prorated credits are applied automatically.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Wire Transfers for enterprise accounts.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [activeCategory, setActiveCategory] = useState<keyof PricingCategoryMatrix>("hosting");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const plans = categorizedPricing[activeCategory] || categorizedPricing.hosting;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const addOn = pricingAddOns.find((a) => a.id === id);
    if (!addOn) return sum;
    return sum + (billingCycle === "yearly" ? addOn.yearlyPrice : addOn.monthlyPrice);
  }, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Pricing" }]}
        badge="Simple & Transparent"
        badgeVariant="emerald"
        title="Predictable Pricing,"
        highlightedTitle="Zero Hidden Fees"
        description="Every WandaHost plan includes high-speed NVMe storage, free SSL, automated daily backups, and 24/7 human technical support."
      >
        {/* Billing Toggle */}
        <div className="mt-4 inline-flex items-center p-1.5 rounded-full border border-surface-border bg-white dark:bg-surface-elevated shadow-sm">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              billingCycle === "monthly"
                ? "btn-primary text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-foreground"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              billingCycle === "yearly"
                ? "btn-primary text-white shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-foreground"
            }`}
          >
            <span>Annual Billing</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                billingCycle === "yearly"
                  ? "bg-white/25 text-white"
                  : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              }`}
            >
              SAVE 20%
            </span>
          </button>
        </div>
      </PageHeader>

      {/* Category Tabs */}
      <section className="py-8 border-b border-surface-border bg-surface/30 sticky top-20 z-30 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  activeCategory === cat.id
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-400 hover:text-foreground hover:border-slate-400"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => {
              const pricing = calculatePrice(plan.monthlyPrice, plan.yearlyPrice, billingCycle);
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl border transition-all duration-300 relative flex flex-col p-8 ${
                    plan.isPopular
                      ? "border-brand-500 ring-2 ring-brand-500/20 bg-white dark:bg-surface-elevated shadow-xl"
                      : "border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-slate-400 dark:hover:border-slate-600 shadow-md"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge variant={plan.isPopular ? "brand" : "cyan"} size="md">
                        {plan.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground font-mono tabular-nums">
                      ${pricing.perMonthEquivalent.toFixed(2)}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">/ month</span>
                  </div>

                  {billingCycle === "yearly" && (
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-6 font-mono tabular-nums">
                      Billed annually at ${pricing.billedAmount.toFixed(2)}/yr
                    </div>
                  )}

                  <div className="p-3.5 rounded-2xl bg-surface/60 border border-surface-border mb-6 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Storage:</span>
                      <span className="font-bold text-foreground font-mono tabular-nums">{plan.storage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Bandwidth:</span>
                      <span className="font-bold text-foreground font-mono tabular-nums">{plan.bandwidth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">SSL Certificate:</span>
                      <span className="font-bold text-foreground">{plan.ssl}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-xs sm:text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={plan.ctaHref}
                    variant={plan.isPopular ? "glow" : "outline"}
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sticky-Header Comprehensive Feature Comparison Matrix */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="brand" size="md">
              Detailed Breakdown
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2">
              Comprehensive Feature Matrix
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Compare architectural limits, memory tiers, caching layers, and backup frequencies side-by-side.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                {/* Sticky Header */}
                <thead className="sticky top-20 z-20 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-surface-border shadow-sm">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold text-slate-500 uppercase tracking-wider w-1/3">
                      Platform Capability
                    </th>
                    <th className="p-4 sm:p-5 font-extrabold text-foreground text-center">
                      Starter Tier
                    </th>
                    <th className="p-4 sm:p-5 font-extrabold text-brand-600 dark:text-brand-400 text-center bg-brand-500/5">
                      Professional
                    </th>
                    <th className="p-4 sm:p-5 font-extrabold text-cyan-600 dark:text-cyan-400 text-center">
                      Enterprise Cluster
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {[
                    { feature: "PCIe Gen 5 NVMe Storage", starter: "30 GB", pro: "80 GB", enterprise: "300 GB" },
                    { feature: "Dedicated RAM Allocation", starter: "2 GB", pro: "4 GB", enterprise: "16 GB" },
                    { feature: "vCPU Core Guarantee", starter: "1 Dedicated", pro: "2 Dedicated", enterprise: "8 Dedicated" },
                    { feature: "SSL Security Tier", starter: "Auto Let's Encrypt", pro: "Wildcard Auto-Renew", enterprise: "Custom OV/EV & HSTS" },
                    { feature: "LiteSpeed & Redis Caching", starter: "Native LSCache", pro: "LSCache + Dedicated Redis", enterprise: "Uncapped Redis Cluster" },
                    { feature: "Cloud Backup Frequency", starter: "Daily (7-Day Vault)", pro: "Daily + On-Demand (30-Day)", enterprise: "Hourly Continuous Snapshots" },
                    { feature: "Staging Environments", starter: "1-Click Clone", pro: "Unlimited Staging Slots", enterprise: "Git-Branch Auto-Deploy" },
                    { feature: "Perimeter DDoS Protection", starter: "1.5+ Tbps Filter", pro: "1.5+ Tbps Filter", enterprise: "Dedicated L7 Custom WAF" },
                    { feature: "Support SLA", starter: "24/7 Standard", pro: "15-Min Response SLA", enterprise: "Named Lead Architect" },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-transparent" : "bg-surface/30"}
                    >
                      <td className="p-4 sm:p-5 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-600 dark:text-slate-300 font-mono tabular-nums">
                        {row.starter}
                      </td>
                      <td className="p-4 sm:p-5 text-center font-bold text-brand-600 dark:text-brand-400 bg-brand-500/5 font-mono tabular-nums">
                        {row.pro}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-slate-700 dark:text-slate-200 font-semibold font-mono tabular-nums">
                        {row.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Calculator */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Optional Infrastructure Add-Ons
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Customize your server configuration with optional dedicated IP addresses, backup vaults, or advanced WAF.
            </p>
          </div>

          <div className="space-y-3">
            {pricingAddOns.map((addOn) => {
              const isSelected = selectedAddOns.includes(addOn.id);
              const price = billingCycle === "yearly" ? addOn.yearlyPrice : addOn.monthlyPrice;
              return (
                <div
                  key={addOn.id}
                  onClick={() => toggleAddOn(addOn.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? "border-brand-500 bg-brand-500/10 ring-2 ring-brand-500/20"
                      : "border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-slate-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-colors ${
                        isSelected
                          ? "bg-brand-500 border-brand-500 text-white"
                          : "border-surface-border bg-surface"
                      }`}
                    >
                      {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4 text-slate-400" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{addOn.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {addOn.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold text-foreground text-base font-mono tabular-nums">${price.toFixed(2)}</div>
                    <div className="text-[11px] text-slate-500">/ mo</div>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedAddOns.length > 0 && (
            <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{selectedAddOns.length} Add-On(s) selected</span>
                <span className="text-slate-400 font-normal">|</span>
                <span className="font-mono tabular-nums">+${addOnsTotal.toFixed(2)}/mo additional</span>
              </div>
              <Button href="/hosting" variant="glow" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Apply to Configuration
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />
    </div>
  );
}
