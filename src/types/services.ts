export type DomainStatus = "available" | "unavailable" | "premium";

export interface DomainSearchResult {
  domain: string;
  tld: string;
  status: DomainStatus;
  pricePerYear: number;
  renewalPrice: number;
  currency: string;
  isPopular?: boolean;
}

export interface SupportTicketInput {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  priority?: "low" | "medium" | "high";
}

export interface SupportTicket {
  id: string;
  createdAt: string;
  status: "open" | "in-progress" | "resolved";
  ticketNumber: string;
}

export interface InfrastructureStatusItem {
  id: string;
  name: string;
  status: "operational" | "degraded" | "maintenance";
  uptimePercentage: number;
  latencyMs: number;
  lastUpdated: string;
}

export interface DayTimelineStatus {
  date: string;
  status: "operational" | "incident" | "maintenance";
  description?: string;
}
