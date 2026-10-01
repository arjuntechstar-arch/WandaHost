import { DomainSearchResult, DomainStatus } from "@/types/services";

export interface TldConfig {
  tld: string;
  registrationPrice: number;
  renewalPrice: number;
  isPopular?: boolean;
}

export const supportedTlds: TldConfig[] = [
  { tld: ".com", registrationPrice: 11.99, renewalPrice: 14.99, isPopular: true },
  { tld: ".net", registrationPrice: 12.99, renewalPrice: 15.99, isPopular: true },
  { tld: ".org", registrationPrice: 13.99, renewalPrice: 16.99 },
  { tld: ".io", registrationPrice: 34.99, renewalPrice: 39.99, isPopular: true },
  { tld: ".ai", registrationPrice: 69.99, renewalPrice: 79.99, isPopular: true },
  { tld: ".app", registrationPrice: 14.99, renewalPrice: 18.99 },
  { tld: ".cloud", registrationPrice: 9.99, renewalPrice: 19.99 },
  { tld: ".tech", registrationPrice: 8.99, renewalPrice: 24.99 },
];

// Simulated reserved/taken domains for realistic behavior
const takenNames = new Set([
  "google",
  "microsoft",
  "apple",
  "wandahost",
  "cloud",
  "hosting",
  "tech",
  "startup",
  "ai",
  "server",
]);

const premiumNames = new Set(["meta", "super", "hyper", "ultra", "nexus", "prime"]);

export class DomainService {
  /**
   * Search for a domain and generate realistic availability and suggestions.
   */
  async search(rawQuery: string): Promise<DomainSearchResult[]> {
    // Simulate real network latency (300ms)
    await new Promise((resolve) => setTimeout(resolve, 300));

    const clean = rawQuery.toLowerCase().trim().replace(/^https?:\/\//, "");
    const parts = clean.split(".");
    const baseName = parts[0].replace(/[^a-z0-9-]/g, "");
    const requestedTld = parts.length > 1 ? `.${parts.slice(1).join(".")}` : ".com";

    const results: DomainSearchResult[] = [];

    // Helper to determine status
    const getStatus = (name: string, tld: string): DomainStatus => {
      if (premiumNames.has(name) || name.length <= 3) {
        return "premium";
      }
      if (takenNames.has(name) && (tld === ".com" || tld === ".net")) {
        return "unavailable";
      }
      return "available";
    };

    // Primary match
    const primaryTldConfig = supportedTlds.find((t) => t.tld === requestedTld) || supportedTlds[0];
    const primaryStatus = getStatus(baseName, primaryTldConfig.tld);

    results.push({
      domain: `${baseName}${primaryTldConfig.tld}`,
      tld: primaryTldConfig.tld,
      status: primaryStatus,
      pricePerYear: primaryStatus === "premium" ? primaryTldConfig.registrationPrice * 8 : primaryTldConfig.registrationPrice,
      renewalPrice: primaryTldConfig.renewalPrice,
      currency: "USD",
      isPopular: primaryTldConfig.isPopular,
    });

    // Secondary matches across other top TLDs
    for (const tldConfig of supportedTlds) {
      if (tldConfig.tld === primaryTldConfig.tld) continue;

      const altStatus = getStatus(baseName, tldConfig.tld);
      results.push({
        domain: `${baseName}${tldConfig.tld}`,
        tld: tldConfig.tld,
        status: altStatus,
        pricePerYear: altStatus === "premium" ? tldConfig.registrationPrice * 6 : tldConfig.registrationPrice,
        renewalPrice: tldConfig.renewalPrice,
        currency: "USD",
        isPopular: tldConfig.isPopular,
      });
    }

    // Smart suggestions
    const suggestionPrefixes = ["get", "try", "join", "the"];
    for (const prefix of suggestionPrefixes.slice(0, 2)) {
      const suggestedName = `${prefix}${baseName}.com`;
      results.push({
        domain: suggestedName,
        tld: ".com",
        status: "available",
        pricePerYear: 11.99,
        renewalPrice: 14.99,
        currency: "USD",
      });
    }

    return results;
  }
}

export const domainService = new DomainService();
