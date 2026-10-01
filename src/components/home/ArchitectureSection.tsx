"use client";

import React, { useState } from "react";
import { infrastructureTabs } from "@/data/products";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Radio,
  Share2,
  Cpu,
  Database,
  DatabaseBackup,
  Activity,
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
} from "lucide-react";

const pipelineSteps = [
  { name: "Domain", icon: Globe },
  { name: "DNS", icon: Radio },
  { name: "CDN", icon: Share2 },
  { name: "Web App", icon: Cpu },
  { name: "Database", icon: Database },
  { name: "Backup", icon: DatabaseBackup },
  { name: "Monitoring", icon: Activity },
  { name: "Security", icon: ShieldCheck },
];

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState(infrastructureTabs[0].id);
  const [copied, setCopied] = useState(false);

  const currentTab =
    infrastructureTabs.find((t) => t.id === activeTab) || infrastructureTabs[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentTab.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-surface/30 border-b border-surface-border relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="brand" size="md">
            Modern Systems Engineering
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            From simple websites to serious infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A resilient end-to-end delivery pipeline connecting edge DNS to automated backups and perimeter security.
          </p>

          {/* Interactive Tabs */}
          <div className="pt-6">
            <Tabs
              tabs={infrastructureTabs.map((t) => ({
                id: t.id,
                label: t.title,
              }))}
              activeTab={activeTab}
              onChange={setActiveTab}
            />
          </div>
        </div>

        {/* Global Architecture Flow Visualizer (Domain → DNS → CDN → App → DB → Backup → Monitor → Security) */}
        <div className="p-6 rounded-2xl bg-surface-muted/60 border border-surface-border mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[760px] gap-2">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-surface/90 border border-surface-border min-w-[84px] text-center">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                      {step.name}
                    </span>
                  </div>
                  {idx < pipelineSteps.length - 1 && (
                    <div className="flex-1 h-[2px] bg-slate-300 dark:bg-slate-700 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-500 to-cyan-400"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 2.2,
                          ease: "linear",
                          delay: idx * 0.2,
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Column: Tab Info & Nodes */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground tracking-tight">
                  {currentTab.headline}
                </h3>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentTab.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Included Pipeline Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentTab.nodes.map((node) => (
                    <div
                      key={node}
                      className="flex items-center gap-2 p-3 rounded-xl bg-surface/60 border border-surface-border text-xs text-slate-700 dark:text-slate-200 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span>{node}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Code Window */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-surface-border bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs preserve-dark">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-surface-border preserve-dark">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-slate-400 text-[11px]">
                      {currentTab.id}-config.spec
                    </span>
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                {/* Code Body */}
                <div className="p-4 sm:p-5 overflow-x-auto text-slate-300 leading-relaxed">
                  <pre>
                    <code>{currentTab.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
