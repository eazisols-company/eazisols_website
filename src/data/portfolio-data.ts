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
    logo: "/images/portfolio/Earthco-Logo.png",    image: "/images/portfolio/earthco-banner.webp",    bannerImage: "/images/portfolio/earthco-banner.webp",
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
      title: "Earthco",
      industry: "Health",
      category: "Healthcare",
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
    logo: "/images/portfolio/glauraLogo.png",    image: "/images/portfolio/Glura-banner.webp",    bannerImage: "/images/portfolio/Glura-banner.webp",
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
      title: "Glaura",
      industry: "Finance",
      category: "FinTech",
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
    title: "Ivest Club",
    ...portfolioBannerPaths("ivest club-banner.webp"),
    type: "Web",
    category: "FinTech",
    industry: "Finance",
    region: "Europe",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Ivest Club is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
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
      title: "Ivest Club",
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
    ...portfolioBannerPaths("MFG-Banner.webp"),
    type: "ERP",
    category: "Manufacturing",
    industry: "Industrial",
    region: "North America",
    technologies: [".NET", "SQL Server"],
    features: ["Inventory", "Reporting"],
    description:
      "MFG is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
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
    category: "Business",
    industry: "Enterprise",
    region: "Global",
    technologies: ["React", "Node.js"],
    features: ["Analytics", "Dashboard"],
    description:
      "Initio is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
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
      title: "Initio",
      industry: "Enterprise",
      category: "Business",
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
    features: ["Analytics", "Dashboard"],
    description:
      "Primeliste is a digital product built by eazisols to streamline operations, improve user engagement, and deliver measurable business outcomes through modern web and mobile experiences.",
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
    logo: "/images/portfolio/trackaffLogo.png",    image: "/images/portfolio/trackaff-banner.webp",    bannerImage: "/images/portfolio/trackaff-banner.webp",
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
    logo: "/images/portfolio/DieseltechLogo.png",    image: "/images/portfolio/Dieseltech-banner.webp",    bannerImage: "/images/portfolio/Dieseltech-banner.webp",
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
    logo: "/images/portfolio/REOlogo.png",    image: "/images/portfolio/REO-banner.webp",    bannerImage: "/images/portfolio/REO-banner.webp",
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
