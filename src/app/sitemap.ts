import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://wandahost.com";

  const routes = [
    "",
    "/domains",
    "/hosting",
    "/wordpress-hosting",
    "/business-email",
    "/vps",
    "/dotnet-hosting",
    "/cloud",
    "/security",
    "/backup",
    "/website-services",
    "/ai-services",
    "/whatsapp",
    "/reseller",
    "/pricing",
    "/about",
    "/contact",
    "/support",
    "/status",
    "/resources",
    "/login",
    "/signup",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/status" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/hosting") || route.startsWith("/dotnet") ? 0.9 : 0.7,
  }));
}
