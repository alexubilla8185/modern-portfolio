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

const ContactPage = React.lazy(() => import('@/components/ContactPage'));

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
  const idleTriggeredRef = useRef(false);

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

  useEffect(() => {
    let activityTimer: number;

    const resetTimer = () => {
        clearTimeout(activityTimer);
        activityTimer = window.setTimeout(handleIdle, 10000);
    };

    const handleActivity = () => {
        resetTimer();
    };

    const handleIdle = () => {
        if (activeView === 'resume' && !idleTriggeredRef.current) {
            idleTriggeredRef.current = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setToastMessage("Psst... tap my picture 3 times to see the app's tech specs!");
            
            // Cleanup listeners after triggering
            window.removeEventListener('mousemove', handleActivity);
            window.removeEventListener('keydown', handleActivity);
            window.removeEventListener('scroll', handleActivity);
            window.removeEventListener('click', handleActivity);
        }
    };

    if (activeView === 'resume' && !idleTriggeredRef.current) {
        window.addEventListener('mousemove', handleActivity);
        window.addEventListener('keydown', handleActivity);
        window.addEventListener('scroll', handleActivity);
        window.addEventListener('click', handleActivity);
        resetTimer();
    }

    return () => {
        clearTimeout(activityTimer);
        window.removeEventListener('mousemove', handleActivity);
        window.removeEventListener('keydown', handleActivity);
        window.removeEventListener('scroll', handleActivity);
        window.removeEventListener('click', handleActivity);
    };
  }, [activeView]);

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
          <ExecutiveSummary onShowSpecs={() => setSpecsModalOpen(true)} />
          <SectionNavigator 
            ref={navigatorRef}
            activeSection={activeView} 
            onSectionChange={setActiveView} 
          />
          <div key={activeView} className="mt-8 animate-fade-in">
            {activeView === 'projects' && <ProjectShowcase />}
            {activeView === 'resume' && <Resume />}
            {activeView === 'contact' && (
              <Suspense fallback={
                <div className="text-center p-8">
                  <p className="text-zinc-500 dark:text-zinc-400">Loading Contact Form...</p>
                </div>
              }>
                <ContactPage />
              </Suspense>
            )}
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