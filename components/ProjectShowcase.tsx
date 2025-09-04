import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, GitHubIcon, ExternalLinkIcon } from '@/components/Icons';
import projectsData from '../data/projects.js';

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

const ProjectShowcase: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const projectsLength = useMemo(() => projectsData.length, []);

    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % projectsLength);
    }, [projectsLength]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    }, [projectsLength]);
    
    const resetAutoplay = useCallback(() => {
        if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = setInterval(handleNext, 5000);
    }, [handleNext]);

    useEffect(() => {
        resetAutoplay();
        return () => {
            if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
        };
    }, [activeIndex, resetAutoplay]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                handlePrev();
                resetAutoplay();
            }
            if (e.key === 'ArrowRight') {
                handleNext();
                resetAutoplay();
            }
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [handlePrev, handleNext, resetAutoplay]);

    function getCardStyle(index: number) {
        const offset = (index - activeIndex + projectsLength) % projectsLength;
        const isActive = index === activeIndex;
        const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
        const isRight = (activeIndex + 1) % projectsLength === index;
        
        const horizontalTranslate = isMobile ? '48%' : '55%';

        if (isActive) {
            return { zIndex: 3, transform: `translateY(0px) scale(1)`, opacity: 1, filter: 'blur(0px)' };
        }
        if (isLeft) {
            return { zIndex: 2, transform: `translateX(-${horizontalTranslate}) translateY(0px) scale(0.8) rotateY(15deg)`, opacity: 0.6, filter: 'blur(4px)' };
        }
        if (isRight) {
            return { zIndex: 2, transform: `translateX(${horizontalTranslate}) translateY(0px) scale(0.8) rotateY(-15deg)`, opacity: 0.6, filter: 'blur(4px)' };
        }
        return { zIndex: 1, opacity: 0, pointerEvents: 'none', transform: `scale(0.7)` };
    }

    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">My Projects</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A selection of my work. Navigate with the arrows or your keyboard.
                </p>
            </div>

            <div className="relative w-full min-h-[520px] md:min-h-[550px] [perspective:1200px] flex items-center justify-center">
                {projectsData.map((project, index) => {
                    const gradient = gradients[project.id % gradients.length];
                    return (
                        <motion.div
                            key={project.id}
                            className="absolute w-full h-[480px] md:h-[500px] max-w-2xl"
                            initial={false}
                            animate={getCardStyle(index)}
                            transition={{ type: 'spring', stiffness: 200, damping: 25, mass: 0.8 }}
                        >
                            <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-zinc-700">
                                {/* Card Header */}
                                <div className={`relative h-1/3 bg-gradient-to-br ${gradient} flex items-center justify-center p-6 text-center`}>
                                     <div className="absolute inset-0 bg-black/20"></div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                        {project.title}
                                    </h3>
                                </div>
                                
                                {/* Card Body */}
                                <div className="p-6 flex-grow flex flex-col min-h-0">
                                    <div className="flex-grow overflow-y-auto pr-2 -mr-2">
                                        {renderMarkdown(project.description)}
                                    </div>
                                    
                                    <div className="flex-shrink-0 mt-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech_stack.map((tech) => (
                                                <span key={tech} className="bg-slate-100 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 text-xs font-semibold px-2.5 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-zinc-700 flex items-center space-x-4">
                                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold transition-colors" title="View Live Demo">
                                                <ExternalLinkIcon className="h-5 w-5" />
                                                Live Demo
                                            </a>
                                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-zinc-400 dark:hover:text-zinc-200 font-semibold transition-colors" title="View Source Code">
                                                <GitHubIcon className="h-5 w-5" />
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => { handlePrev(); resetAutoplay(); }}
                  className="absolute left-0 -translate-x-1/2 md:-translate-x-full top-1/2 -translate-y-1/2 z-30 p-3 bg-white/60 dark:bg-zinc-800/60 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-all"
                  aria-label="Previous project"
                >
                  <ChevronLeftIcon className="h-7 w-7 text-slate-800 dark:text-zinc-200" />
                </button>
                <button
                  onClick={() => { handleNext(); resetAutoplay(); }}
                  className="absolute right-0 translate-x-1/2 md:translate-x-full top-1/2 -translate-y-1/2 z-30 p-3 bg-white/60 dark:bg-zinc-800/60 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-all"
                  aria-label="Next project"
                >
                  <ChevronRightIcon className="h-7 w-7 text-slate-800 dark:text-zinc-200" />
                </button>
            </div>
        </section>
    );
};

export default ProjectShowcase;