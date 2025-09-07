import React, { useState, useEffect, Suspense, useRef } from 'react';
import Header from '@/components/Header';
import ExecutiveSummary from '@/components/ExecutiveSummary';
import ProjectShowcase from '@/components/ProjectShowcase';
import Resume from '@/components/Resume';
import Modal from '@/components/Modal';
import SectionNavigator from '@/components/SectionNavigator';
import Toast from '@/components/Toast';
import AppSpecifications from '@/components/AppSpecifications';
import { Theme, ActiveSection } from '@/types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveSection>('projects');
  const [isSpecsModalOpen, setSpecsModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = window.localStorage.getItem('theme') as Theme;
      return savedTheme || 'dark';
    }
    return 'dark';
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const navigatorRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  const [pulseProfile, setPulseProfile] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  useEffect(() => {
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    if (navigatorRef.current) {
        navigatorRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
  }, [activeView]);

  // This hook manages the scroll detection and triggers the pulse.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Trigger if scrolling up and near the top.
      if (lastScrollY.current > currentScrollY && currentScrollY < 100) {
        setPulseProfile(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Run only once.

  // This hook acts as a cooldown reset for the pulse animation.
  useEffect(() => {
    if (pulseProfile) {
      const timer = setTimeout(() => {
        setPulseProfile(false);
      }, 2000); // Duration should match the CSS animation.
      return () => clearTimeout(timer);
    }
  }, [pulseProfile]);


  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      <div className={`transition duration-300 ${isSpecsModalOpen ? 'blur-sm pointer-events-none' : ''}`}>
        <Header 
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <main className="flex-grow container mx-auto px-2 sm:px-6 lg:px-8 py-12">
          <ExecutiveSummary 
            onShowSpecs={() => { setSpecsModalOpen(true); setToastMessage(null); }} 
            onShowToast={setToastMessage} 
            pulseProfile={pulseProfile} 
          />
          <SectionNavigator 
            ref={navigatorRef}
            activeSection={activeView} 
            onSectionChange={setActiveView} 
          />
          <div key={activeView} className="mt-8 animate-fade-in">
            {activeView === 'projects' && <ProjectShowcase />}
            {activeView === 'resume' && <Resume />}
          </div>
        </main>
      </div>
      <Modal
        isOpen={isSpecsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        title="App Specifications"
      >
        <AppSpecifications />
      </Modal>
    </div>
  );
};

export default App;