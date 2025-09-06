import React, { useState } from 'react';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';
import Modal from '@/components/Modal';
import { FullscreenIcon } from '@/components/Icons';

// This is the NEW component for the modal preview, styled to look like a document.
const ResumePreview: React.FC = () => {
    const { name, contact, summary, experience, education, skills } = resumeData;
    return (
        <div className="bg-white text-zinc-900 font-sans p-6 sm:p-8 md:p-10 max-w-4xl mx-auto" id="resume-preview-content">
             <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">{name}</h1>
                <p className="text-zinc-600 mt-1 text-sm sm:text-base">
                  {contact.phone} &nbsp;|&nbsp; {contact.email} &nbsp;|&nbsp; {contact.location}
                </p>
            </div>
            
            <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Summary</h2>
                <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">{summary}</p>
            </div>

            <div className="mb-5">
                 <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-3">Work Experience</h2>
                 {experience.map((job, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <h3 className="text-lg font-semibold text-zinc-800">{job.title}</h3>
                        <p className="text-sm text-zinc-600 font-medium">{job.company} | {job.duration}</p>
                        <ul className="list-disc list-inside mt-1 text-zinc-700 space-y-1 text-sm sm:text-base">
                            {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                 ))}
            </div>

            <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Education</h2>
                <h3 className="text-lg font-semibold text-zinc-800">{education.institution}</h3>
                <p className="text-sm text-zinc-600">{education.degree}</p>
            </div>

            <div>
                 <h2 className="text-xl sm:text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Skills</h2>
                 <p className="text-zinc-700 leading-relaxed text-sm sm:text-base">
                    {skills.join(' · ')}
                 </p>
            </div>
        </div>
    );
};

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
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const { name, contact, summary, experience, education, skills } = resumeData;

  return (
    <>
      <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
        <div className="flex justify-between items-start mb-8 text-center sm:text-left">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
            <p className="text-zinc-700 dark:text-zinc-400 mt-2">
              {contact.phone} &nbsp;|&nbsp; {contact.email} &nbsp;|&nbsp; {contact.location}
            </p>
          </div>
          <button
              onClick={() => setPreviewOpen(true)}
              className="hidden sm:block p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-colors"
              aria-label="Open document preview"
          >
              <FullscreenIcon className="h-6 w-6" />
          </button>
        </div>

        <ResumeSection title="Summary">
          <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed">{summary}</p>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          {experience.map((job, index) => <Job key={index} job={job} />)}
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

        <div className="sm:hidden mt-8 flex justify-center">
            <button
                onClick={() => setPreviewOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-colors"
            >
                <FullscreenIcon className="h-5 w-5" />
                View Full Resume
            </button>
        </div>
      </section>

      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setPreviewOpen(false)}
        title="Resume Preview"
      >
        <ResumePreview />
      </Modal>
    </>
  );
};

export default Resume;