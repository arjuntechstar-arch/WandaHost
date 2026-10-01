"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ShieldCheck,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const refundFaqs = [
  {
    question: "How do I request a refund?",
    answer:
      "Simply open a billing ticket from your client portal or email billing@wandahost.com within 30 days of your initial purchase. State that you would like to invoke our 30-day money-back guarantee, and our team will issue the refund promptly.",
  },
  {
    question: "How long does it take for funds to return to my account?",
    answer:
      "Once approved by our billing team, refunds are issued immediately through our payment processor (Stripe or PayPal). Depending on your bank, funds typically appear on your statement in 3 to 5 business days.",
  },
  {
    question: "Why aren't domain name registrations refundable?",
    answer:
      "When a domain is registered, WandaHost immediately pays non-refundable registry fees to central registries like Verisign (.com) and PIR (.org). While the domain registration fee cannot be refunded, you retain full ownership of the domain name for the entire year and can point it anywhere.",
  },
  {
    question: "Do renewal payments qualify for the 30-day guarantee?",
    answer:
      "The 30-day money-back guarantee applies to your first term with WandaHost so you can evaluate our servers risk-free. Subsequent subscription renewals do not qualify for the full 30-day guarantee, though prorated cancellations can be requested within 48 hours of renewal.",
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Legal & Trust", href: "/terms" }, { label: "Refund Policy" }]}
        badge="Risk-Free Guarantee"
        badgeVariant="emerald"
        title="Our 30-Day"
        highlightedTitle="Money-Back Guarantee"
        description="We want you to be 100% satisfied with WandaHost performance. If you aren't completely happy during your first 30 days, we will refund your hosting fees."
      >
        <Button href="/hosting" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Try WandaHost Risk-Free
        </Button>
        <Button href="/contact?topic=billing" variant="outline" size="lg">
          Contact Billing Support
        </Button>
      </PageHeader>

      {/* Eligible vs Ineligible Breakdown */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Eligible */}
            <div className="p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">100% Refund Eligible</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Cancel within 30 days of initial order for a full 100% refund of all fees paid:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Shared Web Hosting (Launch, Grow, Scale)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Managed WordPress Hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>.NET Specialist Application Hosting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>High-Performance Cloud VPS (First monthly or annual term)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Reseller Hosting Plans</span>
                </li>
              </ul>
            </div>

            {/* Ineligible */}
            <div className="p-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Non-Refundable Items</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Due to external non-recoverable third-party registry costs:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Domain Name Registrations & Renewals (You retain full ownership)</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Dedicated Clean IPv4 address leases</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Custom Website Design & Development completed milestones</span>
                </li>
                <li className="flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Accounts terminated for Acceptable Use Policy violations (spam/malware)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={refundFaqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-foreground">
          Still Have Questions About Our Guarantee?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
          Our friendly billing team is here to assist with any questions regarding payments or refunds.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact?topic=billing" variant="glow" size="lg">
            Contact Billing Team
          </Button>
        </div>
      </section>
    </div>
  );
}
