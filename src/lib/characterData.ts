
export interface CharacterWithService {
  imagePath: string;
  name: string;
  altText: string;
  glowColor: string;
  position: "left" | "right" | "center";
  service: string;
  funnyPhrase: string;
  phraseTranslation: string;
  serviceId: string;
  animationClass?: string;
}

// Character data with service assignments and Pakistani Punjabi phrases
export const characters: CharacterWithService[] = [
  {
    imagePath: "/lovable-uploads/5d0caf15-21fe-4934-920f-5fa05bee0cfb.png",
    name: "Babbu Chaudhry",
    altText: "Cyborg Warrior with Blue Outfit and Axe",
    glowColor: "rgba(0, 162, 255, 0.6)",
    position: "left",
    service: "Website & UX Design",
    funnyPhrase: "Oy yaara, main taan coding ch kamaal aan!",
    phraseTranslation: "(Hey buddy, I'm amazing at coding!)",
    serviceId: "website-ux",
    animationClass: "pop"
  },
  {
    imagePath: "/lovable-uploads/a79d0288-9c52-4d1b-80a7-c0657666e1ad.png",
    name: "Tufail Jutt",
    altText: "Cyborg Warrior with Red Outfit and Axe",
    glowColor: "rgba(162, 60, 20, 0.6)",
    position: "right",
    service: "Video Production",
    funnyPhrase: "Vekho ji, video banauna mera khel ae!",
    phraseTranslation: "(Look here, making videos is my game!)",
    serviceId: "video-ad",
    animationClass: "pop2"
  },
  {
    imagePath: "/lovable-uploads/f65095b9-0a75-4ff0-a092-ed4b96e30194.png",
    name: "Paa Ji Soorma",
    altText: "Cyborg Warrior with Orange Turban and Axe",
    glowColor: "rgba(255, 165, 0, 0.6)",
    position: "center",
    service: "Branding & Identity",
    funnyPhrase: "Brand banauna mere khuun ch ae, dasso ki chaida!",
    phraseTranslation: "(Brand building is in my blood, tell me what you need!)",
    serviceId: "brand-package",
    animationClass: "pop3"
  },
  {
    imagePath: "/lovable-uploads/60724da5-8419-4e3d-a8d6-64bc9057dacd.png",
    name: "Guddi Rani",
    altText: "Cyborg Warrior with Red Turban and Glowing Purple Axe",
    glowColor: "rgba(170, 0, 255, 0.6)",
    position: "left",
    service: "Social Media Content",
    funnyPhrase: "Chal oye, mainu viral karauna koi mushkil nai!",
    phraseTranslation: "(Come on, making things viral is no problem for me!)",
    serviceId: "social-content",
    animationClass: "pop4"
  },
  {
    imagePath: "/lovable-uploads/65ae29b9-e5d6-44a7-b747-f360c5dc07af.png",
    name: "Faisla Phelwan",
    altText: "Cyborg Warrior with Green Turban and Glowing Green Axe",
    glowColor: "rgba(0, 255, 85, 0.6)",
    position: "right",
    service: "3D Bot Creation",
    funnyPhrase: "Teri majboori samjha, 3D ch rahna meri majboori ae!",
    phraseTranslation: "(I understand your need, living in 3D is my destiny!)",
    serviceId: "3d-rickshaw-bot",
    animationClass: "pop5"
  },
  {
    imagePath: "/lovable-uploads/4bf6d862-98f5-40b4-b935-0a1325a5f19e.png",
    name: "Channa Miyan",
    altText: "Cyborg Warrior with Green Outfit Standing",
    glowColor: "rgba(0, 128, 85, 0.6)",
    position: "center",
    service: "AI Copywriting",
    funnyPhrase: "Meri likhat parhke log pagal ho jande ne!",
    phraseTranslation: "(People go crazy reading my writing!)",
    serviceId: "ai-copy",
    animationClass: "pop"
  }
];
