export interface FAQItem {
  id: string;
  category: "general" | "hosting" | "dotnet" | "domains" | "ai" | "billing";
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What makes WandaHost different from traditional hosting companies?",
    answer: "WandaHost combines modern high-speed infrastructure (pure NVMe, LiteSpeed, modern control panels) with specialized services like production .NET hosting, managed cloud architectures, and modern AI automation. Instead of just selling server space, we act as a unified technology partner for modern businesses.",
  },
  {
    id: "faq-2",
    category: "general",
    question: "Do you offer migration assistance from other hosting providers?",
    answer: "Yes. We provide complimentary migration assistance for standard cPanel hosting, WordPress sites, and business email. For complex VPS and .NET multi-tier applications, our technical team works with you to plan a seamless zero-downtime transition.",
  },
  {
    id: "faq-3",
    category: "dotnet",
    question: "Which versions of .NET and Windows Server do you support?",
    answer: "We support modern .NET (including .NET 8, .NET 9 preview, and .NET Core) as well as legacy .NET Framework 4.8. Environments run on Windows Server 2022 with IIS 10, isolated application pools, and dedicated database options including Microsoft SQL Server.",
  },
  {
    id: "faq-4",
    category: "hosting",
    question: "Where are WandaHost servers located?",
    answer: "Our primary infrastructure is hosted in enterprise-grade Tier III+ data centers across North America, Europe, and Asia-Pacific. Network routing is optimized with BGP multi-homing and global Anycast edge networks.",
  },
  {
    id: "faq-5",
    category: "ai",
    question: "How do your AI solutions interact with my existing business data?",
    answer: "Our AI systems connect securely to your public documents, product catalogs, or FAQs using vector retrieval. We do not use your proprietary or customer conversation data to train foundation models, ensuring your commercial privacy is preserved.",
  },
  {
    id: "faq-6",
    category: "billing",
    question: "What is your refund policy?",
    answer: "We offer a 30-day money-back guarantee on all standard shared and WordPress hosting packages. Domain registrations, custom SSL certificates, and dedicated VPS compute allocations are non-refundable once provisioned due to upstream registry costs.",
  },
];
