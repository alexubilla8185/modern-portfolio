import React from 'react';

interface IconProps {
  className?: string;
}

export const GitHubIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 13.5a3.375 3.375 0 00-3.375-3.375L13.5 9.75l-1.125 1.125a3.375 3.375 0 00-3.375 3.375L9 15.75l1.125 1.125a3.375 3.375 0 003.375 3.375L14.625 21l1.125-1.125a3.375 3.375 0 003.375-3.375L18 13.5z" />
    </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

export const FlipIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-5.12-4.13-9.25-9.25-9.25S1 6.88 1 12s4.13 9.25 9.25 9.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 5.13a9.22 9.22 0 0 1 0 13.74" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M23 12h-4" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m19 16 4-4-4-4" />
  </svg>
);


// Tech Icons
const ReactIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.03 2.91c-1.46-.2-2.93-.1-4.39.3-.59.16-1.03.73-1.03 1.35v15.08c0 .62.44 1.19 1.04 1.35 1.46.4 2.92.5 4.38.3 4.14-.59 7.08-4.5 7.08-8.64s-2.94-8.05-7.08-8.64zM12 18.5c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zM12 9.4c-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7S14.7 13.6 14.7 12s-1.2-2.6-2.7-2.6z" /></svg>;
const TypeScriptIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M1.5 1.5v21h21v-21h-21zM11.64 15.11c-.5.4-1.2.6-2.08.6-1.15 0-2.08-.45-2.73-1.3-.65-.9-.95-2.05-.95-3.45 0-1.35.3-2.5.95-3.4.65-.85 1.6-1.3 2.78-1.3.88 0 1.58.2 2.08.6.5.4.75.95.75 1.65h-2.5c0-.25-.1-.45-.25-.6-.15-.15-.4-.25-.7-.25-.55 0-1.05.25-1.4.7-.35.45-.5 1.1-.5 1.95s.15 1.5.5 1.95c.35.45.85.7 1.4.7.3 0 .55-.1.7-.25.15-.15.25-.35.25-.6h2.5c0 .7-.25 1.25-.75 1.65zM20.57 15.3v-1.15h-3.92v-1.1h3.3v-1.15h-3.3v-1.1h3.92V9.65H15.1v6.9h5.47v-1.25z" /></svg>;
const TailwindIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,7.2,3.6,7.2c2.4,0,3.6-1.2,3.6-3.6c0-1.2-0.6-2.4-1.8-2.4 c-0.6,0-1.2,0.6-1.2,1.2c0,0.6,0.6,1.2,1.2,1.2c1.2,0,1.8-1.2,1.8-2.4c0-2.4-1.2-3.6-3.6-3.6c-2.4,0-3,1.2-2.4,3.6 c0.6,2.4,2.4,2.4,3,2.4c0.6,0,1.2-0.6,1.2-1.2c0-0.6-0.6-1.2-1.2-1.2c-1.2,0-1.8,1.2-1.8,2.4c0,2.4,1.2,3.6,3.6,3.6 c3,0,4.8-2.4,3.6-7.2c-0.6-2.4-2.4-4.8-6-4.8ZM6.001,12c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,7.2,3.6,7.2c2.4,0,3.6-1.2,3.6-3.6 c0-1.2-0.6-2.4-1.8-2.4c-0.6,0-1.2,0.6-1.2,1.2c0,0.6,0.6,1.2,1.2,1.2c1.2,0,1.8-1.2,1.8-2.4c0-2.4-1.2-3.6-3.6-3.6 c-2.4,0-3,1.2-2.4,3.6c0.6,2.4,2.4,2.4,3,2.4c0.6,0,1.2-0.6,1.2-1.2c0-0.6-0.6-1.2-1.2-1.2c-1.2,0-1.8,1.2-1.8,2.4 c0,2.4,1.2,3.6,3.6,3.6c3,0,4.8-2.4,3.6-7.2C9.001,13.6,7.801,12,6.001,12Z" /></svg>;
const FramerMotionIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 12H0l6-6-6-6h12l6 6-6 6Zm-6 6h12l6-6-6-6H6l-6 6 6 6Z" /></svg>;
const FirebaseIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="m3.153 18.016 8.6-15.467a.4.4 0 0 1 .74-.016l3.43 5.488-5.71 10.3zM15.48 10.95l-3.32-5.73-8.8 15.35c-.45.78.4 1.25.92.76zM18.8 14.3l-1.9-3.2-4.9 8.5c-.3.65.5.95.8.4z" /></svg>;
const GeminiIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3.15 15.11a.75.75 0 01-1.06 1.06l-2.84-2.83a.75.75 0 010-1.06l2.84-2.83a.75.75 0 011.06 1.06L9.91 12l2.94 2.94V15.1zm.65-8.22a.75.75 0 011.06-1.06l2.84 2.83a.75.75 0 010 1.06l-2.84 2.83a.75.75 0 01-1.06-1.06L11.59 12l-2.09-2.09v-.02zm6.2-1.04a.75.75 0 010 1.06L13.76 12l1.94 1.94a.75.75 0 01-1.06 1.06l-2.84-2.83a.75.75 0 010-1.06l2.84-2.83a.75.75 0 011.06 0z" /></svg>;
const CodeIcon: React.FC<IconProps> = (props) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" /></svg>;

const techIconMap: { [key: string]: React.FC<IconProps> } = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  'tailwind css': TailwindIcon,
  'framer motion': FramerMotionIcon,
  firebase: FirebaseIcon,
  'gemini api': GeminiIcon,
  webrtc: CodeIcon,
  'three.js': CodeIcon,
  'socket.io': CodeIcon,
  'maps api': CodeIcon,
  nlp: CodeIcon,
  security: CodeIcon,
  'p2p': CodeIcon,
  // Add other specific icons here
};

export const TechIcon: React.FC<{ tech: string; className?: string }> = ({ tech, className }) => {
  const IconComponent = techIconMap[tech.toLowerCase()] || CodeIcon;
  return <IconComponent className={className} />;
};