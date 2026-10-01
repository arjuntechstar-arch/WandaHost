"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/animation/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-background">
      {/* Animated Light Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-brand-600/20 via-indigo-600/20 to-cyan-500/20 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2 p-2 px-3 rounded-full bg-white/90 dark:bg-surface-elevated/80 border border-brand-500/30 text-xs text-brand-700 dark:text-brand-300 mb-6 shadow-sm dark:shadow-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Ready to transform your infrastructure?</span>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-tight leading-tight max-w-4xl mx-auto">
            Your next website, app, or business platform starts here.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="mt-6 text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get instant access to NVMe hosting, high-performance .NET environments, cloud compute, and AI automation tools backed by human engineering support.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/hosting"
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Started
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4 text-cyan-400" />}
            >
              Talk to Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
