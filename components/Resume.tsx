import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { resumeData } from '@/data/resume';
import type { Job as JobType } from '@/data/resume';
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, SpinnerIcon } from '@/components/Icons';

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
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownload = () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    // Use a small timeout to allow React to re-render the button into its loading state
    // before the browser's main thread gets blocked by the synchronous PDF generation.
    setTimeout(() => {
      try {
        const doc = new jsPDF('p', 'pt', 'a4');
        const margin = 40;
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const contentWidth = pageWidth - margin * 2;
        let y = margin;
        
        const FONT_SIZE_NORMAL = 10;
        const FONT_SIZE_HEADER = 12;
        const FONT_SIZE_TITLE = 11;
        const FONT_SIZE_NAME = 24;
        const LINE_HEIGHT_NORMAL = 1.2 * FONT_SIZE_NORMAL;
        const LINE_HEIGHT_TITLE = 1.2 * FONT_SIZE_TITLE;

        const checkPageBreak = (neededHeight: number) => {
            if (y + neededHeight > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
        };

        // --- Header ---
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(FONT_SIZE_NAME);
        doc.setTextColor('#1A202C'); // Dark gray, almost black
        doc.text(name, margin, y);
        y += FONT_SIZE_NAME * 1.2;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(FONT_SIZE_NORMAL);
        doc.setTextColor('#4A5568'); // Medium gray
        const contactLine = `${contact.phone} | ${contact.email} | ${contact.location}`;
        doc.text(contactLine, margin, y);
        y += LINE_HEIGHT_NORMAL * 2;
        
        // --- Section Renderer ---
        const renderSection = (title: string, content: () => void) => {
            checkPageBreak(FONT_SIZE_HEADER + 5 + 15); // Title, line, gap
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(FONT_SIZE_HEADER);
            doc.setTextColor('#2D3748');
            doc.text(title.toUpperCase(), margin, y);
            y += 5;
            doc.setDrawColor('#CBD5E0'); // Lighter gray for line
            doc.line(margin, y, pageWidth - margin, y);
            y += 15;
            content();
        };

        // --- Summary ---
        renderSection('Summary', () => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(FONT_SIZE_NORMAL);
            doc.setTextColor('#4A5568');
            const summaryLines = doc.splitTextToSize(summary, contentWidth);
            checkPageBreak(summaryLines.length * LINE_HEIGHT_NORMAL);
            doc.text(summaryLines, margin, y);
            y += summaryLines.length * LINE_HEIGHT_NORMAL + 20;
        });

        // --- Work Experience ---
        renderSection('Work Experience', () => {
            experience.forEach(job => {
                const neededHeight = LINE_HEIGHT_TITLE + LINE_HEIGHT_NORMAL + (job.responsibilities.length * LINE_HEIGHT_NORMAL * 2) + 15;
                checkPageBreak(neededHeight);

                doc.setFont('helvetica', 'bold');
                doc.setFontSize(FONT_SIZE_TITLE);
                doc.setTextColor('#1A202C');
                doc.text(job.title, margin, y);
                y += LINE_HEIGHT_TITLE;

                doc.setFont('helvetica', 'normal');
                doc.setFontSize(FONT_SIZE_NORMAL);
                doc.setTextColor('#4A5568');
                doc.text(`${job.company} | ${job.duration}`, margin, y);
                y += LINE_HEIGHT_NORMAL * 1.5;
                
                job.responsibilities.forEach(res => {
                    const resLines = doc.splitTextToSize(res, contentWidth - 10);
                    checkPageBreak(resLines.length * LINE_HEIGHT_NORMAL);
                    doc.text('•', margin + 5, y);
                    doc.text(resLines, margin + 15, y);
                    y += resLines.length * LINE_HEIGHT_NORMAL;
                });
                y += 15;
            });
        });

        // --- Education ---
        renderSection('Education', () => {
            checkPageBreak(LINE_HEIGHT_TITLE + LINE_HEIGHT_NORMAL + 25);
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(FONT_SIZE_TITLE);
            doc.setTextColor('#1A202C');
            doc.text(education.institution, margin, y);
            y += LINE_HEIGHT_TITLE;
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(FONT_SIZE_NORMAL);
            doc.setTextColor('#4A5568');
            doc.text(education.degree, margin, y);
            y += 25;
        });
        
        // --- Skills ---
        renderSection('Skills', () => {
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(FONT_SIZE_NORMAL);
            doc.setTextColor('#4A5568');
            const skillsText = skills.join(', ');
            const skillsLines = doc.splitTextToSize(skillsText, contentWidth);
            checkPageBreak(skillsLines.length * LINE_HEIGHT_NORMAL);
            doc.text(skillsLines, margin, y);
        });

        doc.save('Alejandro_Ubilla_Resume.pdf');
      } finally {
        setIsGeneratingPdf(false);
      }
    }, 10);
  };

  return (
    <section className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 p-8 md:p-12 shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">{name}</h2>
          <p className="text-xl text-zinc-700 dark:text-zinc-400">Technology Leader</p>
        </div>
        <button
          onClick={handleDownload}
          disabled={isGeneratingPdf}
          className="mt-4 sm:mt-0 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {isGeneratingPdf ? <SpinnerIcon className="h-5 w-5" /> : <DownloadIcon className="h-5 w-5" />}
          {isGeneratingPdf ? 'Generating...' : 'Download PDF'}
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 mb-8">
        <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <MailIcon className="h-5 w-5" /> {contact.email}
        </a>
        <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600" aria-hidden="true">|</span>
        <a href="https://www.linkedin.com/in/alejandro-ubilla/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <LinkedInIcon className="h-5 w-5" /> LinkedIn
        </a>
        <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600" aria-hidden="true">|</span>
        <a href="https://github.com/alexubilla8185" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <GitHubIcon className="h-5 w-5" /> GitHub
        </a>
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
    </section>
  );
};

export default Resume;
