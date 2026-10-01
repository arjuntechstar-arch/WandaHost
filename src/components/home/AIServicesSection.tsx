"use client";

import React, { useState } from "react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Database,
  ArrowDown,
  Layers,
  Check,
} from "lucide-react";

const aiServices = [
  {
    id: "builder",
    title: "AI Website Builder",
    description: "Generate structured, conversion-ready business websites from a concise text prompt.",
    icon: Sparkles,
    badge: "Next Gen",
    features: ["Instant wireframes", "Tailored copy generation", "Mobile optimized"],
    href: "/ai-services#builder",
  },
  {
    id: "chatbot",
    title: "AI Customer Chatbot",
    description: "24/7 web customer support agent trained strictly on your documentation and product catalog.",
    icon: Bot,
    badge: "24/7 Support",
    features: ["Zero hallucinations guardrails", "Human agent handoff", "Multi-lingual"],
    href: "/ai-services#chatbot",
  },
  {
    id: "assistant",
    title: "AI Knowledge Assistant",
    description: "Empower staff to query internal company documentation, PDFs, and policies with citations.",
    icon: BookOpen,
    badge: "Internal Ops",
    features: ["Vector semantic search", "Source citations", "Private data isolation"],
    href: "/ai-services#assistant",
  },
  {
    id: "whatsapp",
    title: "WhatsApp AI Automation",
    description: "Automate booking confirmations, inbound customer inquiries, and lead qualification on WhatsApp.",
    icon: MessageSquare,
    badge: "High Conversion",
    features: ["Official WhatsApp Business API", "Lead capture CRM sync", "Automated reminders"],
    href: "/whatsapp",
  },
];

export function AIServicesSection() {
  const [activeChannel, setActiveChannel] = useState<"web" | "whatsapp" | "crm">("web");

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-16">
          <Badge variant="cyan" size="md">
            Applied Intelligence
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Add AI to your business
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect your company data to secure, provider-agnostic artificial intelligence layers that automate websites, support, and customer channels.
          </p>
        </div>

        {/* Visual: Business Data Flow into AI Agent and back to Channels */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-surface-muted/50 border border-surface-border backdrop-blur-xl">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Interactive Data Flow Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* 1. Business Data Source */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface/90 border border-surface-border text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/20">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-foreground">1. Company Knowledge</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Product catalog, support FAQs, policy PDFs, and website content securely ingested.
              </p>
              <div className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 font-semibold font-mono inline-block">
                Encrypted Vector Store
              </div>
            </div>

            {/* 2. Middle AI Reasoning Engine (ACTIVE / HIGHLIGHTED) */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-brand-50/90 via-indigo-50/40 to-surface dark:from-brand-950/70 dark:via-surface-muted/60 dark:to-surface border-2 border-brand-500/60 dark:border-brand-500/50 text-center space-y-3 shadow-glow relative ring-1 ring-brand-500/20 dark:ring-brand-400/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 text-white flex items-center justify-center mx-auto shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                2. WandaHost AI Layer
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Semantic retrieval, context synthesis, guardrail validation, and action routing.
              </p>
              <div className="text-xs px-3 py-1 rounded-full bg-brand-500/15 dark:bg-brand-500/25 text-brand-700 dark:text-brand-300 border border-brand-500/30 font-semibold font-mono inline-block">
                Provider-Agnostic LLM
              </div>
            </div>

            {/* 3. Output Channels */}
            <div className="p-5 sm:p-6 rounded-2xl bg-surface/90 border border-surface-border text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-foreground">3. Connected Channels</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Real-time responses delivered seamlessly across your customer touchpoints.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-surface border border-surface-border text-slate-700 dark:text-slate-300 font-medium">
                  Website Chat
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-surface border border-surface-border text-slate-700 dark:text-slate-300 font-medium">
                  WhatsApp
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-surface border border-surface-border text-slate-700 dark:text-slate-300 font-medium">
                  CRM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 AI Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiServices.map((service) => {
            const Icon = service.icon;
            return (
              <GlowCard key={service.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="cyan" size="sm">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed min-h-[48px]">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border/60">
                  <Button
                    href={service.href}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs sm:text-sm font-semibold"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Learn More
                  </Button>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Explore AI Services CTA */}
        <div className="mt-12 text-center">
          <Button href="/ai-services" variant="glow" size="lg">
            Explore AI Services
          </Button>
        </div>
      </div>
    </section>
  );
}
