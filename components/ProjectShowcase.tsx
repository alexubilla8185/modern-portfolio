import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';

// Using the same local data as ProjectGrid to ensure consistency
const projectsData: Project[] = [
  {
    "id": 1,
    "title": "DemBoyzBBQ",
    "description": "A delicious online destination for BBQ lovers. Explore menus, catering options, and more.",
    "live_link": "https://demboyzbbq.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/demboyz-bbq",
    "tech_stack": ["React", "Restaurant", "Netlify"]
  },
  {
    "id": 2,
    "title": "Full Belly Sundays",
    "description": "Fighting hunger in Dade County by connecting food donations with those who need it most.",
    "live_link": "https://full-belly-sundays.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/full-belly-sundays",
    "tech_stack": ["React", "Non-profit", "Netlify"]
  },
  {
    "id": 3,
    "title": "FancyFam",
    "description": "An elegant e-commerce platform for family-oriented luxury goods, featuring a polished user interface and an intuitive shopping experience.",
    "live_link": "https://fancyfam.com/",
    "github_link": "https://github.com/alexubilla8185/fancy-fam",
    "tech_stack": ["React", "E-commerce", "Tailwind CSS"]
  },
  {
    "id": 4,
    "title": "AfterLife (Alpha)",
    "description": "AfterLife is an interactive memorial platform allowing users to create a personalized digital legacy. Creators can add memories and pre-program responses, allowing loved ones to interact with their profile after they pass away",
    "live_link": "https://afterlife-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/after-life",
    "tech_stack": ["React", "AI", "Database"]
  },
  {
    "id": 5,
    "title": "GreenWaves of South Florida",
    "description": "Your vibrant online haven for cannabis enthusiasts in South Florida. Find local dispensaries, learn about strains, and connect with the community.",
    "live_link": "https://greenwavesoflo.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/green-waves",
    "tech_stack": ["React", "Community", "Maps API"]
  },
  {
    "id": 6,
    "title": "TEKGUYZ",
    "description": "Professional tech services and solutions. Built with React, TypeScript, and Tailwind CSS, offering a seamless user experience for clients.",
    "live_link": "https://tekguyz.com/",
    "github_link": "https://github.com/alexubilla8185/tek-guyz-site",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    "id": 7,
    "title": "Real Stone & Granite",
    "description": "A sleek and professional business website for a stone and granite company, showcasing their products and services with a modern, clean design.",
    "live_link": "https://real-stone.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/real-stone",
    "tech_stack": ["React", "Netlify", "Tailwind CSS"]
  },
  {
    "id": 8,
    "title": "Meet4Weed",
    "description": "A modern social networking platform for the cannabis community, designed to connect users and share experiences in a user-friendly environment.",
    "live_link": "https://meet4weed.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed",
    "tech_stack": ["React", "Social", "Netlify"]
  },
  {
    "id": 9,
    "title": "DarkChat (Alpha)",
    "description": "Secure, peer-to-peer video chat application that runs directly in your browser. It focuses on privacy and simplicity, allowing you to have encrypted video calls, text chats, and file sharing sessions just by sharing a link, with no sign-up required.",
    "live_link": "https://darkchat-alpha.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/dark-chat",
    "tech_stack": ["WebRTC", "React", "P2P", "Security"]
  },
  {
    "id": 10,
    "title": "Meet4Weed (Legacy Version)",
    "description": "The original version of the cannabis social platform, demonstrating the project's evolution and foundational features.",
    "live_link": "https://meet4weed-v1.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/meet-4-weed-v1",
    "tech_stack": ["React", "Netlify", "JavaScript"]
  },
  {
    "id": 11,
    "title": "Transcription Assistant",
    "description": "An AI-powered tool designed to simplify the transcription process, offering fast and accurate text conversion from audio files.",
    "live_link": "https://transcription-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/transcription-assistant",
    "tech_stack": ["React", "AI", "Gemini API"]
  },
  {
    "id": 12,
    "title": "Reporter Assistant",
    "description": "A specialized AI tool for journalists and reporters, helping to organize notes, transcribe interviews, and streamline the content creation workflow.",
    "live_link": "https://reporter-assistant.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/reporter-assistant",
    "tech_stack": ["React", "AI", "Netlify"]
  },
  {
    "id": 13,
    "title": "My Modern Resume",
    "description": "A modern, minimalist portfolio website built with React, TypeScript, and Tailwind CSS, inspired by Google's M3 Expressive design. It features sections for projects, a resume, and an executive summary.",
    "live_link": "https://my-modern-resume.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/my-modern-resume",
    "tech_stack": ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    "id": 14,
    "title": "Palm City Condo Getaway",
    "description": "Discover your ideal Florida getaway in this beautiful ground-floor condo, nestled in the heart of Palm City. Features 2 beds, 2 baths, and a stunning lake view",
    "live_link": "https://palm-city-condo.netlify.app",
    "github_link": "https://github.com/alexubilla8185/palm-city-condo",
    "tech_stack": ["React", "Real Estate", "Netlify"]
  },
  {
    "id": 15,
    "title": "Web Check AI",
    "description": "An AI-driven tool for analyzing and checking web content, leveraging AI for web diagnostics.",
    "live_link": "https://web-check-ai.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/web-check-ai",
    "tech_stack": ["React", "AI", "Web Scraping"]
  },
  {
    "id": 16,
    "title": "Digital 'Burn Hole' Game",
    "description": "A digital drinking game where players take turns creating 'burn holes' on a surface. The player who makes the center object fall loses. A modern, cool take on the classic party game.",
    "live_link": "https://spanish-jenga.netlify.app/",
    "github_link": "https://github.com/alexubilla8185/spanish-jenga",
    "tech_stack": ["React", "Game", "Netlify"]
  }
];

const ProjectShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  }, []);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  }, []);

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProject();
      } else if (e.key === 'ArrowRight') {
        nextProject();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevProject, nextProject]);

  return (
    <section className="flex flex-col w-full h-[calc(100vh-4rem)] py-6 sm:py-8">
      <div className="text-center mb-6 sm:mb-8 flex-shrink-0 px-4">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">My Projects</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
        </p>
      </div>

      <div className="relative w-full flex-grow flex items-center justify-center min-h-0">
        {/* Main carousel area */}
        <div className="relative w-full h-full perspective-1000">
          {projectsData.map((project, index) => {
            const offset = index - currentIndex;
            const direction = Math.sign(offset);

            let transform = '';
            let opacity = '0';
            let zIndex = 0;
            let filter = 'blur(4px)';
            
            if (offset === 0) {
              transform = 'translateX(0) scale(1)';
              opacity = '1';
              zIndex = 20;
              filter = 'blur(0px)';
            } else if (Math.abs(offset) === 1) {
              transform = `translateX(${direction * 60}%) scale(0.85)`;
              opacity = '0.6';
              zIndex = 10;
            } else {
              transform = `translateX(${direction * 60}%) scale(0.85)`;
              opacity = '0';
              zIndex = 0;
            }

            return (
              <div
                key={project.id}
                className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out"
                style={{
                  transform: transform,
                  opacity: opacity,
                  zIndex: zIndex,
                  filter: filter,
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                }}
              >
                <div className="w-full h-full max-w-sm sm:max-w-md md:max-w-lg mx-auto py-2">
                    <ProjectCard project={project} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-0 md:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/60 dark:bg-zinc-800/60 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-colors"
          aria-label="Previous project"
        >
          <ChevronLeftIcon className="h-6 w-6 text-slate-800 dark:text-zinc-200" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 md:-right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/60 dark:bg-zinc-800/60 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-colors"
          aria-label="Next project"
        >
          <ChevronRightIcon className="h-6 w-6 text-slate-800 dark:text-zinc-200" />
        </button>
      </div>
      
      {/* Indicator Dots */}
      <div className="flex justify-center space-x-2 mt-6 flex-shrink-0 pb-2">
        {projectsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-zinc-600 hover:bg-slate-400 dark:hover:bg-zinc-500'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;