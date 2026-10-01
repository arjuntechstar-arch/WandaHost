"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Search,
  BookOpen,
  Headphones,
  Globe2,
  Cpu,
  Layers,
  CreditCard,
  LifeBuoy,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Activity,
} from "lucide-react";

const supportCategories = [
  {
    icon: <BookOpen className="w-6 h-6 text-brand-500" />,
    title: "Getting Started & cPanel",
    articles: [
      "Accessing your cPanel dashboard",
      "Connecting via SSH or SFTP",
      "Setting up automated daily snapshots",
    ],
  },
  {
    icon: <Globe2 className="w-6 h-6 text-cyan-500" />,
    title: "Domains & DNS Configuration",
    articles: [
      "Pointing custom nameservers to WandaHost",
      "Configuring SPF, DKIM, and DMARC for email",
      "Adding A and CNAME records for subdomains",
    ],
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-500" />,
    title: "WordPress Optimization",
    articles: [
      "Configuring LiteSpeed Cache & Redis Object Cache",
      "Creating 1-click staging environments",
      "Troubleshooting plugin conflict errors",
    ],
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-500" />,
    title: ".NET & Windows Hosting",
    articles: [
      "Deploying ASP.NET Core 8/9 with GitHub Actions",
      "Connecting to remote MS SQL Server Web Edition",
      "Configuring IIS custom error pages & web.config",
    ],
  },
  {
    icon: <CreditCard className="w-6 h-6 text-amber-500" />,
    title: "Billing & Subscriptions",
    articles: [
      "Upgrading or resizing your server tier",
      "Downloading VAT & tax invoices",
      "Claiming the 30-day money-back guarantee",
    ],
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-rose-500" />,
    title: "Security & Firewall",
    articles: [
      "Enabling two-factor authentication (2FA)",
      "Unblocking your IP address from server firewall",
      "Installing custom commercial SSL certificates",
    ],
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Search Bar */}
      <PageHeader
        breadcrumbs={[{ label: "Support & Help Center" }]}
        badge="Knowledge Base & Assistance"
        badgeVariant="brand"
        title="How Can We"
        highlightedTitle="Help You Today?"
        description="Search our technical documentation, tutorials, and configuration guides, or connect directly with our 24/7 engineering support team."
      >
        <div className="w-full max-w-xl mx-auto mt-4 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides (e.g. DNS records, SSH keys, LiteSpeed, .NET)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-surface-elevated border border-surface-border text-foreground text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </PageHeader>

      {/* Support Categories Grid */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Browse by Solution Category
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              Step-by-step guides crafted by our senior systems engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCategories.map((cat, idx) => (
              <GlowCard key={idx}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">{cat.title}</h3>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {cat.articles.map((art, aIdx) => (
                      <li key={aIdx}>
                        <a
                          href={`/resources?q=${encodeURIComponent(art)}`}
                          className="text-slate-600 dark:text-slate-400 hover:text-brand-500 transition-colors flex items-center justify-between group"
                        >
                          <span>{art}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Escalation Options */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Direct Assistance?
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              Our on-duty sysadmins are online 24 hours a day, 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated text-center space-y-3">
              <Headphones className="w-8 h-8 text-brand-500 mx-auto" />
              <h3 className="font-bold text-foreground text-base">Open a Support Ticket</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Detailed troubleshooting with full server log inspection by senior engineers.
              </p>
              <div className="pt-2">
                <Button href="/contact?topic=support" variant="glow" size="sm" className="w-full">
                  Create Support Ticket
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated text-center space-y-3">
              <MessageSquare className="w-8 h-8 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-foreground text-base">WhatsApp Concierge</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Quick questions regarding sales, accounts, or service onboarding.
              </p>
              <div className="pt-2">
                <Button href="/whatsapp" variant="outline" size="sm" className="w-full">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated text-center space-y-3">
              <Activity className="w-8 h-8 text-cyan-500 mx-auto" />
              <h3 className="font-bold text-foreground text-base">Live System Status</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Check real-time datacenter telemetry, uptime logs, and maintenance windows.
              </p>
              <div className="pt-2">
                <Button href="/status" variant="outline" size="sm" className="w-full">
                  View Status Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
