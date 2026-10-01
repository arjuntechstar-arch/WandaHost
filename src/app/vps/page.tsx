"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import { Reveal } from "@/components/animation/Reveal";
import {
  Cpu,
  HardDrive,
  ShieldCheck,
  Terminal,
  Zap,
  Globe2,
  CheckCircle2,
  Sliders,
  Copy,
  Check,
  Server,
  ArrowRight,
} from "lucide-react";

interface VpsConfig {
  id: string;
  name: string;
  cores: number;
  ramGb: number;
  ssdGb: number;
  bandwidthTb: number;
  monthlyPrice: number;
  yearlyPrice: number;
  isPopular?: boolean;
}

const vpsConfigurations: VpsConfig[] = [
  {
    id: "vps-entry",
    name: "Compute 2C",
    cores: 2,
    ramGb: 4,
    ssdGb: 80,
    bandwidthTb: 4,
    monthlyPrice: 18,
    yearlyPrice: 15,
  },
  {
    id: "vps-mid",
    name: "Compute 4C",
    cores: 4,
    ramGb: 8,
    ssdGb: 160,
    bandwidthTb: 8,
    monthlyPrice: 36,
    yearlyPrice: 29,
    isPopular: true,
  },
  {
    id: "vps-max",
    name: "Compute 8C",
    cores: 8,
    ramGb: 16,
    ssdGb: 320,
    bandwidthTb: 16,
    monthlyPrice: 72,
    yearlyPrice: 59,
  },
  {
    id: "vps-ultra",
    name: "Compute 16C",
    cores: 16,
    ramGb: 32,
    ssdGb: 640,
    bandwidthTb: 32,
    monthlyPrice: 140,
    yearlyPrice: 119,
  },
];

const operatingSystems = [
  { id: "ubuntu", name: "Ubuntu 24.04 LTS", icon: "🐧", popular: true },
  { id: "debian", name: "Debian 12 Bookworm", icon: "🌀" },
  { id: "rocky", name: "Rocky Linux 9", icon: "🏔️", popular: true },
  { id: "alma", name: "AlmaLinux 9", icon: "⚡" },
  { id: "windows", name: "Windows Server 2022", icon: "🪟" },
];

const faqs = [
  {
    question: "Do I get full root SSH access with WandaHost VPS?",
    answer:
      "Yes. Every VPS instance comes with unconstrained root access on Linux or Administrator RDP access on Windows Server. You can configure kernel modules, install custom software, and set up your own firewall rules.",
  },
  {
    question: "Can I upgrade my CPU, RAM, or NVMe storage without losing data?",
    answer:
      "Absolutely. Our KVM hypervisors support seamless hot-resizing. You can scale your compute resources up or down directly from your client portal in under 60 seconds with zero data migration required.",
  },
  {
    question: "What virtualization technology does WandaHost VPS use?",
    answer:
      "All WandaHost virtual servers run on dedicated Kernel-based Virtual Machine (KVM) hypervisors backed by enterprise AMD EPYC™ processors and enterprise PCIe Gen 4/5 NVMe SSDs in hardware RAID-10 arrays.",
  },
  {
    question: "Is DDoS protection included with VPS instances?",
    answer:
      "Yes, always-on multi-layer (L3/L4/L7) 1.5+ Tbps DDoS mitigation is included with every virtual private server at no additional cost.",
  },
  {
    question: "Are automated backups and snapshots supported?",
    answer:
      "Yes. You can take on-demand snapshots before making system changes, or enable automated daily snapshots that are securely replicated offsite to isolated object vaults.",
  },
];

export default function VpsHostingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedConfigIdx, setSelectedConfigIdx] = useState(1); // default 4C
  const [selectedOs, setSelectedOs] = useState("ubuntu");
  const [copied, setCopied] = useState(false);

  const activeConfig = vpsConfigurations[selectedConfigIdx];
  const price = billingCycle === "yearly" ? activeConfig.yearlyPrice : activeConfig.monthlyPrice;

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Hosting", href: "/hosting" }, { label: "VPS Hosting" }]}
        badge="Pure Dedicated Compute"
        badgeVariant="cyan"
        title="High-Performance NVMe"
        highlightedTitle="Cloud VPS"
        description="Dedicated KVM virtual servers powered by AMD EPYC™ processors, DDR5 ECC RAM, and enterprise NVMe storage. Full root access, instant provisioning, and 1 Gbps unmetered uplink."
      >
        <Button href="#calculator" variant="glow" size="lg" rightIcon={<Sliders className="w-4 h-4" />}>
          Configure Your Server
        </Button>
        <Button href="/contact?topic=custom-vps" variant="outline" size="lg">
          Talk to Enterprise Sales
        </Button>
      </PageHeader>

      {/* Interactive Configurator Section */}
      <section id="calculator" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Select Your VPS Compute Profile
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Slide or choose a configuration below. Adjust billing cycle to save 20% on annual terms.
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
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Configurator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Tiers Selection & OS */}
            <div className="lg:col-span-8 space-y-6">
              {/* Preset Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vpsConfigurations.map((cfg, idx) => (
                  <button
                    key={cfg.id}
                    onClick={() => setSelectedConfigIdx(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      selectedConfigIdx === idx
                        ? "border-brand-500 ring-2 ring-brand-500/20 bg-brand-500/5 shadow-md"
                        : "border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-slate-400 dark:hover:border-slate-600"
                    }`}
                  >
                    {cfg.isPopular && (
                      <span className="absolute -top-2.5 right-3 bg-brand-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        POPULAR
                      </span>
                    )}
                    <div className="font-bold text-sm text-foreground">{cfg.name}</div>
                    <div className="text-xl font-extrabold mt-1 text-brand-600 dark:text-brand-400 font-mono tabular-nums">
                      {cfg.cores} vCPU
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-mono tabular-nums">
                      {cfg.ramGb} GB RAM · {cfg.ssdGb} GB NVMe
                    </div>
                  </button>
                ))}
              </div>

              {/* Slider for smooth selection */}
              <div className="p-6 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-foreground">Compute Density Slider</span>
                  <span className="text-xs font-mono tabular-nums text-brand-600 dark:text-brand-400">
                    {activeConfig.cores} vCPUs / {activeConfig.ramGb} GB RAM
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={vpsConfigurations.length - 1}
                  step={1}
                  value={selectedConfigIdx}
                  onChange={(e) => setSelectedConfigIdx(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  <span>Compute 2C</span>
                  <span>Compute 4C</span>
                  <span>Compute 8C</span>
                  <span>Compute 16C</span>
                </div>
              </div>

              {/* OS Selection */}
              <div className="p-6 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/30">
                <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <span>Select Operating System (1-Click Template)</span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {operatingSystems.map((os) => (
                    <button
                      key={os.id}
                      onClick={() => setSelectedOs(os.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center gap-2.5 transition-all ${
                        selectedOs === os.id
                          ? "border-cyan-500 ring-2 ring-cyan-500/20 bg-cyan-500/5 text-foreground font-bold"
                          : "border-surface-border bg-white dark:bg-surface-elevated/60 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                      }`}
                    >
                      <span className="text-base">{os.icon}</span>
                      <span className="truncate">{os.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Terminal Preview */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-xs text-slate-300 overflow-hidden shadow-xl preserve-dark">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-slate-400 preserve-dark">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[11px] text-slate-400">root@wandahost-vps:~</span>
                  </div>
                  <button
                    onClick={() => copyCommand(`ssh root@203.0.113.${activeConfig.cores * 12}`)}
                    className="flex items-center gap-1 text-[11px] hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy SSH"}</span>
                  </button>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <p className="text-slate-500"># Connect securely via SSH Key or Password</p>
                  <p className="text-cyan-400">
                    $ ssh root@203.0.113.{activeConfig.cores * 12}
                  </p>
                  <p className="text-slate-400">
                    Welcome to {operatingSystems.find((o) => o.id === selectedOs)?.name} on WandaHost KVM Cloud.
                  </p>
                  <p className="text-slate-400">
                    System specs: {activeConfig.cores} vCPUs | {activeConfig.ramGb} GB RAM | {activeConfig.ssdGb} GB NVMe SSD
                  </p>
                  <p className="text-emerald-400">✓ System load: 0.04 · Network: 1000 Mbps Active · DDoS Filter: ENGAGED</p>
                </div>
              </div>
            </div>

            {/* Right: Checkout Summary Box */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated p-6 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-xs uppercase tracking-wider font-bold text-brand-600 dark:text-brand-400 mb-1">
                  Selected Configuration
                </div>
                <h3 className="text-2xl font-extrabold text-foreground">{activeConfig.name}</h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-foreground font-mono tabular-nums">${price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">/ month</span>
                </div>
                {billingCycle === "yearly" && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-medium font-mono tabular-nums">
                    Billed annually at ${price * 12}/yr (Saving 20%)
                  </p>
                )}

                <div className="mt-6 pt-6 border-t border-surface-border space-y-3.5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-brand-500" /> Dedicated vCPU
                    </span>
                    <span className="font-bold text-foreground">{activeConfig.cores} Cores</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-500" /> ECC DDR5 Memory
                    </span>
                    <span className="font-bold text-foreground">{activeConfig.ramGb} GB RAM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-indigo-500" /> NVMe PCIe Storage
                    </span>
                    <span className="font-bold text-foreground">{activeConfig.ssdGb} GB NVMe</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-emerald-500" /> Transfer Bandwidth
                    </span>
                    <span className="font-bold text-foreground">{activeConfig.bandwidthTb} TB @ 1 Gbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Server className="w-4 h-4 text-amber-500" /> Operating System
                    </span>
                    <span className="font-bold text-foreground truncate max-w-[140px]">
                      {operatingSystems.find((o) => o.id === selectedOs)?.name.split(" ")[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Instant provisioning in &lt; 45 seconds</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated IPv4 + /64 IPv6 subnet</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    href={`/contact?topic=vps-deploy&plan=${activeConfig.id}&os=${selectedOs}&billing=${billingCycle}`}
                    variant="glow"
                    size="lg"
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Deploy {activeConfig.name} Now
                  </Button>
                  <p className="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-2.5">
                    No setup fees. Root credentials delivered via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Architecture Highlights */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="cyan" size="md">
              Enterprise Grade Infrastructure
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Built on Bare-Metal Without Compromises
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Unlike commodity VPS providers that oversubscribe CPU and RAM, WandaHost provisions isolated hardware resources with dedicated KVM virtualization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">AMD EPYC™ 9004 CPUs</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Latest generation Zen 4 architecture with consistent 3.7+ GHz boost clocks. Perfect for multi-threaded APIs, background queue workers, and intensive databases.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">PCIe Gen 5 NVMe in RAID-10</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Over 1,200,000 IOPS throughput with zero noisy neighbor degradation. Redundant drive mirroring guarantees data continuity even during hardware drive replacements.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">1.5+ Tbps DDoS Shield</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Hardware-level edge filtering scrubs volumetric SYN floods, UDP amplification, and Layer 7 HTTP floods automatically before they reach your VPS network interface.
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
          Ready for Dedicated Compute Power?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Deploy your high-performance VPS instance in seconds. Need a custom configuration or private cluster? Our engineers are on standby.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="#calculator" variant="glow" size="lg">
            Deploy Now
          </Button>
          <Button href="/contact?topic=vps-consultation" variant="outline" size="lg">
            Request Custom Architecture
          </Button>
        </div>
      </section>
    </div>
  );
}
