import React from 'react';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2 mb-4">{title}</h3>
    {children}
  </div>
);

const Job: React.FC<{ title: string; company: string; duration: string; children: React.ReactNode }> = ({ title, company, duration, children }) => (
  <div className="mb-6">
    <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">{title}</h4>
    <p className="text-md text-slate-600 dark:text-slate-400 font-medium">{company} | {duration}</p>
    <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-400 space-y-1">
      {children}
    </ul>
  </div>
);

const Resume: React.FC = () => {
  const handleDownload = () => {
    const resumeContent = `
# Alejandro Ubilla
+1 772-634-9743 | alexubilla8185@gmail.com | Pompano Beach, FL 33064

## Summary
Results-driven Technology Leader with 15+ years of experience defining strategic roadmaps, leading cross-functional teams, and spearheading initiatives to improve software quality, all to drive business growth and exceptional customer satisfaction.

## Work Experience

### Founder & CEO, TEKGUYZ
*August 2023 - Present*
- Shaped company vision, strategic goals, and technology roadmaps
- Built and launched application with React, TypeScript, Tailwind CSS, hosted on Netlify
- Led digital presence initiatives from GoDaddy domain and Microsoft 365 integration to social media (Instagram, Facebook, LinkedIn)

### Technical Project Manager, Q Link Wireless
*September 2019 - March 2023*
- Defined project scope and requirements, using MantisBT for issue tracking and Asana for project management
- Maintained transparent stakeholder communication via Slack and daily Zoom stand-ups
- Delivered multiple high-quality SDLC projects, including Hello Mobile and Lifeline phone service

### Technical Writer, NandoTech, Inc.
*August 2016 - June 2019*
- Developed user manuals, installation guides, and release notes, boosting product adoption
- Ensured content accuracy by collaborating with engineering and product teams, utilizing Google products
- Managed multiple concurrent projects, consistently delivering on or before strict deadlines, utilizing Trello

### Quality Assurance Team Lead, Advantage Software
*January 2012 - June 2016*
- Conducted thorough testing of desktop, mobile, and web applications, custom web servers, and installers to identify defects, bugs, and usability issues
- Developed and executed test plans, test cases, and test scripts to ensure software functionality
- Managed issue tracking, project management, and revision control for all QA initiatives using Assembla

### Technical Support Analyst, Advantage Software
*August 2009 - January 2012*
- Provided technical support to customers via phone, email, LogMeIn Rescue, forums, and chat, effectively troubleshooting hardware and software issues
- Documented customer interactions and solutions, ensuring clarity and future reference through technical writing

## Education
### Indian River State College
Associate Degree

## Skills
Agile Methodologies, Continuous Integration/Continuous Deployment (CI/CD), Deployment, Product Management, Project Management, Quality Assurance, Testing, Requirements Gathering, Software Development Life Cycle (SDLC), Issue Tracking, User Interface/User Experience (UI/UX), Web & Mobile Development, Hardware Integration, Artificial Intelligence (AI), Digital Strategy, Business Process Improvement, Customer Relations, Technical Writing
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
    <section className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Alejandro Ubilla</h2>
          <div className="mt-2 text-slate-500 dark:text-slate-400 space-y-1 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-x-4">
             <p>+1 772-634-9743</p>
             <p className="hidden sm:inline">|</p>
             <p>alexubilla8185@gmail.com</p>
             <p className="hidden sm:inline">|</p>
             <p>Pompano Beach, FL 33064</p>
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
        <p className="text-slate-600 dark:text-slate-400">
          Results-driven Technology Leader with 15+ years of experience defining strategic roadmaps, leading cross-functional teams, and spearheading initiatives to improve software quality, all to drive business growth and exceptional customer satisfaction.
        </p>
      </ResumeSection>
      
      <ResumeSection title="Work Experience">
        <Job title="Founder & CEO" company="TEKGUYZ" duration="August 2023 - Present">
          <li>Shaped company vision, strategic goals, and technology roadmaps</li>
          <li>Built and launched application with React, TypeScript, Tailwind CSS, hosted on Netlify</li>
          <li>Led digital presence initiatives from GoDaddy domain and Microsoft 365 integration to social media (Instagram, Facebook, LinkedIn)</li>
        </Job>
        <Job title="Technical Project Manager" company="Q Link Wireless" duration="September 2019 - March 2023">
          <li>Defined project scope and requirements, using MantisBT for issue tracking and Asana for project management</li>
          <li>Maintained transparent stakeholder communication via Slack and daily Zoom stand-ups</li>
          <li>Delivered multiple high-quality SDLC projects, including Hello Mobile and Lifeline phone service</li>
        </Job>
         <Job title="Technical Writer" company="NandoTech, Inc." duration="August 2016 - June 2019">
          <li>Developed user manuals, installation guides, and release notes, boosting product adoption</li>
          <li>Ensured content accuracy by collaborating with engineering and product teams, utilizing Google products</li>
          <li>Managed multiple concurrent projects, consistently delivering on or before strict deadlines, utilizing Trello</li>
        </Job>
         <Job title="Quality Assurance Team Lead" company="Advantage Software" duration="January 2012 - June 2016">
          <li>Conducted thorough testing of desktop, mobile, and web applications, custom web servers, and installers to identify defects, bugs, and usability issues</li>
          <li>Developed and executed test plans, test cases, and test scripts to ensure software functionality</li>
          <li>Managed issue tracking, project management, and revision control for all QA initiatives using Assembla</li>
        </Job>
        <Job title="Technical Support Analyst" company="Advantage Software" duration="August 2009 - January 2012">
            <li>Provided technical support to customers via phone, email, LogMeIn Rescue, forums, and chat, effectively troubleshooting hardware and software issues</li>
            <li>Documented customer interactions and solutions, ensuring clarity and future reference through technical writing</li>
        </Job>
      </ResumeSection>

      <ResumeSection title="Education">
         <div>
          <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Indian River State College</h4>
          <p className="text-md text-slate-600 dark:text-slate-400">Associate Degree</p>
         </div>
      </ResumeSection>

      <ResumeSection title="Skills">
        <p className="text-slate-600 dark:text-slate-400">
          Agile Methodologies, Continuous Integration/Continuous Deployment (CI/CD), Deployment, Product Management, Project Management, Quality Assurance, Testing, Requirements Gathering, Software Development Life Cycle (SDLC), Issue Tracking, User Interface/User Experience (UI/UX), Web & Mobile Development, Hardware Integration, Artificial Intelligence (AI), Digital Strategy, Business Process Improvement, Customer Relations, Technical Writing
        </p>
      </ResumeSection>
    </section>
  );
};

export default Resume;