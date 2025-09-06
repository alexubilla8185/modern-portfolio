import React from 'react';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-zinc-200 dark:border-zinc-700 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const Job: React.FC<{ job: JobType }> = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">{job.title}</h4>
    <p className="text-md text-zinc-700 dark:text-zinc-400 font-medium">{job.company} | {job.duration}</p>
    <ul className="list-disc list-inside mt-2 text-zinc-700 dark:text-zinc-400 space-y-1">
      {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const skillColors = [
    'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300',
    'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300',
    'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300',
    'bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-300',
    'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300',
    'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300',
    'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
];

const Resume: React.FC = () => {
  const { name, contact, summary, experience, education, skills } = resumeData;

  return (
    <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
        <p className="text-zinc-700 dark:text-zinc-400 mt-2">
          {contact.phone} &nbsp;|&nbsp; {contact.email} &nbsp;|&nbsp; {contact.location}
        </p>
      </div>

      <ResumeSection title="Summary">
        <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">{summary}</p>
      </ResumeSection>

      <ResumeSection title="Work Experience">
        {experience.map((job, index) => <Job key={index} job={job} />)}
      {/* FIX: Corrected a typo in the component's closing tag. It should be </ResumeSection> not </Resume-Section>. */}
      </ResumeSection>

      <ResumeSection title="Education">
        <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">{education.institution}</h4>
        <p className="text-md text-zinc-700 dark:text-zinc-400">{education.degree}</p>
      </ResumeSection>

      <ResumeSection title="Skills">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={skill} className={`text-sm font-medium px-3 py-1 rounded-full ${skillColors[index % skillColors.length]}`}>
              {skill}
            </span>
          ))}
        </div>
      </ResumeSection>
    </section>
  );
};

export default Resume;