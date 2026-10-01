export type ProductCategory =
  | "hosting"
  | "business"
  | "cloud"
  | "ai"
  | "security";

export interface ProductFeature {
  name: string;
  included: boolean;
  highlight?: boolean;
  tooltip?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  badge?: string;
  isPopular?: boolean;
  startingPrice: number;
  period: "month" | "year" | "one-time";
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  ctaLabel: string;
  href: string;
}

export interface BusinessServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  href: string;
}
