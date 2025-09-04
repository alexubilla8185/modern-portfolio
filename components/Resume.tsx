import React from 'react';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const Job: React.FC<{ job: JobType }> = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-slate-800 dark:text-zinc-200">{job.title}</h4>
    <p className="text-md text-slate-600 dark:text-zinc-400 font-medium">{job.company} | {job.duration}</p>
    <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-zinc-400 space-y-1">
      {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const Resume: React.FC = () => {
  const { name, contact, summary, experience, education, skills } = resumeData;

  const handleDownload = () => {
    const resumeContent = `
# ${name}
${contact.phone} | ${contact.email} | ${contact.location}

## Summary
${summary}

## Work Experience
${experience.map(job => `
### ${job.title}, ${job.company}
*${job.duration}*
${job.responsibilities.map(res => `- ${res}`).join('\n')}
`).join('\n')}
## Education
### ${education.institution}
${education.degree}

## Skills
${skills.join(', ')}
    `;

    const blob = new Blob([resumeContent.trim()], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alejandro_Ubilla_Resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-zinc-100">{name}</h2>
          <div className="mt-2 text-slate-500 dark:text-zinc-500 space-y-1 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-x-4">
             <p>{contact.phone}</p>
             <p className="hidden sm:inline">|</p>
             <p>{contact.email}</p>
             <p className="hidden sm:inline">|</p>
             <p>{contact.location}</p>
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300 shadow-sm mt-4 sm:mt-0"
        >
          Download
        </button>
      </div>

      <ResumeSection title="Summary">
        <p className="text-slate-600 dark:text-zinc-400">
          {summary}
        </p>
      </ResumeSection>
      
      <ResumeSection title="Work Experience">
        {experience.map((job) => <Job key={job.company} job={job} />)}
      </ResumeSection>

      <ResumeSection title="Education">
         <div>
          <h4 className="text-xl font-semibold text-slate-800 dark:text-zinc-200">{education.institution}</h4>
          <p className="text-md text-slate-600 dark:text-zinc-400">{education.degree}</p>
         </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <p className="text-slate-600 dark:text-zinc-400">
          {skills.join(', ')}
        </p>
      </ResumeSection>
    </section>
  );
};

export default Resume;
