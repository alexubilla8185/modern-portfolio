import type { Project } from '@/types';

const projects: Project[] = [
  {
    "id": 1,
    "title": "Portfolio Website",
    "description": "A dynamic, single-page portfolio built from scratch to showcase my skills in modern web development, featuring an interactive project carousel and a clean, responsive UI.",
    "live_link": "https://my-modern-resume.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/my-modern-resume",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"],
    "date": "July 2025",
    "nerd_facts": [
      "Built without a bundler using importmaps for native ES module resolution.",
      "Features a 3D carousel with spring physics via Framer Motion.",
      "Dynamically generates a PDF resume on-the-fly in the browser.",
      "Fully accessible, with ARIA attributes and keyboard navigation throughout.",
      "Persistent light/dark theme using localStorage and CSS classes on the HTML root."
    ]
  },
  {
    "id": 2,
    "title": "Interactive 3D Carousel",
    "description": "A reusable React component for showcasing content in an engaging, 3D animated carousel. This portfolio uses it to display projects!",
    "live_link": "#",
    "github_link": "https://github.com/alexubilla8185/my-modern-resume/blob/main/components/ProjectShowcase.tsx",
    "tech_stack": ["React", "TypeScript", "Framer Motion"],
    "date": "June 2025",
    "nerd_facts": [
      "Uses CSS 'perspective' for the core 3D spatial effect.",
      "Calculates card positions and transformations in JavaScript for precise control.",
      "Fully accessible via keyboard navigation (left/right arrow keys).",
      "Responsive design adjusts card sizes and positioning for mobile screens.",
      "Uses spring physics from Framer Motion for a natural, fluid feel."
    ]
  },
  {
    "id": 3,
    "title": "DemBoyzBBQ",
    "description": "Developed a responsive and appetizing website for a local BBQ restaurant, driving online engagement and providing customers with easy access to menus, catering info, and location details.",
    "live_link": "https://demboyzbbq.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/demboyz-bbq",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "date": "May 2025",
    "nerd_facts": [
      "Fully responsive design adapts from mobile menus to large desktop displays.",
      "Optimized for fast load times to prevent losing hungry customers.",
      "Clean UI focuses user attention on the food and contact info.",
      "Built as a static site for peak performance, security, and low hosting costs."
    ]
  },
  {
    "id": 4,
    "title": "Full Belly Sundays",
    "description": "Built a web application for a non-profit to streamline the process of connecting food donations with local communities in need, featuring an intuitive interface for volunteers and recipients.",
    "live_link": "https://full-belly-sundays.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/full-belly-sundays",
    "tech_stack": ["React", "Firebase", "Maps API"],
    "date": "April 2025",
    "nerd_facts": [
      "Integrates with Firebase for real-time data synchronization.",
      "Uses Google Maps API to visualize donation and distribution points.",
      "Secure authentication for volunteers and administrators.",
      "Firestore security rules ensure data integrity and user privacy."
    ]
  },
  {
    "id": 5,
    "title": "FancyFam",
    "description": "A modern and interactive digital business card platform, designed to make a memorable first impression with a clean, elegant interface and seamless sharing capabilities.",
    "live_link": "https://fancyfam.com/",
    "github_link": "https://github.com/alexubilla8185/fancy-fam",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "date": "March 2025",
    "nerd_facts": [
      "Focus on elegant animations and micro-interactions for a premium feel.",
      "Designed for effortless sharing on mobile devices.",
      "Lightweight and fast, ensuring a great first impression.",
      "Built with a mobile-first philosophy for optimal on-the-go use."
    ]
  },
  {
    "id": 6,
    "title": "AfterLife",
    "description": "Engineered an AI-powered digital memorial platform where users can create a personalized legacy. Implemented a feature allowing loved ones to interact with memories and AI-generated responses.",
    "live_link": "https://afterlife-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/after-life",
    "tech_stack": ["React", "Gemini API", "Firebase"],
    "date": "February 2025",
    "nerd_facts": [
      "Leverages the Gemini API for generative AI responses.",
      "Uses Firebase for secure storage of user data and memories.",
      "Real-time database features allow for instant updates across clients.",
      "Carefully crafted system prompts guide AI responses with sensitivity and respect."
    ]
  },
  {
    "id": 7,
    "title": "GreenWave",
    "description": "Created a community hub for cannabis enthusiasts in South Florida, integrating Google Maps API to help users find local dispensaries and discover product information.",
    "live_link": "https://greenwavesoflo.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/green-waves",
    "tech_stack": ["React", "Maps API", "Community"],
    "date": "January 2025",
    "nerd_facts": [
      "Uses Google Maps API for location-based search and discovery.",
      "Built with a community-first approach to UI/UX.",
      "Scalable architecture to handle a growing user base.",
      "Efficiently renders numerous map markers without performance degradation."
    ]
  },
  {
    "id": 8,
    "title": "TEKGUYZ",
    "description": "Launched the official business website for a tech consultancy, establishing a professional online presence to attract clients and showcase services in DevOps, software development, and strategy.",
    "live_link": "https://tekguyz.com/",
    "github_link": "https://github.com/alexubilla8185/tek-guyz-site",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"],
    "date": "December 2025",
    "nerd_facts": [
      "Static site generation for maximum performance and security.",
      "SEO-optimized to attract new clients through organic search.",
      "Clean, professional design reflects the company's brand.",
      "Minimalist aesthetic focuses on the company's value proposition."
    ]
  },
  {
    "id": 9,
    "title": "Real Stone & Granite",
    "description": "Delivered a sleek, professional website for a local stone and granite business, building a digital showroom to showcase their products and attract new customers.",
    "live_link": "https://real-stone.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/real-stone",
    "tech_stack": ["React", "Tailwind CSS", "UI/UX Design"],
    "date": "November 2025",
    "nerd_facts": [
      "Features a high-resolution image gallery to showcase products.",
      "Mobile-first design ensures a great experience for contractors on-site.",
      "Contact forms are integrated for easy lead generation.",
      "Lazy loading for gallery images improves initial page speed."
    ]
  },
  {
    "id": 10,
    "title": "Meet4Weed",
    "description": "Developed a social networking proof-of-concept for the cannabis community, designed with real-time features to connect users and facilitate sharing in a user-friendly, modern environment.",
    "live_link": "https://meet4weed.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed",
    "tech_stack": ["React", "Socket.IO", "Firebase"],
    "date": "October 2025",
    "nerd_facts": [
      "Utilizes Socket.IO for real-time chat and notifications.",
      "Firebase backend for user authentication and data storage.",
      "Proof-of-concept for a scalable social networking platform.",
      "Manages real-time connection state for 'online' user presence indicators."
    ]
  },
  {
    "id": 11,
    "title": "Dark Trap",
    "description": "A dark, techy, cyberpunk-themed peer-to-peer video chat application using WebRTC for secure and direct communication.",
    "live_link": "https://darktrap.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/darktrap",
    "tech_stack": ["WebRTC", "React", "P2P"],
    "date": "September 2025",
    "nerd_facts": [
      "Employs WebRTC for direct peer-to-peer video streaming, eliminating server middlemen.",
      "End-to-end encryption is inherent to the WebRTC architecture, ensuring privacy.",
      "Signaling for the initial peer handshake is managed via a lightweight WebSocket server.",
      "Focuses on a minimalist, yet stylized, interface for secure communication."
    ]
  },
  {
    "id": 13,
    "title": "Transcription Assistant",
    "description": "Developed an AI-powered tool that leverages the Gemini API to provide fast and accurate audio-to-text transcription, streamlining workflows for professionals.",
    "live_link": "https://transcription-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/transcription-assistant",
    "tech_stack": ["React", "Gemini API", "Web Audio API"],
    "date": "July 2025",
    "nerd_facts": [
      "Integrates the Web Audio API to capture microphone input in the browser.",
      "Streams audio data to the Gemini API for real-time transcription.",
      "The UI provides immediate feedback as the text is being transcribed.",
      "Handles audio data chunking to comply with API limitations."
    ]
  },
  {
    "id": 14,
    "title": "Reporter Assistant",
    "description": "Created a specialized AI tool for journalists to organize notes, transcribe interviews, and streamline their content workflow, boosting productivity and accuracy.",
    "live_link": "https://reporter-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/reporter-assistant",
    "tech_stack": ["React", "Gemini API", "NLP"],
    "date": "June 2025",
    "nerd_facts": [
      "Tailored Gemini API prompts for journalistic use-cases like summarizing notes.",
      "Focuses on a workflow-oriented user experience for productivity.",
      "Natural Language Processing (NLP) is at the core of its features.",
      "Provides a distraction-free writing and editing environment."
    ]
  },
  {
    "id": 15,
    "title": "Palm City Condo Getaway",
    "description": "Designed and launched a promotional single-page website for a vacation rental property, featuring an image gallery and booking information to attract potential renters.",
    "live_link": "https://palm-city-condo.netlify.app",
    "github_link": "https://github.com/alexubilla8185/palm-city-condo",
    "tech_stack": ["React", "Tailwind CSS", "Real Estate"],
    "date": "May 2025",
    "nerd_facts": [
      "Single-page application design for a fast, seamless user experience.",
      "Image-heavy design optimized for quick loading and visual appeal.",
      "Clear calls-to-action to drive booking inquiries from potential renters.",
      "SEO-friendly markup to improve search engine ranking."
    ]
  },
  {
    "id": 17,
    "title": "Spanish Jenga",
    "description": "Developed a 3D digital party game with physics-based interactions. Players take turns removing blocks from a tower until it collapses in this modern take on a classic.",
    "live_link": "https://spanish-jenga.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/spanish-jenga",
    "tech_stack": ["React", "Three.js", "Game Logic"],
    "date": "March 2025",
    "nerd_facts": [
      "Uses Three.js for 3D rendering and a physics library for simulation.",
      "Complex game logic handles block removal and tower stability checks.",
      "Interactive and fun, showcasing skills beyond typical CRUD web apps.",
      "Raycasting is used to detect which block the player is interacting with."
    ]
  }
];

export default projects;