import { BLOG_CONTENT, BLOG_CONTENT_IMAGES, BLOG_IMAGES } from "@/data/blog-content";

export type { BlogContentBlock, BlogInline } from "@/data/blog-types";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient?: string;
  author?: string;
  tags?: string[];
}

export interface BlogPostDetail extends BlogPost {
  image: string;
  contentImage: string;
  content: BlogContentBlock[];
}

export const featuredPost: BlogPost = {
  slug: "supply-chain-management-in-erp",
  title: "Supply Chain Management in ERP: What It Actually Does for Your Business",
  excerpt:
    "Most companies don't have a supply chain problem. They have a data movement problem. Demand forecasts live in...",
  category: "ERP",
  date: "2 Jun 2026",
  readTime: "10 minutes",
  author: "Tecaudex",
  tags: ["erp", "erp supply chain management"],
};

export const blogPosts: BlogPost[] = [
  {
    slug: "erp-vs-crm",
    title: "ERP vs CRM: What's the Difference and Which One Do You Need?",
    excerpt:
      "If you run a business, you've probably heard both terms thrown around sometimes as if they're interchangeable. They're not. CRM and ERP are two...",
    category: "ERP",
    date: "22 May 2026",
    readTime: "7 minutes",
    author: "Tecaudex",
    tags: ["erp", "crm", "crm vs erp"],
  },
  {
    slug: "erp-inventory-management",
    title: "ERP Inventory Management: What It Means and How It Works",
    excerpt:
      "ERP inventory management is the process of tracking, controlling, and updating inventory through an Enterprise Resource Planning system.",
    category: "ERP",
    date: "15 May 2026",
    readTime: "10 minutes",
    author: "Tecaudex",
    tags: ["erp inventory management", "erp module inventory management"],
  },
  {
    slug: "erp-hr-module",
    title: "ERP HR Module",
    excerpt:
      "An ERP HR module is the part of an Enterprise Resource Planning system that handles everything related to people — employee records, payroll, attendance.",
    category: "ERP",
    date: "11 May 2026",
    readTime: "7 minutes",
    author: "Tecaudex",
    tags: ["ERP HR Module", "ERP", "HR ERP"],
  },
  {
    slug: "app-cost-usa",
    title: "How Much Does It Cost to Build an App in the USA? (2026 Guide)",
    excerpt:
      "App development cost in the USA ranges from $5,000 for a lean MVP to $150,000+ for a full-featured production app in 2026, when you partner with a hybrid US-led...",
    category: "App",
    date: "10 May 2026",
    readTime: "10 minutes",
    author: "Tecaudex",
    tags: ["app development cost", "app cost", "hybrid app development cost"],
  },
  {
    slug: "erp-finance-module",
    title: "ERP Finance Module Explained",
    excerpt:
      "The finance module is the core of any ERP system. It's where all the money-related activity in a business gets recorded, tracked, and reported — general ledger,",
    category: "ERP",
    date: "4 May 2026",
    readTime: "7 minutes",
    author: "Tecaudex",
    tags: ["erp", "erp finance", "erp finance module"],
  },
  {
    slug: "types-of-erp",
    title: "Types and Tiers of ERP",
    excerpt:
      "ERP isn't one-size-fits-all. Systems get sorted in a few different ways — by how they're deployed, what industry they're built for, and the size of company they're...",
    category: "ERP",
    date: "30 Apr 2026",
    readTime: "7 minutes",
    author: "Tecaudex",
    tags: ["erp types", "erp tiers", "different types of erp"],
  },
  {
    slug: "what-is-erp",
    title: "What is ERP (Enterprise Resource Planning)?",
    excerpt:
      "It's a software platform that pulls the major parts of a business — finance, HR, inventory, supply chain, manufacturing, procurement — into one connected system.",
    category: "ERP",
    date: "28 Apr 2026",
    readTime: "5 minutes",
    author: "Tecaudex",
    tags: ["erp", "what is erp", "erp development"],
  },
  {
    slug: "app-cost-usa-2",
    title: "App Development Cost USA 2026: Complete Pricing Guide",
    excerpt:
      "The wide gap exists because cost is driven by feature scope, platform choice, design depth, backend complexity, and your team's hourly rate. At eazisols, our...",
    category: "App",
    date: "21 Apr 2026",
    readTime: "10 minutes",
    author: "Tecaudex",
    tags: ["app development", "app development cost", "app development price"],
  },
];

export { BLOG_IMAGES, BLOG_CONTENT_IMAGES };

function getBlogImage(slug: string): string {
  return BLOG_IMAGES[slug] ?? "/images/blog.png";
}

function getBlogContentImage(slug: string): string {
  return BLOG_CONTENT_IMAGES[slug] ?? "/images/blog.png";
}

export function getBlogBySlug(slug: string): BlogPostDetail | undefined {
  const post =
    slug === featuredPost.slug
      ? featuredPost
      : blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return undefined;
  }

  const content = BLOG_CONTENT[slug];
  if (!content) {
    return undefined;
  }

  return {
    ...post,
    image: getBlogImage(slug),
    contentImage: getBlogContentImage(slug),
    content,
  };
}
