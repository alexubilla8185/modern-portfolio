export interface Project {
  id: number;
  title: string;
  description: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
  nerd_facts?: string[];
}

export type ActiveSection = 'projects' | 'resume';

export type Theme = 'light' | 'dark';