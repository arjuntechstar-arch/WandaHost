import { MegaMenuConfig, FooterColumn } from "@/types/navigation";

export const megaMenus: Record<string, MegaMenuConfig> = {
  hosting: {
    id: "hosting",
    label: "Hosting",
    description: "Reliable, high-speed hosting built on modern NVMe hardware.",
    featured: {
      title: ".NET Application Specialist",
      description: "Dedicated IIS, ASP.NET Core, MS SQL Server, and automated GitHub CI/CD deployments.",
      ctaLabel: "Deploy .NET",
      href: "/dotnet-hosting",
      badge: "Technical Differentiator",
    },
    categories: [
      {
        title: "Standard & Managed",
        items: [
          {
            name: "Shared Hosting",
            href: "/hosting",
            description: "High-performance web hosting with cPanel and free SSL.",
            iconName: "Server",
          },
          {
            name: "WordPress Hosting",
            href: "/wordpress-hosting",
            description: "Managed WP stack with staging, speed caching, and auto-updates.",
            iconName: "Layers",
            badge: "Optimized",
          },
          {
            name: ".NET Hosting",
            href: "/dotnet-hosting",
            description: "Enterprise Windows & Linux environments for ASP.NET applications.",
            iconName: "Cpu",
            badge: "Specialist",
          },
        ],
      },
      {
        title: "Dedicated & Scale",
        items: [
          {
            name: "VPS Hosting",
            href: "/vps",
            description: "Dedicated compute, root SSH access, and fast NVMe storage.",
            iconName: "HardDrive",
          },
          {
            name: "Reseller Hosting",
            href: "/reseller",
            description: "White-label hosting platform for digital agencies and freelancers.",
            iconName: "Users",
          },
        ],
      },
    ],
  },
  business: {
    id: "business",
    label: "Business",
    description: "Essential business communication, development, and security tools.",
    featured: {
      title: "WhatsApp AI Automation",
      description: "Automate appointment bookings, lead captures, and customer support on WhatsApp.",
      ctaLabel: "See Demo",
      href: "/whatsapp",
      badge: "High Conversion",
    },
    categories: [
      {
        title: "Communications & Web",
        items: [
          {
            name: "Business Email",
            href: "/business-email",
            description: "Professional domain email with SPF/DKIM and spam filtering.",
            iconName: "Mail",
          },
          {
            name: "Website Services",
            href: "/website-services",
            description: "Professional custom website design, launch, and maintenance.",
            iconName: "Globe",
          },
        ],
      },
      {
        title: "Continuity & Protection",
        items: [
          {
            name: "Security & WAF",
            href: "/security",
            description: "Perimeter firewall, malware isolation, and DDoS protection.",
            iconName: "ShieldCheck",
          },
          {
            name: "Automated Backups",
            href: "/backup",
            description: "Offsite automated snapshots and 1-click disaster recovery.",
            iconName: "DatabaseBackup",
          },
          {
            name: "System Status & Monitoring",
            href: "/status",
            description: "24/7 service uptime telemetry and real-time alerts.",
            iconName: "Activity",
          },
        ],
      },
    ],
  },
  cloud: {
    id: "cloud",
    label: "Cloud",
    description: "Elastic infrastructure, isolated databases, and managed DevOps.",
    featured: {
      title: "Managed Cloud Migration",
      description: "Our senior cloud engineers assess, architect, and migrate your workloads with zero downtime.",
      ctaLabel: "Schedule Consultation",
      href: "/contact?topic=cloud-consultation",
      badge: "White Glove",
    },
    categories: [
      {
        title: "Compute & Architecture",
        items: [
          {
            name: "Cloud Servers",
            href: "/cloud#servers",
            description: "Scalable virtual cloud instances with high IOPS and private VPC.",
            iconName: "Cloud",
          },
          {
            name: "Managed Cloud",
            href: "/cloud#managed",
            description: "End-to-end administration, patching, and SLA guarantees.",
            iconName: "Wrench",
          },
        ],
      },
      {
        title: "Data & Workflows",
        items: [
          {
            name: "Database Hosting",
            href: "/cloud#databases",
            description: "Managed PostgreSQL, MySQL, and Microsoft SQL instances.",
            iconName: "Database",
          },
          {
            name: "DevOps & CI/CD",
            href: "/cloud#devops",
            description: "Pipeline automation, container workflows, and deployment hooks.",
            iconName: "GitBranch",
          },
        ],
      },
    ],
  },
  ai: {
    id: "ai",
    label: "AI",
    description: "Add conversational and workflow artificial intelligence to your business.",
    featured: {
      title: "AI Website Builder",
      description: "Generate and customize modern business websites in minutes using conversational prompts.",
      ctaLabel: "Explore AI Builder",
      href: "/ai-services#builder",
      badge: "New Release",
    },
    categories: [
      {
        title: "Customer Intelligence",
        items: [
          {
            name: "AI Website Builder",
            href: "/ai-services#builder",
            description: "Instant website generation from natural language prompts.",
            iconName: "Sparkles",
          },
          {
            name: "AI Customer Chatbot",
            href: "/ai-services#chatbot",
            description: "Website widget trained on your business FAQs and catalogs.",
            iconName: "Bot",
          },
        ],
      },
      {
        title: "Automation & Operations",
        items: [
          {
            name: "WhatsApp Automation",
            href: "/whatsapp",
            description: "Conversational customer engagement and reminder flows.",
            iconName: "MessageSquare",
          },
          {
            name: "AI Knowledge Assistant",
            href: "/ai-services#assistant",
            description: "Chat with company manuals, PDF documents, and CRM logs.",
            iconName: "BookOpen",
          },
        ],
      },
    ],
  },
};

export const directNavLinks = [
  { name: "Domains", href: "/domains" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Domains", href: "/domains" },
      { label: "Shared Hosting", href: "/hosting" },
      { label: "Managed WordPress", href: "/wordpress-hosting" },
      { label: "High-Performance VPS", href: "/vps" },
      { label: ".NET Application Hosting", href: "/dotnet-hosting", badge: "Specialist" },
      { label: "Business Email", href: "/business-email" },
      { label: "Managed Cloud", href: "/cloud" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Website Services", href: "/website-services" },
      { label: "Security & WAF", href: "/security" },
      { label: "Automated Backups", href: "/backup" },
      { label: "AI Solutions", href: "/ai-services", badge: "New" },
      { label: "WhatsApp Automation", href: "/whatsapp" },
      { label: "Reseller & Agencies", href: "/reseller" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About WandaHost", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Support & Help Center", href: "/support" },
      { label: "Resource Guides", href: "/resources" },
      { label: "System Status", href: "/status" },
    ],
  },
  {
    title: "Legal & Trust",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Security Standards", href: "/security#standards" },
    ],
  },
];
