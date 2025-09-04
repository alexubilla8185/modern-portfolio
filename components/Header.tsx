import React from 'react';
import type { ActiveSection, Theme } from '@/types';
import { SunIcon, MoonIcon } from '@/components/Icons';

interface HeaderProps {
  activeSection: ActiveSection;
  onNavClick: (section: ActiveSection) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const NavItem: React.FC<{
  section: ActiveSection;
  label: string;
  activeSection: ActiveSection;
  onClick: (section: ActiveSection) => void;
}> = ({ section, label, activeSection, onClick }) => {
  const isActive = section === activeSection;
  return (
    <li>
      <button
        onClick={() => onClick(section)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
          isActive
            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100'
        }`}
      >
        {label}
      </button>
    </li>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, onNavClick, theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Alejandro Ubilla</h1>
          </div>
          <div className="flex items-center space-x-4">
            <nav>
              <ul className="flex items-center space-x-1 md:space-x-2">
                <NavItem section="summary" label="About" activeSection={activeSection} onClick={onNavClick} />
                <NavItem section="projects" label="Projects" activeSection={activeSection} onClick={onNavClick} />
                <NavItem section="resume" label="Resume" activeSection={activeSection} onClick={onNavClick} />
              </ul>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;