"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import { domainService, supportedTlds, TldConfig } from "@/lib/api/domainService";
import { DomainSearchResult } from "@/types/services";
import {
  Search,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Shield,
  RefreshCw,
  Globe2,
  Lock,
  ArrowRight,
  Mail,
  Zap,
} from "lucide-react";

const domainPerks = [
  {
    icon: <Shield className="w-6 h-6 text-brand-500" />,
    title: "Free WHOIS Privacy Forever",
    desc: "Keep your personal phone number, address, and email hidden from spammers and scraping bots at no extra fee.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-500" />,
    title: "Global Anycast DNS",
    desc: "Sub-millisecond DNS resolution powered by our geographically distributed Anycast nameserver network.",
  },
  {
    icon: <Lock className="w-6 h-6 text-emerald-500" />,
    title: "Domain Theft Lock",
    desc: "Prevent unauthorized transfers with automated registrar registry locks and two-factor transfer authorisations.",
  },
  {
    icon: <Mail className="w-6 h-6 text-indigo-500" />,
    title: "Free Email Forwarding",
    desc: "Create up to 2 domain aliases (e.g., hello@yourbrand.com) and forward incoming messages to your personal inbox.",
  },
];

const faqs = [
  {
    question: "How long does domain registration take?",
    answer:
      "Domain registrations are instantaneous. Once your order is processed, your domain is immediately reserved at the registry and your DNS records propagate worldwide within minutes.",
  },
  {
    question: "Do you charge extra for WHOIS Privacy protection?",
    answer:
      "Never. At WandaHost, WHOIS Privacy Protection is 100% free and included for life with all eligible top-level domains (.com, .net, .org, .io, etc.).",
  },
  {
    question: "Can I transfer my existing domain to WandaHost?",
    answer:
      "Yes! Simply unlock your domain at your current registrar, obtain your EPP/authorization code, and enter it into our transfer wizard. Most transfers include an additional 1-year renewal extension.",
  },
  {
    question: "Can I connect my domain to external hosts like Shopify or GitHub Pages?",
    answer:
      "Yes. Our DNS management panel gives you complete control over A, AAAA, CNAME, MX, TXT, and SRV records with zero restrictions.",
  },
];

export default function DomainsPage() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<DomainSearchResult[] | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    try {
      const res = await domainService.search(query);
      setResults(res);
    } catch {
      // fallback
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero with Domain Search Bar */}
      <PageHeader
        breadcrumbs={[{ label: "Domains" }]}
        badge="Instant Registry Access"
        badgeVariant="cyan"
        title="Find & Register Your"
        highlightedTitle="Perfect Domain Name"
        description="Secure your digital identity with transparent renewal rates, free lifetime WHOIS privacy, and low-latency Anycast DNS management."
      >
        <div className="w-full max-w-2xl mx-auto mt-4">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <div className="absolute left-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your brand name (e.g. acme, myapp.io, brand)..."
              className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white dark:bg-surface-elevated border border-surface-border text-foreground text-sm sm:text-base shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="absolute right-2 btn-primary px-5 py-2.5 rounded-xl text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all shadow-md disabled:opacity-70"
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick TLD Badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Popular:</span>
            {supportedTlds.slice(0, 5).map((tld) => (
              <button
                key={tld.tld}
                onClick={() => {
                  setQuery(`mybrand${tld.tld}`);
                  setTimeout(() => handleSearch(), 50);
                }}
                className="px-2.5 py-1 rounded-lg bg-surface/60 border border-surface-border hover:border-brand-500 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <span className="font-bold text-foreground">{tld.tld}</span>{" "}
                <span className="text-[11px] text-brand-600 dark:text-brand-400 font-medium">
                  ${tld.registrationPrice}/yr
                </span>
              </button>
            ))}
          </div>
        </div>
      </PageHeader>

      {/* Live Domain Search Results */}
      {results && (
        <section className="py-12 border-b border-surface-border bg-surface/30">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-foreground">
                Search Results for &quot;{query}&quot;
              </h3>
              <span className="text-xs text-slate-500">
                {results.length} extensions evaluated
              </span>
            </div>

            <div className="space-y-3">
              {results.map((res, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    res.status === "available"
                      ? "border-emerald-500/30 bg-emerald-500/5 shadow-sm"
                      : res.status === "premium"
                      ? "border-amber-500/30 bg-amber-500/5 shadow-sm"
                      : "border-surface-border bg-white dark:bg-surface-elevated/40 opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {res.status === "available" && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {res.status === "premium" && (
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    )}
                    {res.status === "unavailable" && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-foreground font-mono">
                          {res.domain}
                        </span>
                        {res.status === "premium" && (
                          <Badge variant="amber" size="sm">
                            Premium Domain
                          </Badge>
                        )}
                        {res.isPopular && res.status === "available" && (
                          <Badge variant="cyan" size="sm">
                            Trending
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {res.status === "available"
                          ? `Renews at $${res.renewalPrice}/year · Free WHOIS Privacy included`
                          : res.status === "premium"
                          ? `High-value registry domain · Renews at $${res.renewalPrice}/year`
                          : "Currently registered by someone else"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="text-right">
                      <div className="text-xl font-extrabold text-foreground font-mono tabular-nums">
                        ${res.pricePerYear}
                        <span className="text-xs text-slate-500 font-normal"> / 1st yr</span>
                      </div>
                    </div>

                    {res.status !== "unavailable" ? (
                      <Button
                        href={`/contact?topic=domain-register&domain=${res.domain}`}
                        variant={res.status === "available" ? "glow" : "outline"}
                        size="sm"
                      >
                        Register Now
                      </Button>
                    ) : (
                      <Button
                        href={`/contact?topic=domain-broker&domain=${res.domain}`}
                        variant="ghost"
                        size="sm"
                      >
                        Make Offer
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TLD Pricing Table */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="brand" size="md">
              Transparent Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Popular Domain Extensions & Rates
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              No hidden renewal hikes. Transparent registry rates with full DNS management tools.
            </p>
          </div>

          <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-surface-border bg-surface/50 text-slate-700 dark:text-slate-300 text-xs uppercase font-bold tracking-wider">
                    <th className="py-4 px-6">Domain Extension</th>
                    <th className="py-4 px-6">1-Year Registration</th>
                    <th className="py-4 px-6">Annual Renewal</th>
                    <th className="py-4 px-6">WHOIS Privacy</th>
                    <th className="py-4 px-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border">
                  {supportedTlds.map((tld, idx) => (
                    <tr key={idx} className="hover:bg-surface/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-lg text-foreground font-mono">
                            {tld.tld}
                          </span>
                          {tld.isPopular && (
                            <Badge variant="brand" size="sm">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-bold text-foreground text-base">
                        ${tld.registrationPrice}
                      </td>
                      <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                        ${tld.renewalPrice} / yr
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                          <Shield className="w-3 h-3" /> Included Free
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <Button
                          href={`#`}
                          onClick={() => {
                            setQuery(`mybrand${tld.tld}`);
                            window.scrollTo({ top: 100, behavior: "smooth" });
                          }}
                          variant="outline"
                          size="sm"
                        >
                          Check {tld.tld}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Everything Included With Every Domain
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Other registrars charge $10+/year for privacy and DNS management. We include them automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainPerks.map((perk, i) => (
              <GlowCard key={i}>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-surface-elevated flex items-center justify-center mb-5 border border-surface-border">
                    {perk.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-base">{perk.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Transfer Section */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-xl">
            <Globe2 className="w-12 h-12 text-brand-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Transferring Your Domains to WandaHost Is Easy
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              Consolidate your domains under WandaHost with no downtime. Most domain transfers include an additional 1-year registration extension.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?topic=domain-transfer" variant="glow" size="lg">
                Start Domain Transfer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />
    </div>
  );
}
