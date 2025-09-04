import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.js';
import ProjectCard from '@/components/ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';

const gradients = [
    'from-rose-400 via-fuchsia-500 to-indigo-500', 'from-amber-400 via-orange-500 to-rose-500',
    'from-green-400 to-blue-500', 'from-purple-400 via-pink-500 to-red-500',
    'from-yellow-400 via-green-500 to-teal-600', 'from-sky-400 to-cyan-300',
    'from-red-500 to-orange-500', 'from-teal-500 to-cyan-600'
];

const ProjectShowcase: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleNext = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, []);

    const handlePrev = useCallback(() => {
        setIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    }, []);

    const handleCardClick = (cardIndex: number) => {
        setIndex(cardIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev]);

    const getCardStyle = (cardIndex: number) => {
        const offset = cardIndex - index;
        const total = projectsData.length;

        // Handle wrapping for a seamless loop
        let displayOffset = offset;
        if (offset > total / 2) displayOffset = offset - total;
        else if (offset < -total / 2) displayOffset = offset + total;
        
        const isVisible = Math.abs(displayOffset) <= 2; // Show 5 cards: center, 2 left, 2 right

        if (!isVisible) return { zIndex: 0, opacity: 0, scale: 0.5, pointerEvents: 'none' as const };
        
        const translateX = displayOffset * 60; // %
        const scale = 1 - Math.abs(displayOffset) * 0.15;
        const rotateY = displayOffset * -15;
        const zIndex = total - Math.abs(displayOffset);
        const filter = displayOffset !== 0 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)';
        const cursor = displayOffset !== 0 ? 'pointer' : 'default';

        return {
            transform: `perspective(1000px) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
            zIndex,
            filter,
            cursor,
            opacity: 1,
            pointerEvents: 'auto' as const,
        };
    };

    return (
        <section>
            <div className="text-center mb-8">
                {/* The h2 title has been removed for a cleaner mobile view */}
                <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A selection of projects I've been working on this year. Click the side cards or use the arrows to navigate.
                </p>
            </div>

            <div className="relative w-full h-[550px] flex items-center justify-center">
                <div className="relative h-full w-full max-w-5xl">
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className="absolute top-0 left-0 right-0 mx-auto"
                            style={{
                                width: '24rem', 
                                height: '30rem',
                            }}
                            initial={false}
                            animate={getCardStyle(i)}
                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                            onClick={() => handleCardClick(i)}
                        >
                            <ProjectCard
                                project={project}
                                gradient={gradients[project.id % gradients.length]}
                            />
                        </motion.div>
                    ))}
                </div>
                
                <button
                    onClick={handlePrev}
                    className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-[999] p-2 rounded-full bg-slate-100/50 hover:bg-slate-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Previous Project"
                >
                    <ChevronLeftIcon className="h-8 w-8 text-slate-700 dark:text-zinc-300" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-[999] p-2 rounded-full bg-slate-100/50 hover:bg-slate-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Next Project"
                >
                    <ChevronRightIcon className="h-8 w-8 text-slate-700 dark:text-zinc-300" />
                </button>
            </div>
        </section>
    );
};

export default ProjectShowcase;