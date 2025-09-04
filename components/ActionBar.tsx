import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/Icons';

interface ActionBarProps {
  onContactClick: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ onContactClick }) => {
  return (
    <footer className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div className="flex items-center gap-2 p-2 bg-slate-50/80 dark:bg-zinc-900/80 backdrop-blur-lg rounded-full shadow-lg border border-slate-200 dark:border-zinc-700">
        <a 
          href="https://github.com/alexubilla8185" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-300"
          aria-label="GitHub Profile"
          title="GitHub Profile"
        >
          <GitHubIcon className="h-6 w-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/alejandro-u-b34058342/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2 rounded-full text-slate-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
          title="LinkedIn Profile"
        >
          <LinkedInIcon className="h-6 w-6" />
        </a>
        
        <div className="h-6 w-px bg-slate-300 dark:bg-zinc-600 mx-1"></div>
        
        <button 
          onClick={onContactClick} 
          className="flex items-center p-2 pr-4 rounded-full text-slate-600 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400 transition-colors duration-300 font-medium"
          aria-label="Contact Me"
          title="Contact Me"
        >
          <MailIcon className="h-6 w-6" />
          <span className="hidden sm:inline ml-2 text-sm">Contact</span>
        </button>
      </div>
    </footer>
  );
};

export default ActionBar;
