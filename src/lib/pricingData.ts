
export interface PricingTier {
  name: string;
  revenueBracket: string;
  revenueRange: string;
  services: {
    branding: number;
    website: number;
    social: number;
    video: number;
    model3d: number;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Startup",
    revenueBracket: "startup",
    revenueRange: "< 1 M PKR",
    services: {
      branding: 75000,
      website: 50000,
      social: 50000,
      video: 25000,
      model3d: 50000
    }
  },
  {
    name: "Growth",
    revenueBracket: "growth",
    revenueRange: "1-2 M PKR",
    services: {
      branding: 125000,
      website: 75000,
      social: 75000,
      video: 40000,
      model3d: 60000
    }
  },
  {
    name: "Enterprise",
    revenueBracket: "enterprise",
    revenueRange: "> 2 M PKR",
    services: {
      branding: 200000,
      website: 100000,
      social: 100000,
      video: 60000,
      model3d: 75000
    }
  }
];

export interface Service {
  id: string;
  name: string;
  description: string;
  included: string[];
}

export const services: Service[] = [
  {
    id: "branding",
    name: "Brand Package",
    description: "Complete brand identity with logo, colors, typography and usage guidelines.",
    included: [
      "Custom logo design",
      "Color palette selection",
      "Typography system",
      "Brand usage guidelines",
      "Business card templates"
    ]
  },
  {
    id: "website",
    name: "Website & UX",
    description: "Responsive AI-powered website with rickshaw-bot assistant on every page.",
    included: [
      "Mobile-responsive design",
      "AI chatbot integration",
      "SEO optimization",
      "Analytics dashboard",
      "Content management system"
    ]
  },
  {
    id: "social",
    name: "Social & Content",
    description: "30 social-media ready graphic templates with AI-generated caption drafts.",
    included: [
      "Platform-optimized templates",
      "AI caption generation",
      "Hashtag strategy",
      "Content calendar",
      "Performance reporting"
    ]
  },
  {
    id: "video",
    name: "Video Ads & AI Copy",
    description: "30-second animated video ad with automated voice-over and copy suggestions.",
    included: [
      "Custom animation",
      "Voiceover production",
      "Multiple ad formats",
      "A/B testing options",
      "Engagement analytics"
    ]
  },
  {
    id: "model3d",
    name: "3D Rickshaw Bot",
    description: "Downloadable 3D rickshaw-bot asset for AR & web integration.",
    included: [
      "Multiple file formats",
      "AR-ready model",
      "Animation sequences",
      "Custom branding",
      "Technical support"
    ]
  }
];
