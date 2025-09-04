import type { Project } from '@/types';

const projects: Project[] = [
  {
    "id": 1,
    "title": "TEKGUYZ",
    "description": "Professional tech services and solutions. Built with React, TypeScript, and Tailwind CSS, offering a seamless user experience for clients.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://tekguyz.com/",
    "live_link": "https://tekguyz.com/",
    "github_link": "https://github.com/alexubilla8185/tek-guyz-site",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    "id": 2,
    "title": "Real Stone & Granite",
    "description": "A sleek and professional business website for a stone and granite company, showcasing their products and services with a modern, clean design.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://real-stone.netlify.app/",
    "live_link": "https://real-stone.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/real-stone",
    "tech_stack": ["React", "Netlify", "Tailwind CSS"]
  },
  {
    "id": 3,
    "title": "FancyFam",
    "description": "An elegant e-commerce platform for family-oriented luxury goods, featuring a polished user interface and an intuitive shopping experience.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://fancyfam.com/",
    "live_link": "https://fancyfam.com/",
    "github_link": "https://github.com/alexubilla8185/fancy-fam",
    "tech_stack": ["React", "E-commerce", "Tailwind CSS"]
  },
  {
    "id": 4,
    "title": "Meet4Weed",
    "description": "A modern social networking platform for the cannabis community, designed to connect users and share experiences in a user-friendly environment.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://meet4weed.netlify.app/",
    "live_link": "https://meet4weed.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed",
    "tech_stack": ["React", "Social", "Netlify"]
  },
  {
    "id": 5,
    "title": "Transcription Assistant",
    "description": "An AI-powered tool designed to simplify the transcription process, offering fast and accurate text conversion from audio files.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://transcription-assistant.netlify.app/",
    "live_link": "https://transcription-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/transcription-assistant",
    "tech_stack": ["React", "AI", "Gemini API"]
  },
  {
    "id": 6,
    "title": "Reporter Assistant",
    "description": "A specialized AI tool for journalists and reporters, helping to organize notes, transcribe interviews, and streamline the content creation workflow.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://reporter-assistant.netlify.app/",
    "live_link": "https://reporter-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/reporter-assistant",
    "tech_stack": ["React", "AI", "Netlify"]
  },
  {
    "id": 7,
    "title": "GreenWaves of South Florida",
    "description": "Your vibrant online haven for cannabis enthusiasts in South Florida. Find local dispensaries, learn about strains, and connect with the community.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://greenwavesoflo.netlify.app/",
    "live_link": "https://greenwavesoflo.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/green-waves",
    "tech_stack": ["React", "Community", "Maps API"]
  },
  {
    "id": 8,
    "title": "Full Belly Sundays",
    "description": "Fighting hunger in Dade County by connecting food donations with those who need it most.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://full-belly-sundays.netlify.app/",
    "live_link": "https://full-belly-sundays.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/full-belly-sundays",
    "tech_stack": ["React", "Non-profit", "Netlify"]
  },
  {
    "id": 9,
    "title": "Web Check AI (In Development)",
    "description": "An AI-driven tool for analyzing and checking web content. Currently in development, exploring new ways to leverage AI for web diagnostics.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://web-check-ai.netlify.app/",
    "live_link": "https://web-check-ai.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/web-check-ai",
    "tech_stack": ["React", "AI", "Web Scraping"]
  },
  {
    "id": 10,
    "title": "DarkChat (Alpha)",
    "description": "Secure, peer-to-peer video chat that runs in your browser. It focuses on privacy, allowing encrypted video calls and file sharing by simply sharing a link.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://darkchat-alpha.netlify.app/",
    "live_link": "https://darkchat-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/dark-chat",
    "tech_stack": ["WebRTC", "React", "P2P", "Security"]
  },
  {
    "id": 11,
    "title": "Palm City Condo Getaway",
    "description": "Discover your ideal Florida getaway in this beautiful ground-floor condo, nestled in the heart of Palm City. Features 2 beds, 2 baths, and a stunning lake view.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://palm-city-condo.netlify.app",
    "live_link": "https://palm-city-condo.netlify.app",
    "github_link": "https://github.com/alexubilla8185/palm-city-condo",
    "tech_stack": ["React", "Real Estate", "Netlify"]
  },
  {
    "id": 12,
    "title": "AfterLife (Alpha)",
    "description": "An interactive memorial platform allowing users to create a personalized digital legacy. Loved ones can interact with the profile after they pass away.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://afterlife-alpha.netlify.app/",
    "live_link": "https://afterlife-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/after-life",
    "tech_stack": ["React", "AI", "Database"]
  },
    {
    "id": 13,
    "title": "Digital 'Burn Hole' Game",
    "description": "A digital party game where players take turns creating 'burn holes' on a surface. The player who makes the center object fall loses. A modern take on classic social games.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://spanish-jenga.netlify.app/",
    "live_link": "https://spanish-jenga.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/spanish-jenga",
    "tech_stack": ["React", "Game", "Netlify"]
  },
  {
    "id": 14,
    "title": "Meet4Weed (Legacy Version)",
    "description": "The original version of the cannabis social platform, demonstrating the project's evolution and foundational features.",
    "image": "https://image.thum.io/get/width/600/crop/400/https://meet4weed-v1.netlify.app/",
    "live_link": "https://meet4weed-v1.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed-v1",
    "tech_stack": ["React", "Netlify", "JavaScript"]
  }
];

export default projects;