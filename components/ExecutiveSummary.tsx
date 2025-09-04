import React, { useState, useRef } from 'react';
import Modal from '@/components/Modal';
import AppSpecifications from '@/components/AppSpecifications';

const competencies = [
  { name: 'Product Management', style: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
  { name: 'Project Management', style: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' },
  { name: 'Digital Strategy', style: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300' },
  { name: 'Agile', style: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300' },
  { name: 'QA', style: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300' },
  { name: 'Web & Mobile Development', style: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300' },
  { name: 'AI', style: 'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300' },
  { name: 'UI/UX', style: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300' },
  { name: 'CI/CD', style: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300' },
  { name: 'SDLC', style: 'bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-300' },
];

const CompetencyPills = () => (
  <>
    {competencies.map((comp) => (
      <span key={comp.name} className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full mx-2 ${comp.style}`}>
        {comp.name}
      </span>
    ))}
  </>
);

const ExecutiveSummary: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickTimestamps = useRef<number[]>([]);

  const handleImageClick = () => {
    const now = Date.now();
    clickTimestamps.current.push(now);
    clickTimestamps.current = clickTimestamps.current.filter(
      (timestamp) => now - timestamp < 1000
    );

    if (clickTimestamps.current.length >= 3) {
      setIsModalOpen(true);
      clickTimestamps.current = [];
    }
  };

  return (
    <>
      <section className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <button onClick={handleImageClick} className="rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-500/50" aria-label="Show app specifications easter egg">
              <img
                className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-700 cursor-pointer"
                src="https://media.licdn.com/dms/image/v2/D4E03AQFaoxjPhuKnAg/profile-displayphoto-scale_400_400/B4EZjxg19iIIAk-/0/1756398577327?e=1759968000&v=beta&t=4RV-UYTtAY5Q9t5Mk45IAwJ-Dhulcs6-0-_oZmVtXMk"
                alt="Profile portrait of Alejandro Ubilla"
              />
            </button>
          </div>
          <div className="flex-grow w-full overflow-hidden">
            <div className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-700 dark:text-zinc-300 mb-3">Core Competencies:</h3>
                <div className="relative group flex overflow-hidden">
                    <div className="flex animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                        <CompetencyPills />
                        <CompetencyPills aria-hidden="true" />
                    </div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 dark:from-zinc-950 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 dark:from-zinc-950 pointer-events-none"></div>
                </div>
              </div>
              <p className="text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
                Technology Leader with 15+ years of experience defining strategic roadmaps and leading high-performing teams. I bridge the gap between complex technology and human understanding, specializing in initiatives that improve product quality and leverage AI to drive business growth. My focus is on continuous improvement and delivering exceptional customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="App Specifications"
      >
        <AppSpecifications />
      </Modal>
    </>
  );
};

export default ExecutiveSummary;