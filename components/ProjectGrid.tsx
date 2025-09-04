import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';
import projectsData from '../data/projects.js';

const ProjectGrid: React.FC = () => {
  if (!projectsData || !Array.isArray(projectsData)) {
    return (
      <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <h2 className="text-2xl font-semibold text-red-700 dark:text-red-400">Could not load projects</h2>
        <p className="text-red-600 dark:text-red-500 mt-2">There was an issue loading the project data.</p>
      </div>
    );
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">My Projects</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
