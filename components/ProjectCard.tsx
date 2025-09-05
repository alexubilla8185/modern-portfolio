import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { GitHubIcon, ExternalLinkIcon, FlipIcon, CloseIcon, SparklesIcon } from '@/components/Icons';

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
          <pre key={`code-${i}`} className="bg-zinc-100 dark:bg-zinc-800 rounded-md p-3 my-2 text-xs overflow-x-auto">
            <code className="font-mono text-blue-600 dark:text-blue-400">{codeContent.trim()}</code>
          </pre>
        );
        codeContent = '';
      }
      inCodeBlock = !inCodeBlock;
    } else if (inCodeBlock) {
      codeContent += line + '\n';
    } else {
       if (line.trim()) {
         elements.push(<p key={`line-${i}`} className="text-zinc-700 dark:text-zinc-400 text-sm mb-2 last:mb-0 leading-relaxed">{line}</p>);
       }
    }
  }
  return elements;
};

const techColors = [
    'text-sky-600 dark:text-sky-400',
    'text-green-600 dark:text-green-400',
    'text-amber-600 dark:text-amber-400',
    'text-rose-600 dark:text-rose-400',
    'text-violet-600 dark:text-violet-400',
    'text-cyan-600 dark:text-cyan-400',
    'text-pink-600 dark:text-pink-400',
    'text-indigo-600 dark:text-indigo-400',
    'text-blue-600 dark:text-blue-400',
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, gradient }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the carousel from changing index
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-full" style={{ perspective: '1200px' }}>
      { /* @ts-ignore */ }
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.5 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of Card */}
        <div
          className="absolute w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-700"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Card Header */}
          <div className={`relative h-1/3 bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-center`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              {project.title}
            </h3>
            {project.nerd_facts && (
              <button
                onClick={handleFlip}
                className="absolute top-3 right-3 p-2 rounded-full text-white/80 hover:text-white hover:bg-black/30 transition-all z-20"
                aria-label="Flip card for tech details"
              >
                <FlipIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Card Body */}
          <div className="p-6 flex-grow flex flex-col min-h-0">
            <div className="relative flex-grow overflow-y-auto pr-2 -mr-2">
              {renderMarkdown(project.description)}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-zinc-900 pointer-events-none"></div>
            </div>

            <div className="flex-shrink-0 mt-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                {project.tech_stack.map((tech, index) => (
                  <span key={tech} className={`text-sm font-semibold ${techColors[index % techColors.length]}`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors" aria-label={`View live application for ${project.title}`}>
                    <ExternalLinkIcon className="h-5 w-5" />
                    App
                  </a>
                  <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 font-semibold transition-colors" aria-label={`View source code for ${project.title}`}>
                    <GitHubIcon className="h-5 w-5" />
                    Source
                  </a>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium flex-shrink-0">{project.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div
          className="absolute w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-700"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className={`relative flex-shrink-0 bg-gradient-to-br ${gradient} p-4 flex items-center justify-between`}>
            <h4 className="text-xl font-bold text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}>Tech Highlights</h4>
            <button
              onClick={handleFlip}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-black/30 transition-all z-20"
              aria-label="Return to project overview"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6 flex-grow overflow-y-auto">
            <ul className="space-y-4">
              {project.nerd_facts?.map((fact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <SparklesIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-400">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;