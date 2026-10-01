"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Cpu,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Globe2,
  FileCheck,
  ArrowRight,
  Server,
} from "lucide-react";

const securityFeatures = [
  {
    icon: <ShieldAlert className="w-6 h-6 text-rose-500" />,
    title: "1.5+ Tbps DDoS Mitigation",
    desc: "Always-on Anycast traffic scrubbing absorbs massive volumetric UDP/SYN floods and Layer 7 HTTP request storms before they reach your server.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-500" />,
    title: "OWASP Top 10 WAF Ruleset",
    desc: "Virtual patch protection shielding your web applications against SQL injections, cross-site scripting (XSS), and zero-day vulnerabilities.",
  },
  {
    icon: <Eye className="w-6 h-6 text-cyan-500" />,
    title: "Continuous Malware Quarantine",
    desc: "Real-time file integrity monitoring. Malicious web shells, crypto-miners, and injected backdoors are automatically isolated in real time.",
  },
  {
    icon: <Lock className="w-6 h-6 text-emerald-500" />,
    title: "Auto-Renewing Wildcard SSL",
    desc: "Free 256-bit encryption with TLS 1.3 protocol enforcement, automated Certificate Transparency logging, and modern cipher suites.",
  },
];

const liveThreatLog = [
  {
    time: "2 mins ago",
    type: "DDoS Mitigation",
    status: "BLOCKED",
    detail: "420 Gbps NTP Amplification Flood scrubbed at Frankfurt Edge",
    badge: "emerald",
  },
  {
    time: "6 mins ago",
    type: "WAF Rule Trigger",
    status: "BLOCKED",
    detail: "SQL Injection payload detected in HTTP POST /checkout/order",
    badge: "emerald",
  },
  {
    time: "14 mins ago",
    type: "Brute-Force Guard",
    status: "ISOLATED",
    detail: "SSH brute-force attack from 185.220.101.5 banned for 24h",
    badge: "emerald",
  },
  {
    time: "22 mins ago",
    type: "File Integrity",
    status: "QUARANTINED",
    detail: "Obfuscated PHP web shell upload intercepted and deleted",
    badge: "emerald",
  },
];

const complianceStandards = [
  {
    title: "SOC 2 Type II Certified",
    desc: "Independently audited controls across security, availability, and confidentiality.",
  },
  {
    title: "ISO/IEC 27001 Certified",
    desc: "Globally recognized standard for information security management systems.",
  },
  {
    title: "PCI-DSS Level 1 Ready",
    desc: "Physical and network hardening compliant with strict payment card data processing.",
  },
  {
    title: "GDPR & Privacy Compliant",
    desc: "Full European data sovereignty compliance, standard contractual clauses, and encryption.",
  },
];

const faqs = [
  {
    question: "Do I have to pay extra for DDoS mitigation on WandaHost?",
    answer:
      "No. Standard multi-layer DDoS protection (up to 1.5+ Tbps) is automatically included with every shared hosting, WordPress, VPS, and cloud instance at no extra cost.",
  },
  {
    question: "How does your Web Application Firewall (WAF) handle zero-day threats?",
    answer:
      "Our threat intelligence feeds update WAF virtual patch definitions in real-time. When a vulnerability is published in popular CMS software (like WordPress or Drupal), our edge firewall neutralizes attack patterns before your site can be targeted.",
  },
  {
    question: "What happens if a website on my server gets infected with malware?",
    answer:
      "Our automated scanner detects infected files instantly upon write to disk. The malicious code is quarantined into an isolated vault, and you receive an alert detailing the injection vector without crashing your live site.",
  },
  {
    question: "Can I bring my own custom commercial SSL certificate?",
    answer:
      "Yes. While we provide free automated Let's Encrypt Wildcard SSL certificates for all domains, you can easily install custom Extended Validation (EV) or Organization Validation (OV) certificates via your control panel.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Business", href: "/business-email" }, { label: "Security & WAF" }]}
        badge="Zero-Trust Perimeter Defense"
        badgeVariant="brand"
        title="Enterprise-Grade Protection for"
        highlightedTitle="Every Website & Server"
        description="Comprehensive perimeter security engineered to shield your applications from DDoS attacks, malicious botnets, SQL injections, and ransomware threats."
      >
        <Button href="#standards" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View Security Standards
        </Button>
        <Button href="/contact?topic=security-audit" variant="outline" size="lg">
          Request Security Consultation
        </Button>
      </PageHeader>

      {/* Feature Grid */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feat, idx) => (
              <GlowCard key={idx}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{feat.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Telemetry Log */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-3 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Edge Telemetry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              24/7 Security Operations Telemetry
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Over 4.2 million malicious requests analyzed and mitigated across our global perimeter daily.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated overflow-hidden shadow-xl p-6 sm:p-8">
            <div className="space-y-3 font-mono text-xs">
              {liveThreatLog.map((log, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-surface-border/60 bg-surface/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded">
                      {log.status}
                    </span>
                    <div>
                      <div className="font-bold text-foreground text-sm font-sans">{log.type}</div>
                      <div className="text-slate-500 dark:text-slate-400 mt-0.5">{log.detail}</div>
                    </div>
                  </div>
                  <span className="text-slate-400 text-[11px] shrink-0">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Standards & Compliance (Anchored #standards) */}
      <section id="standards" className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="cyan" size="md">
              Industry Certifications
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Certified Security Standards & Compliance
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              WandaHost data centers and internal operating procedures adhere to the highest global data protection and physical security mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceStandards.map((std, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{std.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Protect Your Online Business Today
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          All security modules are pre-activated on every WandaHost plan.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/hosting" variant="glow" size="lg">
            Deploy on Secure Hosting
          </Button>
          <Button href="/contact?topic=security-compliance" variant="outline" size="lg">
            Download SOC 2 / Security Whitepaper
          </Button>
        </div>
      </section>
    </div>
  );
}
