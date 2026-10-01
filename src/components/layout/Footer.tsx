import React from "react";
import Link from "next/link";
import { footerColumns } from "@/data/navigation";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-border bg-surface/50 backdrop-blur-md pt-16 pb-12 text-slate-600 dark:text-slate-400">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-surface-border/60">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center shadow-glow">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Wanda<span className="text-cyan-400">Host</span>
              </span>
            </Link>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Hosting, Cloud, Managed Infrastructure & AI for Modern Businesses. Fast, secure, and developer-ready foundation for your digital products.
            </p>

            {/* Status indicator */}
            <div className="pt-2">
              <Link
                href="/status"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-muted border border-surface-border hover:border-emerald-500/40 text-sm text-slate-700 dark:text-slate-300 transition-colors group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 group-hover:text-foreground font-medium">
                  All Systems Operational
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links (4 Columns) */}
          {footerColumns.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-600 dark:text-brand-300 border border-brand-500/30">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} WandaHost. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Notice
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/security#standards" className="hover:text-foreground transition-colors">
              Security Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
