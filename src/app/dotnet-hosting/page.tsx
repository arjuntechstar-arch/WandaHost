"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import { formatCurrency } from "@/lib/utils";
import {
  Cpu,
  Database,
  GitBranch,
  Shield,
  Layers,
  Terminal,
  Check,
  ArrowRight,
  Server,
  Zap,
  Code2,
} from "lucide-react";

export default function DotNetHostingPage() {
  const [activeRuntime, setActiveRuntime] = useState<"core" | "framework" | "workers">("core");

  const dotnetPlans = [
    {
      id: "dotnet-basic",
      name: ".NET Core Basic",
      tagline: "For modern ASP.NET Core APIs and web apps",
      monthlyPrice: 14.99,
      yearlyPrice: 11.99,
      storage: "40 GB NVMe",
      apps: "2 Applications",
      features: [
        "Native .NET 8 & .NET 9 LTS support",
        "Isolated IIS 10 Application Pool (Full Trust)",
        "Microsoft SQL Server Express database",
        "Automated GitHub Actions CI/CD webhooks",
        "WebSockets, SignalR & gRPC protocol support",
        "Free Wildcard SSL & daily automated backups",
        "Automated Entity Framework migration execution",
      ],
      isPopular: false,
      ctaText: "Deploy .NET Basic",
    },
    {
      id: "dotnet-pro",
      name: ".NET Core Pro",
      tagline: "High-concurrency production stack with MS SQL",
      monthlyPrice: 28.99,
      yearlyPrice: 22.99,
      storage: "100 GB NVMe",
      apps: "Up to 8 Applications",
      badge: "Architect Choice",
      features: [
        "Support for ASP.NET Core & .NET Framework 4.8",
        "Dedicated MS SQL Server Web Edition database",
        "Uncapped IIS memory & private worker threads",
        "Hangfire & background quartz worker services",
        "Staging deployment slots with instant swap",
        "Live application telemetry & memory profiling",
        "Hourly incremental database backups with point-in-time restore",
        "Direct access to Senior .NET Infrastructure Architect",
      ],
      isPopular: true,
      ctaText: "Deploy .NET Pro",
    },
    {
      id: "dotnet-enterprise",
      name: ".NET Scale Cluster",
      tagline: "Multi-server cluster for enterprise ERP & SaaS",
      monthlyPrice: 79.99,
      yearlyPrice: 64.99,
      storage: "300 GB NVMe",
      apps: "Unlimited Applications",
      features: [
        "Multi-node Windows / Linux hybrid load balancing",
        "High-Availability MS SQL Always-On availability groups",
        "Unlimited isolated Application Pools",
        "Dedicated Redis distributed cache instance",
        "Enterprise Active Directory / LDAP federation",
        "Custom SSL cipher suites & PCI-DSS compliance",
        "Continuous 24/7 telemetry monitoring & 99.99% SLA",
        "Dedicated .NET DevOps engineer assigned to your team",
      ],
      isPopular: false,
      ctaText: "Deploy Enterprise",
    },
  ];

  const dotnetFaqs = [
    {
      question: "Which versions of .NET and Windows Server do you support?",
      answer:
        "We natively support all current and LTS versions of .NET, including .NET 9, .NET 8, .NET 7, .NET 6, and legacy .NET Framework 4.8 / 4.7 / 3.5. Environments run on hardened Windows Server 2022 and modern Linux hypervisors with Kestrel reverse proxies.",
    },
    {
      question: "Can I host both ASP.NET Core and classic .NET Framework apps?",
      answer:
        "Yes! Our .NET Pro and Enterprise plans allow you to run classic ASP.NET Framework applications on IIS 10 alongside modern ASP.NET Core applications within isolated, high-memory application pools.",
    },
    {
      question: "How does GitHub Actions automated deployment work?",
      answer:
        "We provide pre-configured GitHub Actions workflow templates. Whenever you push to your main or staging branch, our webhook securely builds your solution, runs tests, publishes artifacts, and updates your WandaHost deployment slot with zero downtime.",
    },
    {
      question: "Are Microsoft SQL Server databases included?",
      answer:
        "Yes! Our plans include Microsoft SQL Server instances with full SQL Server Management Studio (SSMS) remote access, automated index maintenance, and hourly transaction log snapshots.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="WandaHost Technical Specialty"
        badgeVariant="brand"
        title="Enterprise-Grade"
        highlightedTitle=".NET Application Specialist"
        description="Run your production ASP.NET Core 8/9 and .NET Framework applications on fine-tuned Windows & Linux infrastructure with isolated IIS pools, MS SQL Server, and automated GitHub CI/CD."
        breadcrumbs={[{ label: "Hosting", href: "/hosting" }, { label: ".NET Hosting" }]}
      >
        <Button href="#plans" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          View .NET Plans
        </Button>
        <Button href="/contact?topic=dotnet" variant="outline" size="lg">
          Consult with .NET Architect
        </Button>
      </PageHeader>

      {/* Interactive Runtime Switcher Demonstration */}
      <section className="py-16 bg-surface/40 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Versatile Runtimes Supported
            </span>
            <h2 className="text-2xl font-extrabold text-foreground mt-1">
              Select Your Target .NET Workload Architecture
            </h2>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {[
              { id: "core", label: "ASP.NET Core (.NET 8/9)", icon: Zap },
              { id: "framework", label: "Classic .NET Framework 4.8", icon: Layers },
              { id: "workers", label: "Background Workers & Hangfire", icon: Cpu },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeRuntime === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveRuntime(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "btn-primary shadow-sm"
                      : "bg-surface border border-surface-border text-slate-700 dark:text-slate-300 hover:bg-surface-elevated"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Architecture Spec Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 shadow-xl max-w-4xl mx-auto">
            {activeRuntime === "core" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge variant="brand" size="sm">
                    Modern Stack
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">
                    Next-Gen ASP.NET Core & Minimal APIs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Host lightweight, high-throughput microservices and Blazor web applications with native Kestrel / IIS In-Process hosting. Take advantage of gRPC binary protocol and HTTP/3 support.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-500" />
                      <span>In-Process IIS Hosting for lowest latency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-500" />
                      <span>Entity Framework Core auto-migration scripts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-500" />
                      <span>Blazor WebAssembly and Server interactive render modes</span>
                    </li>
                  </ul>
                </div>
                <div className="relative p-4 rounded-2xl bg-slate-950 font-mono text-xs text-slate-200 border border-slate-800 space-y-2 preserve-dark">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-800/80">
                    <span>{"// Program.cs (ASP.NET Core 9)"}</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`var builder = WebApplication.CreateBuilder(args);\nbuilder.Services.AddWandaHostTelemetry();\nbuilder.Services.AddSqlServerContext(connectionString);\nvar app = builder.Build();\napp.MapGet("/api/health", () => Results.Ok(new { status = "Ready", latency = "2ms" }));\napp.Run();`);
                      }}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white transition-colors"
                    >
                      Copy Snippet
                    </button>
                  </div>
                  <div className="text-purple-400">var builder = WebApplication.CreateBuilder(args);</div>
                  <div className="text-blue-400">builder.Services.AddWandaHostTelemetry();</div>
                  <div className="text-blue-400">builder.Services.AddSqlServerContext(connectionString);</div>
                  <div className="text-purple-400">var app = builder.Build();</div>
                  <div className="text-emerald-400">app.MapGet(&quot;/api/health&quot;, () =&gt; Results.Ok(new &#123; status = &quot;Ready&quot;, latency = &quot;2ms&quot; &#125;));</div>
                  <div className="text-purple-400">app.Run();</div>
                </div>
              </div>
            )}

            {activeRuntime === "framework" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge variant="cyan" size="sm">
                    Legacy & Enterprise
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">
                    Reliable Classic .NET Framework 4.8
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Have critical line-of-business applications, ASP.NET MVC, or WCF services that cannot be migrated to .NET Core yet? Run them in isolated 64-bit application pools with full trust permissions.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>Integrated IIS 10 Application Pools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>Remote MS SQL Server connection strings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-cyan-500" />
                      <span>WCF, WebForms, and MVC 5 compatibility</span>
                    </li>
                  </ul>
                </div>
                <div className="relative p-4 rounded-2xl bg-slate-950 font-mono text-xs text-slate-200 border border-slate-800 space-y-2 preserve-dark">
                  <div className="flex items-center justify-between text-slate-500 text-[11px] pb-1 border-b border-slate-800/80">
                    <span>&lt;!-- web.config --&gt;</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`<system.webServer>\n  <applicationInitialization doAppInitAfterRestart="true">\n    <add initializationPage="/warmup" />\n  </applicationInitialization>\n</system.webServer>`);
                      }}
                      className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 hover:text-white transition-colors"
                    >
                      Copy Snippet
                    </button>
                  </div>
                  <div className="text-blue-400">&lt;system.webServer&gt;</div>
                  <div className="pl-4 text-emerald-400">&lt;applicationInitialization doAppInitAfterRestart=&quot;true&quot;&gt;</div>
                  <div className="pl-8 text-slate-300">&lt;add initializationPage=&quot;/warmup&quot; /&gt;</div>
                  <div className="pl-4 text-emerald-400">&lt;/applicationInitialization&gt;</div>
                  <div className="text-blue-400">&lt;/system.webServer&gt;</div>
                </div>
              </div>
            )}

            {activeRuntime === "workers" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <Badge variant="emerald" size="sm">
                    Background Execution
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">
                    Hangfire Jobs & Background Workers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Execute heavy asynchronous processing, automated recurring billing jobs, and document generation without getting recycled by idle timeout policies.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Idle Timeout disabled for non-terminating workers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Hangfire dashboard with role-based auth</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Queue monitoring and failure telemetry</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 rounded-2xl bg-slate-950 font-mono text-xs text-slate-200 border border-slate-800 space-y-2 preserve-dark">
                  <div className="text-slate-500 text-[11px]">{"// Background worker schedule"}</div>
                  <div className="text-purple-400">RecurringJob.AddOrUpdate(</div>
                  <div className="pl-4 text-blue-400">&quot;daily-statement-generation&quot;,</div>
                  <div className="pl-4 text-emerald-400">() =&gt; invoiceService.GenerateStatements(),</div>
                  <div className="pl-4 text-purple-400">Cron.Daily(0, 0)</div>
                  <div className="text-purple-400">);</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-background relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Production .NET Hosting Tiers
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Backed by our 30-Day Money-Back Guarantee and zero-downtime migration team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {dotnetPlans.map((plan) => (
              <GlowCard
                key={plan.id}
                highlight={plan.isPopular}
                glowColor="indigo"
                className="flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                    {plan.badge && (
                      <Badge variant="brand" size="sm">
                        {plan.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 min-h-[34px]">
                    {plan.tagline}
                  </p>

                  <div className="mt-6 pb-6 border-b border-surface-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-mono tabular-nums">
                        {formatCurrency(plan.yearlyPrice)}
                      </span>
                      <span className="text-xs text-slate-500">/month</span>
                    </div>
                    <p className="text-[11px] text-brand-600 dark:text-brand-400 font-medium mt-1 font-mono tabular-nums">
                      Billed {formatCurrency(plan.yearlyPrice * 12)} annually (Save 20%)
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-surface-border">
                  <Button
                    href={`/contact?plan=${plan.id}&topic=dotnet`}
                    variant={plan.isPopular ? "glow" : "secondary"}
                    className="w-full"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline Visualizer */}
      <section className="py-20 border-t border-surface-border bg-surface/30">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="cyan" size="md">
            Seamless Developer Pipeline
          </Badge>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            From Git Push to Production in Seconds
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Our automated webhook integration deploys your ASP.NET solutions directly from your Git repositories without manual FTP or server logins.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 gap-4 text-left">
            {[
              {
                step: "01",
                title: "Git Push",
                desc: "Commit code to your GitHub, GitLab, or Bitbucket repository.",
                icon: GitBranch,
              },
              {
                step: "02",
                title: "Build & Test",
                desc: "GitHub Actions runs unit tests and compiles your .NET release binaries.",
                icon: Terminal,
              },
              {
                step: "03",
                title: "Staging Slot",
                desc: "Artifacts are published into your isolated staging environment slot.",
                icon: Layers,
              },
              {
                step: "04",
                title: "Instant Swap",
                desc: "Warm-up verified. Instant traffic swap to production with 0ms downtime.",
                icon: Zap,
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-surface-border bg-white dark:bg-surface-elevated/40 shadow-sm relative overflow-hidden"
                >
                  <div className="text-[10px] font-mono font-bold text-brand-600 dark:text-brand-400 mb-2">
                    STAGE {p.step}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-surface border border-surface-border flex items-center justify-center text-foreground mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">{p.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={dotnetFaqs} title=".NET Hosting FAQs" />

      {/* Bottom CTA */}
      <section className="py-16 bg-surface-muted/50 border-t border-surface-border text-center">
        <div className="container max-w-4xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            Have a custom .NET architecture or database migration?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Our Senior .NET Infrastructure Architects will review your solution architecture and recommend the optimal deployment strategy.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button href="/contact?topic=dotnet" variant="primary" size="md">
              Talk to .NET Architect
            </Button>
            <Button href="/vps" variant="outline" size="md">
              View Windows VPS
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
