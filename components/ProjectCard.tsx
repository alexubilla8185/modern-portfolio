import React from 'react';
import type { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon, TechIcon } from '@/components/Icons';

interface ProjectCardProps {
  project: Project;
  gradient: string;
}

// Simple Markdown-to-JSX parser
const renderMarkdown = (text: string) => {
  const lines = text.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeContent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre key={`code-${i}`} className="bg-slate-100 dark:bg-zinc-800 rounded-md p-3 my-2 text-xs overflow-x-auto">
            <code className="font-mono text-indigo-600 dark:text-indigo-400">{codeContent.trim()}</code>
          </pre>
        );
        codeContent = '';
      }
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock) {
      codeContent += line + '\n';
    } else {
       if (line.trim()) {
         elements.push(<p key={`line-${i}`} className="text-slate-600 dark:text-zinc-400 text-sm mb-2 last:mb-0 leading-relaxed">{line}</p>);
       }
    }
  }
  return elements;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, gradient }) => {
  return (
    <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-zinc-700 flex-shrink-0">
      {/* Card Header */}
      <div className={`relative h-1/3 bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-center`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          {project.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col min-h-0">
        <div className="relative flex-grow overflow-y-auto pr-2 -mr-2">
          {renderMarkdown(project.description)}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-zinc-900 pointer-events-none"></div>
        </div>

        <div className="flex-shrink-0 mt-4">
          <div className="flex flex-wrap gap-3 items-center">
            {project.tech_stack.map((tech) => (
              <div key={tech} className="relative group">
                 <TechIcon tech={tech} className="h-6 w-6 text-slate-500 dark:text-zinc-400" />
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-zinc-800 text-white text-xs font-semibold rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {tech}
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-700 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors" aria-label={`View live application for ${project.title}`}>
                <ExternalLinkIcon className="h-5 w-5" />
                App
              </a>
              <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 font-semibold transition-colors" aria-label={`View source code for ${project.title}`}>
                <GitHubIcon className="h-5 w-5" />
                Source
              </a>
            </div>
            <p className="text-xs text-slate-400 dark:text-zinc-500 font-medium flex-shrink-0">{project.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
