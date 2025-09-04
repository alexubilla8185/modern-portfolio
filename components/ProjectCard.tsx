import React from 'react';
import type { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md dark:shadow-lg dark:shadow-zinc-950/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out flex flex-col">
      <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-zinc-400 text-base flex-grow mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.tech_stack.map((tech) => (
              <span key={tech} className="bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
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