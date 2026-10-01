"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Cpu,
  HardDrive,
  Globe2,
  CheckCircle2,
  CheckCheck,
  Calendar,
  Sparkles,
  Zap,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Send,
  Sliders,
} from "lucide-react";

interface OsOption {
  id: string;
  name: string;
  icon: string;
}

const osOptions: OsOption[] = [
  { id: "ubuntu", name: "Ubuntu", icon: "🐧" },
  { id: "centos", name: "CentOS / Rocky", icon: "🏔️" },
  { id: "debian", name: "Debian", icon: "🌀" },
  { id: "windows", name: "Windows Server", icon: "🪟" },
  { id: "almalinux", name: "AlmaLinux", icon: "⚡" },
];

const sliderSteps = [
  { cores: 2, ram: 4, nvme: 80, bandwidth: 4, price: 18.0 },
  { cores: 4, ram: 8, nvme: 160, bandwidth: 8, price: 36.0 },
  { cores: 8, ram: 16, nvme: 320, bandwidth: 16, price: 72.0 },
  { cores: 16, ram: 32, nvme: 640, bandwidth: 32, price: 140.0 },
];

export const quickServerPresets = [
  { label: "Starter Web", index: 0, tag: "2C / 4GB" },
  { label: "E-Commerce", index: 1, tag: "4C / 8GB" },
  { label: "High-Traffic API", index: 2, tag: "8C / 16GB" },
  { label: "Scale Cluster", index: 3, tag: "16C / 32GB" },
];

interface ChatBubble {
  id: string;
  sender: "user" | "bot";
  text?: string;
  isBookingCard?: boolean;
}

export function InteractiveShowcaseSection() {
  // Slider state
  const [sliderIndex, setSliderIndex] = useState(1); // default 4 cores / $36
  const [selectedOs, setSelectedOs] = useState("ubuntu");
  const activePlan = sliderSteps[sliderIndex];

  // WhatsApp bot chat state
  const [chatLog, setChatLog] = useState<ChatBubble[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi! How can I help you today? Need to schedule a demo or explore servers?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const handlePromptClick = (prompt: string) => {
    if (!prompt.trim()) return;
    const userMsg: ChatBubble = {
      id: Date.now().toString(),
      sender: "user",
      text: prompt,
    };

    setChatLog((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (prompt.toLowerCase().includes("appointment") || prompt.toLowerCase().includes("availability") || prompt.toLowerCase().includes("book")) {
        const botMsg: ChatBubble = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          isBookingCard: true,
        };
        setChatLog((prev) => [...prev, botMsg]);
      } else {
        const botMsg: ChatBubble = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "WandaHost AI handles 24/7 lead capture, booking sync, and customer support with 98% message open rates. Let me book a 15-min walkthrough for you!",
        };
        setChatLog((prev) => [...prev, botMsg]);
      }
    }, 700);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim() || isTyping) return;
    handlePromptClick(customMsg.trim());
    setCustomMsg("");
  };

  return (
    <section id="server-configurator" className="py-20 md:py-28 relative overflow-hidden bg-surface/30 border-y border-surface-border">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-400/20 via-brand-500/15 to-indigo-500/20 rounded-full blur-[120px] animate-aurora-1" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-gradient-to-tr from-violet-500/15 to-emerald-400/15 rounded-full blur-[100px] animate-aurora-2" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="cyan" size="md">
            Interactive Product Sandbox
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-3">
            Configure Your High-Performance Server &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-cyan-500 dark:from-brand-400 dark:to-cyan-400">
              AI Automations
            </span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Adjust dedicated compute specs in real time, or test our autonomous WhatsApp AI customer concierge below.
          </p>
        </div>

        {/* Dual Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Card: Cloud Server & NVMe Storage Configurator */}
          <div className="lg:col-span-6 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/70 p-6 sm:p-8 shadow-luminous flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div>
              {/* Header with live ticker */}
              <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-surface-border">
                <div>
                  <span className="text-sm uppercase tracking-wider font-bold text-brand-600 dark:text-brand-400">
                    Cloud Server & NVMe Storage
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mt-0.5">
                    Compute Density Configurator
                  </h3>
                </div>

                <div className="text-right p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                    Monthly Cost Ticker
                  </div>
                  <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono tabular-nums">
                    ${activePlan.price.toFixed(2)}
                    <span className="text-sm text-slate-500 font-normal">/mo</span>
                  </div>
                </div>
              </div>

              {/* Specs Metric Badges */}
              <div className="grid grid-cols-4 gap-2 mb-5 text-center">
                <div className="p-3 rounded-xl bg-surface/80 border border-surface-border">
                  <div className="text-xs text-slate-500 font-semibold">CPU Cores</div>
                  <div className="text-xl font-extrabold text-foreground font-mono tabular-nums mt-0.5">
                    {activePlan.cores}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-surface/80 border border-surface-border">
                  <div className="text-xs text-slate-500 font-semibold">RAM (GB)</div>
                  <div className="text-xl font-extrabold text-brand-600 dark:text-brand-400 font-mono tabular-nums mt-0.5">
                    {activePlan.ram} GB
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-surface/80 border border-surface-border">
                  <div className="text-xs text-slate-500 font-semibold">NVMe Storage</div>
                  <div className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono tabular-nums mt-0.5">
                    {activePlan.nvme} GB
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-surface/80 border border-surface-border">
                  <div className="text-xs text-slate-500 font-semibold">Bandwidth</div>
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono tabular-nums mt-0.5">
                    {activePlan.bandwidth} TB
                  </div>
                </div>
              </div>

              {/* Quick Presets Selection */}
              <div className="mb-4">
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Quick Architecture Presets:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {quickServerPresets.map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => setSliderIndex(preset.index)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium flex flex-col items-center justify-center transition-all ${
                        sliderIndex === preset.index
                          ? "btn-primary shadow-sm text-white"
                          : "border border-surface-border bg-surface/60 text-slate-700 dark:text-slate-300 hover:border-slate-400"
                      }`}
                    >
                      <span className="font-bold text-xs">{preset.label}</span>
                      <span className={`text-xs font-mono tabular-nums ${sliderIndex === preset.index ? "text-cyan-200" : "text-slate-500"}`}>
                        {preset.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Range Slider */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <span>Fine-Tune Compute Capacity</span>
                  <span className="font-mono tabular-nums text-brand-600 dark:text-brand-400">
                    Tier {sliderIndex + 1} of {sliderSteps.length}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={sliderSteps.length - 1}
                  step={1}
                  value={sliderIndex}
                  onChange={(e) => setSliderIndex(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 pt-1 font-mono tabular-nums">
                  <span>2 Cores</span>
                  <span>4 Cores</span>
                  <span>8 Cores</span>
                  <span>16 Cores</span>
                </div>
              </div>

              {/* OS Distro Selection */}
              <div className="mb-6">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Operating System (1-Click Deployment)
                </div>
                <div className="flex flex-wrap gap-2">
                  {osOptions.map((os) => (
                    <button
                      key={os.id}
                      onClick={() => setSelectedOs(os.id)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium flex items-center gap-1.5 transition-all ${
                        selectedOs === os.id
                          ? "border-cyan-500 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-bold ring-2 ring-cyan-500/20"
                          : "border-surface-border bg-surface/60 text-slate-600 dark:text-slate-400 hover:border-slate-400"
                      }`}
                    >
                      <span>{os.icon}</span>
                      <span>{os.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Deploy Action */}
            <div className="pt-4 border-t border-surface-border flex items-center gap-3">
              <Button
                href={`/vps?cores=${activePlan.cores}&ram=${activePlan.ram}&os=${selectedOs}`}
                variant="glow"
                size="md"
                className="flex-1"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Configure & Deploy Server
              </Button>
              <Button href="/hosting" variant="outline" size="md">
                View Shared Plans
              </Button>
            </div>
          </div>

          {/* Right Card: Interactive WhatsApp AI Business Automation Widget */}
          <div className="lg:col-span-6 rounded-3xl border border-surface-border bg-surface/95 dark:bg-surface-elevated/70 p-6 sm:p-8 shadow-luminous flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
            <div>
              {/* WhatsApp Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-foreground text-base">
                        WandaHost AI Assistant
                      </span>
                      <span className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">
                        ✓ verified
                      </span>
                    </div>
                    <div className="text-xs text-slate-500">Business Automation Chat · 24/7 Active</div>
                  </div>
                </div>
              </div>

              {/* Chat Stream */}
              <div className="space-y-3 min-h-[220px] max-h-[250px] overflow-y-auto pr-1">
                {chatLog.map((chat) => (
                  <div
                    key={chat.id}
                    className={`flex flex-col ${chat.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    {chat.isBookingCard ? (
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 border border-emerald-500/30 max-w-[90%] text-sm shadow-sm">
                        <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-300 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>Booking Confirmed!</span>
                        </div>
                        <div className="space-y-1 text-slate-700 dark:text-slate-300">
                          <p><strong>Service:</strong> Business Automation Walkthrough</p>
                          <p><strong>Date:</strong> This Friday at 10:00 AM EST</p>
                          <p><strong>Host:</strong> Senior Cloud Solutions Architect</p>
                        </div>
                        <div className="mt-3 flex gap-2 pt-2 border-t border-emerald-500/20">
                          <button className="px-3 py-1.5 rounded-lg bg-emerald-500 text-white text-xs font-semibold shadow-sm">
                            Add to Calendar
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-xs font-semibold text-slate-600 dark:text-slate-300">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`p-3 rounded-2xl text-sm max-w-[85%] leading-relaxed ${
                          chat.sender === "user"
                            ? "bg-brand-600 text-white rounded-tr-none shadow-sm"
                            : "bg-surface/80 border border-surface-border text-slate-800 dark:text-slate-200 rounded-tl-none"
                        }`}
                      >
                        {chat.text}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start">
                    <div className="p-3 rounded-2xl rounded-tl-none bg-surface/80 border border-surface-border text-sm flex items-center gap-1.5 shadow-sm">
                      <span className="text-xs text-slate-500 font-medium mr-1">AI Assistant is typing</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.3s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Prompt Pills */}
              <div className="mt-3 pt-3 border-t border-surface-border">
                <div className="text-xs font-semibold text-slate-500 mb-2">
                  Click a prompt pill to test:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handlePromptClick("Book an appointment")}
                    className="px-3.5 py-2 rounded-full border border-surface-border bg-surface/60 hover:bg-emerald-500/10 hover:border-emerald-500 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors shadow-sm"
                  >
                    📅 Book an appointment
                  </button>
                  <button
                    onClick={() => handlePromptClick("Learn about AI chat")}
                    className="px-3.5 py-2 rounded-full border border-surface-border bg-surface/60 hover:bg-brand-500/10 hover:border-brand-500 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors shadow-sm"
                  >
                    💬 Learn about AI chat
                  </button>
                  <button
                    onClick={() => handlePromptClick("Show Availability")}
                    className="px-3.5 py-2 rounded-full border border-surface-border bg-surface/60 hover:bg-cyan-500/10 hover:border-cyan-500 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors shadow-sm"
                  >
                    ⏰ Show Availability
                  </button>
                </div>
              </div>

              {/* Direct interactive chat input */}
              <form onSubmit={handleCustomSend} className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder="Ask WandaHost AI anything..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-surface border border-surface-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={!customMsg.trim() || isTyping}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-sm font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </button>
              </form>
            </div>

            {/* Footer CTA */}
            <div className="pt-3 border-t border-surface-border mt-3 flex items-center justify-between">
              <span className="text-sm text-slate-500">Official Meta WhatsApp Cloud API</span>
              <Button href="/whatsapp" variant="glow" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore WhatsApp AI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
