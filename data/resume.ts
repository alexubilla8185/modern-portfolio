export interface Job {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  summary: string;
  experience: Job[];
  education: {
    institution: string;
    degree: string;
  };
  skills: string[];
}

export const resumeData: ResumeData = {
  name: 'Alejandro Ubilla',
  contact: {
    phone: '+1 772-634-9743',
    email: 'alexubilla8185@gmail.com',
    location: '',
  },
  summary: 'Technology Leader with over 15 years of experience driving business growth through strategic roadmaps and high-performing teams. I specialize in leveraging AI solutions to improve product quality and deliver exceptional customer satisfaction.',
  experience: [
    {
      title: 'Founder & CEO',
      company: 'TEKGUYZ',
      duration: 'August 2023 - Present',
      responsibilities: [
        'Shaped company vision, strategic goals, and technology roadmaps',
        'Built and launched application with React, TypeScript, Tailwind CSS, hosted on Netlify',
        'Led digital presence initiatives from GoDaddy domain and Microsoft 365 integration to social media',
      ],
    },
    {
      title: 'Technical Project Manager',
      company: 'Q Link Wireless',
      duration: 'September 2019 - March 2023',
      responsibilities: [
        'Defined project scope and requirements, using MantisBT for issue tracking and Asana for project management',
        'Maintained transparent stakeholder communication via Slack and daily Zoom stand-ups',
        'Delivered multiple high-quality SDLC projects, including Hello Mobile and Lifeline phone service',
      ],
    },
    {
      title: 'Technical Writer',
      company: 'NandoTech, Inc.',
      duration: 'August 2016 - June 2019',
      responsibilities: [
        'Developed user manuals, installation guides, and release notes, boosting product adoption',
        'Ensured content accuracy by collaborating with engineering and product teams, utilizing Google products',
        'Managed multiple concurrent projects, consistently delivering on or before strict deadlines, utilizing Trello',
      ],
    },
    {
        title: 'Quality Assurance Team Lead',
        company: 'Advantage Software',
        duration: 'January 2012 - June 2016',
        responsibilities: [
            'Conducted thorough testing of desktop, mobile, and web applications, custom web servers, and installers to identify defects, bugs, and usability issues',
            'Developed and executed test plans, test cases, and test scripts to ensure software functionality',
            'Managed issue tracking, project management, and revision control for all QA initiatives using Assembla',
        ],
    },
    {
        title: 'Technical Support Analyst',
        company: 'Advantage Software',
        duration: 'August 2009 - January 2012',
        responsibilities: [
            'Provided technical support to customers via phone, email, LogMeIn Rescue, forums, and chat, effectively troubleshooting hardware and software issues',
            'Documented customer interactions and solutions, ensuring clarity and future reference through technical writing',
        ],
    },
  ],
  education: {
    institution: 'Indian River State College',
    degree: 'Associate Degree',
  },
  skills: [
    'Agile Methodologies', 'Continuous Integration/Continuous Deployment (CI/CD)', 'Deployment', 'Product Management', 'Project Management', 'Quality Assurance', 'Testing', 'Requirements Gathering', 'Software Development Life Cycle (SDLC)', 'Issue Tracking', 'User Interface/User Experience (UI/UX)', 'Web & Mobile Development', 'Hardware Integration', 'Artificial Intelligence (AI)', 'Digital Strategy', 'Business Process Improvement', 'Customer Relations', 'Technical Writing'
  ],
};