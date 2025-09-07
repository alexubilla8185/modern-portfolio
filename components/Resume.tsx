import React, { useState, useRef } from 'react';
import jsPDF from 'jspdf';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';
import { DownloadIcon, MailIcon, PhoneIcon, LocationIcon, SpinnerIcon } from '@/components/Icons';

// This component is rendered off-screen with a fixed width for PDF generation.
const ResumeForPDF = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { name, contact, summary, experience, education, skills } = resumeData;
    return (
        <div ref={ref} className="bg-white text-zinc-900 font-sans p-[40pt]" style={{ width: '612pt' }}>
             <div className="mb-6">
                <h1 className="text-3xl font-bold text-zinc-900">{name}</h1>
                <p className="text-zinc-600 mt-1 text-base">
                  {contact.phone} &nbsp;|&nbsp; {contact.email}
                  {contact.location && <span> &nbsp;|&nbsp; {contact.location}</span>}
                </p>
            </div>
            
            <div className="mb-5">
                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Summary</h2>
                <p className="text-zinc-700 leading-relaxed text-base">{summary}</p>
            </div>

            <div className="mb-5">
                 <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-3">Work Experience</h2>
                 {experience.map((job, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                        <h3 className="text-lg font-semibold text-zinc-800">{job.title}</h3>
                        <p className="text-base text-zinc-600 font-medium">{job.company} | {job.duration}</p>
                        <ul className="list-disc list-inside mt-1 text-zinc-700 space-y-1 text-base">
                            {job.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                 ))}
            </div>

            <div className="mb-5">
                <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Education</h2>
                <h3 className="text-lg font-semibold text-zinc-800">{education.institution}</h3>
                <p className="text-base text-zinc-600">{education.degree}</p>
            </div>

            <div>
                 <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-zinc-300 pb-1 mb-2">Skills</h2>
                 <p className="text-zinc-700 leading-relaxed text-base">
                    {skills.join(', ')}
                 </p>
            </div>
        </div>
    );
});


const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-zinc-200 dark:border-zinc-700 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const Job: React.FC<{ job: JobType }> = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{job.title}</h4>
    <p className="text-md text-zinc-700 dark:text-zinc-300 font-medium">{job.company} | {job.duration}</p>
    <ul className="list-disc list-inside mt-2 text-zinc-700 space-y-1">
      {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const Resume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const { name, contact, summary, experience, education, skills } = resumeData;

  const handleDownloadPdf = async () => {
    if (isDownloading || !pdfRef.current) return;
    
    setIsDownloading(true);
    const content = pdfRef.current;
    
    try {
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: 'letter',
        });

        await doc.html(content, {
            callback: (doc) => {
                doc.save('Alejandro-Ubilla-Resume.pdf');
                setIsDownloading(false);
            },
            x: 0,
            y: 0,
        });
    } catch (error) {
        console.error("Failed to generate PDF:", error);
        setIsDownloading(false);
    }
  };


  return (
    <>
      <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-grow text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <PhoneIcon className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span>{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <MailIcon className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <span>{contact.email}</span>
                </a>
                {contact.location && (
                  <div className="flex items-center gap-2">
                      <LocationIcon className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>{contact.location}</span>
                  </div>
                )}
            </div>
          </div>
          <button
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-colors ml-4 flex-shrink-0"
              aria-label="Download Resume as PDF"
          >
              {isDownloading ? (
                <SpinnerIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              ) : (
                <DownloadIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              )}
          </button>
        </div>

        <ResumeSection title="Summary">
          <p className="text-zinc-700 leading-relaxed">{summary}</p>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          {experience.map((job, index) => <Job key={index} job={job} />)}
        </ResumeSection>

        <ResumeSection title="Education">
          <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{education.institution}</h4>
          <p className="text-md text-zinc-700 dark:text-zinc-300">{education.degree}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
           <p className="text-zinc-700 leading-relaxed">
            {skills.map((skill, index) => (
              <React.Fragment key={skill}>
                {skill}
                {index < skills.length - 1 && <span className="text-blue-600 dark:text-blue-400">, </span>}
              </React.Fragment>
            ))}
          </p>
        </ResumeSection>
      </section>
      
      {/* Hidden component, rendered off-screen, used for PDF generation */}
      <div className="absolute -left-[9999px] top-auto opacity-0 pointer-events-none" aria-hidden="true">
        <ResumeForPDF ref={pdfRef} />
      </div>
    </>
  );
};

export default Resume;