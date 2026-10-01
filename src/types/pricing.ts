export type BillingCycle = "monthly" | "yearly";

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number; // Yearly price per month (typically ~20% off)
  storage: string;
  websites: string;
  bandwidth: string;
  ssl: string;
  backups: string;
  support: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface PricingCategoryMatrix {
  hosting: PricingPlan[];
  wordpress: PricingPlan[];
  email: PricingPlan[];
  vps: PricingPlan[];
  dotnet: PricingPlan[];
  reseller: PricingPlan[];
  ai: PricingPlan[];
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
}
