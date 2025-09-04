import React from 'react';

const ExecutiveSummary: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <img
            className="h-40 w-40 rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-700"
            src="https://picsum.photos/seed/avatar/200"
            alt="Profile portrait of Alejandro Ubilla"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Hi, I'm Alejandro Ubilla</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Results-driven Technology Leader with 15+ years of experience defining strategic roadmaps, leading cross-functional teams, and spearheading initiatives to improve software quality, all to drive business growth and exceptional customer satisfaction.
          </p>
        </div>
      </div>
       <div className="mt-12 text-center">
         <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Core Competencies</h3>
         <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full">Project Management</span>
            <span className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-sm font-medium px-4 py-2 rounded-full">Product Management</span>
            <span className="bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300 text-sm font-medium px-4 py-2 rounded-full">Digital Strategy</span>
            <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 text-sm font-medium px-4 py-2 rounded-full">Agile Methodologies</span>
            <span className="bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300 text-sm font-medium px-4 py-2 rounded-full">Web & Mobile Development</span>
            <span className="bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300 text-sm font-medium px-4 py-2 rounded-full">Artificial Intelligence (AI)</span>
            <span className="bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 text-sm font-medium px-4 py-2 rounded-full">UI/UX</span>
            <span className="bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300 text-sm font-medium px-4 py-2 rounded-full">CI/CD</span>
         </div>
       </div>
    </section>
  );
};

export default ExecutiveSummary;