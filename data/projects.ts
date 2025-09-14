import type { Project } from '@/types';

const projects: Project[] = [
  {
    "id": 7,
    "title": "My Portfolio",
    "description": "A personal portfolio demonstrating cutting-edge web development, featuring native ES modules, a 3D carousel, and dynamic PDF generation.",
    "live_link": "https://my-modern-resume.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/modern-portfolio",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"],
    "nerd_facts": [
      "Built without a bundler, using importmaps for native ES module resolution.",
      "Features a 3D carousel with spring physics powered by Framer Motion.",
      "Dynamically generates an up-to-date PDF resume on-the-fly in the browser."
    ]
  },
  {
    "id": 14,
    "title": "My Place",
    "description": "An AI-powered PWA with robust offline capabilities, using the Gemini API for summarization and transcription to create a powerful notes tool.",
    "live_link": "https://my-place-a.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/my-place-a",
    "tech_stack": ["React", "Gemini API", "PWA"],
    "nerd_facts": [
      "Leverages the Google Gemini API for advanced AI features.",
      "Built as a Progressive Web App (PWA) with full offline functionality.",
      "Uses IndexedDB for robust client-side storage, ensuring data is always available."
    ]
  },
  {
    "id": 4,
    "title": "FancyFam",
    "description": "A sleek digital business card platform focused on creating a memorable first impression with elegant animations and a mobile-first design.",
    "live_link": "https://fancyfam.com/",
    "github_link": "https://github.com/alexubilla8185/fancy-fam",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX"],
    "nerd_facts": [
      "Features elegant animations and micro-interactions for a premium feel.",
      "Designed for effortless sharing on mobile devices.",
      "Lightweight and fast to ensure a great first impression."
    ]
  },
  {
    "id": 2,
    "title": "Dark Trap",
    "description": "A secure, peer-to-peer video chat app with a cyberpunk theme, providing end-to-end encrypted communication without a central server.",
    "live_link": "https://darktrap.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/darktrap",
    "tech_stack": ["WebRTC", "React", "P2P"],
    "nerd_facts": [
      "Employs WebRTC for direct, end-to-end encrypted peer-to-peer video streaming.",
      "Eliminates the need for a central server, ensuring user privacy.",
      "Features a minimalist, yet highly stylized, interface for secure communication."
    ]
  },
  {
    "id": 1,
    "title": "Dem Boyz BBQ",
    "description": "A visually appealing, responsive website for a local BBQ restaurant, optimized for fast load times and a seamless mobile experience.",
    "live_link": "https://demboyzbbq.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/dem-boyz-bbq",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX"],
    "nerd_facts": [
      "Fully responsive design adapts from mobile menus to large desktop displays.",
      "Optimized for fast load times to prevent losing hungry customers.",
      "Clean UI focuses user attention on the food and key business information."
    ]
  },
  {
    "id": 10,
    "title": "Real Stone & Granite",
    "description": "A professional digital showroom for a local stone business, featuring a high-res, lazy-loaded image gallery to generate leads.",
    "live_link": "https://real-stone.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/real-stone",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX"],
    "nerd_facts": [
      "Features a high-resolution image gallery to showcase products.",
      "Mobile-first design ensures a great experience for contractors on-site.",
      "Lazy loading for gallery images improves initial page speed."
    ]
  },
  {
    "id": 11,
    "title": "Real Estate Showcase",
    "description": "A promotional SPA to showcase a vacation rental property, optimized for visual appeal, quick loading, and SEO to drive booking inquiries.",
    "live_link": "https://palm-city-condo.netlify.app",
    "github_link": "https://github.com/alexubilla8185/palm-city-condo",
    "tech_stack": ["React", "Tailwind CSS", "Real Estate"],
    "nerd_facts": [
      "Single-page application design for a fast, seamless user experience.",
      "Image-heavy design is optimized for quick loading and visual appeal.",
      "Clear calls-to-action drive booking inquiries from potential renters."
    ]
  },
  {
    "id": 8,
    "title": "GreenWave",
    "description": "A community hub for cannabis enthusiasts in South Florida, using the Google Maps API for location-based discovery and social connection.",
    "live_link": "https://greenwavesoflo.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/greenwavesoflo",
    "tech_stack": ["React", "Maps API", "Community"],
    "nerd_facts": [
      "Uses Google Maps API for location-based search and discovery.",
      "Built with a community-first approach to UI/UX.",
      "Efficiently renders numerous map markers without performance degradation."
    ]
  },
  {
    "id": 9,
    "title": "Meet4Weed",
    "description": "A proof-of-concept social network for the cannabis community, demonstrating a scalable model for real-time chat and an interactive app.",
    "live_link": "https://meet4weed.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet4weed",
    "tech_stack": ["React", "Socket.IO", "Firebase"],
    "nerd_facts": [
      "Utilizes Socket.IO for real-time chat and notifications.",
      "Firebase backend for user authentication and data storage.",
      "Proof-of-concept demonstrates a scalable social networking platform."
    ]
  }
];

export default projects;
