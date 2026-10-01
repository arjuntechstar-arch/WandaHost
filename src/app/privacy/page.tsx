"use client";

import React from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Legal & Trust", href: "/terms" }, { label: "Privacy Policy" }]}
        badge="GDPR & Data Protection"
        badgeVariant="emerald"
        title="Privacy & Data Protection"
        highlightedTitle="Policy"
        description="At WandaHost, we respect your personal data and privacy. Learn how we collect, protect, and handle your information with zero-knowledge encryption principles."
      />

      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Summary Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-lg space-y-4">
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Our Core Privacy Commitments</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>We never sell, rent, or monetize your personal data to third-party advertisers.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>We never inspect private files, database rows, or email messages stored on your servers.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Full compliance with European General Data Protection Regulation (GDPR) standards.</span>
              </li>
            </ul>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-surface-border">
              Last updated: September 2026 · Effective immediately for all registered users.
            </div>
          </div>

          {/* Legal Text Sections */}
          <div className="space-y-8 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-2">
                When you register for WandaHost services, we collect necessary account identifiers: your name, business email address, billing address, telephone number, and payment transaction metadata (handled securely via Stripe or PayPal; WandaHost never stores raw credit card CVVs or card numbers).
              </p>
              <p>
                When utilizing our hosting infrastructure, technical telemetry such as server access logs (IP addresses, request timestamps, user-agents) is recorded solely for network security, DDoS scrubbers, and fraud prevention purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected information exclusively to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1.5 pl-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li>Provision and maintain your cloud servers, virtual hosts, and domains.</li>
                <li>Process subscription renewals and dispatch billing invoices.</li>
                <li>Communicate emergency system maintenance and security alerts.</li>
                <li>Verify account ownership when you contact technical support.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                3. Your European GDPR Rights
              </h2>
              <p>
                Under the EU GDPR and UK Data Protection Act, you have the right to request access to the personal data we hold about you, request rectification of any inaccuracies, request full erasure of your account (&quot;Right to be Forgotten&quot;), or obtain a machine-readable export of your telemetry data.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                4. Data Retention & Security
              </h2>
              <p>
                All account credentials, API tokens, and backup archives are protected with AES-256 encryption at rest and TLS 1.3 protocol encryption in transit. Server access logs are automatically rotated and purged every 90 days.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                5. Contacting Our Data Protection Officer (DPO)
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to exercise your data sovereignty rights, please contact our legal team at <span className="font-semibold text-brand-600 dark:text-brand-400">privacy@wandahost.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
