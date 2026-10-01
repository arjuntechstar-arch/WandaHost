"use client";

import React, { useState } from "react";
import { domainService, supportedTlds } from "@/lib/api/domainService";
import { DomainSearchResult } from "@/types/services";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import { formatCurrency } from "@/lib/utils";
import { Search, CheckCircle2, XCircle, Sparkles, ArrowRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DomainSearchSection() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<DomainSearchResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { success, info } = useToast();

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanQuery = query.trim().toLowerCase();

    if (!cleanQuery) {
      setError("Please enter a domain name to search");
      return;
    }

    if (cleanQuery.length < 2) {
      setError("Domain name must be at least 2 characters");
      return;
    }

    setError(null);
    setIsSearching(true);

    try {
      const searchResults = await domainService.search(cleanQuery);
      setResults(searchResults);
    } catch (err) {
      setError("Unable to search domain right now. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleQuickTld = async (tld: string) => {
    const base = (query ? query.split(".")[0].trim() : "") || "mybrand";
    const targetDomain = `${base}${tld}`;
    setQuery(targetDomain);
    setError(null);
    setIsSearching(true);

    try {
      const searchResults = await domainService.search(targetDomain);
      setResults(searchResults);
    } catch {
      setError("Unable to search domain right now. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSelectDomain = (item: DomainSearchResult) => {
    if (item.status === "unavailable") {
      info("Domain Taken", `${item.domain} is already registered. Check our recommended alternatives.`);
      return;
    }
    success("Domain Selected", `${item.domain} has been added to your order setup.`);
  };

  return (
    <section className="py-20 bg-surface/40 border-b border-surface-border relative">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <Badge variant="brand" size="md">
            Instant Domain Registration
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Find your perfect domain
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Establish your digital presence with enterprise DNS, automated SSL renewal, and privacy protection.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="p-2 sm:p-3 rounded-2xl sm:rounded-3xl bg-surface/95 dark:bg-surface-muted/90 border border-surface-border shadow-luminous shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-2">
            <div className="relative w-full flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="yourbrand.com"
                className="w-full bg-transparent text-foreground placeholder:text-slate-400 text-base sm:text-lg pl-12 pr-4 py-3.5 outline-none font-medium"
              />
            </div>
            <Button
              type="submit"
              variant="glow"
              size="lg"
              isLoading={isSearching}
              className="w-full sm:w-auto shrink-0"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Search Domain
            </Button>
          </form>

          {/* Popular TLD quick chips */}
          <div className="mt-3 pt-3 border-t border-surface-border/50 flex flex-wrap items-center justify-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">Quick TLDs:</span>
            {supportedTlds.slice(0, 6).map((item) => (
              <button
                key={item.tld}
                onClick={() => handleQuickTld(item.tld)}
                className="px-3 py-1.5 rounded-xl bg-surface border border-surface-border hover:border-brand-500/50 hover:text-brand-500 transition-colors flex items-center gap-2 shadow-sm text-sm"
              >
                <span className="font-bold text-slate-800 dark:text-slate-200">{item.tld}</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono tabular-nums font-semibold text-xs sm:text-sm">
                  {formatCurrency(item.registrationPrice)}/yr
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Validation Error Message */}
        {error && (
          <p className="mt-3 text-sm sm:text-base text-rose-400 text-center font-medium">
            {error}
          </p>
        )}

        {/* Search Results Display */}
        <AnimatePresence>
          {results && results.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 space-y-3"
            >
              <div className="flex items-center justify-between text-xs text-slate-400 px-2">
                <span>Domain Availability Results</span>
                <span>Ready for instant registration</span>
              </div>

              {/* Primary Match Card */}
              {results.slice(0, 1).map((primary) => (
                <div
                  key={primary.domain}
                  className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md ${
                    primary.status === "available"
                      ? "bg-emerald-950/20 border-emerald-500/30"
                      : primary.status === "premium"
                      ? "bg-purple-950/20 border-purple-500/30"
                      : "bg-slate-900/60 border-slate-700/60 opacity-90"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {primary.status === "available" ? (
                      <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    ) : primary.status === "premium" ? (
                      <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    ) : (
                      <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                        <XCircle className="w-6 h-6" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground tracking-tight">
                          {primary.domain}
                        </span>
                        <Badge
                          variant={
                            primary.status === "available"
                              ? "emerald"
                              : primary.status === "premium"
                              ? "brand"
                              : "outline"
                          }
                          size="sm"
                        >
                          {primary.status.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {primary.status === "available"
                          ? "Great choice! This domain is currently available to register."
                          : primary.status === "premium"
                          ? "High-value premium name with verified commercial appeal."
                          : "This domain is currently registered. Consider alternative TLDs below."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <div className="text-xl font-bold font-mono text-foreground">
                        {formatCurrency(primary.pricePerYear)}
                        <span className="text-xs font-normal text-slate-400">/yr</span>
                      </div>
                      <div className="text-[10px] text-slate-400">
                        Renews at {formatCurrency(primary.renewalPrice)}/yr
                      </div>
                    </div>
                    <Button
                      onClick={() => handleSelectDomain(primary)}
                      disabled={primary.status === "unavailable"}
                      variant={primary.status === "available" ? "primary" : "secondary"}
                      size="sm"
                      rightIcon={<ShoppingCart className="w-3.5 h-3.5" />}
                    >
                      {primary.status === "unavailable" ? "Taken" : "Select"}
                    </Button>
                  </div>
                </div>
              ))}

              {/* Suggestions Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {results.slice(1, 7).map((item) => (
                  <div
                    key={item.domain}
                    className="p-3.5 rounded-xl bg-white dark:bg-surface-elevated/40 border border-surface-border flex items-center justify-between gap-2 hover:border-brand-500/40 shadow-sm dark:shadow-none transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-semibold text-slate-900 dark:text-slate-200">
                          {item.domain}
                        </span>
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                            item.status === "available"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                              : item.status === "premium"
                              ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold"
                              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-medium text-cyan-600 dark:text-cyan-400 mt-0.5 block">
                        {formatCurrency(item.pricePerYear)}/yr
                      </span>
                    </div>
                    <Button
                      onClick={() => handleSelectDomain(item)}
                      disabled={item.status === "unavailable"}
                      variant="outline"
                      size="sm"
                    >
                      {item.status === "unavailable" ? "Taken" : "Select"}
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
