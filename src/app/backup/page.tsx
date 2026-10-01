"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Database,
  RotateCcw,
  ShieldCheck,
  HardDrive,
  CheckCircle2,
  Clock,
  Lock,
  ArrowRight,
  Server,
  Zap,
} from "lucide-react";

const backupPillars = [
  {
    icon: <Lock className="w-6 h-6 text-emerald-500" />,
    title: "Immutable Ransomware Vault",
    desc: "Backups are stored in isolated, read-only offsite cloud storage. Even if server credentials are compromised, backups cannot be deleted or encrypted.",
  },
  {
    icon: <RotateCcw className="w-6 h-6 text-brand-500" />,
    title: "1-Click Point-in-Time Restore",
    desc: "Accidentally broke a plugin or dropped a database table? Roll back to any historical snapshot in under 60 seconds with zero downtime.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    title: "Granular Item-Level Recovery",
    desc: "Restore single files, isolated email inboxes, or individual database tables without needing to wipe the entire server environment.",
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-500" />,
    title: "Zero-Load Snapshot Engine",
    desc: "Block-level differential snapshots capture changed data sectors with zero CPU throttling and zero visitor impact.",
  },
];

const mockSnapshots = [
  { id: "snap-1", label: "Today, 04:00 AM (Automated Daily)", size: "4.2 GB", status: "Healthy" },
  { id: "snap-2", label: "Yesterday, 04:00 AM (Automated Daily)", size: "4.1 GB", status: "Healthy" },
  { id: "snap-3", label: "3 days ago, 04:00 AM (Weekly Snapshot)", size: "4.0 GB", status: "Healthy" },
];

const faqs = [
  {
    question: "Where are WandaHost backups stored?",
    answer:
      "All backups are transmitted over encrypted TLS connections to separate, geographically isolated object storage clusters that are physically detached from primary compute hypervisors.",
  },
  {
    question: "How long are backups retained?",
    answer:
      "Our standard hosting plans include 30-day automated rolling daily retention. We also offer enterprise extended retention options up to 90 days or 1-year compliance archiving.",
  },
  {
    question: "Can I download my backup archives to my local computer?",
    answer:
      "Yes. You can generate and download complete tar.gz or zip archives of your web files, MySQL databases, and mailboxes directly from your WandaHost client portal at any time.",
  },
  {
    question: "Can I trigger on-demand backups before updating my website?",
    answer:
      "Absolutely. You can click 'Create Snapshot Now' before installing new plugins, running database migrations, or updating your CMS. If anything goes wrong, you can revert instantly.",
  },
];

export default function AutomatedBackupsPage() {
  const [selectedSnapshot, setSelectedSnapshot] = useState("snap-1");
  const [restoreTarget, setRestoreTarget] = useState<"full" | "database" | "files">("full");
  const [isRestoring, setIsRestoring] = useState(false);
  const [restoreDone, setRestoreDone] = useState(false);

  const handleSimulateRestore = () => {
    setIsRestoring(true);
    setRestoreDone(false);
    setTimeout(() => {
      setIsRestoring(false);
      setRestoreDone(true);
      setTimeout(() => setRestoreDone(false), 4000);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Business", href: "/business-email" }, { label: "Automated Backups" }]}
        badge="Disaster Recovery & Continuity"
        badgeVariant="emerald"
        title="Zero-Risk Peace of Mind With"
        highlightedTitle="Automated Cloud Backups"
        description="Never fear corrupted databases, accidental deletions, or ransomware again. Automatic daily snapshots, immutable offsite vaulting, and 1-click recovery."
      >
        <Button href="#simulator" variant="glow" size="lg" rightIcon={<RotateCcw className="w-4 h-4" />}>
          Try Restore Simulator
        </Button>
        <Button href="/hosting" variant="outline" size="lg">
          View Backup-Included Plans
        </Button>
      </PageHeader>

      {/* Pillars */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {backupPillars.map((p, i) => (
              <GlowCard key={i}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{p.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Restore Simulator */}
      <section id="simulator" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="brand" size="md">
              Interactive Recovery Console
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-3">
              Experience 1-Click Point-in-Time Recovery
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Test how fast and simple disaster recovery is inside the WandaHost dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated p-6 sm:p-10 shadow-xl space-y-6">
            {/* Step 1: Pick snapshot */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Historical Snapshot Point
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {mockSnapshots.map((snap) => (
                  <button
                    key={snap.id}
                    onClick={() => setSelectedSnapshot(snap.id)}
                    className={`p-3.5 rounded-xl border text-left text-xs transition-all ${
                      selectedSnapshot === snap.id
                        ? "border-brand-500 bg-brand-500/10 ring-2 ring-brand-500/20 text-foreground font-bold"
                        : "border-surface-border bg-surface/30 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    <div className="font-bold">{snap.label}</div>
                    <div className="text-[11px] text-slate-400 mt-1">Size: {snap.size} · {snap.status}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. Select Restoration Scope
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setRestoreTarget("full")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    restoreTarget === "full"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ring-2 ring-cyan-500/20"
                      : "border-surface-border bg-surface/30 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Full Website & DB
                </button>
                <button
                  onClick={() => setRestoreTarget("database")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    restoreTarget === "database"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ring-2 ring-cyan-500/20"
                      : "border-surface-border bg-surface/30 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Only MySQL Database
                </button>
                <button
                  onClick={() => setRestoreTarget("files")}
                  className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                    restoreTarget === "files"
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 ring-2 ring-cyan-500/20"
                      : "border-surface-border bg-surface/30 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  Only Web Files
                </button>
              </div>
            </div>

            {/* Step 3: Trigger button */}
            <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Encrypted with AES-256 · Verified checksum match
              </div>
              <Button
                onClick={handleSimulateRestore}
                disabled={isRestoring}
                variant="glow"
                size="md"
                rightIcon={isRestoring ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
              >
                {isRestoring ? "Reverting System..." : "Simulate Instant Restore"}
              </Button>
            </div>

            {/* Restore feedback */}
            {restoreDone && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>
                  Recovery simulation successful! Target reverted to selected snapshot state in 1.4s.
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />
    </div>
  );
}
