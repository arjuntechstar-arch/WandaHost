"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { FileText, CheckCircle2, AlertOctagon, Scale } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Legal & Trust", href: "/privacy" }, { label: "Terms of Service" }]}
        badge="Master Service Agreement"
        badgeVariant="cyan"
        title="Terms of Service &"
        highlightedTitle="Acceptable Use Agreement"
        description="These terms govern your use of WandaHost web hosting, cloud servers, domains, and managed services. Built to protect our customers and maintain high network integrity."
      />

      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Summary Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-lg space-y-4">
            <div className="flex items-center gap-3 text-brand-600 dark:text-brand-400 font-bold text-sm">
              <Scale className="w-5 h-5" />
              <span>Agreement Summary</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>99.99% Uptime Service Level Agreement (SLA) with financial outage credits.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Strict Zero-Tolerance Acceptable Use Policy against malware, spam, and network abuse.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Cancel anytime through your client dashboard with no penalty fees.</span>
              </li>
            </ul>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-surface-border">
              Effective Date: September 2026 · Governing Jurisdiction: Delaware, USA
            </div>
          </div>

          {/* Detailed Clauses */}
          <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By opening an account, ordering services, or accessing the WandaHost network infrastructure, you agree to be bound by this Master Service Agreement, our Acceptable Use Policy, and our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. Acceptable Use Policy (AUP)
              </h2>
              <p className="mb-2">
                WandaHost infrastructure may only be utilized for lawful purposes. You agree not to host, transmit, or distribute any material that violates applicable local or international laws. The following activities are strictly prohibited and will result in immediate service termination without refund:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>Sending unsolicited bulk email (SPAM) or operating open mail relays.</li>
                <li>Distribution of malware, ransomware, botnets, or phishing websites.</li>
                <li>Cryptocurrency mining on non-dedicated CPU cores.</li>
                <li>Port scanning, DDoS amplification attacks, or unauthorized penetration testing against third parties.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Service Level Agreement (SLA) & Uptime Guarantee
              </h2>
              <p className="mb-2">
                We guarantee 99.99% monthly uptime for all network connectivity and physical hardware powering your virtual instances and shared hosting servers, excluding announced scheduled maintenance windows.
              </p>
              <p>
                In the event that monthly uptime falls below 99.99%, you are eligible for service credits upon request:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                <li>99.5% to 99.9% monthly uptime: 10% credit of monthly service fee.</li>
                <li>99.0% to 99.5% monthly uptime: 25% credit of monthly service fee.</li>
                <li>Less than 99.0% monthly uptime: 50% credit of monthly service fee.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Billing, Cancellations, and Auto-Renewal
              </h2>
              <p>
                Hosting subscriptions renew automatically at the end of each billing term (monthly or annually) using your stored payment method. You may cancel your subscription at any time through your client portal prior to the renewal date.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                In no event shall WandaHost, its directors, employees, or partners be liable for any indirect, incidental, special, or consequential damages resulting from lost profits, data loss, or server downtime exceeding the total amount paid by customer during the preceding 3 months.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
