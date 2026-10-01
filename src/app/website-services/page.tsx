"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  Globe,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  Zap,
  ShoppingBag,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const designPackages = [
  {
    id: "starter-site",
    name: "Starter Business Web",
    badge: "For Local & New Brands",
    price: 799,
    timeline: "2 Weeks Delivery",
    desc: "A stunning, modern 5-page custom website designed to turn visitors into paying customers.",
    features: [
      "Up to 5 Custom-Designed Responsive Pages",
      "Mobile-First UI/UX & Fast Load Speeds",
      "Lead Capture & Interactive Contact Form",
      "Basic On-Page SEO & Google Analytics 4",
      "1 Year of WandaHost High-Speed Hosting Included",
      "Free SSL Certificate & Custom Domain Connection",
    ],
  },
  {
    id: "pro-business",
    name: "Growth & E-Commerce",
    badge: "Most Popular",
    isPopular: true,
    price: 1499,
    timeline: "3-4 Weeks Delivery",
    desc: "Full content management system (WordPress or Next.js) with online store capabilities.",
    features: [
      "Up to 15 Custom Responsive Pages or Catalog",
      "Full CMS Integration (Easy self-editing)",
      "Stripe / PayPal Payment Gateway Integration",
      "95+ Google PageSpeed Core Web Vitals Score",
      "Automated Daily Backups & WAF Protection",
      "1 Year of Managed Cloud Hosting Included",
      "Dedicated Project Manager & Revisions",
    ],
  },
  {
    id: "custom-app",
    name: "Custom Web Application",
    badge: "Enterprise & SaaS",
    price: 2999,
    timeline: "4-6 Weeks Delivery",
    desc: "Tailored full-stack portals, booking systems, or SaaS products with database backends.",
    features: [
      "Custom React / Next.js / ASP.NET Architecture",
      "User Authentication, Roles & Permissions",
      "Relational Database (PostgreSQL / MS SQL)",
      "Custom RESTful or GraphQL API Integrations",
      "Automated CI/CD Pipeline & GitHub Deployment",
      "Dedicated Cloud VPS Infrastructure for 1 Year",
      "Post-Launch SLA & Engineering Maintenance",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "We analyze your target market, competitors, and user journeys to map out page wireframes and conversion funnels.",
  },
  {
    step: "02",
    title: "UI/UX & Interactive Design",
    desc: "Our design team crafts bespoke visual mockups in Figma, ensuring typography, palettes, and animations embody your brand.",
  },
  {
    step: "03",
    title: "Clean Modern Coding",
    desc: "We build your website using modern, clean code (Next.js, Tailwind, React, or WordPress) optimized for sub-second speeds.",
  },
  {
    step: "04",
    title: "Testing & High-Speed Launch",
    desc: "Rigorous cross-browser testing, SEO checklist verification, and zero-downtime deployment onto WandaHost high-speed servers.",
  },
];

const faqs = [
  {
    question: "Do I get full ownership of my website design and code?",
    answer:
      "Yes, 100%. Once project milestones are completed and final payment is settled, all intellectual property, source code, design assets, and database credentials are transferred to you.",
  },
  {
    question: "Is hosting included with your website design packages?",
    answer:
      "Yes! Every WandaHost website design package includes 1 full year of our high-performance NVMe cloud hosting, free SSL, and automated daily backups at zero additional cost.",
  },
  {
    question: "Can I easily update content myself after launch?",
    answer:
      "Yes. We configure user-friendly CMS dashboards (WordPress or custom headless CMS) so your team can effortlessly publish blogs, update images, edit text, and add products without touching code.",
  },
  {
    question: "What happens if I need changes or ongoing maintenance?",
    answer:
      "We offer affordable monthly care plans that cover continuous security patches, plugin updates, speed optimizations, and allocated developer hours for new feature requests.",
  },
];

export default function WebsiteServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Business", href: "/website-services" }, { label: "Website Services" }]}
        badge="Custom Web Development"
        badgeVariant="emerald"
        title="Modern, High-Converting"
        highlightedTitle="Websites Built to Scale"
        description="From high-converting brand showcases to bespoke web applications. We design, build, and deploy premium web experiences powered directly on WandaHost high-speed cloud."
      >
        <Button href="#packages" variant="glow" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
          Explore Packages
        </Button>
        <Button href="/contact?topic=custom-website-quote" variant="outline" size="lg">
          Request Custom Estimate
        </Button>
      </PageHeader>

      {/* Process Section */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="cyan" size="md">
              How We Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
              Our 4-Step Development Process
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              A transparent, milestone-driven approach from initial sketch to production launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 relative"
              >
                <div className="text-3xl sm:text-4xl font-black text-brand-600 dark:text-brand-400 font-mono mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Turnkey Web Development Packages
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              All packages include 1 year of free WandaHost cloud hosting, free SSL, and SEO setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl border transition-all duration-300 relative flex flex-col p-8 ${
                  pkg.isPopular
                    ? "border-brand-500 ring-2 ring-brand-500/20 bg-white dark:bg-surface-elevated shadow-xl"
                    : "border-surface-border bg-white dark:bg-surface-elevated/40 hover:border-slate-400 dark:hover:border-slate-600 shadow-md"
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge variant={pkg.isPopular ? "brand" : "cyan"} size="md">
                      {pkg.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{pkg.desc}</p>
                </div>

                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    ${pkg.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500"> one-time</span>
                </div>
                <div className="text-xs text-brand-600 dark:text-brand-400 font-semibold mb-6">
                  {pkg.timeline}
                </div>

                <ul className="space-y-3 mb-8 flex-1 text-xs sm:text-sm">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/contact?topic=website-package&package=${pkg.id}`}
                  variant={pkg.isPopular ? "glow" : "outline"}
                  size="lg"
                  className="w-full"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start {pkg.name}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Highlights */}
      <section className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="brand" size="md">
            Modern Tech Stack
          </Badge>
          <h2 className="text-3xl font-extrabold mt-3">
            Engineered With Proven Modern Technologies
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            We build with cutting-edge tools that guarantee fast loading speeds, effortless maintainability, and top search engine rankings.
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "TypeScript",
              "Node.js",
              "ASP.NET Core",
              "WordPress",
              "Shopify",
              "PostgreSQL",
              "Figma",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl border border-surface-border bg-white dark:bg-surface-elevated text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Ready to Build a Website That Converts?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Schedule a 15-minute scoping call with our lead designer. We will review your goals and provide a detailed timeline and quote.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact?topic=website-call" variant="glow" size="lg">
            Schedule Free Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
