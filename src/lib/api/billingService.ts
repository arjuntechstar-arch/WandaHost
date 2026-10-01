import { PricingPlan } from "@/types/pricing";
import { teaserPlans } from "@/data/pricing";

export interface OrderItem {
  planId: string;
  cycle: "monthly" | "yearly";
  domainName?: string;
  addOnIds?: string[];
}

export interface CreatedOrder {
  orderId: string;
  planName: string;
  billingCycle: "monthly" | "yearly";
  subtotal: number;
  discount: number;
  total: number;
  createdAt: string;
  status: "pending_payment" | "active";
}

export class BillingService {
  async getPlans(): Promise<PricingPlan[]> {
    return teaserPlans;
  }

  async calculateTotal(item: OrderItem): Promise<{ subtotal: number; discount: number; total: number }> {
    const plan = teaserPlans.find((p) => p.id === item.planId) || teaserPlans[0];
    const isYearly = item.cycle === "yearly";

    const baseMonthly = plan.monthlyPrice;
    const baseYearly = plan.yearlyPrice;

    if (isYearly) {
      const fullAnnualPrice = baseMonthly * 12;
      const discountedAnnualPrice = Number((baseYearly * 12).toFixed(2));
      const savings = Number((fullAnnualPrice - discountedAnnualPrice).toFixed(2));
      return {
        subtotal: fullAnnualPrice,
        discount: savings,
        total: discountedAnnualPrice,
      };
    }

    return {
      subtotal: baseMonthly,
      discount: 0,
      total: baseMonthly,
    };
  }

  async createOrder(item: OrderItem): Promise<CreatedOrder> {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const totals = await this.calculateTotal(item);
    const plan = teaserPlans.find((p) => p.id === item.planId) || teaserPlans[0];

    return {
      orderId: `WH-${Math.floor(100000 + Math.random() * 900000)}`,
      planName: plan.name,
      billingCycle: item.cycle,
      subtotal: totals.subtotal,
      discount: totals.discount,
      total: totals.total,
      createdAt: new Date().toISOString(),
      status: "pending_payment",
    };
  }
}

export const billingService = new BillingService();
