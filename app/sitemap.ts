import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.joswebworks.in";

  // Core main pages
  const routes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Placeholders for future local/niche service landing pages
  const services = [
    "/services/custom-web-development-pune",
    "/services/nextjs-development",
    "/services/ui-ux-design",
    "/services/ai-agent-integration",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...services];
}
