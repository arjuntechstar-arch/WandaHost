# WandaHost

> Hosting, Cloud, Managed Infrastructure & AI for Modern Businesses.

WandaHost is a production-quality, animated web platform built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. It provides high-speed cloud infrastructure, specialized .NET hosting, managed WordPress, domain management, enterprise security, and AI workflow automation.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark-first design system
- **Motion**: Framer Motion with `prefers-reduced-motion` compliance
- **Icons**: Lucide React
- **Validation**: Zod
- **Testing**: Vitest
- **Linting**: ESLint (`next/core-web-vitals`)

---

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

### Quickstart with PowerShell (Windows)

You can use the included `run.ps1` script to automate environment setup, dependency checks, and server startup:

```powershell
# Start dev server on http://localhost:3000
.\run.ps1

# Custom port
.\run.ps1 -Port 3001

# Production build and start
.\run.ps1 -Command build
.\run.ps1 -Command start

# Run test suite or linter
.\run.ps1 -Command test
.\run.ps1 -Command lint
```

### Manual Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Testing

Run the automated test suite with Vitest:

```bash
npm test
```

### Linting

Validate code style and Next.js best practices:

```bash
npm run lint
```

### Production Build

Create an optimized production bundle:

```bash
npm run build
npm run start
```

---

## Project Structure

```
├── docs/                 # Product specifications, architecture, and acceptance criteria
├── src/
│   ├── app/              # Next.js App Router pages and metadata
│   ├── components/
│   │   ├── animation/    # Reusable Framer Motion animation primitives (FadeIn, Reveal, Floating)
│   │   ├── home/         # Homepage sections (Hero, Domain Search, Hosting, .NET, AI, etc.)
│   │   ├── layout/       # Navbar, MegaMenu, MobileNav, Footer
│   │   └── ui/           # Design system tokens (Button, GlowCard, Badge, Input, Tabs, Theme)
│   ├── data/             # Centralized datasets (products, pricing, navigation, faqs, resources)
│   ├── lib/              # Mock API services, validation schemas, utilities
│   └── types/            # TypeScript interfaces and contracts
└── tests/                # Vitest test suites (data integrity, pricing, validation, domains)
```

---

## Architecture & Integration Readiness

The frontend connects to an abstracted service layer (`src/lib/api/`):
- `DomainService`: Mock domain search with availability heuristic and intelligent alternative suggestions
- `BillingService`: Order calculation with multi-cycle pricing and discount logic
- `SupportService`: Ticket submission and resource search
- `AuthService`: Authentication session abstraction

Environment variables are configured in `.env.example` to allow seamless swap with live upstream providers (domain registrars, payment gateways, transactional email) without refactoring the UI layer.
