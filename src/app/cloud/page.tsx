"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Cloud,
  Database,
  Cpu,
  GitBranch,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  Network,
  RotateCcw,
  Headphones,
} from "lucide-react";

const cloudFeatures = [
  {
    icon: <Cloud className="w-6 h-6 text-brand-500" />,
    title: "Elastic Cloud Compute",
    description:
      "Scale CPU and RAM dynamically without provisioning delays. Run demanding production workloads with 99.99% uptime guarantees.",
  },
  {
    icon: <Database className="w-6 h-6 text-cyan-500" />,
    title: "Fully Managed Databases",
    description:
      "High-availability clusters for PostgreSQL, MySQL, Redis, and Microsoft SQL Server with automated daily point-in-time restores.",
  },
  {
    icon: <Network className="w-6 h-6 text-indigo-500" />,
    title: "Isolated VPC & Private Peering",
    description:
      "Secure multi-instance setups inside software-defined Virtual Private Clouds. Zero-latency inter-service communication over private 10 Gbps backbones.",
  },
  {
    icon: <GitBranch className="w-6 h-6 text-emerald-500" />,
    title: "DevOps & Continuous Deployment",
    description:
      "Connect your GitHub or GitLab repositories. Push to main to trigger zero-downtime blue-green rolling deployments.",
  },
];

const databaseEngines = [
  {
    name: "PostgreSQL",
    version: "v16 & v15",
    desc: "ACID-compliant relational database with TimescaleDB & PostGIS extension support.",
    badge: "Recommended",
  },
  {
    name: "MySQL",
    version: "v8.0 & v8.4 LTS",
    desc: "Optimized InnoDB buffers and multi-threaded replication for high read-throughput web apps.",
  },
  {
    name: "Microsoft SQL Server",
    version: "2022 Web & Standard",
    desc: "Enterprise relational database with Windows Authentication & automated index maintenance.",
    badge: "Specialist",
  },
  {
    name: "Redis Cache",
    version: "v7.2 Cluster",
    desc: "In-memory key-value data store for lightning-fast session caching and Pub/Sub queues.",
  },
];

const regions = [
  { name: "US East (Virginia)", latency: "14ms", status: "Operational" },
  { name: "US West (Oregon)", latency: "28ms", status: "Operational" },
  { name: "Europe (Frankfurt)", latency: "35ms", status: "Operational" },
  { name: "Europe (London)", latency: "38ms", status: "Operational" },
  { name: "Asia Pacific (Singapore)", latency: "65ms", status: "Operational" },
  { name: "Asia Pacific (Tokyo)", latency: "72ms", status: "Operational" },
];

const faqs = [
  {
    question: "What is the difference between WandaHost VPS and Managed Cloud?",
    answer:
      "VPS provides raw dedicated compute instances where you manage the OS and software stack yourself. Managed Cloud includes proactive sysadmin operations: automated kernel security updates, continuous database optimization, multi-zone failover, monitoring alerts, and dedicated DevOps engineering assistance.",
  },
  {
    question: "How does the zero-downtime Cloud Migration work?",
    answer:
      "Our senior cloud architects analyze your current infrastructure (AWS, Azure, DigitalOcean, or on-premise), construct a replication pipeline to WandaHost cloud, test the staging cutover, and switch DNS with zero service interruption for your customers.",
  },
  {
    question: "What SLA do you offer on Managed Cloud infrastructure?",
    answer:
      "We provide a financially-backed 99.99% uptime Service Level Agreement across compute, storage, and networking layers, with 15-minute emergency response times from senior engineers.",
  },
  {
    question: "Can I spin up automated database read replicas?",
    answer:
      "Yes. Our managed database console lets you provision geographic read replicas in one click to offload read-heavy reporting queries and lower latency for global visitors.",
  },
];

export default function CloudSolutionsPage() {
  const [activeTab, setActiveTab] = useState<"servers" | "databases" | "devops" | "managed">("servers");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Cloud", href: "/cloud" }, { label: "Managed Cloud Solutions" }]}
        badge="Enterprise Cloud Infrastructure"
        badgeVariant="cyan"
        title="Elastic, Resilient"
        highlightedTitle="Cloud Architecture"
        description="Run your production applications, databases, and microservices on high-availability cloud infrastructure backed by 24/7 proactive DevOps engineering."
      >
        <Button href="#solutions" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Explore Cloud Solutions
        </Button>
        <Button href="/contact?topic=cloud-consultation" variant="outline" size="lg">
          Schedule White-Glove Migration
        </Button>
      </PageHeader>

      {/* Feature Pillars */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudFeatures.map((feat, idx) => (
              <GlowCard key={idx}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{feat.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solutions Tabs */}
      <section id="solutions" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tailored Architecture for Every Workload
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Explore our core cloud building blocks designed for high reliability and rapid deployment.
            </p>

            {/* Tab navigation */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab("servers")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "servers"
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-300 hover:border-slate-400"
                }`}
              >
                <Server className="w-4 h-4" />
                <span>Cloud Servers</span>
              </button>
              <button
                onClick={() => setActiveTab("databases")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "databases"
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-300 hover:border-slate-400"
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Managed Databases</span>
              </button>
              <button
                onClick={() => setActiveTab("devops")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "devops"
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-300 hover:border-slate-400"
                }`}
              >
                <GitBranch className="w-4 h-4" />
                <span>DevOps & CI/CD</span>
              </button>
              <button
                onClick={() => setActiveTab("managed")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  activeTab === "managed"
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-300 hover:border-slate-400"
                }`}
              >
                <Headphones className="w-4 h-4" />
                <span>Managed Cloud Operations</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated p-8 sm:p-12 shadow-xl">
            {activeTab === "servers" && (
              <div id="servers" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <Badge variant="cyan" size="md">
                    Compute & MicroVMs
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Next-Gen Scalable Cloud Instances
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Deploy stateless application nodes or stateful workers across high-availability virtualization clusters. Auto-scale compute capacity based on incoming web traffic spikes.
                  </p>
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Sub-second vertical scaling of CPU & RAM with zero reboot</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Dedicated private IP subnet (VPC) with hardware firewall</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Continuous hardware health checks with automatic live migration</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button href="/vps" variant="glow" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Configure Cloud Instances
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-surface/50 border border-surface-border space-y-3 font-mono text-xs">
                  <div className="text-slate-400"># Cloud Instance Provisioning Hook</div>
                  <div className="p-4 rounded-xl bg-slate-950 text-cyan-400 space-y-1">
                    <p>$ wandahost instance create \</p>
                    <p className="pl-4 text-slate-300">--name &quot;api-cluster-prod-01&quot; \</p>
                    <p className="pl-4 text-slate-300">--cores 8 --ram 16GB --nvme 200GB \</p>
                    <p className="pl-4 text-slate-300">--region &quot;us-east-1&quot; --vpc &quot;prod-net&quot;</p>
                    <p className="text-emerald-400 mt-2">✓ Instance booted in 14.2s (IP: 10.0.4.12)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "databases" && (
              <div id="databases" className="space-y-6">
                <div>
                  <Badge variant="emerald" size="md">
                    Zero-Maintenance Storage
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
                    Managed Cloud Database Engines
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mt-1">
                    Offload database backups, patching, and replication. Get ultra-fast read/write latency with dedicated NVMe storage tiers.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {databaseEngines.map((db, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-surface-border bg-surface/30 hover:border-brand-500/40 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-foreground text-base">{db.name}</h4>
                        <span className="text-[11px] font-mono text-slate-500">{db.version}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                        {db.desc}
                      </p>
                      {db.badge && <Badge variant="brand" size="sm">{db.badge}</Badge>}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-end">
                  <Button href="/contact?topic=managed-database" variant="glow" size="md">
                    Deploy Managed Database
                  </Button>
                </div>
              </div>
            )}

            {activeTab === "devops" && (
              <div id="devops" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <Badge variant="brand" size="md">
                    Automated Pipelines
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Modern Git-Driven Cloud Workflows
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Integrate your Git repository to automate preview environments, continuous integration testing, and blue-green deployments with zero downtime.
                  </p>
                  <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Docker & Container runtime compatibility
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant automatic rollback on health-check failure
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Encrypted environment secrets management
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button href="/contact?topic=devops-pipeline" variant="glow" size="md">
                      Request CI/CD Setup
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 p-5 rounded-2xl bg-surface/50 border border-surface-border">
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      Production Deployment Pipeline
                    </div>
                    <div className="p-3 rounded-xl bg-surface border border-surface-border/60 space-y-1">
                      <div className="text-[11px] text-slate-400">1. Commit detected on main branch</div>
                      <div className="text-foreground font-mono">commit #8f3b20: &quot;Optimize API cache headers&quot;</div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface border border-surface-border/60 space-y-1">
                      <div className="text-[11px] text-slate-400">2. Container build & unit tests</div>
                      <div className="text-emerald-500 font-mono">✓ 42/42 tests passed in 18s</div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface border border-surface-border/60 space-y-1">
                      <div className="text-[11px] text-slate-400">3. Blue/Green traffic cutover</div>
                      <div className="text-cyan-400 font-mono">100% traffic shifted · 0 dropouts</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "managed" && (
              <div id="managed" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <Badge variant="emerald" size="md">
                    White-Glove Support
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    Your Dedicated 24/7 Cloud Operations Team
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    Stop spending late nights troubleshooting server outages. Our senior sysadmins take ownership of security patches, OS upgrades, database tuning, and emergency failovers.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      15-minute response SLA on high-priority tickets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Automated weekly offsite disaster recovery test drills
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Quarterly performance & cost optimization audits
                    </li>
                  </ul>
                  <div className="pt-2">
                    <Button href="/contact?topic=cloud-consultation" variant="glow" size="md">
                      Book an Architecture Review
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-brand-600/10 via-cyan-500/10 to-emerald-500/10 border border-brand-500/20 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 text-brand-500 flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-foreground text-lg">Direct Senior Engineer Slack/Teams</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Direct access to level 3 certified cloud engineers without navigating tier 1 support scripts.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Global Datacenter Telemetry */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="cyan" size="md">
              Global Low-Latency Edge
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Deploy Close to Your Users Worldwide
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Tier 4 certified facilities interconnected by private optical fiber with redundant power feeds.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {regions.map((reg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 text-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mx-auto mb-2 animate-ping" />
                <div className="font-bold text-xs sm:text-sm text-foreground">{reg.name}</div>
                <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mt-1">{reg.latency}</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  {reg.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* Migration CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-50/90 via-indigo-50/60 to-cyan-50/80 dark:from-brand-900/40 dark:via-indigo-900/40 dark:to-cyan-900/40 border border-brand-500/30 shadow-lg dark:shadow-none">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Migrate Your Cloud Workloads With Zero Downtime
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Our cloud specialists handle the architecture review, database replication, and DNS cutover at no extra charge.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact?topic=cloud-consultation" variant="glow" size="lg">
              Schedule Free Migration Assessment
            </Button>
            <Button href="/status" variant="outline" size="lg">
              View System Status
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
