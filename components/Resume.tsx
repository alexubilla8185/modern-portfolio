import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';
import { DownloadIcon, MailIcon, PhoneIcon, LocationIcon, SpinnerIcon } from '@/components/Icons';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 border-b-2 border-zinc-200 dark:border-zinc-700 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const Job: React.FC<{ job: JobType }> = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{job.title}</h4>
    <p className="text-md text-zinc-700 dark:text-zinc-200 font-medium">{job.company} | {job.duration}</p>
    <ul className="list-disc list-inside mt-2 text-zinc-700 dark:text-zinc-200 space-y-1">
      {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const Resume: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { name, contact, summary, experience, education, skills } = resumeData;

  const handleDownloadPdf = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'pt',
            format: 'letter',
        });

        // Constants for styling
        const MARGIN = 40;
        const PAGE_WIDTH = doc.internal.pageSize.getWidth();
        const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;
        const FONT_NORMAL = 10;
        const FONT_LARGE = 11;
        const FONT_HEADER = 24;
        const LINE_HEIGHT = 1.25;

        let y = MARGIN + 10;

        // --- Header ---
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(FONT_HEADER);
        doc.text(name, PAGE_WIDTH / 2, y, { align: 'center' });
        y += FONT_HEADER * 0.75;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(FONT_NORMAL);
        doc.text(`${contact.phone} | ${contact.email}`, PAGE_WIDTH / 2, y, { align: 'center' });
        y += FONT_NORMAL * LINE_HEIGHT * 2;

        // --- Section Title Helper ---
        const addSectionTitle = (title: string) => {
            y += 5;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(FONT_LARGE);
            doc.text(title.toUpperCase(), MARGIN, y);
            y += FONT_LARGE * 0.4; // Reduced space between title and line
            doc.setLineWidth(0.5);
            doc.line(MARGIN, y, MARGIN + CONTENT_WIDTH, y);
            y += FONT_NORMAL * LINE_HEIGHT * 1.2;
        };
        
        // --- Summary ---
        addSectionTitle('Summary');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(FONT_NORMAL);
        const summaryLines = doc.splitTextToSize(summary, CONTENT_WIDTH);
        doc.text(summaryLines, MARGIN, y);
        y += summaryLines.length * FONT_NORMAL * LINE_HEIGHT;

        // --- Work Experience ---
        addSectionTitle('Work Experience');
        experience.forEach((job, jobIndex) => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(FONT_LARGE);
            doc.text(job.title, MARGIN, y);
            y += FONT_LARGE * LINE_HEIGHT;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(FONT_NORMAL);
            doc.text(`${job.company} | ${job.duration}`, MARGIN, y);
            y += FONT_NORMAL * LINE_HEIGHT * 1.2;
            
            job.responsibilities.forEach(resp => {
                const respLines = doc.splitTextToSize(resp, CONTENT_WIDTH - 15);
                doc.text('•', MARGIN + 5, y);
                doc.text(respLines, MARGIN + 15, y);
                y += respLines.length * FONT_NORMAL * LINE_HEIGHT;
            });
            
            if (jobIndex < experience.length - 1) {
               y += FONT_NORMAL * LINE_HEIGHT;
            }
        });
        y += FONT_NORMAL * LINE_HEIGHT; // Added space after work experience section

        // --- Education ---
        addSectionTitle('Education');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(FONT_LARGE);
        doc.text(education.institution, MARGIN, y);
        y += FONT_LARGE * LINE_HEIGHT;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(FONT_NORMAL);
        doc.text(education.degree, MARGIN, y);
        y += FONT_NORMAL * LINE_HEIGHT * 2; // Added space after education section

        // --- Skills ---
        addSectionTitle('Skills');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(FONT_NORMAL);
        const skillsText = skills.join(', ');
        const skillsLines = doc.splitTextToSize(skillsText, CONTENT_WIDTH);
        doc.text(skillsLines, MARGIN, y);

        doc.save('Alejandro-Ubilla-Resume.pdf');

    } catch (error) {
        console.error("Failed to generate PDF:", error);
    } finally {
        setIsDownloading(false);
    }
  };


  return (
      <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
        <div className="flex justify-between items-start mb-8">
          <div className="flex-grow text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
            <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 text-sm text-zinc-700 dark:text-zinc-100">
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
          <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">{summary}</p>
        </ResumeSection>

        <ResumeSection title="Work Experience">
          {experience.map((job, index) => <Job key={index} job={job} />)}
        </ResumeSection>

        <ResumeSection title="Education">
          <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{education.institution}</h4>
          <p className="text-md text-zinc-700 dark:text-zinc-200">{education.degree}</p>
        </ResumeSection>

        <ResumeSection title="Skills">
           <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed">
            {skills.map((skill, index) => (
              <React.Fragment key={skill}>
                {skill}
                {index < skills.length - 1 && <span className="text-blue-600 dark:text-blue-400">, </span>}
              </React.Fragment>
            ))}
          </p>
        </ResumeSection>
      </section>
  );
};

export default Resume;