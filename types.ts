export interface Project {
  id: number;
  title: string;
  description: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
  date: string;
}

export type ActiveSection = 'projects' | 'resume';

export type Theme = 'light' | 'dark';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}