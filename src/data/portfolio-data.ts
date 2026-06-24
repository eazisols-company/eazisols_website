export type PortfolioType = "Mobile" | "Web" | "ERP";

export const PORTFOLIO_IMAGES = [
  "/images/temp.jpg",
  "/images/temp1.png",
  "/images/temp2.jpg",
  "/images/temp3.avif",
  "/images/temp4.jpg",
] as const;

function portfolioCardImages(index: number) {
  const base = index % PORTFOLIO_IMAGES.length;
  return {
    image: PORTFOLIO_IMAGES[base]!,
    bannerImage: PORTFOLIO_IMAGES[(base + 1) % PORTFOLIO_IMAGES.length]!,
  };
}

function portfolioDetailImages(index: number) {
  const base = index % PORTFOLIO_IMAGES.length;
  return {
    bannerImage: PORTFOLIO_IMAGES[(base + 1) % PORTFOLIO_IMAGES.length]!,
    image: PORTFOLIO_IMAGES[base]!,
    visualHighlightsImages: [
      PORTFOLIO_IMAGES[base % PORTFOLIO_IMAGES.length]!,
      PORTFOLIO_IMAGES[(base + 1) % PORTFOLIO_IMAGES.length]!,
      PORTFOLIO_IMAGES[(base + 2) % PORTFOLIO_IMAGES.length]!,
    ],
    clientImage: PORTFOLIO_IMAGES[(base + 3) % PORTFOLIO_IMAGES.length]!,
    challengesImage: PORTFOLIO_IMAGES[(base + 4) % PORTFOLIO_IMAGES.length]!,
  };
}

export interface PortfolioKeyFeature {
  title: string;
}

function keyFeaturesFrom(...titles: string[]): PortfolioKeyFeature[] {
  return titles.filter((title) => title.trim()).map((title) => ({ title }));
}

export interface PortfolioTechStackItem {
  name: string;
  logo?: string;
}

export interface PortfolioKeyResult {
  value: string;
  label: string;
}

export interface PortfolioClientSection {
  title: string;
  body: string;
  image: string;
}

export interface PortfolioChallenges {
  title: string;
  points: string[];
  image: string;
}

export interface PortfolioBlueSection {
  leftTitle: string;
  leftBody: string[];
  rightTitle: string;
  rightBody: string[];
}

type DetailSectionsInput = {
  title: string;
  industry: string;
  category: string;
  type: PortfolioType;
  bannerImage: string;
  image: string;
  clientImage?: string;
  challengesImage?: string;
  visualHighlightsImages?: string[];
  clientBody?: string;
  challengePoints?: string[];
  blueLeftBody?: string[];
  blueRightBody?: string[];
};

function buildDetailSections(input: DetailSectionsInput) {
  const {
    title,
    industry,
    category,
    type,
    bannerImage,
    image,
    clientImage = PORTFOLIO_IMAGES[3],
    challengesImage = PORTFOLIO_IMAGES[4],
    visualHighlightsImages = [bannerImage, image, PORTFOLIO_IMAGES[2]],
    clientBody,
    challengePoints,
    blueLeftBody,
    blueRightBody,
  } = input;

  return {
    visualHighlightsImages,
    clientSection: {
      title: "About the Client",
      body:
        clientBody ??
        `The ${title} team approached eazisols to deliver a ${type.toLowerCase()} solution for the ${industry.toLowerCase()} space. They needed a partner who could translate complex workflows into a polished product that scales across regions, devices, and user roles while staying true to their brand vision.`,
      image: clientImage,
    },
    challenges: {
      title: `Challenges faced by ${title}`,
      points:
        challengePoints ?? [
          `Unifying fragmented ${industry.toLowerCase()} data across teams and legacy tools`,
          "Delivering fast performance on mobile and web without sacrificing design quality",
          "Building secure authentication and role-based access for diverse stakeholders",
          "Integrating third-party services while keeping the architecture maintainable",
        ],
      image: challengesImage,
    },
    blueSection: {
      leftTitle: "Why This Project Matters For Your Business",
      leftBody:
        blueLeftBody ?? [
          "Shows how the right product strategy accelerates growth in competitive markets",
          "Demonstrates disciplined engineering and design working together end-to-end",
          `Highlights measurable outcomes in ${category.toLowerCase()} use cases`,
          "Proves thoughtful UX improves adoption, retention, and stakeholder confidence",
        ],
      rightTitle: "Want Similar Results for Your Business?",
      rightBody:
        blueRightBody ?? [
          "We scope, design, and build products aligned with your goals and timeline",
          "Cross-functional teams ship with transparency and predictable delivery",
          "From MVPs to enterprise platforms, we adapt to your stage and industry",
          "Book a call to explore how we can help your next launch succeed",
        ],
    },
  };
}

function techStackFrom(...names: string[]): PortfolioTechStackItem[] {
  return names.filter((name) => name.trim()).map((name) => ({ name }));
}

function keyResultsFrom(...pairs: [string, string][]): PortfolioKeyResult[] {
  return pairs.map(([value, label]) => ({ value, label }));
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  type: PortfolioType;
  category: string;
  industry: string;
  region: string;
  technologies: string[];
  features: string[];
  description: string;
  bannerImage: string;
  teamSize: string;
  serviceType: string;
  timeline: string;
  techStack: PortfolioTechStackItem[];
  keyResults: PortfolioKeyResult[];
  visualHighlightsImages: string[];
  clientSection: PortfolioClientSection;
  challenges: PortfolioChallenges;
  blueSection: PortfolioBlueSection;
  keyFeatures: PortfolioKeyFeature[];
  websiteUrl?: string;
  playStoreUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    slug: "athleads",
    title: "Athleads",
    ...portfolioCardImages(0),
    type: "Mobile",
    category: "Sports & Fitness",
    industry: "Sports",
    region: "Middle East",
    technologies: ["React Native", "Node.js"],
    features: ["Analytics", "Push Notifications"],
    description:
      "Athleads is an AI-powered athlete performance and talent discovery platform that helps scouts, coaches, and organizations identify rising talent through data-driven insights, real-time analytics, and intelligent recruitment workflows.",
    teamSize: "6 members",
    serviceType: "Web, Mobile",
    timeline: "12 months",
    techStack: techStackFrom("Node.js", "AWS", "Framer", "Figma", "Rails", "React", "Python", "Flutter"),
    keyResults: keyResultsFrom(
      ["Funded", "Al Oula FC"],
      ["1000+", "Player Reports"],
      ["CRM", "Partnerships with Renowned Clubs"],
    ),
    websiteUrl: "https://example.com/athleads",
    playStoreUrl: "https://play.google.com/store/apps/details?id=athleads",
    keyFeatures: keyFeaturesFrom(
      "Sports league management",
      "Push Notification",
      "Recommendation System",
      "AI / ML Integration",
      "AI scoring Engine",
      "AI-Powered Recruitment Insights",
      "Analytics Dashboard / Reports",
      "Booking System",
      "CRM Integration",
      "Chat / Messaging",
      "Stripe Integration",
      "User Authentication / Onboarding",
      "Progress Tracking",
      "Fitness Feed & Sharing",
      "Real-Time Notifications",
    ),
    ...buildDetailSections({
      title: "Athleads",
      industry: "Sports",
      category: "Sports & Fitness",
      type: "Mobile",
      ...portfolioDetailImages(0),
    }),
  },
  {
    id: "2",
    slug: "kinoki",
    title: "Kinoki",
    ...portfolioCardImages(1),
    type: "Mobile",
    category: "FinTech",
    industry: "Finance",
    region: "Europe",
    technologies: ["Flutter", "Firebase"],
    features: ["Payments", "KYC"],
    description:
      "Kinoki is a modern personal finance app that helps users track spending, set savings goals, and gain actionable insights through intuitive dashboards and secure payment integrations.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "9 months",
    techStack: techStackFrom("Flutter", "Firebase", "Stripe", "Node.js", "AWS", "Figma", "Python"),
    keyResults: keyResultsFrom(
      ["50K+", "Active Users"],
      ["4.8", "App Store Rating"],
      ["30%", "Savings Growth"],
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=kinoki",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "Stripe Integration",
      "PayPal Integration",
      "User Authentication / Onboarding",
      "Push Notification",
      "CRM Integration",
      "Chat / Messaging",
      "Subscription Management",
      "Progress Tracking",
      "Real-Time Notifications",
      "Admin Dashboard",
      "AI / ML Integration",
      "Recommendation System",
    ),
    ...buildDetailSections({
      title: "Kinoki",
      industry: "Finance",
      category: "FinTech",
      type: "Mobile",
      ...portfolioDetailImages(1),
    }),
  },
  {
    id: "3",
    slug: "westilo",
    title: "Westilo",
    ...portfolioCardImages(2),
    type: "Web",
    category: "Real Estate",
    industry: "Property",
    region: "Middle East",
    technologies: ["React", "PostgreSQL"],
    features: ["Listings", "CRM"],
    description:
      "Westilo is a property marketplace platform connecting buyers, sellers, and agents with advanced listing management, CRM tools, and region-specific search experiences.",
    teamSize: "7 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "PostgreSQL", "AWS", "Figma", "Node.js", "Framer"),
    keyResults: keyResultsFrom(
      ["2.5K+", "Property Listings"],
      ["18", "Partner Agencies"],
      ["40%", "Faster Lead Response"],
    ),
    websiteUrl: "https://example.com/westilo",
    keyFeatures: keyFeaturesFrom(
      "CRM Integration",
      "Booking System",
      "Analytics Dashboard / Reports",
      "Chat / Messaging",
      "Recommendation System",
      "User Authentication / Onboarding",
      "Admin Dashboard",
      "Real-Time Notifications",
      "Progress Tracking",
      "Stripe Integration",
      "PayPal Integration",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Westilo",
      industry: "Property",
      category: "Real Estate",
      type: "Web",
      ...portfolioDetailImages(2),
    }),
  },
  {
    id: "4",
    slug: "alkaios",
    title: "Alkaios",
    ...portfolioCardImages(3),
    type: "ERP",
    category: "Manufacturing",
    industry: "Industrial",
    region: "Europe",
    technologies: [".NET", "SQL Server"],
    features: ["Inventory", "Reporting"],
    description:
      "Alkaios is an enterprise resource planning solution built for manufacturers to streamline inventory, production planning, and executive reporting across distributed operations.",
    teamSize: "8 members",
    serviceType: "Web, ERP",
    timeline: "14 months",
    techStack: techStackFrom(".NET", "SQL Server", "Azure", "Power BI", "React", "Python"),
    keyResults: keyResultsFrom(
      ["35%", "Inventory Efficiency"],
      ["12", "Factory Sites Connected"],
      ["99.9%", "System Uptime"],
    ),
    websiteUrl: "https://example.com/alkaios",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "CRM Integration",
      "AI / ML Integration",
      "Booking System",
      "User Authentication / Onboarding",
      "Recommendation System",
      "Admin Dashboard",
      "Progress Tracking",
      "Real-Time Notifications",
      "Chat / Messaging",
      "Stripe Integration",
      "Subscription Management",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Alkaios",
      industry: "Industrial",
      category: "Manufacturing",
      type: "ERP",
      ...portfolioDetailImages(3),
    }),
  },
  {
    id: "5",
    slug: "mymint",
    title: "MyMint",
    ...portfolioCardImages(4),
    type: "Mobile",
    category: "FinTech",
    industry: "Finance",
    region: "Asia",
    technologies: ["Swift", "AWS"],
    features: ["Budgeting", "Insights"],
    description:
      "MyMint delivers smart budgeting and financial wellness tools for mobile-first users, combining expense tracking, subscription management, and personalized savings recommendations.",
    teamSize: "4 members",
    serviceType: "Mobile",
    timeline: "8 months",
    techStack: techStackFrom("Swift", "AWS", "Firebase", "Stripe", "Figma", "Node.js"),
    keyResults: keyResultsFrom(
      ["120K+", "Budgets Tracked"],
      ["25%", "User Retention Lift"],
      ["4.7", "Store Rating"],
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=mymint",
    keyFeatures: keyFeaturesFrom(
      "Stripe Integration",
      "PayPal Integration",
      "Push Notification",
      "Analytics Dashboard / Reports",
      "Subscription Management",
      "User Authentication / Onboarding",
      "AI / ML Integration",
      "Progress Tracking",
      "CRM Integration",
      "Chat / Messaging",
      "Real-Time Notifications",
      "Recommendation System",
      "Admin Dashboard",
    ),
    ...buildDetailSections({
      title: "MyMint",
      industry: "Finance",
      category: "FinTech",
      type: "Mobile",
      ...portfolioDetailImages(4),
    }),
  },
  {
    id: "6",
    slug: "maxlife",
    title: "MaxLife",
    ...portfolioCardImages(5),
    type: "Web",
    category: "Healthcare",
    industry: "Health",
    region: "North America",
    technologies: ["Next.js", "GraphQL"],
    features: ["Patient Portal", "Scheduling"],
    description:
      "MaxLife is a healthcare web platform enabling patient portals, appointment scheduling, and care team coordination with HIPAA-conscious architecture and accessible UX.",
    teamSize: "6 members",
    serviceType: "Web",
    timeline: "11 months",
    techStack: techStackFrom("Next.js", "GraphQL", "AWS", "React", "Figma", "Node.js", "Python"),
    keyResults: keyResultsFrom(
      ["15K+", "Patients Onboarded"],
      ["60%", "Booking Automation"],
      ["3x", "Portal Engagement"],
    ),
    websiteUrl: "https://example.com/maxlife",
    keyFeatures: keyFeaturesFrom(
      "Booking System",
      "User Authentication / Onboarding",
      "Chat / Messaging",
      "Analytics Dashboard / Reports",
      "CRM Integration",
      "Push Notification",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Progress Tracking",
      "Recommendation System",
      "AI / ML Integration",
      "Stripe Integration",
      "Subscription Management",
    ),
    ...buildDetailSections({
      title: "MaxLife",
      industry: "Health",
      category: "Healthcare",
      type: "Web",
      ...portfolioDetailImages(5),
    }),
  },
  {
    id: "7",
    slug: "loubiz",
    title: "Loubiz",
    ...portfolioCardImages(6),
    type: "ERP",
    category: "Retail",
    industry: "Commerce",
    region: "Africa",
    technologies: ["SAP", "Power BI"],
    features: ["POS Integration", "Supply Chain"],
    description:
      "Loubiz unifies retail operations with POS integration, supply chain visibility, and executive dashboards tailored for multi-location commerce businesses.",
    teamSize: "9 members",
    serviceType: "Web, ERP",
    timeline: "16 months",
    techStack: techStackFrom("SAP", "Power BI", "Azure", ".NET", "React", "Python", "AWS"),
    keyResults: keyResultsFrom(
      ["22", "Retail Locations"],
      ["45%", "Supply Chain Visibility"],
      ["2M+", "Transactions Processed"],
    ),
    websiteUrl: "https://example.com/loubiz",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "CRM Integration",
      "Booking System",
      "Stripe Integration",
      "Recommendation System",
      "User Authentication / Onboarding",
      "Admin Dashboard",
      "Progress Tracking",
      "Real-Time Notifications",
      "Chat / Messaging",
      "PayPal Integration",
      "Subscription Management",
      "Push Notification",
      "AI / ML Integration",
    ),
    ...buildDetailSections({
      title: "Loubiz",
      industry: "Commerce",
      category: "Retail",
      type: "ERP",
      ...portfolioDetailImages(6),
    }),
  },
  {
    id: "8",
    slug: "landbridge",
    title: "Landbridge",
    ...portfolioCardImages(7),
    type: "Web",
    category: "Logistics",
    industry: "Transport",
    region: "Europe",
    technologies: ["Vue.js", "Docker"],
    features: ["Tracking", "Fleet Management"],
    description:
      "Landbridge is a logistics operations platform offering real-time fleet tracking, route optimization, and partner-facing dashboards for transport companies.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("Vue.js", "Docker", "AWS", "Node.js", "Python", "PostgreSQL"),
    keyResults: keyResultsFrom(
      ["500+", "Fleet Vehicles Tracked"],
      ["28%", "Route Efficiency Gain"],
      ["24/7", "Live Operations Dashboard"],
    ),
    websiteUrl: "https://example.com/landbridge",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "Booking System",
      "Chat / Messaging",
      "Push Notification",
      "CRM Integration",
      "AI / ML Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Progress Tracking",
      "Recommendation System",
      "User Authentication / Onboarding",
      "Stripe Integration",
      "Subscription Management",
    ),
    ...buildDetailSections({
      title: "Landbridge",
      industry: "Transport",
      category: "Logistics",
      type: "Web",
      ...portfolioDetailImages(7),
    }),
  },
  {
    id: "9",
    slug: "crowd",
    title: "Crowd",
    ...portfolioCardImages(8),
    type: "Mobile",
    category: "Social",
    industry: "Media",
    region: "North America",
    technologies: ["React Native", "MongoDB"],
    features: ["Messaging", "Live Events"],
    description:
      "Crowd is a social events and community app where users discover live experiences, connect through messaging, and share moments in real time.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "9 months",
    techStack: techStackFrom("React Native", "MongoDB", "AWS", "Node.js", "Firebase", "Figma"),
    keyResults: keyResultsFrom(
      ["80K+", "Event RSVPs"],
      ["3.2x", "Community Growth"],
      ["65%", "Repeat Attendance"],
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=crowd",
    keyFeatures: keyFeaturesFrom(
      "Chat / Messaging",
      "Push Notification",
      "User Authentication / Onboarding",
      "Recommendation System",
      "Analytics Dashboard / Reports",
      "Booking System",
      "Fitness Feed & Sharing",
      "Real-Time Notifications",
      "Progress Tracking",
      "Admin Dashboard",
      "Stripe Integration",
      "Subscription Management",
      "AI / ML Integration",
    ),
    ...buildDetailSections({
      title: "Crowd",
      industry: "Media",
      category: "Social",
      type: "Mobile",
      ...portfolioDetailImages(8),
    }),
  },
  {
    id: "10",
    slug: "order",
    title: "Order",
    ...portfolioCardImages(9),
    type: "ERP",
    category: "E-commerce",
    industry: "Commerce",
    region: "Asia",
    technologies: ["Odoo", "Python"],
    features: ["Order Management", "Warehousing"],
    description:
      "Order is an e-commerce ERP hub that centralizes order management, warehousing workflows, and fulfillment reporting for high-volume online retailers.",
    teamSize: "7 members",
    serviceType: "Web, ERP",
    timeline: "13 months",
    techStack: techStackFrom("Odoo", "Python", "PostgreSQL", "AWS", "React", "Docker"),
    keyResults: keyResultsFrom(
      ["1M+", "Orders Fulfilled"],
      ["40%", "Warehouse Time Saved"],
      ["99.5%", "Inventory Accuracy"],
    ),
    websiteUrl: "https://example.com/order",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "CRM Integration",
      "Stripe Integration",
      "PayPal Integration",
      "Booking System",
      "User Authentication / Onboarding",
      "AI scoring Engine",
      "Admin Dashboard",
      "Progress Tracking",
      "Real-Time Notifications",
      "Subscription Management",
      "Recommendation System",
      "Chat / Messaging",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Order",
      industry: "Commerce",
      category: "E-commerce",
      type: "ERP",
      ...portfolioDetailImages(9),
    }),
  },
  {
    id: "11",
    slug: "westland",
    title: "Westland",
    ...portfolioCardImages(10),
    type: "Web",
    category: "Construction",
    industry: "Real Estate",
    region: "North America",
    technologies: ["Angular", "Azure"],
    features: ["Project Dashboard", "Documents"],
    description:
      "Westland is a construction project management portal with document control, milestone tracking, and stakeholder dashboards for commercial development teams.",
    teamSize: "6 members",
    serviceType: "Web",
    timeline: "12 months",
    techStack: techStackFrom("Angular", "Azure", ".NET", "Power BI", "Figma", "Node.js"),
    keyResults: keyResultsFrom(
      ["14", "Active Construction Sites"],
      ["50%", "Document Review Faster"],
      ["200+", "Stakeholders Connected"],
    ),
    websiteUrl: "https://example.com/westland",
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "Booking System",
      "CRM Integration",
      "Chat / Messaging",
      "User Authentication / Onboarding",
      "Recommendation System",
      "Admin Dashboard",
      "Progress Tracking",
      "Real-Time Notifications",
      "Stripe Integration",
      "Push Notification",
      "AI / ML Integration",
      "Subscription Management",
    ),
    ...buildDetailSections({
      title: "Westland",
      industry: "Real Estate",
      category: "Construction",
      type: "Web",
      ...portfolioDetailImages(10),
    }),
  },
  {
    id: "12",
    slug: "noir",
    title: "Noir",
    ...portfolioCardImages(11),
    type: "Mobile",
    category: "Entertainment",
    industry: "Media",
    region: "Europe",
    technologies: ["Kotlin", "Redis"],
    features: ["Streaming", "Subscriptions"],
    description:
      "Noir is a premium entertainment streaming app with curated content, subscription billing, and personalized discovery powered by machine learning.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "10 months",
    techStack: techStackFrom("Kotlin", "Redis", "AWS", "Flutter", "Node.js", "Stripe", "Figma"),
    keyResults: keyResultsFrom(
      ["250K+", "Streams Delivered"],
      ["4.9", "User Satisfaction"],
      ["35%", "Subscription Conversion"],
    ),
    playStoreUrl: "https://play.google.com/store/apps/details?id=noir",
    keyFeatures: keyFeaturesFrom(
      "Subscription Management",
      "Recommendation System",
      "Push Notification",
      "User Authentication / Onboarding",
      "Analytics Dashboard / Reports",
      "AI / ML Integration",
      "Stripe Integration",
      "PayPal Integration",
      "Real-Time Notifications",
      "Progress Tracking",
      "Admin Dashboard",
      "Chat / Messaging",
      "Fitness Feed & Sharing",
    ),
    ...buildDetailSections({
      title: "Noir",
      industry: "Media",
      category: "Entertainment",
      type: "Mobile",
      ...portfolioDetailImages(11),
    }),
  },
];

export const portfolioTypeTabs = ["All", "Mobile", "Web", "ERP"] as const;
export type PortfolioTypeTab = (typeof portfolioTypeTabs)[number];

export const portfolioDetailNavItems = [
  { id: "overview", label: "Overview", enabled: true },
  { id: "features-framework", label: "Features & Framework", enabled: true },
  { id: "tech-stack", label: "Tech Stack", enabled: true },
  { id: "key-results", label: "Key Results", enabled: true },
  { id: "visual-highlights", label: "Visual Highlights", enabled: true },
  { id: "about-client", label: "About the Client", enabled: true },
  { id: "challenges", label: "Challenges", enabled: true },
  { id: "similar-projects", label: "Similar Projects", enabled: true },
] as const;

export const portfolioFeatureThemes = [
  { card: "bg-gradient-to-br from-[#f3faf0] via-white to-white", icon: "bg-[#e3f2dc]" },
  { card: "bg-gradient-to-br from-[#fffbeb] via-white to-white", icon: "bg-[#fef3c7]" },
  { card: "bg-gradient-to-br from-[#f5f3ff] via-white to-white", icon: "bg-[#ede9fe]" },
  { card: "bg-gradient-to-br from-[#f0fdf4] via-white to-white", icon: "bg-[#dcfce7]" },
  { card: "bg-gradient-to-br from-[#fdf2f8] via-white to-white", icon: "bg-[#fce7f3]" },
  { card: "bg-gradient-to-br from-[#eff6ff] via-white to-white", icon: "bg-[#dbeafe]" },
  { card: "bg-gradient-to-br from-[#fff7ed] via-white to-white", icon: "bg-[#ffedd5]" },
  { card: "bg-gradient-to-br from-[#f0fdfa] via-white to-white", icon: "bg-[#ccfbf1]" },
  { card: "bg-gradient-to-br from-[#fefce8] via-white to-white", icon: "bg-[#fef9c3]" },
] as const;

function uniqueSorted(values: string[]): string[] {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getSimilarPortfolioItems(current: PortfolioItem, limit = 3): PortfolioItem[] {
  return portfolioItems
    .filter((item) => item.slug !== current.slug)
    .map((item) => ({
      item,
      score:
        (item.type === current.type ? 2 : 0) +
        (item.category === current.category ? 2 : 0) +
        (item.industry === current.industry ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getPortfolioFilterOptions() {
  return {
    industries: uniqueSorted(portfolioItems.map((item) => item.industry)),
    categories: uniqueSorted(portfolioItems.map((item) => item.category)),
    regions: uniqueSorted(portfolioItems.map((item) => item.region)),
    technologies: uniqueSorted(portfolioItems.flatMap((item) => item.technologies)),
    features: uniqueSorted(portfolioItems.flatMap((item) => item.features)),
  };
}
