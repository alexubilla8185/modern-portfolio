import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';
import projectsData from '../data/projects.js';

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
