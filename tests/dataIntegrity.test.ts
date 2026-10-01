import { describe, it, expect } from "vitest";
import { allProducts, businessServices, infrastructureTabs } from "@/data/products";
import { megaMenus, footerColumns } from "@/data/navigation";
import { infrastructureServices, generate90DayTimeline } from "@/data/status";

describe("Data Integrity & Completeness", () => {
  it("includes all primary product categories without placeholder text", () => {
    expect(allProducts.length).toBeGreaterThanOrEqual(9);
    for (const product of allProducts) {
      expect(product.name).toBeTruthy();
      expect(product.slug).toBeTruthy();
      expect(product.description).not.toContain("lorem ipsum");
      expect(product.features.length).toBeGreaterThanOrEqual(4);
      expect(product.startingPrice).toBeGreaterThan(0);
    }
  });

  it("includes all 6 business services", () => {
    expect(businessServices.length).toBe(6);
    const serviceIds = businessServices.map((s) => s.id);
    expect(serviceIds).toContain("business-email");
    expect(serviceIds).toContain("website-services");
    expect(serviceIds).toContain("security");
    expect(serviceIds).toContain("backup");
    expect(serviceIds).toContain("monitoring");
    expect(serviceIds).toContain("whatsapp");
  });

  it("includes the 4 architecture tabs with valid code snippets", () => {
    expect(infrastructureTabs.length).toBe(4);
    const tabIds = infrastructureTabs.map((t) => t.id);
    expect(tabIds).toEqual(["websites", "applications", "apis", "databases"]);
    for (const tab of infrastructureTabs) {
      expect(tab.nodes.length).toBeGreaterThanOrEqual(4);
      expect(tab.codeSnippet.length).toBeGreaterThan(20);
    }
  });

  it("megaMenus covers hosting, business, cloud, and ai with rich items", () => {
    expect(megaMenus.hosting).toBeDefined();
    expect(megaMenus.business).toBeDefined();
    expect(megaMenus.cloud).toBeDefined();
    expect(megaMenus.ai).toBeDefined();

    for (const menu of Object.values(megaMenus)) {
      expect(menu.categories.length).toBeGreaterThanOrEqual(2);
      expect(menu.featured).toBeDefined();
    }
  });

  it("footerColumns contains all 4 major sections", () => {
    expect(footerColumns.length).toBe(4);
    const titles = footerColumns.map((c) => c.title);
    expect(titles).toContain("Products");
    expect(titles).toContain("Solutions");
    expect(titles).toContain("Company");
    expect(titles).toContain("Legal & Trust");
  });

  it("infrastructureServices contains all 7 core systems and generates 90-day timeline", () => {
    expect(infrastructureServices.length).toBe(7);
    const timeline = generate90DayTimeline();
    expect(timeline.length).toBe(90);
  });
});
