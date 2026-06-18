export interface ServiceHeroContent {
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

/** Fixed hero copy — replace with API response when backend is ready. */
export const SERVICE_HERO_CONTENT: ServiceHeroContent = {
  title: "Web App Development",
  description:
    "Get a full custom modern web app from design concept and UI/UX to a fully functional backend.",
  primaryBtnText: "Book a free call",
  secondaryBtnText: "Request a query",
};

/** Background images that cycle in the hero slider. */
export const SERVICE_HERO_IMAGES = [
  "/images/web1.jpg",
  "/images/web2.jpg",
  "/images/web3.jpg",
] as const;
