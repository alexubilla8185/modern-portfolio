import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Modal from '@/components/Modal';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@/components/Icons';

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
    const [isFilterModalOpen, setFilterModalOpen] = useState(false);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
    
    const allTechs = useMemo(() => {
        const techSet = new Set<string>();
        projectsData.forEach(p => p.tech_stack.forEach(t => techSet.add(t)));
        return Array.from(techSet).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedTechs.length === 0) {
            return projectsData;
        }
        return projectsData.filter(project =>
            selectedTechs.every(tech => project.tech_stack.includes(tech))
        );
    }, [selectedTechs]);

    useEffect(() => {
        setIndex(0);
    }, [filteredProjects]);

    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleNext = useCallback(() => {
        if (filteredProjects.length === 0) return;
        setIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
    }, [filteredProjects.length]);

    const handlePrev = useCallback(() => {
        if (filteredProjects.length === 0) return;
        setIndex((prevIndex) => (prevIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }, [filteredProjects.length]);

    const handleCardClick = (cardIndex: number) => {
        const offset = cardIndex - index;
        const total = filteredProjects.length;
        let displayOffset = offset;
        if (offset > total / 2) displayOffset = offset - total;
        else if (offset < -total / 2) displayOffset = offset + total;
        
        if (displayOffset !== 0) {
            setIndex(cardIndex);
        }
    };
    
    const handleTechChange = (tech: string) => {
        setSelectedTechs(prev =>
            prev.includes(tech)
                ? prev.filter(t => t !== tech)
                : [...prev, tech]
        );
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
        const total = filteredProjects.length;

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
    
    const filterCountText = selectedTechs.length > 0 ? `(${filteredProjects.length}/${projectsData.length})` : '';

    return (
        <section className="overflow-hidden">
            <div className="text-center mb-8 md:mb-12 px-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">Project Showcase</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-zinc-600 dark:text-zinc-200">
                    A curated selection of my work. Use your arrow keys or click the cards to explore each project.
                </p>
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setFilterModalOpen(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-full text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                        aria-label="Filter projects by technology"
                    >
                        <SearchIcon className="h-5 w-5" />
                        <span>Filter Projects {filterCountText}</span>
                    </button>
                </div>
            </div>

            {filteredProjects.length > 0 ? (
                <div className="relative w-full h-[500px] md:h-[520px] flex items-center justify-center" style={{ perspective: '1000px' }}>
                    {/* @ts-ignore */}
                    <motion.div
                        className="relative h-full w-full max-w-5xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredProjects.map((project, i) => {
                            const style = getCardStyle(i);
                            const isInteractive = style.cursor === 'pointer';
                            return (
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
                        <ChevronLeftIcon className="h-5 w-5 md:h-8 md:w-8 text-zinc-800 dark:text-zinc-100" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-[999] p-1.5 rounded-full bg-zinc-100/50 hover:bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                        aria-label="Next Project"
                    >
                        <ChevronRightIcon className="h-5 w-5 md:h-8 md:w-8 text-zinc-800 dark:text-zinc-100" />
                    </button>
                </div>
            ) : (
                <div className="h-[500px] flex flex-col items-center justify-center text-center px-4">
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">No Projects Found</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-300">Try removing some filters to see more projects.</p>
                    <button
                        onClick={() => setSelectedTechs([])}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}
            
            <Modal
                isOpen={isFilterModalOpen}
                onClose={() => setFilterModalOpen(false)}
                title="Filter by Technology"
            >
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                        Showing projects with all selected technologies.
                    </p>
                    {selectedTechs.length > 0 && (
                        <button 
                            onClick={() => setSelectedTechs([])}
                            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
                        >
                            Clear All
                        </button>
                    )}
                </div>
                <div className="flex flex-wrap gap-3">
                    {allTechs.map(tech => (
                        <button
                            key={tech}
                            onClick={() => handleTechChange(tech)}
                            className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 ${
                            selectedTechs.includes(tech)
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                            }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </Modal>
        </section>
    );
};

export default ProjectShowcase;