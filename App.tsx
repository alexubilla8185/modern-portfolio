import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import ProjectShowcase from '@/components/ProjectShowcase';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import { ActiveSection, Theme } from '@/types';


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<ActiveSection>('summary');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as Theme;
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'projects':
        return <ProjectShowcase />;
      case 'resume':
        return <Resume />;
      case 'contact':
        return <Contact />;
      case 'summary':
      default:
        return <ExecutiveSummary />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        activeSection={activeSection} 
        onNavClick={setActiveSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main key={activeSection} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;