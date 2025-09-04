export interface Project {
  id: number;
  title: string;
  description: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
}

export type ActiveSection = 'summary' | 'projects' | 'resume' | 'contact';

export type Theme = 'light' | 'dark';