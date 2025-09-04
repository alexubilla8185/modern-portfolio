export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
}

export type ActiveSection = 'summary' | 'projects' | 'resume';

export type Theme = 'light' | 'dark';