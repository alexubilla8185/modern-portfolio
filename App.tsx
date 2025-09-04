import React, { useState, useEffect, Suspense, useRef } from 'react';
import Header from '@/components/Header';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import ProjectShowcase from '@/components/ProjectShowcase';
import Resume from '@/components/Resume';
import Modal from '@/components/Modal';
import ActionBar from '@/components/ActionBar';
import Chatbot from '@/components/Chatbot';
import SectionNavigator from '@/components/SectionNavigator';
import { Theme } from '@/types';

type View = 'projects' | 'resume';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('projects');
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isChatModalOpen, setChatModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as Theme;
      // If a theme is saved in localStorage, use it. Otherwise, default to 'dark'.
      return savedTheme || 'dark';
    }
    // Default for server-side rendering or environments without window object.
    return 'dark';
  });
  const navigatorRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true); // To prevent scroll on first load

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    // On subsequent view changes (not the initial render), scroll the navigator into view.
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    
    if (navigatorRef.current) {
        // scrollIntoView respects the `scroll-margin-top` property set on the element.
        navigatorRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
  }, [activeView]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ExecutiveSummary />
        <SectionNavigator 
          ref={navigatorRef}
          activeSection={activeView} 
          onSectionChange={setActiveView} 
        />
        <div key={activeView} className="mt-8 animate-fade-in">
          {activeView === 'projects' ? <ProjectShowcase /> : <Resume />}
        </div>
      </main>
      <ActionBar 
        onContactClick={() => setContactModalOpen(true)}
        onChatClick={() => setChatModalOpen(true)}
      />
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title="Get In Touch"
      >
        <Suspense fallback={<div className="p-8 text-center">Loading form...</div>}>
          <Contact />
        </Suspense>
      </Modal>
       <Modal
        isOpen={isChatModalOpen}
        onClose={() => setChatModalOpen(false)}
        title="AI Assistant"
      >
        <Chatbot />
      </Modal>
    </div>
  );
};

// Lazy load Contact component as it's in a modal
const Contact = React.lazy(() => import('@/components/Contact'));

export default App;