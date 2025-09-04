import React from 'react';
import type { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
}

const gradients = [
    'from-rose-400 via-fuchsia-500 to-indigo-500',
    'from-amber-400 via-orange-500 to-rose-500',
    'from-green-400 to-blue-500',
    'from-purple-400 via-pink-500 to-red-500',
    'from-yellow-400 via-green-500 to-teal-600',
    'from-sky-400 to-cyan-300',
    'from-red-500 to-orange-500',
    'from-teal-500 to-cyan-600'
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const gradient = gradients[project.id % gradients.length];
  
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-lg dark:shadow-zinc-950/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      
      {/* Card Header with Gradient */}
      <div className={`h-48 w-full bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-center relative`}>
         <div className="absolute inset-0 bg-black/20"></div> {/* Overlay for text readability */}
         <h3 className="text-2xl font-bold text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {project.title}
         </h3>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-slate-600 dark:text-zinc-400 text-base flex-grow mb-4">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span key={tech} className="bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Footer with links */}
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-zinc-700 flex items-center justify-end space-x-4">
          <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-300" title="View Live Demo">
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
          <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-300" title="View Source Code">
            <GitHubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
