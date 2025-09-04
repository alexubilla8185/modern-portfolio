import React, { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';

const ProjectGrid: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('data/projects.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">Loading Projects...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <h2 className="text-2xl font-semibold text-red-700 dark:text-red-400">Could not load projects</h2>
        <p className="text-red-600 dark:text-red-500 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">My Projects</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in web development and design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;