export interface Project {
  id: number;
  title: string;
  description: string;
  live_link: string;
  github_link: string;
  tech_stack: string[];
  date: string;
  nerd_facts?: string[];
}

export type ActiveSection = 'projects' | 'resume' | 'contact';

export type Theme = 'light' | 'dark';

// FIX: Add ChatMessage interface for use in Chatbot component.
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
