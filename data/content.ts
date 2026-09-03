export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    items: ["Laravel", "Node.js", "NestJS", "Express"],
  },
  {
    name: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    name: "Cloud",
    items: ["Azure", "AWS", "GCP", "VPS / Linux"],
  },
  {
    name: "Integrations",
    items: ["Stripe", "NOWPayments", "REST APIs", "Webhooks"],
  },
  {
    name: "SEO",
    items: ["Technical SEO", "Schema.org", "JSON-LD", "Core Web Vitals", "Open Graph", "Sitemap", "Robots.txt"],
  },
];

export const workflow = [
  {
    step: "Discover",
    description: "Understand business goals and target users.",
  },
  {
    step: "Design",
    description: "Create scalable architecture and clean UX.",
  },
  {
    step: "Build",
    description: "Develop performant production-ready applications.",
  },
  {
    step: "Optimize",
    description: "Improve performance, SEO and accessibility.",
  },
  {
    step: "Measure",
    description: "Use analytics and technical audits.",
  },
  {
    step: "Improve",
    description: "Continuously optimize based on real data.",
  },
];

export const seoFeatures = [
  {
    category: "Technical SEO",
    items: [
      "Semantic HTML",
      "Metadata optimization",
      "Canonical URLs",
      "Sitemap.xml",
      "Robots.txt",
      "Open Graph",
      "Internal linking",
      "Crawlable architecture",
    ],
  },
  {
    category: "Performance",
    items: [
      "Core Web Vitals",
      "Image optimization",
      "Lazy loading",
      "Code splitting",
      "Server rendering",
      "CDN optimization",
    ],
  },
  {
    category: "Structured Data",
    items: [
      "Schema.org",
      "JSON-LD",
      "Organization schema",
      "Person schema",
      "WebSite schema",
      "FAQ schema",
      "Article schema",
    ],
  },
  {
    category: "GEO / AI Search Optimization",
    items: [
      "Entity-oriented content",
      "Structured answers",
      "Semantic page structure",
      "Clear expertise signals",
      "Machine-readable metadata",
      "FAQ content",
      "Structured data",
      "AI-friendly content architecture",
    ],
  },
];
