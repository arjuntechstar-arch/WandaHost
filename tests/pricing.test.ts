import { describe, it, expect } from "vitest";
import { calculatePrice, teaserPlans, categorizedPricing, pricingAddOns } from "@/data/pricing";
import { billingService } from "@/lib/api/billingService";
import { quickServerPresets } from "@/components/home/InteractiveShowcaseSection";

describe("Pricing Calculations & Services", () => {
  it("calculates monthly pricing with zero discount", () => {
    const res = calculatePrice(9.99, 7.99, "monthly");
    expect(res.billedAmount).toBe(9.99);
    expect(res.perMonthEquivalent).toBe(9.99);
    expect(res.savingsPercentage).toBe(0);
  });

  it("calculates annual pricing with ~20% discount", () => {
    const res = calculatePrice(9.99, 7.99, "yearly");
    expect(res.billedAmount).toBe(95.88);
    expect(res.perMonthEquivalent).toBe(7.99);
    expect(res.savingsPercentage).toBeGreaterThanOrEqual(20);
  });

  it("ensures all teaser plans have required structure and valid prices", () => {
    expect(teaserPlans.length).toBe(3);
    for (const plan of teaserPlans) {
      expect(plan.id).toBeDefined();
      expect(plan.monthlyPrice).toBeGreaterThan(0);
      expect(plan.yearlyPrice).toBeLessThan(plan.monthlyPrice);
      expect(plan.features.length).toBeGreaterThan(3);
    }
  });

  it("ensures all categorized plans have non-zero pricing", () => {
    expect(categorizedPricing.hosting.length).toBeGreaterThan(0);
    expect(categorizedPricing.wordpress.length).toBeGreaterThan(0);
    expect(categorizedPricing.email.length).toBeGreaterThan(0);
    expect(categorizedPricing.vps.length).toBeGreaterThan(0);
    expect(categorizedPricing.dotnet.length).toBeGreaterThan(0);
  });

  it("billingService accurately calculates order totals", async () => {
    const monthlyOrder = await billingService.calculateTotal({
      planId: "plan-grow",
      cycle: "monthly",
    });
    expect(monthlyOrder.total).toBe(9.99);
    expect(monthlyOrder.discount).toBe(0);

    const annualOrder = await billingService.calculateTotal({
      planId: "plan-grow",
      cycle: "yearly",
    });
    expect(annualOrder.total).toBe(95.88);
    expect(annualOrder.discount).toBeGreaterThan(20);
  });

  it("billingService creates mock orders with unique orderIds", async () => {
    const order = await billingService.createOrder({
      planId: "plan-launch",
      cycle: "yearly",
    });
    expect(order.orderId).toMatch(/^WH-\d{6}$/);
    expect(order.status).toBe("pending_payment");
    expect(order.planName).toBe("Launch");
  });

  it("ensures pricingAddOns have non-zero pricing and proper descriptions", () => {
    expect(pricingAddOns.length).toBeGreaterThan(0);
    for (const addon of pricingAddOns) {
      expect(addon.id).toBeDefined();
      expect(addon.monthlyPrice).toBeGreaterThan(0);
      expect(addon.yearlyPrice).toBeGreaterThan(0);
      expect(addon.description.length).toBeGreaterThan(10);
    }
  });

  it("ensures quickServerPresets map correctly to 4 distinct tiers", () => {
    expect(quickServerPresets.length).toBe(4);
    expect(quickServerPresets[0].tag).toContain("2C");
    expect(quickServerPresets[1].tag).toContain("4C");
    expect(quickServerPresets[2].tag).toContain("8C");
    expect(quickServerPresets[3].tag).toContain("16C");
  });
});
