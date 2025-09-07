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

        const margin = 40;
        const pageHeight = doc.internal.pageSize.getHeight();
        const contentWidth = doc.internal.pageSize.getWidth() - margin * 2;
        let y = margin + 10;

        const checkPageBreak = (heightNeeded: number) => {
            if (y + heightNeeded > pageHeight - margin) {
                doc.addPage();
                y = margin;
            }
        };

        // --- Header ---
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(26);
        doc.text(name, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
        y += 30;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const contactInfo = `${contact.phone} | ${contact.email}${contact.location ? ` | ${contact.location}` : ''}`;
        doc.text(contactInfo, doc.internal.pageSize.getWidth() / 2, y, { align: 'center' });
        y += 30;

        // --- Section Title Helper ---
        const addSectionTitle = (title: string) => {
            checkPageBreak(40);
            y += 10;
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(12);
            doc.text(title.toUpperCase(), margin, y);
            y += 12;
            doc.setDrawColor(0);
            doc.setLineWidth(0.5);
            doc.line(margin, y, margin + contentWidth, y);
            y += 15;
        };
        
        // --- Summary ---
        addSectionTitle('Summary');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const summaryLines = doc.splitTextToSize(summary, contentWidth);
        checkPageBreak(summaryLines.length * 12);
        doc.text(summaryLines, margin, y);
        y += summaryLines.length * 12 + 10;

        // --- Work Experience ---
        addSectionTitle('Work Experience');
        experience.forEach(job => {
            const respLines = job.responsibilities
                .flatMap(r => doc.splitTextToSize(r, contentWidth - 15));

            const totalJobHeight = 14 + 14 + (respLines.length * 12) + 15;
            checkPageBreak(totalJobHeight);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(11);
            doc.text(job.title, margin, y);
            y += 14;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(10);
            doc.text(`${job.company} | ${job.duration}`, margin, y);
            y += 15;
            
            respLines.forEach(line => {
                checkPageBreak(12);
                doc.text('•', margin + 5, y);
                doc.text(line, margin + 15, y);
                y += 12;
            });
            y += 10;
        });

        // --- Education ---
        addSectionTitle('Education');
        checkPageBreak(40);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(education.institution, margin, y);
        y += 14;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(education.degree, margin, y);
        y += 25;

        // --- Skills ---
        addSectionTitle('Skills');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const skillsText = skills.join(', ');
        const skillsLines = doc.splitTextToSize(skillsText, contentWidth);
        checkPageBreak(skillsLines.length * 12);
        doc.text(skillsLines, margin, y);

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