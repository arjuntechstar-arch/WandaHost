export interface NavLinkItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  iconName?: string;
}

export interface MegaMenuCategory {
  title: string;
  items: NavLinkItem[];
}

export interface MegaMenuConfig {
  id: string;
  label: string;
  description: string;
  featured?: {
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    badge?: string;
  };
  categories: MegaMenuCategory[];
}

export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    badge?: string;
  }[];
}
