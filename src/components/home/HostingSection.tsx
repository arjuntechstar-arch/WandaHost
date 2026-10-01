import React from "react";
import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { Check, ArrowRight, Server, Layers, Cpu, Users } from "lucide-react";

export function HostingSection() {
  const hostingTiers = [
    {
      id: "starter",
      title: "Starter Hosting",
      icon: Server,
      bestFor: "Personal sites & early stage ventures",
      storage: "20 GB NVMe Storage",
      websites: "1 Website",
      ssl: "Free Auto-SSL",
      backups: "Daily automated",
      support: "24/7 Standard",
      startingPrice: 3.99,
      badge: "Popular Entry",
      href: "/hosting?plan=starter",
      features: [
        "Unmetered high-speed bandwidth",
        "Free business email account",
        "cPanel management interface",
        "1-click script installer",
      ],
    },
    {
      id: "business",
      title: "Business Hosting",
      icon: Cpu,
      bestFor: "Growing businesses & e-commerce",
      storage: "60 GB NVMe Storage",
      websites: "Up to 10 Websites",
      ssl: "Free Wildcard SSL",
      backups: "Daily + On-Demand Snapshots",
      support: "Priority Human Support",
      startingPrice: 7.99,
      badge: "Recommended",
      isPopular: true,
      href: "/hosting?plan=business",
      features: [
        "2x CPU & memory allocation",
        "Redis object caching accelerator",
        "Unlimited custom email addresses",
        "Dedicated malware scanning & WAF",
      ],
    },
    {
      id: "wordpress",
      title: "WordPress Hosting",
      icon: Layers,
      bestFor: "Content creators & dynamic agencies",
      storage: "80 GB NVMe Storage",
      websites: "Up to 5 WP Sites",
      ssl: "Free Wildcard SSL",
      backups: "Automated + 1-Click Staging",
      support: "WP Specialist Support",
      startingPrice: 11.99,
      badge: "Optimized",
      href: "/wordpress-hosting",
      features: [
        "LiteSpeed server-level caching",
        "Automated WordPress & plugin patching",
        "Instant staging environment cloning",
        "Free white-glove site migration",
      ],
    },
    {
      id: "reseller",
      title: "Reseller Hosting",
      icon: Users,
      bestFor: "Web designers & digital agencies",
      storage: "150 GB NVMe Storage",
      websites: "Up to 50 cPanel Accounts",
      ssl: "Free SSL for all clients",
      backups: "Automated daily",
      support: "Agency Priority Access",
      startingPrice: 24.99,
      badge: "Agency Platform",
      href: "/reseller",
      features: [
        "100% White-label client control panels",
        "Custom private nameservers",
        "Full WHM administrative dashboard",
        "Automated billing system API readiness",
      ],
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <Badge variant="cyan" size="md">
            Scalable Web Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Hosting that grows with you
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From single landing pages to multi-tenant agency setups, choose high-speed NVMe hosting engineered for uptime.
          </p>
        </div>

        {/* 4 Hosting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostingTiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <GlowCard
                key={tier.id}
                highlight={tier.isPopular}
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    {tier.badge && (
                      <Badge
                        variant={tier.isPopular ? "brand" : "surface"}
                        size="sm"
                      >
                        {tier.badge}
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground tracking-tight">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 min-h-[32px]">
                    <span className="font-semibold text-slate-800 dark:text-slate-300">Best for: </span>
                    {tier.bestFor}
                  </p>

                  <div className="mt-5 pb-5 border-b border-surface-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Starting at</span>
                      <span className="text-2xl sm:text-3xl font-extrabold text-foreground font-mono">
                        {formatCurrency(tier.startingPrice)}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">/mo</span>
                    </div>
                  </div>

                  {/* Core Specs */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span><strong>Storage:</strong> {tier.storage}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span><strong>Websites:</strong> {tier.websites}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span><strong>SSL:</strong> {tier.ssl}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span><strong>Backups:</strong> {tier.backups}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <span><strong>Support:</strong> {tier.support}</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    href={tier.href}
                    variant={tier.isPopular ? "glow" : "secondary"}
                    className="w-full text-xs"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Select {tier.title.split(" ")[0]}
                  </Button>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* VPS callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-surface-muted/40 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-foreground">
              Need dedicated root control or customizable CPU/RAM?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Explore our KVM-virtualized High-Performance VPS with instant deployment.
            </p>
          </div>
          <Button href="/vps" variant="outline" size="sm">
            Explore VPS Hosting
          </Button>
        </div>
      </div>
    </section>
  );
}
