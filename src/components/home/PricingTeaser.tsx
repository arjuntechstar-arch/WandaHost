"use client";

import React, { useState } from "react";
import { teaserPlans } from "@/data/pricing";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/utils";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function PricingTeaser() {
  const [cycle, setCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="py-24 bg-background relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge variant="cyan" size="md">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Simple plans. No infrastructure gymnastics.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Predictable billing with all core features included. Switch plans or cancel anytime with zero lock-in.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span
              className={`text-xs sm:text-sm font-medium transition-colors ${
                cycle === "monthly" ? "text-slate-900 dark:text-white font-semibold" : "text-slate-500 dark:text-slate-400"
              }`}
            >
              Monthly billing
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={cycle === "yearly"}
              onClick={() => setCycle(cycle === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border border-slate-300 dark:border-transparent bg-slate-200 dark:bg-slate-800 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500/50 shadow-inner"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full btn-primary shadow-md ring-0 transition duration-200 ease-in-out ${
                  cycle === "yearly" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  cycle === "yearly" ? "text-slate-900 dark:text-white font-semibold" : "text-slate-500 dark:text-slate-400"
                }`}
              >
                Annual billing
              </span>
              <Badge variant="emerald" size="sm">
                Save 20%
              </Badge>
            </div>
          </div>
        </div>

        {/* 3 Configurable Plans (Launch, Grow, Scale) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teaserPlans.map((plan) => {
            const price = cycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
            const billedText =
              cycle === "yearly"
                ? `Billed ${formatCurrency(price * 12)} annually`
                : "Billed monthly";

            return (
              <GlowCard
                key={plan.id}
                highlight={plan.isPopular}
                className={`flex flex-col justify-between ${
                  plan.isPopular ? "border-brand-500/50 md:-translate-y-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <Badge
                        variant={plan.isPopular ? "brand" : "surface"}
                        size="sm"
                      >
                        {plan.badge}
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 min-h-[34px]">
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 pb-6 border-b border-surface-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono">
                        {formatCurrency(price)}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">/month</span>
                    </div>
                    <p className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                      {billedText}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border/60">
                  <Button
                    href={plan.ctaHref}
                    variant={plan.isPopular ? "glow" : "secondary"}
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Compare All Plans CTA */}
        <div className="mt-14 text-center">
          <Button href="/pricing" variant="outline" size="lg">
            Compare All Plans & Add-ons
          </Button>
        </div>
      </div>
    </section>
  );
}
