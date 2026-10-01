"use client";

import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  MessageSquare,
  CheckCheck,
  Send,
  Calendar,
  DollarSign,
  Globe2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    sender: "bot",
    text: "Hello! Welcome to WandaHost. I'm your 24/7 AI assistant. How can I help you today?",
    time: "10:30 AM",
  },
];

const faqs = [
  {
    question: "Do I need an official WhatsApp Business API account?",
    answer:
      "Yes. We configure and manage your official Meta Cloud API integration for your business phone number so you never have to worry about SIM cards or unauthorized ban risks.",
  },
  {
    question: "Can human agents take over an active WhatsApp conversation?",
    answer:
      "Yes! Our shared team inbox lets multiple human customer service representatives monitor live chats, step in instantly, or hand back to the AI bot at any time.",
  },
  {
    question: "How does appointment booking sync with my calendar?",
    answer:
      "The bot integrates with Google Calendar, Outlook, and Calendly. When a customer agrees on a slot, it automatically books the appointment, sends a calendar invite, and dispatches automated reminder notifications 1 hour prior.",
  },
  {
    question: "Can I broadcast promotional updates or newsletters via WhatsApp?",
    answer:
      "Yes, using Meta-approved template messages. You can dispatch personalized marketing announcements, shipping updates, and abandoned cart reminders with up to 98% open rates.",
  },
];

export default function WhatsAppAutomationPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendQuestion = (prompt: string) => {
    if (!prompt.trim() || isTyping) return;
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: prompt,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let botReply = "Thank you for reaching out! Our team is available 24/7 to assist with your request.";
      const lower = prompt.toLowerCase();
      if (lower.includes("pricing") || lower.includes("cost") || lower.includes("plan")) {
        botReply = "Our hosting plans start at just $4.99/mo for Launch, $9.99/mo for Grow, and Cloud VPS from $18/mo. All plans include free SSL and NVMe SSDs!";
      } else if (lower.includes("consultation") || lower.includes("book") || lower.includes("appointment")) {
        botReply = "I can book that right now! Our senior cloud architect is available tomorrow at 2:00 PM EST or 4:30 PM EST. Which time works best for you?";
      } else if (lower.includes("server") || lower.includes("location") || lower.includes("datacenter")) {
        botReply = "WandaHost operates Tier 4 datacenters in Virginia, Oregon, Frankfurt, London, Singapore, and Tokyo with 99.99% SLA guarantees.";
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReply,
        time: "Just now",
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendQuestion(inputText);
    setInputText("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <PageHeader
        breadcrumbs={[{ label: "Business", href: "/business-email" }, { label: "WhatsApp Automation" }]}
        badge="98% Message Open Rate"
        badgeVariant="emerald"
        title="Automate Leads & Support on"
        highlightedTitle="WhatsApp with AI"
        description="Engage customers where they already chat. Automate lead qualification, appointment booking, payment reminders, and customer support with official WhatsApp Cloud API integration."
      >
        <Button href="#simulator" variant="glow" size="lg" rightIcon={<MessageSquare className="w-4 h-4" />}>
          Try WhatsApp Simulator
        </Button>
        <Button href="/contact?topic=whatsapp-demo" variant="outline" size="lg">
          Schedule Live Setup
        </Button>
      </PageHeader>

      {/* Interactive WhatsApp Chat Simulator */}
      <section id="simulator" className="py-20 border-b border-surface-border bg-surface/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Interactive WhatsApp Bot Experience
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Click a sample customer prompt below or type your own question to test our conversational AI flow.
            </p>

            {/* Quick Prompts */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => sendQuestion("Can I book a consultation?")}
                className="px-3.5 py-1.5 rounded-full border border-surface-border bg-white dark:bg-surface-elevated text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors shadow-sm"
              >
                📅 &quot;Can I book a consultation?&quot;
              </button>
              <button
                onClick={() => sendQuestion("What is your hosting pricing?")}
                className="px-3.5 py-1.5 rounded-full border border-surface-border bg-white dark:bg-surface-elevated text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors shadow-sm"
              >
                💰 &quot;What is your hosting pricing?&quot;
              </button>
              <button
                onClick={() => sendQuestion("Where are your servers located?")}
                className="px-3.5 py-1.5 rounded-full border border-surface-border bg-white dark:bg-surface-elevated text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-emerald-500 transition-colors shadow-sm"
              >
                🌐 &quot;Where are your servers located?&quot;
              </button>
            </div>
          </div>

          {/* Phone Frame */}
          <div className="max-w-md mx-auto rounded-[2.5rem] border-4 border-slate-800 bg-slate-900 p-3 shadow-2xl preserve-dark">
            <div className="rounded-[2rem] overflow-hidden bg-slate-950 flex flex-col h-[520px] preserve-dark">
              {/* WhatsApp Header */}
              <div className="p-3.5 bg-emerald-800 text-white flex items-center justify-between shadow-md preserve-dark">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">
                    W
                  </div>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-1">
                      <span>WandaHost Support</span>
                      <CheckCheck className="w-3.5 h-3.5 text-cyan-300" />
                    </div>
                    <div className="text-[10px] text-emerald-200">Online · AI Assistant</div>
                  </div>
                </div>
              </div>

              {/* Chat Message Stream */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] preserve-dark">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                        m.sender === "user"
                          ? "bg-emerald-700 text-white rounded-tr-none"
                          : "bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700"
                      }`}
                    >
                      {m.text}
                      <div
                        className={`text-[9px] mt-1 text-right flex items-center justify-end gap-1 ${
                          m.sender === "user" ? "text-emerald-200" : "text-slate-400"
                        }`}
                      >
                        <span>{m.time}</span>
                        {m.sender === "user" && <CheckCheck className="w-3 h-3 text-cyan-300" />}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex flex-col items-start">
                    <div className="p-3 rounded-2xl rounded-tl-none bg-slate-800 border border-slate-700 text-xs flex items-center gap-1.5 shadow-sm">
                      <span className="text-[11px] text-slate-400 font-medium mr-1">AI Assistant is typing</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.3s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleCustomSubmit} className="p-2.5 bg-slate-900 border-t border-slate-800 flex gap-2 preserve-dark">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-800 text-white placeholder:text-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 preserve-dark"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 border-b border-surface-border">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Forward-Thinking Businesses Choose WhatsApp AI
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
              Replace sluggish email threads with instant conversational commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Zero-Touch Appointment Booking</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Let customers book hair appointments, dental visits, or software demos right within WhatsApp. Automatically synced with Google Calendar.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Cart Recovery & Order Updates</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Recover abandoned checkouts with personalized discount links delivered straight to your customer&apos;s phone with 98% open rates.
                </p>
              </div>
            </GlowCard>

            <GlowCard>
              <div className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">24/7 Autonomous Customer Care</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Never leave high-intent leads waiting overnight. The AI resolves common queries, captures contact details, and routes hot leads immediately.
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={faqs} />

      {/* CTA */}
      <section className="py-20 text-center container max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
          Ready to Automate WhatsApp for Your Business?
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Our team handles Meta verification, bot training, and CRM integration from start to finish.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact?topic=whatsapp-setup" variant="glow" size="lg">
            Schedule WhatsApp Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
