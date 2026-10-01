"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Users,
  Shield,
  Layers,
  TrendingUp,
  DollarSign,
  CheckCircle2,
  Settings,
  HardDrive,
  Globe2,
  ArrowRight,
  Server,
  Zap,
} from "lucide-react";

interface ResellerTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  accounts: number;
  nvmeGb: number;
  bandwidthTb: number;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
}

const resellerTiers: ResellerTier[] = [
  {
    id: "reseller-25",
    name: "Partner 25",
    badge: "Solo Agencies",
    accounts: 25,
    nvmeGb: 100,
    bandwidthTb: 2,
    monthlyPrice: 24.99,
    yearlyPrice: 19.99,
    features: [
      "Up to 25 isolated cPanel accounts",
      "100 GB High-Speed NVMe Storage",
      "2 TB High-Speed Bandwidth",
      "Full WHM (Web Host Manager) Root",
      "100% Unbranded White-Label",
      "Custom Private Nameservers",
      "Free Let's Encrypt SSL for all clients",
      "Automated Daily Offsite Backups",
    ],
  },
  {
    id: "reseller-50",
    name: "Partner 50",
    badge: "Most Popular",
    isPopular: true,
    accounts: 50,
    nvmeGb: 200,
    bandwidthTb: 4,
    monthlyPrice: 44.99,
    yearlyPrice: 35.99,
    features: [
      "Up to 50 isolated cPanel accounts",
      "200 GB Enterprise NVMe Storage",
      "4 TB High-Speed Bandwidth",
      "Overselling Enabled (Maximize Profits)",
      "Free WHMCS or Blesta Billing License",
      "Custom Private Nameservers (ns1/ns2)",
      "White-Glove Free Migration (Up to 25 sites)",
      "Priority VIP Agency Support Queue",
    ],
  },
  {
    id: "reseller-100",
    name: "Partner 100",
    badge: "Scale & Dev Shops",
    accounts: 100,
    nvmeGb: 400,
    bandwidthTb: 8,
    monthlyPrice: 89.99,
    yearlyPrice: 71.99,
    features: [
      "Up to 100 isolated cPanel accounts",
      "400 GB Enterprise NVMe Storage",
      "8 TB High-Speed Bandwidth",
      "Dedicated IPv4 for your nameservers",
      "Custom Client Webmail & cPanel URLs",
      "Full Redis Object Cache on every account",
      "Dedicated Account Manager & Architect",
      "Unlimited Free Client Migrations",
    ],
  },
];

const faqs = [
  {
    question: "Can my clients tell that WandaHost is the underlying provider?",
    answer:
      "No. Our reseller platform is 100% white-labeled. You brand your own cPanel portals, webmail logins, and custom nameservers (e.g. ns1.youragency.com). WandaHost branding never appears anywhere in your client accounts or emails.",
  },
  {
    question: "What is 'Overselling' and is it enabled?",
    answer:
      "Yes, overselling is fully enabled on all Partner plans! This means you can allocate more disk space and bandwidth to client packages than your plan total, as long as actual usage doesn't exceed your account limits. This allows agencies to maximize profit margins significantly.",
  },
  {
    question: "How do I bill my clients for hosting?",
    answer:
      "You have complete freedom to charge whatever pricing you wish. You can bill manually, or integrate with automated billing platforms like WHMCS, Blesta, or ClientExec using standard WHM API keys.",
  },
  {
    question: "Will you help migrate my existing clients to WandaHost?",
    answer:
      "Yes! Our migration team will migrate your client cPanel accounts from your old hosting provider with zero downtime, completely free of charge.",
  },
];

export default function ResellerHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  // Profit Margin Calculator state
  const [clientCount, setClientCount] = useState(25);
  const [clientPrice, setClientPrice] = useState(25); // e.g. $25/mo per client

  // Determine needed plan
  const matchedPlan =
    clientCount <= 25
      ? resellerTiers[0]
      : clientCount <= 50
      ? resellerTiers[1]
      : resellerTiers[2];

  const planCost = billingCycle === "yearly" ? matchedPlan.yearlyPrice : matchedPlan.monthlyPrice;
  const grossMonthlyRevenue = clientCount * clientPrice;
  const netMonthlyProfit = grossMonthlyRevenue - planCost;
  const annualProfit = netMonthlyProfit * 12;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Hosting", href: "/hosting" }, { label: "Reseller Hosting" }]}
        badge="Agency Growth Engine"
        badgeVariant="emerald"
        title="White-Label Hosting for"
        highlightedTitle="Agencies & Developers"
        description="Launch your own hosting brand or manage client sites under one intuitive master console. 100% unbranded cPanel, WHM root, private nameservers, and generous profit margins."
      >
        <Button href="#pricing" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View Reseller Plans
        </Button>
        <Button href="#calculator" variant="outline" size="lg" rightIcon={<TrendingUp className="w-4 h-4" />}>
          Calculate Agency Profits
        </Button>
      </PageHeader>

      {/* Profit Calculator Section */}
      <section id="calculator" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Agency Revenue Calculator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              See How Much Your Agency Can Earn
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Bundle hosting into your monthly client retainers. See your monthly and annual recurring revenue (ARR).
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-foreground">Number of Active Clients</span>
                  <span className="text-lg font-extrabold text-brand-600 dark:text-brand-400">
                    {clientCount} Clients
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={100}
                  step={5}
                  value={clientCount}
                  onChange={(e) => setClientCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  <span>5 clients</span>
                  <span>50 clients</span>
                  <span>100 clients</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-foreground">Monthly Price Charged Per Client</span>
                  <span className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400">
                    ${clientPrice} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={75}
                  step={5}
                  value={clientPrice}
                  onChange={(e) => setClientPrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                  <span>$10/mo (Basic)</span>
                  <span>$25/mo (Standard)</span>
                  <span>$75/mo (Care Plan)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-surface/50 border border-surface-border text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <p>
                  <strong className="text-foreground">Recommended WandaHost Tier:</strong>{" "}
                  {matchedPlan.name} (${planCost}/mo)
                </p>
                <p>
                  Includes {matchedPlan.nvmeGb} GB NVMe storage & {matchedPlan.bandwidthTb} TB bandwidth.
                </p>
              </div>
            </div>

            {/* Calculations Box */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-600/10 via-brand-600/10 to-cyan-500/10 border border-emerald-500/30 text-center">
              <div className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                Estimated Net Agency Profit
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-foreground mt-2">
                ${netMonthlyProfit.toLocaleString()}
                <span className="text-xs text-slate-500 dark:text-slate-400 font-normal"> / month</span>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-border/60 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Gross Client Revenue:</span>
                  <span className="font-bold text-foreground">${grossMonthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">WandaHost Plan Cost:</span>
                  <span className="font-bold text-rose-500">-${planCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-surface-border/40 text-emerald-600 dark:text-emerald-400 font-bold">
                  <span>Annual Recurring Profit:</span>
                  <span>${annualProfit.toLocaleString()}/yr</span>
                </div>
              </div>

              <div className="mt-6">
                <Button href={`#plan-${matchedPlan.id}`} variant="glow" size="md" className="w-full">
                  Start with {matchedPlan.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Flexible White-Label Reseller Plans
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Choose the capacity your agency requires. Upgrade anytime seamlessly as your client roster grows.
            </p>

            {/* Billing Toggle */}
            <div className="mt-6 inline-flex items-center p-1 rounded-full border border-surface-border bg-white dark:bg-surface-elevated shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "btn-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === "yearly"
                    ? "btn-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  20% OFF
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resellerTiers.map((tier) => {
              const currentPrice = billingCycle === "yearly" ? tier.yearlyPrice : tier.monthlyPrice;
              return (
                <div
                  key={tier.id}
                  id={`plan-${tier.id}`}
                  className={`rounded-3xl border transition-all duration-300 relative flex flex-col p-8 ${
                    tier.isPopular
                      ? "border-brand-500 ring-2 ring-brand-500/20 bg-white dark:bg-surface-elevated shadow-xl"
                      : "border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-slate-400 dark:hover:border-slate-600 shadow-md"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge variant={tier.isPopular ? "brand" : "cyan"} size="md">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground">{tier.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Up to {tier.accounts} client cPanel accounts
                    </p>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">${currentPrice}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">/ month</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-surface/60 border border-surface-border mb-6 text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">NVMe SSD:</span>
                      <span className="font-bold text-foreground">{tier.nvmeGb} GB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Bandwidth:</span>
                      <span className="font-bold text-foreground">{tier.bandwidthTb} TB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Control Panel:</span>
                      <span className="font-bold text-foreground">WHM + cPanel</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1 text-xs sm:text-sm">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={`/contact?topic=reseller-signup&plan=${tier.id}&billing=${billingCycle}`}
                    variant={tier.isPopular ? "glow" : "outline"}
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Select {tier.name}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Agency Pillars */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="brand" size="md">
              Agency Dedicated Tools
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Everything Your Agency Needs to Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Account Isolation</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Each client operates in their own sandboxed CloudLinux CageFS environment. A compromised script or traffic spike on one site will never affect another client.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Custom Private Nameservers</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Configure vanity nameservers like ns1.youragency.com and ns2.youragency.com. Provide a truly professional end-to-end agency brand identity for all clients.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Free Zero-Downtime Migrations</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Moving from another provider? Our senior server engineers will migrate all your client cPanel accounts, databases, and emails over for you completely free.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Ready to Turn Hosting into a Recurring Revenue Stream?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Join hundreds of digital agencies and freelance developers hosting their clients on WandaHost.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#pricing" variant="glow" size="lg">
            Start Reselling Today
          </Button>
          <Button href="/contact?topic=agency-partnership" variant="outline" size="lg">
            Schedule Agency Walkthrough
          </Button>
        </div>
      </section>
    </div>
  );
}
