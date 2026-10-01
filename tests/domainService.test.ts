import { describe, it, expect } from "vitest";
import { domainService, supportedTlds } from "@/lib/api/domainService";

describe("DomainService", () => {
  it("provides comprehensive supported TLDs with registration and renewal rates", () => {
    expect(supportedTlds.length).toBeGreaterThanOrEqual(6);
    const com = supportedTlds.find((t) => t.tld === ".com");
    expect(com).toBeDefined();
    expect(com?.registrationPrice).toBeGreaterThan(0);
    expect(com?.renewalPrice).toBeGreaterThan(0);
  });

  it("identifies taken popular domains correctly", async () => {
    const results = await domainService.search("google.com");
    const primary = results[0];
    expect(primary.status).toBe("unavailable");
  });

  it("identifies short premium domains correctly", async () => {
    const results = await domainService.search("ai.io");
    const primary = results[0];
    expect(primary.status).toBe("premium");
    expect(primary.pricePerYear).toBeGreaterThan(50);
  });

  it("marks normal unique domains as available", async () => {
    const results = await domainService.search("innovativestore7791.com");
    const primary = results[0];
    expect(primary.status).toBe("available");
    expect(primary.pricePerYear).toBe(11.99);
  });

  it("generates intelligent alternatives and suggestions", async () => {
    const results = await domainService.search("brandstudio");
    expect(results.length).toBeGreaterThanOrEqual(5);
    const hasSuggestedCom = results.some((r) => r.domain.startsWith("get") || r.domain.startsWith("try"));
    expect(hasSuggestedCom).toBe(true);
  });
});
