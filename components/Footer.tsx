import React from 'react';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-slate-600 dark:bg-zinc-900 dark:text-zinc-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Alejandro Ubilla. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="https://github.com/alexubilla8185" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/alejandro-u-b34058342/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:text-zinc-500 dark:hover:text-indigo-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;