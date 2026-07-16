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

function portfolioBannerPaths(filename: string) {
  const bannerImage = `/images/portfolio/${filename}`;
  return { image: bannerImage, bannerImage };
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
  logo?: string;
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
  slug: "earthco",
  title: "Earthco",
  logo: "/images/portfolio/Earthco-Logo.png",
  image: "/images/portfolio/earthco-banner.webp",
  bannerImage: "/images/portfolio/earthco-banner.webp",
  type: "Web",
  category: "ERP Platform",
  industry: "Landscaping & Arbor Care",
  region: "North America",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
  features: ["Service Requests", "Estimates & Invoicing"],
  description:
    "Earthco is a comprehensive ERP platform designed for the landscaping, irrigation, and arbor care industry. It streamlines service requests, estimates, invoicing, purchase orders, vendor bills, reporting, scheduling, and field operations through one unified system. The platform supports Earthco Commercial Landscape and Earthco Arbor Care, allowing authorized users to switch between companies and access relevant operational data. Dedicated portals for administrators, regional managers, and customers provide complete visibility from the initial service request to final billing.",
  teamSize: "Dedicated team",
  serviceType: "Web",
  timeline: "Ongoing",
  techStack: techStackFrom("Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Google Calendar API"),
  keyResults: keyResultsFrom(
    ["2", "Companies Managed"],
    ["3", "Dedicated Portals"],
    ["24/7", "Cloud Access"],
  ),
  websiteUrl: "",
  keyFeatures: keyFeaturesFrom(
    "Service Request Management",
    "Estimate Generation",
    "Invoice Management",
    "Purchase Order Management",
    "Vendor Bill Tracking",
    "Items Management",
    "Financial Reports",
    "Operational Reports",
    "Custom Report Generation",
    "Map View & Geolocation",
    "Punchlist Management",
    "KPI Dashboard",
    "Monthly Goals Tracking",
  ),
  ...buildDetailSections({
    title: "Earthco",
    industry: "Landscaping & Arbor Care",
    category: "ERP Platform",
    type: "Web",
    bannerImage: "/images/portfolio/earthco-banner.webp",
    image: "/images/portfolio/earthco.png",
    visualHighlightsImages: [
      "/images/portfolio/earthco.png",
      "/images/portfolio/earthco1.png",
      "/images/portfolio/earthcoDash.png",
    ],
    clientImage: "/images/portfolio/earthco1.png",
    challengesImage: "/images/portfolio/earthcoDash.png",
  }),
},
{
  id: "2",
  slug: "glaura",
  title: "Glaura",
  logo: "/images/portfolio/glauraLogo.png",
  image: "/images/portfolio/Glura-banner.webp",
  bannerImage: "/images/portfolio/Glura-banner.webp",
  type: "Mobile",
  category: "Booking Platform",
  industry: "Beauty & Wellness",
  region: "France",

  technologies: [
    "Flutter",
    "Firebase",
    "Node.js",
    "Stripe",
    "Twilio",
    "AWS",
  ],

  features: [
    "Salon Booking",
    "Nearby Salon Search",
    "Online Payments",
    "Booking Synchronization",
  ],

  description:
    "Glaura is a SaaS-based salon booking and management platform designed to connect customers with nearby salons while simplifying daily operations for salon owners. Salons can create business profiles, list services, manage appointments, organize schedules, and monitor bookings and revenue through dedicated dashboards. Customers can search for salons within a selected radius, explore available services, choose suitable time slots, and book appointments through web and mobile applications. The platform also includes secure online payments, automated notifications, Planity booking synchronization, and centralized administrative control.",

  teamSize: "5 members",
  serviceType: "Mobile",
  timeline: "9 months",

  techStack: techStackFrom(
    "Flutter",
    "Firebase",
    "Node.js",
    "Stripe",
    "Twilio",
    "AWS",
    "Figma",
  ),

  keyResults: keyResultsFrom(
    ["3", "Connected Platforms"],
    ["2", "Dedicated Mobile Apps"],
    ["24/7", "Online Booking Access"],
  ),

  keyFeatures: keyFeaturesFrom(
    "Salon Account Management",
    "Nearby Salon Search",
    "Service Management",
    "Online Appointment Booking",
    "Appointment Management",
    "Staff Schedule Management",
    "Revenue Dashboard",
    "Stripe Payment Integration",
    "Twilio Notifications",
    "Planity Integration",
    "Customer Mobile Application",
    "Service Provider Mobile Application",
    "Centralized Admin Panel",
  ),

  ...buildDetailSections({
    title: "Glaura",
    industry: "Beauty & Wellness",
    category: "Booking Platform",
    type: "Mobile",
    bannerImage: "/images/portfolio/Glura-banner.webp",
    image: "/images/portfolio/Glaura.png",

    visualHighlightsImages: [
      "/images/portfolio/Glaura3.png",
      "/images/portfolio/Glaura4.png",
      "/images/portfolio/Glaura5.png",
    ],

    clientImage: "/images/portfolio/Glaura6.png",
    challengesImage: "/images/portfolio/Glaura5.png",
  }),
},
  {
  id: "3",
  slug: "ivest-club",
  title: "iVest Club",
  logo: "/images/logoPurple1.png",
  ...portfolioBannerPaths("ivest club-banner.webp"),
  type: "Web",
  category: "FinTech",
  industry: "Finance",
  region: "Europe",
  technologies: ["React", "Laravel", "MySQL", "Web3.js"],
  features: ["Token Memberships", "KYC Verification", "Digital Transactions"],
  description:
    "iVest Club is a digital investment and membership platform that allows users to join exclusive clubs using digital tokens. Each club has its own token, and users can convert their digital currency into the required token to access club memberships. The platform includes secure transactions, automated KYC verification, transaction tracking, educational blog content, Discord community integration, and AI-powered chatbot support. Dedicated Admin and User panels provide complete control over clubs, tokens, memberships, users, transactions, and platform activities.",
  teamSize: "5 members",
  serviceType: "Web",
  timeline: "10 months",
  techStack: techStackFrom(
    "React",
    "Laravel",
    "PHP",
    "MySQL",
    "Web3.js",
    "Discord API",
    "KYC API",
  ),
  keyResults: keyResultsFrom(
    ["2", "Dedicated Portals"],
    ["24/7", "AI Chat Support"],
    ["1", "Unified Membership System"],
  ),
  keyFeatures: keyFeaturesFrom(
    "Token-Based Club Memberships",
    "Digital Currency Conversion",
    "Secure Transaction Processing",
    "KYC Verification",
    "User Transaction History",
    "Club & Token Management",
    "Admin Dashboard",
    "User Dashboard",
    "Blog & Educational Content",
    "Discord Community Integration",
    "AI-Powered Chatbot",
    "Membership Access Control",
  ),
  ...buildDetailSections({
    title: "iVest Club",
    industry: "Finance",
    category: "FinTech",
    type: "Web",
    ...portfolioDetailImages(0),
    ...portfolioBannerPaths("ivest club-banner.webp"),
  }),
},
  {
  id: "4",
  slug: "mfg",
  title: "MFG",
  logo: "/images/mfg.png",
  ...portfolioBannerPaths("MFG-Banner.webp"),
  type: "ERP",
  category: "Manufacturing",
  industry: "Industrial",
  region: "North America",
  technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
  features: ["Supplier Management", "Product Management", "Order Processing", "Reporting"],
  description:
    "MFG is a comprehensive manufacturing and vendor management platform designed to centralize and streamline the complete selling and production process. The system enables businesses to manage suppliers, products, manufacturing workflows, inventory, orders, users, permissions, and reports through a unified administrative dashboard. It provides real-time operational visibility, supports secure role-based access, and integrates with existing ERP, CRM, and supply chain systems to improve efficiency, coordination, and decision-making.",
  teamSize: "5 members",
  serviceType: "Web, ERP",
  timeline: "10 months",
  techStack: techStackFrom("Laravel", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"),
  keyResults: keyResultsFrom(
    ["2", "Dedicated Portals"],
    ["7+", "Core Management Modules"],
    ["1", "Centralized Dashboard"],
  ),
  keyFeatures: keyFeaturesFrom(
    "Supplier Management",
    "Supplier Contract Management",
    "Production Schedule Management",
    "Manufacturing Workflow Tracking",
    "Product Management",
    "Product Categories & Libraries",
    "Product Options & Option Groups",
    "Inventory Management",
    "Order Processing & Tracking",
    "User Roles & Permissions",
    "Supplier Invoice Management",
    "Real-Time Operational Updates",
    "Sales & Production Reports",
    "Supplier Performance Reports",
    "Visual Analytics Dashboard",
    "CAPTCHA Security",
  ),
  ...buildDetailSections({
    title: "MFG",
    industry: "Industrial",
    category: "Manufacturing",
    type: "ERP",
    ...portfolioDetailImages(1),
    ...portfolioBannerPaths("MFG-Banner.webp"),
  }),
},
  {
  id: "5",
  slug: "initio",
  title: "Initio",
  ...portfolioBannerPaths("initio-banner.webp"),
  type: "Web",
  category: "FinTech",
  industry: "Finance & Compliance",
  region: "Global",
  technologies: ["React", "Python", "AWS"],
  features: ["409A Valuations", "ASC 820 Valuations", "Audit-Ready Reports"],
  description:
    "Initio is a SaaS-based financial valuation and compliance platform designed to help private companies, investors, auditors, and valuation professionals manage 409A and ASC 820 valuation workflows. Users can enter cap table and financial data through a guided web interface, process valuation models using an integrated CalcEngine, and automatically generate accurate, transparent, and audit-ready reports. The platform also supports portfolio management, multi-company evaluations, role-based access, and enterprise valuation workflows.",
  teamSize: "5 members",
  serviceType: "Web",
  timeline: "10 months",
  techStack: techStackFrom("React", "Python", "AWS"),
  keyResults: keyResultsFrom(
    ["2", "Valuation Standards"],
    ["4", "Dedicated Portals"],
    ["1", "Integrated CalcEngine"],
  ),
  keyFeatures: keyFeaturesFrom(
    "Automated 409A Valuation Workflow",
    "ASC 820 Fair Value Workflow",
    "Cap Table Management",
    "Financial Data Management",
    "Integrated CalcEngine",
    "Audit-Ready Report Generation",
    "Portfolio Company Management",
    "Multi-Company Evaluations",
    "Role-Based Access Control",
    "Enterprise User Onboarding",
    "Investor Portfolio Management",
    "Admin Valuation Management",
    "Real-Time Reports & Insights",
  ),
  ...buildDetailSections({
    title: "Initio",
    industry: "Finance & Compliance",
    category: "FinTech",
    type: "Web",
    ...portfolioDetailImages(2),
    ...portfolioBannerPaths("initio-banner.webp"),
  }),
},
  {
  id: "6",
  slug: "primeliste",
  title: "Primeliste",
  ...portfolioBannerPaths("Primeliste-banner.webp"),
  type: "Web",
  category: "Real Estate",
  industry: "Property",
  region: "Global",
  technologies: ["React", "Node.js"],
  features: ["Property Listings", "Rental Applications", "Listing Packages"],
  description:
    "Primeliste is a rental application platform designed to connect landlords and tenants through a streamlined digital experience. Landlords can create property listings using free or paid packages, manage rental details, and communicate with prospective tenants. Tenants can search available properties, review listing information, and submit rental applications directly through the platform. The system simplifies property discovery, application management, and communication throughout the rental process.",
  teamSize: "5 members",
  serviceType: "Web",
  timeline: "10 months",
  techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
  keyResults: keyResultsFrom(
    ["2", "User Portals"],
    ["2", "Listing Packages"],
    ["1", "Unified Rental Platform"],
  ),
  keyFeatures: keyFeaturesFrom(
    "Landlord Account Management",
    "Tenant Account Management",
    "Property Listing Management",
    "Free Listing Packages",
    "Paid Listing Packages",
    "Property Search",
    "Rental Application Submission",
    "Application Management",
    "Landlord and Tenant Communication",
    "Listing Details Management",
    "User Authentication / Onboarding",
    "Admin Dashboard",
  ),
  ...buildDetailSections({
    title: "Primeliste",
    industry: "Property",
    category: "Real Estate",
    type: "Web",
    ...portfolioDetailImages(3),
    ...portfolioBannerPaths("Primeliste-banner.webp"),
  }),
},

  {
    id: "7",
    slug: "trackaff",
    title: "TrackAff",
    logo: "/images/portfolio/trackaffLogo.png",
    image: "/images/portfolio/trackaff-banner.webp",
    bannerImage: "/images/portfolio/trackaff-banner.webp",
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
      title: "TrackAff",
      industry: "Industrial",
      category: "Manufacturing",
      type: "ERP",
      bannerImage: "/images/portfolio/trackaff-banner.webp",
      image: "/images/portfolio/TrackAff.png",
      visualHighlightsImages: [
        "/images/portfolio/TrackAff2.png",
        "/images/portfolio/TrackAff3.png",
        "/images/portfolio/TrackAff4.png",
      ],
      clientImage: "/images/portfolio/TrackAffDashboard.png",
      challengesImage: "/images/portfolio/TrackAff4.png",
    }),
  },

  {
    id: "8",
    slug: "dieseltech",
    title: "Dieseltech",
    logo: "/images/portfolio/DieseltechLogo.png",
    image: "/images/portfolio/Dieseltech-banner.webp",
    bannerImage: "/images/portfolio/Dieseltech-banner.webp",
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
      title: "Dieseltech",
      industry: "Sports",
      category: "Sports & Fitness",
      type: "Mobile",
      bannerImage: "/images/portfolio/Dieseltech-banner.webp",
      image: "/images/portfolio/Dieseltech.png",
      visualHighlightsImages: [
        "/images/portfolio/Dieseltech2.png",
        "/images/portfolio/Dieseltech3.png",
        "/images/portfolio/Dieseltech4.png",
      ],
      clientImage: "/images/portfolio/Dieseltech3.png",
      challengesImage: "/images/portfolio/Dieseltech4.png",
    }),
  },

  {
    id: "9",
    slug: "resilio-compliance-suite",
    title: "Resilio Compliance Suite",
    logo: "/images/portfolio/REOlogo.png",
    image: "/images/portfolio/REO-banner.webp",
    bannerImage: "/images/portfolio/REO-banner.webp",
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
      title: "Resilio Compliance Suite",
      industry: "Property",
      category: "Real Estate",
      type: "Web",
      bannerImage: "/images/portfolio/REO-banner.webp",
      image: "/images/portfolio/REO.png",
      visualHighlightsImages: [
        "/images/portfolio/REO2.png",
        "/images/portfolio/REO3.png",
        "/images/portfolio/REO4.png",
      ],
      clientImage: "/images/portfolio/REO5.png",
      challengesImage: "/images/portfolio/REO4.png",
    }),
  },
  {
    id: "10",
    slug: "velvety-paris",
    title: "Velvety Paris",
    ...portfolioBannerPaths("velvetyparis-banner.webp"),
    type: "Web",
    category: "E-commerce",
    industry: "Retail",
    region: "Europe",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Velvety Paris is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Velvety Paris",
      industry: "Retail",
      category: "E-commerce",
      type: "Web",
      ...portfolioDetailImages(4),
      ...portfolioBannerPaths("velvetyparis-banner.webp"),
    }),
  },
  {
    id: "11",
    slug: "agents-leads",
    title: "Agents & Leads",
    ...portfolioBannerPaths("Agents&leads-banner.webp"),
    type: "Web",
    category: "CRM",
    industry: "Sales",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Agents & Leads is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Agents & Leads",
      industry: "Sales",
      category: "CRM",
      type: "Web",
      ...portfolioDetailImages(5),
      ...portfolioBannerPaths("Agents&leads-banner.webp"),
    }),
  },
  {
    id: "12",
    slug: "automatische",
    title: "Automatische",
    logo: "/images/automat.png",
    ...portfolioBannerPaths("Automatische-Banner.webp"),
    type: "Web",
    category: "Automation",
    industry: "Operations",
    region: "Europe",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Automatische is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Automatische",
      industry: "Operations",
      category: "Automation",
      type: "Web",
      ...portfolioDetailImages(6),
      ...portfolioBannerPaths("Automatische-Banner.webp"),
    }),
  },
  {
    id: "13",
    slug: "benchmarking",
    title: "Benchmarking",
    ...portfolioBannerPaths("benchmarking-Banners.webp"),
    type: "Web",
    category: "Analytics",
    industry: "Data",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Benchmarking is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Benchmarking",
      industry: "Data",
      category: "Analytics",
      type: "Web",
      ...portfolioDetailImages(7),
      ...portfolioBannerPaths("benchmarking-Banners.webp"),
    }),
  },
  {
    id: "14",
    slug: "business-shower",
    title: "Business Shower",
    logo: "/images/logoPurple6.png",
    ...portfolioBannerPaths("BusinessShower-banner.webp"),
    type: "Web",
    category: "Business",
    industry: "Consulting",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Business Shower is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Business Shower",
      industry: "Consulting",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(8),
      ...portfolioBannerPaths("BusinessShower-banner.webp"),
    }),
  },
  {
    id: "15",
    slug: "cars-categories",
    title: "Cars Categories",
    ...portfolioBannerPaths("cars-categories-banner.webp"),
    type: "Web",
    category: "Automotive",
    industry: "Transport",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Cars Categories is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Cars Categories",
      industry: "Transport",
      category: "Automotive",
      type: "Web",
      ...portfolioDetailImages(9),
      ...portfolioBannerPaths("cars-categories-banner.webp"),
    }),
  },
  {
    id: "16",
    slug: "crowd-funding",
    title: "Crowd Funding",
    logo: "/images/crowd.png",
    ...portfolioBannerPaths("crowd-funding-banner.webp"),
    type: "Web",
    category: "FinTech",
    industry: "Finance",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Crowd Funding is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Crowd Funding",
      industry: "Finance",
      category: "FinTech",
      type: "Web",
      ...portfolioDetailImages(10),
      ...portfolioBannerPaths("crowd-funding-banner.webp"),
    }),
  },
  {
    id: "17",
    slug: "find-my-contract",
    title: "Find My Contract",
    ...portfolioBannerPaths("Findmycontract-banner.webp"),
    type: "Web",
    category: "Legal Tech",
    industry: "Legal",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Find My Contract is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Find My Contract",
      industry: "Legal",
      category: "Legal Tech",
      type: "Web",
      ...portfolioDetailImages(11),
      ...portfolioBannerPaths("Findmycontract-banner.webp"),
    }),
  },
  {
    id: "18",
    slug: "locums",
    title: "Locums",
    ...portfolioBannerPaths("locums-Banner.webp"),
    type: "Web",
    category: "Healthcare",
    industry: "Health",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Locums is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Locums",
      industry: "Health",
      category: "Healthcare",
      type: "Web",
      ...portfolioDetailImages(12),
      ...portfolioBannerPaths("locums-Banner.webp"),
    }),
  },
  {
    id: "19",
    slug: "mygenie",
    title: "MyGenie",
    ...portfolioBannerPaths("mygenie-banner.webp"),
    type: "Mobile",
    category: "Productivity",
    industry: "Software",
    region: "Global",
    technologies: ["Flutter", "Firebase"],
    features: ["AI Assistant", "Task Management"],
    description:
      "MyGenie is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "MyGenie",
      industry: "Software",
      category: "Productivity",
      type: "Mobile",
      ...portfolioDetailImages(13),
      ...portfolioBannerPaths("mygenie-banner.webp"),
    }),
  },
  {
    id: "20",
    slug: "ola-glases",
    title: "Ola Glases",
    logo: "/images/logoPurple5.png",
    ...portfolioBannerPaths("ola-glases-banner.webp"),
    type: "Mobile",
    category: "Retail",
    industry: "Commerce",
    region: "Global",
    technologies: ["React Native", "Node.js"],
    features: ["Catalog", "Checkout"],
    description:
      "Ola Glases is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Ola Glases",
      industry: "Commerce",
      category: "Retail",
      type: "Mobile",
      ...portfolioDetailImages(14),
      ...portfolioBannerPaths("ola-glases-banner.webp"),
    }),
  },
  {
    id: "21",
    slug: "orderup",
    title: "OrderUp",
    logo: "/images/order.png",
    ...portfolioBannerPaths("orderup-banner.webp"),
    type: "ERP",
    category: "E-commerce",
    industry: "Commerce",
    region: "Global",
    technologies: ["Odoo", "Python"],
    features: ["Order Management", "Warehousing"],
    description:
      "OrderUp is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web, ERP",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "OrderUp",
      industry: "Commerce",
      category: "E-commerce",
      type: "ERP",
      ...portfolioDetailImages(15),
      ...portfolioBannerPaths("orderup-banner.webp"),
    }),
  },
  {
    id: "22",
    slug: "pawtrak",
    title: "PawTrak",
    logo: "/images/newlogo.png",
    ...portfolioBannerPaths("PawTrak-banner.webp"),
    type: "Mobile",
    category: "Pet Care",
    industry: "Health",
    region: "Global",
    technologies: ["React Native", "MongoDB"],
    features: ["Tracking", "Notifications"],
    description:
      "PawTrak is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Mobile",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "PawTrak",
      industry: "Health",
      category: "Pet Care",
      type: "Mobile",
      ...portfolioDetailImages(16),
      ...portfolioBannerPaths("PawTrak-banner.webp"),
    }),
  },
  {
    id: "23",
    slug: "point-of-sales",
    title: "Point of Sales",
    ...portfolioBannerPaths("Pointofsales-banner.webp"),
    type: "ERP",
    category: "Retail",
    industry: "Commerce",
    region: "Global",
    technologies: ["React", "PostgreSQL"],
    features: ["POS Integration", "Inventory"],
    description:
      "Point of Sales is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web, ERP",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Point of Sales",
      industry: "Commerce",
      category: "Retail",
      type: "ERP",
      ...portfolioDetailImages(17),
      ...portfolioBannerPaths("Pointofsales-banner.webp"),
    }),
  },
  {
    id: "24",
    slug: "yezzy",
    title: "Yezzy",
    ...portfolioBannerPaths("yezzy-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Yezzy is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Yezzy",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(18),
      ...portfolioBannerPaths("yezzy-banner.png"),
    }),
  },
  {
    id: "25",
    slug: "driptyard",
    title: "Driptyard",
    logo: "/images/driptyard.png",
    ...portfolioBannerPaths("driptyard-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Driptyard is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Driptyard",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(19),
      ...portfolioBannerPaths("driptyard-banner.png"),
    }),
  },
  {
    id: "26",
    slug: "intexo",
    title: "Intexo",
    ...portfolioBannerPaths("intexo-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Intexo is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Intexo",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(20),
      ...portfolioBannerPaths("intexo-banner.png"),
    }),
  },
  {
    id: "27",
    slug: "koumains",
    title: "Koumains",
    ...portfolioBannerPaths("koumains-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Koumains is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Koumains",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(21),
      ...portfolioBannerPaths("koumains-banner.png"),
    }),
  },
  {
    id: "28",
    slug: "editfarmer",
    title: "Editfarmer",
    ...portfolioBannerPaths("editfarmer-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Editfarmer is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Editfarmer",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(22),
      ...portfolioBannerPaths("editfarmer-banner.png"),
    }),
  },
  {
    id: "29",
    slug: "rottami",
    title: "Rottami",
    ...portfolioBannerPaths("rottami-banner.png"),
    type: "Web",
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Rottami is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
    teamSize: "5 members",
    serviceType: "Web",
    timeline: "10 months",
    techStack: techStackFrom("React", "Node.js", "AWS", "Figma"),
    keyResults: keyResultsFrom(
      ["10K+", "Active Users"],
      ["4.5", "User Rating"],
      ["30%", "Efficiency Gain"],
    ),
    keyFeatures: keyFeaturesFrom(
      "Analytics Dashboard / Reports",
      "User Authentication / Onboarding",
      "CRM Integration",
      "Real-Time Notifications",
      "Admin Dashboard",
      "Push Notification",
    ),
    ...buildDetailSections({
      title: "Rottami",
      industry: "Enterprise",
      category: "Business",
      type: "Web",
      ...portfolioDetailImages(23),
      ...portfolioBannerPaths("rottami-banner.png"),
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
