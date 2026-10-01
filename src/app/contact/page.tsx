"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  Headphones,
  ShieldCheck,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialTopic = searchParams.get("topic") || "general";

  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = searchParams.get("topic");
    if (t) setTopic(t);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated p-6 sm:p-10 shadow-xl">
      {submitted ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-foreground">Message Received!</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto">
            Thank you for reaching out, {name}. A senior WandaHost technical specialist has been notified and will reply to <span className="font-semibold text-foreground">{email}</span> in under 15 minutes.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Inquiry Topic
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="general">General Inquiry</option>
                <option value="cloud-consultation">Managed Cloud & Migration</option>
                <option value="dotnet">.NET / Windows Server Hosting</option>
                <option value="vps">Dedicated VPS Custom Architecture</option>
                <option value="whatsapp">WhatsApp AI Setup</option>
                <option value="agency">Agency / Reseller Partnership</option>
                <option value="support">Technical Support</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Website or Domain (Optional)
              </label>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="yourdomain.com"
                className="w-full px-4 py-3 rounded-xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              How Can We Help You? *
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your workload, current hosting provider, or technical requirements..."
              className="w-full p-4 rounded-xl border border-surface-border bg-surface/30 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            variant="glow"
            size="lg"
            className="w-full"
            rightIcon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
          >
            {isSubmitting ? "Sending to Engineering Team..." : "Submit Inquiry"}
          </Button>

          <p className="text-center text-[11px] text-slate-500">
            Guaranteed response time within 15 minutes. We never sell or share your contact info.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Company", href: "/about" }, { label: "Contact Us" }]}
        badge="24/7 Human Engineering"
        badgeVariant="cyan"
        title="We're Here to Help"
        highlightedTitle="Let's Connect"
        description="Whether you have questions about cloud migration, need assistance choosing a server configuration, or want to schedule an architecture review."
      />

      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Form wrapped in Suspense for searchParams */}
            <div className="lg:col-span-7">
              <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading form...</div>}>
                <ContactFormInner />
              </Suspense>
            </div>

            {/* Right: Channels & Direct Reach */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">24/7 Direct Engineering Support</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Existing client facing an urgent server question? Open a ticket in the portal or chat directly with on-duty sysadmins.
                </p>
                <div className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                  support@wandahost.com · &lt; 8 min avg reply
                </div>
              </div>

              <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">WhatsApp Business Concierge</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Chat directly with our sales team and cloud architects on WhatsApp for quick scoping.
                </p>
                <Button href="/whatsapp" variant="outline" size="sm">
                  Message on WhatsApp
                </Button>
              </div>

              <div className="p-6 rounded-3xl border border-surface-border bg-white dark:bg-surface-elevated/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Global Engineering Hubs</h3>
                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 leading-relaxed">
                  <p><strong>Americas:</strong> 1200 Wilson Blvd, Arlington, VA, USA</p>
                  <p><strong>Europe:</strong> Mainzer Landstraße 180, Frankfurt, Germany</p>
                  <p><strong>Asia-Pacific:</strong> Marina Bay Financial Centre, Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
