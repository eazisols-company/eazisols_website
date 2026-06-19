import type { ServiceTemplateData } from "@/components/site/ServiceTemplate";

const HERO_IMAGE_SETS = [
  ["/images/web1.jpg", "/images/web2.jpg", "/images/web3.jpg"],
  ["/images/web4.jpg", "/images/web5.jpg", "/images/web6.jpg"],
  ["/images/web7.jpg", "/images/web1.jpg", "/images/web4.jpg"],
  ["/images/web2.jpg", "/images/web3.jpg", "/images/web5.jpg"],
  ["/images/web6.jpg", "/images/web7.jpg", "/images/web2.jpg"],
] as const;

const SECTION_IMAGES = [
  "/images/web5.jpg",
  "/images/web6.jpg",
  "/images/web7.jpg",
  "/images/web4.jpg",
  "/images/web3.jpg",
  "/images/web2.jpg",
  "/images/web1.jpg",
] as const;

const EXPECTATION_IMAGES = [
  "/images/img.png",
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img.png",
] as const;

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
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

interface ServiceMeta {
  slug: ServiceSlug;
  title: string;
  category: string;
  heroDescription: string;
  intro: string;
  blackBand: { title: string; body: string };
  splitBlue: { title: string; body: string };
  blueGradient: {
    left: { title: string; body: string };
    right: { title: string; body: string };
  };
}

function expectationsForService(meta: Pick<ServiceMeta, "slug" | "title" | "category">) {
  return [
    {
      label: "Strategy",
      body: `We align ${meta.title} with your ${meta.category.toLowerCase()} goals, users, and constraints so every deliverable maps to a measurable outcome.`,
      images: [EXPECTATION_IMAGES[0], EXPECTATION_IMAGES[1]],
    },
    {
      label: "Execution",
      body: `Our ${meta.title} team ships in short cycles — design, engineering, QA, and delivery coordinated end-to-end for ${meta.slug.replaceAll("-", " ")}.`,
      images: [EXPECTATION_IMAGES[2], EXPECTATION_IMAGES[3]],
    },
    {
      label: "Creativity",
      body: `We bring product thinking and craft to ${meta.title} so the experience feels sharp, useful, and unmistakably yours — not a generic template.`,
      images: [EXPECTATION_IMAGES[4], EXPECTATION_IMAGES[5]],
    },
  ] as const;
}

function toServiceTemplateData(meta: ServiceMeta): ServiceTemplateData {
  const slugIndex = SERVICE_SLUGS.indexOf(meta.slug);
  const imageSet = HERO_IMAGE_SETS[slugIndex % HERO_IMAGE_SETS.length]!;
  const sectionImage = SECTION_IMAGES[slugIndex % SECTION_IMAGES.length]!;
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
      images: [...imageSet],
    },
    breadcrumb: [meta.category, meta.title],
    intro: meta.intro,
    blackBand: {
      ...meta.blackBand,
      image: sectionImage,
    },
    splitBlue: {
      ...meta.splitBlue,
      image: SECTION_IMAGES[(slugIndex + 1) % SECTION_IMAGES.length],
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
      "Get a full custom modern web app from design concept and UI/UX to a fully functional backend.",
    intro:
      "Our custom web app development services turn product ideas into scalable, secure web platforms. We handle architecture, frontend, backend, integrations, and deployment so your team gets a production-ready application built for real users and long-term growth.",
    blackBand: {
      title: "End-to-End Web Application Development",
      body: "From discovery and wireframes to launch and post-release support, we build web applications that align with your business workflows. Our teams ship performant, maintainable code with clear documentation and predictable delivery cycles.",
    },
    splitBlue: {
      title: "Modern Tech Stacks for Scalable Web Products",
      body: "We choose frameworks and infrastructure that match your scale, security, and speed requirements — whether you need a customer portal, internal tool, or full SaaS platform.",
    },
    blueGradient: {
      left: {
        title: "Custom Features Built Around Your Users",
        body: "Role-based access, real-time dashboards, payment flows, and third-party integrations are designed around how your users actually work — not generic templates.",
      },
      right: {
        title: "Launch, Monitor, and Iterate with Confidence",
        body: "We deploy with CI/CD, monitoring, and analytics baked in so you can ship updates safely and measure adoption from day one.",
      },
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Software Development",
    heroDescription:
      "Native and cross-platform mobile apps designed, built, and shipped for iOS and Android.",
    intro:
      "Our mobile app development services cover the full product lifecycle — UX research, UI design, native or cross-platform engineering, QA, and store submission. We build apps that feel fast, polished, and aligned with your brand on every device.",
    blackBand: {
      title: "iOS and Android Apps That Users Keep Opening",
      body: "We design mobile experiences around real usage patterns: onboarding, offline support, push notifications, and performance on mid-range devices. Every release is tested across form factors before it hits the stores.",
    },
    splitBlue: {
      title: "Native, Cross-Platform, or Hybrid — Chosen for Your Roadmap",
      body: "Swift, Kotlin, React Native, or Flutter — we recommend the stack that balances time-to-market, maintenance cost, and the features your product needs today and next year.",
    },
    blueGradient: {
      left: {
        title: "Mobile UX That Converts and Retains",
        body: "Clear navigation, accessible touch targets, and thoughtful micro-interactions help users complete tasks quickly and come back without friction.",
      },
      right: {
        title: "Backend, APIs, and Analytics Connected",
        body: "Your app ships with secure auth, REST or GraphQL APIs, crash reporting, and product analytics so you can improve with real data.",
      },
    },
  },
  {
    slug: "desktop-app-development",
    title: "Desktop App Development",
    category: "Software Development",
    heroDescription:
      "Cross-platform desktop software for Windows, macOS, and Linux with offline-first capabilities.",
    intro:
      "Our desktop app development services deliver installable applications for teams that need power, offline access, and deep OS integration. We build Electron, Tauri, or native desktop clients that sync cleanly with your cloud services.",
    blackBand: {
      title: "Desktop Software for Power Users and Field Teams",
      body: "Whether you need a internal operations console or a customer-facing desktop client, we ship installers, auto-update flows, and enterprise deployment options that IT teams can trust.",
    },
    splitBlue: {
      title: "Offline-First When Connectivity Is Unreliable",
      body: "Local data caches, background sync, and conflict resolution keep work moving when networks drop — critical for manufacturing floors, retail, and remote sites.",
    },
    blueGradient: {
      left: {
        title: "OS Integration Done Right",
        body: "System tray, file associations, hardware peripherals, and secure credential storage are built in where your workflow needs them.",
      },
      right: {
        title: "Maintainable Codebases for Long Product Lifecycles",
        body: "Modular architecture and automated updates reduce the cost of supporting desktop software over years, not just the first launch.",
      },
    },
  },
  {
    slug: "smart-watch-app-development",
    title: "Smart Watch App Development",
    category: "Software Development",
    heroDescription:
      "Companion apps and standalone experiences for Apple Watch, Wear OS, and fitness wearables.",
    intro:
      "Our smart watch app development services extend your product to the wrist with glanceable UI, health integrations, and low-latency sync. We design for tiny screens, battery constraints, and the moments when users need information in seconds.",
    blackBand: {
      title: "Wearable Experiences That Feel Instant",
      body: "Complications, tiles, and quick actions are designed for one-tap access. We optimize payloads, background tasks, and Bluetooth sync so the watch app stays responsive all day.",
    },
    splitBlue: {
      title: "Health, Fitness, and Productivity on the Wrist",
      body: "Heart rate, step counts, workout sessions, reminders, and approvals — we integrate platform APIs and your backend so data flows securely between phone, watch, and cloud.",
    },
    blueGradient: {
      left: {
        title: "Platform Guidelines, Your Brand",
        body: "We follow Apple Watch and Wear OS HIG while keeping typography, color, and tone unmistakably yours.",
      },
      right: {
        title: "Tested on Real Devices, Not Just Simulators",
        body: "Battery drain, wrist detection, and notification timing are validated on hardware before release.",
      },
    },
  },
  {
    slug: "marketing-website-development",
    title: "Marketing Website Development",
    category: "Software Development",
    heroDescription:
      "High-converting marketing sites with CMS, SEO, and performance tuned for lead generation.",
    intro:
      "Our marketing website development services combine sharp design with fast, crawlable frontends. We build landing pages, product sites, and content hubs that load quickly, rank well, and turn visitors into qualified leads.",
    blackBand: {
      title: "Websites Built to Rank, Load, and Convert",
      body: "Semantic HTML, structured data, Core Web Vitals, and clear CTAs are standard — not add-ons. We integrate your CRM, analytics, and A/B testing stack so marketing can iterate without developer bottlenecks.",
    },
    splitBlue: {
      title: "CMS Flexibility for Growing Marketing Teams",
      body: "Headless or traditional CMS setups let content editors publish campaigns, case studies, and blog posts without breaking layout or performance budgets.",
    },
    blueGradient: {
      left: {
        title: "Design Systems for Consistent Campaigns",
        body: "Reusable sections and components keep every page on-brand while speeding up new landing page launches.",
      },
      right: {
        title: "Hosting and CDN Configured for Global Audiences",
        body: "Edge caching, image optimization, and security headers ship with every site so traffic spikes and international visitors stay covered.",
      },
    },
  },
  {
    slug: "no-code-development",
    title: "No Code Development",
    category: "Software Development",
    heroDescription:
      "Rapid prototypes and internal tools using no-code and low-code platforms — without sacrificing governance.",
    intro:
      "Our no-code development services help you validate ideas and automate workflows quickly using platforms like Bubble, Webflow, Airtable, and Make. We add structure, security review, and handoff paths when you outgrow the platform.",
    blackBand: {
      title: "Speed to Value Without Shadow IT",
      body: "We document data models, access controls, and integration points so no-code solutions stay auditable and maintainable as they spread across teams.",
    },
    splitBlue: {
      title: "When to Stay No-Code — and When to Graduate",
      body: "We help you decide where visual builders excel and where custom code will save money long term, then execute either path cleanly.",
    },
    blueGradient: {
      left: {
        title: "Automations That Connect Your Stack",
        body: "CRM updates, Slack alerts, form routing, and approval flows wired together with error handling and monitoring.",
      },
      right: {
        title: "Training and Playbooks for Your Team",
        body: "Editors and ops staff get guides and guardrails so they can extend workflows safely after launch.",
      },
    },
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    category: "Software Development",
    heroDescription:
      "Smart contracts, dApps, and blockchain integrations built with security and auditability first.",
    intro:
      "Our blockchain development services cover smart contract design, wallet integration, token economics, and on-chain/off-chain architecture. We focus on use cases where decentralization adds real trust or efficiency — not hype.",
    blackBand: {
      title: "Secure Smart Contract Development and Audits",
      body: "Solidity, Rust, or Move — we write tested, documented contracts and coordinate third-party audits before mainnet deployment.",
    },
    splitBlue: {
      title: "dApps with UX That Feels Familiar",
      body: "Wallet connect, gas abstraction, and clear transaction states help non-crypto users complete actions without getting lost.",
    },
    blueGradient: {
      left: {
        title: "Enterprise Blockchain Integrations",
        body: "Private chains, Hyperledger, and hybrid models when you need permissioned ledgers with existing ERP or supply chain systems.",
      },
      right: {
        title: "Monitoring and Upgrade Strategies",
        body: "Event indexing, alerting, and proxy patterns planned upfront so live networks stay observable and evolvable.",
      },
    },
  },
  {
    slug: "nfts",
    title: "NFTs",
    category: "Software Development",
    heroDescription:
      "NFT platforms, minting flows, and marketplace features with royalty and metadata handled correctly.",
    intro:
      "Our NFT development services span collection sites, minting engines, marketplaces, and utility tied to membership or access. We handle metadata standards, storage (IPFS/Arweave), and compliance considerations for your jurisdiction.",
    blackBand: {
      title: "Minting, Metadata, and Marketplaces",
      body: "Generative art pipelines, allowlists, reveal mechanics, and secondary royalty enforcement — built and tested before public launch.",
    },
    splitBlue: {
      title: "Utility Beyond the JPEG",
      body: "Token-gated content, event access, and loyalty programs connected to your existing product so holders get ongoing value.",
    },
    blueGradient: {
      left: {
        title: "Multi-Chain Support Where It Matters",
        body: "Ethereum, Polygon, Solana, or L2s — we recommend chains based on fees, audience, and your treasury model.",
      },
      right: {
        title: "Analytics and Community Tools",
        body: "Holder dashboards, airdrop tooling, and CRM sync so marketing and support know who owns what.",
      },
    },
  },
  {
    slug: "odoo-erp-solutions",
    title: "Odoo ERP Solutions",
    category: "ERP Solutions",
    heroDescription:
      "Odoo implementation, customization, and managed services for finance, inventory, CRM, and more.",
    intro:
      "Our Odoo ERP solutions help you deploy and extend Odoo across sales, inventory, accounting, HR, and manufacturing. We configure modules, build custom apps, and integrate Odoo with the rest of your stack.",
    blackBand: {
      title: "Odoo Implementation Tailored to Your Operations",
      body: "We map your processes to Odoo modules, migrate master data, train users, and stand up staging and production environments with clear rollback plans.",
    },
    splitBlue: {
      title: "Custom Odoo Modules and Integrations",
      body: "When standard modules fall short, we ship Python/XML customizations and REST integrations that stay upgrade-friendly.",
    },
    blueGradient: {
      left: {
        title: "Reporting and Dashboards Leaders Actually Use",
        body: "Pivot views, automated PDFs, and executive dashboards wired to live Odoo data — no more spreadsheet exports.",
      },
      right: {
        title: "Ongoing Support and Version Upgrades",
        body: "Managed services keep your instance patched, backed up, and ready for each Odoo release cycle.",
      },
    },
  },
  {
    slug: "custom-erp-development",
    title: "Custom ERP Development",
    category: "ERP Solutions",
    heroDescription:
      "Bespoke ERP platforms when off-the-shelf products cannot match your workflows.",
    intro:
      "Our custom ERP development services are built around how your business actually works. We design and deliver ERP platforms that consolidate processes, simplify reporting, and give teams a single, reliable source of truth across departments.",
    blackBand: {
      title: "ERP Implementation, Migration and Cloud Deployment Services",
      body: "We deliver end-to-end ERP implementation, migration, and cloud deployment programs that move your business from legacy systems to modern, scalable platforms with minimal disruption.",
    },
    splitBlue: {
      title: "Industry-Specific ERP Solutions for Enhanced Efficiency",
      body: "Every industry has its own workflows, regulations, and KPIs. We build ERP solutions tailored to manufacturing, retail, logistics, healthcare, and professional services.",
    },
    blueGradient: {
      left: {
        title: "ERP Software Development Services for Business Process Automation",
        body: "We design and build ERP software that automates repetitive workflows, removes silos between teams, and keeps your data clean and connected.",
      },
      right: {
        title: "Custom ERP Software Development Services for Business Solutions",
        body: "Whether you need a full ERP suite or a focused module that plugs into existing systems, our team ships secure, maintainable, and well-documented software designed around your business.",
      },
    },
  },
  {
    slug: "oracle-erp-to-odoo-migration",
    title: "Oracle ERP to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "Move from Oracle ERP to Odoo with data integrity, parallel runs, and cutover planning.",
    intro:
      "Our Oracle ERP to Odoo migration services de-risk moving off Oracle with field mapping, historical data loads, reconciliation, and phased module rollout so finance and ops stay confident through cutover.",
    blackBand: {
      title: "Structured Migration from Oracle to Odoo",
      body: "We inventory customizations, extract GL/AP/AR/inventory history, and validate balances in Odoo before users switch systems.",
    },
    splitBlue: {
      title: "Minimize Downtime with Parallel Operations",
      body: "Dual-run periods and automated reconciliation reports catch discrepancies early instead of on go-live weekend.",
    },
    blueGradient: {
      left: {
        title: "Replace Expensive Oracle Footprint",
        body: "License savings and simpler ops are modeled upfront so stakeholders see the business case clearly.",
      },
      right: {
        title: "Training and Change Management Included",
        body: "Role-based guides and super-user programs help teams adopt Odoo workflows without reverting to spreadsheets.",
      },
    },
  },
  {
    slug: "ms-dynamics-365-to-odoo",
    title: "MS Dynamics 365 to Odoo",
    category: "ERP Solutions",
    heroDescription:
      "Migrate CRM and ERP workloads from Microsoft Dynamics 365 to Odoo with full traceability.",
    intro:
      "Our MS Dynamics 365 to Odoo migration services transfer accounts, opportunities, orders, and financial history into Odoo with validated mappings and integration replacements for Power Platform dependencies.",
    blackBand: {
      title: "Dynamics Data and Process Migration",
      body: "Entities, workflows, and security roles are translated into Odoo models with audit logs showing record-level lineage.",
    },
    splitBlue: {
      title: "Integrations That Survive the Move",
      body: "Azure AD, Office 365, and third-party connectors are reimplemented or replaced so email, SSO, and ecommerce keep working.",
    },
    blueGradient: {
      left: {
        title: "CRM + ERP Unified in Odoo",
        body: "Sales pipelines, invoicing, and inventory finally share one database — fewer sync jobs, fewer broken reports.",
      },
      right: {
        title: "Post-Migration Optimization",
        body: "We tune Odoo automations and reports after go-live based on how teams actually work in the new system.",
      },
    },
  },
  {
    slug: "sap-to-odoo-migration",
    title: "SAP to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "Exit SAP complexity with a phased Odoo rollout and proven data migration tooling.",
    intro:
      "Our SAP to Odoo migration services help mid-market companies leave SAP ECC or Business One for Odoo without losing years of transactional history or custom logic that still matters.",
    blackBand: {
      title: "SAP Extraction, Transformation, and Load",
      body: "Chart of accounts, materials, BOMs, and open documents are migrated with sign-off checkpoints from finance and operations leads.",
    },
    splitBlue: {
      title: "Recreate Critical SAP Customizations in Odoo",
      body: "ABAP logic that still drives revenue gets reimplemented as maintainable Odoo modules with tests and documentation.",
    },
    blueGradient: {
      left: {
        title: "Faster Close Cycles After Migration",
        body: "Simpler posting models and integrated CRM/inventory often shorten month-end close within the first two quarters.",
      },
      right: {
        title: "Governance for Multi-Company Setups",
        body: "Inter-company rules, consolidations, and localized tax configs validated before auditors see the new books.",
      },
    },
  },
  {
    slug: "netsuite-erp-to-odoo",
    title: "NetSuite ERP to Odoo",
    category: "ERP Solutions",
    heroDescription:
      "NetSuite to Odoo migrations with saved searches, scripts, and workflows accounted for.",
    intro:
      "Our NetSuite ERP to Odoo migration services map SuiteScript automations, saved searches, and subsidiary structures into Odoo with clear before/after process documentation.",
    blackBand: {
      title: "NetSuite Historical Data in Odoo",
      body: "Customers, items, transactions, and inventory valuations move with reconciliation reports finance can audit.",
    },
    splitBlue: {
      title: "Replace SuiteScript with Odoo Automations",
      body: "Critical workflows — approvals, allocations, rev rec — are rebuilt as tested Odoo server actions and scheduled jobs.",
    },
    blueGradient: {
      left: {
        title: "Ecommerce and WMS Integrations",
        body: "Shopify, Amazon, and warehouse connectors reconnected so fulfillment does not pause during migration.",
      },
      right: {
        title: "Cost Model You Can Plan Around",
        body: "Odoo licensing and hosting costs are forecasted alongside migration effort so ROI is transparent.",
      },
    },
  },
  {
    slug: "erpnext-to-odoo-migration",
    title: "ERPNext to Odoo Migration",
    category: "ERP Solutions",
    heroDescription:
      "Switch from ERPNext to Odoo with DocType mappings, custom fields, and open items preserved.",
    intro:
      "Our ERPNext to Odoo migration services help teams outgrow Frappe limitations while keeping manufacturing, projects, and accounting history intact in Odoo.",
    blackBand: {
      title: "ERPNext to Odoo Field and DocType Mapping",
      body: "Every custom DocType is inventoried; essential fields and scripts are recreated or retired with stakeholder sign-off.",
    },
    splitBlue: {
      title: "Manufacturing and Projects Continuity",
      body: "BOMs, routings, timesheets, and WIP balances transfer with shop-floor validation before cutover.",
    },
    blueGradient: {
      left: {
        title: "Community vs Enterprise Odoo Planning",
        body: "We recommend the right Odoo edition and hosting model based on user count, SLA needs, and compliance.",
      },
      right: {
        title: "Hypercare After Go-Live",
        body: "Dedicated support window catches edge cases from legacy ERPNext customizations early.",
      },
    },
  },
  {
    slug: "agentic-ai-services",
    title: "Agentic AI Services",
    category: "AI/ML Services",
    heroDescription:
      "Autonomous AI agents that plan, use tools, and complete multi-step business tasks safely.",
    intro:
      "Our agentic AI services design agents that call APIs, query databases, and collaborate with humans under guardrails. We focus on observable, auditable agent loops — not black-box automation.",
    blackBand: {
      title: "Agents That Work With Your Systems",
      body: "CRM updates, ticket triage, research summaries, and procurement drafts — orchestrated with permissions, logging, and human approval where required.",
    },
    splitBlue: {
      title: "Tool Use, Memory, and Evaluation Built In",
      body: "Retrieval, function calling, and regression test suites keep agents reliable as models and data change.",
    },
    blueGradient: {
      left: {
        title: "Enterprise Security and Compliance",
        body: "PII redaction, tenant isolation, and policy engines prevent agents from overstepping data boundaries.",
      },
      right: {
        title: "From Pilot to Production Scale",
        body: "Queueing, rate limits, and cost controls so agent workloads survive real traffic spikes.",
      },
    },
  },
  {
    slug: "generative-ai-services",
    title: "Generative AI Services",
    category: "AI/ML Services",
    heroDescription:
      "GenAI for content, code, images, and product features — grounded in your brand and data policies.",
    intro:
      "Our generative AI services help you ship LLM-powered features with prompt engineering, fine-tuning, safety filters, and UX that sets clear expectations for users.",
    blackBand: {
      title: "GenAI Features Users Can Trust",
      body: "Citation, confidence cues, and edit-before-send flows reduce hallucination risk in customer-facing experiences.",
    },
    splitBlue: {
      title: "Model Selection for Cost and Quality",
      body: "We benchmark open and closed models against your tasks — support drafts, marketing copy, or code generation — before locking architecture.",
    },
    blueGradient: {
      left: {
        title: "Brand-Safe Outputs",
        body: "Style guides and tone rules encoded in prompts and evaluation datasets keep generated content on-voice.",
      },
      right: {
        title: "Monitoring Drift and Usage",
        body: "Dashboards track token spend, latency, and quality scores so product teams can iterate with data.",
      },
    },
  },
  {
    slug: "rag-development-services",
    title: "RAG Development Services",
    category: "AI/ML Services",
    heroDescription:
      "Retrieval-augmented generation pipelines that answer from your docs, tickets, and knowledge bases.",
    intro:
      "Our RAG development services connect LLMs to your private data with chunking, embeddings, reranking, and access control — so answers cite sources users can verify.",
    blackBand: {
      title: "Knowledge Bases That Stay Current",
      body: "Ingestion pipelines sync Confluence, SharePoint, PDFs, and tickets on a schedule with deduplication and version tracking.",
    },
    splitBlue: {
      title: "Accuracy Over Generic Chatbots",
      body: "Hybrid search, metadata filters, and human feedback loops improve hit rate on domain-specific questions.",
    },
    blueGradient: {
      left: {
        title: "On-Prem or VPC Deployment Options",
        body: "Sensitive corpora stay inside your network with local embeddings and air-gapped inference when required.",
      },
      right: {
        title: "Analytics on Gaps and Hallucinations",
        body: "Unanswered queries feed content improvement backlogs so the knowledge base grows where users struggle.",
      },
    },
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    category: "AI/ML Services",
    heroDescription:
      "Support, sales, and internal chatbots with handoff to humans and CRM logging.",
    intro:
      "Our AI chatbot development services deliver conversational interfaces on web, mobile, Slack, and WhatsApp. Bots resolve common intents, collect structured data, and escalate with full context.",
    blackBand: {
      title: "Chatbots That Know When to Escalate",
      body: "Intent detection, sentiment signals, and SLA rules route complex cases to agents with transcripts and suggested replies.",
    },
    splitBlue: {
      title: "Multilingual and Accessible by Default",
      body: "Locale-aware models and WCAG-conscious UI so global audiences and assistive tech users are included from launch.",
    },
    blueGradient: {
      left: {
        title: "Integrations with Zendesk, Salesforce, and More",
        body: "Tickets, leads, and orders created automatically — no copy-paste between chat and CRM.",
      },
      right: {
        title: "Continuous Improvement from Conversation Logs",
        body: "Review queues and analytics highlight new intents to train without redeploying the whole bot.",
      },
    },
  },
  {
    slug: "ai-app-development",
    title: "AI App Development",
    category: "AI/ML Services",
    heroDescription:
      "Full product builds where AI is core — not a bolt-on — from mobile to enterprise SaaS.",
    intro:
      "Our AI app development services ship complete applications with inference pipelines, user-facing AI features, billing, and admin tooling — designed for the latency and cost profile of real users.",
    blackBand: {
      title: "Product-Grade AI Applications",
      body: "Auth, subscriptions, model routing, and feedback collection are part of the MVP — not phase two.",
    },
    splitBlue: {
      title: "Edge, Cloud, or Hybrid Inference",
      body: "We place models where privacy, speed, and unit economics make sense for each feature.",
    },
    blueGradient: {
      left: {
        title: "Design for AI Uncertainty",
        body: "Loading states, partial results, and retry paths keep UX calm when models are slow or ambiguous.",
      },
      right: {
        title: "Ship Metrics That Matter",
        body: "Activation, retention, and task success tracked per AI feature so you know what to double down on.",
      },
    },
  },
  {
    slug: "ai-automation-services",
    title: "AI Automation Services",
    category: "AI/ML Services",
    heroDescription:
      "Automate document processing, email triage, and ops workflows with AI plus traditional integration.",
    intro:
      "Our AI automation services combine OCR, LLMs, and RPA-style connectors to remove manual steps in finance, HR, and operations — with exception handling humans can audit.",
    blackBand: {
      title: "Intelligent Document and Email Processing",
      body: "Invoices, contracts, and inbound mail classified, extracted, and posted to ERP with confidence thresholds and review queues.",
    },
    splitBlue: {
      title: "Workflow Automation Across SaaS Tools",
      body: "Zapier-style flows upgraded with AI steps that understand unstructured input instead of brittle regex.",
    },
    blueGradient: {
      left: {
        title: "ROI Tracking Per Automation",
        body: "Hours saved, error rates, and throughput reported monthly so automations prove their value.",
      },
      right: {
        title: "Fallbacks When Models Miss",
        body: "Rules-based paths and human tasks ensure nothing critical stalls when AI confidence is low.",
      },
    },
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    category: "AI/ML Services",
    heroDescription:
      "Strategy, roadmaps, and vendor selection for AI initiatives that align with business outcomes.",
    intro:
      "Our AI consulting services help leadership prioritize use cases, assess data readiness, and build governance before large builds. We deliver actionable roadmaps — not slide decks that gather dust.",
    blackBand: {
      title: "AI Strategy Grounded in Feasibility",
      body: "Workshops map opportunities to data availability, regulatory constraints, and team capacity so pilots succeed.",
    },
    splitBlue: {
      title: "Build vs Buy vs Partner Analysis",
      body: "Honest comparisons of foundation models, SaaS copilots, and custom development for each priority use case.",
    },
    blueGradient: {
      left: {
        title: "Responsible AI Frameworks",
        body: "Policies for bias testing, disclosure, and human oversight tailored to your industry regulators.",
      },
      right: {
        title: "Executive Dashboards for AI Portfolio",
        body: "Track pilot status, spend, and impact metrics in one view for steering committees.",
      },
    },
  },
  {
    slug: "ai-integration-services",
    title: "AI Integration Services",
    category: "AI/ML Services",
    heroDescription:
      "Embed OpenAI, Anthropic, Azure AI, and open models into existing products and workflows.",
    intro:
      "Our AI integration services wire LLM and vision APIs into your apps, portals, and backends with caching, key management, and fallbacks — without rewriting everything you already ship.",
    blackBand: {
      title: "Secure API Integration Patterns",
      body: "Proxy layers, rate limiting, and PII scrubbing before payloads hit external model providers.",
    },
    splitBlue: {
      title: "Upgrade Legacy Features with AI",
      body: "Search, recommendations, and form fill enhanced incrementally so releases stay small and reversible.",
    },
    blueGradient: {
      left: {
        title: "Observability for Model Calls",
        body: "Traces, token usage, and error budgets integrated with your existing APM stack.",
      },
      right: {
        title: "Swap Models Without Rewriting UI",
        body: "Abstraction layers let you change providers as pricing and quality shift.",
      },
    },
  },
  {
    slug: "ml-development-services",
    title: "ML Development Services",
    category: "AI/ML Services",
    heroDescription:
      "Custom machine learning models for forecasting, classification, computer vision, and NLP.",
    intro:
      "Our ML development services cover data labeling strategy, feature engineering, training, deployment, and monitoring — from Jupyter experiments to production endpoints serving millions of predictions.",
    blackBand: {
      title: "Production ML, Not Notebook Demos",
      body: "Containerized training pipelines, model registries, and A/B tests in production are standard deliverables.",
    },
    splitBlue: {
      title: "Domain Models That Beat Generic APIs",
      body: "When your data is unique, custom models often outperform one-size-fits-all cloud APIs on accuracy and cost.",
    },
    blueGradient: {
      left: {
        title: "MLOps and Retraining Schedules",
        body: "Drift detection triggers retraining with automated validation gates before new models go live.",
      },
      right: {
        title: "Explainability Where Stakeholders Need It",
        body: "SHAP, feature importance, and human-readable reports for regulated or high-stakes decisions.",
      },
    },
  },
  {
    slug: "ml-consulting-services",
    title: "ML Consulting Services",
    category: "AI/ML Services",
    heroDescription:
      "Assess ML readiness, audit existing models, and plan roadmaps for data science teams.",
    intro:
      "Our ML consulting services review your data estate, model portfolio, and team skills — then recommend architecture, tooling, and hiring plans that close gaps without overbuilding.",
    blackBand: {
      title: "ML Audits and Technical Due Diligence",
      body: "We evaluate third-party models, internal pipelines, and technical debt before acquisitions or major investments.",
    },
    splitBlue: {
      title: "Platform Selection and Team Design",
      body: "Snowflake vs Databricks, feature stores, and org structure advice based on scale and compliance needs.",
    },
    blueGradient: {
      left: {
        title: "Pilot Design with Clear Success Metrics",
        body: "Hypotheses, baselines, and kill criteria defined upfront so experiments produce decisions.",
      },
      right: {
        title: "Knowledge Transfer to Your Team",
        body: "Workshops and documentation so internal data scientists own the stack after engagement.",
      },
    },
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Organic and paid social programs that grow audience, engagement, and pipeline.",
    intro:
      "Our social media marketing services combine content calendars, community management, and paid amplification on LinkedIn, Instagram, X, and TikTok — aligned with your brand voice and funnel stages.",
    blackBand: {
      title: "Content That Matches Platform Culture",
      body: "Native formats, hooks, and posting cadences tuned per channel instead of one-size-fits-all cross-posting.",
    },
    splitBlue: {
      title: "Paid Social with Clear Attribution",
      body: "UTM discipline, pixel setup, and creative testing so ad spend ties to leads and revenue.",
    },
    blueGradient: {
      left: {
        title: "Community and Influencer Programs",
        body: "Ambassador workflows and UGC campaigns that extend reach without losing message control.",
      },
      right: {
        title: "Monthly Reporting Leaders Understand",
        body: "Reach, engagement, CPL, and pipeline influence — not vanity metrics alone.",
      },
    },
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Google, Meta, and LinkedIn campaigns optimized for CPA, ROAS, and qualified leads.",
    intro:
      "Our performance marketing services manage search, display, and retargeting with rigorous tracking, landing page alignment, and weekly optimization cycles focused on measurable outcomes.",
    blackBand: {
      title: "Full-Funnel Campaign Architecture",
      body: "Awareness, consideration, and conversion campaigns structured with budgets and creatives matched to intent.",
    },
    splitBlue: {
      title: "Landing Pages Built for Quality Score",
      body: "Message match, speed, and form friction tested so ad clicks convert instead of bouncing.",
    },
    blueGradient: {
      left: {
        title: "Creative Testing at Scale",
        body: "Ad variants, hooks, and offers rotated systematically to find winners before budgets scale.",
      },
      right: {
        title: "Cohort and LTV Analysis",
        body: "Optimize toward customers who stay — not just cheap clicks that churn.",
      },
    },
  },
  {
    slug: "graphic-editing",
    title: "Graphic Editing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Photo retouching, compositing, and asset prep for campaigns, ecommerce, and print.",
    intro:
      "Our graphic editing services deliver production-ready visuals — background removal, color correction, batch resizing, and brand-consistent touch-ups for marketing and product teams under tight deadlines.",
    blackBand: {
      title: "Pixel-Perfect Edits for Every Channel",
      body: "Specs for social, display, packaging, and print handled in one request queue with version control.",
    },
    splitBlue: {
      title: "High-Volume Catalog Workflows",
      body: "Ecommerce teams get consistent product shots across thousands of SKUs with repeatable presets.",
    },
    blueGradient: {
      left: {
        title: "Brand Guardrails on Every File",
        body: "Color profiles, safe zones, and logo usage checked before assets leave the studio.",
      },
      right: {
        title: "Fast Turnaround SLAs",
        body: "Rush tiers and dedicated editors for launch weeks and seasonal campaigns.",
      },
    },
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    category: "Kick-Off Marketing",
    heroDescription:
      "Short-form, explainers, ads, and event recap edits with motion graphics and sound design.",
    intro:
      "Our video editing services turn raw footage into polished stories for ads, social, webinars, and sales decks — with captions, brand intros, and platform-specific aspect ratios included.",
    blackBand: {
      title: "Edits Optimized for Retention",
      body: "Hooks in the first three seconds, pacing for mobile sound-off viewing, and CTAs placed where drop-off data says they work.",
    },
    splitBlue: {
      title: "Motion Graphics and Subtitles",
      body: "Lower thirds, kinetic type, and accessible captions without separate vendor handoffs.",
    },
    blueGradient: {
      left: {
        title: "Template Libraries for Repeatable Series",
        body: "Podcast clips, customer stories, and product updates ship faster with reusable After Effects or Premiere setups.",
      },
      right: {
        title: "Delivery in Every Format You Need",
        body: "9:16, 1:1, 16:9, and ProRes masters from one edit timeline.",
      },
    },
  },
  {
    slug: "app-prototyping",
    title: "App Prototyping",
    category: "App Designing",
    heroDescription:
      "Clickable prototypes and design sprints to validate ideas before full development.",
    intro:
      "Our app prototyping services produce high-fidelity Figma or ProtoPie flows you can user-test in days. Stakeholders and investors see realistic interactions without committing to a full build.",
    blackBand: {
      title: "Prototypes That Answer Real Questions",
      body: "We script test tasks around riskiest assumptions — onboarding, pricing, core loop — and synthesize findings into a clear go/no-go recommendation.",
    },
    splitBlue: {
      title: "Design Sprints with Cross-Functional Teams",
      body: "Product, design, and engineering aligned in a focused week with tangible artifacts, not endless workshops.",
    },
    blueGradient: {
      left: {
        title: "Handoff Ready for Development",
        body: "Components, specs, and edge cases documented so engineers estimate accurately.",
      },
      right: {
        title: "Interactive Demos for Fundraising",
        body: "Polished flows for pitch meetings that feel like shipped product.",
      },
    },
  },
  {
    slug: "design-audit",
    title: "Design Audit",
    category: "App Designing",
    heroDescription:
      "Heuristic reviews and UX audits with prioritized fixes for conversion and accessibility.",
    intro:
      "Our design audit services evaluate your app or site against usability heuristics, WCAG guidelines, and conversion best practices — delivering a ranked backlog your team can execute.",
    blackBand: {
      title: "Expert Review with Evidence",
      body: "Screenshots, session replay notes, and severity scores — not vague “make it pop” feedback.",
    },
    splitBlue: {
      title: "Competitive and Benchmark Analysis",
      body: "See how key flows compare to category leaders and where differentiation opportunities exist.",
    },
    blueGradient: {
      left: {
        title: "Accessibility Findings Developers Can Fix",
        body: "Contrast ratios, focus order, and ARIA issues mapped to components and tickets.",
      },
      right: {
        title: "Quick Wins vs Strategic Redesigns",
        body: "We separate fixes you can ship this sprint from structural IA changes worth planning.",
      },
    },
  },
  {
    slug: "illustrations",
    title: "Illustrations",
    category: "App Designing",
    heroDescription:
      "Custom illustration systems for products, marketing, and empty states.",
    intro:
      "Our illustration services create cohesive visual languages — spot illustrations, hero scenes, and iconography — that make your brand memorable across app, web, and print.",
    blackBand: {
      title: "Illustration Styles Matched to Your Brand",
      body: "Flat, isometric, 3D, or hand-drawn — we explore directions quickly and lock a style guide before full production.",
    },
    splitBlue: {
      title: "Scalable Asset Libraries",
      body: "Source files organized for marketing, product, and dev teams to reuse without breaking consistency.",
    },
    blueGradient: {
      left: {
        title: "Inclusive and Diverse Representation",
        body: "Characters and scenes reflect your audience thoughtfully, not as an afterthought.",
      },
      right: {
        title: "Animation-Ready Layers",
        body: "Illustrations structured for Lottie or motion campaigns when you need movement later.",
      },
    },
  },
  {
    slug: "brand-guideline",
    title: "Brand Guideline",
    category: "App Designing",
    heroDescription:
      "Brand books covering logo, color, typography, voice, and application examples.",
    intro:
      "Our brand guideline services document how your identity shows up everywhere — digital, print, social, and partner co-marketing — so internal and external teams stay aligned.",
    blackBand: {
      title: "Guidelines People Actually Reference",
      body: "Clear do/don't examples, downloadable assets, and Figma libraries — not 80-page PDFs nobody opens.",
    },
    splitBlue: {
      title: "Voice and Messaging Frameworks",
      body: "Tone ladders, boilerplate copy, and naming rules so writing sounds like one company.",
    },
    blueGradient: {
      left: {
        title: "Partner and Vendor Kits",
        body: "Logo packs, co-brand lockups, and approval workflows for affiliates and agencies.",
      },
      right: {
        title: "Living Documents That Evolve",
        body: "Versioned updates as you launch sub-brands or enter new markets.",
      },
    },
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "App Designing",
    heroDescription:
      "Distinctive logos and mark systems that work from favicon to billboard.",
    intro:
      "Our logo design services explore strategic directions, refine chosen concepts, and deliver full logo kits — primary, secondary, monochrome, and responsive variants for every touchpoint.",
    blackBand: {
      title: "Logos Built for Real-World Use",
      body: "Clear space, minimum sizes, and misuse examples tested on app icons, embroidery, and dark backgrounds.",
    },
    splitBlue: {
      title: "Trademark-Aware Process",
      body: "Preliminary clearance checks and distinctiveness reviews reduce rename risk after launch.",
    },
    blueGradient: {
      left: {
        title: "Motion and Social Avatars Included",
        body: "Animated marks and profile crops so launch day looks cohesive everywhere.",
      },
      right: {
        title: "Source Files for Every Team",
        body: "SVG, PNG, PDF, and Figma components handed off with naming conventions devs expect.",
      },
    },
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    category: "App Designing",
    heroDescription:
      "Component libraries, tokens, and documentation for consistent product UI at scale.",
    intro:
      "Our design systems services unify buttons, forms, tables, and patterns in Figma and code — with Storybook docs and contribution models so design and engineering scale together.",
    blackBand: {
      title: "Tokens and Components That Sync",
      body: "Color, spacing, and typography tokens flow from Figma to React (or your stack) with automated checks for drift.",
    },
    splitBlue: {
      title: "Adoption Plans, Not Drop-and-Run Libraries",
      body: "Migration guides, office hours, and lint rules help legacy screens move to the system incrementally.",
    },
    blueGradient: {
      left: {
        title: "Accessibility Baked into Primitives",
        body: "Focus states, contrast, and keyboard patterns defined once at the component level.",
      },
      right: {
        title: "Governance for Contributions",
        body: "RFC process and review cadence so the system grows without becoming chaos.",
      },
    },
  },
  {
    slug: "pitch-deck",
    title: "Pitch Deck",
    category: "App Designing",
    heroDescription:
      "Investor and sales decks with narrative, data viz, and design that closes meetings.",
    intro:
      "Our pitch deck services shape your story arc, tighten copy, and design slides that survive forward — clear at a glance on a laptop screen or projected in a boardroom.",
    blackBand: {
      title: "Decks Structured for How Investors Read",
      body: "Problem, solution, traction, market, team, and ask — each slide earning the next with evidence not adjectives.",
    },
    splitBlue: {
      title: "Data Visualization That Supports the Thesis",
      body: "Charts simplified, sources cited, and comparisons framed honestly so diligence conversations start ahead.",
    },
    blueGradient: {
      left: {
        title: "Speaker Notes and Appendix Slides",
        body: "Deep dives ready for Q&A without cluttering the main flow.",
      },
      right: {
        title: "Editable Templates for Future Rounds",
        body: "Master files your team can update as metrics change between meetings.",
      },
    },
  },
  {
    slug: "presentations",
    title: "Presentations",
    category: "App Designing",
    heroDescription:
      "Keynotes, sales decks, and internal templates on-brand and ready to present.",
    intro:
      "Our presentation design services transform rough outlines into polished slide decks — consistent typography, imagery, and layouts that help speakers focus on delivery, not fixing formatting.",
    blackBand: {
      title: "Presentations for Conferences and Boardrooms",
      body: "Aspect ratios, legible type at the back of the room, and animation used sparingly for emphasis.",
    },
    splitBlue: {
      title: "Sales Enablement Deck Libraries",
      body: "Modular slides reps can assemble for vertical-specific pitches without breaking brand rules.",
    },
    blueGradient: {
      left: {
        title: "PowerPoint and Google Slides Deliverables",
        body: "Files your team already uses — not locked proprietary formats.",
      },
      right: {
        title: "Training on Template Maintenance",
        body: "Short guides so marketing can refresh stats and case studies between engagements.",
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

/** Navbar mega menu structure with slugs for detail routes. */
export const SERVICE_NAV_GROUPS = [
  {
    title: "Software Development",
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
    items: [
      { label: "Social Media Marketing", slug: "social-media-marketing" as const },
      { label: "Performance Marketing", slug: "performance-marketing" as const },
      { label: "Graphic Editing", slug: "graphic-editing" as const },
      { label: "Video Editing", slug: "video-editing" as const },
    ],
  },
  {
    title: "App Designing",
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
