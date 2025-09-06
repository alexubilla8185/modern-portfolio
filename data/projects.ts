import type { Project } from '@/types';

const projects: Project[] = [
  {
    "id": 1,
    "title": "Dem Boyz BBQ",
    "description": "Developed a responsive and appetizing website for a local BBQ restaurant, driving online engagement and providing customers with easy access to menus, catering info, and location details.",
    "live_link": "https://demboyzbbq.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/dem-boyz-bbq",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "nerd_facts": [
      "Fully responsive design adapts from mobile menus to large desktop displays.",
      "Optimized for fast load times to prevent losing hungry customers.",
      "Clean UI focuses user attention on the food and contact info.",
      "Built as a static site for peak performance, security, and low hosting costs."
    ]
  },
  {
    "id": 2,
    "title": "Dark Trap",
    "description": "Developed a dark, techy, cyberpunk-themed peer-to-peer video chat application using WebRTC for secure and direct communication.",
    "live_link": "https://darktrap.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/darktrap",
    "tech_stack": ["WebRTC", "React", "P2P"],
    "nerd_facts": [
      "Employs WebRTC for direct peer-to-peer video streaming, eliminating server middlemen.",
      "End-to-end encryption is inherent to the WebRTC architecture, ensuring privacy.",
      "Signaling for the initial peer handshake is managed via a lightweight WebSocket server.",
      "Focuses on a minimalist, yet stylized, interface for secure communication."
    ]
  },
  {
    "id": 3,
    "title": "Full Belly Sundays",
    "description": "Built a web application for a non-profit to streamline the process of connecting food donations with local communities in need, featuring an intuitive interface for volunteers and recipients.",
    "live_link": "https://full-belly-sundays.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/full-belly-sundays",
    "tech_stack": ["React", "Firebase", "Maps API"],
    "nerd_facts": [
      "Integrates with Firebase for real-time data synchronization.",
      "Uses Google Maps API to visualize donation and distribution points.",
      "Secure authentication for volunteers and administrators.",
      "Firestore security rules ensure data integrity and user privacy."
    ]
  },
  {
    "id": 4,
    "title": "FancyFam",
    "description": "Designed a modern and interactive digital business card platform to make a memorable first impression with a clean, elegant interface and seamless sharing capabilities.",
    "live_link": "https://fancyfam.com/",
    "github_link": "https://github.com/alexubilla8185/fancy-fam",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "nerd_facts": [
      "Focus on elegant animations and micro-interactions for a premium feel.",
      "Designed for effortless sharing on mobile devices.",
      "Lightweight and fast, ensuring a great first impression.",
      "Built with a mobile-first philosophy for optimal on-the-go use."
    ]
  },
  {
    "id": 5,
    "title": "TEKGUYZ",
    "description": "Launched the official business website for a tech consultancy, establishing a professional online presence to attract clients and showcase services in DevOps, software development, and strategy.",
    "live_link": "https://tekguyz.com/",
    "github_link": "https://github.com/alexubilla8185/tek-guyz-site",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"],
    "nerd_facts": [
      "Static site generation for maximum performance and security.",
      "SEO-optimized to attract new clients through organic search.",
      "Clean, professional design reflects the company's brand.",
      "Minimalist aesthetic focuses on the company's value proposition."
    ]
  },
  {
    "id": 6,
    "title": "AfterLife",
    "description": "Engineered an AI-powered digital memorial platform where users can create a personalized legacy, allowing loved ones to interact with memories and AI-generated responses.",
    "live_link": "https://afterlife-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/afterlife",
    "tech_stack": ["React", "Gemini API", "Firebase"],
    "nerd_facts": [
      "Leverages the Gemini API for generative AI responses.",
      "Uses Firebase for secure storage of user data and memories.",
      "Real-time database features allow for instant updates across clients.",
      "Carefully crafted system prompts guide AI responses with sensitivity and respect."
    ]
  },
  {
    "id": 7,
    "title": "Portfolio Website",
    "description": "Built a dynamic, single-page portfolio from scratch to showcase skills in modern web development, featuring an interactive project carousel and a clean, responsive UI.",
    "live_link": "https://my-modern-resume.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/modern-portfolio",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"],
    "nerd_facts": [
      "Built without a bundler using importmaps for native ES module resolution.",
      "Features a 3D carousel with spring physics via Framer Motion.",
      "Dynamically generates a PDF resume on-the-fly in the browser.",
      "Fully accessible, with ARIA attributes and keyboard navigation throughout.",
      "Persistent light/dark theme using localStorage and CSS classes on the HTML root."
    ]
  },
  {
    "id": 8,
    "title": "Interactive 3D Carousel",
    "description": "Created a reusable React component for showcasing content in an engaging, 3D animated carousel. This portfolio uses it to display projects!",
    "live_link": "#",
    "github_link": "https://github.com/alexubilla8185/modern-portfolio/blob/main/components/ProjectShowcase.tsx",
    "tech_stack": ["React", "TypeScript", "Framer Motion"],
    "nerd_facts": [
      "Uses CSS 'perspective' for the core 3D spatial effect.",
      "Calculates card positions and transformations in JavaScript for precise control.",
      "Fully accessible via keyboard navigation (left/right arrow keys).",
      "Responsive design adjusts card sizes and positioning for mobile screens.",
      "Uses spring physics from Framer Motion for a natural, fluid feel."
    ]
  },
  {
    "id": 9,
    "title": "GreenWave",
    "description": "Created a community hub for cannabis enthusiasts in South Florida, integrating Google Maps API to help users find local dispensaries and discover product information.",
    "live_link": "https://greenwavesoflo.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/greenwavesoflo",
    "tech_stack": ["React", "Maps API", "Community"],
    "nerd_facts": [
      "Uses Google Maps API for location-based search and discovery.",
      "Built with a community-first approach to UI/UX.",
      "Scalable architecture to handle a growing user base.",
      "Efficiently renders numerous map markers without performance degradation."
    ]
  },
  {
    "id": 10,
    "title": "Meet4Weed",
    "description": "Developed a social networking proof-of-concept for the cannabis community, designed with real-time features to connect users and facilitate sharing in a user-friendly, modern environment.",
    "live_link": "https://meet4weed.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed",
    "tech_stack": ["React", "Socket.IO", "Firebase"],
    "nerd_facts": [
      "Utilizes Socket.IO for real-time chat and notifications.",
      "Firebase backend for user authentication and data storage.",
      "Proof-of-concept for a scalable social networking platform.",
      "Manages real-time connection state for 'online' user presence indicators."
    ]
  },
  {
    "id": 11,
    "title": "Real Stone & Granite",
    "description": "Delivered a sleek, professional website for a local stone and granite business, building a digital showroom to showcase their products and attract new customers.",
    "live_link": "https://real-stone.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/real-stone",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "nerd_facts": [
      "Features a high-resolution image gallery to showcase products.",
      "Mobile-first design ensures a great experience for contractors on-site.",
      "Contact forms are integrated for easy lead generation.",
      "Lazy loading for gallery images improves initial page speed."
    ]
  },
  {
    "id": 12,
    "title": "Real Estate Showcase",
    "description": "Designed and launched a promotional single-page website for a vacation rental property, featuring an image gallery and booking information to attract potential renters.",
    "live_link": "https://palm-city-condo.netlify.app",
    "github_link": "https://github.com/alexubilla8185/palm-city-condo",
    "tech_stack": ["React", "Tailwind CSS", "Real Estate"],
    "nerd_facts": [
      "Single-page application design for a fast, seamless user experience.",
      "Image-heavy design optimized for quick loading and visual appeal.",
      "Clear calls-to-action to drive booking inquiries from potential renters.",
      "SEO-friendly markup to improve search engine ranking."
    ]
  },
  {
    "id": 13,
    "title": "Meet4Weed (Dev)",
    "description": "Developed a social networking proof-of-concept for the cannabis community, designed with real-time features to connect users and facilitate sharing in a user-friendly, modern environment.",
    "live_link": "https://meet4weed-dev.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed",
    "tech_stack": ["React", "Socket.IO", "Firebase"],
    "nerd_facts": [
      "Utilizes Socket.IO for real-time chat and notifications.",
      "Firebase backend for user authentication and data storage.",
      "Proof-of-concept for a scalable social networking platform.",
      "Manages real-time connection state for 'online' user presence indicators."
    ]
  },
  {
    "id": 14,
    "title": "Higher, Please?",
    "description": "Created a modern web app that asks a series of funny and challenging questions, puzzles, or quizzes to determine your level of 'highness', then gives you a score and tips.",
    "live_link": "https://higher-please.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/higher-please",
    "tech_stack": ["React", "Tailwind CSS", "Gamification"],
    "nerd_facts": [
      "Interactive quiz format with dynamic scoring and conditional logic.",
      "Humorous and engaging content designed for a specific niche audience.",
      "Lightweight single-page application for a fast, game-like experience.",
      "Focus on a clean, simple UI to keep the user engaged with the quiz."
    ]
  },
  {
    "id": 15,
    "title": "MyPlace",
    "description": "Engineered a AI-powered productivity web app, leveraging the Google Gemini API for features like note summarization and voice transcription, and offering full offline support.",
    "live_link": "https://my-place-a.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/my-place-a",
    "tech_stack": ["React", "Gemini API", "PWA", "Offline First"],
    "nerd_facts": [
      "Leverages the Google Gemini API for advanced AI features like text summarization.",
      "Built as a Progressive Web App (PWA) with service workers for full offline functionality.",
      "Includes voice-to-text transcription for hands-free note-taking.",
      "Uses IndexedDB for robust client-side storage, ensuring data is available offline."
    ]
  }
];

export default projects;