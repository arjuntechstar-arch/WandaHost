"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  BookOpen,
  Cpu,
  Layers,
  ShieldCheck,
  Server,
  Zap,
  ArrowRight,
  Clock,
  Tag,
  Search,
} from "lucide-react";

interface ResourceArticle {
  id: string;
  category: "dotnet" | "wordpress" | "cloud" | "security" | "agency";
  title: string;
  excerpt: string;
  readTime: string;
  badge: string;
  date: string;
}

const articles: ResourceArticle[] = [
  {
    id: "dotnet-cicd",
    category: "dotnet",
    badge: ".NET Architecture",
    title: "Deploying ASP.NET Core 9 to IIS with Automated GitHub Actions CI/CD",
    excerpt:
      "A complete walkthrough configuring isolated Application Pools, environment secrets, and webhook-driven zero-downtime rolling deployments.",
    readTime: "8 min read",
    date: "Sep 2026",
  },
  {
    id: "wp-speed",
    category: "wordpress",
    badge: "Performance",
    title: "Optimizing WordPress TTFB: LiteSpeed Cache & Redis Object Caching",
    excerpt:
      "Achieve sub-200ms Time-to-First-Byte (TTFB) by pairing enterprise NVMe storage with server-level LiteSpeed cache rules and Redis memory persistence.",
    readTime: "6 min read",
    date: "Sep 2026",
  },
  {
    id: "cloud-migration",
    category: "cloud",
    badge: "Cloud Ops",
    title: "Zero-Downtime Database Migration: Moving MySQL & PostgreSQL to WandaHost",
    excerpt:
      "Step-by-step replication setup to migrate large production database workloads from AWS or DigitalOcean with zero customer interruption.",
    readTime: "10 min read",
    date: "Aug 2026",
  },
  {
    id: "email-deliverability",
    category: "security",
    badge: "Security & Deliverability",
    title: "Configuring DMARC, DKIM, and SPF: The Ultimate Email Deliverability Blueprint",
    excerpt:
      "How to set up cryptographic DNS records to guarantee your business emails land in Google and Microsoft inboxes, not the spam folder.",
    readTime: "7 min read",
    date: "Aug 2026",
  },
  {
    id: "vps-hardening",
    category: "cloud",
    badge: "Sysadmin Guide",
    title: "Hardening Linux Cloud VPS: SSH Keys, UFW, Fail2Ban, and CIS Benchmarks",
    excerpt:
      "Practical security checklists to lock down Ubuntu and Rocky Linux virtual private servers against automated brute-force botnets.",
    readTime: "9 min read",
    date: "Jul 2026",
  },
  {
    id: "agency-mrr",
    category: "agency",
    badge: "Agency Blueprint",
    title: "The Agency White-Label Playbook: Bundling Care Plans for $3,000/mo ARR",
    excerpt:
      "How digital web agencies turn one-off client site deliveries into predictable recurring monthly hosting and maintenance retainers.",
    readTime: "5 min read",
    date: "Jul 2026",
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === "all" || art.category === selectedCategory;
    const matchesSearch =
      !search ||
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Resources & Guides" }]}
        badge="Engineering Knowledge Base"
        badgeVariant="cyan"
        title="Developer Guides &"
        highlightedTitle="Cloud Architecture Playbooks"
        description="Deep-dive tutorials, deployment walkthroughs, and performance tuning benchmarks written by WandaHost server engineers."
      >
        <div className="w-full max-w-xl mx-auto mt-4 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter guides by topic, framework, or keywords..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-surface-elevated border border-surface-border text-foreground text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
        </div>
      </PageHeader>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {[
              { id: "all", label: "All Guides" },
              { id: "dotnet", label: ".NET & Windows" },
              { id: "wordpress", label: "WordPress" },
              { id: "cloud", label: "Cloud & DevOps" },
              { id: "security", label: "Security & WAF" },
              { id: "agency", label: "Agencies & Resellers" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "btn-primary text-white shadow-md"
                    : "border border-surface-border bg-white dark:bg-surface-elevated text-slate-600 dark:text-slate-400 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center text-slate-500 text-sm">
              No guides found matching &quot;{search}&quot;. Try another search term.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <GlowCard key={art.id}>
                  <div className="p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="brand" size="sm">
                          {art.badge}
                        </Badge>
                        <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3 h-3" /> {art.readTime}
                        </span>
                      </div>

                      <h3 className="font-bold text-foreground text-lg sm:text-xl leading-snug hover:text-brand-500 transition-colors">
                        {art.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                      <span className="text-xs text-slate-400">{art.date}</span>
                      <Button href={`/contact?topic=guide-${art.id}`} variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                        Read Guide
                      </Button>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cloud Migration Assistance Banner */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-surface/50 border border-surface-border">
          <Badge variant="emerald" size="md">
            Hands-on Engineering
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-3">
            Need Expert Assistance Implementing These Workflows?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Our senior DevOps architects can set up your CI/CD pipelines, configure LiteSpeed caching, or migrate your databases for you.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href="/contact?topic=engineering-assistance" variant="glow" size="lg">
              Request Sysadmin Assistance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
