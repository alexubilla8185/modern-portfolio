import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import projectsData from '../data/projects.js';

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

const ProjectMarquee = () => (
    <>
        {projectsData.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                gradient={gradients[project.id % gradients.length]}
            />
        ))}
    </>
);

const ProjectShowcase: React.FC = () => {
    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">My Projects</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A selection of my work. Hover over the cards to pause the animation.
                </p>
            </div>

            <div className="relative group w-full overflow-hidden py-4">
                <div className="flex animate-marquee-slow group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                    <ProjectMarquee />
                    <ProjectMarquee aria-hidden="true" />
                </div>
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-zinc-950 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-zinc-950 pointer-events-none"></div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
