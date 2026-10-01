export interface ResourceArticle {
  slug: string;
  title: string;
  category: "Architecture" | "DevOps" | "Security" | "Guides";
  readingTime: string;
  date: string;
  summary: string;
  content: string;
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "modern-dotnet-deployment-guide",
    title: "Deploying High-Performance ASP.NET Core on Windows & IIS",
    category: "Architecture",
    readingTime: "5 min read",
    date: "Sep 2026",
    summary: "A production architecture guide for configuring out-of-process hosting, memory boundaries, and SQL Server connection pooling.",
    content: "Deploying ASP.NET Core applications into production environments requires deliberate planning around application pool configuration, worker thread starvation prevention, and HTTPS reverse proxy routing...",
  },
  {
    slug: "securing-business-email-dkim-dmarc",
    title: "Eliminating Spoofing: The Complete SPF, DKIM, and DMARC Checklist",
    category: "Security",
    readingTime: "4 min read",
    date: "Sep 2026",
    summary: "Ensure your commercial outbound emails reach the inbox without getting rejected by strict modern email gateway filters.",
    content: "Email deliverability has changed significantly. In this guide, we walk through constructing strict SPF record definitions, rotating 2048-bit DKIM keys, and configuring p=reject DMARC policies...",
  },
  {
    slug: "scaling-cloud-vps-architecture",
    title: "When to Scale: Moving from Shared Hosting to Managed Cloud VPS",
    category: "Guides",
    readingTime: "6 min read",
    date: "Sep 2026",
    summary: "Key latency, database connection, and CPU saturation metrics that signal your business is ready for dedicated virtual resources.",
    content: "As your web traffic scales past initial milestones, shared resource contention can impact checkout times and API response latency. Here are the clear architectural thresholds...",
  },
];
