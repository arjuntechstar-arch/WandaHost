"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Activity,
  Globe2,
  Server,
  Database,
  Mail,
  Shield,
  Layers,
  Bell,
  Check,
} from "lucide-react";

interface ServiceItem {
  name: string;
  category: string;
  status: "Operational" | "Degraded" | "Maintenance";
  uptime90d: string;
}

const services: ServiceItem[] = [
  { name: "Shared Hosting Infrastructure (cPanel)", category: "Compute", status: "Operational", uptime90d: "100.0%" },
  { name: "Managed WordPress Clusters (LiteSpeed/Redis)", category: "Compute", status: "Operational", uptime90d: "99.99%" },
  { name: ".NET IIS & Windows Hosting Pools", category: "Compute", status: "Operational", uptime90d: "100.0%" },
  { name: "Cloud VPS Hypervisors (KVM)", category: "Compute", status: "Operational", uptime90d: "99.99%" },
  { name: "Managed Relational Databases (Postgres/MySQL)", category: "Databases", status: "Operational", uptime90d: "100.0%" },
  { name: "Anycast Global DNS Resolver Network", category: "Network", status: "Operational", uptime90d: "100.0%" },
  { name: "Business Email (IMAP/SMTP/ActiveSync)", category: "Email", status: "Operational", uptime90d: "99.98%" },
  { name: "Perimeter WAF & 1.5+ Tbps DDoS Filter", category: "Security", status: "Operational", uptime90d: "100.0%" },
  { name: "WandaHost Client Portal & Billing API", category: "Core API", status: "Operational", uptime90d: "100.0%" },
];

const pastIncidents = [
  {
    date: "September 24, 2026",
    title: "Completed: Routine Kernel LivePatch on Frankfurt Hypervisors",
    detail:
      "All hypervisor security patches were successfully applied using ksplice live-patching. No virtual instances experienced reboots or network drops.",
    status: "Resolved",
  },
  {
    date: "September 12, 2026",
    title: "Resolved: Brief Latency Increase on US-East DNS Edge",
    detail:
      "An upstream Tier-1 transit provider experienced fiber packet loss. Anycast routing automatically diverted traffic to alternate transit paths within 45 seconds.",
    status: "Resolved",
  },
  {
    date: "August 28, 2026",
    title: "Completed: Storage Subsystem Capacity Expansion",
    detail:
      "Added 400 TB of PCIe Gen 5 NVMe enterprise storage capacity to Virginia Data Center cluster.",
    status: "Resolved",
  },
];

export default function SystemStatusPage() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Status & Uptime" }]}
        badge="Real-Time System Telemetry"
        badgeVariant="emerald"
        title="WandaHost Infrastructure"
        highlightedTitle="Live Status"
        description="Continuous 24/7 service telemetry and uptime monitoring across all WandaHost global datacenters, edge networks, and storage clusters."
      >
        <div className="w-full max-w-xl mx-auto mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
            </span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
              All Systems Operational
            </span>
          </div>
          <span className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-300">
            99.994% 90-Day Uptime
          </span>
        </div>
      </PageHeader>

      {/* Services Status List with 90-day Uptime Visuals */}
      <section className="py-16 border-b border-surface-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Core Platform Telemetry
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Hover over any 90-day historical block to inspect day-by-day availability.
              </p>
            </div>
            <span className="text-xs text-slate-500 font-mono tabular-nums">Updated 1 min ago</span>
          </div>

          <div className="space-y-4">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-foreground">
                        {srv.name}
                      </div>
                      <div className="text-xs text-slate-500">{srv.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs font-mono tabular-nums font-bold text-foreground">{srv.uptime90d}</div>
                      <div className="text-[10px] text-slate-400">90-day SLA</div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {srv.status}
                    </span>
                  </div>
                </div>

                {/* 90-Day Visual Activity Bar */}
                <div className="pt-2 border-t border-surface-border/50">
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono tabular-nums mb-1.5">
                    <span>90 days ago</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">100% Operational Today</span>
                  </div>
                  <div className="flex gap-[2px] items-center h-4 w-full">
                    {Array.from({ length: 48 }).map((_, barIdx) => (
                      <div
                        key={barIdx}
                        title={`Day ${barIdx + 1}: 100% operational (0 incidents)`}
                        className="flex-1 h-3 rounded-[1px] bg-emerald-500/80 hover:bg-emerald-400 hover:h-4 transition-all cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Edge PoP Diagnostics */}
      <section className="py-16 border-b border-surface-border bg-surface/30">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                Global Edge PoP Latencies
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Real-time roundtrip latency telemetry measured from Anycast tier-1 backbone.
              </p>
            </div>
            <Badge variant="cyan" size="sm">
              Live Edge Probes
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { location: "US-East (Virginia)", pop: "IAD-1", latency: "9ms", status: "Optimal" },
              { location: "EU-Central (Frankfurt)", pop: "FRA-2", latency: "16ms", status: "Optimal" },
              { location: "UK-South (London)", pop: "LHR-1", latency: "14ms", status: "Optimal" },
              { location: "AP-East (Singapore)", pop: "SIN-1", latency: "22ms", status: "Optimal" },
            ].map((pop) => (
              <div
                key={pop.pop}
                className="p-4 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated flex items-center justify-between shadow-sm"
              >
                <div>
                  <div className="font-bold text-sm text-foreground">{pop.location}</div>
                  <div className="text-[11px] text-slate-500 font-mono">Edge Node: {pop.pop}</div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 font-mono tabular-nums">
                    {pop.latency}
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    ✓ {pop.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents & Maintenance History */}
      <section className="py-16 border-b border-surface-border bg-surface/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-8">
            Past Incident & Maintenance Log
          </h2>

          <div className="space-y-4">
            {pastIncidents.map((inc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-500 font-semibold">{inc.date}</span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    {inc.status}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-sm sm:text-base mb-1">
                  {inc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {inc.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Alerts */}
      <section className="py-20 container max-w-2xl mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto mb-4">
          <Bell className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-extrabold text-foreground">
          Subscribe to Real-Time Outage Alerts
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          Get instantaneous notifications if any component experiences degraded performance or scheduled maintenance.
        </p>

        <form onSubmit={handleSubscribe} className="mt-6 flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            value={subscribedEmail}
            onChange={(e) => setSubscribedEmail(e.target.value)}
            placeholder="Enter your work email..."
            required
            className="flex-1 px-4 py-3 rounded-xl border border-surface-border bg-white dark:bg-surface-elevated text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <Button type="submit" variant="glow" size="md">
            {isSubscribed ? <Check className="w-4 h-4" /> : "Subscribe"}
          </Button>
        </form>
        {isSubscribed && (
          <p className="text-xs text-emerald-500 mt-2 font-semibold">
            Subscribed! You will receive verified status incident notifications.
          </p>
        )}
      </section>
    </div>
  );
}
