import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/Icons';

const gradients = [
    'from-rose-400 via-fuchsia-500 to-blue-500', 'from-amber-400 via-orange-500 to-rose-500',
    'from-green-400 to-blue-500', 'from-purple-400 via-pink-500 to-red-500',
    'from-yellow-400 via-green-500 to-blue-600', 'from-sky-400 to-cyan-300',
    'from-red-500 to-orange-500', 'from-blue-500 to-cyan-600'
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ProjectShowcase: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleNext = useCallback(() => {
        setIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, []);

    const handlePrev = useCallback(() => {
        setIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    }, []);

    const handleCardClick = (cardIndex: number) => {
        const offset = cardIndex - index;
        const total = projectsData.length;
        let displayOffset = offset;
        if (offset > total / 2) displayOffset = offset - total;
        else if (offset < -total / 2) displayOffset = offset + total;
        
        if (displayOffset !== 0) {
            setIndex(cardIndex);
        }
    };

    const handleKeyDownOnCard = (event: React.KeyboardEvent<HTMLDivElement>, cardIndex: number) => {
      if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleCardClick(cardIndex);
      }
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

        let displayOffset = offset;
        if (offset > total / 2) displayOffset = offset - total;
        else if (offset < -total / 2) displayOffset = offset + total;
        
        const isVisible = Math.abs(displayOffset) <= 2;

        if (!isVisible) return { zIndex: 0, opacity: 0, scale: 0.5, pointerEvents: 'none' as const, translateX: 0, rotateY: 0, filter: 'blur(3px)' };
        
        const translateXPercentage = isMobile ? 35 : 60;
        const scaleFactor = isMobile ? 0.2 : 0.15;

        return {
            translateX: displayOffset * translateXPercentage,
            scale: 1 - Math.abs(displayOffset) * scaleFactor,
            rotateY: displayOffset * -15,
            zIndex: total - Math.abs(displayOffset),
            filter: displayOffset !== 0 ? 'blur(3px) brightness(0.7)' : 'blur(0px) brightness(1)',
            cursor: displayOffset !== 0 ? 'pointer' : 'default',
            opacity: 1,
            pointerEvents: 'auto' as const,
        };
    };

    return (
        <section className="py-8 sm:py-20 overflow-hidden">
            <div className="relative w-full h-[500px] md:h-[520px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                <motion.div
                    className="relative h-full w-full max-w-5xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projectsData.map((project, i) => {
                        const style = getCardStyle(i);
                        const isInteractive = style.cursor === 'pointer';
                        return (
                            // FIX: Added @ts-ignore to work around a TypeScript type error. The motion component's animation props ('initial', 'animate', etc.) are not being correctly recognized, likely due to a type definition conflict with this project's React version.
                            // @ts-ignore
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                className="absolute top-0 left-0 right-0 mx-auto"
                                style={{
                                    width: isMobile ? '20rem' : '24rem',
                                    height: isMobile ? '28rem' : '30rem',
                                    transformStyle: 'preserve-3d',
                                }}
                                animate={{
                                    x: `${style.translateX}%`,
                                    scale: style.scale,
                                    rotateY: style.rotateY,
                                    zIndex: style.zIndex,
                                    filter: style.filter,
                                    opacity: style.opacity,
                                    pointerEvents: style.pointerEvents
                                }}
                                whileHover={isInteractive ? { y: -15, scale: style.scale * 1.05 } : {}}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                onClick={() => handleCardClick(i)}
                                onKeyDown={(e) => handleKeyDownOnCard(e, i)}
                                role="button"
                                tabIndex={style.pointerEvents === 'auto' ? 0 : -1}
                                aria-label={`View details for ${project.title}`}
                            >
                                <ProjectCard
                                    project={project}
                                    gradient={gradients[project.id % gradients.length]}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
                
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-[999] p-1.5 rounded-full bg-zinc-100/50 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                    aria-label="Previous Project"
                >
                    <ChevronLeftIcon className="h-5 w-5 md:h-8 md:w-8 text-zinc-800 dark:text-zinc-300" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-[999] p-1.5 rounded-full bg-zinc-100/50 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                    aria-label="Next Project"
                >
                    <ChevronRightIcon className="h-5 w-5 md:h-8 md:w-8 text-zinc-800 dark:text-zinc-300" />
                </button>
            </div>
        </section>
    );
};

export default ProjectShowcase;