import { InfrastructureStatusItem, DayTimelineStatus } from "@/types/services";

export const infrastructureServices: InfrastructureStatusItem[] = [
  {
    id: "web-hosting",
    name: "Website Hosting",
    status: "operational",
    uptimePercentage: 99.98,
    latencyMs: 14,
    lastUpdated: "Just now",
  },
  {
    id: "domain-services",
    name: "Domain Services & DNS",
    status: "operational",
    uptimePercentage: 100.0,
    latencyMs: 8,
    lastUpdated: "Just now",
  },
  {
    id: "email",
    name: "Business Email (IMAP/SMTP)",
    status: "operational",
    uptimePercentage: 99.97,
    latencyMs: 22,
    lastUpdated: "1 min ago",
  },
  {
    id: "vps",
    name: "VPS Infrastructure",
    status: "operational",
    uptimePercentage: 99.99,
    latencyMs: 11,
    lastUpdated: "Just now",
  },
  {
    id: "cloud",
    name: "Cloud Compute & Databases",
    status: "operational",
    uptimePercentage: 99.99,
    latencyMs: 16,
    lastUpdated: "Just now",
  },
  {
    id: "api",
    name: "Public API Gateway",
    status: "operational",
    uptimePercentage: 99.96,
    latencyMs: 19,
    lastUpdated: "Just now",
  },
  {
    id: "portal",
    name: "Customer Portal & Billing",
    status: "operational",
    uptimePercentage: 100.0,
    latencyMs: 25,
    lastUpdated: "Just now",
  },
];

// Generate 90 days of sample timeline data
export function generate90DayTimeline(): DayTimelineStatus[] {
  const days: DayTimelineStatus[] = [];
  const today = new Date();

  for (let i = 89; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];

    // Introduce a couple of realistic simulated maintenance/degraded events for demonstration
    if (i === 18) {
      days.push({
        date: dateStr,
        status: "maintenance",
        description: "Scheduled network switch firmware upgrade (completed in 12 mins)",
      });
    } else if (i === 47) {
      days.push({
        date: dateStr,
        status: "incident",
        description: "Upstream DNS provider latency resolved in 18 minutes",
      });
    } else {
      days.push({
        date: dateStr,
        status: "operational",
      });
    }
  }

  return days;
}
