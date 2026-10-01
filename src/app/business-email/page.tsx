"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Mail,
  ShieldCheck,
  Smartphone,
  Calendar,
  Lock,
  CheckCircle2,
  Users,
  Search,
  Star,
  Inbox,
  ArrowRight,
  Send,
} from "lucide-react";

const emailPlans = [
  {
    id: "standard",
    name: "Standard Mailbox",
    badge: "Solopreneurs",
    monthlyPrice: 2.49,
    yearlyPrice: 1.99,
    storage: "15 GB Storage per Inbox",
    features: [
      "Custom domain address (@yourcompany.com)",
      "15 GB high-performance mailbox storage",
      "99.98% Spam & Virus heuristic filtering",
      "Modern Webmail interface + IMAP / SMTP",
      "Automated SPF & DKIM record setup",
      "Sync with iPhone, Android & Outlook",
    ],
  },
  {
    id: "team",
    name: "Team Suite",
    badge: "Most Popular",
    isPopular: true,
    monthlyPrice: 4.99,
    yearlyPrice: 3.99,
    storage: "50 GB Storage per Inbox",
    features: [
      "50 GB high-performance mailbox storage",
      "Shared company calendars & contact books",
      "Automated DMARC compliance enforcement",
      "10-Year legal & audit compliance archiving",
      "Exchange ActiveSync mobile push sync",
      "Priority VIP email deliverability IP pool",
      "Admin delegation & multi-domain aliases",
    ],
  },
];

const faqs = [
  {
    question: "Why should I use domain email instead of @gmail.com or @yahoo.com?",
    answer:
      "Studies show customers are 9x more likely to trust a business using a professional domain email (you@yourcompany.com) versus a generic free email address. It elevates your brand authority and ensures you retain ownership of your corporate communications.",
  },
  {
    question: "Can I access my WandaHost business email on iPhone, Android, and Outlook?",
    answer:
      "Yes. Our mail servers support modern IMAP, SMTP, and Exchange ActiveSync. You can easily add your account to iOS Mail, Gmail app, Outlook for Windows/Mac, Apple Mail, and Thunderbird with automatic configuration profiles.",
  },
  {
    question: "How do you protect my inbox against phishing and spam?",
    answer:
      "We utilize dual-layer machine learning spam heuristics, real-time DNS blocklists, and anti-virus scanners that inspect attachments before they reach your inbox. 99.98% of unsolicited spam and spoofing attempts are dropped at the network edge.",
  },
  {
    question: "Do you assist with SPF, DKIM, and DMARC DNS records?",
    answer:
      "Yes! When you create a mailbox on WandaHost, our wizard automatically generates and applies the correct SPF, DKIM 2048-bit keys, and DMARC policy records to your DNS so your emails land directly in your client's primary inbox, not the spam folder.",
  },
];

export default function BusinessEmailPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Business", href: "/business-email" }, { label: "Business Email" }]}
        badge="Professional Communication"
        badgeVariant="brand"
        title="Build Client Trust With"
        highlightedTitle="Professional Domain Email"
        description="Strengthen your corporate brand identity with secure, spam-free email @yourcompany.com. Seamlessly sync contacts, calendars, and messages across all devices."
      >
        <Button href="#pricing" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View Email Plans
        </Button>
        <Button href="#webmail" variant="outline" size="lg">
          Explore Webmail Features
        </Button>
      </PageHeader>

      {/* Webmail Mockup Showcase */}
      <section id="webmail" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              A Modern, Clean Webmail Experience
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Fast, intuitive, and distraction-free. Available in your browser anywhere, anytime.
            </p>
          </div>

          {/* Webmail UI Preview Card */}
          <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated overflow-hidden shadow-2xl">
            {/* Header bar */}
            <div className="p-4 border-b border-surface-border bg-surface/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-semibold text-foreground flex items-center gap-1.5 ml-2">
                  <Mail className="w-3.5 h-3.5 text-brand-500" />
                  <span>WandaHost Webmail · sarah@acmedesign.com</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" /> TLS 1.3 Verified
                </span>
              </div>
            </div>

            {/* Main Email Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px]">
              {/* Sidebar */}
              <div className="md:col-span-3 border-r border-surface-border p-4 bg-surface/20 space-y-1 text-xs">
                <button className="w-full btn-primary py-2 px-3 rounded-xl text-white font-semibold flex items-center justify-center gap-1.5 mb-4 shadow-sm">
                  <Send className="w-3.5 h-3.5" /> Compose Email
                </button>
                <div className="flex items-center justify-between p-2 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
                  <span className="flex items-center gap-2">
                    <Inbox className="w-4 h-4" /> Inbox
                  </span>
                  <span className="text-[10px] bg-brand-500 text-white px-1.5 py-0.2 rounded-full">
                    3
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-surface/50">
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4" /> Starred
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-surface/50">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Calendar
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-surface/50">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" /> Team Contacts
                  </span>
                </div>
              </div>

              {/* Message List */}
              <div className="md:col-span-9 p-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-brand-500/30 bg-brand-500/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-foreground text-sm">
                        Jonathan Vance (Enterprise Client)
                      </span>
                      <span className="text-xs text-slate-400">10:42 AM</span>
                    </div>
                    <div className="font-semibold text-xs text-brand-600 dark:text-brand-400 mb-1">
                      Re: Q4 Cloud Infrastructure SOW & Contract Signed
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      Hi Sarah, we have reviewed the WandaHost architecture proposal and our engineering leads are ready to proceed with migration next Tuesday...
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded font-mono">
                        SPF: PASS · DKIM: PASS · DMARC: PASS
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-surface-border bg-white dark:bg-surface/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-foreground text-sm">Stripe Billing Notifications</span>
                      <span className="text-xs text-slate-400">Yesterday</span>
                    </div>
                    <div className="font-semibold text-xs text-foreground mb-1">
                      Payment received: $4,850.00 USD
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      Your monthly subscription invoice has been processed successfully.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-slate-500">
                  <span>Storage: 2.1 GB of 50 GB used</span>
                  <span>100% Ad-Free & Private</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-20 border-b border-surface-border">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Simple, Transparent Mailbox Pricing
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Add as many mailboxes as your company requires. Upgrade storage at any time.
            </p>

            {/* Toggle */}
            <div className="mt-6 inline-flex items-center p-1 rounded-full border border-surface-border bg-white dark:bg-surface-elevated shadow-sm">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "btn-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  billingCycle === "yearly"
                    ? "btn-primary text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                <span>Yearly</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  20% OFF
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {emailPlans.map((plan) => {
              const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
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
                    <p className="text-xs text-brand-600 dark:text-brand-400 font-semibold mt-1">
                      {plan.storage}
                    </p>
                  </div>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-foreground">${price}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">/ mailbox / mo</span>
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
                    href={`/contact?topic=email-order&plan=${plan.id}&cycle=${billingCycle}`}
                    variant={plan.isPopular ? "glow" : "outline"}
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Select {plan.name}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverability Guarantee Pillars */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Engineered for Inbox Deliverability
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Avoid the dreaded junk/spam folder with enterprise reputation management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">SPF, DKIM & DMARC</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Cryptographically sign every outgoing message with 2048-bit DKIM keys to prove authenticity to Gmail, Microsoft 365, and Apple Mail.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Multi-Device Mobile Push</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Instant push notifications on your phone. When you read or archive an email on your phone, it updates seamlessly on your laptop in real-time.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Privacy-First Architecture</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Unlike free mail providers, we never scan your inbox contents to serve targeted ads. Your emails and sensitive attachments remain completely confidential.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />
    </div>
  );
}
