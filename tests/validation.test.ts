import { describe, it, expect } from "vitest";
import {
  domainSearchSchema,
  contactFormSchema,
  supportTicketSchema,
  loginSchema,
  signupSchema,
} from "@/lib/validation/schemas";

describe("Validation Schemas", () => {
  it("validates domain query correctly", () => {
    expect(domainSearchSchema.safeParse({ query: "wandahost.com" }).success).toBe(true);
    expect(domainSearchSchema.safeParse({ query: "startup" }).success).toBe(true);
    expect(domainSearchSchema.safeParse({ query: "a" }).success).toBe(false); // too short
    expect(domainSearchSchema.safeParse({ query: "invalid..domain" }).success).toBe(false);
  });

  it("validates contact form submission correctly", () => {
    const valid = {
      name: "Alex Smith",
      email: "alex@example.com",
      service: "hosting",
      message: "I need to discuss migrating 12 WordPress instances to WandaHost.",
    };
    expect(contactFormSchema.safeParse(valid).success).toBe(true);

    const invalidEmail = { ...valid, email: "invalid-email" };
    expect(contactFormSchema.safeParse(invalidEmail).success).toBe(false);

    const shortMessage = { ...valid, message: "Hi" };
    expect(contactFormSchema.safeParse(shortMessage).success).toBe(false);
  });

  it("validates support ticket submission correctly", () => {
    const valid = {
      name: "Sarah Chen",
      email: "sarah@company.com",
      category: "hosting",
      subject: "DNS record propagation assistance",
      message: "We updated our CNAME records 30 minutes ago and need verification.",
      priority: "medium",
    };
    expect(supportTicketSchema.safeParse(valid).success).toBe(true);
  });

  it("validates login & signup schemas correctly", () => {
    expect(
      loginSchema.safeParse({
        email: "user@wandahost.com",
        password: "securepassword123",
        rememberMe: true,
      }).success
    ).toBe(true);

    expect(
      signupSchema.safeParse({
        name: "Dev User",
        email: "dev@company.io",
        password: "short",
        acceptTerms: true,
      }).success
    ).toBe(false); // password too short

    expect(
      signupSchema.safeParse({
        name: "Dev User",
        email: "dev@company.io",
        password: "longenoughpassword",
        acceptTerms: false,
      }).success
    ).toBe(false); // must accept terms
  });
});
