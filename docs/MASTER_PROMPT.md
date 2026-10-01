# MASTER PROMPT — BUILD THE WANDAHOST WEBSITE

You are a senior product designer, UX engineer, brand designer, frontend architect and full-stack engineer.

Build a production-quality, animated website for a new hosting, cloud, managed services and AI company called **WandaHost**.

Do not produce a generic hosting template. The website must feel like a modern technology company with a premium visual identity, strong motion design, clear information architecture and conversion-focused customer journeys.

---

# 1. COMPANY

Brand: **WandaHost**

Positioning:
**Hosting, Cloud, Managed Infrastructure & AI for Modern Businesses**

WandaHost starts with domains and hosting, then expands into business email, managed VPS, .NET hosting, cloud services, security, backups, monitoring, websites, AI services, WhatsApp automation and SaaS.

Primary target customers:
- Small and medium businesses
- Startups
- Developers
- Agencies
- Freelancers
- E-commerce businesses
- Organizations needing managed hosting
- .NET/Windows application owners

Brand personality:
- Modern
- Trustworthy
- Technical without being intimidating
- Fast
- Helpful
- Premium but accessible
- Automation-first
- AI-enabled

Avoid:
- Cheap-looking hosting-company visuals
- Excessive gradients everywhere
- Stock-photo-heavy pages
- Fake customer logos
- Fake certifications
- Fake uptime percentages
- Fake testimonials
- Fake customer counts
- Fake awards
- Fake pricing claims

Use placeholders where factual proof is unavailable.

---

# 2. PRIMARY GOAL

The website must convert visitors into:
1. Hosting customers
2. Domain customers
3. Business email customers
4. Managed VPS customers
5. Website/service leads
6. Cloud/AI service leads
7. Reseller/agency customers

Secondary goal:
Position WandaHost as a long-term technology partner rather than a commodity hosting reseller.

---

# 3. REQUIRED TECHNOLOGY

Use:

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion/Framer Motion
- shadcn/ui where appropriate
- Lucide React icons
- ESLint
- Prettier
- Zod for client/server validation where forms exist

Architecture:
- Component-driven
- Reusable sections
- Centralized product/pricing configuration
- Centralized navigation
- Centralized SEO metadata
- Reusable animation primitives
- Responsive design
- Accessibility-first

The project must run with:

npm install
npm run dev

and build with:

npm run build

---

# 4. DESIGN DIRECTION

Create a premium technology brand.

Visual concept:
**"Digital infrastructure that feels alive."**

Use a dark-first visual system with an optional light mode.

Suggested palette:
- Deep near-black / midnight background
- White and soft gray typography
- Electric violet/indigo as primary accent
- Cyan/blue as secondary accent
- Small amounts of green for success states

Do not hard-code a rainbow of colors.

Typography:
- Inter, Geist or another modern sans-serif
- Strong large display headings
- Compact readable body text
- Excellent hierarchy

UI characteristics:
- Soft glass panels
- Fine borders
- Subtle glow
- Large whitespace
- Rounded cards
- Clean iconography
- Layered backgrounds
- Subtle grid/noise textures

The site should look excellent at:
- 1440px desktop
- 1280px laptop
- 1024px tablet
- 768px tablet
- 390px mobile
- 360px mobile

---

# 5. MOTION DESIGN

Animation is a major requirement.

Use purposeful motion, not animation for its own sake.

Implement:

## Global
- Smooth page transitions
- Scroll reveal
- Staggered text entrances
- Subtle background particles/grid movement
- Cursor-responsive glow on desktop where appropriate
- Hover elevation
- Magnetic CTA effect only where it improves usability
- Animated gradient/light beams
- Section transitions

## Hero
- Animated background
- Floating infrastructure nodes
- Slow orbital motion
- Animated code/data snippets
- Text reveal
- CTA entrance
- Product cards floating subtly

## Product cards
- Hover lift
- Border glow
- Icon animation
- Price emphasis
- CTA microinteraction

## Pricing
- Toggle animation
- Feature expansion
- Recommended-plan emphasis
- Smooth monthly/yearly switch

## Domain search
- Search input focus animation
- Loading state
- Availability result animation
- Domain suggestion chips

## Dashboard preview
Create an animated fake infrastructure dashboard showing:
- Websites
- Servers
- Uptime
- Traffic
- Backups
- Security status

## Reduced motion
Respect `prefers-reduced-motion`.

Animations must never make the website difficult to use.

---

# 6. WEBSITE STRUCTURE

Create these routes:

/
 /domains
 /hosting
 /wordpress-hosting
 /business-email
 /vps
 /dotnet-hosting
 /cloud
 /security
 /backup
 /website-services
 /ai-services
 /whatsapp
 /reseller
 /pricing
 /about
 /contact
 /support
 /status
 /resources
 /resources/[slug]
 /login
 /signup

Future-ready placeholders:
 /dashboard
 /dashboard/domains
 /dashboard/hosting
 /dashboard/billing
 /dashboard/support

---

# 7. HEADER

Desktop header:

Logo:
**WandaHost**

Navigation:
- Hosting
- Domains
- Cloud
- Business
- AI
- Resources
- Pricing

Right side:
- Login
- Get Started

Use a mega menu for Hosting, Cloud and Business.

Mega menu should visually group:

Hosting:
- Shared Hosting
- WordPress Hosting
- .NET Hosting
- VPS Hosting
- Reseller Hosting

Business:
- Business Email
- Website Services
- Security
- Backup
- Monitoring

Cloud:
- Cloud Servers
- Managed Cloud
- Database Hosting
- DevOps

AI:
- AI Website Builder
- AI Chatbot
- WhatsApp Automation
- AI Business Solutions

Mobile:
- Animated hamburger
- Full-screen/large drawer
- Accordion categories

---

# 8. HOME PAGE

## Hero

Headline:
**Build. Host. Scale.**

Supporting headline:
**Everything your business needs to get online, stay secure, and grow.**

Supporting copy:
**Domains, hosting, cloud infrastructure, managed services and AI solutions from one technology partner.**

CTA:
- Get Started
- Explore Services

Secondary:
- Search a Domain

Hero visual:
Create an animated infrastructure scene showing:
Domain → Website → Cloud → Security → AI

Do not use a stock image.

---

## Trust/benefit strip

Show four concise benefits:
- Fast infrastructure
- Managed security
- Automated backups
- Human support

Do not invent numerical claims.

---

## Domain Search

Headline:
**Find your perfect domain**

Large animated search field.

Placeholder:
`yourbusiness.com`

Buttons:
- Search Domain

Result mock states:
- Available
- Premium
- Unavailable
- Suggestions

Make this component ready to connect to a real domain registrar API later.

---

## Hosting section

Headline:
**Hosting that grows with you**

Cards:
1. Starter Hosting
2. Business Hosting
3. WordPress Hosting
4. Reseller Hosting

Each card:
- Best for
- Storage
- Websites
- SSL
- Backups
- Support
- CTA

Use configurable mock pricing rather than inventing final commercial pricing.

---

## Infrastructure section

Headline:
**From simple websites to serious infrastructure**

Show animated architecture:

Domain
↓
DNS
↓
CDN
↓
Web Application
↓
Database
↓
Backup
↓
Monitoring
↓
Security

Include tabs:
- Websites
- Applications
- APIs
- Databases

---

## Business services

Headline:
**More than hosting**

Cards:
- Business Email
- Website Development
- Website Maintenance
- Security
- Backup
- Monitoring

---

## .NET specialist section

Headline:
**Built for modern .NET applications**

Copy:
**Deploy ASP.NET and .NET applications with managed Windows/IIS infrastructure, databases, SSL, backups and monitoring.**

Visual:
Animated .NET deployment pipeline:

GitHub → Build → Test → Deploy → IIS → Monitor

CTA:
Explore .NET Hosting

This section is a major differentiator.

---

## AI section

Headline:
**Add AI to your business**

Cards:
- AI Website Builder
- AI Customer Chatbot
- AI Knowledge Assistant
- WhatsApp AI Automation

CTA:
Explore AI Services

Visual:
Business data flowing into an AI agent and back to website/chat/WhatsApp.

---

## Managed cloud section

Headline:
**Infrastructure without the infrastructure headache**

Show:
- VPS
- Managed Cloud
- Database Hosting
- Monitoring
- Backups
- Security

CTA:
Talk to an Infrastructure Expert

---

## Pricing teaser

Headline:
**Simple plans. No infrastructure gymnastics.**

Show three configurable plans:
- Launch
- Grow
- Scale

Do not claim exact prices unless configured.

CTA:
Compare Plans

---

## Why WandaHost

Use visual cards:
- One technology partner
- Developer-friendly
- Security-first
- Automation-first
- Scalable infrastructure
- Practical human support

---

## Final CTA

Headline:
**Your next website, app, or business platform starts here.**

Buttons:
- Get Started
- Talk to Us

Animated background.

---

# 9. DOMAINS PAGE

Include:
- Domain search
- Popular extensions
- Domain transfer
- Domain renewal
- DNS management
- Domain protection
- FAQ

Domain search must have realistic mock states.

---

# 10. HOSTING PAGE

Create product comparison:

Starter
Business
Professional
Reseller

Features:
- SSD/NVMe storage
- Websites
- Bandwidth
- SSL
- Backups
- Email
- Database
- Support

Use a feature comparison table.

Add:
**Need more control? Move to VPS.**

---

# 11. WORDPRESS PAGE

Include:
- Managed WordPress
- One-click install
- Automatic updates
- Backup
- Security
- Performance
- Migration

Animated WordPress stack visualization.

---

# 12. BUSINESS EMAIL PAGE

Products:
- Professional Email
- Team Email
- Email Migration
- Email Backup
- Security setup

Include:
SPF
DKIM
DMARC
Anti-spam
Archiving

CTA:
Set up business email

---

# 13. VPS PAGE

Show:
- Linux VPS
- Windows VPS
- Managed VPS

Controls:
- CPU
- RAM
- Storage
- Region
- OS

Add interactive configuration calculator.

---

# 14. .NET HOSTING PAGE

This should be one of the strongest pages.

Show:
- ASP.NET Core
- .NET 8/9/10-ready positioning should be configurable
- IIS
- SQL Server
- SSL
- Git deployment
- CI/CD
- Scheduled jobs
- Monitoring
- Backup

Architecture diagram:
Developer
↓
GitHub
↓
CI/CD
↓
Build
↓
IIS
↓
Application
↓
SQL Server
↓
Backup + Monitoring

CTA:
Deploy your .NET application

---

# 15. CLOUD PAGE

Products:
- Cloud VM
- Managed Cloud
- Database
- Storage
- Monitoring
- Backup
- DevOps

Explain:
WandaHost can help customers choose between simple hosting and cloud infrastructure.

---

# 16. SECURITY PAGE

Products:
- SSL
- WAF
- Malware scanning
- Security hardening
- Vulnerability scanning
- Monitoring
- Incident assistance

Do not make unsupported security guarantees.

---

# 17. BACKUP PAGE

Show:
Website Backup
Database Backup
Server Backup
Microsoft 365 Backup
Google Workspace Backup

Visualize:

Production
↓
Encrypted Backup
↓
Off-site Storage
↓
Restore

Use generic claims until actual retention and infrastructure are configured.

---

# 18. WEBSITE SERVICES PAGE

Services:
- Business websites
- Landing pages
- E-commerce
- WordPress
- Website redesign
- SEO foundations
- Performance optimization
- Maintenance

Show packages:
Launch
Business
Growth

Pricing configurable.

---

# 19. AI SERVICES PAGE

This page should feel futuristic.

Services:
### AI Website Builder
Generate business websites from a short description.

### AI Customer Chatbot
Website-based AI support.

### AI Knowledge Assistant
Chat with company documents and knowledge.

### WhatsApp AI
Automated customer conversations.

### AI Automation
Connect business workflows to AI.

Architecture visual:

Business Data
↓
AI Layer
↓
Website | WhatsApp | CRM | Email | Support

---

# 20. WHATSAPP PAGE

Explain:
- WhatsApp automation
- Notifications
- Lead capture
- Appointment reminders
- Customer support
- AI assistant

Include sample conversation UI.

---

# 21. RESELLER PAGE

Target:
- Web agencies
- Freelancers
- IT consultants
- Developers

Features:
- White-label hosting
- Client management
- Billing-ready architecture
- Custom branding
- SSL
- Domain management
- Support options

CTA:
Become a WandaHost Partner

---

# 22. PRICING PAGE

Build a polished pricing engine UI.

Requirements:
- Monthly/yearly toggle
- Product tabs
- Feature comparison
- FAQ
- Add-ons
- Recommended plan styling

Pricing must come from a centralized configuration file.

Example structure:

const pricing = {
  hosting: [...],
  wordpress: [...],
  email: [...],
  vps: [...],
  reseller: [...]
}

Never hard-code pricing across individual components.

---

# 23. ABOUT PAGE

Tell a concise story:

WandaHost exists to simplify the journey from:
idea → domain → website → application → cloud → AI.

Show values:
- Simplicity
- Reliability
- Security
- Engineering
- Customer success

Do not invent founder names or company history.

---

# 24. CONTACT PAGE

Form fields:
- Name
- Email
- Phone
- Company
- Service
- Message

Service dropdown:
- Domain
- Hosting
- WordPress
- Email
- VPS
- .NET
- Cloud
- Security
- Backup
- Website
- AI
- WhatsApp
- Reseller

Include:
- Sales
- Support
- Technical consultation

Use mock submission initially with clear success state.

---

# 25. SUPPORT PAGE

Create a help-center style page.

Categories:
- Domains
- Hosting
- Email
- VPS
- WordPress
- .NET
- Cloud
- Security
- Billing

Search UI.

Include sample articles but clearly mark them as starter content.

---

# 26. STATUS PAGE

Create a professional status dashboard.

Services:
- Website Hosting
- Domain Services
- Email
- VPS
- Cloud
- API
- Customer Portal

Status:
Operational
Degraded
Maintenance

Use mock status data.

Add 90-day visual timeline using generated sample data.

Do not claim this represents actual production uptime.

---

# 27. LOGIN / SIGNUP

Create polished auth screens.

Login:
- Email
- Password
- Remember me
- Forgot password
- Login

Signup:
- Name
- Company
- Email
- Password
- Terms checkbox

Social auth can be represented as disabled/configurable placeholders unless backend is implemented.

---

# 28. CUSTOMER DASHBOARD MOCKUP

Create a frontend dashboard even if backend is not implemented.

Dashboard cards:
- Domains
- Hosting
- Servers
- Backups
- Security
- Billing
- Support

Dashboard overview:
- Infrastructure health
- Upcoming renewals
- Recent invoices
- Support tickets
- Usage

This should visually match the public website.

---

# 29. COMPONENTS

Create reusable components:

Navbar
MegaMenu
MobileNav
Footer
Hero
SectionHeading
AnimatedBackground
GlowCard
ProductCard
PricingCard
PricingTable
DomainSearch
FeatureGrid
ArchitectureDiagram
InfrastructureVisualizer
StatsStrip
TestimonialPlaceholder
FAQ
CTASection
ContactForm
SupportSearch
StatusTimeline
DashboardPreview
CodeWindow
DeploymentPipeline
ChatDemo
WhatsAppDemo
CookieBanner
ThemeToggle

---

# 30. ANIMATION COMPONENTS

Create reusable motion components:

Reveal
FadeIn
SlideUp
StaggerChildren
Floating
MagneticButton
AnimatedGradient
ScrollProgress
ParallaxSection
CountUp

Respect reduced-motion settings.

---

# 31. SEO

Implement metadata for every route.

Homepage:
Title:
WandaHost | Hosting, Cloud, Managed Infrastructure & AI

Description:
WandaHost provides domains, hosting, cloud infrastructure, managed services and AI solutions for modern businesses.

Use:
- Open Graph
- Twitter metadata
- canonical URLs
- sitemap
- robots.txt
- JSON-LD where useful

Schema types:
- Organization
- WebSite
- Service
- FAQPage where appropriate

Do not invent organization details.

---

# 32. PERFORMANCE

Target excellent Lighthouse scores.

Requirements:
- Optimized images
- Lazy loading
- Avoid huge JS bundles
- Code splitting
- Server components where appropriate
- Minimal client components
- Avoid excessive animation calculations
- Use CSS transforms
- Optimize fonts
- Accessible semantic HTML

---

# 33. ACCESSIBILITY

Requirements:
- Keyboard navigation
- Visible focus states
- WCAG-conscious contrast
- Alt text
- Semantic headings
- ARIA only when needed
- Form labels
- Error states
- Reduced motion
- Mobile-friendly touch targets

---

# 34. DATA ARCHITECTURE

Create centralized mock data:

/src/data/products.ts
/src/data/pricing.ts
/src/data/faqs.ts
/src/data/navigation.ts
/src/data/status.ts
/src/data/resources.ts

Create service interfaces so real APIs can later replace mocks.

Suggested interfaces:

DomainService
HostingService
BillingService
SupportService
AuthService
CloudService
AIService

---

# 35. FUTURE BACKEND CONTRACTS

Prepare API abstraction for:

POST /api/domains/search
POST /api/domains/register
POST /api/auth/login
POST /api/auth/register
GET /api/products
GET /api/pricing
POST /api/orders
GET /api/orders/:id
GET /api/invoices
POST /api/support/tickets
GET /api/status
POST /api/contact

Do not pretend these APIs are live.

Use mock service implementations.

---

# 36. BILLING-READY ARCHITECTURE

The UI must be ready for integration with a billing system.

Entities:
Customer
Product
Plan
Subscription
Order
Invoice
Payment
Domain
HostingAccount
Server
SupportTicket

Payment gateway should be abstracted.

Do not hard-code one provider into UI components.

---

# 37. ADMIN-READY ARCHITECTURE

Prepare route structure for future:

/admin
/admin/products
/admin/pricing
/admin/orders
/admin/customers
/admin/domains
/admin/hosting
/admin/servers
/admin/invoices
/admin/tickets
/admin/status

Do not implement fake admin security. Keep these as architectural placeholders unless authentication is actually implemented.

---

# 38. FOOTER

Columns:

Products
- Domains
- Hosting
- WordPress
- VPS
- .NET Hosting
- Business Email
- Cloud

Solutions
- Website Services
- Security
- Backup
- AI
- WhatsApp
- Reseller

Company
- About
- Contact
- Support
- Resources
- Status

Legal
- Privacy
- Terms
- Refund Policy

Bottom:
© WandaHost. All rights reserved.

Use placeholder legal links until final legal documents exist.

---

# 39. MICROINTERACTIONS

Add polished details:
- Buttons show arrow movement
- Links underline/slide
- Cards respond to cursor
- Inputs glow subtly when focused
- Success messages animate
- Loading skeletons
- Toast notifications
- Copy buttons
- Tooltip for technical terms
- Smooth accordion transitions

Avoid excessive motion.

---

# 40. RESPONSIVE BEHAVIOR

Mobile is not a shrunk desktop.

Re-design:
- Navigation
- Hero visual
- Pricing tables
- Architecture diagrams
- Mega menus
- Dashboard
- Comparison tables

Ensure no horizontal overflow.

---

# 41. CONTENT RULE

Do not use lorem ipsum.

Write concise real website copy based on this specification.

When information is unknown:
- use configurable placeholders
- label demo/sample data where appropriate
- never fabricate factual business claims

---

# 42. ERROR / EMPTY / LOADING STATES

Every interactive area must have:
- Loading state
- Empty state
- Error state
- Success state

Examples:
Domain search
Contact form
Support search
Login
Signup
Pricing calculator

---

# 43. SECURITY

Frontend:
- Never expose secrets
- Never put API keys in client code
- Validate forms
- Sanitize user-generated display content
- Use environment variables
- Document required environment variables

Create `.env.example`.

---

# 44. README

README must include:
- Project overview
- Stack
- Installation
- Development
- Build
- Environment variables
- Deployment
- Project structure
- Future backend integration
- Domain registrar integration notes
- Payment integration notes

---

# 45. TESTING

Add:
- Type checking
- Linting
- Basic unit tests for pricing calculations
- Component tests for important interactive components
- E2E smoke tests for:
  - homepage
  - domain search
  - pricing toggle
  - contact form
  - navigation
  - mobile navigation

---

# 46. FINAL QUALITY BAR

Before declaring completion:

1. Run build.
2. Fix all TypeScript errors.
3. Fix lint errors.
4. Verify every route.
5. Verify mobile layouts.
6. Verify animations.
7. Verify reduced motion.
8. Verify keyboard navigation.
9. Verify forms.
10. Verify no broken links.
11. Verify no placeholder lorem ipsum.
12. Verify no fake claims.
13. Verify SEO metadata.
14. Verify loading/error/success states.
15. Verify pricing comes from centralized configuration.
16. Verify the site feels like one coherent brand.

Do not stop at a landing page.

Build the complete multi-page WandaHost website described above.
