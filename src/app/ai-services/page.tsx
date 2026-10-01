"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Sparkles,
  Bot,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Globe2,
  RefreshCw,
  Send,
} from "lucide-react";

const aiSolutions = [
  {
    id: "builder",
    icon: <Sparkles className="w-6 h-6 text-brand-500" />,
    badge: "New Release",
    title: "AI Website Generator",
    desc: "Describe your business in plain English. Our neural generator writes copy, generates bespoke imagery, structures layouts, and publishes to WandaHost cloud in under 60 seconds.",
    bullets: [
      "Natural language prompt-to-production design",
      "Instant copy generation & royalty-free imagery",
      "One-click responsive mobile & tablet adaptation",
      "Export clean code or host directly on WandaHost",
    ],
  },
  {
    id: "chatbot",
    icon: <Bot className="w-6 h-6 text-cyan-500" />,
    badge: "Customer Intelligence",
    title: "AI Customer Support Chatbot",
    desc: "Train an intelligent conversational chatbot directly on your website URLs, knowledge base articles, and PDF catalogs. Resolves up to 80% of customer support queries 24/7.",
    bullets: [
      "Train in minutes with zero coding required",
      "Strict grounding to avoid factual hallucinations",
      "Multi-lingual support across 95+ languages",
      "Graceful human escalation routing to your support team",
    ],
  },
  {
    id: "assistant",
    icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
    badge: "Enterprise Operations",
    title: "AI Knowledge Base Assistant",
    desc: "Give your team instant semantic search across private company documentation, SOPs, contracts, and CRM logs with end-to-end data encryption.",
    bullets: [
      "Secure private vector database isolation",
      "Zero training on your confidential proprietary data",
      "Integrates with Slack, Microsoft Teams, and Web",
      "Role-based access permissions per department",
    ],
  },
];

const faqs = [
  {
    question: "Is my proprietary business data used to train public AI models?",
    answer:
      "Never. All WandaHost AI solutions operate on private, enterprise-tier vector databases with isolated tenant boundaries. Your documents, chat transcripts, and customer interactions are never shared or used to train external foundation models.",
  },
  {
    question: "Can I embed the AI Chatbot on non-WandaHost websites?",
    answer:
      "Yes! The WandaHost AI chatbot can be installed on any website (WordPress, Shopify, Webflow, React, HTML) using a simple 1-line JavaScript snippet.",
  },
  {
    question: "What happens when the AI chatbot doesn't know the answer?",
    answer:
      "Our bots are equipped with smart confidence scoring. If a customer question falls outside the bot's indexed knowledge base, it seamlessly prompts for an email address or routes the conversation directly to your human support agents.",
  },
  {
    question: "How does the AI Website Builder generate pages?",
    answer:
      "It leverages fine-tuned generative layout models that produce accessible, semantic HTML/React components styled with Tailwind CSS, pre-loaded with relevant copy tailored to your industry niche.",
  },
];

export default function AiServicesPage() {
  const [promptText, setPromptText] = useState("A modern coffee shop and roastery in Seattle with an online bean ordering menu");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPreview, setGeneratedPreview] = useState<string | null>(null);

  const handleSimulateAi = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptText) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedPreview("Generated: Artisan Seattle Roasters — Modern Landing Page with Stripe checkout integration ready!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "AI Solutions" }]}
        badge="Autonomous Business Intelligence"
        badgeVariant="brand"
        title="Supercharge Your Business With"
        highlightedTitle="Conversational & Generative AI"
        description="Transform customer interactions and accelerate web development with tailored artificial intelligence trained on your business domain."
      >
        <Button href="#builder" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Try AI Website Builder
        </Button>
        <Button href="/whatsapp" variant="outline" size="lg">
          Explore WhatsApp AI
        </Button>
      </PageHeader>

      {/* Interactive AI Generator Teaser */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge variant="cyan" size="md">
              Live Prompt Demo
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2">
              Try the WandaHost AI Generation Prompt
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">
              Type any business concept to see how our generator designs and structures pages.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated shadow-xl">
            <form onSubmit={handleSimulateAi} className="space-y-4">
              <div className="relative">
                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  rows={3}
                  className="w-full p-4 rounded-2xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="Describe your business, services, and target audience..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                  <span>Generates complete responsive layout + copy in ~30s</span>
                </div>
                <Button
                  type="submit"
                  disabled={isGenerating}
                  variant="glow"
                  size="md"
                  rightIcon={isGenerating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                >
                  {isGenerating ? "Synthesizing Layout..." : "Generate AI Prototype"}
                </Button>
              </div>
            </form>

            {generatedPreview && (
              <div className="mt-6 p-5 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-xs sm:text-sm text-brand-700 dark:text-brand-300 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold">Prototype Synthesized Successfully:</div>
                  <div className="mt-1 text-foreground">{generatedPreview}</div>
                  <div className="mt-3 flex gap-2">
                    <Button href="/contact?topic=ai-builder" variant="glow" size="sm">
                      Deploy this site to WandaHost
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solutions Detail Sections */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {aiSolutions.map((sol, idx) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <Badge variant={idx === 0 ? "brand" : idx === 1 ? "cyan" : "emerald"} size="md">
                  {sol.badge}
                </Badge>
                <h3 className="text-3xl font-extrabold text-foreground">{sol.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {sol.desc}
                </p>

                <ul className="space-y-2.5 pt-2 text-sm text-slate-600 dark:text-slate-300">
                  {sol.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    href={`/contact?topic=ai-suite&solution=${sol.id}`}
                    variant="glow"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Activate {sol.title}
                  </Button>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated p-8 shadow-xl relative overflow-hidden">
                  <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center border border-surface-border mb-6">
                    {sol.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Automated Business Impact</h4>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-2xl bg-surface/50 border border-surface-border">
                      <div className="text-2xl font-black text-brand-600 dark:text-brand-400">80%</div>
                      <div className="text-xs text-slate-500 mt-1">First-Contact Resolution</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-surface/50 border border-surface-border">
                      <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">&lt; 30s</div>
                      <div className="text-xs text-slate-500 mt-1">Instant Deployment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Ready to Add Artificial Intelligence to Your Stack?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Start with our AI Web & Bot starter plan for only $24/month.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/pricing" variant="glow" size="lg">
            View All AI Pricing
          </Button>
          <Button href="/whatsapp" variant="outline" size="lg">
            Explore WhatsApp Automation
          </Button>
        </div>
      </section>
    </div>
  );
}
