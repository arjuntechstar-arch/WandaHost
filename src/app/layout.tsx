import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeStudio } from "@/components/ui/ThemeStudio";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WandaHost | Hosting, Cloud, Managed Infrastructure & AI",
  description:
    "WandaHost provides domains, hosting, cloud infrastructure, managed services and AI solutions for modern businesses.",
  keywords: [
    "hosting",
    "cloud infrastructure",
    ".NET hosting",
    "ASP.NET Core",
    "VPS",
    "managed WordPress",
    "business email",
    "AI automation",
    "WhatsApp AI",
  ],
  authors: [{ name: "WandaHost" }],
  creator: "WandaHost",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://wandahost.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wandahost.com",
    title: "WandaHost | Hosting, Cloud, Managed Infrastructure & AI",
    description:
      "WandaHost provides domains, hosting, cloud infrastructure, managed services and AI solutions for modern businesses.",
    siteName: "WandaHost",
  },
  twitter: {
    card: "summary_large_image",
    title: "WandaHost | Hosting, Cloud, Managed Infrastructure & AI",
    description:
      "WandaHost provides domains, hosting, cloud infrastructure, managed services and AI solutions for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wandahost.com/#organization",
        name: "WandaHost",
        url: "https://wandahost.com",
        description:
          "Hosting, Cloud, Managed Infrastructure & AI for Modern Businesses.",
      },
      {
        "@type": "WebSite",
        "@id": "https://wandahost.com/#website",
        url: "https://wandahost.com",
        name: "WandaHost",
        publisher: {
          "@id": "https://wandahost.com/#organization",
        },
      },
    ],
  };

  const themeInitScript = `
    (function() {
      try {
        var mode = localStorage.getItem('wandahost-theme-mode') || localStorage.getItem('wandahost-theme') || 'dark';
        if (mode === 'light') {
          document.documentElement.classList.add('light');
        } else if (mode === 'oled') {
          document.documentElement.classList.add('oled', 'dark');
        } else {
          document.documentElement.classList.add('dark');
        }
        var finish = localStorage.getItem('wandahost-color-finish') || 'solid';
        if (finish === 'gradient') {
          document.documentElement.classList.add('finish-gradient');
        } else {
          document.documentElement.classList.remove('finish-gradient');
        }
        var cached = localStorage.getItem('wandahost-palette-rgb');
        if (cached) {
          var map = JSON.parse(cached);
          for (var k in map) {
            document.documentElement.style.setProperty(k, map[k]);
          }
        }
      } catch (e) {}
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`min-h-screen flex flex-col bg-background text-foreground font-sans relative selection:bg-brand-500/30 selection:text-white ${sansFont.variable} ${monoFont.variable}`}>
        <ThemeProvider>
          <ToastProvider>
            {/* Dynamic Ambient Background Lights */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div
                className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[140px] transition-colors duration-700 opacity-70"
                style={{ backgroundColor: "rgba(var(--brand-600-rgb, 79 70 229), 0.14)" }}
              />
              <div
                className="absolute top-[40%] -left-[10%] w-[600px] h-[500px] rounded-full blur-[160px] transition-colors duration-700 opacity-60"
                style={{ backgroundColor: "rgba(var(--accent-secondary-rgb, 6 182 212), 0.10)" }}
              />
              <div
                className="absolute bottom-[10%] -right-[10%] w-[600px] h-[500px] rounded-full blur-[150px] transition-colors duration-700 opacity-60"
                style={{ backgroundColor: "rgba(var(--brand-accent-rgb, 139 92 246), 0.10)" }}
              />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>

            {/* Dynamic Theme & Color Studio Drawer & Trigger */}
            <ThemeStudio />

            {/* Smooth Scroll-To-Top Button */}
            <ScrollToTop />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
