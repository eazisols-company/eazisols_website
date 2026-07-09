import type { ServiceTemplateData } from "@/components/site/ServiceTemplate";
import type { ServiceSectionContent } from "@/components/site/ServiceBulletList";

const SERVICES_IMAGE_BASE = "/images/services";

const SERVICE_IMAGE_POOLS = {
  web: [
    "web.jpg",
    "web1.jpg",
    "web3.jpg",
    "web4.jpg",
    "web5.jpg",
    "web-app.jpg",
    "web2.webp",
  ],
  mobile: [
    "mobile-app1.jpg",
    "mobile-app2.jpg",
    "mobile-app4.jpg",
    "mobile-app5.jpg",
    "mobile-app6.jpg",
    "mobile-app8.jpg",
    "mobile-app.png",
    "mobile-app7.webp",
    "mobile-app9.avif",
    "mobile-app13.avif",
  ],
  app: [
    "app.jpg",
    "app1.jpg",
    "app2.jpg",
    "app3.jpg",
    "app.png",
    "app-dev.jpg",
    "app-dev1.jpg",
    "app-dev2.avif",
    "code.jpg",
    "code1.jpg",
    "code2.jpg",
  ],
  watch: ["Swatch.jpg", "Swatch1.jpg", "Swatch3.jpg"],
  nocode: [
    "no-code.jpg",
    "no-code1.jpg",
    "no-code4.jpg",
    "no-code2.png",
    "no-code3.png",
  ],
  nft: ["nft.jpg", "nft1.jpg", "nft2.jpg", "nft3.jpg", "nft4.jpg"],
  erp: [
    "erp.jpg",
    "erp1.jpg",
    "erp2.webp",
    "odoo1.jpg",
    "odoo2.jpg",
    "odoo3.jpg",
    "odoo4.jpg",
    "odoo5.jpg",
    "odoo6.jpg",
    "odo-erp.jpg",
    "odoo.webp",
  ],
} as const;

const EXPECTATION_IMAGES = [
  "/images/img.png",
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img.png",
] as const;

type ServiceImageCategory = keyof typeof SERVICE_IMAGE_POOLS;

const SERVICE_IMAGE_CATEGORIES: Record<ServiceSlug, ServiceImageCategory> = {
  "custom-web-app-development": "web",
  "mobile-app-development": "mobile",
  "desktop-app-development": "app",
  "smart-watch-app-development": "watch",
  "marketing-website-development": "web",
  "no-code-development": "nocode",
  blockchain: "nft",
  nfts: "nft",
  "odoo-erp-solutions": "erp",
  "custom-erp-development": "erp",
  "oracle-erp-to-odoo-migration": "erp",
  "ms-dynamics-365-to-odoo": "erp",
  "sap-to-odoo-migration": "erp",
  "netsuite-erp-to-odoo": "erp",
  "erpnext-to-odoo-migration": "erp",
  "agentic-ai-services": "app",
  "generative-ai-services": "app",
  "rag-development-services": "app",
  "ai-chatbot-development": "app",
  "ai-app-development": "app",
  "ai-automation-services": "app",
  "ai-consulting": "app",
  "ai-integration-services": "app",
  "ml-development-services": "app",
  "ml-consulting-services": "app",
  "social-media-marketing": "web",
  "performance-marketing": "web",
  "graphic-editing": "app",
  "video-editing": "app",
  "app-prototyping": "app",
  "design-audit": "app",
  illustrations: "app",
  "brand-guideline": "app",
  "logo-design": "app",
  "design-systems": "app",
  "pitch-deck": "app",
  presentations: "app",
  "software-development": "app",
  "erp-solutions": "erp",
  "ai-ml-services": "app",
  "kick-off-marketing": "web",
  "app-designing": "app",
};

function serviceImagePath(filename: string): string {
  return `${SERVICES_IMAGE_BASE}/${filename}`;
}

function pickServiceImages(pool: readonly string[], count: number, offset: number): string[] {
  const paths = pool.map(serviceImagePath);
  return Array.from({ length: count }, (_, index) => paths[(offset + index) % paths.length]!);
}

interface ServiceImages {
  hero: string[];
  blackBand: string;
  splitBlue: string;
}

type ServiceImageOverride = Partial<ServiceImages> & {
  /** Replaces only the first (front) hero slide image. */
  heroFront?: string;
};

const DEFAULT_BLACK_BAND_IMAGE = "/images/web6.jpg";

const SERVICE_IMAGE_OVERRIDES: Partial<Record<ServiceSlug, ServiceImageOverride>> = {
  "custom-web-app-development": {
    heroFront: serviceImagePath("web-hero.png"),
    blackBand: serviceImagePath("web-black.png"),
    splitBlue: serviceImagePath("web-red.png"),
  },
};

function getServiceImages(slug: ServiceSlug): ServiceImages {
  const category = SERVICE_IMAGE_CATEGORIES[slug];
  const pool = SERVICE_IMAGE_POOLS[category];
  const offset = SERVICE_SLUGS.indexOf(slug);

  const images: ServiceImages = {
    hero: pickServiceImages(pool, 3, offset),
    blackBand: DEFAULT_BLACK_BAND_IMAGE,
    splitBlue: serviceImagePath(pool[(offset + 1) % pool.length]!),
  };

  const override = SERVICE_IMAGE_OVERRIDES[slug];
  if (!override) return images;

  if (override.hero) {
    images.hero = override.hero;
  } else if (override.heroFront) {
    images.hero = [override.heroFront, ...images.hero.slice(1)];
  }
  if (override.blackBand) images.blackBand = override.blackBand;
  if (override.splitBlue) images.splitBlue = override.splitBlue;

  return images;
}

export const SERVICE_SLUGS = [
  "custom-web-app-development",
  "mobile-app-development",
  "desktop-app-development",
  "smart-watch-app-development",
  "marketing-website-development",
  "no-code-development",
  "blockchain",
  "nfts",
  "odoo-erp-solutions",
  "custom-erp-development",
  "oracle-erp-to-odoo-migration",
  "ms-dynamics-365-to-odoo",
  "sap-to-odoo-migration",
  "netsuite-erp-to-odoo",
  "erpnext-to-odoo-migration",
  "agentic-ai-services",
  "generative-ai-services",
  "rag-development-services",
  "ai-chatbot-development",
  "ai-app-development",
  "ai-automation-services",
  "ai-consulting",
  "ai-integration-services",
  "ml-development-services",
  "ml-consulting-services",
  "social-media-marketing",
  "performance-marketing",
  "graphic-editing",
  "video-editing",
  "app-prototyping",
  "design-audit",
  "illustrations",
  "brand-guideline",
  "logo-design",
  "design-systems",
  "pitch-deck",
  "presentations",
  "software-development",
  "erp-solutions",
  "ai-ml-services",
  "kick-off-marketing",
  "app-designing",
] as const;

export const CATEGORY_SLUGS = [
  "software-development",
  "erp-solutions",
  "ai-ml-services",
  "kick-off-marketing",
  "app-designing",
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

interface ServiceMeta {
  slug: ServiceSlug;
  title: string;
  category: string;
  heroDescription: string;
  intro: string;
  blackBand: { title: string; body: ServiceSectionContent };
  splitBlue: { title: string; body: ServiceSectionContent };
  blueGradient: {
    left: { title: string; body: ServiceSectionContent };
    right: { title: string; body: ServiceSectionContent };
  };
  isCategoryPage?: boolean;
  showOurProcess?: boolean;
}

function expectationsForService(meta: Pick<ServiceMeta, "slug" | "title" | "category">) {
  const topic = meta.title.toLowerCase();
  return [
    {
      label: "Strategy",
      body: [
        `We map ${topic} goals to business outcomes before design or build begins.`,
        `Stakeholder workshops clarify scope, priorities, and success metrics for your ${meta.category.toLowerCase()} initiative.`,
        `User and workflow research informs what to ship first versus what to defer.`,
        `A phased roadmap balances speed to market with long-term maintainability.`,
        `Clear ownership, timelines, and communication cadence are agreed upfront.`,
      ],
      images: [EXPECTATION_IMAGES[0], EXPECTATION_IMAGES[1]],
    },
    {
      label: "Execution",
      body: [
        `Cross-functional squads deliver ${topic} in short, reviewable iterations.`,
        `Design, engineering, QA, and deployment stay coordinated through one delivery lead.`,
        `Automated checks and staging environments reduce release risk.`,
        `Progress is visible via demos, tickets, and shared documentation — not surprises at launch.`,
        `We integrate with your existing tools, APIs, and approval workflows where needed.`,
      ],
      images: [EXPECTATION_IMAGES[2], EXPECTATION_IMAGES[3]],
    },
    {
      label: "Creativity",
      body: [
        `Interfaces and experiences for ${topic} are tailored to your brand — not generic templates.`,
        `We explore alternatives early so the final solution feels distinctive and purposeful.`,
        `Copy, visuals, and interaction patterns are refined for clarity and conversion.`,
        `Accessibility and responsive behavior are considered from the first wireframe.`,
        `Post-launch, we help iterate based on user feedback and performance data.`,
      ],
      images: [EXPECTATION_IMAGES[4], EXPECTATION_IMAGES[5]],
    },
  ] as const;
}

function toServiceTemplateData(meta: ServiceMeta): ServiceTemplateData {
  const images = getServiceImages(meta.slug);
  const expectations = expectationsForService(meta);

  return {
    title: meta.title,
    hero: {
      content: {
        title: meta.title,
        description: meta.heroDescription,
        primaryBtnText: "Book a free call",
        secondaryBtnText: "Request a query",
      },
      images: [...images.hero],
    },
    slug: meta.slug,
    breadcrumb: meta.isCategoryPage ? [meta.title] : [meta.category, meta.title],
    intro: meta.intro,
    showOurProcess: meta.showOurProcess,
    blackBand: {
      ...meta.blackBand,
      image: images.blackBand,
    },
    splitBlue: {
      ...meta.splitBlue,
      image: images.splitBlue,
    },
    blueGradient: {
      left: { ...meta.blueGradient.left },
      right: { ...meta.blueGradient.right },
    },
    expectations: expectations.map((item) => ({
      label: item.label,
      body: item.body,
      images: [...item.images],
    })),
  };
}

const SERVICE_META: ServiceMeta[] = [
  {
    slug: "custom-web-app-development",
    title: "Custom Web App Development",
    category: "Software Development",
    heroDescription:
      "End-to-end custom web applications from UX design through production backend, built for scale, security, and seamless third-party integrations.",
    intro:
      "We build web applications for fintech, healthcare, e-learning, e-commerce, and SaaS teams that need software tailored to their workflows and compliance requirements. Full-stack squads handle design, development, QA, and deployment under one roof, delivering browser-accessible apps that work across devices without native installs. Our architecture prioritizes maintainability and integration with CRM, ERP, and payment systems so your platform grows with the business. Ongoing support covers feature expansion, performance optimization, and security updates after launch.",
    blackBand: {
      title: "Why Choose Our Web App Development Services",
      body: [
        "Six-plus years delivering web apps that connect CRM, ERP, and payment systems.",
        "Scalable, browser-accessible solutions designed around your operational workflows.",
        "Workflow automation and real-time data processing reduce manual overhead.",
        "Smooth data flow between systems improves team productivity and decision speed.",
        "Architecture choices prioritize maintainability and future feature velocity.",
      ],
    },
    splitBlue: {
      title: "Types of Web App Development",
      body:
        "Custom web applications span B2B SaaS products, internal portals, learning management systems, point-of-sale tools, and CRM platforms — each engineered around how your teams actually work.\n\nProgressive web apps deliver offline support and near-native performance in the browser, while multi-tenant SaaS builds include subscription billing and role-based access from day one. Single-page applications using React or Angular provide seamless, reload-free experiences, and API-first backends power web, mobile, and partner integrations from a single core.",
    },
    blueGradient: {
      left: {
        title: "Who We Serve",
        body:
          "Startups launching MVPs and SaaS products rely on us for budget-conscious, agile delivery that validates ideas before scaling investment. Product companies growing user-centric software need robust, testable architecture that supports rapid feature velocity without accumulating technical debt.\n\nEnterprises replacing spreadsheets and legacy tools with modern web platforms benefit from integrated ERP, CRM, supply chain, and knowledge management capabilities. Organizations with strict compliance requirements receive role-based access, audit trails, and enterprise SSO support built into the foundation rather than bolted on later.",
      },
      right: {
        title: "Our Pricing for Web Application Development",
        body:
          "MVP web app development typically ranges from $5,000 to $38,000 USD, covering core features, authentication, and essential integrations for early market validation. Full-scale web applications generally fall between $50,000 and $150,000 USD depending on complexity, third-party connectors, and compliance requirements.\n\nHourly engagement is available at $30 USD per hour for flexible scope or ongoing enhancement work. Every quote is based on documented features, integration points, and timeline requirements — transparent scoping ensures you understand cost drivers before development begins.",
      },
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Software Development",
    heroDescription:
      "Native and cross-platform mobile apps for iOS and Android with high-performance UI/UX, secure integrations, and App Store deployment from concept to launch.",
    intro:
      "Full-cycle mobile development covers design, coding, QA, deployment, and post-launch updates under one delivery team. We build native iOS and Android or cross-platform apps with React Native and Flutter based on your budget, timeline, and performance requirements. Wireframing and prototyping validate user flows before development investment, while API integration connects apps to CRM, databases, and third-party services. Post-launch optimization is driven by real usage data, crash reports, and user feedback.",
    blackBand: {
      title: "What to Expect in Our Mobile App Development Services",
      body:
        "Our mobile engagements begin with platform strategy — native builds when device-specific hardware matters, cross-platform when speed and shared codebases deliver better ROI. UI/UX design includes wireframes and interactive prototypes so stakeholders approve flows before engineering starts.\n\nEvery build includes secure authentication, REST or GraphQL API integration, push notifications, and offline modes tuned for daily active use. Performance profiling, crash reporting, and analytics are standard, giving product teams visibility into retention and stability from the first release.",
    },
    splitBlue: {
      title: "How to Find the Right Partner",
      body: [
        "Evaluate agencies on portfolio depth, technical stack, and industry experience.",
        "Use B2B review platforms like Clutch and Trustpilot for verified client feedback.",
        "Request case studies showing similar app complexity and scale to your project.",
        "Confirm post-launch support, SLA terms, and knowledge transfer practices.",
        "Align on communication cadence, sprint demos, and ownership of app store accounts.",
      ],
    },
    blueGradient: {
      left: {
        title: "Custom Mobile App Development for iOS and Android Platforms",
        body:
          "Custom mobile apps are tailored to your business goals, user behavior patterns, and industry-specific requirements — whether customer-facing products or internal field tools. We design intuitive, on-brand interfaces that perform smoothly across phones and tablets without sacrificing platform conventions.\n\nScalable architecture supports feature growth without full rewrites, and end-to-end delivery spans concept validation through App Store submission and iterative post-launch releases. Your app ships with the operational depth investors and enterprise procurement teams expect.",
      },
      right: {
        title: "Cross-Platform Mobile App Development Using Modern Frameworks",
        body:
          "React Native and Flutter enable single-codebase deployment to iOS and Android, reducing time-to-market and ongoing maintenance cost while maintaining near-native performance. Secure authentication, API integration, crash reporting, and product analytics are included in every cross-platform build.\n\nShared testing pipelines and CI/CD workflows accelerate release cycles, so your team ships updates to both platforms simultaneously. Framework selection is based on your feature requirements, not vendor preference — we recommend the stack that fits your product roadmap.",
      },
    },
  },
  {
    slug: "desktop-app-development",
    title: "Desktop App Development",
    category: "Software Development",
    heroDescription:
      "High-performance desktop software for Windows, macOS, and Linux with deep system integration, security-first architecture, and enterprise-grade deployment support.",
    intro:
      "Custom desktop software is engineered for speed, reliability, and adoption in environments where web apps cannot meet performance or integration requirements. Applications handle complex business logic and high-volume data processing with stable performance under demanding workloads. Cross-platform builds using Electron, .NET, Python, and JavaScript deliver consistent experiences across operating systems. Automation features reduce manual effort, while enterprise installers, auto-update mechanisms, and IT deployment support keep rollouts manageable.",
    blackBand: {
      title: "Custom Desktop Application Development with System Integration and Automation",
      body: [
        "Desktop apps that integrate with ERP, databases, cloud platforms, and third-party tools.",
        "Workflow automation and real-time data synchronization across connected systems.",
        "Reduced manual effort through scripted tasks and intelligent data handling.",
        "Complex business logic handled with stable performance under heavy workloads.",
        "Custom connectors for legacy systems that web apps cannot easily replace.",
      ],
    },
    splitBlue: {
      title: "High-Performance Desktop Applications with Advanced Security Architecture",
      body:
        "Desktop applications are engineered for speed and reliability under demanding workloads — batch processing, local file access, and hardware peripheral integration that cloud-only tools cannot match. Secure authentication, encrypted storage, and vulnerability-resistant architecture protect sensitive customer data in regulated industries.\n\nIntuitive interfaces accelerate adoption across technical and non-technical users, while optimized resource usage ensures consistent performance on end-user machines without excessive memory or CPU overhead.",
    },
    blueGradient: {
      left: {
        title: "Desktop App Development Services for High Performance Applications",
        body:
          "Robust desktop applications for Windows, macOS, and Linux environments integrate seamlessly with existing enterprise systems, databases, and infrastructure your IT team already manages. Responsive interfaces and smooth functionality support daily power-user workflows in manufacturing, finance, healthcare, and field operations.\n\nCustom enterprise tools and standalone applications address niche use cases where off-the-shelf software falls short. Solutions enhance productivity, reduce manual data entry, and improve long-term software reliability through modular, documented codebases.",
      },
      right: {
        title: "Cross-Platform Desktop App Development Services for Multi-OS Solutions",
        body:
          "Cross-platform frameworks like Electron and .NET reduce duplicate development effort while delivering applications that run consistently across Windows, macOS, and Linux. Shared codebases lower maintenance costs through unified release cycles and single testing pipelines.\n\nScalable architecture with responsive interfaces ensures a consistent user experience regardless of employee device preferences — critical for distributed teams and BYOD policies. Platform-specific optimizations are applied where they matter without maintaining entirely separate codebases.",
      },
    },
  },
  {
    slug: "smart-watch-app-development",
    title: "Smart Watch App Development",
    category: "Software Development",
    heroDescription:
      "Wearable apps for Apple Watch and Wear OS optimized for battery life, glanceable interactions, and real-time sync with mobile apps and cloud backends.",
    intro:
      "Smartwatch applications are designed for small screens and short interaction sessions where every tap and glance must deliver value quickly. We build iOS and Android wearable apps with intuitive, thumb-friendly navigation and UI crafted for real-time connectivity, alerts, and health data display. Companion mobile app integration ensures unified user experiences across wrist and phone. From MVP validation to scalable product roadmaps, we help brands extend engagement into the growing wearable market.",
    blackBand: {
      title: "Smart Watch App Development with IoT and Mobile Integration",
      body:
        "Wearable apps sync with mobile applications and cloud platforms in real time, flowing health data, alerts, and sensor readings securely between devices. IoT integration enables smart home, fitness, and enterprise monitoring use cases where wrist-based access improves response times.\n\nEfficient background processes preserve battery without sacrificing reliability, and unified digital ecosystems ensure watches extend — not duplicate — mobile functionality. Your users get contextual information at a glance without reaching for their phone.",
    },
    splitBlue: {
      title: "Custom Smartwatch Applications Optimized for Performance and Battery Efficiency",
      body: [
        "Lightweight code and optimized data handling to minimize power consumption.",
        "Smooth performance on resource-constrained wearable hardware.",
        "Secure data transmission and device-level protections for user privacy.",
        "Glanceable content and quick actions suited to wrist-based interaction.",
        "Reliable daily usability without draining the watch before end of day.",
      ],
    },
    blueGradient: {
      left: {
        title: "Smart Watch App Development Services for Wearable Technology",
        body:
          "We develop apps for Apple Watch, Wear OS, and emerging wearable platforms covering health, fitness, notifications, and custom utility applications. Lightweight, responsive builds are tuned for wearable constraints — limited screen space, intermittent connectivity, and strict battery budgets.\n\nBrand extensions deepen engagement in the growing wearable market, and end-to-end delivery spans concept validation through app store submission and post-launch iteration based on usage analytics.",
      },
      right: {
        title: "Apple Watch and Wear OS App Development for Enhanced User Engagement",
        body:
          "Platform-native experiences follow Apple and Google design guidelines, with glanceable content and interactive complications that drive frequent re-engagement. Health monitoring, alerts, and productivity tools are optimized for wrist-based interaction patterns.\n\nPersonalized experiences keep users connected without phone dependency, and wearable apps strengthen loyalty across your broader digital ecosystem — turning the watch into a daily touchpoint for your brand.",
      },
    },
  },
  {
    slug: "marketing-website-development",
    title: "Marketing Website Development",
    category: "Software Development",
    heroDescription:
      "Conversion-focused marketing websites and landing pages built for lead generation, SEO visibility, and seamless CRM and marketing automation integration.",
    intro:
      "Marketing websites are aligned with brand identity and measurable business goals — not just visual polish without performance data behind them. We deliver landing pages, product showcases, and campaign microsites for growth teams that need fast iteration and clear attribution. Lead capture forms, chat widgets, and nurture workflow connections turn traffic into pipeline, while technical SEO foundations support organic visibility from day one. Iterative improvements based on traffic data and conversion analytics keep your site compounding value over time.",
    blackBand: {
      title: "Marketing Website Development with CRM Integration and Automation",
      body: [
        "Websites connected to CRM, email marketing, and analytics platforms.",
        "Automated lead capture, email workflows, and real-time campaign tracking.",
        "Data-driven design decisions that improve conversion rates over time.",
        "Streamlined marketing processes reducing manual handoffs between tools.",
        "Centralized lead data flowing directly into sales and nurture pipelines.",
      ],
    },
    splitBlue: {
      title: "User-Centric Marketing Website Design and Development",
      body:
        "Intuitive layouts and clear messaging guide visitors toward action at every funnel stage, with interactive features and compelling visuals that reinforce brand credibility. Mobile responsiveness and fast load times are non-negotiable — the majority of marketing traffic arrives on phones, and slow pages kill conversion before your value proposition is read.\n\nNavigation is structured around user intent rather than internal org charts, creating experiences that strengthen brand perception and support long-term growth through repeat visits and referrals.",
    },
    blueGradient: {
      left: {
        title: "Custom Website Development Services for Marketing Campaigns",
        body:
          "Websites tailored for lead generation, conversions, and campaign ROI include responsive, fast, SEO-friendly builds aligned with your marketing strategy. Landing pages and product showcases are optimized for engagement with clear CTAs, social proof, and message-match between ad copy and page headlines.\n\nAnalytics and marketing automation integrations provide measurable outcomes — you see which campaigns drive traffic, which pages convert, and where prospects drop off. Solutions drive qualified leads into sales pipelines with attribution your leadership can trust.",
      },
      right: {
        title: "SEO-Optimized Marketing Websites for Better Visibility",
        body:
          "Technical SEO includes meta tags, schema markup, page speed optimization, and keyword-informed content hierarchy with internal linking structure that search engines reward. Search-engine-friendly code supports higher organic rankings without sacrificing design quality or conversion focus.\n\nImproved visibility brings more qualified inbound traffic over time, and marketing strategy combined with SEO architecture creates sustained lead growth — not one-time traffic spikes from paid campaigns alone.",
      },
    },
  },
  {
    slug: "no-code-development",
    title: "No Code Development",
    category: "Software Development",
    heroDescription:
      "Rapid application delivery on Webflow, Framer, and leading no-code platforms — functional apps launched in weeks with workflow automation and third-party integrations.",
    intro:
      "No-code development serves teams that need speed, flexibility, and lower upfront cost without sacrificing operational reliability. We build custom apps, dashboards, and customer-facing sites on proven platforms with integrations to CRMs, databases, payment systems, and automation tools. Iterative launches validate ideas before committing to full custom builds, and managed deployments include documentation so non-technical teams can own day-to-day updates confidently.",
    blackBand: {
      title: "No-Code Application Development with Integration and Scalable Deployment",
      body:
        "No-code apps connect to CRMs, databases, APIs, and cloud platforms through integration layers that keep data flowing without manual exports. Scalable deployment models grow with user demand and feature scope, and real-time updates support fast business pivots without lengthy development cycles.\n\nReduced development complexity does not mean reduced reliability — we build connected digital ecosystems that launch faster than traditional code cycles while maintaining the operational standards your team depends on.",
    },
    splitBlue: {
      title: "No Code Development Solutions Focused on Automation and Efficiency",
      body: [
        "Applications that automate repetitive tasks and streamline data flows.",
        "Security, reliability, and performance built into every no-code project.",
        "User-centric design that improves team productivity and adoption rates.",
        "Business-critical workflows handled with confidence at scale.",
        "Measurable impact through reduced manual effort and faster turnaround.",
      ],
    },
    blueGradient: {
      left: {
        title: "No-Code Application Development Services for Rapid Solutions",
        body:
          "Fully functional applications built quickly on Webflow, Framer, Bubble, and similar tools enable rapid prototyping and workflow automation for fast time-to-market. MVPs, internal tools, and customer-facing apps ship without lengthy dev cycles, and third-party integrations enable connected, end-to-end workflows.\n\nFaster launches validate ideas and reduce upfront investment risk — you learn what users need before scaling into full custom development. No-code is a strategic starting point, not a permanent ceiling.",
      },
      right: {
        title: "Custom No Code Applications for Agile Business Growth",
        body:
          "No-code solutions adapt as business requirements and markets evolve, making them ideal for startups, SMBs, and enterprises pursuing rapid innovation. Seamless integration with existing systems and approval workflows ensures no-code apps fit into your operational stack rather than creating another silo.\n\nDashboards, marketplaces, and portals are designed for efficiency at scale, delivering agility and competitiveness without heavy traditional development overhead.",
      },
    },
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    category: "Software Development",
    heroDescription:
      "Secure decentralized applications and smart contracts for enterprise and startup use cases, with private and public network deployments tailored to compliance requirements.",
    intro:
      "Blockchain solutions enhance trust, traceability, and operational transparency across finance, supply chain, healthcare, and digital asset markets. We deliver smart contracts, dApps, and distributed ledger integrations using Solidity, Rust, Python, and JavaScript stacks with security-first engineering. Enterprise blockchain connects to existing ERP, CRM, and cloud infrastructure rather than operating in isolation. Ongoing maintenance, upgrades, and security monitoring keep deployments audit-ready after launch.",
    blackBand: {
      title: "Enterprise Blockchain Integration Services for Connected Systems",
      body: [
        "Blockchain solutions integrated with ERP, CRM, and cloud business platforms.",
        "Real-time data sharing and secure transactions across decentralized and legacy systems.",
        "Improved traceability and transparency across supply chain and financial workflows.",
        "Architecture designed for enterprise performance, compliance, and uptime requirements.",
        "Seamless connectivity that makes blockchain a practical part of daily operations.",
      ],
    },
    splitBlue: {
      title: "Decentralized Application (DApp) Development for Digital Innovation",
      body:
        "DApps run on distributed networks with censorship-resistant reliability, serving use cases across finance, healthcare, identity verification, and supply chain management. Scalable, user-friendly interfaces sit atop robust blockchain protocols without exposing users to unnecessary complexity.\n\nSecure data handling and optimized performance across platforms ensure innovative digital services build user trust through decentralization — not hype-driven experiments that fail in production.",
    },
    blueGradient: {
      left: {
        title: "Blockchain Development Services for Secure and Scalable Solutions",
        body:
          "We build smart contracts, dApps, NFT platforms, and private or public blockchain networks for finance, supply chain, healthcare, and emerging digital markets. Security, transparency, and performance are core engineering priorities — not afterthoughts added before launch.\n\nEnd-to-end delivery spans architecture design, development, testing, and deployment. Decentralized technology improves trust and efficiency across industries when implemented with clear business logic and maintainable codebases your team can extend.",
      },
      right: {
        title: "Blockchain Security and Testing Services for Safe and Reliable Solutions",
        body:
          "Smart contract auditing and vulnerability assessment happen before mainnet deployment, with functional, performance, and penetration testing for dApps and networks. Compliance checks align with industry standards and regulatory expectations your legal team can review.\n\nRisk mitigation protects data integrity and user assets, and confident launches are backed by thorough security validation processes — not rushed deployments that become expensive incidents later.",
      },
    },
  },
  {
    slug: "nfts",
    title: "NFTs",
    category: "Software Development",
    heroDescription:
      "NFT marketplaces, minting platforms, and tokenized asset ecosystems with secure smart contracts supporting ERC-721, ERC-1155, and utility-driven membership models.",
    intro:
      "NFT development serves artists, brands, gaming studios, and digital collectibles markets that need more than a one-time drop. We build marketplaces with secure minting, trading, and royalty distribution mechanics, plus tokenized assets that unlock new revenue streams and ownership models. Design and development align with blockchain compatibility and collector appeal, and scalable platforms support drops, auctions, and secondary market activity at growing transaction volumes.",
    blackBand: {
      title: "NFT Platform Integration and Utility Development Services",
      body:
        "NFT platforms integrate with wallets, payment gateways, and metaverse environments so collectors experience seamless onboarding and trading. Utility NFTs enable memberships, rewards, access control, and in-app features that sustain engagement beyond initial sales.\n\nInteroperability across marketplaces and external applications, combined with scalable architecture for growing user bases, creates sustainable digital ecosystems — not speculative launches that fade after the first mint.",
    },
    splitBlue: {
      title: "NFT Smart Contracts and Token Standards Implementation",
      body: [
        "Smart contracts managing ownership, transfers, royalties, and scarcity rules.",
        "Compliance with ERC-721, ERC-1155, and other standards for broad compatibility.",
        "Thorough testing preventing vulnerabilities and ensuring reliable execution.",
        "Automated royalty distribution and ownership enforcement on-chain.",
        "Trust-building infrastructure that streamlines creator and business operations.",
      ],
    },
    blueGradient: {
      left: {
        title: "NFT Development Services for Digital Collectibles and Assets",
        body:
          "Minting platforms and marketplaces for art, gaming, music, and brand collectibles include blockchain smart contracts ensuring authenticity and verifiable ownership. User experience and platform performance are optimized for collector engagement across primary drops and secondary trading.\n\nCustom drops and full marketplace builds are tailored to project goals, enabling secure monetization of digital content and community-driven asset economies that grow with your audience.",
      },
      right: {
        title: "NFT Design Services for Unique Digital Assets",
        body:
          "Custom artwork, 3D designs, motion graphics, and generative art for NFT drops create visually distinctive assets that stand out in competitive digital marketplaces. Designs meet technical requirements for minting, metadata, and trading without rework during development.\n\nConcept-to-final-asset workflows are optimized for collector appeal, delivering market-ready visuals that capture attention and drive perceived value at launch.",
      },
    },
  },
  {
    slug: "odoo-erp-solutions",
    title: "Odoo ERP Solutions",
    category: "ERP Solutions",
    heroDescription:
      "Comprehensive Odoo ERP implementation covering finance, CRM, inventory, HR, and manufacturing — with custom modules, integrations, and AI-powered automation.",
    intro:
      "Odoo ERP solutions unify accounting, sales, inventory, and HR in one open-source platform that scales from SMB to enterprise without licensing lock-in. Implementation, customization, and migration services minimize disruption while workflow automation improves real-time data visibility across departments. Integrations with e-commerce, payment gateways, and existing business tools connect Odoo to your operational stack. Ongoing support, training, and optimization keep the platform aligned as your organization grows.",
    blackBand: {
      title: "Custom Module Development and Third-Party Integrations",
      body: [
        "Custom Odoo modules when standard functionality does not fit your workflows.",
        "Integrations with Shopify, Magento, QuickBooks, Salesforce, and payment gateways.",
        "API and third-party connectors ensuring seamless data flow across systems.",
        "Version migration and legacy system upgrades with validated data transfer.",
        "Odoo as a central hub connecting all business operations and automations.",
      ],
    },
    splitBlue: {
      title: "Key Benefits of Open-Source ERP Solutions with Odoo",
      body:
        "Odoo's open-source foundation enables full customization of CRM, accounting, inventory, and HR modules without vendor lock-in or per-user licensing fees that escalate with growth. A strong global developer community and continuous platform updates keep your ERP current.\n\nEasy integrations, automation, and real-time insights support better operational decisions, reducing costs and increasing productivity through tailored ERP that fits how your teams actually work.",
    },
    blueGradient: {
      left: {
        title: "Odoo ERP Solutions for Businesses",
        body:
          "A centralized Odoo platform covers accounting, sales, CRM, inventory, and manufacturing with tailored workflows ensuring ERP fits your specific operational needs. E-commerce and POS modules unify retail and online operations under one database.\n\nScalable architecture supports growth from SMB to enterprise scale, replacing fragmented spreadsheets and siloed tools with a single source of truth your leadership can trust for reporting and planning.",
      },
      right: {
        title: "Odoo AI Integrations",
        body:
          "AI-powered data analysis and reporting across departments surface patterns that manual review misses, while customer engagement tools leverage predictive insights and automation. Inventory forecasting and operational efficiency improvements via AI reduce stockouts and over-ordering.\n\nAI-driven quality assurance and financial management capabilities deliver actionable insights that enhance decision-making and reduce manual analysis overhead across finance and operations teams.",
      },
    },
  },
  {
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    category: "ERP Solutions",
    heroDescription:
      "Tailored ERP systems unifying finance, HR, inventory, CRM, and supply chain — built around your workflows with cloud deployment and process automation.",
    intro:
      "Custom ERP development serves companies outgrowing off-the-shelf software limitations and needing platforms shaped around unique operational requirements. Enterprise software combines automation tools and cloud-native infrastructure with industry-specific modules for manufacturing, retail, healthcare, and logistics. Migration from legacy systems includes validated data transfer and user training, and long-term partnership covers enhancements, integrations, and performance tuning as organizational complexity grows.",
    blackBand: {
      title: "ERP Implementation, Migration and Cloud Deployment Services",
      body:
        "Smooth transition from legacy systems to modern, scalable ERP platforms includes data migration, process alignment, and deployment with minimal business disruption. Cloud ERP enables real-time access, scalability, and lower infrastructure costs compared to on-premise maintenance.\n\nSecure integration with existing tools maintains performance standards while delivering future-ready digital infrastructure that supports organizational modernization goals your leadership can plan around.",
    },
    splitBlue: {
      title: "Industry-Specific ERP Solutions for Enhanced Efficiency",
      body: [
        "Modules tailored for manufacturing, retail, healthcare, logistics, and more.",
        "Automated reporting, real-time analytics, and inventory management built in.",
        "Compliance features aligned with industry regulations and audit requirements.",
        "Security, scalability, and usability prioritized throughout development.",
        "ERP systems that reduce errors and strengthen operational decision-making.",
      ],
    },
    blueGradient: {
      left: {
        title: "ERP Software Development Services for Business Process Automation",
        body:
          "Centralized ERP systems integrate finance, HR, inventory, sales, and supply chain with workflow automation that reduces manual tasks and improves data visibility across departments. Scalable architecture supports seamless third-party system integration as your stack evolves.\n\nUser-friendly interfaces accelerate adoption across departments, and operational cost reduction comes through unified process management rather than reconciling data across disconnected tools.",
      },
      right: {
        title: "Custom ERP Software Development Services for Business Solutions",
        body:
          "ERP platforms designed around unique workflows rather than generic templates give your organization greater control over how teams work day to day. Finance, HR, inventory, CRM, and supply chain unify in one solution with process automation tailored to actual operational patterns.\n\nFlexible architecture adapts as organizational needs evolve, delivering greater efficiency and smarter decision-making through custom ERP your internal teams can extend and maintain.",
      },
    },
  },
  {
    slug: "oracle-erp-to-odoo-migration",
    title: "Oracle ERP to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "Structured migration from Oracle ERP to flexible, cost-efficient Odoo with secure data transfer, phased rollout, and post-migration optimization.",
    intro:
      "Oracle to Odoo migration serves organizations seeking agility and lower total cost of ownership without sacrificing critical business functionality. Comprehensive planning covers data mapping, customizations, and integrations, with validated migration of accounts, inventory, HR, and transactional history. User training and change management support smooth adoption across departments, and ongoing hypercare during stabilization after go-live catches issues before they impact operations.",
    blackBand: {
      title: "Why Migrate from Oracle ERP to Odoo?",
      body: [
        "Lower licensing fees and simpler deployment compared to Oracle complexity.",
        "Modular Odoo functionality adaptable to CRM, accounting, inventory, and HR.",
        "Open-source flexibility enabling customization without vendor lock-in.",
        "User-friendly interfaces that accelerate adoption across the organization.",
        "Streamlined operations with better cost control and scalable growth paths.",
      ],
    },
    splitBlue: {
      title: "ERP Data Migration Best Practices",
      body:
        "Data cleansing and normalization happen before migration begins, with accurate mapping of Oracle data structures to Odoo modules and staged migrations supported by rollback strategies. Backup procedures and integrity validation through structured testing ensure error-free outcomes backed by finance and operations sign-off.\n\nEvery checkpoint produces reconciliation reports your teams can audit, reducing operational risk during cutover and giving leadership confidence that historical data continuity is preserved.",
    },
    blueGradient: {
      left: {
        title: "Key Challenges in Oracle ERP System Migration",
        body:
          "Complex Oracle data structures require careful extraction and transformation — extensions, custom fields, and historical transactions cannot be moved with simple exports. Compatibility issues with Oracle extensions and custom tooling must be identified early in planning.\n\nData loss risks during transfer are mitigated through validation checkpoints, and minimizing downtime while maintaining business continuity throughout cutover requires phased rollout strategies tailored to your operational calendar.",
      },
      right: {
        title: "Our Oracle ERP Migration to Odoo Services",
        body:
          "Detailed system analysis and migration planning precede execution, with secure, accurate data migration and reconciliation reports finance teams can audit line by line. Custom development and third-party integrations are recreated in Odoo with functional parity verified before Oracle decommissioning.\n\nTesting, validation, and performance optimization happen before go-live, and ongoing post-deployment support ensures seamless operational transition into your new ERP environment.",
      },
    },
  },
  {
    slug: "ms-dynamics-365-to-odoo",
    title: "MS Dynamics 365 to Odoo",
    category: "ERP Solutions",
    heroDescription:
      "Full CRM and ERP migration from Microsoft Dynamics 365 to Odoo with validated data transfer, integration replacement, and unified sales, invoicing, and inventory.",
    intro:
      "Dynamics 365 to Odoo migration includes validated entity and workflow mappings with security roles, automations, and integrations reimplemented for Odoo architecture. Azure AD, Office 365, and third-party connector replacements are planned upfront so nothing breaks at cutover. Process documentation captures before-and-after workflows for stakeholder clarity, and post-migration tuning based on real team usage patterns refines Odoo into a system people actually adopt.",
    blackBand: {
      title: "Dynamics Data and Process Migration",
      body:
        "Entities, workflows, and security roles are translated into Odoo data models with audit logs providing record-level lineage for compliance and verification. Validated mappings ensure CRM and ERP data integrity after transfer, and staged cutover plans reduce risk during the transition window.\n\nFinance and operations sign-off at each migration checkpoint gives leadership confidence that customer records, open orders, and financial history arrive in Odoo complete and reconciled.",
    },
    splitBlue: {
      title: "Integrations That Survive the Move",
      body: [
        "Azure AD and Office 365 integrations reimplemented or replaced in Odoo.",
        "E-commerce and third-party connectors maintained through migration planning.",
        "SSO and email workflows restored before go-live deadline.",
        "API replacements documented for internal IT and vendor teams.",
        "Business-critical integrations tested end-to-end before production cutover.",
      ],
    },
    blueGradient: {
      left: {
        title: "CRM + ERP Unified in Odoo",
        body:
          "Sales pipelines, invoicing, and inventory share one unified Odoo database — eliminating sync jobs and broken reports from disconnected Dynamics modules. Real-time visibility spans customer-facing and back-office operations in a single interface.\n\nSimplified licensing and administration compared to the Dynamics stack reduces IT overhead, and teams work from a single source of truth for customer and order data that finance and sales both trust.",
      },
      right: {
        title: "Post-Migration Optimization",
        body:
          "Odoo automations are tuned based on how teams actually work post go-live, with reports and dashboards refined for finance and operations leadership. User feedback is incorporated during a dedicated hypercare support window.\n\nPerformance optimization for high-volume transactional workflows and a continuous improvement roadmap beyond initial migration completion ensure Odoo delivers lasting value — not just a successful cutover weekend.",
      },
    },
  },
  {
    slug: "sap-to-odoo-migration",
    title: "SAP to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "Phased SAP to Odoo migration preserving transactional history, reimplementing ABAP customizations, and supporting multi-company governance with localized tax configurations.",
    intro:
      "SAP to Odoo migration serves organizations seeking simpler ERP operations without losing years of transactional history. Critical SAP custom logic is recreated with tests and documentation in Odoo, and finance and operations sign-off happens at every extraction and load checkpoint. Faster month-end close cycles come from integrated CRM and inventory in Odoo, and auditor-ready consolidations with inter-company rules are validated before go-live.",
    blackBand: {
      title: "SAP Extraction, Transformation, and Load",
      body: [
        "Chart of accounts, materials, BOMs, and open documents migrated systematically.",
        "Sign-off checkpoints from finance and operations leads at each ETL stage.",
        "Data reconciliation reports finance teams can audit with confidence.",
        "Staged loads reducing risk of business disruption during cutover.",
        "Validated historical data preserving continuity for reporting and compliance.",
      ],
    },
    splitBlue: {
      title: "Recreate Critical SAP Customizations in Odoo",
      body:
        "Revenue-driving ABAP logic is reimplemented as tested Odoo modules with documentation and unit tests ensuring long-term maintainability. Custom workflows map to Odoo automations and server actions, and stakeholder review confirms functional parity before SAP decommissioning begins.\n\nYour team inherits a sustainable Odoo codebase they can extend without ABAP dependency — reducing vendor lock-in and ongoing maintenance cost.",
    },
    blueGradient: {
      left: {
        title: "Faster Close Cycles After Migration",
        body:
          "Simpler posting models in Odoo reduce month-end reconciliation effort compared to SAP's complexity, and integrated CRM and inventory eliminate cross-system data delays that slow close cycles. Finance teams often see shorter close cycles within two quarters of stabilization.\n\nReal-time reporting replaces batch exports from legacy SAP reports, and operational efficiency gains become visible soon after the migration stabilization period ends.",
      },
      right: {
        title: "Governance for Multi-Company Setups",
        body:
          "Inter-company rules and consolidation logic are validated before auditors review, with localized tax configurations mapped accurately per jurisdiction. Multi-entity reporting structures are preserved in Odoo architecture with role-based access aligned to corporate governance requirements.\n\nCompliance-ready setup supports audit and regulatory expectations across subsidiaries, currencies, and regional tax rules your finance team manages daily.",
      },
    },
  },
  {
    slug: "netsuite-erp-to-odoo",
    title: "NetSuite ERP to Odoo",
    category: "ERP Solutions",
    heroDescription:
      "NetSuite to Odoo migrations with full historical data reconciliation, SuiteScript automation replacement, and e-commerce integration reconnection before fulfillment resumes.",
    intro:
      "NetSuite ERP to Odoo migration includes clear before-and-after process documentation with subsidiary structures and multi-currency setups mapped to Odoo equivalents. Critical approval, allocation, and revenue recognition workflows are preserved, and Shopify, Amazon, and warehouse connectors are planned for zero fulfillment downtime. Finance-auditable reconciliation reports throughout the migration lifecycle give leadership confidence at every milestone.",
    blackBand: {
      title: "NetSuite Historical Data in Odoo",
      body:
        "Customers, items, transactions, and inventory valuations migrate completely with reconciliation reports finance teams can audit against NetSuite source data. Open orders and WIP balances are validated before production cutover, and historical reporting continuity is maintained for trend analysis and compliance.\n\nData integrity checkpoints at every major migration milestone catch discrepancies early — before they become expensive post-go-live fire drills.",
    },
    splitBlue: {
      title: "Replace SuiteScript with Odoo Automations",
      body: [
        "Approval workflows rebuilt as tested Odoo server actions and scheduled jobs.",
        "Revenue recognition and allocation logic recreated with stakeholder sign-off.",
        "Saved search equivalents implemented as Odoo reports and filtered views.",
        "Automation parity verified before NetSuite decommissioning begins.",
        "Maintainable Odoo code replacing opaque SuiteScript dependencies.",
      ],
    },
    blueGradient: {
      left: {
        title: "Ecommerce and WMS Integrations",
        body:
          "Shopify, Amazon, and warehouse connectors are reconnected during migration so fulfillment operations continue without pause through staged cutover. Inventory sync and order routing are tested end-to-end before go-live, and third-party logistics integrations map to Odoo warehouse modules.\n\nOmnichannel operations unify under one ERP after migration completes — eliminating the sync failures and inventory discrepancies that plague multi-system NetSuite setups.",
      },
      right: {
        title: "Cost Model You Can Plan Around",
        body:
          "Odoo licensing and hosting costs are forecasted alongside migration effort, with ROI analysis comparing NetSuite TCO against Odoo operational expenses over three to five years. Transparent budgeting avoids surprise per-user or module fees that escalate as headcount grows.\n\nScalable cost structure aligns with business growth projections, and financial planning support helps leadership approve migration with confidence in the numbers.",
      },
    },
  },
  {
    slug: "erpnext-to-odoo-migration",
    title: "ERPNext to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "ERPNext to Odoo migration preserving DocTypes, manufacturing BOMs, and open items — with edition planning, hosting guidance, and dedicated hypercare after go-live.",
    intro:
      "ERPNext to Odoo migration serves organizations needing richer ERP capabilities without losing operational history built in Frappe. Every custom DocType is inventoried with essential fields recreated or retired with documented justification. Manufacturing and project continuity is validated on the shop floor before cutover, and post go-live support covers stabilization and user adoption coaching during the critical first weeks.",
    blackBand: {
      title: "ERPNext to Odoo Field and DocType Mapping",
      body: [
        "Complete inventory of custom DocTypes and field-level dependencies.",
        "Essential fields and scripts recreated in Odoo with stakeholder approval.",
        "Obsolete customizations retired with documented business justification.",
        "Data mapping validated through sample loads and user acceptance testing.",
        "Clean Odoo foundation without carrying unnecessary ERPNext technical debt.",
      ],
    },
    splitBlue: {
      title: "Manufacturing and Projects Continuity",
      body:
        "BOMs, routings, and manufacturing workflows transfer with shop-floor validation, and timesheets, project tasks, and WIP balances are reconciled before cutover. Production teams confirm operational parity during pilot runs, and supply chain and procurement history is preserved for continuity reporting.\n\nActive manufacturing jobs continue without disruption during the migration window — cutover planning respects production schedules, not just IT calendars.",
    },
    blueGradient: {
      left: {
        title: "Community vs Enterprise Odoo Planning",
        body:
          "Edition recommendations are based on user count, SLA needs, and compliance requirements — Community vs Enterprise decisions made before migration begins, not after surprises surface. Hosting model guidance covers cloud, on-premise, and managed Odoo.sh deployments.\n\nFeature comparison maps ERPNext capabilities to Odoo module equivalents with licensing cost projections for leadership budget approval, delivering a right-sized Odoo stack from day one.",
      },
      right: {
        title: "Hypercare After Go-Live",
        body:
          "A dedicated support window immediately following production cutover catches edge cases from legacy ERPNext customizations before they impact daily operations. User questions are triaged with priority response during the stabilization period.\n\nPerformance tuning based on real transactional load post launch builds confidence until teams operate independently in Odoo — hypercare is structured support, not indefinite dependency.",
      },
    },
  },
  {
    slug: "agentic-ai-services",
    title: "Agentic AI Services",
    category: "AI/ML Services",
    heroDescription:
      "Autonomous AI agents that plan, use tools, and complete multi-step business tasks with human-in-the-loop approvals, audit logging, and production-scale deployment.",
    intro:
      "Agentic AI services design agents that collaborate with humans under guardrails — not opaque black-box automation that bypasses accountability. Multi-step task orchestration spans research, procurement, support, and operations with tool use, memory, and retrieval built into reliable architectures. Enterprise security includes PII redaction, tenant isolation, and policy engines, and pilot-to-production pathways include regression testing as models and data evolve.",
    blackBand: {
      title: "Agents That Work With Your Systems",
      body: [
        "CRM updates, ticket triage, and research summaries orchestrated autonomously.",
        "Procurement drafts and data enrichment tasks completed with human approval gates.",
        "Permission-scoped tool access preventing agents from exceeding data boundaries.",
        "Comprehensive logging for audit trails and operational transparency.",
        "Practical automation that augments teams without replacing accountability.",
      ],
    },
    splitBlue: {
      title: "Tool Use, Memory, and Evaluation Built In",
      body:
        "Function calling and retrieval keep agents grounded in current data rather than hallucinating from stale training sets. Persistent memory enables context-aware multi-turn task completion, and regression test suites validate agent behavior as underlying models update.\n\nEvaluation frameworks measure accuracy, latency, and task success rates — reliable agents maintain quality through changing model landscapes instead of degrading silently in production.",
    },
    blueGradient: {
      left: {
        title: "Enterprise Security and Compliance",
        body:
          "PII redaction happens before data reaches external model providers, and tenant isolation ensures multi-customer deployments stay separated at the infrastructure level. Policy engines define what agents can access and execute based on role, data classification, and use case risk.\n\nCompliance frameworks align with industry regulatory requirements, delivering secure agent operations suitable for regulated and sensitive environments where audit trails are mandatory.",
      },
      right: {
        title: "From Pilot to Production Scale",
        body:
          "Queueing and rate limiting handle real traffic spikes gracefully without runaway costs or provider throttling. Cost controls prevent runaway token spend during peak workloads, and horizontal scaling architecture supports high-volume agent deployments.\n\nMonitoring dashboards track agent performance and failure modes, and production infrastructure survives enterprise demand patterns — not demo-day traffic alone.",
      },
    },
  },
  {
    slug: "generative-ai-services",
    title: "Generative AI Services",
    category: "AI/ML Services",
    heroDescription:
      "GenAI for content, code, images, and product features grounded in your brand — with prompt engineering, safety filters, and usage monitoring for trustworthy outputs.",
    intro:
      "Generative AI services help teams ship LLM-powered features responsibly with UX patterns that set clear expectations when AI generates or suggests content. Brand-safe outputs are encoded through style guides and evaluation datasets, covering support drafts, marketing copy, and code generation tailored to your use cases. Iterative improvement driven by production usage data and quality metrics replaces guesswork about what users actually trust.",
    blackBand: {
      title: "GenAI Features Users Can Trust",
      body:
        "Source citations and confidence indicators reduce hallucination risk in user-facing features, and edit-before-send flows give users control over AI-generated content before it reaches customers. Safety filters block harmful, off-brand, or non-compliant outputs at the pipeline level.\n\nTransparent AI disclosure meets emerging regulatory expectations, and customer-facing experiences build confidence rather than skepticism — trust is designed in, not bolted on after launch.",
    },
    splitBlue: {
      title: "Model Selection for Cost and Quality",
      body: [
        "Benchmarking open and closed models against your specific task requirements.",
        "Architecture decisions locked only after empirical quality and cost comparison.",
        "Right-sized models avoiding over-provisioning for simple generation tasks.",
        "Fallback strategies when primary models face latency or availability issues.",
        "Sustainable unit economics for GenAI features at production scale.",
      ],
    },
    blueGradient: {
      left: {
        title: "Brand-Safe Outputs",
        body:
          "Style guides and tone rules are embedded in prompts and evaluation pipelines so generated content is reviewed against brand voice before reaching users. Custom fine-tuning on approved corpora delivers consistent on-voice results across marketing, support, and product copy.\n\nGuardrails prevent off-topic, competitor, or sensitive content generation — marketing and product teams trust AI output without constant manual edits slowing velocity.",
      },
      right: {
        title: "Monitoring Drift and Usage",
        body:
          "Dashboards track token spend, latency, and error rates in real time alongside quality scores measured through automated and human evaluation loops. Usage patterns inform which features deserve investment or retirement based on actual adoption.\n\nDrift detection alerts teams when output quality degrades over time, and data-driven iteration replaces guesswork in GenAI product development.",
      },
    },
  },
  {
    slug: "rag-development-services",
    title: "RAG Development Services",
    category: "AI/ML Services",
    heroDescription:
      "Retrieval-augmented generation pipelines answering from your private documents with hybrid search, access control, and on-prem or VPC deployment options.",
    intro:
      "RAG development connects LLMs to your docs, tickets, and knowledge bases so answers cite verifiable sources users can trust and validate. Ingestion pipelines include deduplication, versioning, and scheduled refresh to keep knowledge current. Human feedback loops improve hit rates on domain-specific questions, and analytics surface knowledge gaps and hallucination patterns for targeted improvement.",
    blackBand: {
      title: "Knowledge Bases That Stay Current",
      body:
        "Scheduled ingestion syncs Confluence, SharePoint, PDFs, and ticket systems with deduplication and version tracking preventing stale or conflicting answers. Incremental updates avoid full re-indexing on every content change, and access control ensures users only retrieve documents they are permitted to see.\n\nLiving knowledge bases grow alongside organizational documentation — RAG systems that answer from last year's wiki are worse than no system at all.",
    },
    splitBlue: {
      title: "Accuracy Over Generic Chatbots",
      body: [
        "Hybrid search combining keyword and semantic retrieval for better recall.",
        "Metadata filters narrowing results to relevant departments or document types.",
        "Reranking models surfacing the most pertinent chunks before generation.",
        "Human feedback loops training retrieval quality on real user questions.",
        "Domain-specific accuracy that generic chatbots cannot match out of the box.",
      ],
    },
    blueGradient: {
      left: {
        title: "On-Prem or VPC Deployment Options",
        body:
          "Sensitive corpora stay inside your network with local embedding models and air-gapped inference options for regulated environments. VPC deployments balance data sovereignty with cloud scalability, and encryption in transit and at rest protects all indexed document content.\n\nCompliance-ready architecture serves healthcare, finance, and government use cases where sending proprietary data to public APIs is not an option.",
      },
      right: {
        title: "Analytics on Gaps and Hallucinations",
        body:
          "Unanswered queries feed content improvement backlogs automatically, and hallucination tracking identifies where retrieval or generation fails on real user questions. Usage analytics show which topics users struggle to find answers for.\n\nContinuous improvement cycles driven by real interaction data target knowledge base growth where users need help most — not where documentation happens to be easiest to index.",
      },
    },
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    category: "AI/ML Services",
    heroDescription:
      "Support, sales, and internal chatbots with seamless human handoff across web, mobile, Slack, and WhatsApp — integrated with CRM and helpdesk systems.",
    intro:
      "AI chatbot development resolves common intents and collects structured data before escalating complex cases to human agents with full context. Continuous improvement from conversation logs happens without full bot redeployment, and integrations with Zendesk, Salesforce, HubSpot, and custom ticketing systems eliminate copy-paste between channels. Analytics highlight new intents and training opportunities as user needs evolve.",
    blackBand: {
      title: "Chatbots That Know When to Escalate",
      body: [
        "Intent detection routing complex cases to human agents with full context.",
        "Sentiment signals triggering escalation before customer frustration peaks.",
        "SLA rules ensuring time-sensitive issues reach the right team promptly.",
        "Transcripts and suggested replies accelerating agent resolution times.",
        "Bots handling routine volume so agents focus on high-value interactions.",
      ],
    },
    splitBlue: {
      title: "Multilingual and Accessible by Default",
      body:
        "Locale-aware models support global customer and employee audiences with right-to-left language support where regional markets require it. WCAG-conscious UI includes keyboard navigation and screen reader compatibility considered from first wireframe — not added post-launch as a compliance checkbox.\n\nAccessible chat experiences meet enterprise procurement requirements and serve users who depend on assistive technology daily.",
    },
    blueGradient: {
      left: {
        title: "Integrations with Zendesk, Salesforce, and More",
        body:
          "Tickets, leads, and orders are created automatically from chat conversations with bi-directional sync keeping CRM records current without manual entry. Custom webhook integrations connect internal tools and approval workflows.\n\nUnified customer history is visible to agents during escalated sessions — chat becomes a first-class channel in your existing support and sales stack rather than an isolated experiment.",
      },
      right: {
        title: "Continuous Improvement from Conversation Logs",
        body:
          "Review queues surface conversations needing human quality assessment, and analytics highlight emerging intents for targeted training updates. A/B testing of prompts and flows happens without redeploying the entire bot.\n\nMonthly quality reports track resolution rates and user satisfaction — bots get smarter through structured feedback, not one-time launches that stagnate.",
      },
    },
  },
  {
    slug: "ai-app-development",
    title: "AI App Development",
    category: "AI/ML Services",
    heroDescription:
      "Full product builds where AI is core — from mobile apps to enterprise SaaS with inference pipelines, billing, admin tooling, and UX designed for AI uncertainty.",
    intro:
      "AI app development ships complete applications — not bolt-on AI experiments destined for a rewrite at scale. Auth, subscriptions, model routing, and feedback collection sit in the MVP scope alongside latency and cost profiles engineered for real user volumes from day one. Design patterns handle ambiguous, slow, or partial model responses calmly, and product analytics reveal which AI features drive engagement and revenue.",
    blackBand: {
      title: "Product-Grade AI Applications",
      body:
        "Authentication, subscriptions, and model routing are built into the foundation from sprint one — not added after a prototype impresses stakeholders. Feedback collection loops enable continuous model and UX improvement, and admin tooling covers prompt management, usage monitoring, and access control.\n\nProduction infrastructure replaces prototypes destined for rewrite at scale — ship-ready AI products with the operational depth investors and enterprise users expect.",
    },
    splitBlue: {
      title: "Edge, Cloud, or Hybrid Inference",
      body: [
        "Models placed where privacy, speed, and unit economics make sense per feature.",
        "On-device inference for latency-sensitive or offline-capable experiences.",
        "Cloud APIs for complex generation tasks with caching to control costs.",
        "Hybrid architectures routing requests to optimal inference endpoints dynamically.",
        "Architecture decisions driven by real usage patterns—not theoretical preferences.",
      ],
    },
    blueGradient: {
      left: {
        title: "Design for AI Uncertainty",
        body:
          "Loading states and skeleton screens keep users informed during inference, with partial results and progressive disclosure when models stream responses. Retry paths and fallback content activate when models are slow or unavailable.\n\nClear expectations upfront help users understand AI limitations, and calm UX maintains trust even when AI performance varies — uncertainty is a design problem, not just an engineering one.",
      },
      right: {
        title: "Ship Metrics That Matter",
        body:
          "Activation rates are tracked per AI feature to identify onboarding friction, and retention cohorts reveal which AI capabilities drive repeat usage. Task success metrics measure whether AI actually solves user problems — not just whether users click the AI button.\n\nFeature-level analytics guide investment toward high-impact capabilities, replacing intuition about AI feature value with data your product team can act on.",
      },
    },
  },
  {
    slug: "ai-automation-services",
    title: "AI Automation Services",
    category: "AI/ML Services",
    heroDescription:
      "Automate document processing, email triage, and ops workflows with AI — OCR, LLMs, and integration connectors with auditable confidence thresholds and ROI tracking.",
    intro:
      "AI automation combines intelligent extraction with traditional system integration so invoices, contracts, and inbound mail are classified and posted to ERP automatically. Exception handling ensures critical tasks never stall when AI confidence is low, and workflow automation across SaaS tools replaces brittle regex rules with AI that understands unstructured input. Monthly reporting proves automation value to leadership and operations teams with hard numbers.",
    blackBand: {
      title: "Intelligent Document and Email Processing",
      body: [
        "Invoices and contracts classified, extracted, and routed to ERP systems.",
        "Inbound email triaged by urgency, topic, and required action automatically.",
        "Confidence thresholds triggering human review only when needed.",
        "Audit trails documenting every automated decision for compliance review.",
        "Finance and operations teams freed from repetitive document handling.",
      ],
    },
    splitBlue: {
      title: "Workflow Automation Across SaaS Tools",
      body:
        "Multi-step automations connect CRM, ERP, email, and project management tools with AI steps interpreting unstructured input that traditional rules cannot parse. Conditional logic routes workflows based on extracted data and context, and error handling with retry mechanisms prevents silent automation failures.\n\nConnected operations run faster with fewer manual handoffs between systems — automation that breaks silently is worse than no automation at all.",
    },
    blueGradient: {
      left: {
        title: "ROI Tracking Per Automation",
        body:
          "Hours saved are quantified and reported monthly per automation workflow, with error rate comparisons before and after deployment. Throughput metrics show volume handled without additional headcount, and cost-per-transaction analysis validates automation investment decisions.\n\nLeadership dashboards prove automation ROI with hard numbers — not slide decks claiming efficiency without measurement.",
      },
      right: {
        title: "Fallbacks When Models Miss",
        body:
          "Rules-based paths ensure critical workflows complete regardless of AI confidence, and human task queues handle exceptions requiring judgment or approval. Alerting fires when automation failure rates exceed configured thresholds.\n\nGraceful degradation maintains operations during model outages — reliable automation never leaves business-critical processes stranded waiting for a model that timed out.",
      },
    },
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    category: "AI/ML Services",
    heroDescription:
      "AI strategy, roadmaps, and vendor selection aligned with business outcomes — with responsible AI frameworks and executive dashboards tracking pilot status and impact.",
    intro:
      "AI consulting helps leadership make informed decisions before large investments, with workshops mapping opportunities to regulatory constraints and feasibility realities. Actionable roadmaps replace slide decks that gather dust after the engagement ends, and governance policies are tailored to your industry regulators and risk tolerance. Portfolio views give steering committees visibility across all AI initiatives in one place.",
    blackBand: {
      title: "AI Strategy Grounded in Feasibility",
      body:
        "Workshops map AI opportunities to available data and team skills, with regulatory constraints identified early to prevent costly compliance surprises. Pilot designs include clear success criteria and realistic timelines, and capacity planning ensures teams can sustain initiatives after consulting ends.\n\nStrategies produce working pilots — not theoretical transformation visions that never survive contact with your data estate or engineering backlog.",
    },
    splitBlue: {
      title: "Build vs Buy vs Partner Analysis",
      body: [
        "Honest comparisons of foundation models, SaaS copilots, and custom development.",
        "Total cost of ownership modeling across licensing, infrastructure, and talent.",
        "Vendor evaluation frameworks scoring fit against your specific use cases.",
        "Partnership recommendations when external expertise accelerates time to value.",
        "Decisions backed by evidence rather than hype or vendor sales pressure.",
      ],
    },
    blueGradient: {
      left: {
        title: "Responsible AI Frameworks",
        body:
          "Bias testing protocols run before models reach production users, and disclosure policies meet emerging AI transparency regulations your legal team can review. Human oversight requirements are defined per use case risk level.\n\nData governance rules cover training, inference, and retention — ethical AI practices aligned with your industry and brand values, not generic principles copied from a blog post.",
      },
      right: {
        title: "Executive Dashboards for AI Portfolio",
        body:
          "Pilot status, spend, and impact metrics appear in one steering committee view with risk indicators flagging initiatives falling behind schedule or budget. ROI tracking spans experiments, pilots, and production deployments.\n\nResource allocation visibility across data science and engineering teams gives leadership confidence through transparent AI program management.",
      },
    },
  },
  {
    slug: "ai-integration-services",
    title: "AI Integration Services",
    category: "AI/ML Services",
    heroDescription:
      "Embed OpenAI, Anthropic, Azure AI, and open models into existing products with secure API patterns, observability, and abstraction layers for provider flexibility.",
    intro:
      "AI integration wires LLM and vision APIs into apps, portals, and backends with caching, key management, and fallbacks without rewriting existing codebases. Small, reversible releases upgrade legacy features with AI capabilities, and token usage and error budgets are tracked alongside traditional service metrics. Provider-agnostic architecture adapts as pricing and quality shift over time.",
    blackBand: {
      title: "Secure API Integration Patterns",
      body: [
        "Proxy layers keeping API keys off client devices and frontend code.",
        "Rate limiting preventing cost overruns and provider throttling issues.",
        "PII scrubbing before payloads reach external model providers.",
        "Request logging with redaction for security audit and debugging.",
        "Enterprise-grade integration patterns suitable for regulated environments.",
      ],
    },
    splitBlue: {
      title: "Upgrade Legacy Features with AI",
      body:
        "Search, recommendations, and form fill are enhanced incrementally — not through big-bang rewrites that risk months of regression. Small releases stay reversible if AI quality does not meet expectations, and existing user workflows are preserved while AI adds intelligence behind the scenes.\n\nA/B testing compares AI-enhanced features against current baselines, delivering a practical modernization path for products with years of accumulated code.",
    },
    blueGradient: {
      left: {
        title: "Observability for Model Calls",
        body:
          "Distributed traces show model latency within full request paths, and token usage dashboards integrate with existing monitoring tools your ops team already uses. Error budgets and alerting fire when model failure rates spike.\n\nCost attribution per feature, team, or customer segment delivers operational visibility matching what you expect from traditional APIs — not black-box model calls with no metrics.",
      },
      right: {
        title: "Swap Models Without Rewriting UI",
        body:
          "Abstraction layers decouple frontend from specific model providers, with configuration-driven model routing for easy provider changes. Quality regression tests validate outputs after model swaps, and gradual rollout mechanisms test new models on traffic subsets.\n\nFuture-proof architecture adapts to the rapidly evolving AI landscape without rewriting user interfaces every time a better model ships.",
      },
    },
  },
  {
    slug: "ml-development-services",
    title: "ML Development Services",
    category: "AI/ML Services",
    heroDescription:
      "Custom machine learning for forecasting, classification, vision, and NLP — with production MLOps, drift detection, and explainability for regulated decisions.",
    intro:
      "ML development spans data labeling strategy through production deployment with feature engineering, training, and monitoring for millions of daily predictions. Custom models outperform generic cloud APIs when your unique data provides competitive advantage, and drift detection triggers retraining before accuracy degrades in production. Human-readable explainability supports regulated and high-stakes decisions your stakeholders can defend.",
    blackBand: {
      title: "Production ML, Not Notebook Demos",
      body:
        "Containerized training pipelines replace one-off Jupyter experiments, and model registries track versions, metrics, and deployment history across your data science team. A/B tests in production validate new models before full rollout, and automated validation gates prevent bad models from reaching users.\n\nInfrastructure your data science team can operate without constant vendor help — production ML that survives beyond the consultant's last day on the project.",
    },
    splitBlue: {
      title: "Domain Models That Beat Generic APIs",
      body: [
        "Custom models trained on your proprietary data for superior accuracy.",
        "Lower inference costs when domain specificity reduces model complexity needs.",
        "Feature engineering capturing business logic generic APIs cannot access.",
        "Competitive advantage from models competitors cannot replicate with off-the-shelf tools.",
        "ROI justification through measurable accuracy gains on business-critical tasks.",
      ],
    },
    blueGradient: {
      left: {
        title: "MLOps and Retraining Schedules",
        body:
          "Drift detection monitors input distributions and prediction quality over time, with automated retraining triggered by configurable degradation thresholds. Validation gates ensure new models meet accuracy bars before deployment, and rollback procedures activate when production models underperform baselines.\n\nSustainable ML operations keep models current without manual heroics — retraining is scheduled discipline, not panic-driven fire drills after accuracy collapses.",
      },
      right: {
        title: "Explainability Where Stakeholders Need It",
        body:
          "SHAP values and feature importance provide model decision transparency, with human-readable reports suitable for compliance and audit review. Per-prediction explanations appear where regulations require justification for individual decisions.\n\nStakeholder dashboards translate model behavior into business language, building trust for high-stakes financial and healthcare decisions that black-box predictions cannot support.",
      },
    },
  },
  {
    slug: "ml-consulting-services",
    title: "ML Consulting Services",
    category: "AI/ML Services",
    heroDescription:
      "ML readiness assessments, model audits, and data science roadmaps — with platform selection advice, pilot design, and knowledge transfer to your internal team.",
    intro:
      "ML consulting reviews data estates, model portfolios, and team skills to deliver architecture, tooling, and hiring recommendations that close gaps without overbuilding. Acquisition due diligence evaluates ML technical debt and model quality before deals close, and org structure advice scales data science teams aligned with compliance needs. Documentation and training enable self-sufficiency after consulting ends.",
    blackBand: {
      title: "ML Audits and Technical Due Diligence",
      body: [
        "Third-party model evaluation before acquisitions or major partnerships.",
        "Internal pipeline review identifying technical debt and reliability risks.",
        "Data quality assessment revealing gaps that undermine model performance.",
        "Benchmarking existing models against achievable baselines and alternatives.",
        "Risk-informed investment decisions backed by thorough technical analysis.",
      ],
    },
    splitBlue: {
      title: "Platform Selection and Team Design",
      body:
        "Snowflake vs Databricks recommendations are based on scale and compliance needs, with feature store and experiment tracking tooling aligned to team maturity. Org structure advice covers centralized vs embedded data science models, and hiring plans identify skill gaps and priority roles to fill.\n\nTechnology choices grow with your organization — not against it — avoiding platforms that require a full rewrite when user count doubles.",
    },
    blueGradient: {
      left: {
        title: "Pilot Design with Clear Success Metrics",
        body:
          "Hypotheses and baselines are defined before experiments consume budget, with kill criteria preventing sunk-cost continuation of failing initiatives. Success metrics tie to business outcomes — not just model accuracy scores that look impressive in a notebook.\n\nTime-boxed pilots produce go/no-go decisions within weeks, turning data science spend into decisions leadership can act on.",
      },
      right: {
        title: "Knowledge Transfer to Your Team",
        body:
          "Workshops cover architecture decisions, tooling, and best practices with documentation enabling internal data scientists to maintain the stack independently. Pairing sessions during critical implementation phases accelerate learning.\n\nRunbooks for common operational and troubleshooting scenarios ensure self-sufficient teams continue progress after the consulting engagement ends.",
      },
    },
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Organic and paid social programs growing audience, engagement, and pipeline — with platform-native content, community management, and attribution leaders can trust.",
    intro:
      "Social media marketing aligns with brand voice and funnel stage objectives rather than one-size-fits-all cross-posting that underperforms on every channel. Content matches platform culture on LinkedIn, Instagram, X, and TikTok, and community and influencer programs extend reach with message control. Paid amplification ties ad spend to leads and revenue, and reporting gives leaders actionable insights for next-month planning.",
    blackBand: {
      title: "Content That Matches Platform Culture",
      body:
        "Native formats, hooks, and cadences are optimized per channel — LinkedIn thought leadership is distinct from TikTok entertainment and Instagram visuals. Content pillars align with brand positioning and audience interests, and editorial calendars balance promotional, educational, and engagement content.\n\nSocial presence feels authentic to each platform's user expectations — not a single post blasted everywhere with diminishing returns.",
    },
    splitBlue: {
      title: "Paid Social with Clear Attribution",
      body: [
        "UTM discipline and pixel setup connecting ad spend to downstream conversions.",
        "Creative testing identifying winning hooks, offers, and audience segments.",
        "Budget allocation across platforms based on cost-per-lead performance data.",
        "Retargeting sequences nurturing warm audiences through the funnel.",
        "Transparent attribution so marketing leaders trust social ROI numbers.",
      ],
    },
    blueGradient: {
      left: {
        title: "Community and Influencer Programs",
        body:
          "Ambassador workflows activate loyal customers as brand advocates, and UGC campaigns generate authentic content at scale with approval guardrails. Influencer partnerships are vetted for audience fit and brand alignment before contracts are signed.\n\nCommunity management fosters engagement beyond broadcast posting — extended reach through relationships, not just paid media spend that stops when the budget pauses.",
      },
      right: {
        title: "Monthly Reporting Leaders Understand",
        body:
          "Reach, engagement, cost-per-lead, and pipeline influence appear in every report with platform-level breakdowns showing where budget delivers best returns. Content performance rankings guide next month's creative priorities.\n\nActionable recommendations replace data dumps requiring analyst interpretation — leaders see what worked, what didn't, and what to do next.",
      },
    },
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Google, Meta, and LinkedIn campaigns optimized for CPA, ROAS, and qualified leads — with full-funnel architecture, landing page alignment, and LTV-driven bid strategies.",
    intro:
      "Performance marketing runs with rigorous tracking and weekly optimization cycles across search, display, and retargeting campaigns focused on measurable outcomes. Landing page alignment ensures ad clicks convert instead of bouncing, and systematic ad variant rotation identifies top-performing hooks and offers. Long-term customer value informs bid strategies and audience targeting beyond cheap clicks.",
    blackBand: {
      title: "Full-Funnel Campaign Architecture",
      body: [
        "Awareness, consideration, and conversion campaigns structured by intent stage.",
        "Budgets and creatives matched to where prospects are in the buying journey.",
        "Audience segmentation preventing budget waste on unqualified traffic.",
        "Cross-channel coordination so messaging stays consistent across touchpoints.",
        "Funnel architecture designed for measurable progression toward revenue goals.",
      ],
    },
    splitBlue: {
      title: "Landing Pages Built for Quality Score",
      body:
        "Message match between ad copy and landing page headlines reduces bounce rates, and page speed optimization improves Quality Score and conversion rates simultaneously. Form friction testing balances lead volume against lead quality.\n\nMobile-first layouts address the majority of paid traffic arriving on phones — landing experiences that convert clicks into qualified pipeline opportunities, not just traffic reports that look healthy.",
    },
    blueGradient: {
      left: {
        title: "Creative Testing at Scale",
        body:
          "Ad variants, hooks, and offers rotate systematically for statistical learning, with winning creatives identified before scaling budgets into diminishing returns. Creative fatigue monitoring triggers refresh cycles proactively.\n\nFormat testing across static, video, and carousel ad types keeps campaigns fresh and performant — continuous creative iteration, not set-and-forget ad sets that decay over time.",
      },
      right: {
        title: "Cohort and LTV Analysis",
        body:
          "Customer lifetime value informs bid caps and audience prioritization, and cohort retention reveals which acquisition channels bring loyal customers — not just one-time purchasers. Optimization targets profitable customers rather than lowest cost per click.\n\nPayback period modeling gives leadership budget planning confidence, replacing short-term vanity acquisition numbers with sustainable growth metrics.",
      },
    },
  },
  {
    slug: "graphic-editing",
    title: "Graphic Editing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Photo retouching, compositing, and asset prep for campaigns and ecommerce — pixel-perfect edits with brand guardrails and fast turnaround SLAs for launch weeks.",
    intro:
      "Graphic editing delivers production-ready visuals under tight deadlines with background removal, color correction, batch resizing, and brand-consistent touch-ups. Marketing and product teams are supported through centralized request queues with version control ensuring the right asset reaches the right channel every time. Repeatable presets enable consistent quality across thousands of catalog images without proportional cost increases.",
    blackBand: {
      title: "Pixel-Perfect Edits for Every Channel",
      body:
        "Specs for social, display, packaging, and print are handled in one request queue with resolution, color space, and bleed requirements met without back-and-forth revisions. Version control tracks edits across campaign iterations and channel variants.\n\nQuality checks before assets leave the studio prevent costly reprints — channel-ready files delivered the first time, on deadline, every time.",
    },
    splitBlue: {
      title: "High-Volume Catalog Workflows",
      body: [
        "Ecommerce teams get consistent product shots across thousands of SKUs.",
        "Repeatable presets maintaining visual uniformity across entire product lines.",
        "Batch processing accelerating seasonal catalog updates and new product launches.",
        "Shadow, background, and color standardization across heterogeneous source photography.",
        "Scalable workflows that grow with catalog size without proportional cost increases.",
      ],
    },
    blueGradient: {
      left: {
        title: "Brand Guardrails on Every File",
        body:
          "Color profiles and brand palette compliance are verified before delivery, with safe zones and logo usage rules enforced on every exported asset. Typography and visual hierarchy are checked against brand standards.\n\nConsistent brand presentation across agencies, vendors, and internal teams — guardrails preventing off-brand assets from reaching public channels and damaging credibility.",
      },
      right: {
        title: "Fast Turnaround SLAs",
        body:
          "Rush tiers and dedicated editors support launch weeks and seasonal peaks with predictable delivery windows enabling marketing teams to plan campaigns confidently. Priority queuing handles time-sensitive campaign and event assets.\n\nWeekend and after-hours coverage is available for global launch coordination — speed without sacrificing the quality your brand reputation demands.",
      },
    },
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Short-form, explainers, ads, and event recap edits with motion graphics — optimized for retention, accessible captions, and delivery in every aspect ratio you need.",
    intro:
      "Video editing turns raw footage into polished stories for ads and social with captions, brand intros, and platform-specific aspect ratios included standard. Pacing is tuned for mobile sound-off viewing and short attention spans, and reusable After Effects or Premiere setups accelerate repeatable content series. Sound design and mixing elevate production value without requiring separate vendors.",
    blackBand: {
      title: "Edits Optimized for Retention",
      body: [
        "Hooks in the first three seconds capturing attention before scroll-away.",
        "Pacing calibrated for mobile sound-off viewing habits.",
        "CTAs placed where drop-off data indicates viewers are most engaged.",
        "Pattern interrupts and visual variety maintaining interest through longer formats.",
        "Retention-focused editing backed by platform analytics—not guesswork.",
      ],
    },
    splitBlue: {
      title: "Motion Graphics and Subtitles",
      body:
        "Lower thirds, kinetic type, and branded overlays are integrated in every edit with accessible captions meeting WCAG guidelines for inclusive content. Motion graphics reinforce key messages without distracting from the core narrative.\n\nConsistent brand animation language spans all video deliverables — single-vendor delivery eliminating handoffs between editors and motion designers that slow turnaround.",
    },
    blueGradient: {
      left: {
        title: "Template Libraries for Repeatable Series",
        body:
          "Podcast clips, customer stories, and product updates ship faster with reusable intro, outro, and lower-third templates maintaining brand consistency. Batch editing workflows support high-volume social content production.\n\nTemplate updates propagate across series without re-editing every episode — content velocity matching the pace modern social algorithms demand.",
      },
      right: {
        title: "Delivery in Every Format You Need",
        body:
          "Vertical, square, and landscape exports come from a single master timeline, with ProRes and high-bitrate masters for broadcast and large-screen presentations. Compressed web-ready files are optimized per platform upload requirements.\n\nThumbnail frames and preview GIFs are included for distribution teams — every format needed for multi-channel launch delivered together, on deadline.",
      },
    },
  },
  {
    slug: "app-prototyping",
    title: "App Prototyping",
    category: "App Designing",
    heroDescription:
      "Clickable prototypes and design sprints validating ideas before full development — with user testing, handoff-ready specs, and investor-ready interactive demos.",
    intro:
      "App prototyping produces realistic interactions without committing to a full build, letting stakeholders and investors experience product flows that feel shipped — not sketched. User testing synthesizes findings into clear go/no-go recommendations, and components, edge cases, and specs are documented for development handoff. Interactive demos are polished enough for pitch meetings and fundraising conversations.",
    blackBand: {
      title: "Prototypes That Answer Real Questions",
      body:
        "Test tasks target riskiest assumptions in onboarding, pricing, and core loops — hypothesis-driven prototyping prevents months of building the wrong product. User research findings are synthesized into actionable go/no-go recommendations with quantitative and qualitative signals combined for confident product decisions.\n\nPrototypes are learning tools, not just visual demonstrations for stakeholders who need to see before they approve budget.",
    },
    splitBlue: {
      title: "Design Sprints with Cross-Functional Teams",
      body: [
        "Product, design, and engineering aligned in a focused one-week sprint.",
        "Tangible artifacts replacing endless workshop cycles without deliverables.",
        "Rapid ideation, voting, and prototyping within structured sprint methodology.",
        "Decision-making accelerated through time-boxed collaboration.",
        "Cross-functional buy-in built during the sprint—not negotiated after handoff.",
      ],
    },
    blueGradient: {
      left: {
        title: "Handoff Ready for Development",
        body:
          "Components, spacing, and interaction specs are documented for engineering teams with edge cases and error states designed — not left for developers to invent under deadline pressure. Design tokens and naming conventions match developer expectations.\n\nAccurate estimates are possible because ambiguity is resolved before build starts, reducing rework and timeline slips during design-to-development transition.",
      },
      right: {
        title: "Interactive Demos for Fundraising",
        body:
          "Polished flows for pitch meetings feel like shipped product, demonstrating vision beyond slide deck descriptions. Key user journeys are highlighted for maximum impact in limited meeting time.\n\nBranded, responsive demos work on laptops and phones in the boardroom — fundraising conversations elevated by tangible product experiences investors remember after the meeting ends.",
      },
    },
  },
  {
    slug: "design-audit",
    title: "Design Audit",
    category: "App Designing",
    heroDescription:
      "Heuristic reviews and UX audits with prioritized fixes for conversion — evidence-backed findings, competitive analysis, and developer-ready accessibility remediation.",
    intro:
      "Design audits deliver ranked backlogs your team can execute immediately, replacing vague feedback with specific, actionable recommendations. Accessibility findings are mapped to components and developer-ready tickets, and conversion friction is identified across key funnels and user journeys. Strategic IA recommendations are distinguished from sprint-level quick fixes so product teams sequence improvements realistically.",
    blackBand: {
      title: "Expert Review with Evidence",
      body: [
        "Screenshots, session replay notes, and severity scores—not vague aesthetic opinions.",
        "Heuristic evaluation covering learnability, efficiency, and error prevention.",
        "Findings prioritized by business impact and implementation effort.",
        "Reproducible issues documented so fixes can be verified after deployment.",
        "Professional audit reports stakeholders trust for budget and roadmap decisions.",
      ],
    },
    splitBlue: {
      title: "Competitive and Benchmark Analysis",
      body:
        "Key flows are compared against category leaders and direct competitors, with differentiation opportunities identified where your UX lags or leads. Industry patterns are documented so improvements feel contemporary — not dated relative to what users expect elsewhere.\n\nBest-in-class examples are referenced for inspiration on specific interaction patterns, grounding recommendations in market reality rather than abstract design theory.",
    },
    blueGradient: {
      left: {
        title: "Accessibility Findings Developers Can Fix",
        body:
          "Contrast ratios, focus order, and ARIA issues are mapped to specific components with developer-ready tickets including WCAG criterion references and fix suggestions. Keyboard navigation gaps are identified with reproduction steps.\n\nScreen reader compatibility issues are prioritized by user impact — accessibility remediation plans your engineering team can sprint against, not audit reports that sit unread in a shared drive.",
      },
      right: {
        title: "Quick Wins vs Strategic Redesigns",
        body:
          "Sprint-level fixes are separated from structural information architecture changes, with effort estimates helping product teams sequence improvements realistically. High-impact, low-effort wins are identified for immediate conversion gains.\n\nStrategic redesigns are scoped for quarterly planning — not hidden in audit noise — delivering an actionable roadmap balancing momentum with meaningful UX transformation.",
      },
    },
  },
  {
    slug: "illustrations",
    title: "Illustrations",
    category: "App Designing",
    heroDescription:
      "Custom illustration systems for products, marketing, and empty states — cohesive visual languages with inclusive representation and animation-ready layers.",
    intro:
      "Illustration services make your brand memorable across app, web, and print with style guides locking visual direction before scaling production. Source files are organized for consistent reuse without breaking brand cohesion, and characters and scenes reflect your audience thoughtfully and inclusively. Lottie-ready layer structure supports movement when planned for later campaigns.",
    blackBand: {
      title: "Illustration Styles Matched to Your Brand",
      body:
        "Flat, isometric, 3D, or hand-drawn directions are explored before production begins, with style guides ensuring consistency across all illustration touchpoints. Visual language aligns with brand personality — not generic stock aesthetics competitors share.\n\nRapid concept rounds accelerate alignment before committing to full libraries, delivering a distinctive illustration identity competitors cannot easily replicate.",
    },
    splitBlue: {
      title: "Scalable Asset Libraries",
      body: [
        "Source files organized for marketing, product, and development team reuse.",
        "Naming conventions and folder structures developers and designers expect.",
        "Modular components enabling new scenes without redrawing from scratch.",
        "Version control preventing teams from using outdated illustration assets.",
        "Asset libraries that scale with product growth—not one-off deliverables.",
      ],
    },
    blueGradient: {
      left: {
        title: "Inclusive and Diverse Representation",
        body:
          "Characters and scenes reflect your audience with thoughtful intention, with diversity considered in concept phase — not patched in during final review. Cultural sensitivity is reviewed for global product and marketing deployments.\n\nRepresentation builds connection rather than checking compliance boxes, strengthening brand trust across diverse user bases who see themselves in your visual language.",
      },
      right: {
        title: "Animation-Ready Layers",
        body:
          "Illustrations are structured for Lottie or motion campaigns when movement is needed later, with separated layers enabling animators to work without redrawing assets. Consistent style is maintained between static and animated deliverables.\n\nFuture-proofed assets reduce cost when video or micro-animation is added — illustration investment that pays dividends across static and motion channels.",
      },
    },
  },
  {
    slug: "brand-guideline",
    title: "Brand Guideline",
    category: "App Designing",
    heroDescription:
      "Brand books covering logo, color, typography, voice, and application examples — guidelines people actually reference, not 80-page PDFs nobody opens.",
    intro:
      "Brand guideline services document identity across digital, print, and social with clear do/don't examples, downloadable assets, and Figma libraries. Tone ladders, boilerplate copy, and naming rules ensure writing sounds like one company, and internal and external teams align on how the brand shows up everywhere. Versioned updates support evolution without losing core identity coherence.",
    blackBand: {
      title: "Guidelines People Actually Reference",
      body: [
        "Clear do/don't examples replacing abstract brand theory with visual proof.",
        "Downloadable assets and Figma libraries integrated into daily workflows.",
        "Searchable, scannable format—not dense PDFs buried in shared drives.",
        "Practical rules designers, marketers, and partners apply without asking permission.",
        "Brand consistency driven by usable documentation—not enforcement meetings.",
      ],
    },
    splitBlue: {
      title: "Voice and Messaging Frameworks",
      body:
        "Tone ladders define how voice shifts across contexts and audiences, with boilerplate copy and naming rules ensuring one-company communication. Messaging pillars align marketing, sales, and product language so every channel sounds coherent.\n\nBefore/after examples show voice principles applied to real copy — writing consistency that strengthens brand recognition across every touchpoint.",
    },
    blueGradient: {
      left: {
        title: "Partner and Vendor Kits",
        body:
          "Logo packs, co-brand lockups, and usage rules for affiliates and agencies include approval workflows preventing off-brand partner materials from publishing. Templates let partners customize within defined brand guardrails.\n\nOnboarding materials get external teams productive quickly — controlled brand extension through structured partner enablement rather than ad-hoc logo usage.",
      },
      right: {
        title: "Living Documents That Evolve",
        body:
          "Versioned updates accommodate sub-brand launches and market expansion, with change logs documenting what shifted and why for internal alignment. Modular structure allows section updates without full guideline rewrites.\n\nGovernance process covers proposing and approving brand evolution — brand systems that grow with the company, not frozen at launch date.",
      },
    },
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "App Designing",
    heroDescription:
      "Distinctive logos and mark systems working from favicon to billboard — with trademark-aware process, motion marks, and complete source files for every team.",
    intro:
      "Logo design explores strategic directions before refining chosen concepts into primary, secondary, monochrome, and responsive variants for all applications. Real-world testing on app icons, embroidery, dark backgrounds, and small sizes ensures marks perform beyond presentation mockups. Preliminary trademark clearance checks reduce rename risk, and complete handoff includes SVG, PNG, PDF, and Figma components.",
    blackBand: {
      title: "Logos Built for Real-World Use",
      body:
        "Clear space, minimum sizes, and misuse examples are documented for every variant, tested on app icons, embroidery, merchandise, and dark-mode interfaces. Responsive logo systems adapt gracefully across size constraints where detail must simplify without losing recognition.\n\nPrint and digital specifications ensure quality at every scale — logos that perform in the real world, not just in hero images on a pitch deck.",
    },
    splitBlue: {
      title: "Trademark-Aware Process",
      body: [
        "Preliminary clearance checks reducing rename risk after public launch.",
        "Distinctiveness reviews ensuring marks stand apart in crowded categories.",
        "Search across trademark databases in key markets before finalization.",
        "Legal collaboration support when deeper clearance is required.",
        "Confident brand launches without costly intellectual property surprises.",
      ],
    },
    blueGradient: {
      left: {
        title: "Motion and Social Avatars Included",
        body:
          "Animated marks for video intros, app loading, and social presence include profile crops and favicon variants optimized for every platform. Cohesive launch-day presence spans digital touchpoints from day one.\n\nMotion guidelines ensure animations feel on-brand — not generic — completing the logo system from static identity through dynamic brand moments.",
      },
      right: {
        title: "Source Files for Every Team",
        body:
          "SVG, PNG, PDF, and Figma components are delivered with consistent naming and developer-ready assets matching the conventions engineering teams expect. Print-ready files include correct color profiles for vendor handoff.\n\nOrganized file structure prevents teams from using wrong variants — a complete logo kit enabling immediate deployment across all channels.",
      },
    },
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    category: "App Designing",
    heroDescription:
      "Component libraries, tokens, and documentation for consistent product UI at scale — with Figma-code sync, adoption plans, and accessibility baked into primitives.",
    intro:
      "Design systems unify buttons, forms, tables, and patterns in Figma and code with Storybook documentation and contribution models scaling design and engineering together. Color, spacing, and typography tokens flow from design tools to production, and legacy screen migration is supported incrementally — not requiring a big-bang rewrite. Component-level accessibility ensures consistency without per-screen audits.",
    blackBand: {
      title: "Tokens and Components That Sync",
      body: [
        "Color, spacing, and typography tokens flowing from Figma to React or your stack.",
        "Automated checks detecting drift between design files and production code.",
        "Single source of truth preventing designers and developers from diverging.",
        "Component APIs documented for consistent implementation across teams.",
        "Design-development parity maintained as the system evolves over time.",
      ],
    },
    splitBlue: {
      title: "Adoption Plans, Not Drop-and-Run Libraries",
      body:
        "Migration guides help legacy screens move to the system incrementally, with office hours supporting teams during initial adoption phases. Lint rules enforce system usage in code reviews automatically.\n\nChampions programs identify power users who accelerate org-wide adoption — sustainable adoption, not a library that sits unused in a shared folder while teams keep building one-off components.",
    },
    blueGradient: {
      left: {
        title: "Accessibility Baked into Primitives",
        body:
          "Focus states, contrast ratios, and keyboard patterns are defined at component level with screen reader behavior consistent across every instance. Accessibility fixes propagate system-wide — not per-page patchwork.\n\nWCAG compliance built into foundations reduces audit remediation scope, delivering inclusive product UI by default rather than as a retrofit project six months after launch.",
      },
      right: {
        title: "Governance for Contributions",
        body:
          "RFC process governs proposing new components or token changes, with review cadence preventing duplicate or conflicting pattern proliferation. Versioning strategy communicates breaking changes to consuming teams clearly.\n\nContribution guidelines enable scale without sacrificing quality — living systems that grow organized, not chaotic, as product complexity increases.",
      },
    },
  },
  {
    slug: "pitch-deck",
    title: "Pitch Deck",
    category: "App Designing",
    heroDescription:
      "Investor and sales decks with narrative, data viz, and design that closes meetings — structured for how investors read, with editable templates for future rounds.",
    intro:
      "Pitch deck services shape narrative, tighten copy, and design investor-ready slides that survive forwarding — clear at a glance on laptop or projector. Each slide earns the next with evidence rather than adjectives, and charts are simplified with sources cited for diligence-ready presentations. Master files enable updates between fundraising conversations without starting from scratch.",
    blackBand: {
      title: "Decks Structured for How Investors Read",
      body:
        "Problem, solution, traction, market, team, and ask follow the sequence investors expect, with each slide earning the next through evidence — not unsubstantiated claims. Narrative flow guides readers toward the investment thesis naturally.\n\nRedundant slides are eliminated so decks respect busy reviewers' time — fundraising conversations start ahead because structure matches what investors look for first.",
    },
    splitBlue: {
      title: "Data Visualization That Supports the Thesis",
      body: [
        "Charts simplified for instant comprehension in forwarded email reviews.",
        "Sources cited so diligence conversations start with trust—not skepticism.",
        "Comparisons framed honestly avoiding misleading axis or scale choices.",
        "Key metrics highlighted while supporting context remains accessible.",
        "Data stories reinforcing the investment case with visual clarity.",
      ],
    },
    blueGradient: {
      left: {
        title: "Speaker Notes and Appendix Slides",
        body:
          "Deep-dive detail is ready for Q&A without cluttering the main narrative flow, with speaker notes coaching founders on delivery pacing and emphasis. Appendix is organized for quick reference during live investor meetings.\n\nTechnical and financial detail is available on demand — not forced upfront — so presenters handle questions confidently with prepared supporting material.",
      },
      right: {
        title: "Editable Templates for Future Rounds",
        body:
          "Master files let your team update metrics and milestones as they change, with modular slide structure enabling quick refreshes between fundraising cycles. Brand-consistent templates are reusable for Series A, B, and beyond.\n\nNon-designer team members can update numbers without breaking layout — a long-term deck asset, not a one-time deliverable that goes stale after the first meeting.",
      },
    },
  },
  {
    slug: "presentations",
    title: "Presentations",
    category: "App Designing",
    heroDescription:
      "Keynotes, sales decks, and internal templates on-brand and ready to present — with modular enablement libraries and training on template maintenance.",
    intro:
      "Presentation design transforms rough outlines into polished, on-brand slide decks with consistent typography, imagery, and layouts that free speakers to focus on delivery. Animation is used sparingly for emphasis — not distraction — and sales reps assemble vertical-specific pitches without breaking brand rules. Templates your marketing team maintains with confidence after handoff reduce dependency on external designers for routine updates.",
    blackBand: {
      title: "Presentations for Conferences and Boardrooms",
      body:
        "Aspect ratios and typography are optimized for projection and large-screen visibility, with legible type sizes ensuring readability from the back of the room. Animation is used sparingly for emphasis — not distracting from speaker delivery.\n\nVisual hierarchy guides audience attention to key messages per slide, delivering professional presentations that match the caliber of your organization's reputation.",
    },
    splitBlue: {
      title: "Sales Enablement Deck Libraries",
      body: [
        "Modular slides reps assemble for vertical-specific pitches independently.",
        "Brand rules enforced through template structure—not post-hoc marketing review.",
        "Case studies, product overviews, and pricing sections mixable per opportunity.",
        "Consistent messaging across distributed sales teams and regions.",
        "Faster deal cycles through self-serve deck customization within guardrails.",
      ],
    },
    blueGradient: {
      left: {
        title: "PowerPoint and Google Slides Deliverables",
        body:
          "Files arrive in formats your team already uses — no proprietary lock-in — with editable masters enabling non-designers to update content safely. Cross-platform compatibility serves teams split between Microsoft and Google workspaces.\n\nFont embedding and asset packaging prevent broken layouts on share, delivering immediate usability without conversion tools or compatibility workarounds.",
      },
      right: {
        title: "Training on Template Maintenance",
        body:
          "Short guides teach marketing to refresh stats and case studies independently, with best practices for adding slides without breaking brand consistency. Office hours during handoff cover questions about template structure.\n\nDocumentation reduces dependency on external designers for routine updates — self-sufficient teams keep presentations current between design engagements.",
      },
    },
  },
  {
    slug: "software-development",
    title: "Software Development",
    category: "Software Development",
    isCategoryPage: true,
    showOurProcess: true,
    heroDescription:
      "Full-cycle software development — custom web apps, mobile apps, desktop software, and blockchain solutions built for scale, security, and long-term growth.",
    intro:
      "From MVPs to enterprise platforms, our software development teams deliver end-to-end solutions across web, mobile, desktop, and emerging platforms. We combine product strategy, UI/UX design, and full-stack engineering under one roof so your product ships faster with fewer handoffs. Whether you need a customer-facing SaaS product, an internal operations tool, or a cross-platform mobile app, we architect for maintainability and integrate with your existing systems. Every engagement follows a proven discovery-to-launch process with transparent milestones and regular demos.",
    blackBand: {
      title: "Why Choose Our Software Development Services",
      body: [
        "Six-plus years building production software for startups, scale-ups, and enterprises.",
        "Full-stack squads cover design, engineering, QA, and deployment in one team.",
        "Scalable architecture that grows with your user base and feature roadmap.",
        "Seamless integration with CRM, ERP, payment gateways, and third-party APIs.",
        "Transparent delivery with sprint demos, shared documentation, and predictable timelines.",
      ],
    },
    splitBlue: {
      title: "Software Development Capabilities",
      body:
        "Our software development practice spans custom web applications, native and cross-platform mobile apps, desktop software for Windows and macOS, smartwatch experiences, marketing websites, no-code accelerators, and blockchain solutions.\n\nEach project starts with discovery to define scope and priorities, followed by iterative design and development cycles. We select the right tech stack for your requirements — React, Node.js, Flutter, Python, and more — rather than forcing a one-size-fits-all approach.",
    },
    blueGradient: {
      left: {
        title: "Who We Serve",
        body:
          "Startups validating product-market fit rely on us for rapid MVP delivery that balances speed with code quality. Growing SaaS companies need engineering partners who understand subscription models, multi-tenancy, and scaling challenges.\n\nEnterprises modernizing legacy systems benefit from our experience integrating new software with existing ERP, CRM, and data infrastructure. Teams with compliance requirements receive security-first architecture with audit trails and role-based access built in from day one.",
      },
      right: {
        title: "Engagement Models & Pricing",
        body:
          "MVP projects typically range from $5,000 to $50,000 USD depending on scope, integrations, and platform targets. Full-scale product development engagements generally fall between $50,000 and $200,000 USD based on complexity and timeline.\n\nHourly consulting is available at $30 USD per hour for flexible scope or ongoing enhancement work. Every quote is based on documented features and clear milestones — no surprise costs mid-project.",
      },
    },
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    category: "ERP Solutions",
    isCategoryPage: true,
    showOurProcess: true,
    heroDescription:
      "Odoo ERP implementation, custom ERP development, and seamless migrations from Oracle, SAP, NetSuite, Dynamics 365, and ERPNext.",
    intro:
      "Streamline operations, automate workflows, and gain real-time visibility across finance, inventory, sales, and HR with ERP solutions tailored to your business. We specialize in Odoo ERP — the world's fastest-growing open-source platform — alongside custom ERP builds and migrations from legacy systems. Our consultants map your processes, configure modules, and train your team for self-sufficiency. From manufacturing and distribution to services and retail, we deliver ERP implementations that reduce manual work and improve decision-making.",
    blackBand: {
      title: "Why Choose Our ERP Solutions",
      body: [
        "Certified Odoo expertise with implementations across manufacturing, retail, and services.",
        "Proven migration playbooks for Oracle, SAP, NetSuite, Dynamics 365, and ERPNext.",
        "Custom module development when off-the-shelf features don't fit your workflows.",
        "End-to-end delivery: discovery, configuration, data migration, training, and support.",
        "Transparent project scoping with phased rollouts that minimize business disruption.",
      ],
    },
    splitBlue: {
      title: "ERP Services We Offer",
      body:
        "Our ERP practice covers Odoo implementation and customization, greenfield custom ERP development, and structured migrations from Oracle ERP, SAP, Microsoft Dynamics 365, NetSuite, and ERPNext.\n\nWe configure finance, inventory, CRM, manufacturing, HR, and project management modules to match your operations. Data migration, user training, and post-go-live support ensure your team adopts the new system confidently.",
    },
    blueGradient: {
      left: {
        title: "Industries We Serve",
        body:
          "Manufacturing and distribution companies use our ERP solutions for inventory tracking, production planning, and supply chain visibility. Retail and e-commerce teams benefit from unified order management, POS integration, and multi-channel sales.\n\nProfessional services firms streamline project billing, resource allocation, and client management. Growing businesses replacing spreadsheets and disconnected tools gain a single source of truth for operations.",
      },
      right: {
        title: "Implementation Approach",
        body:
          "Every ERP engagement begins with process mapping and gap analysis to define the right module configuration and customization scope. Phased rollouts let critical departments go live first while we refine workflows based on real usage.\n\nTraining and documentation empower your team to manage day-to-day operations independently, with our support available for enhancements, upgrades, and new module rollouts as your business evolves.",
      },
    },
  },
  {
    slug: "ai-ml-services",
    title: "AI/ML Services",
    category: "AI/ML Services",
    isCategoryPage: true,
    showOurProcess: true,
    heroDescription:
      "Agentic AI, generative AI, RAG systems, AI chatbots, automation, and machine learning solutions that turn data into intelligent products.",
    intro:
      "Harness the power of artificial intelligence and machine learning to automate workflows, enhance customer experiences, and unlock insights from your data. Our AI/ML practice covers agentic AI systems, generative AI applications, retrieval-augmented generation (RAG), conversational chatbots, AI-powered apps, and end-to-end ML model development. We help you identify high-impact use cases, build production-ready AI features, and integrate them into your existing products and operations. From strategy and prototyping to deployment and monitoring, we deliver AI that works reliably in the real world.",
    blackBand: {
      title: "Why Choose Our AI/ML Services",
      body: [
        "Production-focused AI delivery — not just prototypes and proof-of-concepts.",
        "Expertise across LLMs, RAG, agentic workflows, computer vision, and classical ML.",
        "Secure, compliant architectures with data privacy and access controls built in.",
        "Integration with your existing apps, APIs, databases, and cloud infrastructure.",
        "Iterative approach with measurable KPIs so you see ROI from AI investments.",
      ],
    },
    splitBlue: {
      title: "AI/ML Capabilities",
      body:
        "We build agentic AI systems that autonomously complete multi-step tasks, generative AI applications for content and code creation, and RAG pipelines that ground LLM responses in your proprietary data.\n\nOur chatbot and conversational AI services cover customer support, internal knowledge assistants, and sales enablement. ML development includes predictive models, recommendation engines, and anomaly detection tailored to your domain.",
    },
    blueGradient: {
      left: {
        title: "Use Cases We Deliver",
        body:
          "Customer support teams deploy AI chatbots that resolve common queries and escalate complex issues intelligently. Operations teams automate document processing, data extraction, and workflow routing with AI agents.\n\nProduct teams embed generative AI features — smart search, content generation, and personalized recommendations — directly into their applications. Data teams unlock predictive analytics and forecasting models trained on their business data.",
      },
      right: {
        title: "From Strategy to Production",
        body:
          "We start with an AI readiness assessment to identify high-value use cases and data requirements before writing code. Rapid prototyping validates feasibility and user experience before full development investment.\n\nProduction deployment includes monitoring, fallback strategies, and cost optimization so your AI features remain reliable and affordable at scale. Ongoing support covers model updates, prompt refinement, and feature expansion.",
      },
    },
  },
  {
    slug: "kick-off-marketing",
    title: "Kick-Off Marketing",
    category: "Kick-Off Marketing",
    isCategoryPage: true,
    showOurProcess: true,
    heroDescription:
      "Social media marketing, performance marketing, graphic editing, and video editing to launch your brand and drive measurable growth.",
    intro:
      "Get your brand in front of the right audience with marketing services designed for startups and growing businesses ready to make an impact. Our kick-off marketing practice covers social media strategy and management, performance marketing across Google and Meta, professional graphic editing, and polished video content. We help you define your brand voice, create scroll-stopping visuals, and run campaigns that convert. Whether you're launching a new product or scaling an existing brand, we deliver marketing assets and campaigns that align with your business goals.",
    blackBand: {
      title: "Why Choose Our Marketing Services",
      body: [
        "Full-funnel marketing from brand visuals to paid acquisition campaigns.",
        "Data-driven performance marketing with clear ROI tracking and optimization.",
        "Professional graphic and video editing that elevates your brand presence.",
        "Platform expertise across Instagram, LinkedIn, Google Ads, Meta Ads, and more.",
        "Flexible engagement models for startups testing channels and brands scaling spend.",
      ],
    },
    splitBlue: {
      title: "Marketing Services We Offer",
      body:
        "Social media marketing includes content strategy, calendar planning, community management, and analytics reporting across your key platforms. Performance marketing covers campaign setup, audience targeting, A/B testing, and conversion optimization on Google and Meta.\n\nGraphic editing delivers on-brand visuals for ads, social posts, presentations, and web assets. Video editing produces polished reels, explainers, ads, and product demos that capture attention and drive action.",
    },
    blueGradient: {
      left: {
        title: "Who We Help",
        body:
          "Startups launching their first product need brand assets and initial campaigns that establish credibility without enterprise budgets. Growing D2C brands scale paid acquisition with optimized creatives and landing page alignment.\n\nB2B companies build thought leadership through LinkedIn content and targeted ad campaigns. App and SaaS teams drive installs and signups with performance marketing tuned to their funnel metrics.",
      },
      right: {
        title: "Our Approach",
        body:
          "Every marketing engagement starts with understanding your audience, positioning, and goals. We audit existing assets and channels, then build a focused plan that prioritizes quick wins and measurable outcomes.\n\nCreative production and campaign management run in parallel with weekly reporting so you see what's working and where to invest next. We iterate on creatives, copy, and targeting based on real performance data.",
      },
    },
  },
  {
    slug: "app-designing",
    title: "App Designing",
    category: "App Designing",
    isCategoryPage: true,
    showOurProcess: true,
    heroDescription:
      "App prototyping, design audits, illustrations, brand guidelines, logo design, design systems, pitch decks, and presentations.",
    intro:
      "Create products and brands that users love with design services spanning UX research, visual design, brand identity, and presentation design. Our app designing practice covers interactive prototypes, comprehensive design audits, custom illustrations, brand guidelines, logo design, scalable design systems, investor pitch decks, and boardroom-ready presentations. We combine user-centered thinking with visual craft so every screen, asset, and slide reinforces your brand and drives clarity. From early-stage startups to established companies refreshing their identity, we deliver design that converts and impresses.",
    blackBand: {
      title: "Why Choose Our Design Services",
      body: [
        "User-centered design process grounded in research, testing, and iteration.",
        "Full brand identity capabilities from logo to comprehensive guidelines.",
        "Scalable design systems that keep products consistent as teams grow.",
        "Investor-ready pitch decks and presentations that communicate with clarity.",
        "Collaborative handoff with developer-ready specs and asset packages.",
      ],
    },
    splitBlue: {
      title: "Design Services We Offer",
      body:
        "App prototyping transforms ideas into clickable flows that validate UX before development investment. Design audits identify usability issues, accessibility gaps, and visual inconsistencies in existing products.\n\nBrand services include logo design, illustration, and comprehensive brand guidelines. Design systems provide reusable components and documentation for consistent product development across teams.",
    },
    blueGradient: {
      left: {
        title: "Who We Design For",
        body:
          "Startups preparing for fundraising need pitch decks and brand identity that communicate vision with confidence. Product teams launching new apps rely on prototypes and design systems for developer handoff.\n\nEstablished companies refreshing their brand or auditing existing products benefit from structured design reviews and updated visual systems. Marketing teams need presentation templates and illustration assets that scale across campaigns.",
      },
      right: {
        title: "Our Design Process",
        body:
          "Discovery workshops align stakeholders on goals, users, and success criteria before any pixels are pushed. We explore concepts through wireframes and mood boards, then refine high-fidelity designs through collaborative feedback cycles.\n\nDeliverables include developer-ready specs, asset exports, and documentation so your team can build and maintain the design independently. Post-delivery support covers iteration based on user testing and launch feedback.",
      },
    },
  },
];


function buildServicesData(): Record<ServiceSlug, ServiceTemplateData> {
  const data = {} as Record<ServiceSlug, ServiceTemplateData>;

  for (const meta of SERVICE_META) {
    data[meta.slug] = toServiceTemplateData(meta);
  }

  for (const slug of SERVICE_SLUGS) {
    if (!data[slug]) {
      throw new Error(`Missing service data for slug: ${slug}`);
    }
  }

  return data;
}

export const SERVICES_DATA = buildServicesData();

/** Default landing content for `/services` — replace with API overview when ready. */
export const DEFAULT_SERVICE_DATA: ServiceTemplateData =
  SERVICES_DATA["custom-erp-development"];

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(slug);
}

export function getServiceBySlug(slug: string): ServiceTemplateData | undefined {
  if (!isServiceSlug(slug)) return undefined;
  return SERVICES_DATA[slug as ServiceSlug];
}

export function isCategorySlug(slug: string): slug is CategorySlug {
  return (CATEGORY_SLUGS as readonly string[]).includes(slug);
}

/** Navbar mega menu structure with slugs for detail routes. */
export const SERVICE_NAV_GROUPS = [
  {
    title: "Software Development",
    slug: "software-development" as const,
    items: [
      { label: "Custom Web App Development", slug: "custom-web-app-development" as const },
      { label: "Mobile App Development", slug: "mobile-app-development" as const },
      { label: "Desktop App Development", slug: "desktop-app-development" as const },
      { label: "Smart Watch App Development", slug: "smart-watch-app-development" as const },
      { label: "Marketing Website Development", slug: "marketing-website-development" as const },
      { label: "No Code Development", slug: "no-code-development" as const },
      { label: "Blockchain", slug: "blockchain" as const },
      { label: "NFTs", slug: "nfts" as const },
    ],
  },
  {
    title: "ERP Solutions",
    slug: "erp-solutions" as const,
    items: [
      { label: "Odoo ERP Solutions", slug: "odoo-erp-solutions" as const },
      { label: "Custom ERP Development", slug: "custom-erp-development" as const },
      { label: "Oracle ERP to Odoo Migration", slug: "oracle-erp-to-odoo-migration" as const },
      { label: "MS Dynamics 365 to Odoo", slug: "ms-dynamics-365-to-odoo" as const },
      { label: "SAP to Odoo Migration", slug: "sap-to-odoo-migration" as const },
      { label: "NetSuite ERP to Odoo", slug: "netsuite-erp-to-odoo" as const },
      { label: "ERPNext to Odoo Migration", slug: "erpnext-to-odoo-migration" as const },
    ],
  },
  {
    title: "AI/ML Services",
    slug: "ai-ml-services" as const,
    items: [
      { label: "Agentic AI Services", slug: "agentic-ai-services" as const },
      { label: "Generative AI Services", slug: "generative-ai-services" as const },
      { label: "RAG Development Services", slug: "rag-development-services" as const },
      { label: "AI Chatbot Development", slug: "ai-chatbot-development" as const },
      { label: "AI App Development", slug: "ai-app-development" as const },
      { label: "AI Automation Services", slug: "ai-automation-services" as const },
      { label: "AI Consulting", slug: "ai-consulting" as const },
      { label: "AI Integration Services", slug: "ai-integration-services" as const },
      { label: "ML Development Services", slug: "ml-development-services" as const },
      { label: "ML Consulting Services", slug: "ml-consulting-services" as const },
    ],
  },
  {
    title: "Kick-Off Marketing",
    slug: "kick-off-marketing" as const,
    items: [
      { label: "Social Media Marketing", slug: "social-media-marketing" as const },
      { label: "Performance Marketing", slug: "performance-marketing" as const },
      { label: "Graphic Editing", slug: "graphic-editing" as const },
      { label: "Video Editing", slug: "video-editing" as const },
    ],
  },
  {
    title: "App Designing",
    slug: "app-designing" as const,
    items: [
      { label: "App Prototyping", slug: "app-prototyping" as const },
      { label: "Design Audit", slug: "design-audit" as const },
      { label: "Illustrations", slug: "illustrations" as const },
      { label: "Brand Guideline", slug: "brand-guideline" as const },
      { label: "Logo Design", slug: "logo-design" as const },
      { label: "Design systems", slug: "design-systems" as const },
      { label: "Pitch Deck", slug: "pitch-deck" as const },
      { label: "Presentations", slug: "presentations" as const },
    ],
  },
] as const;

export interface CategorySubServiceItem {
  label: string;
  slug: ServiceSlug;
  description: string;
  image: string;
}

export function getCategorySubServices(categorySlug: CategorySlug): CategorySubServiceItem[] {
  const group = SERVICE_NAV_GROUPS.find((g) => g.slug === categorySlug);
  if (!group) return [];

  return group.items.map((item) => {
    const service = SERVICES_DATA[item.slug];
    const fallbackImages = getServiceImages(item.slug);
    return {
      label: item.label,
      slug: item.slug,
      description: service?.hero.content.description ?? "",
      image: service?.hero.images[0] ?? fallbackImages.hero[0]!,
    };
  });
}
