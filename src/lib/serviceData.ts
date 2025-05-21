
export interface ServiceDetailType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  characterImage: string;
  glowColor: string;
  features: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export const serviceData: ServiceDetailType[] = [
  {
    id: "brand-package",
    title: "Brand Package",
    description: "Complete brand identity development with logo, colors, and guidelines",
    longDescription: "Transform your business with a comprehensive brand identity that captures your essence and resonates with your audience. Our AI-powered branding process ensures a unique, memorable, and versatile identity that stands out in crowded markets.",
    image: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
    characterImage: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
    glowColor: "#ff9500",
    features: [
      "Logo design with multiple variations",
      "Complete color palette development",
      "Typography selection and pairing",
      "Brand voice and tone guidelines",
      "Brand application examples",
      "Social media profile designs"
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "Our AI analyzes your business, target audience, and competitors to understand positioning."
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Multiple brand concepts are generated based on your unique value proposition."
      },
      {
        step: 3,
        title: "Refinement",
        description: "Selected concepts are refined through iterative improvements."
      },
      {
        step: 4,
        title: "Finalization",
        description: "Complete brand package is delivered with all necessary files and guidelines."
      }
    ],
    deliverables: [
      "Logo in multiple formats (PNG, SVG, PDF)",
      "Brand style guide document",
      "Color palette with HEX/RGB/CMYK values",
      "Typography specifications",
      "Brand application mockups",
      "Social media templates"
    ],
    testimonial: {
      quote: "The AI WALA brand package completely transformed how customers perceive us. The unique identity they created perfectly captures our vision.",
      author: "Maya Patel",
      company: "Fusion Flavors Restaurant"
    }
  },
  {
    id: "website-ux",
    title: "Website & UX",
    description: "User-centric website design with intuitive navigation and experience",
    longDescription: "Create a stunning website that delivers exceptional user experiences. Our AI-driven approach focuses on creating intuitive, responsive designs that convert visitors into customers while reflecting your brand identity.",
    image: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
    characterImage: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
    glowColor: "#00a2ff",
    features: [
      "Responsive design for all devices",
      "Intuitive information architecture",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Accessibility compliance",
      "Interactive UI elements"
    ],
    process: [
      {
        step: 1,
        title: "UX Research",
        description: "Analysis of user needs, behavior patterns, and competitive websites."
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Creation of structural blueprints to optimize user flows and content hierarchy."
      },
      {
        step: 3,
        title: "Visual Design",
        description: "Development of stunning visuals that align with brand identity and enhance user experience."
      },
      {
        step: 4,
        title: "Development & Testing",
        description: "Building of responsive website with rigorous testing across devices and browsers."
      }
    ],
    deliverables: [
      "Fully responsive website",
      "Content management system",
      "SEO optimization",
      "Analytics integration",
      "Speed optimization",
      "Training documentation"
    ],
    testimonial: {
      quote: "Our conversion rate increased by 85% after launching our new AI WALA-designed website. The user experience is simply outstanding.",
      author: "Raj Singh",
      company: "TechSolve Solutions"
    }
  },
  {
    id: "social-content",
    title: "Social Content",
    description: "Engaging content creation for all social media platforms",
    longDescription: "Captivate your audience with AI-generated social media content that drives engagement and builds community. Our approach ensures consistent, on-brand messaging across all platforms while staying current with trending formats.",
    image: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
    characterImage: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
    glowColor: "#ff4081",
    features: [
      "Platform-specific content strategies",
      "Trending format adaptation",
      "Engagement-optimized copywriting",
      "Visual content creation",
      "Hashtag strategy development",
      "Content calendar planning"
    ],
    process: [
      {
        step: 1,
        title: "Platform Analysis",
        description: "Identification of optimal platforms and content types for your audience."
      },
      {
        step: 2,
        title: "Content Strategy",
        description: "Development of a cohesive plan aligned with business objectives."
      },
      {
        step: 3,
        title: "Content Creation",
        description: "Production of engaging texts, images, and videos for each platform."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Refinement based on performance metrics and engagement patterns."
      }
    ],
    deliverables: [
      "Monthly content calendar",
      "Platform-optimized posts",
      "Custom graphics and templates",
      "Engagement-driving captions",
      "Hashtag research report",
      "Performance analytics dashboard"
    ],
    testimonial: {
      quote: "The social content from AI WALA doubled our engagement rate in just one month. The content feels authentically us but better than we could create ourselves.",
      author: "Priya Malhotra",
      company: "Glow Cosmetics"
    }
  },
  {
    id: "video-ad",
    title: "Video Ad",
    description: "Eye-catching video advertisements that convert viewers into customers",
    longDescription: "Create compelling video advertisements that capture attention and drive action. Our AI-powered video production combines striking visuals, persuasive messaging, and strategic placement to maximize your marketing ROI.",
    image: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
    characterImage: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
    glowColor: "#8c52ff",
    features: [
      "Concept development tailored to your audience",
      "Professional script writing",
      "High-quality visual production",
      "Custom animation and effects",
      "Platform-optimized formats",
      "Call-to-action strategy"
    ],
    process: [
      {
        step: 1,
        title: "Concept & Script",
        description: "Development of compelling concepts and persuasive scripts."
      },
      {
        step: 2,
        title: "Visual Design",
        description: "Creation of storyboards and visual elements."
      },
      {
        step: 3,
        title: "Production",
        description: "Assembly of all elements with animations, transitions, and effects."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Format adaptation for various platforms and A/B testing options."
      }
    ],
    deliverables: [
      "Finished video in multiple formats",
      "Platform-specific variations",
      "Thumbnail options",
      "Caption and description copy",
      "Placement recommendations",
      "Performance tracking setup"
    ],
    testimonial: {
      quote: "The video ad AI WALA created for our product launch generated 3x more conversions than our previous campaigns. Worth every rupee!",
      author: "Vikram Joshi",
      company: "EcoHome Products"
    }
  },
  {
    id: "ai-copy",
    title: "AI Copy",
    description: "Persuasive AI-generated copywriting for all your marketing needs",
    longDescription: "Harness the power of AI-generated copy that persuades, engages, and converts. Our advanced language models create compelling content for websites, emails, ads, and more, tailored to your brand voice and target audience.",
    image: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
    characterImage: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
    glowColor: "#00c853",
    features: [
      "Brand voice development and application",
      "SEO-optimized website content",
      "Converting product descriptions",
      "Engaging email campaigns",
      "Persuasive ad copy",
      "Compelling calls-to-action"
    ],
    process: [
      {
        step: 1,
        title: "Voice Analysis",
        description: "Development of your unique brand voice and tone."
      },
      {
        step: 2,
        title: "Content Strategy",
        description: "Planning of copy needs across all channels and touchpoints."
      },
      {
        step: 3,
        title: "Copy Creation",
        description: "Generation of persuasive copy tailored to each medium and goal."
      },
      {
        step: 4,
        title: "Optimization",
        description: "Refinement based on performance data and conversion metrics."
      }
    ],
    deliverables: [
      "Brand voice guide",
      "Website copy (all pages)",
      "Email campaign series",
      "Social media copy package",
      "Ad copy variations",
      "Product descriptions"
    ],
    testimonial: {
      quote: "The AI-generated copy transformed our messaging. Our email open rates increased by 45% and click-through rates doubled within weeks.",
      author: "Ananya Kumar",
      company: "Wellness Junction"
    }
  },
  {
    id: "3d-rickshaw-bot",
    title: "3D Rickshaw Bot",
    description: "Custom 3D bot creations for immersive digital experiences",
    longDescription: "Elevate your digital presence with custom 3D rickshaw bots that create memorable, immersive experiences. Our bots can serve as interactive guides, customer service agents, or brand mascots that engage users in unique ways.",
    image: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
    characterImage: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
    glowColor: "#ffab00",
    features: [
      "Custom 3D character design",
      "Interactive animation development",
      "Conversational AI integration",
      "Multi-platform compatibility",
      "Brand personality alignment",
      "User interaction capabilities"
    ],
    process: [
      {
        step: 1,
        title: "Character Concept",
        description: "Development of bot personality, appearance, and functionality."
      },
      {
        step: 2,
        title: "3D Modeling",
        description: "Creation of detailed 3D models with brand-aligned aesthetics."
      },
      {
        step: 3,
        title: "Animation",
        description: "Development of fluid animations and interactive behaviors."
      },
      {
        step: 4,
        title: "Integration",
        description: "Implementation across websites, apps, or marketing materials."
      }
    ],
    deliverables: [
      "Custom 3D bot model",
      "Animation library",
      "Integration code package",
      "Interaction script library",
      "Platform-specific adaptations",
      "Maintenance documentation"
    ],
    testimonial: {
      quote: "Our 3D Rickshaw Bot has become the face of our brand online. Customers love interacting with it, and it's significantly increased our site engagement metrics.",
      author: "Arjun Mehta",
      company: "NextGen Tours"
    }
  }
];

export const getServiceById = (id: string): ServiceDetailType | undefined => {
  return serviceData.find(service => service.id === id);
};
