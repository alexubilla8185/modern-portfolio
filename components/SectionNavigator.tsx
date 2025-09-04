import React from 'react';
import type { ActiveSection } from '@/types';

interface SectionNavigatorProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

const SectionNavigator: React.FC<SectionNavigatorProps> = ({ activeSection, onSectionChange }) => {
    const sections: { id: ActiveSection; label: string }[] = [
        { id: 'projects', label: 'Projects' },
        { id: 'resume', label: 'Resume' },
    ];

    return (
        <div className="flex justify-center my-8">
            <div className="p-1 bg-slate-100 dark:bg-zinc-800 rounded-full shadow-inner flex space-x-1">
                {sections.map(section => (
                    <button
                        key={section.id}
                        onClick={() => onSectionChange(section.id)}
                        className={`px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 ${
                            activeSection === section.id
                                ? 'bg-white dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shadow'
                                : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-200 dark:hover:bg-zinc-700'
                        }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SectionNavigator;
