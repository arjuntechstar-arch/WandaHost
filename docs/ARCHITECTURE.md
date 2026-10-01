# WandaHost Technical Architecture

## Frontend

Next.js App Router
TypeScript
Tailwind CSS
Motion
shadcn/ui
Lucide

## Suggested structure

src/
  app/
    page.tsx
    domains/
    hosting/
    wordpress-hosting/
    business-email/
    vps/
    dotnet-hosting/
    cloud/
    security/
    backup/
    website-services/
    ai-services/
    whatsapp/
    reseller/
    pricing/
    about/
    contact/
    support/
    status/
    resources/
    login/
    signup/
  components/
    layout/
    navigation/
    hero/
    pricing/
    products/
    animation/
    forms/
    infrastructure/
    dashboard/
  data/
    products.ts
    pricing.ts
    navigation.ts
    faqs.ts
    resources.ts
    status.ts
  lib/
    api/
    validation/
    seo/
    utils/
  types/

## Service abstraction

interface DomainService {
  search(query: string): Promise<DomainSearchResult[]>
}

interface BillingService {
  getPlans(): Promise<Plan[]>
  createOrder(input: CreateOrderInput): Promise<Order>
}

interface SupportService {
  createTicket(input: CreateTicketInput): Promise<SupportTicket>
}

The initial implementation should use mock services.

## Future backend

Potential future architecture:

Web
  ↓
API Gateway / BFF
  ↓
Identity
Billing
Domain
Hosting
Cloud
Support
Notification
AI
  ↓
Databases / External providers

The frontend must not tightly couple itself to any future provider.

## Deployment

Initial:
Vercel or equivalent Next.js hosting.

Future:
- Containerized deployment
- Azure App Service
- Azure Container Apps
- Linux VM
- Kubernetes if scale requires it

Use environment variables for external services.

## Integrations to design for

Domains:
Registrar API

Payments:
Payment gateway abstraction

Email:
Transactional email provider abstraction

Cloud:
Cloud provider API abstraction

Support:
Ticketing abstraction

Analytics:
Privacy-conscious analytics abstraction

AI:
Provider-agnostic AI service abstraction
