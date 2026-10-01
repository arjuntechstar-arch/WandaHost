# WandaHost — AI Website Builder Specification

This package is a master prompt and implementation specification for generating the WandaHost hosting/cloud/AI services website with an AI coding agent.

## How to use

1. Give `MASTER_PROMPT.md` to your coding AI/agent.
2. Let it inspect the entire specification before writing code.
3. Ask it to build the application end-to-end, not merely create a mockup.
4. Use `CONTENT.md` for approved website copy and product positioning.
5. Use `ARCHITECTURE.md` for technical structure and future backend integration.
6. Use `ACCEPTANCE_CRITERIA.md` as the completion checklist.

## Default stack

- Next.js + TypeScript
- Tailwind CSS
- Framer Motion / Motion for animations
- shadcn/ui where useful
- Lucide icons
- Responsive-first design
- Vercel-ready deployment
- API/service abstraction prepared for future backend integration

The generated site should work with mock data initially, while keeping APIs and data models clean enough to connect a real billing, domain, hosting, CRM and support backend later.
