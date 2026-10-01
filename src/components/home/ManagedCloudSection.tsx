import React from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Cloud,
  Database,
  Activity,
  DatabaseBackup,
  ShieldCheck,
  Server,
  ArrowRight,
  Headphones,
} from "lucide-react";

const cloudFeatures = [
  {
    icon: Server,
    title: "High-Speed VPS",
    description: "KVM virtualization with dedicated NVMe storage and root SSH control.",
    href: "/vps",
  },
  {
    icon: Cloud,
    title: "Managed Cloud",
    description: "Multi-zone clusters, load balancers, and automated failover architectures.",
    href: "/cloud",
  },
  {
    icon: Database,
    title: "Database Hosting",
    description: "Managed PostgreSQL, MySQL, and Microsoft SQL Server instances.",
    href: "/cloud#databases",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    description: "Sub-minute uptime telemetry, CPU/memory alerts, and proactive notifications.",
    href: "/status",
  },
  {
    icon: DatabaseBackup,
    title: "Automated Backups",
    description: "Point-in-time recovery and encrypted immutable offsite snapshots.",
    href: "/backup",
  },
  {
    icon: ShieldCheck,
    title: "Layer 7 Security",
    description: "DDoS mitigation, hardware firewalls, and continuous vulnerability scans.",
    href: "/security",
  },
];

export function ManagedCloudSection() {
  return (
    <section className="py-24 bg-surface/30 border-y border-surface-border relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="brand" size="md">
              Managed Operations
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
              Infrastructure without the infrastructure headache
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you need a standalone virtual server or a redundant multi-region cloud cluster, our senior systems engineers handle OS hardening, kernel patches, backups, and scale so you can focus on shipping product.
            </p>

            <div className="p-4 rounded-2xl bg-surface-muted/60 border border-surface-border space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Headphones className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Need architectural advice?</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                We help you decide between shared hosting, virtual private servers, or dedicated cloud clusters based on your exact workload requirements.
              </p>
            </div>

            <div className="pt-2">
              <Button
                href="/contact?topic=cloud-expert"
                variant="glow"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Talk to an Infrastructure Expert
              </Button>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cloudFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <GlowCard key={feat.title} className="p-5 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground">
                        {feat.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
